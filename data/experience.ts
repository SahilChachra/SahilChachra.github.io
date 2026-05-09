export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
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
    id: "blue",
    role: "AI Architect",
    company: "BLUE",
    companyUrl: "https://myblue.ai/",
    companyDesc: "Vision Analytics for Warehouses and Retail · Pre-Seed Stage",
    location: "Bangalore, India",
    startDate: "Apr 2026",
    endDate: "",
    current: true,
    bullets: [
      "Architecting a Visual Analytics Pipeline for retail customers using state-of-the-art VLMs — delivering granular insights on store layout, customer behavior, and staff interactions by combining VLMs and LLMs in a unified inference stack.",
      "Deploying VLMs across NVIDIA GPU servers and edge devices, optimizing the full inference stack for real-time throughput under hardware constraints.",
      "Researching quantization strategies (INT4/INT8/FP16), benchmarking model speed and accuracy trade-offs, and profiling latency to identify and eliminate bottlenecks in the VLM pipeline.",
      "Working on a patented video compression algorithm with hardware-accelerated execution via Intel VAAPI on edge devices.",
    ],
    tags: ["LLMs", "VLMs", "Video Compression", "Inference Engineering", "VLM Benchmarking", "Python", "Claude Code", "Local AI Inferencing"],
  },
  {
    id: "stealth",
    role: "Founding AI Engineer",
    company: "Stealth Startup",
    companyDesc: "AI Platform for Factories · Pre-Seed Stage",
    location: "Bangalore, India",
    startDate: "Sep 2025",
    endDate: "Apr 2026",
    current: false,
    bullets: [
      "Architected and built an AI-native factory intelligence platform enabling end-to-end manufacturing design and optimization — combining LLM orchestration, structured RAG pipelines, semantic search, and real-time inference infrastructure.",
      "Designed a production-grade multi-agent framework capable of long-horizon reasoning across CAD metadata, workflow steps, machine catalogs, and line constraints — with reliable tool invocation, memory management, and multi-step verification.",
    ],
    tags: ["LLMs", "RAG", "Multi-Agent Systems", "Python", "FastAPI", "GCloud"],
  },
  {
    id: "avathon",
    role: "Senior AI Engineer",
    company: "Avathon",
    companyDesc: "Computer Vision AI Platform · Series D",
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
    tags: ["Python", "C++", "Computer Vision", "LLMs", "DeepStream", "CUDA", "PyTorch", "YOLO", "Multimodal Models"],
  },
  {
    id: "tcs",
    role: "Deep Learning Engineer",
    company: "Tata Consultancy Services",
    companyDesc: "IT Services & Consulting · Fortune 500",
    location: "Remote",
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
