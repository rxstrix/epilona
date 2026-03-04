import { motion } from 'framer-motion'

type Review = {
  name: string
  text: string
  rating: number
  source: 'instagram' | 'telegram' | 'tiktok'
}

const reviews: Review[] = [
  { name: 'Анна', text: 'Электроэпиляция лица и классическое бикини. Всё деликатно, спокойно и без ощущения «эксперимента на себе».', rating: 5, source: 'instagram' },
  { name: 'Мария', text: 'Голени и подмышки — спустя несколько сеансов почти ничего не отрастает. Нравится, что всегда напоминают, как подготовиться.', rating: 5, source: 'instagram' },
  { name: 'Елена', text: 'Долго выбирала между разными методами. Здесь всё объяснили по-человечески и подобрали комфортный график.', rating: 5, source: 'telegram' },
  { name: 'Дарья', text: 'Страх перед «иголочками» прошёл на первом сеансе. Можно включить любимую музыку и просто расслабиться.', rating: 5, source: 'telegram' },
  { name: 'Ольга', text: 'Интимная зона и подмышки — с анестезией всё переносится спокойно. Волосы становятся тоньше и реже.', rating: 5, source: 'instagram' },
  { name: 'Кристина', text: 'Запись без очередей, аккуратный кабинет и стерильные инструменты. Чувствую себя на персональной процедуре.', rating: 5, source: 'tiktok' },
  { name: 'Светлана', text: 'Брала курс на ноги полностью. Спустя несколько месяцев кожа гладкая, остались только единичные пушковые волоски.', rating: 5, source: 'instagram' },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-dark" aria-labelledby="reviews-heading">
      <div className="absolute inset-0 bg-[#090315]" />

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 id="reviews-heading" className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white">
              Отзывы клиенток
            </h2>
            <p className="text-accent font-semibold text-center text-lg">
              Реальные истории девушек, которые выбрали электроэпиляцию
            </p>
          </motion.div>
        </div>

        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#090315] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#090315] to-transparent" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="overflow-hidden"
          >
            <motion.div
              className="flex gap-6 px-6 md:px-12 md:hidden"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 16,
                ease: 'linear',
              }}
            >
              {[...reviews, ...reviews].map((review, i) => (
                <div
                  key={i}
                  className="shrink-0 w-[320px] h-[220px] flex flex-col justify-between p-6 rounded-2xl bg-white/5 border-2 border-primary/30 hover:border-accent/50 hover:bg-white/10 transition-all"
                >
                  <div>
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <span key={j} className="text-accent text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed mb-3">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 mt-2 text-sm">
                    <p className="font-bold text-accent">{review.name}</p>
                    <p className="text-white/60 text-[11px] uppercase tracking-[0.18em]">
                      {review.source === 'instagram' && 'Instagram'}
                      {review.source === 'telegram' && 'Telegram'}
                      {review.source === 'tiktok' && 'TikTok'}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="hidden md:flex gap-6 px-6 md:px-12"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              }}
            >
              {[...reviews, ...reviews].map((review, i) => (
                <div
                  key={i}
                  className="shrink-0 w-[400px] h-[220px] flex flex-col justify-between p-6 rounded-2xl bg-white/5 border-2 border-primary/30 hover:border-accent/50 hover:bg-white/10 transition-all"
                >
                  <div>
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <span key={j} className="text-accent text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed mb-3">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 mt-2 text-sm">
                    <p className="font-bold text-accent">{review.name}</p>
                    <p className="text-white/60 text-[11px] uppercase tracking-[0.18em]">
                      {review.source === 'instagram' && 'Instagram'}
                      {review.source === 'telegram' && 'Telegram'}
                      {review.source === 'tiktok' && 'TikTok'}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
