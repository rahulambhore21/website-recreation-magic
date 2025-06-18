const Index = () => {
  return (
    <div className="h-screen w-screen bg-white overflow-hidden">
      <div className="h-full w-full">
        {/* Main Grid Container */}
        <div className="grid grid-cols-4 gap-0 h-full border-4 border-orange-500">
          {/* Top Row */}
          <div className="border border-orange-300"></div>
          <div className="border border-orange-300"></div>
          <div className="border border-orange-300"></div>
          <div className="border border-orange-300 flex items-start justify-end p-2">
            <button className="bg-orange-500 text-white px-6 py-2 text-sm font-bold hover:bg-orange-600 transition-all duration-300 hover:scale-105 rounded">
              GET IT
            </button>
          </div>
          
          {/* Second Row - Character and Thank You */}
          <div className="border border-orange-300 flex items-center justify-center relative group">
            {/* Animated Pixel Art Character */}
            <div className="pixel-character transform transition-transform duration-300 group-hover:scale-110">
              <div className="pixel-row">
                <div className="pixel orange"></div>
                <div className="pixel orange"></div>
                <div className="pixel orange"></div>
              </div>
              <div className="pixel-row">
                <div className="pixel orange"></div>
                <div className="pixel orange"></div>
                <div className="pixel orange"></div>
              </div>
              <div className="pixel-row">
                <div className="pixel orange"></div>
                <div className="pixel orange"></div>
                <div className="pixel orange"></div>
              </div>
              <div className="pixel-row">
                <div className="pixel orange"></div>
                <div className="pixel white"></div>
                <div className="pixel orange"></div>
              </div>
              <div className="pixel-row">
                <div className="pixel orange"></div>
                <div className="pixel orange"></div>
                <div className="pixel orange"></div>
              </div>
            </div>
            {/* Corner brackets */}
            <div className="absolute top-2 left-2 text-2xl font-bold text-orange-500">⌜</div>
            <div className="absolute top-2 right-2 text-2xl font-bold text-orange-500">⌝</div>
            <div className="absolute bottom-2 left-2 text-2xl font-bold text-orange-500">⌞</div>
            <div className="absolute bottom-2 right-2 text-2xl font-bold text-orange-500">⌟</div>
          </div>
          
          <div className="border border-orange-300 col-span-3 flex flex-col justify-center items-center p-8 group">
            <h1 className="text-4xl font-bold mb-4 text-orange-500 pixel-font tracking-wider">THANK YOU</h1>
            <p className="text-sm text-orange-700 text-center mb-6 pixel-font leading-tight">
              CREATIVE DESIGN AND DEVELOPMENT IN<br />
              WEB DEVELOPMENT AMD DT MANAGED IT IS
            </p>
            <button className="bg-transparent border-2 border-orange-500 px-8 py-3 text-orange-500 font-bold pixel-font hover:bg-orange-50 transition-all duration-300 hover:scale-105">
              BACK TO MAIN
            </button>
          </div>
          
          {/* Bottom Row - LABS Text */}
          <div className="border border-orange-300 flex items-center justify-center group hover:bg-orange-50 transition-all duration-300">
            <div className="pixel-letter-l"></div>
          </div>
          <div className="border border-orange-300 flex items-center justify-center group hover:bg-orange-50 transition-all duration-300">
            <div className="pixel-letter-a"></div>
          </div>
          <div className="border border-orange-300 flex items-center justify-center group hover:bg-orange-50 transition-all duration-300">
            <div className="pixel-letter-b"></div>
          </div>
          <div className="border border-orange-300 flex items-center justify-center group hover:bg-orange-50 transition-all duration-300">
            <div className="pixel-letter-s"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
