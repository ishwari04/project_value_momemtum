import { ArrowRight, Layout, Server, Settings, Brain } from 'lucide-react';

function Architecture() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            System Architecture
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Modern, scalable architecture designed for performance and reliability
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
          <div className="fade-in-section w-full md:w-48 group">
            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-teal-500">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-teal-500/30">
                <Layout className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-center font-bold text-gray-900 dark:text-white mb-2">Streamlit UI</h3>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">Interactive Dashboard</p>
            </div>
          </div>

          <div className="fade-in-section animation-delay-200 hidden md:block">
            <ArrowRight className="w-8 h-8 text-teal-500 dark:text-teal-400 animate-pulse" />
          </div>

          <div className="fade-in-section animation-delay-200 w-full md:w-48 group">
            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-purple-500">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-purple-500/30">
                <Server className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-center font-bold text-gray-900 dark:text-white mb-2">FastAPI</h3>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">Backend Service</p>
            </div>
          </div>

          <div className="fade-in-section animation-delay-400 hidden md:block">
            <ArrowRight className="w-8 h-8 text-purple-500 dark:text-purple-400 animate-pulse" />
          </div>

          <div className="fade-in-section animation-delay-400 w-full md:w-48 group">
            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-pink-500">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-pink-500/30">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-center font-bold text-gray-900 dark:text-white mb-2">Preprocessing</h3>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">Data Pipeline</p>
            </div>
          </div>

          <div className="fade-in-section animation-delay-600 hidden md:block">
            <ArrowRight className="w-8 h-8 text-pink-500 dark:text-pink-400 animate-pulse" />
          </div>

          <div className="fade-in-section animation-delay-600 w-full md:w-48 group">
            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-orange-500">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-orange-500/30">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-center font-bold text-gray-900 dark:text-white mb-2">LightGBM Model</h3>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">ML Predictions</p>
            </div>
          </div>
        </div>

        <div className="mt-16 fade-in-section animation-delay-800">
          <div className="bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="font-semibold text-teal-600 dark:text-teal-400 mb-1">Frontend</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">Streamlit</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="font-semibold text-purple-600 dark:text-purple-400 mb-1">Backend</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">FastAPI</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="font-semibold text-pink-600 dark:text-pink-400 mb-1">ML Model</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">LightGBM</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="font-semibold text-orange-600 dark:text-orange-400 mb-1">AI</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">Gemini API</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Architecture;
