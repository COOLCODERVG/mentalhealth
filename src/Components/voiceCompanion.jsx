import React, { useState, useEffect, useRef } from 'react';
export default function VoiceCompanion() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border-2 border-pink-300 mb-10">
      <h2 className="text-2xl font-bold text-pink-600 mb-4">🎤 Voice Companion</h2>
      
      <div className="flex flex-col items-center py-8">
        <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center mb-6">
          <span className="text-3xl">🔜</span>
        </div>
        
        <p className="text-xl font-medium text-gray-800 mb-2">Coming Soon!</p>
        <p className="text-gray-600 text-center">
          Our voice companion feature is currently under development.
        </p>
      </div>
    </div>
  );
}