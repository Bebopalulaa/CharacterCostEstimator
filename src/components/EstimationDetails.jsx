import React, { useState, useEffect } from 'react';
import { times } from '../data/times';

function EstimationDetails({ initialTotal, selectedStages, qualityLevels, selectedRigType, onBack }) {
  const [characters, setCharacters] = useState(1);
  const [timeAdjustment, setTimeAdjustment] = useState(0);
  const [total, setTotal] = useState(initialTotal);
  const MAX_DISCOUNT = 0.30;
  const MAX_TIME_DISCOUNT = 0.50;
  const HOURS_PER_DAY = 8;

  const hoursToRoundedDays = (hours) => {
    return Math.ceil(hours / HOURS_PER_DAY);
  };

  const calculateBaseTimeInHours = () => {
    let baseHours = 0;
    Object.entries(selectedStages).forEach(([stageId, isSelected]) => {
      if (isSelected) {
        if (stageId === 'rig' && selectedRigType) {
          baseHours += times[selectedRigType];
        } else if (stageId !== 'rig') {
          const timeKey = `${stageId}${qualityLevels[stageId].charAt(0).toUpperCase() + qualityLevels[stageId].slice(1)}`;
          baseHours += times[timeKey];
        }
      }
    });
    return baseHours;
  };

  const baseTimeHours = calculateBaseTimeInHours();
  const baseTimeDays = hoursToRoundedDays(baseTimeHours);
  const totalBaseDays = baseTimeDays * characters;

  useEffect(() => {
    const subtotal = initialTotal * characters;
    const characterDiscountPercentage = Math.min((Math.max(0, characters - 1) * 0.05), MAX_DISCOUNT);
    const afterCharacterDiscount = subtotal * (1 - characterDiscountPercentage);
    
    // Calcul du pourcentage d'ajustement basé sur le temps total initial
    const timeAdjustmentPercentage = timeAdjustment / totalBaseDays;
    let priceAdjustmentFactor = 0;
    
    if (timeAdjustmentPercentage > 0) {
      priceAdjustmentFactor = -Math.min(timeAdjustmentPercentage, MAX_TIME_DISCOUNT);
    } else {
      priceAdjustmentFactor = Math.min(Math.abs(timeAdjustmentPercentage), MAX_TIME_DISCOUNT);
    }
    
    const finalTotal = afterCharacterDiscount * (1 + priceAdjustmentFactor);
    setTotal(finalTotal);
  }, [characters, timeAdjustment, initialTotal, totalBaseDays]);

  const getDiscountText = () => {
    if (characters <= 1) return 'Discount: 0% (0.00 USD)';
    
    const discountPercentage = Math.min((characters - 1) * 5, 30);
    const subtotal = initialTotal * characters;
    const discountAmount = subtotal * (discountPercentage / 100);
    
    return `Discount: ${discountPercentage}% (-${discountAmount.toFixed(2)} USD)`;
  };

  const getTimeAdjustmentText = () => {
    if (timeAdjustment === 0) return '';
    
    const adjustmentPercentage = (timeAdjustment / totalBaseDays) * 100;
    const priceAdjustmentPercentage = Math.min(Math.abs(adjustmentPercentage), 50);
    
    if (timeAdjustment > 0) {
      return `(-${priceAdjustmentPercentage.toFixed(1)}% price)`;
    } else {
      return `(+${priceAdjustmentPercentage.toFixed(1)}% price)`;
    }
  };

  const handleTimeAdjustment = (value) => {
    // Calcul des limites d'ajustement basées sur le temps total initial
    const maxIncrease = totalBaseDays; // +100% du temps initial (pour 50% de réduction max)
    const maxDecrease = -Math.floor(totalBaseDays * 0.5); // -50% du temps initial (pour 50% d'augmentation max)
    
    // Limiter la valeur d'ajustement
    const adjustedValue = Math.min(Math.max(value, maxDecrease), maxIncrease);
    setTimeAdjustment(adjustedValue);
  };

  return (
    <div className="card p-6 mt-8" id="estimationDetails">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-4 text-purple-400">Number of Characters</h2>
          <div className="flex items-center gap-4 mb-2">
            <label>Number of characters:</label>
            <input
              type="number"
              min="1"
              value={characters}
              onChange={(e) => setCharacters(Math.max(1, parseInt(e.target.value) || 1))}
              className="bg-purple-900/20 border border-purple-900/40 rounded px-2 py-1 w-20"
            />
            {characters > 7 && (
              <span className="text-orange-400 text-sm">
                Maximum discount of 30% reached
              </span>
            )}
          </div>
          <div className="text-purple-400">
            {getDiscountText()}
          </div>
          <div className="font-semibold mt-2 text-gray-300">
            Total (before time adjustment): {total.toFixed(2)} USD
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-purple-400">Estimated Time</h2>
          <div className="space-y-2">
            <div>
              Initial estimated time: 
              <span className="text-purple-400 ml-2">
                {totalBaseDays} days
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <label>Adjust time (days):</label>
              <input
                type="number"
                value={timeAdjustment}
                onChange={(e) => handleTimeAdjustment(parseInt(e.target.value) || 0)}
                className="bg-purple-900/20 border border-purple-900/40 rounded px-2 py-1 w-20"
                min={-Math.floor(totalBaseDays * 0.5)}
                max={totalBaseDays}
              />
              <span className={timeAdjustment >= 0 ? 'text-green-400' : 'text-red-400'}>
                Adjustment: {timeAdjustment >= 0 ? '+' : ''}{timeAdjustment} days {getTimeAdjustmentText()}
              </span>
            </div>

            <div>
              Adjusted estimated time: 
              <span className="text-purple-400 ml-2">
                {totalBaseDays + timeAdjustment} days
              </span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text p-4">
            Final Price: {total.toFixed(2)} USD
          </div>
        </div>

        <button 
          onClick={onBack}
          className="validate-button"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default EstimationDetails;
