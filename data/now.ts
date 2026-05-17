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
        label: "INT4 / INT8 / FP16 quantization curves",
        body: "Benchmarking accuracy degradation vs. throughput gains for VLMs on constrained hardware. The sweet spot isn't where the papers say it is.",
      },
      {
        label: "Temporal reasoning across frames",
        body: "Single-frame inference misses context that spans seconds. Exploring how to pass temporal state to models that weren't designed for it.",
      },
    ],
  },
];
