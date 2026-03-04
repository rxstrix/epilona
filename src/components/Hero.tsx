import { Shield, Zap, Sparkles, ArrowRight } from 'lucide-react'

const trustItems = [
  { icon: Zap, text: 'Точная работа с каждым фолликулом' },
  { icon: Shield, text: 'Стерильные одноразовые иглы и анестезия по показаниям' },
  { icon: Sparkles, text: 'Гладкость без жёсткой щетины и вросших волос' },
]

export function Hero({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-dark" aria-label="Главный экран">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07030f] via-[#05010b] to-[#090316]" />
      <div className="absolute inset-0 hero-bg-glow-a" aria-hidden />
      <div className="absolute inset-0 hero-bg-glow-b" aria-hidden />
      <div className="absolute inset-0 pointer-events-none" style={{ transform: 'translateZ(0)' }}>
        <div className="absolute top-1/4 right-1/6 w-[420px] h-[420px] rounded-full blur-[120px] hero-orb-right" />
        <div className="absolute bottom-[22%] left-[10%] w-[440px] h-[440px] rounded-full blur-[140px] hero-orb-left" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 py-20 z-10">
        <div className="hero-content text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] text-white drop-shadow-lg">
            Электроэпиляция
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">
              для гладкости навсегда
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
            Никаких ежедневных бритв и жёсткого воска. Игольчатая электроэпиляция разрушает корень каждого
            волоса — <span className="text-white font-medium">подходит для любого цвета и типа</span> и даёт{' '}
            <span className="text-white font-medium">по-настоящему стойкий результат</span>.
          </p>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 mb-14">
            {trustItems.map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2.5 text-white/90 w-full md:w-auto max-w-sm md:max-w-none"
              >
                <div className="shrink-0 p-2 rounded-lg bg-white/5 flex items-center justify-center w-9 h-9">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm font-medium leading-snug text-center md:text-left">{text}</span>
              </div>
            ))}
          </div>
          <div>
            <button
              type="button"
              onClick={onCtaClick}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-white/95 transition-colors"
            >
              Записаться на электроэпиляцию
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-white/70 text-sm mt-4">
              Первая консультация бесплатно
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
