import { Target, Shield, TrendingUp } from 'lucide-react';

function UseCase() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Real-World Impact
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming insurance operations with data-driven decision making
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="fade-in-section group">
            <div className="relative h-full bg-gradient-to-br from-teal-500 to-cyan-500 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  Early Risk Identification
                </h3>

                <p className="text-white/90 leading-relaxed">
                  Helps insurance managers identify at-risk customers weeks in advance, enabling proactive retention campaigns and personalized engagement strategies.
                </p>
              </div>
            </div>
          </div>

          <div className="fade-in-section animation-delay-200 group">
            <div className="relative h-full bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  Data-Driven Strategy
                </h3>

                <p className="text-white/90 leading-relaxed">
                  Supports strategic decision-making with actionable insights, enabling teams to allocate resources effectively and optimize renewal campaigns based on predicted outcomes.
                </p>
              </div>
            </div>
          </div>

          <div className="fade-in-section animation-delay-400 group">
            <div className="relative h-full bg-gradient-to-br from-orange-500 to-red-500 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  Increased Retention
                </h3>

                <p className="text-white/90 leading-relaxed">
                  Reduces customer churn by up to 40% through targeted interventions, increasing customer lifetime value and building long-term loyalty with evidence-based retention tactics.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 fade-in-section animation-delay-600">
          <div className="bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 p-1 rounded-3xl shadow-2xl">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
                  Measurable Business Results
                </h3>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">40%</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">Reduction in Churn Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">$2M+</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">Annual Revenue Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">85%</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">Campaign Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">3x</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">ROI on Retention Efforts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UseCase;
