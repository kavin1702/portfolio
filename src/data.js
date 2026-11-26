// ---------------------------------------------------------------
// All portfolio content lives here. Edit this file to update the site.
// Anything marked TODO is a placeholder for Kavin to fill in.
// ---------------------------------------------------------------

export const profile = {
  name: 'Kavin M N',
  role: 'XR Developer',
  tagline: 'I build training worlds you can step inside.',
  intro:
    'XR developer and Unity Certified Associate building VR, MR and AR simulations in Unity 6 and C#. I care about interactions that feel natural in the hand and scenes that stay smooth on standalone headsets.',
  location: 'Tamil Nadu, India',
  status: 'Open to XR / Unity developer roles',
  // TODO: add a public contact email if you want one on the site (left empty on purpose).
  email: '',
  // Profile photo: put the file in public/images/ and write its name here,
  // for example photo: 'images/kavin.jpg'. Leave empty to show the 3D cube instead.
  photo: '',
  // TODO: add a link to a public resume PDF (without phone number / address) if you want a download button.
  resumeUrl: '',
  links: {
    github: 'https://github.com/kavin1702',
    linkedin: 'https://www.linkedin.com/in/kavin-mn/',
    credly: 'https://www.credly.com/badges/b6fb3f0c-b320-4756-8f0f-3c0837a8f60f/public_url',
  },
};

export const stats = [
  { value: '12+', label: 'XR simulations shipped at 8chili' },
  { value: '20+', label: 'Unity projects on GitHub' },
  { value: '90%', label: 'fewer AssetBundle blockers (target of my preflight tool)' },
];

export const about = [
  'I study Immersive Technology at Bharathidasan University and spend most of my time inside Unity: building VR training drills, mixed reality games and AR prototypes for Meta Quest and mobile.',
  'At 8chili I worked across the whole simulation lifecycle, from storyboard to QA sign-off. That taught me to think like both a developer and a tester: build it, break it, fix it, ship it.',
  'Right now I am going deeper into clean C# architecture, hand tracking, passthrough and spatial understanding on Meta Quest.',
];

export const experience = [
  {
    company: '8chili',
    role: 'XR Developer Intern',
    period: '2026', // TODO: exact start and end months
    summary:
      'Contributed to 12+ Unity XR training simulations across development, testing, corrections, validation and delivery.',
    points: [
      'Built an AssetBundle preflight and blocker validator from recurring issues found with the Testing Lead, aimed at catching up to 90% of blocker issues before testing.',
      'Owned both development and testing on simulations, catching issues earlier and cutting the number of test cycles.',
      'Implemented and corrected scene lighting across multiple simulations for better clarity, immersion and XR performance.',
      'Fixed Static Panel, VR hand-tracking speed and Detect Visual issues in the assessment system, plus other system-level fixes.',
    ],
    tags: ['Unity', 'C#', 'XR', 'AssetBundles', 'Lighting', 'QA'],
  },
  {
    company: 'MH Cockpit',
    role: 'Unity Developer Intern',
    period: '3 months', // TODO: exact dates
    summary: 'Developed VR and MR applications using Unity and C#.',
    points: [
      'Built interactive tools and educational XR applications.',
      'Integrated 3D assets and improved UI/UX.',
      'Debugged and optimized performance, and delivered multiple XR modules.',
    ],
    tags: ['Unity', 'C#', 'VR', 'MR', 'UI/UX'],
  },
  {
    company: 'VRE Labs',
    role: '3D Modeling Intern',
    period: '15 days', // TODO: exact dates
    summary: 'Created 3D assets for XR projects.',
    points: [
      'Modeled assets in Blender and textured them in Substance Painter.',
      'Assisted in asset workflows and delivered optimized assets for XR.',
    ],
    tags: ['Blender', 'Substance Painter', '3D'],
  },
];

export const skillGroups = [
  {
    title: 'Engine & Language',
    items: ['Unity 6', 'C#', 'URP', 'Shader basics', 'Physics', 'Animation', 'UI (uGUI / TMP)'],
  },
  {
    title: 'XR',
    items: ['XR Interaction Toolkit', 'Meta XR SDK', 'OpenXR', 'XR Hands (hand tracking)', 'Passthrough / MR', 'AR Foundation (ARCore / ARKit)'],
  },
  {
    title: 'Workflow',
    items: ['Git & GitHub', 'AssetBundles', 'Scene lighting', 'Testing & QA', 'Debugging & optimization', 'Storyboard to delivery'],
  },
  {
    title: '3D & Web',
    items: ['Blender', 'Substance Painter', 'Unity WebGL', 'HTML / CSS / JS', 'React', 'Next.js'],
  },
];

// ---------------------------------------------------------------
// PROJECTS
// Required: title, category, year, description, tech, repo, hue
//   category: 'vr' | 'mr' | 'ar' | 'game' | 'web'
//   hue: colour of the card (0-360) when there is no image
// Optional (add any of these to a project):
//   image:   'images/fire-safety.jpg'        -> cover photo (file in public/images/)
//   gallery: ['images/fire-1.jpg', ...]     -> extra screenshots shown in the details window
//   video:   'https://youtu.be/XXXXXXXXXXX' -> YouTube demo, played inside the details window
//   demo:    'https://...'                  -> any other link (WebGL build, itch.io, APK...)
//   role:    'Solo developer'               -> your role on the project
//   details: ['What you built...', ...]     -> bullet points shown in the details window
// ---------------------------------------------------------------
export const projects = [
  {
    title: 'VR Fire Safety Drill',
    category: 'vr',
    featured: true,
    year: '2026',
    description:
      'A step-by-step VR fire drill: break the glass, raise the alarm, call the fire service, pull the extinguisher pin and put out a fire that shrinks as you aim the hose. Voice guidance walks the trainee through each step.',
    tech: ['Unity 6', 'XR Interaction Toolkit', 'OpenXR', 'C#'],
    repo: 'https://github.com/kavin1702/VR_Fire_Safety',
    hue: 18,
  },
  {
    title: 'VR Molecular Chemistry Lab',
    category: 'vr',
    featured: true,
    year: '2026',
    description:
      'Grab atoms with your hands and bond them into molecules. A bond manager checks atom requirements against molecule data, and a break zone splits molecules apart again.',
    tech: ['Unity 6.3', 'XR Hands', 'XR Interaction Toolkit', 'C#'],
    repo: 'https://github.com/kavin1702/VR-Molecular-Chemistry-Lab',
    hue: 190,
  },
  {
    title: 'MR Drop Game', // TODO: real project name
    category: 'mr',
    featured: true,
    year: '2025',
    description:
      'A mixed reality game for Meta Quest with passthrough, where physics cylinders drop into your real room on a timer, with scoring, a start panel and restart.',
    tech: ['Meta XR SDK', 'OpenXR', 'Passthrough', 'Physics'],
    repo: 'https://github.com/kavin1702/MR-Random',
    hue: 280,
  },
  {
    title: 'AR Object Detection',
    category: 'ar',
    featured: true,
    year: '2026',
    description:
      'A mobile AR project on AR Foundation with plane detection for Android and iOS. Work in progress.', // TODO: add what it detects and a demo
    tech: ['Unity 6.3', 'AR Foundation', 'ARCore', 'ARKit'],
    repo: 'https://github.com/kavin1702/ar_object_detection',
    hue: 140,
  },
  {
    title: 'VR Coin Collection',
    category: 'vr',
    year: '2025',
    description: 'A forward-moving VR arcade game with spawned balls, an end zone, score tracking and replay.',
    tech: ['XR Interaction Toolkit', 'C#', 'URP'],
    repo: 'https://github.com/kavin1702/VR-coin-Collection',
    hue: 48,
  },
  {
    title: 'VR Drums',
    category: 'vr',
    year: '2025',
    description: 'A playable drum kit in VR.', // TODO: add details
    tech: ['Unity', 'XR'],
    repo: 'https://github.com/kavin1702/VR-Drums',
    hue: 330,
  },
  {
    title: 'VR Pre-Flight Checklist',
    category: 'vr',
    year: '2025',
    description: 'A VR training module for walking through an aircraft pre-flight checklist.', // TODO: add details
    tech: ['Unity', 'XR'],
    repo: 'https://github.com/kavin1702/VR-Pre-FlightCheckuplist',
    hue: 210,
  },
  {
    title: 'Liquid Shader',
    category: 'game',
    year: '2025',
    description: 'Wobbling liquid in a container that reacts to movement, with split and endless-container variants in URP.',
    tech: ['URP', 'Shaders', 'C#'],
    repo: 'https://github.com/kavin1702/Liquid',
    hue: 200,
  },
  {
    title: 'Bottle Shooter',
    category: 'game',
    year: '2025',
    description: 'A first-person shooter with raycast guns, weapon switching, grenades and breakable bottles.',
    tech: ['Unity', 'C#', 'Raycasting'],
    repo: 'https://github.com/kavin1702/Bottle_Shooter',
    hue: 100,
  },
  {
    title: 'Revive Mech',
    category: 'game',
    year: '2025',
    description: 'A third-person prototype where you revive NPCs hit by cars inside a revive zone, using NavMesh agents.',
    tech: ['Unity', 'AI Navigation', 'C#'],
    repo: 'https://github.com/kavin1702/Revive_Mech',
    hue: 0,
  },
  {
    title: 'Rocket Boost',
    category: 'game',
    year: '2025',
    description: 'A physics-based rocket game with thrust, rotation, oscillating obstacles and collision handling.',
    tech: ['Unity', 'Physics', 'C#'],
    repo: 'https://github.com/kavin1702/Rocket_Boost',
    hue: 25,
  },
  {
    title: 'Obstacle Runner',
    category: 'game',
    year: '2025',
    description: 'Dodge pendulums, spinners and droppers to reach the finish line.',
    tech: ['Unity', 'C#'],
    repo: 'https://github.com/kavin1702/Obstacle_Runner',
    hue: 160,
  },
  {
    title: 'WorkPulse Office Worksheet',
    category: 'web',
    year: '2026',
    description: 'A web app for logging daily office work, with an admin view.',
    tech: ['Next.js', 'JavaScript'],
    repo: 'https://github.com/kavin1702/OfficeWorksheet',
    hue: 250,
  },
  {
    title: 'Tracker',
    category: 'web',
    year: '2026',
    description: 'A full-stack tracker app built with Next.js, TypeScript and Prisma.',
    tech: ['Next.js', 'TypeScript', 'Prisma'],
    repo: 'https://github.com/kavin1702/Tracker-',
    hue: 300,
  },
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'vr', label: 'VR' },
  { id: 'mr', label: 'MR' },
  { id: 'ar', label: 'AR' },
  { id: 'game', label: 'Games' },
  { id: 'web', label: 'Web' },
];

export const certifications = [
  {
    title: 'Unity Certified Associate: Game Developer',
    issuer: 'Unity Technologies',
    date: 'Issued April 2026 · Valid until April 2029',
    url: 'https://www.credly.com/badges/b6fb3f0c-b320-4756-8f0f-3c0837a8f60f/public_url',
  },
];

export const education = [
  {
    title: 'B.Voc in Immersive Technology',
    place: 'Bharathidasan University, Trichy',
    period: '2023 – 2026',
  },
  {
    title: 'Higher Secondary Education',
    place: 'Montfort Matric Hr. Sec. School, Ariyalur',
    period: '2021 – 2023',
  },
];
