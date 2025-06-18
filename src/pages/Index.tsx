import { useState, useEffect } from 'react';

const Index = () => {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [clickedLetters, setClickedLetters] = useState<string[]>([]);
  const [showSpecialEffect, setShowSpecialEffect] = useState(false);
  
  const handleLetterClick = (letter: string) => {
    setActiveLetter(letter);
    
    // Add to clicked letters array if not already there
    if (!clickedLetters.includes(letter)) {
      const newClickedLetters = [...clickedLetters, letter];
      setClickedLetters(newClickedLetters);
      
      // Check if all letters have been clicked in the correct order
      if (newClickedLetters.join('') === 'LABS') {
        setShowSpecialEffect(true);
        setTimeout(() => setShowSpecialEffect(false), 3000);
      }
    }
    
    // Clear active letter after animation
    setTimeout(() => setActiveLetter(null), 1000);
  };
  
  // Reset clicked letters if they're not in the correct order
  useEffect(() => {
    const correctOrderSoFar = 'LABS'.startsWith(clickedLetters.join(''));
    if (!correctOrderSoFar) {
      setClickedLetters([]);
    }
  }, [clickedLetters]);

  return (
    <div className={`h-screen w-screen bg-gradient-to-br from-white via-orange-50 to-white overflow-hidden relative ${showSpecialEffect ? 'special-effect' : ''}`}>
      {/* Special effect overlay */}
      {showSpecialEffect && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <div className="confetti-container">
            {[...Array(50)].map((_, i) => (
              <div key={i} className={`confetti confetti-${i % 5}`}></div>
            ))}
          </div>
          <div className="text-6xl font-bold text-orange-500 animate-bounce pixel-font tracking-wider">
            LABS ACTIVATED!
          </div>
        </div>
      )}
      
      <div className="h-full w-full relative z-10">
        {/* Progress indicator for LABS sequence */}
        <div className="progress-indicator">
          {['L', 'A', 'B', 'S'].map((letter, index) => (
            <div 
              key={letter} 
              className={`progress-dot ${clickedLetters.length > index && 
                clickedLetters[index] === letter ? 'active' : ''}`}
              title={`Click the letter ${letter}`}
            />
          ))}
        </div>
        
        {/* Main Grid Container */}
        <div className="grid grid-cols-4 gap-0 h-full glass-container">
          {/* Top Row */}
          <div className="glass-panel hover:glass-panel-hover backdrop-blur-sm hover:bg-orange-50/50 transition-all duration-500"></div>
          <div className="glass-panel hover:glass-panel-hover backdrop-blur-sm hover:bg-orange-50/50 transition-all duration-500"></div>
          <div className="glass-panel hover:glass-panel-hover backdrop-blur-sm hover:bg-orange-50/50 transition-all duration-500"></div>
          <div className="glass-panel hover:glass-panel-hover backdrop-blur-sm hover:bg-orange-50/50 transition-all duration-500 flex items-start justify-end p-4">
            <button className="neo-brutalism-button">
              GET IT
            </button>
          </div>
          
          {/* Second Row - Character and Thank You */}
          <div className="glass-panel hover:glass-panel-hover flex items-center justify-center relative group">
            {/* Character image from public folder */}
            <img 
              src="/smile.png" 
              alt="Pixel Character" 
              className="pixel-character-img w-80 h-80 transform transition-transform duration-500 group-hover:scale-125 animate-float"
            />
            {/* Corner brackets with animation */}
            <div className="absolute top-2 left-2 text-3xl font-bold text-orange-500/70 transition-all duration-500 group-hover:scale-150 group-hover:rotate-12">⌜</div>
            <div className="absolute top-2 right-2 text-3xl font-bold text-orange-500/70 transition-all duration-500 group-hover:scale-150 group-hover:-rotate-12">⌝</div>
            <div className="absolute bottom-2 left-2 text-3xl font-bold text-orange-500/70 transition-all duration-500 group-hover:scale-150 group-hover:-rotate-12">⌞</div>
            <div className="absolute bottom-2 right-2 text-3xl font-bold text-orange-500/70 transition-all duration-500 group-hover:scale-150 group-hover:rotate-12">⌟</div>
          </div>
          
          <div className="glass-panel hover:glass-panel-hover col-span-3 flex flex-col justify-center items-center p-8 group hover:bg-orange-50/50 transition-all duration-500">
            <div className="content-wrapper animate-slide-up">
              <h1 className="text-6xl font-bold mb-6 text-orange-500 pixel-font tracking-wider ">THANK YOU</h1>
              <p className="text-sm text-orange-700 text-center mb-8 pixel-font leading-tight typing-animation">
                CREATIVE DESIGN AND DEVELOPMENT IN<br />
                WEB DEVELOPMENT AMD DT MANAGED IT IS
              </p>
              <button className="neo-brutalism-white-button">
                BACK TO MAIN
              </button>
            </div>
          </div>
            {/* Bottom Row - LABS Text */}
          <div className="glass-panel hover:glass-panel-hover flex items-center justify-center group relative">
            <div className="pixel-letter-l letter-3d"></div>
            <span 
              className={`labs-letter labs-delay-1 ${activeLetter === 'L' ? 'active' : ''}`}
              onClick={() => handleLetterClick('L')}
            >L</span>
          </div>
          <div className="glass-panel hover:glass-panel-hover flex items-center justify-center group relative">
            <div className="pixel-letter-a letter-3d"></div>
            <span 
              className={`labs-letter labs-delay-2 ${activeLetter === 'A' ? 'active' : ''}`}
              onClick={() => handleLetterClick('A')}
            >A</span>
          </div>
          <div className="glass-panel hover:glass-panel-hover flex items-center justify-center group relative">
            <div className="pixel-letter-b letter-3d"></div>
            <span 
              className={`labs-letter labs-delay-3 ${activeLetter === 'B' ? 'active' : ''}`}
              onClick={() => handleLetterClick('B')}
            >B</span>
          </div>
          <div className="glass-panel hover:glass-panel-hover flex items-center justify-center group relative">
            <div className="pixel-letter-s letter-3d"></div>
            <span 
              className={`labs-letter labs-delay-4 ${activeLetter === 'S' ? 'active' : ''}`}
              onClick={() => handleLetterClick('S')}
            >S</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
