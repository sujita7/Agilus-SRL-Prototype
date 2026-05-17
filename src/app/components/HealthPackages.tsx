import { useState } from 'react';
import { Check, ArrowRight, Clock, FlaskConical, Home } from 'lucide-react';

export function HealthPackages() {
  const [activeTab, setActiveTab] = useState('Full Body');

  const tabs = ['Full Body', 'Diabetes', 'Thyroid', "Women's Health", 'Senior Care'];

  const packages = {
    'Full Body': [
      {
        name: 'Basic Health Checkup',
        description: 'Essential screening for overall health',
        tests: 62,
        fasting: 'Required',
        reports: '24 hours',
        price: 999,
        originalPrice: 1999,
        popular: false
      },
      {
        name: 'Advanced Full Body Checkup',
        description: 'Comprehensive screening with detailed analysis',
        tests: 98,
        fasting: 'Required',
        reports: '24 hours',
        price: 1999,
        originalPrice: 3999,
        popular: true
      },
      {
        name: 'Premium Health Checkup',
        description: 'Complete health assessment with specialist consultation',
        tests: 125,
        fasting: 'Required',
        reports: '48 hours',
        price: 3999,
        originalPrice: 6999,
        popular: false
      }
    ],
    'Diabetes': [
      {
        name: 'Diabetes Screening Package',
        description: 'Early detection and monitoring',
        tests: 15,
        fasting: 'Required',
        reports: '6 hours',
        price: 599,
        originalPrice: 1199,
        popular: true
      },
      {
        name: 'Advanced Diabetes Profile',
        description: 'Comprehensive diabetes management panel',
        tests: 28,
        fasting: 'Required',
        reports: '12 hours',
        price: 1299,
        originalPrice: 2499,
        popular: false
      }
    ],
    'Thyroid': [
      {
        name: 'Thyroid Profile Basic',
        description: 'Essential thyroid function tests',
        tests: 3,
        fasting: 'Not required',
        reports: '12 hours',
        price: 399,
        originalPrice: 799,
        popular: true
      },
      {
        name: 'Thyroid Profile Advanced',
        description: 'Complete thyroid assessment',
        tests: 8,
        fasting: 'Not required',
        reports: '24 hours',
        price: 899,
        originalPrice: 1799,
        popular: false
      }
    ],
    "Women's Health": [
      {
        name: "Women's Wellness Basic",
        description: 'Essential health screening for women',
        tests: 52,
        fasting: 'Required',
        reports: '24 hours',
        price: 1499,
        originalPrice: 2999,
        popular: true
      },
      {
        name: "Women's Wellness Advanced",
        description: 'Comprehensive health checkup for women',
        tests: 85,
        fasting: 'Required',
        reports: '48 hours',
        price: 2999,
        originalPrice: 5999,
        popular: false
      }
    ],
    'Senior Care': [
      {
        name: 'Senior Citizen Basic',
        description: 'Essential screening for seniors',
        tests: 72,
        fasting: 'Required',
        reports: '24 hours',
        price: 1799,
        originalPrice: 3599,
        popular: true
      },
      {
        name: 'Senior Citizen Comprehensive',
        description: 'Complete health assessment for seniors',
        tests: 110,
        fasting: 'Required',
        reports: '48 hours',
        price: 3499,
        originalPrice: 6999,
        popular: false
      }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Most-booked health packages
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive screening at unbeatable prices
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Package cards */}
        <div className="grid grid-cols-3 gap-6">
          {packages[activeTab].map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 hover:shadow-xl transition-all ${
                pkg.popular ? 'border-blue-600' : 'border-gray-100'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {pkg.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <FlaskConical className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{pkg.tests} Tests included</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Reports in {pkg.reports}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                    <Home className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Home collection available</span>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-gray-900">₹{pkg.price}</span>
                  <span className="text-lg text-gray-400 line-through">₹{pkg.originalPrice}</span>
                  <span className="ml-auto px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded">
                    {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}% OFF
                  </span>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2">
                  <span className="font-medium">Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
