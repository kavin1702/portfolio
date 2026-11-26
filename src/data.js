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
  { value: '17', label: 'projects in this portfolio, most with video demos' },
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
//            (its thumbnail is used as the card picture when there is no image)
//   repo:    GitHub link (leave out if the repo is private)
//   demo:    'https://...'                  -> any other link (WebGL build, itch.io, APK...)
//   role:    'Solo developer'               -> your role on the project
//   details: ['What you built...', ...]     -> bullet points shown in the details window
// ---------------------------------------------------------------
export const projects = [
  // ---------------- Featured ----------------
  {
    title: 'VR Fire Safety Training Simulator',
    category: 'vr',
    featured: true,
    year: '2026',
    description:
      'A VR training simulator that teaches the PASS fire-extinguisher method (Pull, Aim, Squeeze, Sweep) through a full emergency drill, from raising the alarm to putting the fire out.',
    details: [
      'Scripted a step-by-step drill: break the glass, press the alarm, phone the fire service, then pull the pin and fight the fire.',
      'Built the extinguisher with XR Grab Interactables, a removable safety pin, a line-rendered hose that snaps to the hand, and spray particles that collide with the fire.',
      'Fire shrinks only while the spray hits it, so trainees must aim and sweep correctly to finish.',
      'Voice guidance and an instruction panel walk the trainee through each step, with a feedback panel at the end.',
    ],
    tech: ['Unity 6', 'XR Interaction Toolkit', 'OpenXR', 'Particle Systems', 'C#'],
    repo: 'https://github.com/kavin1702/VR_Fire_Safety',
    video: 'https://youtu.be/hnQ-R-OnPnU',
    hue: 18,
  },
  {
    title: 'MR Ghost Shooter',
    category: 'mr',
    featured: true,
    year: '2025',
    description:
      'A mixed reality shooter for Meta Quest where ghosts spawn inside your real room and chase you around the furniture. Fight back with a laser gun.',
    details: [
      'Used MR Utility Kit for room understanding, with ghosts chasing the player using NavMesh pathfinding.',
      'Object pooling for ghosts and laser shots keeps the frame rate steady on standalone Quest.',
      'Built with the Meta All-in-One SDK and passthrough.',
    ],
    tech: ['Meta XR SDK', 'MR Utility Kit', 'NavMesh', 'Object Pooling', 'C#'],
    video: 'https://youtu.be/4jgWsO5Qtfg',
    hue: 280,
  },
  {
    title: 'VR Molecular Chemistry Lab',
    category: 'vr',
    featured: true,
    year: '2026',
    description:
      'An educational VR lab where students pick up atoms with their bare hands and bond them into real molecules.',
    details: [
      'Hand tracking with XR Hands, so atoms can be grabbed without controllers.',
      'A bond manager checks each combination against molecule recipes (atom types and counts) and only forms valid molecules.',
      'A break zone splits molecules back into atoms, and highlights plus audio cues give feedback on every bond.',
      'Data-driven design: each molecule (name, formula, bond type, required atoms) is a ScriptableObject asset, so new molecules can be added without writing new code.',
    ],
    tech: ['Unity 6.3', 'XR Hands', 'XR Interaction Toolkit', 'OpenXR', 'C#'],
    repo: 'https://github.com/kavin1702/VR-Molecular-Chemistry-Lab',
    hue: 190,
  },
  {
    title: 'MR Random Catch',
    category: 'mr',
    featured: true,
    year: '2025',
    description:
      'A mixed reality reflex game for Meta Quest. Seven cylinders drop at random in your real room, and you catch them with your hands before they hit the floor.',
    details: [
      'Built with Meta scene and spatial understanding tools, so the game plays out in your real room.',
      'Hand-based grabbing with the Meta Interaction SDK.',
      'A game manager drops a random cylinder on a timer and tracks score, with start, score and game-over panels.',
    ],
    tech: ['Meta XR SDK', 'Interaction SDK', 'Passthrough', 'Physics', 'C#'],
    repo: 'https://github.com/kavin1702/MR-Random',
    video: 'https://youtu.be/iPnvPUnjMnA',
    hue: 140,
  },
  {
    title: 'VR Safety & Stress Relief',
    category: 'vr',
    featured: true,
    year: '2025',
    description:
      'A hand-tracked VR experience where an NPC guide walks you through suiting up in safety gear, then lets you smash bottles with a bat to blow off steam.',
    details: [
      'Fully hand-tracked: put on the safety suit, open the door by hand and pick up the bat with no controllers.',
      'An animated NPC guide leads each step of the onboarding.',
      'Breakable bottles and a reset system so the session can be replayed.',
    ],
    tech: ['Meta XR SDK', 'Hand Tracking', 'Animation', 'C#'],
    video: 'https://youtu.be/JHWuI7DiQ4w',
    hue: 330,
  },
  {
    title: 'VR Melon Cut',
    category: 'vr',
    featured: true,
    year: '2025',
    description:
      'A VR fruit-slicing game. Swing your hands or controllers to cut fruit in real time, and avoid the bombs.',
    details: [
      'Real-time mesh slicing with EzySlice, so every cut follows the angle of your swing.',
      'Sliced halves become new rigidbodies with mesh colliders and fall apart naturally.',
      'Works with Meta Quest controllers and hand tracking.',
    ],
    tech: ['Meta XR SDK', 'EzySlice', 'Physics', 'C#'],
    repo: 'https://github.com/kavin1702/Fruit_CUt',
    video: 'https://youtu.be/mLkh4NnehY0',
    hue: 100,
  },

  // ---------------- More projects ----------------
  {
    title: 'AR Object Detection',
    category: 'ar',
    year: '2026',
    description:
      'A mobile AR project on AR Foundation for Android and iOS, with plane detection. Work in progress.', // TODO: what it detects + a video
    tech: ['Unity 6.3', 'AR Foundation', 'ARCore', 'ARKit'],
    repo: 'https://github.com/kavin1702/ar_object_detection',
    hue: 160,
  },
  {
    title: 'VR Coin Collection',
    category: 'vr',
    year: '2025',
    description: 'A forward-moving VR arcade game: collect what comes at you, avoid the rest, and beat your score before the end zone.',
    details: ['Spawner, movement, score and replay systems written from scratch.'],
    tech: ['XR Interaction Toolkit', 'URP', 'C#'],
    repo: 'https://github.com/kavin1702/VR-coin-Collection',
    hue: 48,
  },
  {
    title: 'VR Drums',
    category: 'vr',
    year: '2025',
    description: 'A playable drum kit in VR.', // TODO: add details + YouTube link
    tech: ['Unity', 'XR'],
    repo: 'https://github.com/kavin1702/VR-Drums',
    hue: 300,
  },
  {
    title: 'FPS Zombie Shooter',
    category: 'game',
    year: '2025',
    description: 'A first-person survival shooter with waves of zombies that hunt you down using NavMesh pathfinding.',
    details: [
      'Multiple guns with reloading and weapon switching.',
      'Timed wave spawning, with zombies driven by NavMeshAgents.',
      'Cinemachine camera for a smooth first-person feel.',
    ],
    tech: ['Unity', 'NavMesh', 'Cinemachine', 'C#'],
    video: 'https://youtu.be/iqP6HQkLfhQ',
    hue: 0,
  },
  {
    title: 'Bottle Shooter: Aim & Break',
    category: 'game',
    year: '2025',
    description: 'A first-person shooting challenge: break every bottle before your ammo or time runs out.',
    details: ['Raycast shooting, weapon switching, grenades, crouch, zoom and win/lose screens.'],
    tech: ['Unity', 'Raycasting', 'Blender', 'C#'],
    repo: 'https://github.com/kavin1702/Bottle_Shooter',
    video: 'https://youtu.be/QEM0jt-bpMU',
    hue: 200,
  },
  {
    title: 'Revive Mechanism',
    category: 'game',
    year: '2025',
    description: 'A third-person rescue mechanic: NPCs get knocked down by traffic, and you hold E to revive them before it is too late.',
    details: ['Revive zone with a hold-to-fill progress bar, player health that drops on car impact, and animated knock-down and get-up states.'],
    tech: ['Unity', 'Animator', 'AI Navigation', 'C#'],
    repo: 'https://github.com/kavin1702/Revive_Mech',
    video: 'https://youtu.be/GIRdMccT8zc',
    hue: 25,
  },
  {
    title: 'Rocket Boost',
    category: 'game',
    year: '2025',
    description: 'A physics-based rocket landing game across multiple levels. Balance thrust and rotation to dodge moving obstacles and land safely.',
    tech: ['Unity', 'Rigidbody Physics', 'C#'],
    repo: 'https://github.com/kavin1702/Rocket_Boost',
    video: 'https://youtu.be/ziB6sYkJGCE',
    hue: 210,
  },
  {
    title: 'Apple Catch: Dodge & Collect',
    category: 'game',
    year: '2025',
    description: 'A 2D arcade game: catch falling apples and dodge bombs in a 30-second race against the clock.',
    details: ['Menus, pause and resume, audio settings with AudioMixer, and a high score saved with PlayerPrefs.'],
    tech: ['Unity 2D', 'Animator', 'AudioMixer', 'C#'],
    repo: 'https://github.com/kavin1702/CatchTheFallingObject',
    video: 'https://youtu.be/hlMTeGRS1cc',
    hue: 0,
  },
  {
    title: 'Liquid Shader',
    category: 'game',
    year: '2025',
    description: 'Liquid that wobbles and sloshes inside a container as it moves, with split and endless-container variants in URP.',
    tech: ['URP', 'Shaders', 'C#'],
    repo: 'https://github.com/kavin1702/Liquid',
    hue: 190,
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
