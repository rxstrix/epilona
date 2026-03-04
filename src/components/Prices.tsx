import { motion } from 'framer-motion'

type ZonePrice = {
  label: string
  price: number
}

type PricePlan = {
  id: 'face' | 'body' | 'intimate'
  title: string
  description: string
  zones: ZonePrice[]
}

// Базовые ставки взяты из секции услуг:
// лицо — 35 BYN/час, тело — 40 BYN/час, интим — 45 BYN/час.
// Для конкретных зон используем фиксированный шаг 2.5 BYN.
const pricePlans: PricePlan[] = [
  {
    id: 'face',
    title: 'Лицо',
    description: 'Типичные женские зоны лица с деликатной точечной обработкой.',
    zones: [
      { label: 'Верхняя губа', price: 35 },
      { label: 'Подбородок', price: 35 },
      { label: 'Межбровье, крылья носа', price: 35 },
      { label: 'Щёки, виски', price: 37.5 },
      { label: 'Лицо полностью', price: 40 },
    ],
  },
  {
    id: 'body',
    title: 'Тело',
    description: 'Женские зоны тела — руки, ноги, подмышки и живот.',
    zones: [
      { label: 'Подмышки', price: 40 },
      { label: 'Кисти и пальцы рук', price: 40 },
      { label: 'Предплечья', price: 42.5 },
      { label: 'Голени', price: 42.5 },
      { label: 'Живот', price: 42.5 },
      { label: 'Бёдра', price: 45 },
      { label: 'Ноги полностью', price: 47.5 },
    ],
  },
  {
    id: 'intimate',
    title: 'Интимные зоны',
    description: 'Интимные женские зоны с приоритетом комфорта и безопасности.',
    zones: [
      { label: 'Классическое бикини', price: 45 },
      { label: 'Межъягодичная область', price: 47.5 },
      { label: 'Внутренняя поверхность бёдер', price: 47.5 },
      { label: 'Глубокое бикини', price: 47.5 },
      { label: 'Полное бикини', price: 50 },
    ],
  },
]

export function Prices() {
  return (
    <section id="prices" className="py-24 relative overflow-hidden bg-dark">
      {/* Однородный фон в той же тёмной палитре, что и услуги */}
      <div className="absolute inset-0 bg-[#090315]" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white">
            Цены
          </h2>
          <p className="text-accent font-semibold text-center text-lg">
            Прозрачно. Первая консультация — бесплатно
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {pricePlans.map((plan) => (
            <PriceCard key={plan.id} plan={plan} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function PriceCard({ plan }: { plan: PricePlan }) {
  return (
    <div className="flex flex-col h-full p-7 rounded-2xl bg-white/5 border-2 border-primary/30 hover:border-accent/60 hover:bg-white/10 transition-all">
      <div className="mb-5">
        <h3 className="font-bold text-2xl text-white mb-2">{plan.title}</h3>
        <p className="text-sm text-white/70">{plan.description}</p>
      </div>

      <div className="flex-1">
        <p className="text-xs font-semibold text-accent/80 uppercase tracking-[0.18em] mb-3">
          Зоны и почасовая ставка
        </p>
        <ul className="space-y-3 text-sm text-white/90">
          {plan.zones.map((zone, i) => (
            <li key={i} className="flex items-baseline justify-between gap-3">
              <span className="flex-1">{zone.label}</span>
              <span className="shrink-0 text-white/80 font-semibold">
                {zone.price.toFixed(1).replace('.', ',')} BYN/час
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

