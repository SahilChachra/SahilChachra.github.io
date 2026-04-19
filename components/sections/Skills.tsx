"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { FadeIn } from "@/components/ui/fade-in"
import { SectionHeader } from "@/components/SectionHeader"

const SKILL_ROWS = [
  [
    "LLMs",
    "Computer Vision",
    "Multi-Agent Systems",
    "RAG",
    "Fine-tuning",
    "Multimodal Models",
    "MLOps",
    "Embeddings",
  ],
  [
    "PyTorch",
    "LangChain",
    "FastAPI",
    "OpenCV",
    "CUDA",
    "DeepStream",
    "CrewAI",
    "Python",
    "C++",
  ],
  [
    "GCP",
    "Docker",
    "Redis",
    "QDrant",
    "Flask",
    "TensorRT",
    "NVIDIA Jetson",
    "GitHub Actions",
  ],
]

function MarqueeRow({
  items,
  direction = "left",
  speed = 0.6,
  fontSize = "text-5xl lg:text-7xl",
}: {
  items: string[]
  direction?: "left" | "right"
  speed?: number
  fontSize?: string
}) {
  const innerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const offsetRef = useRef(0)
  const isPaused = useRef(false)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragStartOffset = useRef(0)
  const halfWidthRef = useRef(0)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  const doubled = [...items, ...items]

  useEffect(() => {
    const inner = innerRef.current
    if (!inner) return

    // Measure after paint
    const init = () => {
      halfWidthRef.current = inner.scrollWidth / 2
      offsetRef.current = direction === "right" ? -halfWidthRef.current : 0
      inner.style.transform = `translateX(${offsetRef.current}px)`
    }
    init()

    const tick = () => {
      if (!isPaused.current && !isDragging.current) {
        const hw = halfWidthRef.current
        if (hw > 0) {
          if (direction === "left") {
            offsetRef.current -= speed
            if (offsetRef.current <= -hw) offsetRef.current += hw
          } else {
            offsetRef.current += speed
            if (offsetRef.current >= 0) offsetRef.current -= hw
          }
          inner.style.transform = `translateX(${offsetRef.current}px)`
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [direction, speed])

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true
    dragStartX.current = e.clientX
    dragStartOffset.current = offsetRef.current
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !innerRef.current) return
    const hw = halfWidthRef.current
    if (!hw) return

    let newOffset = dragStartOffset.current + (e.clientX - dragStartX.current)
    // Normalize to loop range (-hw, 0]
    newOffset = newOffset % hw
    if (newOffset > 0) newOffset -= hw

    offsetRef.current = newOffset
    innerRef.current.style.transform = `translateX(${newOffset}px)`
  }, [])

  const onMouseUp = useCallback(() => {
    isDragging.current = false
  }, [])

  return (
    <div
      className="overflow-hidden select-none cursor-grab active:cursor-grabbing py-1"
      onMouseEnter={() => { isPaused.current = true }}
      onMouseLeave={() => { isPaused.current = false; isDragging.current = false }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <div
        ref={innerRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        {doubled.map((skill, i) => (
          <span
            key={i}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`${fontSize} font-bold tracking-tight transition-colors duration-150 px-5 ${
              hoveredIdx === i
                ? "text-zinc-100"
                : hoveredIdx !== null
                ? "text-zinc-800"
                : "text-zinc-700"
            }`}
          >
            {skill}
            <span
              className={`ml-5 transition-colors duration-150 ${
                hoveredIdx === i ? "text-zinc-500" : "text-zinc-800"
              }`}
            >
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-20 bg-zinc-900/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <FadeIn>
          <SectionHeader
            label="Capabilities"
            title="Skills"
            subtitle="The tools and technologies I work with every day."
          />
        </FadeIn>
      </div>

      <div className="space-y-2">
        <MarqueeRow items={SKILL_ROWS[0]} direction="left" speed={0.7} fontSize="text-4xl lg:text-5xl" />
        <MarqueeRow items={SKILL_ROWS[1]} direction="right" speed={0.5} fontSize="text-3xl lg:text-4xl" />
        <MarqueeRow items={SKILL_ROWS[2]} direction="left" speed={0.6} fontSize="text-2xl lg:text-3xl" />
      </div>

      <p className="text-center text-xs tracking-widest text-zinc-600 mt-10 uppercase">
        Drag to scrub · Hover to highlight
      </p>
    </section>
  )
}
