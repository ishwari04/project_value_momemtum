import { Activity, Users, TrendingUp, MessageCircle, Eye, Database } from 'lucide-react';

function Features() {
  const features = [
    {
      icon: Activity,
      title: 'KPI Dashboard',
      description: 'Real-time monitoring of renewal rates, churn metrics, and customer lifetime value with interactive visualizations',
      color: 'from-teal-500 to-cyan-500',
      delay: '0'
    },
    {
      icon: Users,
      title: 'Single & Bulk Prediction',
      description: 'Predict renewal probability for individual policies or process thousands of customers simultaneously',
      color: 'from-purple-500 to-pink-500',
      delay: '200'
    },
    {
      icon: TrendingUp,
      title: 'Feature Importance Analysis',
      description: 'Understand which factors drive renewal decisions with SHAP values and model explainability tools',
      color: 'from-pink-500 to-rose-500',
      delay: '400'
    },
    {
      icon: Eye,
      title: 'Data Insights Visualization',
      description: 'Comprehensive charts and graphs revealing patterns in customer behavior and policy performance',
      color: 'from-orange-500 to-amber-500',
      delay: '600'
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbot Support',
      description: 'Natural language interface powered by Gemini for conversational risk analysis and strategic recommendations',
      color: 'from-blue-500 to-indigo-500',
      delay: '800'
    },
    {
      icon: Database,
      title: 'Automated Preprocessing',
      description: 'Intelligent data pipeline handling missing values, encoding, and feature engineering automatically',
      color: 'from-green-500 to-emerald-500',
      delay: '1000'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Powerful Features
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to transform policy renewal predictions into actionable business intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`fade-in-section animation-delay-${feature.delay} group`}
              >
                <div className="relative h-full bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>

                  <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white relative">
                    {feature.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed relative">
                    {feature.description}
                  </p>

                  <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
