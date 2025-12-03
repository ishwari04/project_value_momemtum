import { Sun, Moon, Play, FileDown } from 'lucide-react';

interface HeroProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

function Hero({ theme, toggleTheme }: HeroProps) {
  const openDashboard = () => {
    window.open(
      "https://renewalpredictionproject-xgthrqyvgjbgcgq4fbyfgx.streamlit.app/",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-400 dark:bg-teal-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-400 dark:bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 dark:bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" />
        ) : (
          <Moon className="w-5 h-5 text-purple-600 group-hover:-rotate-12 transition-transform duration-500" />
        )}
      </button>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 text-white text-sm font-semibold shadow-lg animate-fade-in">
          Value Momentum Placement Drive
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-500 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-fade-in-up leading-tight">
          AI-Powered Policy Renewal Prediction Dashboard
        </h1>

        <p className="text-xl md:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 font-light">
          Predict customer renewal behavior & reduce churn using Machine Learning and Analytics
        </p>

        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animation-delay-400">
          {/* 🔹 FIXED: added onClick={openDashboard} */}
          <button
            onClick={openDashboard}
            className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Open Dashboard
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group relative px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 border-2 border-purple-500">
            <span className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              View Demo
            </span>
          </button>

          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-2">
              <FileDown className="w-5 h-5" />
              Download Brief
            </span>
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in animation-delay-600">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">95%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Prediction Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">40%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Churn Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">Real-time</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Predictions</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
