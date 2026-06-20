export interface HFModel {
  id: string;
  downloads: number;
  likes: number;
  task: string | null;
}

export async function fetchHFModels(author: string): Promise<HFModel[]> {
  const res = await fetch(
    `https://huggingface.co/api/models?author=${author}&sort=downloads&direction=-1&limit=100`
  );
  if (!res.ok) throw new Error(`HF API ${res.status}`);
  const data: Record<string, unknown>[] = await res.json();
  return data.map((m) => ({
    id: (m.modelId ?? m.id ?? "") as string,
    downloads: (m.downloads as number) ?? 0,
    likes: (m.likes as number) ?? 0,
    task: (m.pipeline_tag as string | null) ?? null,
  }));
}

export function modelDisplayName(id: string): string {
  const name = id.split("/").pop() ?? id;
  return name
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bMlx\b/g, "MLX")
    .replace(/\bMxfp(\d)/g, "MX FP$1")
    .replace(/\bFp(\d+)\b/g, "FP$1")
    .replace(/\bAwq\b/g, "AWQ")
    .replace(/\bNvfp(\d)/g, "NVFP$1")
    .replace(/\bOptiq\b/g, "OptiQ")
    .replace(/\bLfm\b/g, "LFM")
    .replace(/\bVlm\b/g, "VLM")
    .replace(/\bInt(\d)\b/g, "INT$1");
}
