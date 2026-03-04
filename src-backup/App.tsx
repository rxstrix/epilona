import { HandHeart, ShieldCheck, Sparkles, Clock3 } from 'lucide-react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Prices } from './components/Prices'
import { Reviews } from './components/Reviews'

const socialLinks = [
  { name: 'Telegram', href: 'https://t.me/epilona', icon: '✈️' },
  { name: 'Instagram', href: 'https://instagram.com/epilona', icon: '📸' },
]

function App() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-dark">
      <Nav />

      <Hero onCtaClick={() => scrollTo('contacts')} />

      <Services />

      <Prices />

      <Reviews />

      {/* About */}
      <section id="about" className="py-24 relative overflow-hidden bg-dark">
        {/* Однородный однотонный фон, как у соседних секций */}
        <div className="absolute inset-0 bg-[#090315]" />

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <div className="grid md:grid-cols-[3fr,2fr] gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                Почему выбирают <span className="text-accent">Epilona</span>?
              </h2>
              <p className="text-white/80 text-lg mb-6">
                Мы делаем электроэпиляцию максимально комфортной и предсказуемой — от первой консультации
                до последнего сеанса.
              </p>
              <ul className="space-y-4 text-white/90 text-base">
                <li className="flex items-center gap-3">
                  <span className="shrink-0 rounded-xl bg-primary/15 p-2 text-accent flex items-center justify-center">
                    <HandHeart className="w-4 h-4" />
                  </span>
                  <span>Аккуратная работа с иглой и настройка параметров под твою кожу и чувствительность.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="shrink-0 rounded-xl bg-primary/15 p-2 text-accent flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                  <span>Стерильные инструменты, одноразовые иглы и спокойная, безопасная атмосфера.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="shrink-0 rounded-xl bg-primary/15 p-2 text-accent flex items-center justify-center">
                    <Clock3 className="w-4 h-4" />
                  </span>
                  <span>Маленькие уютные кабинеты без потока людей и очередей — всё по записи.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="shrink-0 rounded-xl bg-primary/15 p-2 text-accent flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <span>Понятные курсы и честные цены без скрытых «обязательных» процедур.</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                {/* Локальное мягкое свечение только вокруг сердца */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="w-64 md:w-72 h-64 md:h-72 rounded-full blur-[32px] bg-[radial-gradient(circle_at_50%_40%,rgba(211,103,244,0.45)_0%,rgba(136,77,216,0.25)_35%,transparent_70%)]" />
                </div>
                <div className="relative aspect-square w-56 md:w-72 rounded-full bg-white/5 flex items-center justify-center border-2 border-primary/40 shadow-[0_0_30px_rgba(210,103,244,0.35)]">
                  <span className="text-8xl md:text-9xl opacity-90">💜</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24 relative overflow-hidden bg-dark">
        {/* Однородный фон в единой палитре */}
        <div className="absolute inset-0 bg-[#090315]" />

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
                Записаться на приём
              </h2>
              <p className="text-white/85 text-lg mb-6">
                Оставь имя и номер телефона — мы аккуратно перезвоним, поможем выбрать зоны и подготовиться
                к первой процедуре.
              </p>
              <p className="text-white/60 text-sm">
                В рабочее время обычно отвечаем в течение{' '}
                <span className="text-accent font-semibold">15 минут</span>.
              </p>

              {/* Ненавязчивые соцсети */}
              <div className="mt-8">
                <p className="text-white/60 text-sm mb-3">Предпочитаешь писать, а не звонить?</p>
                <div className="flex flex-wrap gap-3 text-sm text-white/70">
                  <a
                    href="https://t.me/epilona"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-4 py-1.5 hover:border-accent/60 hover:text-accent transition-colors"
                  >
                    Telegram
                  </a>
                  <a
                    href="https://instagram.com/epilona"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-4 py-1.5 hover:border-accent/60 hover:text-accent transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
              <p className="text-white/85 font-semibold mb-4 text-lg">Оставить заявку</p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Имя"
                  className="w-full px-4 py-3 rounded-xl bg-[#05010b] text-white font-medium placeholder:text-white/35 border border-white/20 focus:ring-4 focus:ring-accent/35 outline-none transition-all text-sm"
                />
                <input
                  type="tel"
                  placeholder="+375 (29) 123-45-67"
                  className="w-full px-4 py-3 rounded-xl bg-[#05010b] text-white font-medium placeholder:text-white/35 border border-white/20 focus:ring-4 focus:ring-accent/35 outline-none transition-all text-sm"
                />
                <button
                  className="w-full px-4 py-3 rounded-xl font-bold text-sm tracking-wide text-white bg-primary hover:bg-accent transition-colors"
                  type="button"
                >
                  Жду вашего звонка
                </button>
                <p className="text-[11px] text-white/50">
                  Нажимая кнопку, ты соглашаешься на обработку персональных данных и обратный звонок.
                </p>
                <a
                  href="tel:+375291234567"
                  className="inline-flex items-center gap-2 text-white/80 text-sm mt-1 hover:text-white"
                >
                  <span>📞</span>
                  <span>+375 (29) 123-45-67</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5 bg-[#05010b]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Epilona
            </span>
            <p className="text-white/50 text-sm max-w-xs">
              Электроэпиляция в уютной атмосфере с бережным подходом к каждой зоне и каждому визиту.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <a href="#services" className="hover:text-accent transition-colors">
                Услуги
              </a>
              <a href="#prices" className="hover:text-accent transition-colors">
                Цены
              </a>
              <a href="#reviews" className="hover:text-accent transition-colors">
                Отзывы
              </a>
              <a href="#contacts" className="hover:text-accent transition-colors">
                Записаться
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-white/60">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors underline-offset-4 hover:underline"
                >
                  {s.name}
                </a>
              ))}
            </div>

            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Epilona. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;