export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  readTime: string;
  thumbnail: string | null;
  gradient: string; // fallback when no thumbnail
}

const GRADIENTS = [
  "from-violet-600 via-purple-600 to-indigo-700",
  "from-cyan-600 via-teal-600 to-emerald-700",
  "from-amber-500 via-orange-600 to-rose-700",
  "from-pink-600 via-rose-600 to-red-700",
];

/** Extract CDATA content from a named tag. */
function cdata(xml: string, tag: string): string {
  const re = new RegExp(
    `<${tag}(?:\\s[^>]*)?><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`,
    "i"
  );
  return re.exec(xml)?.[1].trim() ?? "";
}

/** Extract plain text content from a named tag. */
function plain(xml: string, tag: string): string {
  const re = new RegExp(`<${tag}(?:\\s[^>]*)?>([^<]*)<\\/${tag}>`, "i");
  return re.exec(xml)?.[1].trim() ?? "";
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function readTime(html: string): string {
  const words = stripHtml(html).split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

/** Extract the src of the first <img> in an HTML string. */
function firstImage(html: string): string | null {
  return html.match(/<img[^>]+src="([^"]+)"/i)?.[1] ?? null;
}

function formatDate(raw: string): string {
  const d = new Date(raw);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export async function fetchMediumPosts(
  username: string,
  limit = 4
): Promise<MediumPost[]> {
  try {
    const res = await fetch(`https://medium.com/feed/@${username}`, {
      next: { revalidate: 3600 }, // refresh at most once per hour
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
    });
    if (!res.ok) return [];

    const xml = await res.text();
    const posts: MediumPost[] = [];
    const itemRe = /<item>([\s\S]*?)<\/item>/g;
    let m: RegExpExecArray | null;

    while ((m = itemRe.exec(xml)) !== null && posts.length < limit) {
      const item = m[1];

      const title = cdata(item, "title") || plain(item, "title");
      const link = plain(item, "link"); // full canonical URL per feed
      const pubDate = plain(item, "pubDate");
      const content = cdata(item, "content:encoded");
      const descHtml = cdata(item, "description");

      // Build excerpt from description or stripped content
      const raw = stripHtml(descHtml || content);
      const description =
        raw.length > 160 ? raw.slice(0, 157).replace(/\s\S*$/, "") + "…" : raw;

      if (!title || !link) continue;

      posts.push({
        title,
        link,
        pubDate: formatDate(pubDate),
        description,
        readTime: readTime(content),
        thumbnail: firstImage(content),
        gradient: GRADIENTS[posts.length % GRADIENTS.length],
      });
    }

    return posts;
  } catch (err) {
    console.error("[fetchMediumPosts]", err);
    return [];
  }
}
