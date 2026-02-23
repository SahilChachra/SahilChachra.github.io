export interface Experience {
  id: string;
  role: string;
  company: string;
  companyDesc: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  bullets: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: "stealth",
    role: "Founding AI Engineer",
    company: "Stealth Startup",
    companyDesc: "AI Platform · Seed Stage",
    location: "Bangalore, India",
    startDate: "Sep 2025",
    endDate: "",
    current: true,
    bullets: [
      "Architecting and building the core AI platform from the ground up — LLM orchestration, RAG pipelines, and real-time inference infrastructure.",
      "Designed a multi-agent framework capable of handling complex, long-horizon tasks with reliable tool use and memory management.",
      "Reduced model inference latency by 60% through batching strategies, quantization, and caching layers at scale.",
    ],
    tags: ["LLMs", "RAG", "Multi-Agent Systems", "Python", "FastAPI", "GCloud"],
  },
  {
    id: "avathon",
    role: "Senior AI Engineer",
    company: "Avathon",
    companyDesc: "Computer Vision AI Platform · Series B",
    location: "Bengaluru, India",
    startDate: "Dec 2022",
    endDate: "Aug 2025",
    current: false,
    bullets: [
      "Led development and maintenance of 30+ computer vision use cases scaling to 600+ cameras, ensuring production-grade reliability for enterprise clients.",
      "Built a person re-identification (ReID) pipeline to analyze in-store customer behavior — tracking journeys across cameras, mapping zone dwell time, and measuring staff engagement.",
      "Engineered an LLM and RAG-powered system to automate natural language requirements translation into structured CV pipelines for the VAIA platform, cutting development cycles by 20%.",
      "Upgraded the VAIA platform with multimodal models (LLaVA, Qwen) improving accuracy by up to 95%; trained and fine-tuned YOLO and EfficientNet models deployed across 350 cameras.",
    ],
    tags: ["Python", "C++", "Computer Vision", "LLMs", "RAG", "PyTorch", "YOLO", "Multimodal Models"],
  },
  {
    id: "tcs",
    role: "Deep Learning Engineer",
    company: "Tata Consultancy Services",
    companyDesc: "IT Services & Consulting · Fortune 500",
    location: "India",
    startDate: "Jul 2021",
    endDate: "Dec 2022",
    current: false,
    bullets: [
      "Accelerated data annotation pipelines using deep learning models for the Data Annotation Studio within the Smart Mobility Group.",
      "Integrated trained CV models into customer-facing products, delivering solutions across mobility and automotive domains.",
      "Designed and conducted internal training sessions on Computer Vision and Deep Learning for team upskilling.",
      "Awarded the Technical Excellence Award for outstanding contributions to the organization.",
    ],
    tags: ["Python", "Deep Learning", "Computer Vision", "PyTorch", "Data Annotation"],
  },
];
