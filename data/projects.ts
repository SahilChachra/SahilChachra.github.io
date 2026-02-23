export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "agent-os",
    title: "AgentOS",
    description:
      "An open-source orchestration framework for building reliable multi-agent AI systems. Features persistent memory, tool registry, structured planning, and human-in-the-loop checkpointing.",
    tags: ["Python", "LLMs", "Multi-Agent", "FastAPI", "Redis"],
    githubUrl: "https://github.com/sahilchachra/agent-os",
    featured: true,
  },
  {
    id: "rag-bench",
    title: "RAGBench",
    description:
      "A comprehensive evaluation framework for RAG pipelines. Tests retrieval quality, faithfulness, and answer relevance across 12 benchmark datasets and 5 chunking strategies.",
    tags: ["Python", "Evaluation", "RAG", "Vector DBs", "Hugging Face"],
    githubUrl: "https://github.com/sahilchachra/rag-bench",
    liveUrl: "https://ragbench.example.com",
    featured: true,
  },
  {
    id: "llm-cache",
    title: "SemanticCache",
    description:
      "A semantic caching layer for LLM APIs that uses embedding similarity to serve cached responses for semantically equivalent queries, cutting API costs by up to 70%.",
    tags: ["Python", "TypeScript", "Embeddings", "Redis", "FastAPI"],
    githubUrl: "https://github.com/sahilchachra/semantic-cache",
    featured: false,
  },
  {
    id: "fine-tune-lab",
    title: "FineTuneLab",
    description:
      "A lightweight CLI + UI for running fine-tuning experiments on open-source LLMs. Supports LoRA, QLoRA, and full fine-tuning with automatic experiment tracking.",
    tags: ["Python", "PyTorch", "LoRA", "Hugging Face", "Weights & Biases"],
    githubUrl: "https://github.com/sahilchachra/fine-tune-lab",
    featured: false,
  },
];
