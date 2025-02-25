import React from 'react';
import { IoMdClose } from 'react-icons/io';

function InfoModal({ isOpen, onClose, stage }) {
  if (!isOpen || !stage) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#130b2b] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-purple-900/20">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-purple-400">{stage.name}</h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              <IoMdClose />
            </button>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              {stage.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stage.images.map((image, index) => (
                <div key={index} className="space-y-2">
                  <img 
                    src={image.url} 
                    alt={image.caption} 
                    className="rounded-lg w-full h-48 object-cover border border-purple-900/20"
                  />
                  <p className="text-sm text-gray-400 text-center">{image.caption}</p>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Process Steps:</h4>
              <ul className="space-y-2">
                {stage.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-gray-300">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {stage.tips && (
              <div className="bg-purple-900/20 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Pro Tips:</h4>
                <ul className="space-y-2">
                  {stage.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">💡</span>
                      <span className="text-gray-300">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
