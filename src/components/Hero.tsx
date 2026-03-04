import { motion } from 'framer-motion'
import { Shield, Zap, Sparkles, ArrowRight } from 'lucide-react'

const trustItems = [
  {
    icon: Zap,
    text: 'Точная работа с каждым фолликулом',
  },
  {
    icon: Shield,
    text: 'Стерильные одноразовые иглы и анестезия по показаниям',
  },
  {
    icon: Sparkles,
    text: 'Гладкость без жёсткой щетины и вросших волос',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 * i },
  }),
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function Hero({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-dark" aria-label="Главный экран">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07030f] via-[#05010b] to-[#090316]" />

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 55% at 18% 18%, rgba(211,103,244,0.42) 0%, rgba(136,77,216,0.0) 58%)',
          willChange: 'opacity',
          transform: 'translateZ(0)',
        }}
        animate={{ opacity: [0.35, 0.85, 0.35] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 82% 55%, rgba(136,77,216,0.4) 0%, rgba(211,103,244,0.0) 60%)',
          willChange: 'opacity',
          transform: 'translateZ(0)',
        }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 pointer-events-none" style={{ transform: 'translateZ(0)' }}>
        <motion.div
          className="absolute top-1/4 right-1/6 w-[420px] h-[420px] rounded-full blur-[120px]"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(211,103,244,0.9) 0%, rgba(136,77,216,0.0) 70%)',
            willChange: 'transform, opacity',
          }}
          animate={{
            x: [0, 50, 10, 0],
            y: [0, -35, -10, 0],
            scale: [1, 1.14, 1.05, 1],
            opacity: [0.45, 0.9, 0.6, 0.45],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[22%] left-[10%] w-[440px] h-[440px] rounded-full blur-[140px]"
          style={{
            background:
              'radial-gradient(circle at 60% 40%, rgba(136,77,216,0.75) 0%, rgba(211,103,244,0.0) 75%)',
            willChange: 'transform, opacity',
          }}
          animate={{
            x: [0, -24, 0],
            y: [0, 18, 6, 0],
            scale: [1.03, 1.12, 1.05, 1.03],
            opacity: [0.3, 0.65, 0.4, 0.3],
          }}
          transition={{ duration: 11.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 py-20 z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] text-white drop-shadow-lg"
          >
            Электроэпиляция
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">
              для гладкости навсегда
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md"
          >
            Никаких ежедневных бритв и жёсткого воска. Игольчатая электроэпиляция разрушает корень каждого
            волоса — <span className="text-white font-medium">подходит для любого цвета и типа</span> и даёт{' '}
            <span className="text-white font-medium">по-настоящему стойкий результат</span>.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 mb-14"
          >
            {trustItems.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-center gap-2.5 text-white/90 w-full md:w-auto max-w-sm md:max-w-none"
                whileHover={{ scale: 1.05, color: 'rgba(255,255,255,1)' }}
              >
                <div className="shrink-0 p-2 rounded-lg bg-white/5 flex items-center justify-center w-9 h-9">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm font-medium leading-snug text-center md:text-left">{text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item}>
            <motion.button
              onClick={onCtaClick}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-white/95 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Записаться на электроэпиляцию
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <p className="text-white/70 text-sm mt-4">
              Первая консультация бесплатно
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
