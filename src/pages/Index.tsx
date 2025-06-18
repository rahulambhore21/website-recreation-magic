const Index = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-white via-orange-50 to-white overflow-hidden">
      <div className="h-full w-full">
        {/* Main Grid Container */}
        <div className="grid grid-cols-4 gap-0 h-full border-4 border-orange-500/50 shadow-2xl backdrop-blur-sm">
          {/* Top Row */}
          <div className="border border-orange-300/30 backdrop-blur-sm hover:bg-orange-50/50 transition-all duration-500"></div>
          <div className="border border-orange-300/30 backdrop-blur-sm hover:bg-orange-50/50 transition-all duration-500"></div>
          <div className="border border-orange-300/30 backdrop-blur-sm hover:bg-orange-50/50 transition-all duration-500"></div>
          <div className="border border-orange-300/30 backdrop-blur-sm hover:bg-orange-50/50 transition-all duration-500 flex items-start justify-end p-4">
            <button className="bg-orange-500 text-white px-8 py-3 text-sm font-bold hover:bg-orange-600 transition-all duration-300 hover:scale-105 rounded-lg shadow-lg hover:shadow-orange-300/50">
              GET IT
            </button>
          </div>
          
          {/* Second Row - Character and Thank You */}
          <div className="border border-orange-300/30 backdrop-blur-sm flex items-center justify-center relative group">
            {/* Animated Pixel Art Character */}
            <div className="pixel-character transform transition-transform duration-500 group-hover:scale-125 animate-float">
              <div className="pixel-row">
                <div className="pixel orange animate-glow"></div>
                <div className="pixel orange"></div>
                <div className="pixel orange animate-glow"></div>
              </div>
              <div className="pixel-row">
                <div className="pixel orange"></div>
                <div className="pixel orange animate-pulse"></div>
                <div className="pixel orange"></div>
              </div>
              <div className="pixel-row">
                <div className="pixel orange animate-glow"></div>
                <div className="pixel orange"></div>
                <div className="pixel orange animate-glow"></div>
              </div>
              <div className="pixel-row">
                <div className="pixel orange"></div>
                <div className="pixel white animate-pulse"></div>
                <div className="pixel orange"></div>
              </div>
              <div className="pixel-row">
                <div className="pixel orange animate-glow"></div>
                <div className="pixel orange"></div>
                <div className="pixel orange animate-glow"></div>
              </div>
            </div>
            {/* Corner brackets with animation */}
            <div className="absolute top-2 left-2 text-3xl font-bold text-orange-500/70 transition-all duration-500 group-hover:scale-150 group-hover:rotate-12">⌜</div>
            <div className="absolute top-2 right-2 text-3xl font-bold text-orange-500/70 transition-all duration-500 group-hover:scale-150 group-hover:-rotate-12">⌝</div>
            <div className="absolute bottom-2 left-2 text-3xl font-bold text-orange-500/70 transition-all duration-500 group-hover:scale-150 group-hover:-rotate-12">⌞</div>
            <div className="absolute bottom-2 right-2 text-3xl font-bold text-orange-500/70 transition-all duration-500 group-hover:scale-150 group-hover:rotate-12">⌟</div>
          </div>
          
          <div className="border border-orange-300/30 backdrop-blur-sm col-span-3 flex flex-col justify-center items-center p-8 group hover:bg-orange-50/50 transition-all duration-500">
            <h1 className="text-5xl font-bold mb-6 text-orange-500 pixel-font tracking-wider animate-title">THANK YOU</h1>
            <p className="text-sm text-orange-700 text-center mb-8 pixel-font leading-tight opacity-90 animate-fadeIn">
              CREATIVE DESIGN AND DEVELOPMENT IN<br />
              WEB DEVELOPMENT AMD DT MANAGED IT IS
            </p>
            <button className="bg-transparent border-2 border-orange-500 px-10 py-4 text-orange-500 font-bold pixel-font hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-105 rounded-lg shadow-lg hover:shadow-orange-300/50">
              BACK TO MAIN
            </button>
          </div>
          
          {/* Bottom Row - LABS Text */}
          <div className="border border-orange-300/30 backdrop-blur-sm flex items-center justify-center group hover:bg-orange-50/50 transition-all duration-500">
            <div className="pixel-letter-l animate-fadeInUp"></div>
          </div>
          <div className="border border-orange-300/30 backdrop-blur-sm flex items-center justify-center group hover:bg-orange-50/50 transition-all duration-500">
            <div className="pixel-letter-a animate-fadeInUp animation-delay-100"></div>
          </div>
          <div className="border border-orange-300/30 backdrop-blur-sm flex items-center justify-center group hover:bg-orange-50/50 transition-all duration-500">
            <div className="pixel-letter-b animate-fadeInUp animation-delay-200"></div>
          </div>
          <div className="border border-orange-300/30 backdrop-blur-sm flex items-center justify-center group hover:bg-orange-50/50 transition-all duration-500">
            <div className="pixel-letter-s animate-fadeInUp animation-delay-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
