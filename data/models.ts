export interface ModelFamily {
  base: string;
  origin: string;
  task: string;
  variants: string[];
  note: string;
  hfUrl: string;
}

// Grouped by base model. Quantization variants and origins verified against
// the HuggingFace API (huggingface.co/sahilchachra) — 23 published models.
export const modelFamilies: ModelFamily[] = [
  {
    base: "Granite 4.1 8B",
    origin: "ibm-granite/granite-4.1-8b",
    task: "Reasoning · Code · Tool Use",
    variants: ["4-bit", "5-bit", "6-bit", "8-bit", "mixed4_6", "MX FP4", "MX FP8"],
    note: "Full quant sweep — affine 4/5/6/8-bit, mixed-precision, and MX FP4/FP8.",
    hfUrl: "https://huggingface.co/sahilchachra/granite-4.1-8b-mxfp8-mlx",
  },
  {
    base: "Hy-MT2 7B",
    origin: "tencent/Hy-MT2-7B",
    task: "Translation · 40+ Languages",
    variants: ["4-bit", "8-bit"],
    note: "8-bit and 4-bit MLX builds of Tencent's multilingual translation model.",
    hfUrl: "https://huggingface.co/sahilchachra/hy-mt2-7b-8bit-mlx",
  },
  {
    base: "Hy-MT2 1.8B",
    origin: "tencent/Hy-MT2-1.8B",
    task: "Translation · On-device",
    variants: ["4-bit", "8-bit", "MX FP4", "MX FP8"],
    note: "Compact translation model — runs entirely on-device on Apple Silicon.",
    hfUrl: "https://huggingface.co/sahilchachra/hy-mt2-1.8b-mxfp8-mlx",
  },
  {
    base: "LFM2.5 8B A1B",
    origin: "LiquidAI/LFM2.5-8B-A1B",
    task: "MoE · Text Generation",
    variants: ["Uncensored", "OptiQ 5bpw", "MX FP4"],
    note: "Liquid's MoE model — an abliterated uncensored finetune plus OptiQ and MX FP4 quants.",
    hfUrl: "https://huggingface.co/sahilchachra/LFM2.5-8B-A1B-Uncensored",
  },
  {
    base: "Mellum2 12B",
    origin: "JetBrains/Mellum2-12B-A2.5B-Thinking",
    task: "Code · Reasoning",
    variants: ["OptiQ 5bpw", "MX FP4"],
    note: "JetBrains' code-reasoning model in OptiQ 5bpw and MX FP4.",
    hfUrl: "https://huggingface.co/sahilchachra/mellum2-12b-a2_5b-thinking-optiq-5bpw-mlx",
  },
  {
    base: "MiniCPM5 1B",
    origin: "openbmb/MiniCPM5-1B",
    task: "Reasoning · On-device",
    variants: ["Uncensored", "OptiQ 5bpw", "8-bit"],
    note: "Compact reasoning model — an uncensored finetune alongside OptiQ and 8-bit builds.",
    hfUrl: "https://huggingface.co/sahilchachra/minicpm5-1b-8bit-mlx",
  },
  {
    base: "LocateAnything 3B",
    origin: "nvidia/LocateAnything-3B",
    task: "Vision · Visual Grounding",
    variants: ["MX FP4"],
    note: "NVIDIA's visual-grounding VLM, quantized to MX FP4 for Apple Silicon.",
    hfUrl: "https://huggingface.co/sahilchachra/locateanything-3b-mxfp4-mlx",
  },
  {
    base: "Qwen3 0.6B (Merged)",
    origin: "suayptalha/Qwen3-0.6B-{Code,Medical}-Expert",
    task: "Code + Medical · Model Merge",
    variants: ["Domain fusion"],
    note: "A domain-fusion merge of Code and Medical experts — the experiment behind my Medium case study.",
    hfUrl: "https://huggingface.co/sahilchachra/qwen3-0.6-code-med-merged",
  },
];

export interface ModelStat {
  value: string;
  label: string;
}

export const modelStats: ModelStat[] = [
  { value: "23", label: "Models published" },
  { value: "7", label: "Base models ported" },
  { value: "8", label: "Quant formats used" },
  { value: "M5 Pro", label: "Benchmarked on" },
];
