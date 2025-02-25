export const stageDetails = {
  blocking: {
    name: 'Blocking',
    description: 'Blocking is the initial phase of 3D character creation where we establish the basic shapes and proportions. This fundamental step sets the foundation for the entire character, ensuring proper scale and silhouette.',
    images: [
      {
        url: '/images/blocking/basic-shapes.jpg',
        caption: 'Starting with basic geometric shapes'
      },
      {
        url: '/images/blocking/refined-blocking.jpg',
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
        url: '/images/highpoly/sculpting.jpg',
        caption: 'Detailed sculpting process'
      },
      {
        url: '/images/highpoly/final-details.jpg',
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
        url: '/images/retopology/edge-flow.jpg',
        caption: 'Proper edge flow for animation'
      },
      {
        url: '/images/retopology/final-mesh.jpg',
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
        url: '/images/uv/unwrap-process.jpg',
        caption: 'UV unwrapping process'
      },
      {
        url: '/images/uv/packed-uvs.jpg',
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
        url: '/images/texturing/base-materials.jpg',
        caption: 'Base material application'
      },
      {
        url: '/images/texturing/final-details.jpg',
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
  rig: {
    name: 'Rigging',
    description: 'Rigging creates the skeletal structure and controls that allow the character to be animated. This technical stage is crucial for bringing the character to life through movement.',
    images: [
      {
        url: '/images/rig/skeleton-setup.jpg',
        caption: 'Skeleton hierarchy setup'
      },
      {
        url: '/images/rig/control-system.jpg',
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
