export interface NowItem {
  label: string;
  body: string;
}

export interface NowStream {
  heading: string;
  items: NowItem[];
}

export const nowUpdatedDate = "May 17, 2026";

export const nowStreams: NowStream[] = [
  {
    heading: "Shipping",
    items: [
      {
        label: "Real-time VLM surveillance pipeline",
        body: "Multi-camera asyncio system where raw model events pass through a sliding-window persistence gate before they touch the backend — temporal confidence filtering as the anti-hallucination layer.",
      },
      {
        label: "Cross-platform utility apps",
        body: "Building Windows, macOS, and Linux desktop apps that onboard customers into the BLUE ecosystem — paired with contributions to a patented Intel VAAPI video compression pipeline.",
      },
      {
        label: "MLX-quantized models for Apple Silicon",
        body: "Publishing every quantization variant (affine 4/5/6/8-bit, mixed-bit, MX FP4/FP8) of Granite 4.1 8B and Hy-MT2 to HuggingFace — with benchmark reports comparing quality and throughput against FP16 baselines on M5 Pro.",
      },
    ],
  },
  {
    heading: "Thinking About",
    items: [
      {
        label: "Failure modes under degraded visual conditions",
        body: "VLMs hallucinate more in low-light and noisy frames. What does a deterministic noise-rejection layer look like when the model itself is the noisy signal?",
      },
      {
        label: "Where the edge–cloud inference boundary actually sits",
        body: "Not a binary choice — it's a latency/cost/accuracy curve. I'm mapping where that curve bends for real-time multi-camera workloads.",
      },
    ],
  },
  {
    heading: "Exploring",
    items: [
      {
        label: "Temporal reasoning across frames",
        body: "Single-frame inference misses context that spans seconds. Exploring how to pass temporal state to models that weren't designed for it.",
      },
      {
        label: "Where mixed-bit beats uniform quantization",
        body: "For translation vs. reasoning workloads, the optimal bit-width allocation differs significantly. Mapping when mixed4_6 is worth the complexity over straight 4-bit.",
      },
    ],
  },
];
