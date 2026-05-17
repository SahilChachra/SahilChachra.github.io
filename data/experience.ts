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
  type?: "full-time" | "freelance";
  narrative: string;
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
    narrative:
      "Joined a pre-seed startup building vision analytics for physical retail spaces. No existing AI stack, no handoff — I design the architecture, build the pipeline, and ship to production, all at once.",
    bullets: [
      "Built a real-time multi-camera VLM pipeline from scratch — asyncio-native, with a sliding-window persistence gate that filters hallucinations before they reach the backend, cutting false alert rates without adding latency.",
      "Developed a patented hardware-accelerated video compression algorithm running on Intel VAAPI at the edge, maintaining the visual fidelity VLM inference requires while reducing bandwidth consumption.",
      "Profiled the full inference stack across INT4/INT8/FP16 quantization levels and GPU/edge targets — found and eliminated the bottlenecks preventing real-time SLA compliance.",
    ],
    tags: ["VLMs", "Video Compression", "Edge AI", "asyncio", "Intel VAAPI", "vLLM", "LiteLLM", "Python"],
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
    narrative:
      "First engineer hired at a pre-seed startup building AI for factory floors. The domain was manufacturing — CAD files, machine catalogs, compliance specs, and factory-floor constraints. The job was to make an LLM reason reliably across all of it, at production scale, with no prior art to follow.",
    bullets: [
      "Designed a 3-tier, 27-agent orchestration framework — role-based CrewAI agents, async direct-LLM agents, and an 11-stage DAG task executor — decomposing complex manufacturing tasks into verifiable, structured sub-problems.",
      "Built a 7-stage document enrichment pipeline (extract → plan → classify → enrich → normalize → cross-doc → assemble) with conditional enrichers and concurrency semaphores handling 5 document modalities in parallel.",
      "Integrated bidirectional MES sync with Odoo (JSON-RPC 2.0), connecting AI-generated factory plans to live shop floor data for planned-vs-actual dashboards — the first time those two worlds talked to each other.",
    ],
    tags: ["LLMs", "Multi-Agent Systems", "RAG", "CrewAI", "FastAPI", "Pydantic", "Firestore", "GCP"],
  },
  {
    id: "mesa",
    role: "Visiting AI Mentor",
    company: "Mesa School of Business",
    companyDesc: "PG & UG AI Hackathons · Neos Kosmos Technologies",
    location: "Bangalore, India",
    startDate: "Jul 2025",
    endDate: "",
    current: true,
    type: "freelance",
    narrative:
      "Not everything I do is full-time. At Mesa I mentor student teams during intensive AI hackathons — helping founders and postgrads go from idea to working prototype using modern AI tooling, without needing deep engineering backgrounds.",
    bullets: [
      "Guided teams across PG and UG cohorts through hands-on builds using Google AI Studio, Relevance AI, and n8n — covering prompt design, agent workflows, and no-code/low-code AI automation.",
      "Helped non-technical teams translate business problems into AI-powered prototypes within hackathon time constraints.",
    ],
    tags: ["Google AI Studio", "Relevance AI", "n8n", "AI Agents", "Mentorship", "No-Code AI"],
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
    narrative:
      "Three years scaling a computer vision platform from early contracts to enterprise deployments across hundreds of cameras. I went from training models to owning system architecture — and eventually added LLMs to a stack that was purely CV when I joined.",
    bullets: [
      "Scaled a computer vision platform to 600+ cameras across enterprise clients, maintaining production reliability across 30+ active use cases simultaneously.",
      "Built a person re-ID pipeline that tracked individual customer journeys across camera zones — measuring dwell time and staff engagement patterns that didn't exist in any other data source.",
      "Engineered an LLM + RAG layer that translated natural language requirements directly into structured CV pipeline configurations, cutting new use-case deployment cycles by 20%.",
      "Upgraded the platform with LLaVA and Qwen VLMs, achieving up to 95% accuracy improvement across 350 cameras.",
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
    narrative:
      "Started my career applying deep learning to real automotive and mobility problems. The fundamentals I built here — training discipline, production mindset, and understanding hardware constraints — shaped everything that followed.",
    bullets: [
      "Accelerated data annotation pipelines using deep learning models for the Smart Mobility Group, cutting manual labeling time on automotive datasets.",
      "Integrated trained CV models into customer-facing products across mobility and automotive domains — one of the first times I shipped ML to real users.",
      "Awarded the Technical Excellence Award for outstanding contributions to the organization.",
    ],
    tags: ["Python", "Deep Learning", "Computer Vision", "PyTorch", "Data Annotation"],
  },
];
