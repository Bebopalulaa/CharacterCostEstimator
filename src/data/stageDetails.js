// Assurez-vous que tous les stages ont des données
export const stageDetails = {
  blocking: {
    name: 'Blocking',
    description: 'Blocking is the initial phase of 3D character creation where we establish the basic shapes and proportions. This fundamental step sets the foundation for the entire character, ensuring proper scale and silhouette.',
    images: [
      {
        url: 'https://via.placeholder.com/400x300?text=Blocking+Basic+Shapes',
        caption: 'Starting with basic geometric shapes'
      },
      {
        url: 'https://via.placeholder.com/400x300?text=Blocking+Refined',
        caption: 'Refined blocking with proper proportions'
      }
    ],
    steps: [
      'Create basic geometric shapes to establish the character\'s general form',
      'Define proper proportions and scale',
      'Establish the character\'s pose and silhouette',
      'Review and adjust the basic volumes',
      'Prepare for the high-poly phase'
    ],
    tips: [
      'Focus on overall proportions before adding details',
      'Use reference images for accurate scaling',
      'Keep the topology simple at this stage'
    ]
  },
  highpoly: {
    name: 'High Poly',
    description: 'The high poly phase involves creating a detailed version of the character with all surface details and features. This stage focuses on sculpting and adding fine details that will later be transferred to the game-ready model.',
    images: [
      {
        url: 'https://via.placeholder.com/400x300?text=Highpoly+Sculpting',
        caption: 'Detailed sculpting process'
      },
      {
        url: 'https://via.placeholder.com/400x300?text=Highpoly+Details',
        caption: 'Final high-poly details'
      }
    ],
    steps: [
      'Refine the basic shapes from blocking',
      'Add primary surface details',
      'Sculpt secondary details and textures',
      'Create fine details and micro-surface features',
      'Prepare for retopology'
    ],
    tips: [
      'Work in subdivisions from large to small details',
      'Maintain clean topology for better detail work',
      'Use layers to organize different detail levels'
    ]
  },
  retopology: {
    name: 'Retopology',
    description: 'Retopology is the process of creating a new, optimized mesh based on the high-poly model. This step is crucial for creating a game-ready character with proper deformation and performance.',
    images: [
      {
        url: 'https://i.gyazo.com/3181cf5774065a98fa07c60f888d053e.gif',
        caption: 'Proper edge flow for animation'
      },
      {
        url: 'https://via.placeholder.com/400x300?text=Retopology+Final+Mesh',
        caption: 'Optimized final mesh'
      }
    ],
    steps: [
      'Create new optimized topology',
      'Ensure proper edge flow for animation',
      'Optimize polygon count',
      'Set up UV seams',
      'Prepare for UV unwrapping'
    ],
    tips: [
      'Follow the natural flow of muscles and features',
      'Keep quads for better deformation',
      'Plan UV seams during retopology'
    ]
  },
  uv: {
    name: 'UV Mapping',
    description: 'UV mapping involves creating a 2D representation of the 3D model for texturing. This process is essential for proper texture application and optimal texture space usage.',
    images: [
      {
        url: 'https://via.placeholder.com/400x300?text=UV+Unwrapping',
        caption: 'UV unwrapping process'
      },
      {
        url: 'https://via.placeholder.com/400x300?text=UV+Layout',
        caption: 'Optimized UV layout'
      }
    ],
    steps: [
      'Create UV seams',
      'Unwrap the model',
      'Optimize UV space usage',
      'Pack UV islands efficiently',
      'Prepare for texturing'
    ],
    tips: [
      'Place seams in hidden areas',
      'Maximize texture space usage',
      'Keep similar-sized UV islands'
    ]
  },
  texturing: {
    name: 'Texturing',
    description: 'Texturing gives the character its final look by adding colors, materials, and surface details. This stage brings the character to life with realistic or stylized materials.',
    images: [
      {
        url: 'https://via.placeholder.com/400x300?text=Texturing+Base+Materials',
        caption: 'Base material application'
      },
      {
        url: 'https://via.placeholder.com/400x300?text=Texturing+Final+Details',
        caption: 'Final texture details'
      }
    ],
    steps: [
      'Create base color maps',
      'Add roughness and metallic maps',
      'Generate normal maps from high-poly',
      'Add detail maps and masks',
      'Finalize material properties'
    ],
    tips: [
      'Start with base materials before details',
      'Use reference images for accurate materials',
      'Test in different lighting conditions'
    ]
  },
  haircut: {
    name: 'Haircut',
    description: 'The haircut phase involves creating and styling the character\'s hair. This can be done using either particle-based hair systems or hair cards, each with their own advantages.',
    images: [
      {
        url: 'https://via.placeholder.com/400x300?text=Haircut+Particle+System',
        caption: 'Particle-based hair system'
      },
      {
        url: 'https://via.placeholder.com/400x300?text=Haircut+Hair+Cards',
        caption: 'Hair card technique'
      }
    ],
    steps: [
      'Choose the appropriate hair technique',
      'Create base hair geometry or guides',
      'Style and groom the hair',
      'Optimize for performance',
      'Apply hair materials and textures'
    ],
    tips: [
      'Particle hair is great for realistic results but more performance-intensive',
      'Hair cards are more performance-friendly and work well for stylized characters',
      'Consider the target platform when choosing a technique',
      'Use reference images for accurate hair styling'
    ]
  },
  extraProps: {
    name: 'Extra Props',
    description: 'Extra props are additional items that accompany the character, such as weapons, accessories, or equipment. These items enhance the character\'s personality and functionality.',
    images: [
      {
        url: 'https://via.placeholder.com/400x300?text=Props+Weapons',
        caption: 'Character weapons'
      },
      {
        url: 'https://via.placeholder.com/400x300?text=Props+Accessories',
        caption: 'Character accessories'
      }
    ],
    steps: [
      'Design props that match the character\'s style',
      'Model the base geometry',
      'Add details and refinements',
      'Create UVs and textures',
      'Attach to character if needed'
    ],
    tips: [
      'Keep prop complexity appropriate to the character',
      'Reuse textures where possible for efficiency',
      'Consider how props will be used in animation',
      'Ensure props match the character\'s scale and style'
    ]
  },
  rig: {
    name: 'Rigging',
    description: 'Rigging creates the skeletal structure and controls that allow the character to be animated. This technical stage is crucial for bringing the character to life through movement.',
    images: [
      {
        url: 'https://via.placeholder.com/400x300?text=Rig+Skeleton',
        caption: 'Skeleton hierarchy setup'
      },
      {
        url: 'https://via.placeholder.com/400x300?text=Rig+Controls',
        caption: 'Animation control system'
      }
    ],
    steps: [
      'Create skeleton hierarchy',
      'Set up joint placement',
      'Create control systems',
      'Set up skinning weights',
      'Test deformations'
    ],
    tips: [
      'Follow anatomical reference for joint placement',
      'Create intuitive controls for animators',
      'Test rig in extreme poses'
    ]
  }
};
