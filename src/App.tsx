import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowDown, ArrowDownRight, ArrowLeft, ArrowUpRight, X } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { disciplines, milestones, projects, type Project } from './data'

gsap.registerPlugin(ScrollTrigger)

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
]

function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}><span className="eyebrow-dot" />{children}</p>
}

function Navigation() {
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    let previous = window.scrollY
    let scheduled = false
    const update = () => {
      const current = window.scrollY
      const delta = current - previous
      if (Math.abs(delta) > 7) {
        setHidden(current > 100 && delta > 0)
        previous = current
      }
      scheduled = false
    }
    const onScroll = () => {
      if (!scheduled) {
        window.requestAnimationFrame(update)
        scheduled = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  return (
    <header className={`site-header ${hidden && !menuOpen ? 'is-hidden' : ''} ${menuOpen ? 'menu-is-open' : ''}`}>
      <a className="wordmark" href="#home" aria-label="Nisam — back to top" onClick={() => setMenuOpen(false)}>Nisam<span>®</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item, i) => <a key={item.href} href={item.href} className="nav-link"><span className="nav-index">0{i + 1}</span>{item.label}</a>)}
      </nav>
      <a href="mailto:hello@example.com" className="header-availability"><span className="availability-dot" />Get in touch <ArrowUpRight size={13} /></a>
      <button className="mobile-menu-toggle" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(v => !v)}>
        {menuOpen ? <X size={20} /> : <span className="menu-label">Menu</span>}
      </button>
      <div className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        {navItems.map((item, i) => <a key={item.href} href={item.href} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}><span>0{i + 1}</span>{item.label}<ArrowUpRight size={18} /></a>)}
        <a className="mobile-mail" href="mailto:hello@example.com" tabIndex={menuOpen ? 0 : -1}>Say hello ↗</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-topline"><Eyebrow>A small corner of the internet</Eyebrow><span className="hero-top-note">PERSONAL SPACE&nbsp; / &nbsp;2025—26</span></div>
      <div className="hero-main">
        <div className="hero-title-wrap">
          <h1 id="hero-title" className="hero-title"><span className="hero-line"><span>Ideas,</span></span><span className="hero-line hero-line-last"><i className="serif-word">in</i><span> good</span></span><span className="hero-line hero-line-third"><span>company.</span><span className="hero-star" aria-hidden="true">✳</span></span></h1>
        </div>
        <div className="hero-aside">
          <div className="hero-asterisk" aria-hidden="true"><span>y</span><i>✳</i></div>
          <p className="hero-intro">A considered collection of things made, things noticed, and things still taking shape.</p>
          <a className="text-link hero-link" href="#intro">Scroll a little <ArrowDown size={15} /></a>
        </div>
      </div>
      <div className="hero-bottom"><span className="mono">SCROLL TO EXPLORE <ArrowDown size={12} /></span><span className="hero-bottom-center">A WORK IN PROGRESS, BY DESIGN.</span><span className="mono">01 — 06</span></div>
      <div className="hero-side-label mono" aria-hidden="true">FIG. 01&nbsp; / &nbsp;A BEGINNING</div>
      <div className="hero-rule" />
    </section>
  )
}

function Intro() {
  return (
    <section className="intro section-pad" id="intro">
      <div className="intro-meta"><Eyebrow>A note to begin</Eyebrow><span className="mono intro-coordinate">SOMEWHERE, ONLINE&nbsp; · &nbsp;26°N</span></div>
      <div className="intro-copy" data-intro-copy><span className="intro-line">Not everything needs</span><span className="intro-line intro-line-indent">to be figured out.</span><span className="intro-line intro-line-last">Some things just need <i>a little room.</i></span></div>
      <div className="intro-foot"><span className="intro-mark">✳</span><p>A place for collecting ideas, following curiosity, and making sense of it all as I go.</p><span className="mono">A THOUGHT, NOT A MANIFESTO</span></div>
    </section>
  )
}

function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="section-heading about-heading"><Eyebrow>01 / A little context</Eyebrow><span className="section-number mono">GETTING TO KNOW THE SPACE</span></div>
      <div className="about-grid">
        <div className="about-visual" data-about-visual>
          <div className="about-image-frame"><img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=85" alt="Sunlit, quiet studio corner with a chair, plant and small table" loading="lazy" /><div className="image-overlay-note mono">A PLACE TO PAUSE<br />AND LOOK CLOSER</div></div>
          <div className="about-image-caption"><span className="caption-asterisk">✳</span><span className="mono">A STUDY IN QUIET THINGS</span><span className="mono">FIG. 02</span></div>
        </div>
        <div className="about-copy" data-about-copy>
          <span className="about-dropcap">Y</span>
          <h2>A little less about having it all figured out. <i>A little more about paying attention.</i></h2>
          <p className="body-copy">This is an evolving personal space for ideas, experiments and the occasional finished thing. A home for looking closely, following a thread, and seeing where it leads.</p>
          <p className="body-copy body-copy-small">The details here are deliberately open-ended. What matters is the practice of making, noticing and beginning again.</p>
          <a className="round-link" href="#contact" aria-label="Go to contact"><ArrowDownRight size={18} /></a>
          <span className="mono about-note">A SHORT INTRODUCTION<br />NO FIXED VERSION YET</span>
        </div>
      </div>
      <div className="about-bottom-rule"><span className="mono">A SPACE FOR WHAT'S NEXT</span><span /></div>
    </section>
  )
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (project: Project, trigger: HTMLElement) => void }) {
  return (
    <article className={`project-card project-${project.layout}`} data-project-card data-index={index}>
      <button className="project-image-button" onClick={event => onOpen(project, event.currentTarget)} aria-label={`Open ${project.title} sample details`}>
        <span className="project-image"><img src={project.image} alt={project.alt} loading="lazy" /><span className="project-image-index mono">{project.number} / 03</span><span className="project-image-arrow"><ArrowUpRight size={20} /></span></span>
      </button>
      <div className="project-info">
        <div className="project-title-row"><span className="mono project-num">{project.number}</span><h3>{project.title}</h3><span className="project-year mono">{project.year}</span></div>
        <p className="project-desc">{project.description}</p>
        <div className="project-meta"><span className="mono">{project.category}</span><button className="text-link project-open" onClick={event => onOpen(project, event.currentTarget)}>View study <ArrowUpRight size={13} /></button></div>
      </div>
    </article>
  )
}

function Projects({ onOpen }: { onOpen: (project: Project, trigger: HTMLElement) => void }) {
  return (
    <section className="projects section-pad" id="projects">
      <div className="section-heading projects-heading"><div><Eyebrow>02 / Selected explorations</Eyebrow><h2>A few things, <i>for now.</i></h2></div><p className="mono projects-caption">THREE STUDIES<br />MADE TO BE REPLACED</p></div>
      <div className="demo-notice"><span className="notice-symbol">✳</span><p>These are demonstration pieces, created as placeholders. The titles, stories and imagery are all ready for Nisam's own work.</p><span className="mono">SAMPLE WORK</span></div>
      <div className="project-list">{projects.map((project, i) => <ProjectCard key={project.number} project={project} index={i} onOpen={onOpen} />)}</div>
      <div className="projects-end"><span className="mono">A SMALL COLLECTION, FOR NOW</span><span className="projects-end-line" /><span className="mono">03 — 03</span></div>
    </section>
  )
}

function Featured() {
  return (
    <section className="featured section-pad" id="featured">
      <div className="section-heading featured-heading"><Eyebrow>03 / A closer look</Eyebrow><span className="section-number mono">A DEMONSTRATION STORY</span></div>
      <div className="featured-layout">
        <div className="featured-sticky">
          <div className="featured-topline"><span className="mono">FIELD NOTE NO. 01</span><span className="featured-cross">✳</span></div>
          <div className="featured-image-wrap"><img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1600&q=85" alt="Warm light and natural objects arranged in a restrained interior" loading="lazy" /><div className="featured-image-label mono">FORM / LIGHT / PAUSE</div></div>
          <div className="featured-image-footer"><span className="mono">A VISUAL STUDY</span><span className="mono">01:03</span></div>
        </div>
        <div className="featured-story">
          <div className="featured-story-intro"><Eyebrow>Study one · Replaceable sample</Eyebrow><h2>The shape of <i>slowing down.</i></h2><p>A small visual story about the quiet details that can change the feeling of a room.</p></div>
          <div className="story-moment"><span className="story-number mono">01 — BEGIN WITH LESS</span><p>Space, like a sentence, changes when you let a few things go. What remains has a little more room to speak.</p><div className="story-rule" /></div>
          <div className="story-detail-image"><img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1000&q=82" alt="Sculptural ceramic still life for a sample project" loading="lazy" /><span className="mono">A SECOND LOOK / DETAIL 02</span></div>
          <div className="story-moment story-close"><span className="story-number mono">02 — NOTICE WHAT STAYS</span><p>These lines and images are a placeholder story. Replace them with the real words, process and imagery behind a project of Nisam's own.</p><a className="text-link" href="#projects">Back to the studies <ArrowLeft size={14} /></a></div>
        </div>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section className="approach section-pad" id="approach">
      <div className="section-heading approach-heading"><Eyebrow>04 / A way of looking</Eyebrow><span className="section-number mono">AN OPEN-ENDED PRACTICE</span></div>
      <div className="approach-grid">
        <div className="approach-lead"><h2>Start with a question.<br /><i>Stay for the detour.</i></h2><p className="body-copy">No fixed formula, just a few useful ways into an idea. Think of these as interests in motion, not a definitive list.</p><div className="approach-stamp"><span>WORK<br />IN<br />PROGRESS</span><i>✳</i></div></div>
        <div className="discipline-list" aria-label="Replaceable areas of interest">{disciplines.map((item, i) => <div className="discipline-row" key={item} data-discipline><span className="mono">0{i + 1}</span><span className="discipline-name">{item}</span><ArrowUpRight size={16} /><div className={`discipline-tick tick-${i + 1}`} /></div>)}<p className="mono approach-list-note">EDIT THESE WITH YOUR OWN INTERESTS</p></div>
      </div>
      <div className="approach-bottom"><span className="mono">CURIOUS FIRST, ALWAYS</span><span className="approach-thread" /></div>
    </section>
  )
}

function Journey() {
  return (
    <section className="journey section-pad" id="journey">
      <div className="section-heading journey-heading"><Eyebrow>05 / A loose timeline</Eyebrow><span className="section-number mono">THERE'S NO RUSH</span></div>
      <div className="journey-intro"><h2>Not a résumé.<br /><i>Just a few markers.</i></h2><p className="body-copy">A gentle place to note where things stand. Add real milestones whenever they feel right.</p></div>
      <div className="timeline"><div className="timeline-line"><span className="timeline-progress" /></div>{milestones.map((item, i) => <article className="timeline-item" key={item.year}><span className="timeline-dot"><i /></span><span className="timeline-year mono">{item.year}</span><div className="timeline-copy"><h3>{item.title}</h3><p>{item.note}</p></div><span className="timeline-index mono">0{i + 1}</span></article>)}</div>
      <span className="mono journey-note">THE STORY IS STILL UNFOLDING</span>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'hello@example.com'
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(email); setCopied(true); window.setTimeout(() => setCopied(false), 1800) } catch { window.location.href = `mailto:${email}` }
  }
  return (
    <section className="contact section-pad" id="contact">
      <div className="section-heading contact-heading"><Eyebrow>06 / A good place to end</Eyebrow><span className="section-number mono">OR MAYBE BEGIN</span></div>
      <div className="contact-grid"><div className="contact-main"><span className="contact-flower" aria-hidden="true">✳</span><h2>Something on<br />your <i>mind?</i></h2><p>For a note, a question, or a hello from the other side of the screen.</p><a href={`mailto:${email}`} className="contact-email">{email}<ArrowUpRight size={20} /></a><button className="copy-email" onClick={copyEmail}>{copied ? 'Copied to clipboard ✓' : 'Copy email address'}</button></div><div className="contact-aside"><span className="mono">A NOTE ABOUT THIS ADDRESS</span><p className="body-copy">This is a replaceable placeholder email address. Update it in the Contact section before sharing this page.</p><a className="contact-back" href="#home"><span>Back to the beginning</span><ArrowUpRight size={16} /></a></div></div>
      <footer className="site-footer"><a className="footer-wordmark" href="#home">Nisam<span>®</span></a><span className="mono footer-center">MADE WITH TIME, SPACE & CURIOSITY</span><a href="#home" className="back-to-top mono">BACK TO TOP ↑</a><span className="mono footer-year">© 2025—26</span></footer>
    </section>
  )
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!project) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'Tab') {
        const items = dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')
        if (!items?.length) return
        const first = items[0]
        const last = items[items.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.classList.add('dialog-open')
    return () => { document.removeEventListener('keydown', onKey); document.body.classList.remove('dialog-open') }
  }, [project, onClose])
  if (!project) return null
  return (
    <div className="project-dialog-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) onClose() }}>
      <section className="project-dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <button className="dialog-close" onClick={onClose} aria-label="Close project details" autoFocus><X size={19} /></button>
        <img className="dialog-image" src={project.image} alt={project.alt} />
        <div className="dialog-content"><Eyebrow>{project.category} · {project.year}</Eyebrow><h2 id="dialog-title">{project.title}</h2><p>{project.detail}</p><span className="mono">DEMONSTRATION CONTENT / REPLACE BEFORE LAUNCH</span><button className="text-link dialog-done" onClick={onClose}>Close study <ArrowLeft size={14} /></button></div>
      </section>
    </div>
  )
}

function MotionSystem() {
  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        heroTl.from('.hero-topline > *, .hero-main .hero-aside > *', { y: 14, opacity: 0, duration: .75, stagger: .08 }, .05)
          .from('.hero-line > span, .hero-line > i', { yPercent: 118, rotateX: -12, opacity: 0, duration: 1.15, stagger: .12, transformOrigin: '50% 100%' }, .16)
          .from('.hero-star', { scale: .4, rotate: -35, opacity: 0, duration: .8, ease: 'back.out(1.35)' }, .72)
          .from('.hero-bottom, .hero-rule', { opacity: 0, scaleX: .92, duration: .7 }, .55)

        gsap.from('.intro-line', { yPercent: 80, opacity: 0, duration: 1, stagger: .16, ease: 'power3.out', scrollTrigger: { trigger: '.intro-copy', start: 'top 80%', once: true } })
        gsap.from('.intro-foot > *', { y: 18, opacity: 0, duration: .75, stagger: .12, scrollTrigger: { trigger: '.intro-foot', start: 'top 87%', once: true } })
        gsap.from('.about-visual', { x: -55, rotate: -1.4, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: '.about-grid', start: 'top 74%', once: true } })
        gsap.from('.about-copy > *', { x: 34, opacity: 0, duration: .85, stagger: .1, ease: 'power3.out', scrollTrigger: { trigger: '.about-grid', start: 'top 76%', once: true } })
        gsap.to('.about-image-frame img', { yPercent: 9, ease: 'none', scrollTrigger: { trigger: '.about-visual', start: 'top bottom', end: 'bottom top', scrub: .65 } })
        gsap.from('.demo-notice', { clipPath: 'inset(0 0 100% 0)', duration: .85, ease: 'power3.inOut', scrollTrigger: { trigger: '.demo-notice', start: 'top 85%', once: true } })
        gsap.utils.toArray<HTMLElement>('[data-project-card]').forEach((card, i) => {
          const fromX = i === 1 ? 52 : i === 2 ? -36 : 0
          const fromY = i === 0 ? 38 : i === 1 ? 6 : 40
          gsap.from(card, { x: fromX, y: fromY, rotateY: i === 1 ? -4 : i === 2 ? 3 : 0, opacity: 0, duration: 1.15, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 82%', once: true } })
          const image = card.querySelector('.project-image img')
          if (image) gsap.from(image, { scale: 1.16, duration: 1.35, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 84%', once: true } })
        })
        gsap.from('.featured-sticky', { clipPath: 'inset(10% 0 10% 0)', scale: .96, opacity: 0, duration: 1.1, ease: 'power3.inOut', scrollTrigger: { trigger: '.featured-layout', start: 'top 76%', once: true } })
        gsap.from('.featured-story-intro > *, .story-moment > *, .story-detail-image > *', { y: 22, opacity: 0, duration: .8, stagger: .09, ease: 'power3.out', scrollTrigger: { trigger: '.featured-story', start: 'top 77%', once: true } })
        gsap.to('.featured-image-wrap img', { yPercent: 7, ease: 'none', scrollTrigger: { trigger: '.featured-layout', start: 'top bottom', end: 'bottom top', scrub: .8 } })
        gsap.from('.approach-lead > *', { x: -28, opacity: 0, duration: .8, stagger: .12, scrollTrigger: { trigger: '.approach-grid', start: 'top 76%', once: true } })
        gsap.utils.toArray<HTMLElement>('[data-discipline]').forEach((row, i) => gsap.from(row, { x: 42, opacity: 0, duration: .72, delay: i * .07, ease: 'power2.out', scrollTrigger: { trigger: row, start: 'top 91%', once: true } }))
        gsap.from('.timeline-line', { scaleY: 0, transformOrigin: 'top', duration: 1.7, ease: 'power2.inOut', scrollTrigger: { trigger: '.timeline', start: 'top 78%', once: true } })
        gsap.from('.timeline-item', { x: 32, opacity: 0, duration: .8, stagger: .22, ease: 'power3.out', scrollTrigger: { trigger: '.timeline', start: 'top 73%', once: true } })
        gsap.from('.contact-main > *, .contact-aside > *', { y: 24, rotateX: -3, opacity: 0, duration: 1, stagger: .12, ease: 'power3.out', scrollTrigger: { trigger: '.contact-grid', start: 'top 76%', once: true } })
        gsap.from('.site-footer', { y: 14, opacity: 0, duration: .8, scrollTrigger: { trigger: '.site-footer', start: 'top bottom', once: true } })
      })
      return () => ctx.revert()
    })
    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set('.hero-line > span, .hero-line > i, .hero-star, .hero-topline > *, .hero-main .hero-aside > *, .hero-bottom, .hero-rule', { clearProps: 'all' })
    })
    return () => mm.revert()
  }, [])
  return null
}

function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let frame = 0
    const update = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        const total = document.documentElement.scrollHeight - window.innerHeight
        if (bar.current) bar.current.style.transform = `scaleX(${total > 0 ? window.scrollY / total : 0})`
      })
    }
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])
  return <div className="scroll-progress" ref={bar} aria-hidden="true" />
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const projectOpener = useRef<HTMLElement | null>(null)
  const openProject = useCallback((project: Project, trigger: HTMLElement) => {
    projectOpener.current = trigger
    setSelectedProject(project)
  }, [])
  const closeProject = useCallback(() => {
    setSelectedProject(null)
    window.requestAnimationFrame(() => projectOpener.current?.focus())
  }, [])
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollProgress />
      <Navigation />
      <main id="main">
        <Hero />
        <Intro />
        <About />
        <Projects onOpen={openProject} />
        <Featured />
        <Approach />
        <Journey />
        <Contact />
      </main>
      <MotionSystem />
      <ProjectDialog project={selectedProject} onClose={closeProject} />
    </>
  )
}
