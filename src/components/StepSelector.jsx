import React from 'react';
import { BsQuestionCircle } from 'react-icons/bs';

export default function StepSelector({ title, description, price, gifUrl, onChange, checked }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-5 h-5"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
          />
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="has-tooltip relative">
            <BsQuestionCircle className="text-blue-500" />
            <div className="tooltip bg-black text-white p-2 rounded mt-2 -ml-20 w-64">
              <p className="mb-2">{description}</p>
              <img src={gifUrl} alt={title} className="w-full rounded" />
            </div>
          </div>
        </div>
        <span className="font-bold">{price}€</span>
      </div>
    </div>
  );
}
