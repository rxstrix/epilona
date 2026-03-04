import { useEffect, useState } from 'react'

const QUERY = '(max-width: 767px)'

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const m = window.matchMedia(QUERY)
    const set = () => setIsMobile(m.matches)
    set()
    m.addEventListener('change', set)
    return () => m.removeEventListener('change', set)
  }, [])

  return isMobile
}
