import { AlertCircle, TrendingDown, DollarSign } from 'lucide-react';

function ProblemStatement() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            The Challenge
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="fade-in-section bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/30">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Unknown Renewal Intent</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Insurance companies cannot predict which customers will renew their policies and which will churn, leading to reactive strategies.
            </p>
          </div>

          <div className="fade-in-section animation-delay-200 bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
              <TrendingDown className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">High Customer Churn</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Manual decision processes result in missed opportunities to retain valuable customers and reduce overall satisfaction.
            </p>
          </div>

          <div className="fade-in-section animation-delay-400 bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/30">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Revenue Loss</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Inefficient retention strategies cause significant revenue leakage and increase customer acquisition costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemStatement;
