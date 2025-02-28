// Ajouter les nouvelles descriptions pour Haircut et Extra Props
export const stageDetails = {
  // ... autres descriptions existantes ...
  
  haircut: {
    name: 'Haircut',
    description: 'The haircut phase involves creating and styling the character\'s hair. This can be done using either particle-based hair systems or hair cards, each with their own advantages.',
    images: [
      {
        url: '/images/haircut/particle-hair.jpg',
        caption: 'Particle-based hair system'
      },
      {
        url: '/images/haircut/hair-cards.jpg',
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
        url: '/images/props/weapons.jpg',
        caption: 'Character weapons'
      },
      {
        url: '/images/props/accessories.jpg',
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
  
  // ... autres descriptions existantes ...
};
