import { Brain, BarChart3, Zap, MessageSquare } from 'lucide-react';

function Solution() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-teal-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our AI-Powered Solution
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive machine learning platform that transforms customer data into actionable renewal insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="fade-in-section group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition-all duration-500"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-teal-500">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">ML Prediction Model</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Advanced LightGBM model trained on historical data to predict renewal probability with high accuracy
              </p>
            </div>
          </div>

          <div className="fade-in-section animation-delay-200 group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition-all duration-500"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-purple-500">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Analytics Dashboard</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Interactive Streamlit interface with real-time KPIs, visualizations, and comprehensive data insights
              </p>
            </div>
          </div>

          <div className="fade-in-section animation-delay-400 group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition-all duration-500"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-pink-500">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">FastAPI Interface</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                High-performance API layer for seamless model integration and instant prediction responses
              </p>
            </div>
          </div>

          <div className="fade-in-section animation-delay-600 group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition-all duration-500"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-indigo-500">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">AI Chatbot</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Gemini-powered conversational AI for intuitive risk assessment and renewal strategy guidance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
