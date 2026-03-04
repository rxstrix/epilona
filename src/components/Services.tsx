import { motion } from 'framer-motion'
import {
  FileText,
  Flower2,
  Hand,
  MessageCircle,
  Pill,
  Shield,
  Sparkles,
  Stethoscope,
  Zap
} from 'lucide-react'

const services = [
  {
    id: 'consultation',
    name: 'Консультация',
    icon: MessageCircle,
    price: '0',
    includes: [
      { text: 'Осмотр и оценка кожи и волос', icon: Stethoscope },
      { text: 'Подбор зон для электроэпиляции', icon: FileText },
      { text: 'Расчёт количества сеансов и стоимости', icon: FileText },
      { text: 'Ответы на вопросы по подготовке и уходу', icon: MessageCircle },
    ],
  },
  {
    id: 'face',
    name: 'Лицо',
    icon: Sparkles,
    price: '35',
    includes: [
      { text: 'Подбор типа иглы и параметров тока', icon: Stethoscope },
      { text: 'Точечное удаление волос в зоне лица', icon: Zap },
      { text: 'Использование стерильных одноразовых игл', icon: Shield },
      { text: 'Рекомендации по уходу и восстановлению кожи', icon: FileText },
    ],
  },
  {
    id: 'body',
    name: 'Тело',
    icon: Hand,
    price: '40',
    bestseller: true,
    includes: [
      { text: 'Руки, ноги, подмышки, спина и другие зоны', icon: Hand },
      { text: 'Настройка параметров под толщину и глубину волоса', icon: Stethoscope },
      { text: 'Поочерёдная обработка каждого волосяного фолликула', icon: Zap },
      { text: 'Местная анестезия по показаниям', icon: Pill },
      { text: 'Индивидуальные рекомендации по уходу после сеанса', icon: FileText },
    ],
  },
  {
    id: 'intimate',
    name: 'Интимные зоны',
    icon: Flower2,
    price: '45',
    includes: [
      { text: 'Классика, глубокое и полное бикини', icon: Flower2 },
      { text: 'Деликатное проведение процедуры в интимной зоне', icon: Shield },
      { text: 'Кремообразная или инъекционная анестезия по показаниям', icon: Pill },
      { text: 'Уход и ограничения после электроэпиляции', icon: FileText },
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-dark" aria-labelledby="services-heading">
      <div className="absolute inset-0 bg-[#090315]" />

      <div className="relative max-w-[1600px] mx-auto px-8 lg:px-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="services-heading" className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
            Наши услуги
          </h2>
          <p className="text-accent font-semibold text-lg max-w-2xl mx-auto">
            Четыре варианта. Полный комплект в каждой услуге
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon
            const isBestseller = service.bestseller
            const isFreeConsultation = service.id === 'consultation'

            return (
              <motion.div
                key={service.id}
                variants={cardItem}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col p-8 rounded-2xl border-2 transition-all min-w-0 ${
                  isBestseller
                    ? 'bg-white/5 border-accent/60'
                    : 'bg-white/5 border-primary/30 hover:border-primary/50'
                }`}
                style={isBestseller ? {
                  boxShadow: '0 0 30px rgba(210, 103, 244, 0.4), 0 0 60px rgba(210, 103, 244, 0.2), inset 0 0 30px rgba(210, 103, 244, 0.05)',
                } : undefined}
              >
                {isBestseller && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{
                      background: 'linear-gradient(90deg, #884dd8, #d367f4)',
                      boxShadow: '0 0 20px rgba(210, 103, 244, 0.6)',
                    }}
                  >
                    Бестселлер
                  </div>
                )}
                <div className="mb-6">
                  <span className="inline-flex p-3 rounded-2xl bg-primary/20 mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </span>
                  <h3 className="font-bold text-2xl text-white mb-2">{service.name}</h3>
                  {isFreeConsultation ? (
                    <div>
                      <p className="text-3xl font-extrabold text-white leading-tight">
                        Бесплатно
                      </p>
                      <p className="text-sm text-white/60 mt-1">
                        первая консультация
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-extrabold text-white leading-none">
                          {service.price}
                        </span>
                        <span className="text-base text-white/60 leading-none">
                          BYN/час
                        </span>
                      </div>
                      <p className="text-xs text-white/50 mt-1">
                        точная стоимость зависит от зоны и объёма работы
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                    В услугу входит
                  </p>
                  <ul className="space-y-4 mb-6">
                    {service.includes.map((item, i) => {
                      const ItemIcon = item.icon
                      return (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-sm text-white/90"
                        >
                          <span className="shrink-0 p-1 rounded-lg bg-primary/20 text-accent flex items-center justify-center">
                            <ItemIcon className="w-4 h-4" />
                          </span>
                          <span className="flex-1 break-words">{item.text}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <button
                  type="button"
                  className="mt-auto w-full px-4 py-3 rounded-xl bg-white/90 text-dark font-semibold text-sm tracking-wide hover:bg-white hover:scale-[1.02] hover:shadow-lg transition-all"
                >
                  Выбрать этот пакет
                </button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
