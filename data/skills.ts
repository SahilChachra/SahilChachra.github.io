export interface SkillCategory {
  id: string;
  title: string;
  icon: string; // lucide icon name
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: "Code2",
    skills: ["Python", "C++"],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    icon: "Layers",
    skills: ["PyTorch", "LangChain", "FastAPI", "OpenCV", "CUDA","DeepStream", "CrewAI"],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: "Brain",
    skills: ["LLMs", "RAG", "Fine-tuning", "Multi-Agent Systems", "Computer Vision", "Multimodal Models", "Embeddings", "MLOps"],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: "Server",
    skills: ["GCP", "Docker", "Redis", "QDrant", "Flask"],
  },
];
