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
    title: "LLM Safety Middleware",
    description:
      "Most teams bolt safety on after deployment. This is a drop-in proxy that intercepts every LLM call — running configurable safety checks, content filters, and policy guardrails before the request reaches the model. Open-source, production-grade, zero changes to your existing LLM integration.",
    tags: ["LLMs", "Python", "Flask", "Safety", "Proxy", "Local LLM"],
    githubUrl: "https://github.com/SahilChachra/LLM-Safety-Middleware",
    featured: true,
  },
  {
    id: "open-vlm-eval",
    title: "VLM-Bench",
    description:
      "Evaluating VLMs in production requires more than accuracy scores — you need throughput, latency, and cost curves too. Self-hosted benchmarking platform: upload image datasets, register HuggingFace or local models, run GPU-accelerated evaluation via vLLM, and compare the full performance profile on a live leaderboard.",
    tags: ["Python", "FastAPI", "React", "TypeScript", "vLLM", "Docker", "BERT Score", "SQLAlchemy"],
    githubUrl: "https://github.com/SahilChachra/VLM-Bench",
    featured: true,
  },
  {
    id: "llm-refusal-finetuning",
    title: "Refusal Fine-tuning",
    description:
      "LLMs have a refusal problem — they refuse too much or not enough. This project maps the refusal decision boundary, then reshapes it through targeted fine-tuning. The goal: principled control over refusal behavior without degrading general capability.",
    tags: ["Python", "Fine-tuning", "Evaluation", "Hugging Face", "Alignment"],
    githubUrl: "https://github.com/SahilChachra/Refusal-Finetuning",
    featured: true,
  },
  {
    id: "llm-merging",
    title: "LLM Merging",
    description:
      "When you merge two models each fine-tuned on a different domain, do you get a smarter generalist or a confused compromise? This project maps the answer empirically — testing weight interpolation, SLERP, and task vectors across domain-specialized checkpoints.",
    tags: ["Python", "Model Merging", "SLERP", "Embeddings", "Research"],
    githubUrl: "https://github.com/SahilChachra/LLM-Merging",
    featured: false,
  },
];
