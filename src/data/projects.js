export const projectFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'university', label: 'University of Utah' },
  { id: 'hike', label: 'Hike' },
  { id: 'personal', label: 'Personal' }
];

export const projectSourceLabels = {
  university: 'University of Utah',
  hike: 'Hike',
  personal: 'Personal'
};

export const projects = [
   {
    slug: 'synaptica-ai',
    title: 'Synaptica AI',
    thumbnail: { variant: 'network', label: 'LLM routing', tone: 'university' },
    eyebrow: 'Neurosymbolic LLM Orchestration',
    source: 'university',
    category: 'Research Project',
    summary:
      'A neurosymbolic routing system that combines symbolic rules with neural classifiers to route queries across expert models for reasoning coding and truthfulness tasks.',
    tech: ['PyTorch', 'Hugging Face', 'Gradio', 'Neurosymbolic AI'],
    metrics: ['91%+ routing accuracy', 'GSM8K / MBPP / TruthfulQA', 'Local inference optimization'],
    links: [
      {
        label: 'Read Paper',
        href: 'https://drive.google.com/file/d/12PIRJ1gDDSck4XjKyyt8jNigltEtr8ik/view?usp=drive_link',
        type: 'paper'
      }
    ],
    readme: {
      overview:
        'Synaptica AI explores how symbolic structure and neural models can work together inside an LLM orchestration layer. Instead of sending every prompt to a single model or relying on generic routing logic, the system classifies the intent of a query and routes it to a more appropriate expert path.',
      problem:
        'LLM applications often struggle with reliability when tasks vary widely across math, code, factual reasoning and general instruction following. A single model path can become expensive, inconsistent or difficult to evaluate. We wanted to build a routing system that made model behavior more structured and measurable.',
      approach: [
        'Designed a hybrid routing architecture combining symbolic rules with neural classifiers.',
        'Evaluated routing behavior across GSM8K, MBPP and TruthfulQA style tasks.',
        'Ran ablation studies to understand how symbolic constraints and classifier outputs affected routing accuracy.',
        'Optimized the system for efficient local inference and a usable Gradio interface.'
      ],
      outcome:
        'The system achieved 91%+ routing accuracy and gave us a stronger framework for thinking about reliability, evaluation and task-aware LLM workflows.',
      learnings: [
        'Routing quality matters as much as model quality in multi-model AI systems.',
        'Symbolic constraints can make LLM applications easier to evaluate and debug.',
        // 'A simple interface is useful for testing model behavior with non-research users.'
      ]
    }
  },
  {
    slug: 'plant-viability-cv-system',
    title: 'Computer Vision Plant Viability',
    thumbnail: { variant: 'vision', label: 'Tray vision', tone: 'university' },
    eyebrow: 'Computer Vision + Full-Stack ML',
    source: 'university',
    category: 'Capstone Project',
  
    summary:
      'An end-to-end computer vision system for estimating seedling tray viability from mobile-captured nursery images using tray segmentation, grid recovery and per-cell occupancy classification.',
    tech: ['PyTorch', 'YOLOv8', 'ResNet-18', 'OpenCV', 'FastAPI', 'Gradio', 'React'],
    metrics: ['96.74% cell validity accuracy', '6.01% point tray viability MAE', '1.65 s median inference time'],
    links: [
      {
        label: 'Read Paper',
        href: 'https://drive.google.com/file/d/1Nhmzc8vNtm9nRR7XetRcEZaxFVTUmlt1/view?usp=sharing',
        type: 'paper'
      }
    ],
    readme: {
      overview:
        'This project was developed as a deep learning capstone for project sponsor - BloomLogic. The project is a computer vision pipeline for automated seedling tray viability assessment. The system takes a raw tray photograph, detects and rectifies the tray, recovers the grid layout, classifies each cell as occupied or empty and returns a tray-level viability percentage with per-cell results and an annotated overlay.',
      problem:
        'Nursery teams need to assess hundreds of trays with 50 to 200+ cells each, but manual visual inspection is slow, subjective and difficult to scale. The goal was to replace rough tray-level estimates with a structured pipeline that could produce consistent cell-level predictions from real nursery images.',
      approach: [
        'Developed a React based annotation interface to support consistent grid-aligned data labeling and review.',
        'Trained a YOLOv8 tray segmentation model to isolate the tray region and support perspective rectification.',
        'Built a confidence-gated grid detection cascade using a ResNet-18 grid classifier with separator-based fallback logic.',
        'Extracted individual tray cells from the recovered grid and classified each crop as occupied or empty using a ResNet-18 validity model.',
        'Integrated the pipeline into a FastAPI backend and Gradio interface for image upload, threshold control, overlay visualization and JSON output.'
      ],
      outcome:
      'The system achieved 96.74% cell-level classification accuracy and 6.01 percentage points mean absolute error at the tray level, making the workflow more consistent and scalable.',
      learnings: [
        'Accurate tray rectification and grid recovery are critical because small spatial errors can affect many downstream cell predictions.',
        'Confidence-gated fallback logic can make a vision pipeline more robust when labeled data is limited across tray types.',
        'Per-cell structured outputs and visual overlays make model behavior easier to inspect, debug and communicate to users.'
      ]
    }
  },
  {
    slug: 'travel-orb',
    title: 'Travel Orb',
    thumbnail: { variant: 'orbital-map', label: 'Travel data', tone: 'university' },
    eyebrow: 'Interactive Data Visualization',
    source: 'university',
    category: 'Course / University Project',
    summary:
      'An interactive tourism analytics platform that uses React and D3.js to explore global travel patterns, country-level tourism trends, aviation activity and environmental impact.',
    tech: ['React', 'D3.js', 'JavaScript', 'TopoJSON', 'Data Visualization'],
    metrics: ['Interactive globe and choropleth maps', '1995-2022 international tourist trip data', '30% better comprehension goal', 'Published web demo'],
    links: [
      {
        label: 'View Project',
        href: 'https://dataviscourse2024.github.io/travel-orb/',
        type: 'demo'
      },
      {
        label: 'Course Hall of Fame',
        href: 'https://www.dataviscourse.net/2025/fame/#:~:text=Mention%20Project%20Video-,TravelOrb',
        type: 'external'
      }
    ],
    readme: {
      overview:
        'Travel Orb is an interactive web-based data visualization project for exploring global tourism trends and their economic and environmental effects. It combines map-based views, country drill-downs and time-series charts to make international travel data easier to compare.',
      problem:
        'Tourism data can be difficult to understand when presented as static tables or generic charts. The goal was to design a more engaging interface where users could compare destinations, understand patterns and move through the data without needing a technical background.',
      approach: [
        'Built the interface in React with routed views for maps, country pages and supporting visualizations.',
        'Used D3.js to render an interactive rotating globe, choropleth maps, line charts, area charts and bar charts.',
        'Added filters, sliders, hover tooltips and country selection controls for direct data exploration.',
        'Combined tourism, GDP, aviation passenger and emissions datasets from sources including UNWTO, World Bank, OECD and aviation-related data providers.',
        'Published the final project as a GitHub Pages demo with an embedded screencast.'
      ],
      outcome:
        'The project became a polished interactive visualization and was featured in the course hall of fame, reflecting its strength as a data storytelling and front-end engineering project.',
      learnings: [
        'Good visualization is about reducing cognitive load, not adding more charts.',
        'Interactive maps are strongest when paired with focused detail views and trend charts.',
        'D3 and React work well together when React manages state and D3 manages drawing logic.',
      ]
    }
  },
  {
    slug: 'google-docs-assistant',
    title: 'Google Docs Assistant',
    thumbnail: { variant: 'document-ai', label: 'Docs AI', tone: 'hike' },
    eyebrow: 'LLM Workflow + Writing Standards',
    source: 'hike',
    category: 'Hike / Production AI Tooling',
    summary:
      'An AI-powered Google Docs assistant that analyzed business documents and enforced company-specific writing standards through structured suggestions.',
    tech: ['LLM API', 'Google Apps Script', 'JavaScript', 'Workflow Automation'],
    metrics: ['~20% fewer revision cycles', 'Structured output constraints', 'Document workflow integration'],
    readme: {
      overview:
        'This assistant helped teams improve internal business documents by reviewing content against company-specific writing guidelines. The focus was not just generation, but controlled, structured feedback that fit inside an existing writing workflow.',
      problem:
        'Business documents often go through repeated revision cycles because feedback is subjective, scattered, or applied too late. The goal was to make writing standards more accessible inside the document itself.',
      approach: [
        'Built a Google Docs assistant that analyzed document content in context.',
        'Encoded company writing standards into structured LLM prompts and output constraints.',
        'Designed suggestions to be actionable rather than generic.',
        'Integrated the assistant into the existing document workflow so users did not need a separate tool.'
      ],
      outcome:
        'The assistant reduced revision cycles by roughly 20% and showed how LLMs can improve quality when they are constrained by specific workflow rules.',
      learnings: [
        'LLM tools are more useful when embedded where work already happens.',
        'Structured outputs reduce ambiguity and improve review quality.',
        'Good AI UX often means narrowing the model’s job, not expanding it.'
      ]
    }
  },
  {
    slug: 'voice-ai-support-chatbot',
    title: 'Voice AI Customer Support Chatbot',
    thumbnail: { variant: 'voice-wave', label: 'Voice AI', tone: 'hike' },
    eyebrow: 'Speech Interface + Full-Stack AI',
    source: 'hike',
    category: 'Hike / Production AI Tooling',
    summary:
      'A full-stack AI customer support chatbot with speech-to-text and text-to-speech for real-time interaction and testing.',
    tech: ['FastAPI', 'React', 'Speech-to-Text', 'Text-to-Speech', 'LLM API'],
    metrics: ['Real-time voice interaction', 'Custom voice persona', 'End-to-end AI product surface'],
    readme: {
      overview:
        'This project explored what customer support feels like when the interface is conversational and voice-enabled. I built the full-stack prototype and helped design a custom voice persona aligned with the company mascot.',
      problem:
        'Text-only chatbots can feel impersonal and limited for support scenarios. Voice interaction introduces new UX and engineering challenges: latency, persona, input handling, and response playback all need to work together.',
      approach: [
        'Built a FastAPI backend to coordinate LLM responses, speech input, and speech output.',
        'Created a React frontend for real-time interaction and testing.',
        'Integrated speech-to-text and text-to-speech components into the chatbot loop.',
        'Designed and tested a custom voice persona to improve engagement and brand alignment.'
      ],
      outcome:
        'The prototype demonstrated a complete voice-enabled support loop and helped evaluate how speech interfaces could make AI support more engaging and brand-aware.',
      learnings: [
        'Voice AI is as much a product design problem as an ML problem.',
        'Latency and response structure strongly affect perceived intelligence.',
        'Personality needs to be designed intentionally, especially in customer-facing AI.'
      ]
    }
  },
  {
    slug: 'aaa-cricket-ai-platform',
    title: 'AAA Cricket AI Platform',
    thumbnail: { variant: 'score-engine', label: 'Game content', tone: 'hike' },
    eyebrow: 'Game AI + Dynamic Content Generation',
    source: 'hike',
    category: 'Hike / Production AI Tooling',
    summary:
      'A 0→1 AI platform and REST API for a AAA cricket game, enabling dynamic content generation and automated question selection.',
    tech: ['Python', 'FastAPI', 'React', 'REST APIs', 'LLM Workflows'],
    metrics: ['60% content generation efficiency gain', '0→1 platform build', 'Real-time dynamic content'],
    readme: {
      overview:
        'This platform supported dynamic content generation for a AAA cricket game. It combined backend APIs, internal tooling, and AI-assisted workflows to speed up content creation and automate question selection.',
      problem:
        'Game content pipelines often need speed, variety, and consistency at the same time. Manual content generation can create bottlenecks, especially when content needs to stay fresh and game-ready.',
      approach: [
        'Designed and built the initial AI platform architecture from scratch.',
        'Developed REST APIs to serve dynamic content generation workflows.',
        'Built internal product surfaces to support content review and operational use.',
        'Automated question selection to reduce manual effort and improve throughput.'
      ],
      outcome:
        'The platform improved content generation efficiency by 60% and helped move AI-assisted content workflows closer to production usage inside a game environment.',
      learnings: [
        'Production AI systems need tooling for humans in the loop.',
        'Automation is most valuable when it fits the existing content pipeline.',
        'Game AI workflows require both creative flexibility and operational discipline.'
      ]
    }
  },
  {
    slug: 'creative-ml-art-pipeline',
    title: 'Creative ML-Art Pipeline',
    thumbnail: { variant: 'creative-canvas', label: 'ML art', tone: 'hike' },
    eyebrow: 'Generative AI + Artist Tooling',
    source: 'hike',
    category: 'Hike / Production AI Tooling',
    summary:
      'Custom AI tooling for artists using Stable Diffusion, ControlNet, img2img, inpainting, and upscaling to accelerate 2D and 3D asset creation.',
    tech: ['Stable Diffusion', 'ControlNet', 'img2img', 'Inpainting', 'Upscaling'],
    metrics: ['~6x faster creative generation', '80% faster prompt creation', 'ML-art pipeline ownership'],
    readme: {
      overview:
        'This work focused on building practical generative AI tooling for artists. The goal was to make creative generation faster without removing the artist from the process.',
      problem:
        'Artists needed tools that respected creative intent while reducing repetitive production effort. Generic image generation workflows were not enough; the tools had to support iteration, control, and production constraints.',
      approach: [
        'Built workflows around Stable Diffusion, ControlNet, img2img, inpainting, and upscaling.',
        'Created reusable prompt components and templates to speed up prompt construction.',
        'Translated artist needs into technical requirements and model workflow design.',
        'Acted as the bridge between creative teams and engineering implementation.'
      ],
      outcome:
        'The tooling achieved roughly a 6x speedup in creative generation and reduced prompt creation time by around 80%, while giving artists more control over the output process.',
      learnings: [
        'Creative AI tools need controllability more than novelty.',
        'The best internal tools match the language and workflow of their users.',
        'Being able to translate between artists and engineers is a major advantage in ML tooling.'
      ]
    }
  },
  {
    slug: '3d-asset-qa-automation',
    title: '3D Asset QA Automation',
    thumbnail: { variant: 'mesh', label: '3D pipeline', tone: 'hike' },
    eyebrow: 'Graphics Tooling + Pipeline Automation',
    source: 'hike',
    category: 'Hike / Production Tooling',
    summary:
      'Internal tooling and data pipelines for 3D asset production, validation, LOD generation, mesh intersection detection, and Unity-based QA workflows.',
    tech: ['Unity3D', 'C#', 'Python', '3D Mesh Processing', 'Autodesk Maya'],
    metrics: ['~90% asset production/validation time saved', '80% LOD generation efficiency gain', '60% faster asset validation'],
    readme: {
      overview:
        'This work focused on scaling 3D asset production and quality validation through internal tools, automation scripts, and Unity-based workflows.',
      problem:
        'Manual 3D asset validation is slow and error-prone. As asset volume grows, teams need automated checks for geometry, rigging, LODs, and production readiness.',
      approach: [
        'Built internal tooling and data pipelines to scale asset creation and validation.',
        'Optimized automation scripts for level-of-detail generation.',
        'Developed a KD-tree based system to detect and resolve mesh intersections in 3D assets.',
        'Built a Unity-based QA console for rig checks and approval workflows.'
      ],
      outcome:
        'The tooling reduced asset production and quality validation time by roughly 90%, improved LOD generation efficiency by 80%, and reduced 3D asset validation time by around 60%.',
      learnings: [
        'Pipeline tooling has a direct impact on creative team velocity.',
        'Graphics workflows benefit from strong data structures and automation.',
        'Good tools make quality checks easier to run, understand, and trust.'
      ]
    }
  },
  {
    slug: 'ar-navigation',
    title: 'AR Navigation',
    thumbnail: { variant: 'ar-frame', label: 'AR wayfinding', tone: 'university' },
    eyebrow: 'Augmented Reality Navigation',
    source: 'personal',
    category: 'Personal Project',
    summary:
      'A Unity-based augmented reality indoor navigation prototype that blends virtual directional guides with physical university spaces.',
    tech: ['C#', 'Unity3D', 'Vuforia', 'ARKit'],
    metrics: ['Indoor navigation prototype', 'AR spatial guidance', 'Unity + Vuforia workflow'],
    links: [
      {
        label: 'View Demo',
        href: 'https://drive.google.com/file/d/1qAqIh2G7KbHoa40-tNDVO4BrpBDLM427/view?usp=sharing',
        type: 'demo'
      }
    ],
    readme: {
      overview:
        'AR Navigation is an augmented reality indoor navigation application designed to help users move through physical space using virtual directional cues.',
      problem:
        'Indoor navigation can be difficult when GPS is unreliable or unavailable. The goal was to explore how AR overlays could make wayfinding more intuitive inside a university environment.',
      approach: [
        'Built the prototype in Unity using C#.',
        'Used Vuforia and ARKit workflows for AR interaction and spatial anchoring.',
        'Designed visual guides that could sit naturally on top of the physical environment.',
        'Tested the experience around clarity, orientation, and user guidance.'
      ],
      outcome:
        'The project shows my interest in spatial computing, Unity development, and interfaces that connect digital systems with real-world environments.',
      learnings: [
        'AR navigation needs visual clarity more than visual complexity.',
        'Spatial interfaces require constant attention to user orientation.',
        'Unity is a strong environment for quickly prototyping embodied interfaces.'
      ]
    }
  },
  {
    slug: 'galactic-survivor',
    title: 'Galactic Survivor',
    thumbnail: { variant: 'galaxy', label: 'Game loop', tone: 'personal' },
    eyebrow: 'Unity 3D Game',
    source: 'personal',
    category: 'Personal Project',
    summary:
      'A C# and Unity3D game prototype built around thrust, obstacle avoidance, and a clean core gameplay loop.',
    tech: ['C#', 'Unity3D', 'Game Design'],
    metrics: ['Playable web build', 'Physics-based movement', 'Core loop design'],
    links: [
      {
        label: 'Play Game',
        href: 'https://omisha99.github.io/Galactic-Survivor/',
        type: 'demo'
      }
    ],
    readme: {
      overview:
        'Galactic Survivor is a Unity-based 3D game prototype where the player guides a rocket from one point to another using thrust while avoiding obstacles.',
      problem:
        'The goal was to build a complete, focused gameplay loop rather than a large unfinished game. I wanted the experience to be understandable quickly, mechanically responsive, and simple enough to polish within scope.',
      approach: [
        'Implemented the core movement loop in C# using Unity physics.',
        'Designed obstacle layouts around timing, thrust control, and recovery.',
        'Built a playable web version to make the project easy to share.',
        'Focused on clarity of controls and immediate feedback.'
      ],
      outcome:
        'The project demonstrates my foundation in Unity, C#, gameplay mechanics, and interactive 3D experiences.',
      learnings: [
        'A small, complete gameplay loop is stronger than a large unfinished prototype.',
        'Physics-based interaction requires careful tuning and repeated playtesting.',
        'Simple mechanics can still communicate strong technical execution.'
      ]
    }
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
