import { useEffect, useState } from 'react'
import {
  Activity, ArrowDown, ArrowRight, ArrowUpRight, ArrowLeftRight,
  BadgePercent, Check, CheckCircle2, ChevronDown, CircleHelp,
  Clock3, ExternalLink, Fingerprint, Globe2, Headphones,
  LockKeyhole, MapPin, Menu, MessageCircle, ShieldCheck,
  Sparkles, TrendingUp, X, Zap
} from 'lucide-react'
import { BRAND, MANAGER_URL } from './config'

const navItems = [
  ['О сервисе', '#about'],
  ['Преимущества', '#advantages'],
  ['FAQ', '#faq'],
  ['География', '#world'],
  ['Контакты', '#contacts'],
]

const questions = [
  {
    question: 'Как происходит обмен через QuickX?',
    answer: 'Нажмите «Связаться с менеджером», сообщите направление обмена, валюту, сумму и страну или город. Менеджер уточнит доступность, актуальные условия и последовательность действий. Обмен проводится только после вашего согласия с условиями.',
  },
  {
    question: 'Как узнать актуальный курс?',
    answer: 'Курс зависит от направления, суммы и рыночной ситуации. Точный курс и возможные комиссии сообщаются менеджером до проведения операции. Графики на сайте — только оформление, они не транслируют реальные котировки.',
  },
  {
    question: 'Какие криптовалюты можно обменять?',
    answer: 'Уточните у менеджера доступность направлений с USDT, BTC, ETH и другими цифровыми активами, а также поддерживаемые сети и способы расчётов.',
  },
  {
    question: 'Сколько занимает обмен?',
    answer: 'Продолжительность зависит от валюты, сети, подтверждений, способа расчёта и суммы. Ориентировочное время менеджер назовёт при согласовании условий.',
  },
  {
    question: 'Работаете ли вы в моей стране?',
    answer: 'QuickX принимает международные обращения. Доступность конкретного способа обмена в вашей стране и городе нужно уточнить у менеджера: она зависит от местных правил и доступных партнёров.',
  },
  {
    question: 'Есть ли офис в моём городе?',
    answer: 'Наличие офиса или точки обслуживания в конкретном городе подтверждает менеджер. Городские точки на декоративной карте сайта не означают наличие физического офиса.',
  },
  {
    question: 'Нужна ли верификация личности?',
    answer: 'Требования к проверке личности и документов могут различаться в зависимости от юрисдикции, направления и суммы обмена. Менеджер сообщит требования до проведения операции.',
  },
  {
    question: 'Как связаться с поддержкой?',
    answer: 'Используйте любую кнопку «Связаться с менеджером». Обращения принимаются круглосуточно; фактическое время ответа может зависеть от загрузки команды.',
  },
]

const cards = [
  {
    id: 'speed',
    n: '01',
    title: 'Быстрый обмен',
    text: 'Простой старт и оперативное согласование условий. Меньше шагов — больше внимания к вашему времени.',
    tag: 'FAST PROCESS',
  },
  {
    id: 'privacy',
    n: '02',
    title: 'Полная конфиденциальность',
    text: 'Бережное обращение с информацией и обсуждение деталей сделки напрямую с менеджером.',
    tag: 'PRIVATE FIRST',
  },
  {
    id: 'secure',
    n: '03',
    title: 'Безопасность и надёжность',
    text: 'Понятная последовательность сделки, проверка деталей и сопровождение на каждом этапе.',
    tag: 'CLEAR TERMS',
  },
  {
    id: 'rates',
    n: '04',
    title: 'Выгодный курс обмена',
    text: 'Актуальные предложения для нужного направления с обсуждением курса и комиссий заранее.',
    tag: 'SMART EXCHANGE',
  },
]

function ContactButton({ children = 'Связаться с менеджером', light = false, className = '' }) {
  return (
    <a
      className={`contact-button ${light ? 'contact-button--light' : ''} ${className}`}
      href={MANAGER_URL}
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label={`${children} — открыть ссылку для связи с менеджером в новой вкладке`}
    >
      <MessageCircle size={19} strokeWidth={2.3} aria-hidden="true" />
      <span>{children}</span>
      <ArrowUpRight className="contact-button__arrow" size={19} strokeWidth={2.3} aria-hidden="true" />
    </a>
  )
}

function Logo({ footer = false }) {
  return (
    <a className={`logo ${footer ? 'logo--footer' : ''}`} href="#top" aria-label="QuickX — на главную">
      <img src="/assets/logo.png" alt="QuickX" loading={footer ? 'lazy' : 'eager'} />
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    if (!menuOpen) return undefined
    const closeOnEscape = (event) => { if (event.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])
  return (
    <header className="header">
      <div className="shell header__inner">
        <Logo />
        <nav id="primary-menu" className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Основная навигация">
          {navItems.map(([name, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{name}</a>)}
          <ContactButton className="header__mobile-cta" />
        </nav>
        <ContactButton className="header__desktop-cta" />
        <button
          type="button"
          className="header__toggle"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-controls="primary-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >{menuOpen ? <X size={25}/> : <Menu size={25}/>}</button>
      </div>
    </header>
  )
}

const gridY = [70, 126, 182, 238, 294]
const gridX = [70, 150, 230, 310, 390, 470, 550]
const bars = [
  [79, 153, 186, 167], [112, 144, 178, 155], [145, 165, 209, 187],
  [178, 173, 196, 187], [211, 139, 182, 152], [244, 121, 162, 132],
  [277, 111, 165, 145], [310, 133, 181, 163], [343, 121, 166, 138],
  [376, 104, 139, 116], [409, 118, 167, 149], [442, 94, 136, 110],
  [475, 84, 127, 97], [508, 72, 115, 88],
]

function MarketChart() {
  return (
    <svg className="market-chart" viewBox="0 0 620 330" role="img" aria-label="Декоративный график рынка, не реальные котировки">
      <defs>
        <linearGradient id="chartGlow" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#f13b4b" stopOpacity=".24"/><stop offset="1" stopColor="#f13b4b" stopOpacity="0"/></linearGradient>
        <linearGradient id="chartLine" x1="0" x2="1"><stop stopColor="#ff7b86"/><stop offset="1" stopColor="#f62d41"/></linearGradient>
        <filter id="chartShadow"><feGaussianBlur stdDeviation="7"/></filter>
      </defs>
      <g stroke="#a8bdde" strokeOpacity=".095" strokeWidth="1">
        {gridY.map(y => <path key={`y-${y}`} d={`M35 ${y}H582`}/>)}
        {gridX.map(x => <path key={`x-${x}`} d={`M${x} 29V300`}/>)}
      </g>
      <g opacity=".34">
        {bars.map(([x, top, bottom, middle], i) => (
          <g key={x} stroke={i % 4 === 0 ? '#39c9ba' : '#fb5e68'}>
            <path d={`M${x} ${top} V${bottom}`} strokeWidth="1.5" />
            <rect x={x - 5} y={Math.min(middle, top + 10)} width="10" height={Math.max(7, Math.abs(bottom - middle) - 10)} rx="1" fill="currentColor" className={i % 4 === 0 ? 'market-chart__up' : 'market-chart__down'} strokeWidth=".7" />
          </g>
        ))}
      </g>
      <path d="M42 210 C82 190 107 216 145 183 S205 167 236 153 S294 201 328 156 S390 120 419 140 S483 91 516 101 L566 65 L566 300 L42 300Z" fill="url(#chartGlow)" />
      <path d="M42 210 C82 190 107 216 145 183 S205 167 236 153 S294 201 328 156 S390 120 419 140 S483 91 516 101 L566 65" stroke="#f53549" strokeWidth="12" opacity=".21" fill="none" filter="url(#chartShadow)" />
      <path d="M42 210 C82 190 107 216 145 183 S205 167 236 153 S294 201 328 156 S390 120 419 140 S483 91 516 101 L566 65" stroke="url(#chartLine)" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M42 252 C96 246 128 270 162 250 S244 240 287 218 S351 248 406 220 S479 232 566 197" stroke="#27bbd0" strokeWidth="2" strokeOpacity=".52" fill="none" strokeDasharray="4 7" />
      <circle cx="566" cy="65" r="6" fill="#ff5262" stroke="#fcd7db" strokeWidth="2" />
      <circle cx="566" cy="65" r="14" fill="none" stroke="#f63d50" strokeOpacity=".45" strokeWidth="2" className="market-chart__pulse" />
      <g fontSize="10" fontFamily="monospace" fill="#61718c">
        <text x="36" y="321">00:00</text><text x="226" y="321">04:00</text><text x="438" y="321">08:00</text>
      </g>
    </svg>
  )
}

function MarketTerminal() {
  return (
    <div className="terminal-wrap" aria-label="Демонстрационная графика в стиле биржевого терминала">
      <div className="terminal__back-orbit terminal__back-orbit--one" />
      <div className="terminal__back-orbit terminal__back-orbit--two" />
      <div className="terminal">
        <div className="terminal__header">
          <div className="terminal__dots"><i/><i/><i/></div>
          <div className="terminal__header-label"><Activity size={15}/> QUICKX / MARKET VIEW</div>
          <span className="terminal__demo">DEMO VISUAL</span>
        </div>
        <div className="terminal__subheader">
          <div><span className="terminal__eyebrow">КРИПТОВАЛЮТНЫЕ НАПРАВЛЕНИЯ</span><strong>Digital asset exchange</strong></div>
          <span className="terminal__mini-live"><span/> 24/7</span>
        </div>
        <div className="terminal__assets">
          <div className="terminal__asset terminal__asset--active"><span className="terminal__coin-symbol terminal__coin-symbol--btc">₿</span><b>BTC</b><small>Bitcoin</small></div>
          <div className="terminal__asset"><span className="terminal__coin-symbol terminal__coin-symbol--eth">Ξ</span><b>ETH</b><small>Ethereum</small></div>
          <div className="terminal__asset"><span className="terminal__coin-symbol terminal__coin-symbol--usdt">₮</span><b>USDT</b><small>Tether</small></div>
        </div>
        <div className="terminal__chart-head"><span>ОБЗОР РЫНКА</span><span className="terminal__chart-legend"><i/> Иллюстрация</span></div>
        <MarketChart />
        <div className="terminal__footer">
          <div className="terminal__security">
            <span className="terminal-float__icon terminal-float__icon--red"><ShieldCheck size={21}/></span>
            <div className="terminal__security-copy"><b>PRIVATE BY DESIGN</b><small>Внимание к деталям</small></div>
          </div>
          <div className="terminal__footer-meta">
            <span><span className="terminal__footer-dot"/> EXCHANGE INTERFACE</span>
            <span>QUICKX / 01</span>
          </div>
        </div>
      </div>
      <div className="terminal-float terminal-float--top"><span className="terminal-float__icon"><Globe2 size={21}/></span><div><b>GLOBAL</b><small>Международный формат</small></div></div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__radial" />
      <div className="hero__dashes" aria-hidden="true" />
      <div className="shell hero__inner">
        <div className="hero__copy reveal">
          <div className="eyebrow"><span className="eyebrow__line"/><span className="dot-live"/> CRYPTO / EXCHANGE / WORLDWIDE</div>
          <h1>Обмен криптовалют <em>нового поколения<span>.</span></em></h1>
          <p className="hero__lead">Современный подход к обмену цифровых активов. Индивидуальные условия, понятный процесс и связь с менеджером в любой точке мира.</p>
          <div className="hero__actions"><ContactButton/><a href="#advantages" className="text-button">Узнать преимущества <ArrowDown size={19}/></a></div>
          <div className="hero__proof">
            <div><span className="hero__proof-icon"><Globe2 size={22}/></span><span>По всему миру<small>Международные обращения</small></span></div>
            <div><span className="hero__proof-icon"><Clock3 size={22}/></span><span>24/7<small>Приём обращений</small></span></div>
            <div><span className="hero__proof-icon"><ShieldCheck size={22}/></span><span>Условия заранее<small>Обмен после согласования</small></span></div>
          </div>
        </div>
        <div className="hero__art reveal"><MarketTerminal /></div>
      </div>
      <div className="hero__gradient-edge" />
    </section>
  )
}

const tickerItems = [
  ['₿', 'BITCOIN', 'BTC'], ['Ξ', 'ETHEREUM', 'ETH'], ['₮', 'TETHER', 'USDT'],
  ['↗', 'QUICKX', 'EXCHANGE'], ['✦', 'WORLDWIDE', '24 / 7'],
]
function Ticker() {
  return <div className="ticker" aria-label="Поддерживаемые направления уточняйте у менеджера"><div className="ticker__track">{[0,1].map(repeat => tickerItems.map(([mark, name, code], index) => <div className="ticker__item" key={`${repeat}-${index}`} aria-hidden={repeat === 1}><span>{mark}</span><strong>{name}</strong><small>{code}</small></div>))}</div></div>
}

function SectionHeading({ eyebrow, title, text, center = false }) {
  return <div className={`section-heading reveal ${center ? 'section-heading--center' : ''}`}>
    <div className="eyebrow"><span className="eyebrow__line" /> {eyebrow}</div>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="shell about__grid">
        <div className="about__copy">
          <SectionHeading eyebrow="01 / О СЕРВИСЕ" title={<>Технологичный подход.<br/><span>Человеческое общение.</span></>} />
          <p className="about__description reveal">QuickX — сервис для тех, кому важны скорость коммуникации, индивидуальные условия и понятный процесс обмена криптовалют. Без перегруженных форм: обсуждайте нужное направление напрямую с менеджером.</p>
          <p className="about__description reveal">Уточните валюту, сумму и город — вам расскажут о доступных вариантах и согласуют условия до начала сделки.</p>
          <a className="inline-link reveal" href={MANAGER_URL} target="_blank" rel="noopener noreferrer nofollow">Обсудить обмен <ArrowUpRight size={19}/></a>
        </div>
        <div className="about__panel reveal">
          <div className="about__panel-glow" />
          <div className="about__panel-top"><span>QUICKX / AT A GLANCE</span><Activity size={21}/></div>
          <div className="about__panel-mark">Q<span>X</span></div>
          <div className="about__panel-grid">
            <div><Globe2/><strong>GLOBAL</strong><small>Международные запросы</small></div>
            <div><Headphones/><strong>24 / 7</strong><small>Связь с менеджером</small></div>
            <div><ArrowLeftRight/><strong>EXCHANGE</strong><small>Разные направления</small></div>
            <div><ShieldCheck/><strong>CLARITY</strong><small>Условия до сделки</small></div>
          </div>
          <div className="about__panel-bottom"><span>BUILT FOR THE NEXT MOVE</span><ArrowUpRight size={18}/></div>
        </div>
      </div>
    </section>
  )
}

function FeatureArt({ variant }) {
  const base = `art-${variant}`
  return (
    <svg className="feature-art" viewBox="0 0 280 208" role="img" aria-label={`Иллюстрация: ${variant}`}>
      <defs>
        <radialGradient id={`${base}-aura`}><stop stopColor="#f8334c" stopOpacity=".30"/><stop offset="1" stopColor="#f8334c" stopOpacity="0"/></radialGradient>
        <linearGradient id={`${base}-red`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ff9aa2"/><stop offset=".4" stopColor="#e5263d"/><stop offset="1" stopColor="#691222"/></linearGradient>
        <linearGradient id={`${base}-metal`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e0e9fa"/><stop offset=".50" stopColor="#8c9db8"/><stop offset="1" stopColor="#25344b"/></linearGradient>
        <filter id={`${base}-blur`} x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="13"/></filter>
      </defs>
      <ellipse cx="140" cy="104" rx="110" ry="90" fill={`url(#${base}-aura)`}/>
      <ellipse cx="140" cy="172" rx="101" ry="21" stroke="#f84759" strokeOpacity=".42" strokeWidth="1.5" fill="none"/>
      <ellipse cx="140" cy="174" rx="74" ry="13" stroke="#f84759" strokeOpacity=".23" fill="none"/>
      <path d="M40 164C86 154 181 156 240 165" stroke="#f93b50" strokeOpacity=".38" strokeWidth="1.2" fill="none"/>
      {variant === 'speed' && <>
        <circle cx="140" cy="96" r="64" stroke="#ed334a" strokeOpacity=".43" strokeDasharray="3 10" fill="none"/>
        <circle cx="140" cy="96" r="50" stroke="#708198" strokeOpacity=".3" fill="none"/>
        <path d="m153 27-54 77h39l-16 75 70-99h-42l3-53Z" fill="#fa3049" opacity=".45" filter={`url(#${base}-blur)`}/>
        <path d="m153 27-54 77h39l-16 75 70-99h-42l3-53Z" fill={`url(#${base}-red)`} stroke="#ffc1c7" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="m154 46-39 57h38l-16 48" stroke="#ffe5e9" strokeOpacity=".6" strokeWidth="3" fill="none"/>
        <path d="m70 62-20-6m29 29-29 1m139 39 19 8" stroke="#ed5c74" strokeWidth="3" strokeLinecap="round"/>
      </>}
      {variant === 'privacy' && <>
        <path d="M96 85V66a44 44 0 0 1 88 0v19" stroke="#e9465c" strokeWidth="18" strokeLinecap="round" fill="none" opacity=".34" filter={`url(#${base}-blur)`}/>
        <path d="M96 85V66a44 44 0 0 1 88 0v19" stroke={`url(#${base}-metal)`} strokeWidth="14" strokeLinecap="round" fill="none"/>
        <rect x="88" y="79" width="104" height="91" rx="17" fill={`url(#${base}-metal)`} stroke="#dae3f5" strokeOpacity=".68" strokeWidth="2"/>
        <rect x="100" y="92" width="80" height="65" rx="10" fill="#0e1626" stroke="#f53b50" strokeOpacity=".7"/>
        <path d="M140 107c-14 0-23 11-23 23 0 15 16 26 23 29 8-3 23-14 23-29 0-12-9-23-23-23Z" fill={`url(#${base}-red)`}/>
        <circle cx="140" cy="127" r="5" fill="#fff"/><path d="M140 131v13" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
        <path d="m70 64-8-7m149 12 8-7" stroke="#ff8993" strokeWidth="2"/>
      </>}
      {variant === 'secure' && <>
        <path d="m140 20 68 28v54c0 44-29 70-68 89-39-19-68-45-68-89V48l68-28Z" fill="#f03d53" opacity=".28" filter={`url(#${base}-blur)`}/>
        <path d="m140 20 68 28v54c0 44-29 70-68 89-39-19-68-45-68-89V48l68-28Z" fill={`url(#${base}-metal)`} stroke="#d8e1f1" strokeWidth="2.5"/>
        <path d="m140 36 53 22v43c0 34-22 55-53 72-31-17-53-38-53-72V58l53-22Z" fill="#0e1827" stroke="#ff6171" strokeOpacity=".8" strokeWidth="2.5"/>
        <path d="m111 106 20 20 40-42" stroke="#ff4257" strokeWidth="11" strokeLinejoin="round" strokeLinecap="round" fill="none"/>
        <path d="m111 106 20 20 40-42" stroke="#ffbdc5" strokeWidth="3.2" strokeLinejoin="round" strokeLinecap="round" fill="none"/>
      </>}
      {variant === 'rates' && <>
        <g fill="none" stroke="#7187a4" strokeOpacity=".4"><path d="M63 148V72m38 76V48m38 100V93m38 55V38m38 110V77"/></g>
        <g stroke="#e0e9f4" strokeWidth="1.5">
          <rect x="55" y="110" width="15" height="32" rx="2" fill="#7c2139"/>
          <rect x="93" y="68" width="15" height="42" rx="2" fill="#cf3450"/>
          <rect x="131" y="116" width="15" height="25" rx="2" fill="#ed6474"/>
          <rect x="169" y="55" width="15" height="59" rx="2" fill="#e72d47"/>
          <rect x="207" y="92" width="15" height="34" rx="2" fill="#ff7386"/>
        </g>
        <path d="m53 120 55-29 32 15 40-45 38-22" stroke="#ef3e56" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="m195 38 25-2-3 26" stroke="#ffb2bd" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="180" cy="61" r="31" fill="#f03047" opacity=".16"/>
      </>}
      <circle cx="51" cy="106" r="2" fill="#ff8491"/><circle cx="224" cy="134" r="3" fill="#d7e5ff" opacity=".7"/>
    </svg>
  )
}

function Advantages() {
  return (
    <section className="advantages section" id="advantages">
      <div className="shell">
        <SectionHeading eyebrow="02 / НАШИ ПРЕИМУЩЕСТВА" title={<>Каждая деталь <span>имеет значение.</span></>} text="Четыре принципа, на которых строится удобный обмен цифровых активов." center />
        <div className="advantages__grid">
          {cards.map(card => (
            <article className="advantage-card reveal" key={card.id}>
              <div className="advantage-card__top"><span>{card.n} / 04</span><ArrowUpRight size={17}/></div>
              <FeatureArt variant={card.id}/>
              <div className="advantage-card__tag">{card.tag}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
        <div className="advantages__cta reveal"><div><div className="eyebrow">NEXT MOVE / QUICKX</div><h3>Готовы обсудить обмен?</h3><p>Уточните актуальный курс, доступные направления и порядок сделки.</p></div><ContactButton/></div>
      </div>
    </section>
  )
}

function FAQ() {
  const [expanded, setExpanded] = useState(null)
  return (
    <section className="faq section" id="faq">
      <div className="shell">
        <div className="faq__head">
          <SectionHeading eyebrow="03 / FAQ" title={<>Вопросы <span>и ответы.</span></>} />
          <p className="faq__aside reveal">Не нашли ответ? Уточните детали напрямую у менеджера — поможем сориентироваться в условиях.</p>
        </div>
        <div className="faq__grid">
          {questions.map(({question, answer}, i) => (
            <div className={`faq-item ${expanded === i ? 'faq-item--open' : ''}`} key={question}>
              <h3><button type="button" onClick={() => setExpanded(expanded === i ? null : i)} aria-controls={`faq-panel-${i}`} aria-expanded={expanded === i}><span>{question}</span><ChevronDown size={20}/></button></h3>
              <div className="faq-item__answer" id={`faq-panel-${i}`} hidden={expanded !== i}><p>{answer}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const worldPoints = [
  { name: 'Нью-Йорк', x: 293, y: 150 },
  { name: 'Лондон', x: 481, y: 116 },
  { name: 'Дубай', x: 604, y: 187 },
  { name: 'Сингапур', x: 715, y: 274 },
  { name: 'Токио', x: 846, y: 167 },
]
function WorldMap() {
  return <svg className="world-map" viewBox="0 0 1000 490" role="img" aria-label="Иллюстративная карта мира с отмеченными крупнейшими городами">
    <defs>
      <radialGradient id="mapHalo"><stop stopColor="#a9203a" stopOpacity=".19"/><stop offset="1" stopColor="#a9203a" stopOpacity="0"/></radialGradient>
      <linearGradient id="mapLine" x1="0" y1="0" x2="1"><stop stopColor="#e6314f" stopOpacity=".1"/><stop offset=".55" stopColor="#f3546a" stopOpacity=".9"/><stop offset="1" stopColor="#5d88c8" stopOpacity=".33"/></linearGradient>
    </defs>
    <ellipse cx="523" cy="245" rx="470" ry="235" fill="url(#mapHalo)"/>
    <g className="world-map__grid" stroke="#40516a" strokeWidth=".65" fill="none" opacity=".33">
      {[67,135,203,271,339,407].map(y=><path d={`M0 ${y}H1000`} key={`gy-${y}`}/>)}
      {[104,216,328,440,552,664,776,888].map(x=><path d={`M${x} 0V490`} key={`gx-${x}`}/>)}
      <ellipse cx="504" cy="232" rx="480" ry="204"/><ellipse cx="504" cy="232" rx="370" ry="204"/><ellipse cx="504" cy="232" rx="245" ry="204"/>
    </g>
    <g fill="#203047" stroke="#4d6686" strokeWidth="1.25" strokeLinejoin="round" opacity=".86">
      <path d="M70 126 103 100 135 87 173 67 233 65 262 78 292 77 330 97 328 116 310 122 310 141 286 144 277 163 260 161 242 183 226 174 211 185 193 174 183 152 161 144 150 125 122 120 103 132 83 128Z" />
      <path d="M218 191 251 182 286 188 302 214 296 234 280 258 263 277 257 321 242 343 229 334 221 301 209 274 213 246 198 220Z"/>
      <path d="M307 69 330 36 353 41 371 64 365 95 344 112 320 99Z"/>
      <path d="M467 126 487 109 508 113 516 125 535 118 552 130 568 120 601 132 609 146 625 151 627 183 606 185 605 210 588 218 571 211 563 193 550 189 539 176 517 177 511 160 490 162 478 144Z"/>
      <path d="M502 196 537 187 562 190 583 211 587 242 579 280 565 306 547 323 532 311 520 282 515 260 497 239 486 223Z"/>
      <path d="M558 119 578 96 614 94 650 72 707 61 762 74 809 60 870 70 917 105 916 139 880 163 857 187 826 190 805 210 787 222 774 249 744 254 719 236 704 213 691 198 667 190 643 183 619 160 604 146 591 134Z"/>
      <path d="M674 234 692 244 710 266 704 283 692 275Z"/>
      <path d="M726 253 740 263 759 275 751 292 728 283Z"/>
      <path d="M791 299 819 284 861 295 893 316 889 346 865 360 842 354 829 337 797 337 778 321Z"/>
      <path d="m878 222 9 9-4 24-10-12Z"/>
      <path d="M442 174 458 167 467 181 456 192Z"/>
    </g>
    <g stroke="url(#mapLine)" strokeWidth="1.8" fill="none" className="world-map__routes">
      <path d="M293 150 Q374 68 481 116"/><path d="M481 116 Q547 100 604 187"/><path d="M604 187 Q654 179 715 274"/><path d="M715 274 Q796 223 846 167"/><path d="M293 150 Q503 294 715 274"/><path d="M481 116 Q682 48 846 167"/>
    </g>
    {worldPoints.map((p,i)=><g key={p.name} transform={`translate(${p.x},${p.y})`} className="world-map__point"><circle r="17" fill="#e82e48" fillOpacity=".13"/><circle r="7.5" fill="#f13d58" fillOpacity=".25"/><circle r="3.4" fill="#ff7182" stroke="#ffe8eb" strokeWidth="1"/><text x="12" y={i % 2 ? -16 : 24} fill="#d6dce8" fontFamily="Arial,sans-serif" fontSize="13" fontWeight="600">{p.name}</text></g>)}
    <g fill="#7587a4" fontFamily="monospace" fontSize="11" opacity=".55"><text x="30" y="36">GLOBAL REACH // ILLUSTRATION</text><text x="771" y="455">QUICKX / WORLD</text></g>
  </svg>
}

function World() {
  return <section className="world section" id="world"><div className="shell world__layout">
    <div className="world__copy reveal"><div className="eyebrow"><span className="eyebrow__line"/> 04 / ГЕОГРАФИЯ</div><h2>Движение <span>без границ.</span></h2><p>Обращайтесь из разных стран мира. Менеджер уточнит доступные способы обмена и условия для вашей локации.</p><div className="world__note"><span><MapPin size={25}/></span><div><strong>Наличие офиса в вашем городе</strong><small>Уточняйте непосредственно у менеджера. Отмеченные города на карте приведены для иллюстрации.</small></div></div><ContactButton className="world__cta"/></div>
    <div className="world__visual reveal"><WorldMap /></div>
  </div></section>
}

function SupportArt() {
  return <div className="support-art" role="img" aria-label="Декоративная анимированная эмблема 24/7">
    <div className="support-art__aura"/><div className="support-art__orbit support-art__orbit--one"/><div className="support-art__orbit support-art__orbit--two"/>
    <div className="support-art__disc"><div>24<span>/</span>7</div><small>ALWAYS CONNECTED</small></div>
    <span className="support-art__satellite support-art__satellite--a"><Globe2 size={29}/></span><span className="support-art__satellite support-art__satellite--b"><Activity size={31}/></span><span className="support-art__satellite support-art__satellite--c"><MessageCircle size={25}/></span>
  </div>
}

function Support() {
  return <section className="support section" id="support"><div className="shell support__layout"><div className="support__art reveal"><SupportArt /></div><div className="support__copy reveal"><div className="eyebrow"><span className="eyebrow__line"/> 05 / ВСЕГДА НА СВЯЗИ</div><h2>Работаем <span>24 на 7.</span></h2><p>Криптовалютный рынок не останавливается — и возможность связаться с нами тоже. Отправьте запрос в любое время, чтобы обсудить курс, направление и детали сделки.</p><div className="support__features"><span><Headphones size={25}/> Онлайн-общение</span><span><Clock3 size={25}/> 24/7</span><span><Globe2 size={25}/> По всему миру</span><span><CheckCircle2 size={25}/> Условия заранее</span></div><ContactButton className="support__cta">Написать менеджеру</ContactButton></div></div></section>
}

function Footer() {
  return <footer className="footer" id="contacts"><div className="shell">
    <div className="footer__banner reveal"><div><div className="eyebrow"><span className="eyebrow__line"/> QUICKX / GET STARTED</div><h2>Ваш следующий обмен<br/><span>начинается здесь.</span></h2><p>Свяжитесь с менеджером и узнайте актуальные условия.</p></div><ContactButton light/></div>
    <div className="footer__bottom"><Logo footer/><div className="footer__legal"><span>© {new Date().getFullYear()} {BRAND}. Все права защищены.</span><span>Информация носит ознакомительный характер. Доступность услуг, условия и требования зависят от юрисдикции и уточняются у менеджера.</span></div><a href="#top" className="footer__up">Наверх <ArrowUpRight size={18}/></a></div>
  </div></footer>
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('reveal--visible'))
      return
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible')
          observer.unobserve(entry.target)
        }
      })
    }, {threshold: .08, rootMargin: '0px 0px -25px 0px'})
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return <div className="site"><a className="skip-link" href="#main">К содержанию</a><Header/><main id="main"><Hero/><Ticker/><About/><Advantages/><FAQ/><World/><Support/></main><Footer/></div>
}
