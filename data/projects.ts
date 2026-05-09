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
    id: "llm-safety-middleware",
    title: "LLM Safety Middlware",
    description:
      "An open-source and production-grade proxy that puts safety checks between your users and any LLM backend.",
    tags: ["LLMs", "Python", "Flask", "Safety", "Custom Deployment", "Local LLM"],
    githubUrl: "https://github.com/SahilChachra/LLM-Safety-Middleware",
    featured: true,
  },
  {
    id: "llm-refusal-finetuning",
    title: "Refusal Finetuning",
    description:
      "Let's re-adapt the decision boundary of LLMs!",
    tags: ["Python", "Evaluation", "RAG", "Vector DBs", "Hugging Face"],
    githubUrl: "https://github.com/SahilChachra/Refusal-Finetuning",
    featured: true,
  },
  {
    id: "llm-mering",
    title: "LLM Merging",
    description:
      "What happens if we merge LLMs finetuned on different dataset? Lets find out!",
    tags: ["Python", "TypeScript", "Embeddings", "Redis", "FastAPI"],
    githubUrl: "https://github.com/SahilChachra/LLM-Merging",
    featured: false,
  },
  {
    id: "open-vlm-eval",
    title: "VLM-Bench",
    description:
      "Self-hosted benchmarking dashboard for Vision Language Models. Upload image datasets, register HuggingFace or local models, run GPU-accelerated evaluation jobs via vLLM, and compare accuracy, throughput, and latency on a live leaderboard.",
    tags: ["Python", "FastAPI", "React", "TypeScript", "vLLM", "Docker", "BERT Score", "SQLAlchemy"],
    githubUrl: "https://github.com/SahilChachra/VLM-Bench",
    featured: true,
  },
];
