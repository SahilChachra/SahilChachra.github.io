export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  url: string;
  gradient: string; // Tailwind gradient classes for thumbnail
}

export const articles: Article[] = [
  {
    id: "rag-production",
    title: "RAG in Production: What No One Tells You About Real-World Retrieval",
    excerpt:
      "Beyond naive chunking and cosine similarity — a deep dive into the retrieval failures we hit in production and how we fixed them.",
    date: "Jan 2025",
    readTime: "12 min read",
    url: "https://medium.com/@sahilchachra",
    gradient: "from-violet-600 via-purple-600 to-indigo-700",
  },
  {
    id: "multi-agent",
    title: "Building Reliable Multi-Agent Systems: Lessons from Six Months in the Trenches",
    excerpt:
      "Multi-agent systems sound great in demos. Here's what happens when you try to ship them to real users and what we learned doing it.",
    date: "Nov 2024",
    readTime: "9 min read",
    url: "https://medium.com/@sahilchachra",
    gradient: "from-cyan-600 via-teal-600 to-emerald-700",
  },
  {
    id: "llm-latency",
    title: "Taming LLM Latency: A Practical Guide to Faster Inference",
    excerpt:
      "From speculative decoding to KV cache optimization — a practitioner's breakdown of every lever we pulled to cut p99 latency.",
    date: "Sep 2024",
    readTime: "14 min read",
    url: "https://medium.com/@sahilchachra",
    gradient: "from-amber-500 via-orange-600 to-rose-700",
  },
  {
    id: "founding-engineer",
    title: "What It Actually Means to Be a Founding AI Engineer",
    excerpt:
      "You're not just an engineer. You're a researcher, an architect, a product thinker, and sometimes the person fixing the deployment at 2am.",
    date: "Jul 2024",
    readTime: "7 min read",
    url: "https://medium.com/@sahilchachra",
    gradient: "from-pink-600 via-rose-600 to-red-700",
  },
];
