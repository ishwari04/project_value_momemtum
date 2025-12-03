import { Github, Linkedin, Mail, Award } from 'lucide-react';

function Team() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-teal-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Meet the Team
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate innovators building the future of insurance analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="fade-in-section group">
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-500 to-cyan-500 opacity-10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative p-8">
                <div className="w-32 h-32 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl shadow-teal-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-16 h-16 text-white" />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Atharva Kale</h3>
                  <div className="inline-block px-4 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-semibold rounded-full mb-4 shadow-lg">
                    Project Leader
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Led model training, backend integration, and system architecture. Specialized in machine learning pipeline optimization and FastAPI development.
                  </p>

                  <div className="flex justify-center gap-4">
                    <button className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-md">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-md">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-md">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-teal-500 to-cyan-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

          <div className="fade-in-section animation-delay-200 group">
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 opacity-10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative p-8">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-16 h-16 text-white" />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Ishwari Kakade</h3>
                  <div className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full mb-4 shadow-lg">
                    ML & Dashboard Developer
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Developed machine learning models and interactive dashboard interface. Expert in data visualization, feature engineering, and Streamlit development.
                  </p>

                  <div className="flex justify-center gap-4">
                    <button className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-md">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-md">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-md">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
