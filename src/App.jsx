import React, { useState, useEffect } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { HiCheck } from 'react-icons/hi';
import EstimationDetails from './components/EstimationDetails';
import InfoModal from './components/InfoModal';
import { stages } from './data/stages';
import { prices } from './data/prices';
import { stageDetails } from './data/stageDetails';

const QUALITY_LEVELS = {
  BASIC: 'basic',
  STANDARD: 'standard',
  EPIC: 'epic'
};

const RIG_OPTIONS = {
  blender: [
    { id: 'rigBlenderHuman', name: 'Human Rig (Classic)' },
    { id: 'rigBlenderHumanoid', name: 'Humanoid Rig (Custom)' },
    { id: 'rigBlenderSpecial', name: 'Special Rig' }
  ],
  maya: [
    { id: 'rigMayaHuman', name: 'Human Rig' }
  ],
  metahuman: [
    { id: 'rigMetahumanHuman', name: 'Human Rig' },
    { id: 'rigMetahumanHumanoid', name: 'Humanoid Rig' },
    { id: 'rigMetahumanOther', name: 'Other Rig' }
  ]
};

function App() {
  const [selectedStages, setSelectedStages] = useState(
    stages.reduce((acc, stage) => ({ ...acc, [stage.id]: true }), {})
  );
  const [qualityLevels, setQualityLevels] = useState(
    stages.reduce((acc, stage) => ({ ...acc, [stage.id]: QUALITY_LEVELS.STANDARD }), {})
  );
  const [selectedRigType, setSelectedRigType] = useState(null);
  const [modalInfo, setModalInfo] = useState({ isOpen: false, stage: null });
  const [total, setTotal] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const calculateStagePrice = (stageId, quality) => {
    const priceKey = `${stageId}${quality.charAt(0).toUpperCase() + quality.slice(1)}`;
    return prices[priceKey] || 0;
  };

  const calculateRigPrice = () => {
    if (!selectedRigType || !qualityLevels.rig) return 0;
    const priceKey = `${selectedRigType}${qualityLevels.rig.charAt(0).toUpperCase() + qualityLevels.rig.slice(1)}`;
    return prices[priceKey] || 0;
  };

  const handleQualityChange = (stageId, quality) => {
    setQualityLevels(prev => ({
      ...prev,
      [stageId]: quality
    }));
  };

  const handleValidate = () => {
    setShowDetails(true);
    setTimeout(() => {
      document.getElementById('estimationDetails')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const handleBack = () => {
    setShowDetails(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let sum = 0;
    
    Object.entries(selectedStages).forEach(([stageId, isSelected]) => {
      if (isSelected && stageId !== 'rig') {
        const stagePrice = calculateStagePrice(stageId, qualityLevels[stageId]);
        sum += stagePrice;
      }
    });

    if (selectedStages.rig && selectedRigType) {
      sum += calculateRigPrice();
    }

    setTotal(sum);
  }, [selectedStages, qualityLevels, selectedRigType]);

  return (
    <div className="min-h-screen">
      <header className="header">
        <h1 className="section-title text-center">
          3D Character Creation Pricing
        </h1>
        <p className="section-subtitle text-center">
          Professional 3D character creation services with flexible pricing options.
          Choose the quality level that matches your needs.
        </p>

        <div className="feature-list justify-center">
          <div className="feature-item">
            <HiCheck className="feature-check" />
            <span>Professional Quality</span>
          </div>
          <div className="feature-item">
            <HiCheck className="feature-check" />
            <span>Fast Delivery</span>
          </div>
          <div className="feature-item">
            <HiCheck className="feature-check" />
            <span>Multiple Quality Levels</span>
          </div>
          <div className="feature-item">
            <HiCheck className="feature-check" />
            <span>Flexible Pricing</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-8">
        <div className="card overflow-hidden shadow-xl">
          <table className="w-full">
            <thead>
              <tr className="table-header">
                <th className="table-cell">Stage</th>
                <th className="table-cell">Include</th>
                <th className="table-cell">Basic</th>
                <th className="table-cell">Industry Standard</th>
                <th className="table-cell">Epic AAA Studio</th>
                <th className="table-cell">Price</th>
              </tr>
            </thead>
            <tbody>
              {stages.map(stage => (
                <tr key={stage.id} className="hover:bg-purple-900/10 transition-colors">
                  <td className="table-cell">
                    <div className="flex items-center gap-2">
                      <span>{stage.name}</span>
                      <button 
                        onClick={() => setModalInfo({ 
                          isOpen: true, 
                          stage: stageDetails[stage.id]
                        })}
                        className="text-2xl text-purple-400 hover:text-purple-300"
                      >
                        <IoMdArrowDropdown />
                      </button>
                    </div>
                  </td>
                  <td className="table-cell text-center">
                    <input 
                      type="checkbox" 
                      checked={selectedStages[stage.id]} 
                      onChange={() => {
                        setSelectedStages(prev => ({
                          ...prev,
                          [stage.id]: !prev[stage.id]
                        }));
                      }}
                      className="checkbox"
                    />
                  </td>
                  <td className="table-cell text-center">
                    <input 
                      type="radio" 
                      name={`quality-${stage.id}`} 
                      checked={qualityLevels[stage.id] === QUALITY_LEVELS.BASIC}
                      onChange={() => handleQualityChange(stage.id, QUALITY_LEVELS.BASIC)}
                      disabled={!selectedStages[stage.id]}
                      className="radio-button"
                    />
                  </td>
                  <td className="table-cell text-center">
                    <input 
                      type="radio" 
                      name={`quality-${stage.id}`} 
                      checked={qualityLevels[stage.id] === QUALITY_LEVELS.STANDARD}
                      onChange={() => handleQualityChange(stage.id, QUALITY_LEVELS.STANDARD)}
                      disabled={!selectedStages[stage.id]}
                      className="radio-button"
                    />
                  </td>
                  <td className="table-cell text-center">
                    <input 
                      type="radio" 
                      name={`quality-${stage.id}`} 
                      checked={qualityLevels[stage.id] === QUALITY_LEVELS.EPIC}
                      onChange={() => handleQualityChange(stage.id, QUALITY_LEVELS.EPIC)}
                      disabled={!selectedStages[stage.id]}
                      className="radio-button"
                    />
                  </td>
                  <td className="table-cell text-right">
                    {selectedStages[stage.id] 
                      ? stage.id === 'rig' && selectedRigType
                        ? `${calculateRigPrice()} USD`
                        : `${calculateStagePrice(stage.id, qualityLevels[stage.id])} USD`
                      : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="p-6 border-t border-purple-900/20">
            {selectedStages.rig && (
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="card p-4">
                  <h3 className="font-bold mb-4 text-purple-400">Blender</h3>
                  {RIG_OPTIONS.blender.map(rig => (
                    <div key={rig.id} className="mb-2">
                      <input 
                        type="radio" 
                        name="rig-type"
                        checked={selectedRigType === rig.id}
                        onChange={() => setSelectedRigType(rig.id)}
                        className="radio-button mr-2"
                      />
                      <label>{rig.name}</label>
                    </div>
                  ))}
                </div>

                <div className="card p-4">
                  <h3 className="font-bold mb-4 text-purple-400">Maya</h3>
                  {RIG_OPTIONS.maya.map(rig => (
                    <div key={rig.id} className="mb-2">
                      <input 
                        type="radio" 
                        name="rig-type"
                        checked={selectedRigType === rig.id}
                        onChange={() => setSelectedRigType(rig.id)}
                        className="radio-button mr-2"
                      />
                      <label>{rig.name}</label>
                    </div>
                  ))}
                </div>

                <div className="card p-4">
                  <h3 className="font-bold mb-4 text-purple-400">Metahuman</h3>
                  {RIG_OPTIONS.metahuman.map(rig => (
                    <div key={rig.id} className="mb-2">
                      <input 
                        type="radio" 
                        name="rig-type"
                        checked={selectedRigType === rig.id}
                        onChange={() => setSelectedRigType(rig.id)}
                        className="radio-button mr-2"
                      />
                      <label>{rig.name}</label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between items-center">
              <button 
                className="validate-button"
                onClick={handleValidate}
              >
                Validate and Proceed
              </button>
              
              <div className="text-right">
                <div className="text-gray-400 text-sm">Total Price</div>
                <div className="text-2xl font-bold text-purple-400">
                  {total.toFixed(2)} USD
                </div>
              </div>
            </div>
          </div>
        </div>

        {showDetails && (
          <EstimationDetails 
            initialTotal={total}
            selectedStages={selectedStages}
            qualityLevels={qualityLevels}
            selectedRigType={selectedRigType}
            onBack={handleBack}
          />
        )}

        <InfoModal 
          isOpen={modalInfo.isOpen}
          onClose={() => setModalInfo({ isOpen: false, stage: null })}
          stage={modalInfo.stage}
        />
      </main>
    </div>
  );
}

export default App;
