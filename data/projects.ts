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
    title: "Open VLM Eval",
    description:
      "[In Progress] Product teams building Computer Vision pipelines are now using VLMs. The rate at which VLMs are being released, its difficult to manually benchmark them for their usecase. This solves the problem!",
    tags: ["Python", "PyTorch", "LoRA", "Hugging Face", "Weights & Biases"],
    githubUrl: "https://github.com/SahilChachra/openvlm-eval",
    featured: false,
  },
];
