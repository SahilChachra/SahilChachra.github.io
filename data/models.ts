export interface ModelFamily {
  base: string;
  origin: string;
  task: string;
  variants: string[];
  note: string;
  hfUrl: string;
  /** HF model ID (author/name) matching this family's flagship model in the API */
  flagshipId: string;
  featured: boolean;
  downloads: number;
}

export const modelFamilies: ModelFamily[] = [
  {
    base: "Mellum2 12B Thinking",
    origin: "JetBrains/Mellum2-12B-A2.5B-Thinking",
    task: "Code · Reasoning · MoE",
    variants: ["OptiQ 5bpw", "MX FP4"],
    note: "Per-layer KL-sensitivity OptiQ quant at 5bpw — 95 tok/s on M5 Pro, MMLU 90%, HumanEval 100%.",
    flagshipId: "sahilchachra/mellum2-12b-a2_5b-thinking-optiq-5bpw-mlx",
    hfUrl: "https://huggingface.co/sahilchachra/mellum2-12b-a2_5b-thinking-optiq-5bpw-mlx",
    featured: true,
    downloads: 940,
  },
  {
    base: "MiniCPM5 1B",
    origin: "openbmb/MiniCPM5-1B",
    task: "Reasoning · On-device",
    variants: ["Uncensored", "OptiQ 5bpw", "8-bit"],
    note: "Compact reasoning model — abliteration-based uncensored fine-tune plus OptiQ and 8-bit MLX builds.",
    flagshipId: "sahilchachra/minicpm5-1b-8bit-mlx",
    hfUrl: "https://huggingface.co/sahilchachra/minicpm5-1b-8bit-mlx",
    featured: true,
    downloads: 960,
  },
  {
    base: "LFM2.5 8B A1B",
    origin: "LiquidAI/LFM2.5-8B-A1B",
    task: "MoE · Text Generation",
    variants: ["Uncensored", "Reasoning", "OptiQ 5bpw", "MX FP4"],
    note: "Abliteration + LoRA SFT for the uncensored build; OptiQ 5bpw and MX FP4 MLX quants alongside.",
    flagshipId: "sahilchachra/LFM2.5-8B-A1B-Uncensored",
    hfUrl: "https://huggingface.co/sahilchachra/LFM2.5-8B-A1B-Uncensored",
    featured: true,
    downloads: 832,
  },
  {
    base: "LocateAnything 3B",
    origin: "nvidia/LocateAnything-3B",
    task: "Vision · Visual Grounding",
    variants: ["MX FP4", "NVFP4A16", "AWQ W4A16"],
    note: "NVIDIA's VLM for reference-expression localization. MX FP4 cuts memory from 7 GB → 2.7 GB, 3× decode speedup.",
    flagshipId: "sahilchachra/locateanything-3b-mxfp4-mlx",
    hfUrl: "https://huggingface.co/sahilchachra/locateanything-3b-mxfp4-mlx",
    featured: true,
    downloads: 665,
  },
  {
    base: "Granite 4.1 8B",
    origin: "ibm-granite/granite-4.1-8b",
    task: "Reasoning · Code · Tool Use",
    variants: ["4-bit", "5-bit", "6-bit", "8-bit", "mixed4_6", "MX FP4", "MX FP8"],
    note: "Full quant sweep across affine and MX formats. MX FP8 = 2× decode speed at half the memory vs FP16.",
    flagshipId: "sahilchachra/granite-4.1-8b-mxfp8-mlx",
    hfUrl: "https://huggingface.co/sahilchachra/granite-4.1-8b-mxfp8-mlx",
    featured: false,
    downloads: 565,
  },
  {
    base: "Hy-MT2 7B",
    origin: "tencent/Hy-MT2-7B",
    task: "Translation · 40+ Languages",
    variants: ["4-bit", "8-bit"],
    note: "8-bit affine matches FP16 translation quality (chrF++ 60.23 vs 60.24) at half the disk size.",
    flagshipId: "sahilchachra/hy-mt2-7b-8bit-mlx",
    hfUrl: "https://huggingface.co/sahilchachra/hy-mt2-7b-8bit-mlx",
    featured: false,
    downloads: 253,
  },
  {
    base: "Hy-MT2 1.8B",
    origin: "tencent/Hy-MT2-1.8B",
    task: "Translation · On-device",
    variants: ["4-bit", "8-bit", "MX FP4", "MX FP8"],
    note: "Tencent's smallest translation model — runs entirely on-device on Apple Silicon.",
    flagshipId: "sahilchachra/hy-mt2-1.8b-mxfp8-mlx",
    hfUrl: "https://huggingface.co/sahilchachra/hy-mt2-1.8b-mxfp8-mlx",
    featured: false,
    downloads: 383,
  },
  {
    base: "Qwen3 0.6B (Merged)",
    origin: "suayptalha/Qwen3-0.6B-{Code,Medical}-Expert",
    task: "Code + Medical · Model Merge",
    variants: ["Domain fusion"],
    note: "Domain-fusion merge of Code and Medical experts — the experiment behind my Medium case study.",
    flagshipId: "sahilchachra/qwen3-0.6-code-med-merged",
    hfUrl: "https://huggingface.co/sahilchachra/qwen3-0.6-code-med-merged",
    featured: false,
    downloads: 4,
  },
];

export interface MoreModel {
  name: string;
  downloads: number;
  hfUrl: string;
}

export const moreModels: MoreModel[] = [
  { name: "VibeThinker 3B OptiQ", downloads: 272, hfUrl: "https://huggingface.co/sahilchachra/vibethinker-3b-optiq-5bpw-mlx" },
  { name: "Qwable v1 NVFP4", downloads: 253, hfUrl: "https://huggingface.co/sahilchachra/Qwable-v1-NVFP4A16" },
  { name: "Granite 4.1 8B", downloads: 565, hfUrl: "https://huggingface.co/sahilchachra/granite-4.1-8b-mxfp8-mlx" },
  { name: "LFM2.5 1.2B JP", downloads: 240, hfUrl: "https://huggingface.co/sahilchachra/lfm2.5-1.2b-jp-optiq-5bpw-mlx" },
  { name: "VibeThinker 3B MX FP8", downloads: 135, hfUrl: "https://huggingface.co/sahilchachra/vibethinker-3b-mxfp8-mlx" },
  { name: "Hy-MT2 7B", downloads: 253, hfUrl: "https://huggingface.co/sahilchachra/hy-mt2-7b-8bit-mlx" },
  { name: "Hy-MT2 1.8B", downloads: 383, hfUrl: "https://huggingface.co/sahilchachra/hy-mt2-1.8b-mxfp8-mlx" },
  { name: "NorthMini Code MX FP4", downloads: 191, hfUrl: "https://huggingface.co/sahilchachra/north-mini-code-mxfp4-mlx" },
  { name: "Supra 50M Uncensored", downloads: 147, hfUrl: "https://huggingface.co/sahilchachra/Supra-50M-Uncensored" },
  { name: "Supra 50M MLX", downloads: 159, hfUrl: "https://huggingface.co/sahilchachra/supra-50m-instruct-optiq-5bpw-mlx" },
  { name: "FastContext 1.0 4B", downloads: 106, hfUrl: "https://huggingface.co/sahilchachra/fastcontext-1.0-4b-sft-mxfp8-mlx" },
  { name: "Quasar Preview 4-bit", downloads: 51, hfUrl: "https://huggingface.co/sahilchachra/Quasar-Preview-mlx-4bit" },
  { name: "CheXone MX FP4", downloads: 56, hfUrl: "https://huggingface.co/sahilchachra/chexone-mxfp4-mlx" },
  { name: "Qwen3 Code+Med Merge", downloads: 4, hfUrl: "https://huggingface.co/sahilchachra/qwen3-0.6-code-med-merged" },
  { name: "LFM2.5 Embedding 350M", downloads: 6, hfUrl: "https://huggingface.co/sahilchachra/LFM2.5-Embedding-350M-int8" },
  { name: "LFM2.5 ColBERT 350M", downloads: 8, hfUrl: "https://huggingface.co/sahilchachra/LFM2.5-ColBERT-350M-int8" },
];

export interface ModelStat {
  value: string;
  label: string;
}

export const modelStats: ModelStat[] = [
  { value: "60+", label: "Models published" },
  { value: "15+", label: "Base models ported" },
  { value: "MLX · AWQ · NVFP4 · OptiQ", label: "Quant formats" },
  { value: "M5 Pro", label: "Benchmarked on" },
];
