import { useEffect, useMemo, useState } from 'react';
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
      <div className="container header__inner">
        <a href="#top" className="logo" aria-label="Kavin M N, back to top">
          <span className="logo__mark">K</span>
          <span className="logo__text">kavin<span className="accent">.xr</span></span>
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
        <button
          className={`burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__floor" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="cube-wrap" aria-hidden="true">
        <div className="cube">
          {['front', 'back', 'right', 'left', 'top', 'bottom'].map((f) => <span key={f} className={`cube__face cube__face--${f}`} />)}
        </div>
        <div className="cube-shadow" />
      </div>
      <div className="container hero__inner">
        <p className="eyebrow reveal">
          <span className="dot" /> {profile.status}
        </p>
        <h1 className="hero__title reveal">
          {profile.name.split(' ')[0]} <span className="muted">{profile.name.split(' ').slice(1).join(' ')}</span>
          <span className="hero__role">{profile.role}<span className="caret" aria-hidden="true">_</span></span>
        </h1>
        <p className="hero__tagline reveal">{profile.tagline}</p>
        <p className="hero__intro reveal">{profile.intro}</p>
        <div className="hero__actions reveal">
          <a href="#work" className="btn btn--primary">See my work <Icon name="arrow" /></a>
          <a href="#contact" className="btn">Get in touch</a>
        </div>
        <ul className="hero__meta reveal">
          <li><Icon name="badge" /> Unity Certified Associate</li>
          <li><Icon name="headset" /> Meta Quest · OpenXR</li>
          <li><Icon name="pin" /> {profile.location}</li>
        </ul>
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

function ProjectCard({ p, big }) {
  return (
    <article className={`card ${big ? 'card--big' : ''} reveal`} style={{ '--h': p.hue }}>
      <div className="card__art" aria-hidden="true">
        <div className="card__grid" />
        <div className="card__orb" />
        <span className="card__cat">{CAT_LABEL[p.category]}</span>
      </div>
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
          <a href={p.repo} target="_blank" rel="noreferrer">
            <Icon name="github" /> Source
          </a>
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer">
              <Icon name="play" /> Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Work() {
  const [cat, setCat] = useState('all');
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
        <SectionHead index="01" title="Selected work" kicker="XR training simulations, mixed reality games and Unity prototypes. Every card links to the source." />
        <div className="featured">
          {featured.map((p, i) => <ProjectCard key={p.title} p={p} big={i < 2} />)}
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
          {list.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
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
    <section className="section" id="about">
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
    { label: 'Credly', value: 'Unity certification', href: profile.links.credly, icon: 'badge' },
  ].filter(Boolean);

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__box reveal">
          <span className="section__index">05</span>
          <h2>Let's build something<br /><span className="accent">immersive</span>.</h2>
          <p>I'm looking for Unity and XR developer roles and interesting simulation projects. The fastest way to reach me is LinkedIn.</p>
          <div className="contact__actions">
            <a className="btn btn--primary" href={profile.email ? `mailto:${profile.email}` : profile.links.linkedin} target="_blank" rel="noreferrer">
              {profile.email ? 'Email me' : 'Message me on LinkedIn'} <Icon name="arrow" />
            </a>
            {profile.resumeUrl && (
              <a className="btn" href={profile.resumeUrl} target="_blank" rel="noreferrer">Download resume</a>
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
