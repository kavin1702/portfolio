// Small inline SVG icon set (no icon library, so nothing extra to download).
const paths = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  external: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
  github: <path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.8 2.3 5.8 2.6 5.8 2.6a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  badge: <><circle cx="12" cy="9" r="5" /><path d="m9 13.5-1.5 7 4.5-2.5 4.5 2.5-1.5-7" /></>,
  headset: <><path d="M3 10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4l-1.5-2h-3L9 17H5a2 2 0 0 1-2-2z" /><circle cx="8" cy="12.5" r="1.3" /><circle cx="16" cy="12.5" r="1.3" /></>,
  pin: <><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  play: <path d="M7 4v16l13-8z" />,
  cap: <><path d="m2 9 10-5 10 5-10 5z" /><path d="M6 11v5c2 2 10 2 12 0v-5" /></>,
  art: <><path d="M3 17.5 8.5 8l3 5.2" /><path d="M10 17.5h11L15.5 8l-2.2 3.8" /><path d="M3 17.5h5.5" /></>,
  download: <path d="M12 4v11m-5-5 5 5 5-5M5 20h14" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />,
  chat: <path d="M4 5h16v11H9l-5 4z" />,
};

export function Icon({ name }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
