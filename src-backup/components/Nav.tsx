import { useState, useEffect, useRef } from 'react'

const navLinks = [
  { label: 'Услуги', id: 'services' },
  { label: 'Цены', id: 'prices' },
  { label: 'Отзывы', id: 'reviews' },
  { label: 'О нас', id: 'about' },
]

const SCROLL_THRESHOLD = 80

export function Nav() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const navContainerRef = useRef<HTMLDivElement>(null)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD)
      const trigger = 200
      const sections = navLinks
        .map((l) => ({
          id: l.id,
          top: document.getElementById(l.id)?.getBoundingClientRect().top ?? Infinity,
        }))
        .filter((s) => s.top <= trigger)
      const current = sections.length
        ? sections.reduce((a, b) => (a.top > b.top ? a : b))
        : null
      setActiveSection(current?.id ?? null)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!activeSection || !navContainerRef.current) {
      setPillStyle((p) => ({ ...p, opacity: 0 }))
      return
    }
    const btn = navContainerRef.current.querySelector(`[data-nav="${activeSection}"]`)
    if (!btn) return
    const container = navContainerRef.current
    const containerRect = container.getBoundingClientRect()
    const btnRect = btn.getBoundingClientRect()
    const borderLeft = parseInt(getComputedStyle(container).borderLeftWidth) || 0
    setPillStyle({
      left: btnRect.left - containerRect.left - borderLeft,
      width: btnRect.width,
      opacity: 1,
    })
  }, [activeSection])

  useEffect(() => {
    const handler = () => {
      if (activeSection && navContainerRef.current) {
        const btn = navContainerRef.current.querySelector(`[data-nav="${activeSection}"]`)
        if (btn) {
          const container = navContainerRef.current
          const containerRect = container.getBoundingClientRect()
          const btnRect = btn.getBoundingClientRect()
          const borderLeft = parseInt(getComputedStyle(container).borderLeftWidth) || 0
          setPillStyle((p) => ({
            ...p,
            left: btnRect.left - containerRect.left - borderLeft,
            width: btnRect.width,
          }))
        }
      }
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [activeSection])

  const glassStyle = {
    background: 'linear-gradient(135deg, rgba(136, 77, 216, 0.2) 0%, rgba(210, 103, 244, 0.15) 100%)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 4px 24px rgba(136, 77, 216, 0.15), inset 0 1px 0 rgba(255,255,255,0.08)',
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Mobile: transparent at top, glass after scroll. Desktop: hidden (pill has its own glass). */}
      <div
        data-scrolled={scrolled}
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 data-[scrolled=true]:opacity-100 md:opacity-0"
        style={glassStyle}
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Логотип */}
        <span
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold text-white cursor-pointer shrink-0 transition-opacity duration-300"
        >
          Epilona
        </span>

        {/* Ссылки по центру — жидкое стекло */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div
            ref={navContainerRef}
            className="relative flex items-center gap-0.5 p-1 rounded-full h-12"
            style={{
              background: 'linear-gradient(135deg, rgba(136, 77, 216, 0.2) 0%, rgba(210, 103, 244, 0.15) 100%)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 4px 24px rgba(136, 77, 216, 0.15), inset 0 1px 0 rgba(255,255,255,0.15)',
            }}
          >
            <div
              className="absolute top-1 bottom-1 rounded-full bg-white/25 transition-[left,width,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
                opacity: pillStyle.opacity,
              }}
            />
            {navLinks.map((item) => (
              <button
                key={item.id}
                data-nav={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative z-10 px-5 py-2.5 rounded-full font-semibold text-sm leading-none transition-colors duration-200 hover:bg-white/20 active:scale-[0.98] ${
                  activeSection === item.id ? 'text-white' : 'text-white/90'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Кнопка действия */}
        <div className="flex items-center h-12 rounded-full shrink-0 overflow-hidden">
          <button
            onClick={() => scrollTo('contacts')}
            className="h-full px-6 bg-primary text-white font-semibold rounded-full text-sm transition-colors duration-300 hover:bg-primary/90 leading-none"
          >
            Записаться
          </button>
        </div>
      </div>
    </nav>
  )
}
