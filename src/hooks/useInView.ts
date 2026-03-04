import { useEffect, useRef, useState } from 'react'

/** Lightweight Intersection Observer: returns ref and whether element has been in view (once). */
export function useInView(options?: { threshold?: number; rootMargin?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true)
      },
      { threshold: options?.threshold ?? 0.15, rootMargin: options?.rootMargin ?? '0px', once: true }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [options?.threshold, options?.rootMargin])

  return [ref, inView] as const
}
