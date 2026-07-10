import sponzaMain from "../assets/projects/opengl_forward.png";
import sponzaPbr from "../assets/projects/opengl_clustered.png";

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
    title: 'Computer Vision Plant Health & Inventory Tracking',
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
        href: 'https://www-old.cs.utah.edu/docs/techreports/2026/UUCS-26-002.pdf',
        type: 'paper'
      },
      {
        label: 'Poster',
        href: 'https://drive.google.com/file/d/1ePF7mLDtctDS4My8JOsJWMokDob_iHqU/view?usp=sharing',
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
    thumbnail: { variant: 'orbital-map', label: 'Data Visualization', tone: 'university' },
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
        'The project is a polished interactive visualization tool and is featured in the course hall of fame.',
      learnings: [
        'Good visualization is about reducing cognitive load, not adding more charts.',
        'Interactive maps are strongest when paired with focused detail views and trend charts.',
        'D3 and React work well together when React manages state and D3 manages drawing logic.',
      ]
    }
  },
  {
    slug: 'forward-plus-clustered-deferred-renderer',
    title: 'Forward+ and Clustered Deferred Renderer',
    thumbnail: { variant: 'rendering', label: 'Real-time renderer', tone: 'university' },
    eyebrow: 'Computer Graphics + Real-Time Rendering',
    source: 'university',
    category: 'Final Project',

    summary:
      'A real-time OpenGL renderer comparing Forward+ rendering and clustered deferred rendering for efficient lighting in complex 3D scenes.',

    tech: ['C++', 'OpenGL', 'GLSL', 'GLFW', 'GLEW', 'GLM', 'cyCodeBase', 'stb_image'],

    metrics: [
      'Forward+ rendering pipeline',
      'Clustered deferred rendering pipeline',
      'Interactive camera and lighting controls'
    ],

    links: [],
    gallery: [
        {
          src: sponzaMain,
          alt: 'Sponza scene Forward + render',
          caption: 'Forward+ Render'
        },
        {
          src: sponzaPbr,
          alt: 'Sponza scene Clustered Deferred render',
          caption: 'Clustered Deferred Render'
        }
      ],
    readme: {
      overview:
        'This project was developed as an interactive computer graphics final project focused on real-time rendering techniques. The system implements a Forward+ renderer and a clustered deferred renderer for displaying textured 3D scenes with interactive camera and lighting controls. The renderer loads OBJ models, prepares GPU buffers for geometry attributes, applies GLSL shader programs and supports material-based rendering for complex scenes such as Sponza.',

      problem:
        'Traditional forward rendering can become expensive when many lights affect a scene because each object or fragment may need to evaluate many light contributions. The goal was to explore more scalable real-time lighting techniques by implementing Forward+ and clustered deferred rendering pipelines.',

      approach: [
        'Built a C++ OpenGL application using GLFW for window/input management and GLEW for OpenGL extension loading.',
        'Loaded OBJ geometry and material data, then converted mesh positions, normals and UVs into GPU vertex buffers.',
        'Implemented a Forward+ rendering path to improve light evaluation by organizing lighting work more efficiently than basic forward rendering.',
        'Implemented a clustered deferred rendering path to separate geometry processing from lighting and support more scalable scene illumination.',
        'Used GLSL shaders for lighting, material evaluation and scene rendering.',
        'Added interactive camera controls, zoom/reset behavior and light manipulation for inspecting scenes from different viewpoints.'
      ],

      outcome:
        'The final renderer demonstrates two modern real-time lighting approaches and provides an interactive scene viewer for comparing Forward+ and clustered deferred rendering behavior in a complex 3D environment.',

      learnings: [
        'Forward+ rendering improves on basic forward rendering by reducing unnecessary per-fragment light calculations.',
        'Clustered deferred rendering is useful for organizing lighting in screen/view-space regions and handling complex lighting more efficiently.',
        'Large scenes require careful handling of mesh data, material ranges, shader state and GPU resource binding.',
        'Interactive camera and lighting controls make renderer behavior much easier to debug and evaluate visually.'
      ]
    }
  },
  {
   slug: 'voice-ai-customer-support-bot',
   title: 'Voice AI Customer Support Chatbot',
   thumbnail: { variant: 'chat', label: 'AI Voice Agent', tone: 'product' },
   eyebrow: 'LLM Agents + Voice AI + Full-Stack App',
   source: 'hike',
   category: 'Hike / Production AI Tooling',
 
   summary:
     'A full-stack AI customer support system that uses LLM-based conversation flows, function calling, transaction-aware resolution logic, multilingual speech transcription and voice synthesis to automate user support across chat and voice interfaces.',
 
   tech: [
     'Python', 'FastAPI', 'React', 'OpenAI API', 'MongoDB', 'Speech-to-Text',
     'Text-to-Speech', 'Telegram Bot API', 'Docker' ],
   metrics: [
     'Supports chat, voice-only and voice-assisted support modes',
     'Maintains session context using MongoDB',
     'Integrates transaction lookup, refund handling and feedback collection'
   ],
 
   // links: [],
 
   readme: {
     overview:
       'This project is an AI customer support assistant built for Rush Gaming users. The system combines a React-based chat and voice interface with a Python backend powered by OpenAI function calling, structured conversation flows and support automation tools. Users can authenticate with their phone number, describe their issue in Hinglish or voice input, receive guided support responses and interact with options generated by the assistant.',
 
     problem:
       'Customer support teams for real-money gaming platforms handle repetitive user issues such as gameplay problems, deposits, withdrawals, refunds and account-related questions. Manual support is slow to scale, and users often need fast, conversational help in casual Hinglish across text and voice channels.',
 
     approach: [
       'Built a React frontend for the bot with chat mode, voice-only mode and voice-plus-chat mode, including bot avatars, voice selection, microphone recording and response feedback.',
       'Developed a FastAPI backend exposing chat, transcription, text-to-speech, graph management, phone verification, feedback and health-check endpoints.',
       'Implemented an LLM assistant engine using OpenAI chat completions, structured conversation-flow JSON and function calling for support tasks.',
       'Added support tools for category and sub-category detection, relevance scoring, recent transaction retrieval and refund-flow handling.',
       'Integrated Speech-to-Text for multilingual voice transcription across English, Hindi and regional language inputs.',
       'Integrated TTS, Listnr, ElevenLabs and internal voice-conversion endpoints to generate spoken assistant responses.',
       'Added Telegram bot support for phone-number collection and routing user messages into the customer support bot service.'
     ],
 
     outcome:
       'The project delivered a working multimodal customer support assistant that can guide users through issue classification, transaction selection and resolution flows while preserving conversation context and collecting feedback for support-quality review.',
 
     learnings: [
       'Structured conversation graphs help keep LLM-driven support workflows predictable while still allowing natural user interaction.',
       'Function calling is useful for connecting an assistant to operational tools such as transaction lookup, refund flows and category scoring.',
       'Voice support requires careful preprocessing, including transcription cleanup, transliteration and filtering of IDs before text-to-speech playback.',
       'A feedback loop inside the UI helps evaluate assistant responses and identify weak points in issue detection or resolution quality.'
     ]
   }
 },
 
  {
    slug: 'google-docs-assistant',
    title: 'Google Docs Writing Assistant',
    thumbnail: { variant: 'docs', label: 'Docs assistant', tone: 'productivity' },
    eyebrow: 'Google Apps Script + LLM Workflow Automation',
    source: 'hike',
    category: 'Hike / Production AI Tool',

    summary:
      'A Google Docs sidebar add-on that extracts draft content from structured documents, filters out template text and generates AI-powered writing suggestions that users can review and apply directly inside the document.',
    tech: ['Google Apps Script', 'Google Docs API', 'JavaScript', 'OpenAI API', 'HTML', 'CSS'],
    metrics: ['~20% fewer revision cycles', 'Template-aware content filtering', 'One-click suggestion acceptance workflow'],
    links: [],
    readme: {
        overview:
          'This assistant helped teams improve internal business documents by reviewing draft content against company-specific writing guidelines. Built as a Google Docs sidebar add-on, it extracted editable content from the active document, ignored boilerplate from a reference template and generated concise rewrite suggestions that users could accept or reject in context.',
        problem:
          'Business documents often go through repeated revision cycles because feedback is subjective, scattered, or applied too late. The goal was to make writing standards accessible inside Google Docs so teams could improve clarity, concision and decision-readiness before formal review.',
        approach: [
          'Built a Google Docs add-on with a custom menu and sidebar using Google Apps Script.',
          'Parsed paragraphs, list items and table content from the active document.',
          'Filtered out template text so only user-written draft content was reviewed.',
          'Encoded company writing standards into structured LLM prompts with clear output constraints.',
          'Displayed original content and AI-generated suggestions side by side in the sidebar.',
          'Added accept and reject actions so approved suggestions could replace the original document text directly.'
        ],
        outcome:
          'The assistant reduced revision cycles by roughly 20% by embedding structured writing feedback directly into the document workflow and making company standards easier to apply consistently.',
        learnings: [
          'LLM tools are more useful when embedded where work already happens.',
          'Template-aware extraction improves relevance by preventing boilerplate from being reviewed unnecessarily.',
        ]
      }
    },
  {
  slug: 'cricket-content-automation',
  title: 'AAA Cricket Content Automation Platform',
  thumbnail: { variant: 'dashboard', label: 'Dynamic Content Generation', tone: 'product' },
  eyebrow: 'Full-Stack Automation + Dynamic Content Generation',
  source: 'hike',
  category: 'Hike / Production AI Tooling',

  summary:
    'A full-stack LiveOps system for generating, reviewing, editing and publishing cricket fantasy questions using live match data, tournament schedules, template-driven question generation and an operator approval workflow.',

  tech: ['React', 'FastAPI', 'MongoDB', 'Python', 'Pandas', 'XGBoost', 'Roanuz API', 'Google OAuth'],

  metrics: [
    'Supports English and Hindi question generation',
    'Generates slider, multi-select, multi-binary and player-select question formats',
    'Handles pre-match, in-over, first/last-over, full-innings, short-contest and player-specific tournament flows'
  ],

  links: [],

  readme: {
    overview:
      'This project is a CricketPulse LiveOps platform for automating cricket fantasy content. The backend fetches live match feeds, over-by-over data and tournament schedules, generates structured cricket questions from reusable templates, stores generated drafts in MongoDB and publishes approved payloads to an ingestion service. The React frontend gives operators a console to select matches and tournaments, generate questions, review generated states, edit options, approve or reject questions and inspect published content.',

    problem:
      'Live cricket fantasy operations require timely question creation across many matches, innings states and tournament formats. Manually writing and formatting questions is slow, inconsistent and difficult to coordinate during live match windows. The goal was to automate question generation while keeping human operators in control of review, edits and publishing.',

    approach: [
      'Built a FastAPI backend that integrates with Roanuz cricket feeds and internal tournament schedule APIs to retrieve match, innings, over-range and player-specific context.',
      'Created a template-driven generation pipeline using Pandas CSV templates for pre-match, in-over, first-over, last-over, by-over and full-innings question types.',
      'Generated multiple structured question templates including SLIDER, MULTI_SELECT, MULTI_BINARY and PLAYER_SELECT with tags, option metadata, player keys, over ranges and formatted text.',
      'Added support for English and Hindi question text by switching localized template columns during generation.',
      'Stored generated and published question documents in MongoDB with match, tournament, match-state and scope based lookup keys.',
      'Implemented approval, rejection, option editing and publish workflows through a React LiveOps console with Google OAuth login and admin-only routing.',
      'Added automated selection logic for short contests and player-specific contests, including bot-approved highlights and XGBoost-based recommendation infrastructure.'
    ],

    outcome:
      'The system turns live cricket match and tournament data into reviewable, structured fantasy-question payloads, reducing manual content creation work while preserving operator control over final approvals and publishing.',

    learnings: [
      'Template-driven generation is effective for sports content because it keeps language, formatting and payload structure consistent while still adapting to match context.',
      'Human-in-the-loop approval is important for live content systems where automation needs editorial oversight before publishing.',
      'Separating generated drafts from published payloads makes it easier to audit, revise and compare content across match states.',
      'Sports-data pipelines need robust branching for pre-toss, post-toss, live innings, short contest and player-specific scenarios because each state has different available context.'
    ]
  }
},
  {
    slug: 'creative-ml-art-pipeline',
    title: 'Generative AI ML-Art Pipeline',
    thumbnail: { variant: 'creative-canvas', label: 'Generative AI', tone: 'hike' },
    eyebrow: 'Generative AI + Artist Tooling',
    source: 'hike',
    category: 'Hike / Production AI Tooling',
    summary:
      'Custom AI tooling for artists using Stable Diffusion, ControlNet, img2img, inpainting and upscaling to accelerate 2D and 3D asset creation.',
    tech: ['Stable Diffusion', 'ControlNet', 'img2img', 'Inpainting', 'Upscaling', 'Automatic1111 Workflow'],
    metrics: ['~6x faster creative generation', '80% faster prompt creation', 'ML-art pipeline ownership'],
    readme: {
      overview:
        'This work focused on building practical generative AI tooling for artists. The goal was to make creative generation faster without removing the artist from the process.',
      problem:
        'Artists needed tools that respected creative intent while reducing repetitive production effort. Generic image generation workflows were not enough; the tools had to support iteration, control, custom outputs and production constraints.',
      approach: [
        'Trained and fine-tuned Stable Diffusion models to better fit the company artistic style and content needs of the team.',
        'Built workflows around Stable Diffusion, ControlNet, img2img, inpainting and upscaling.',
        'Created prompt automation tool, reusable prompt components and templates to speed up prompt construction.',
        'Translated artist needs into technical requirements and model workflow design.',
        'Acted as the bridge between creative teams and engineering implementation.'
      ],
      outcome:
        'The tooling achieved roughly a 6x speedup in creative generation and reduced prompt creation time by around 80%, while giving artists more control over the output process.',
      learnings: [
        'Creative AI tools need controllability more than novelty.',
        'The best internal tools match the language and workflow of their users.'
      ]
    }
  },
  {
    slug: '3d-asset-qa-automation',
    title: '3D Asset QA Automation - Unity',
    thumbnail: { variant: 'mesh', label: '3D QA Pipeline', tone: 'hike' },
    eyebrow: 'Unity Graphics Tooling + Pipeline Automation',
    source: 'hike',
    category: 'Hike / Production Tooling',
    summary:
      'Internal tooling and data pipelines for 3D asset production, validation, LOD generation, mesh intersection detection and Unity-based QA workflows.',
    tech: ['Unity3D', 'C#', 'Python', '3D Mesh Processing', 'Autodesk Maya', 'PyMel'],
    metrics: ['~90% asset production/validation time saved', '80% LOD generation efficiency gain', '60% faster asset validation'],
    readme: {
      overview:
        'This work focused on scaling 3D asset production and quality validation through internal tools, automation scripts and Unity-based workflows.',
      problem:
        'Manual 3D asset validation is slow and error-prone. As asset volume grows, teams need automated checks for geometry, rigging, LODs and production readiness.',
      approach: [
        'Built unity-based internal tooling and data pipelines to scale asset creation and validation.',
        'Optimized automation scripts for level-of-detail generation in PyMel.',
        'Developed a KD-tree based system to detect and resolve mesh intersections in 3D assets.',
        'Built a Unity-based QA console for rig checks and approval workflows.'
      ],
      outcome:
        'The tooling reduced asset production and quality validation time by roughly 90%, improved LOD generation efficiency by 80% and reduced 3D asset validation time by around 60%.',
      learnings: [
        'Pipeline tooling has a direct impact on creative team velocity.',
        'Good tools make quality checks easier to run, understand and trust.'
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
        'The project shows my interest in spatial computing, Unity development and interfaces that connect digital systems with real-world environments.',
      learnings: [
        'AR navigation needs visual clarity more than visual complexity.',
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
      'A C# and Unity3D game prototype built around thrust, obstacle avoidance and a clean core gameplay loop.',
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
        'The goal was to build a complete, focused gameplay loop rather than a large unfinished game. I wanted the experience to be understandable quickly, mechanically responsive and simple enough to polish within scope.',
      approach: [
        'Implemented the core movement loop in C# using Unity physics.',
        'Designed obstacle layouts around timing, thrust control and recovery.',
        'Built a playable web version to make the project easy to share.',
        'Focused on clarity of controls and immediate feedback.'
      ],
      outcome:
        'The project demonstrates my foundation in Unity, C#, gameplay mechanics and interactive 3D experiences.',
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
