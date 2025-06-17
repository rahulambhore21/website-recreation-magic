
const Index = () => {
  return (
    <div className="min-h-screen bg-gray-300 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Grid Container */}
        <div className="grid grid-cols-4 gap-0 border-4 border-blue-600 bg-gray-200">
          {/* Top Row */}
          <div className="border-2 border-gray-400 h-32"></div>
          <div className="border-2 border-gray-400 h-32"></div>
          <div className="border-2 border-gray-400 h-32"></div>
          <div className="border-2 border-gray-400 h-32 flex items-start justify-end p-2">
            <button className="bg-orange-500 text-white px-4 py-1 text-sm font-bold border-2 border-orange-600 hover:bg-orange-600 transition-colors">
              GET IT
            </button>
          </div>
          
          {/* Second Row - Character and Thank You */}
          <div className="border-2 border-gray-400 h-48 flex items-center justify-center relative">
            {/* Pixel Art Character */}
            <div className="pixel-character">
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
                <div className="pixel gray-200"></div>
                <div className="pixel orange"></div>
              </div>
              <div className="pixel-row">
                <div className="pixel orange"></div>
                <div className="pixel orange"></div>
                <div className="pixel orange"></div>
              </div>
            </div>
            {/* Corner brackets */}
            <div className="absolute top-2 left-2 text-2xl font-bold text-gray-600">⌜</div>
            <div className="absolute top-2 right-2 text-2xl font-bold text-gray-600">⌝</div>
            <div className="absolute bottom-2 left-2 text-2xl font-bold text-gray-600">⌞</div>
          </div>
          
          <div className="border-2 border-gray-400 h-48 col-span-3 flex flex-col justify-center items-center p-8">
            <h1 className="text-4xl font-bold mb-4 text-black pixel-font">THANK YOU</h1>
            <p className="text-sm text-gray-700 text-center mb-6 pixel-font leading-tight">
              CREATIVE DESIGN AND DEVELOPMENT IN<br />
              WEB DEVELOPMENT AMD DT MANAGED IT IS
            </p>
            <button className="bg-gray-300 border-2 border-gray-500 px-6 py-2 text-black font-bold pixel-font hover:bg-gray-400 transition-colors">
              BACK TO MAIN
            </button>
          </div>
          
          {/* Bottom Row - LABS Text */}
          <div className="border-2 border-gray-400 h-64 flex items-center justify-center">
            <div className="pixel-letter-l"></div>
          </div>
          <div className="border-2 border-gray-400 h-64 flex items-center justify-center">
            <div className="pixel-letter-a"></div>
          </div>
          <div className="border-2 border-gray-400 h-64 flex items-center justify-center">
            <div className="pixel-letter-b"></div>
          </div>
          <div className="border-2 border-gray-400 h-64 flex items-center justify-center">
            <div className="pixel-letter-s"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
