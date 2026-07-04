"use client";

import React, { useState, useEffect } from 'react';

export function CookieConsentShell() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scaffold logic for consent. 
    // In actual implementation, check localStorage.
    const consent = localStorage.getItem('aroneu-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-sm">
          <p>We use cookies to improve your experience. Essential cookies are always required.</p>
        </div>
        <div className="flex space-x-4">
          <button onClick={() => setIsVisible(false)} className="text-sm underline">Manage Preferences</button>
          <button onClick={() => setIsVisible(false)} className="text-sm underline">Reject Non-Essential</button>
          <button 
            onClick={() => {
              localStorage.setItem('aroneu-consent', 'all');
              setIsVisible(false);
            }} 
            className="bg-black text-white px-4 py-2 rounded text-sm font-bold"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
