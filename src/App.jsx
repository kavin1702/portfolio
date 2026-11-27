import { useEffect, useMemo, useRef, useState } from 'react';
import {
  profile, stats, about, experience, skillGroups, projects, categories, certifications, education,
} from './data.js';
import { useReveal } from './useReveal.js';
import { Icon } from './Icon.jsx';

const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  }, []);
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked: still switch for this visit */ }
    setTheme(next);
  };
  return (
    <button className="theme-toggle" onClick={toggle} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
    </button>
  );
}

function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (ref.current) ref.current.style.setProperty('--p', h > 0 ? String(window.scrollY / h) : '0');
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  return <div className="progress" ref={ref} aria-hidden="true" />;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#top" className="logo" aria-label="Kavin M N, back to top">
          <span className="logo__mark">K</span>
          <span className="logo__text">Kavin</span>
        </a>
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'is-active' : ''} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn btn--small nav__cta">
            <Icon name="github" /> GitHub
          </a>
        </nav>
        <div className="header__tools">
          <ThemeToggle />
          <button
            className={`burger ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}

const TECH = ['Unity 6', 'C#', 'Meta XR SDK', 'OpenXR', 'XR Interaction Toolkit', 'Hand Tracking', 'Passthrough', 'AR Foundation', 'ARCore', 'URP', 'Blender', 'Substance Painter', 'Git'];

// Tilts the photo card in 3D as the mouse moves over the hero (desktop only).
function useTilt() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const hero = el.closest('.hero');
    let raf = 0;
    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--rx', `${(-y * 10).toFixed(2)}deg`);
        el.style.setProperty('--ry', `${(x * 14).toFixed(2)}deg`);
        hero.style.setProperty('--mx', `${e.clientX - r.left}px`);
        hero.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    };
    const onLeave = () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); };
    hero.addEventListener('pointermove', onMove);
    hero.addEventListener('pointerleave', onLeave);
    return () => { hero.removeEventListener('pointermove', onMove); hero.removeEventListener('pointerleave', onLeave); cancelAnimationFrame(raf); };
  }, []);
  return ref;
}

function Hero() {
  const tilt = useTilt();
  const first = profile.name.split(' ')[0];
  return (
    <section className="hero" id="top">
      <div className="hero__floor" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__spot" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow reveal">
            <span className="dot" /> {profile.status}
          </p>
          <h1 className="hero__title reveal">
            <span className="hero__hello">Hi, I'm {profile.name} <span className="wave" aria-hidden="true">👋</span></span>
            <span className="hero__headline">
              I build <span className="grad-text">XR worlds</span> you can step inside.
            </span>
          </h1>
          <p className="hero__intro reveal">
            <strong>{profile.role}</strong> crafting VR, MR and AR training simulations in Unity 6 and C#. Currently shipping XR simulations at <strong>8chili</strong>.
          </p>
          <div className="hero__actions reveal">
            <a href="#work" className="btn btn--primary">See my work <Icon name="arrow" /></a>
            {profile.resumeUrl ? (
              <a href={`${import.meta.env.BASE_URL}${profile.resumeUrl}`} className="btn" target="_blank" rel="noreferrer"><Icon name="download" /> Resume</a>
            ) : (
              <a href="#contact" className="btn">Get in touch</a>
            )}
          </div>
          <div className="hero__social reveal">
            <span>Find me on</span>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
            {profile.links.artstation && <a href={profile.links.artstation} target="_blank" rel="noreferrer" aria-label="ArtStation"><Icon name="art" /></a>}
            {profile.email && <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" /></a>}
          </div>
        </div>

        <div className="hero__visual reveal">
          <div className="hero__orbit" aria-hidden="true"><span /><span /></div>
          <div className="hero__card" ref={tilt}>
            {profile.photo ? (
              <img src={asset(profile.photo)} alt={`${profile.name}, Unity and XR developer`} width="640" height="853" fetchpriority="high" decoding="async" />
            ) : (
              <div className="hero__monogram" aria-hidden="true">{first[0]}</div>
            )}
            <div className="chip chip--a"><Icon name="badge" /><span><b>Unity Certified</b>Associate · Game Dev</span></div>
            <div className="chip chip--b"><Icon name="headset" /><span><b>Meta Quest</b>VR · MR · Hand tracking</span></div>
          </div>
        </div>
      </div>

      <div className="marquee reveal" aria-label="Tech stack">
        <div className="marquee__track">
          {[...TECH, ...TECH].map((t, i) => (
            <span key={i} aria-hidden={i >= TECH.length}>{t}</span>
          ))}
        </div>
      </div>

      <div className="container">
        <ul className="stats reveal">
          {stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SectionHead({ index, title, kicker }) {
  return (
    <div className="section__head reveal">
      <span className="section__index">{index}</span>
      <h2>{title}</h2>
      {kicker && <p>{kicker}</p>}
    </div>
  );
}

const CAT_LABEL = { vr: 'VR', mr: 'MR', ar: 'AR', game: 'Game', web: 'Web' };

const asset = (path) => (/^https?:/.test(path) ? path : `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`);

function youTubeId(url) {
  const m = url && url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : null;
}

const coverOf = (p) => (p.image ? asset(p.image) : youTubeId(p.video) ? `https://i.ytimg.com/vi/${youTubeId(p.video)}/hqdefault.jpg` : null);

function ProjectCard({ p, big, onOpen }) {
  const [broken, setBroken] = useState(false);
  const cover = broken ? null : coverOf(p);
  const hasMore = p.video || p.details || p.gallery;
  return (
    <article className={`card ${big ? 'card--big' : ''} reveal`} style={{ '--h': p.hue }}>
      <button className="card__art" onClick={() => onOpen(p)} aria-label={`Open details for ${p.title}`}>
        {cover ? (
          <img src={cover} alt="" loading="lazy" decoding="async" onError={() => setBroken(true)} />
        ) : (
          <>
            <div className="card__grid" />
            <div className="card__orb" />
          </>
        )}
        <span className="card__cat">{CAT_LABEL[p.category]}</span>
        {p.video && <span className="card__play"><Icon name="play" /></span>}
      </button>
      <div className="card__body">
        <div className="card__top">
          <h3>{p.title}</h3>
          <span className="card__year">{p.year}</span>
        </div>
        <p>{p.description}</p>
        <ul className="tags">
          {p.tech.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <div className="card__links">
          {hasMore && (
            <button onClick={() => onOpen(p)}>
              {p.video ? <><Icon name="play" /> Watch demo</> : <><Icon name="arrow" /> Details</>}
            </button>
          )}
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer">
              <Icon name="github" /> Source
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer">
              <Icon name="external" /> Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ p, onClose }) {
  useEffect(() => {
    if (!p) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [p, onClose]);
  if (!p) return null;
  const yt = youTubeId(p.video);
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={p.title} onClick={onClose}>
      <div className="modal__box" style={{ '--h': p.hue }} onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">×</button>
        {yt ? (
          <div className="modal__media">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&rel=0`}
              title={`${p.title} demo video`}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
        ) : p.image ? (
          <div className="modal__media"><img src={asset(p.image)} alt={`${p.title} screenshot`} /></div>
        ) : null}
        <div className="modal__body">
          <span className="card__cat modal__cat">{CAT_LABEL[p.category]} · {p.year}</span>
          <h3>{p.title}</h3>
          {p.role && <p className="modal__role">{p.role}</p>}
          <p className="modal__desc">{p.description}</p>
          {p.details && (
            <ul className="bullets">
              {p.details.map((d) => <li key={d}>{d}</li>)}
            </ul>
          )}
          {p.gallery && (
            <div className="gallery">
              {p.gallery.map((g) => (
                <a key={g} href={asset(g)} target="_blank" rel="noreferrer">
                  <img src={asset(g)} alt={`${p.title} screenshot`} loading="lazy" decoding="async" />
                </a>
              ))}
            </div>
          )}
          <ul className="tags">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
          <div className="contact__actions">
            {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noreferrer"><Icon name="github" /> Source code</a>}
            {p.video && !yt && <a className="btn" href={p.video} target="_blank" rel="noreferrer"><Icon name="play" /> Watch video</a>}
            {p.demo && <a className="btn btn--primary" href={p.demo} target="_blank" rel="noreferrer">Open live <Icon name="external" /></a>}
          </div>
        </div>
      </div>
    </div>
  );
}

function Work() {
  const [cat, setCat] = useState('all');
  const [open, setOpen] = useState(null);
  const featured = projects.filter((p) => p.featured);
  const list = useMemo(
    () => projects.filter((p) => !p.featured && (cat === 'all' || p.category === cat)),
    [cat],
  );
  const counts = useMemo(() => {
    const c = { all: projects.filter((p) => !p.featured).length };
    projects.forEach((p) => { if (!p.featured) c[p.category] = (c[p.category] || 0) + 1; });
    return c;
  }, []);

  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHead index="01" title="Selected work" kicker="XR training simulations, mixed reality games and Unity prototypes. Press play on a card to watch the demo." />
        <div className="featured">
          {featured.map((p, i) => <ProjectCard key={p.title} p={p} big={i < 2} onOpen={setOpen} />)}
        </div>

        <div className="more reveal">
          <h3 className="more__title">More projects</h3>
          <div className="filters" role="tablist" aria-label="Filter projects">
            {categories.filter((c) => counts[c.id]).map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={cat === c.id}
                className={cat === c.id ? 'is-active' : ''}
                onClick={() => setCat(c.id)}
              >
                {c.label} <span>{counts[c.id]}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid" key={cat}>
          {list.map((p) => <ProjectCard key={p.title} p={p} onOpen={setOpen} />)}
        </div>
        <ProjectModal p={open} onClose={() => setOpen(null)} />
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <SectionHead index="02" title="Experience" kicker="Real studio work on XR simulations, from storyboard to QA." />
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.company} className="timeline__item reveal">
              <div className="timeline__meta">
                <span className="timeline__period">{e.period}</span>
              </div>
              <div className="timeline__body">
                <h3>{e.role} <span className="at">@ {e.company}</span></h3>
                <p className="timeline__summary">{e.summary}</p>
                <ul className="bullets">
                  {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
                <ul className="tags">
                  {e.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead index="03" title="Toolkit" kicker="What I reach for when building an XR experience." />
        <div className="skills">
          {skillGroups.map((g) => (
            <div key={g.title} className="skill reveal">
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section section--alt" id="about">
      <div className="container about">
        <div>
          <SectionHead index="04" title="About" />
          <div className="about__text">
            {about.map((p) => <p key={p} className="reveal">{p}</p>)}
          </div>
        </div>
        <aside className="about__side">
          <div className="panel reveal">
            <h3><Icon name="badge" /> Certification</h3>
            {certifications.map((c) => (
              <a key={c.title} className="cert" href={c.url} target="_blank" rel="noreferrer">
                <strong>{c.title}</strong>
                <span>{c.issuer}</span>
                <span className="small">{c.date}</span>
                <span className="cert__link">Verify on Credly <Icon name="external" /></span>
              </a>
            ))}
          </div>
          <div className="panel reveal">
            <h3><Icon name="cap" /> Education</h3>
            {education.map((e) => (
              <div key={e.title} className="edu">
                <strong>{e.title}</strong>
                <span>{e.place}</span>
                <span className="small">{e.period}</span>
              </div>
            ))}
          </div>
          <div className="panel reveal">
            <h3><Icon name="chat" /> Languages</h3>
            <p className="small">English · Tamil</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    profile.email && { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
    { label: 'LinkedIn', value: 'in/kavin-mn', href: profile.links.linkedin, icon: 'linkedin' },
    { label: 'GitHub', value: '@kavin1702', href: profile.links.github, icon: 'github' },
    { label: 'ArtStation', value: '3D art', href: profile.links.artstation, icon: 'art' },
    { label: 'Credly', value: 'Unity certification', href: profile.links.credly, icon: 'badge' },
  ].filter(Boolean);

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__box reveal">
          <span className="section__index">05</span>
          <h2>Let's build something<br /><span className="accent">immersive</span>.</h2>
          <p>I'm looking for Unity and XR developer roles and interesting simulation projects. {profile.email ? 'Drop me an email or message me on LinkedIn.' : 'The fastest way to reach me is LinkedIn.'}</p>
          <div className="contact__actions">
            <a className="btn btn--primary" href={profile.email ? `mailto:${profile.email}` : profile.links.linkedin} target="_blank" rel="noreferrer">
              {profile.email ? 'Email me' : 'Message me on LinkedIn'} <Icon name="arrow" />
            </a>
            {profile.resumeUrl && (
              <a className="btn" href={`${import.meta.env.BASE_URL}${profile.resumeUrl}`} target="_blank" rel="noreferrer"><Icon name="download" /> Download resume</a>
            )}
          </div>
          <ul className="contact__list">
            {items.map((i) => (
              <li key={i.label}>
                <a href={i.href} target="_blank" rel="noreferrer">
                  <Icon name={i.icon} />
                  <span><small>{i.label}</small>{i.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="small">Built with React and Vite · Deployed on GitHub Pages</span>
        <a href="#top" className="small">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <a href="#work" className="skip">Skip to content</a>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
