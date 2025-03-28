// NavbarComponents.tsx

import React from 'react';
import { Capsule } from '../../../../types/navbar'; // Ensure this path is correct based on your project structure
import Link from "next/link";

// ProgramCard Component
export const ProgramCard: React.FC<Capsule> = ({ name, outcome, badge, duration, price }) => (
  <div className="p-4 hover:bg-gray-800 border ml-2 rounded-lg transition-colors w-100 h-28">
    <div className="flex-1">
      <h3 className="font-medium text-lg text-white">{name}</h3>
      <p className="text-sm text-white">{outcome}</p>
      <div className="flex flex-wrap gap-4 mt-2">
        <span className="text-sm text-white">🏅 {badge}</span>
        <span className="text-sm text-white">⏱️ {duration}</span>
        <span className="text-sm text-white">💰 ₹{price}</span>
      </div>
    </div>
  </div>
);

// SideCategories Component
export const SideCategories: React.FC<{
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}> = ({ categories, selectedCategory, onCategorySelect }) => (
  <div className="w-48 bg-gray-700 p-4 text-white space-y-2 md:block">
    {categories.map((category) => (
      <div
        key={category}
        className={`p-2 rounded-md cursor-pointer ${
          selectedCategory === category ? "bg-gray-800 font-semibold" : "hover:bg-gray-800"
        }`}
        onClick={() => onCategorySelect(category)}
      >
        {category}
      </div>
    ))}
  </div>
);