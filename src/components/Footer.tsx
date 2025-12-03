import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="py-12 px-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">
              Policy Renewal AI
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Advanced machine learning platform for predicting insurance policy renewals and reducing customer churn.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-sm">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-sm">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-sm">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Connect With Us</h4>
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 transition-all duration-300 hover:scale-110 shadow-md">
                <Github className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-500 hover:text-white dark:hover:bg-purple-500 transition-all duration-300 hover:scale-110 shadow-md">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 transition-all duration-300 hover:scale-110 shadow-md">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-4">
              Value Momentum Placement Drive
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-700 dark:text-gray-300 text-center md:text-left">
              © 2025 Policy Renewal Prediction System. All rights reserved.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Atharva Kale & Ishwari Kakade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
