import React, { useState, useRef, useEffect } from 'react';
import { FiHelpCircle } from 'react-icons/fi';

const qualityDescriptions = {
  basic: {
    title: 'Basic Quality',
    description: 'Suitable for prototypes, indie games, or projects with limited budget. Provides functional assets with simplified details and optimized workflow.',
    features: [
      'Simplified geometry',
      'Basic textures',
      'Functional but minimal details',
      'Faster delivery time',
      'Budget-friendly option'
    ]
  },
  standard: {
    title: 'Industry Standard',
    description: 'Professional quality suitable for most commercial projects. Balances detail, performance, and cost for optimal results.',
    features: [
      'Detailed geometry',
      'High-quality textures',
      'Industry-standard workflow',
      'Proper optimization',
      'Suitable for most commercial projects'
    ]
  },
  epic: {
    title: 'Epic AAA Studio',
    description: 'Premium quality with maximum detail and polish. Suitable for AAA games, cinematics, or projects where visual fidelity is paramount.',
    features: [
      'Maximum detail and polish',
      'Complex geometry',
      'Advanced material setup',
      'Cinematic quality',
      'Suitable for AAA productions'
    ]
  }
};

function QualityTooltip({ quality }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const iconRef = useRef(null);
  const tooltipRef = useRef(null);
  const info = qualityDescriptions[quality];

  // Calculate position when tooltip opens
  useEffect(() => {
    if (isOpen && iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + rect.width / 2
      });
    }
  }, [isOpen]);

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target) && 
          iconRef.current && !iconRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="tooltip-container">
      <FiHelpCircle 
        ref={iconRef}
        className="tooltip-icon" 
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      />
      
      {isOpen && (
        <div 
          ref={tooltipRef}
          className="tooltip-content"
          style={{
            position: 'absolute',
            top: position.top + 'px',
            left: position.left + 'px',
            transform: 'translateX(-50%)'
          }}
          onMouseLeave={() => setIsOpen(false)}
        >
          <h4 className="font-bold text-purple-400 mb-1">{info.title}</h4>
          <p className="mb-2">{info.description}</p>
          <ul className="space-y-1">
            {info.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-1">
                <span className="text-purple-400">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default QualityTooltip;
