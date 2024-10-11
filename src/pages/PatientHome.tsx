import React from 'react';
import { Search, Calendar, MessageSquare, Activity } from 'lucide-react';

const PatientHome = () => {
  return (
    <div className="space-y-8 p-4">
      <section className="text-center bg-gradient-to-r from-green-500 to-blue-600 text-white py-16 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to CareAble</h1>
        <p className="text-xl">Your one-stop platform for managing your healthcare needs</p>
      </section>
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          icon={<Search className="text-green-500" size={48} />}
          title="Find a Doctor"
          description="Search for healthcare providers based on specialty, location, and availability."
          linkTo="/search"
          linkText="Search Now"
        />
        <FeatureCard
          icon={<Calendar className="text-blue-500" size={48} />}
          title="Book Appointments"
          description="Schedule your next visit with just a few clicks. Easy and convenient."
          linkTo="/appointments"
          linkText="View Calendar"
        />
        <FeatureCard
          icon={<MessageSquare className="text-purple-500" size={48} />}
          title="Telemedicine"
          description="Connect with healthcare providers from the comfort of your home."
          linkTo="/telemedicine"
          linkText="Start Consultation"
        />
        <FeatureCard
          icon={<Activity className="text-red-500" size={48} />}
          title="Health Tracking"
          description="Monitor your health metrics and get personalized insights."
          linkTo="/health-metrics"
          linkText="Track Your Health"
        />
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, linkTo, linkText }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="mb-4 text-gray-600">{description}</p>
    <a
      href={linkTo}
      className="inline-block text-green-600 font-medium hover:underline"
    >
      {linkText}
    </a>
  </div>
);

export default PatientHome;