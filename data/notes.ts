export interface Note {
  title: string;
  filename: string;
  category: string;
  description: string;
}

export const notes: Note[] = [
  {
    title: "LLM Fine-Tuning Handbook",
    filename: "llm_finetuning_handbook.html",
    category: "Training",
    description: "Engineering reference covering SFT, LoRA, PEFT, and production fine-tuning workflows.",
  },
  {
    title: "LLM/VLM Quantization & Inference Engineering",
    filename: "llm_quantization_handbook.html",
    category: "Inference",
    description: "Handbook on quantization strategies — GPTQ, AWQ, GGUF — and inference optimization.",
  },
  {
    title: "AWQ — Complete Guide",
    filename: "awq_detailed_guide.html",
    category: "Inference",
    description: "Deep dive into Activation-aware Weight Quantization: theory, calibration, and deployment.",
  },
  {
    title: "vLLM KV Cache — Field Notes",
    filename: "vllm-kvcache-notes.html",
    category: "Inference",
    description: "Practical notes on vLLM's KV cache internals, paged attention, and throughput tuning.",
  },
  {
    title: "Local LLM Scaling Analysis",
    filename: "local_llm_scaling_analysis.html",
    category: "Inference",
    description: "What isn't scaling in local LLMs — bottlenecks, hardware ceilings, and real-world limits.",
  },
  {
    title: "DFlash — Deep Dive Notes",
    filename: "dflash-v2.html",
    category: "Inference",
    description: "Notes on flash attention variants and memory-efficient attention mechanisms.",
  },
  {
    title: "RAG Deep Dive — Interview Study Guide",
    filename: "rag_study_guide.html",
    category: "RAG",
    description: "Comprehensive RAG study guide covering retrieval, chunking, reranking, and evaluation.",
  },
  {
    title: "RAG Deep Dive — Part 2",
    filename: "rag_deep_dive_notes.html",
    category: "RAG",
    description: "Advanced RAG patterns: hybrid search, agentic retrieval, and production architecture.",
  },
  {
    title: "LLM Memory Systems",
    filename: "llm_memory_notes.html",
    category: "Agents",
    description: "Engineering notes on short-term, long-term, and episodic memory in LLM-based systems.",
  },
  {
    title: "Agentic AI vs MCP",
    filename: "agentic_ai_vs_mcp_notes.html",
    category: "Agents",
    description: "Engineering notes comparing agentic AI architectures and the Model Context Protocol.",
  },
  {
    title: "Multi-Agent AI Systems — Production Guide",
    filename: "smart_claims_processor_guide_2.html",
    category: "Agents",
    description: "Building production-grade multi-agent systems: orchestration, reliability, and tooling.",
  },
  {
    title: "Deep Learning Training Handbook",
    filename: "dl_training_handbook.html",
    category: "Training",
    description: "Engineer's handbook for DL training: optimizers, schedulers, mixed precision, and debugging.",
  },
  {
    title: "Claude Internals — Deep Notes",
    filename: "claude_internals_deep_notes.html",
    category: "Models",
    description: "Deep notes on Claude's architecture, training approach, and constitutional AI.",
  },
];

export const noteCategories = ["All", ...Array.from(new Set(notes.map((n) => n.category)))];
