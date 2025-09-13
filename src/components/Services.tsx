import { CheckCircle, Code, Globe } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  pricing: string;
  bestFor: string;
  technologies: string[];
}

const services: Service[] = [
  {
    id: 'custom-websites',
    title: 'Custom Website Development',
    description: 'Fully customized websites built from scratch using modern technologies, tailored to your specific needs and brand.',
    icon: Code,
    features: [
      'Fully responsive design',
      'Custom functionality and features',
      'SEO optimization',
      'Fast loading performance',
      'Mobile-first approach',
      'Ongoing maintenance and support'
    ],
    pricing: 'Starting at £2,000',
    bestFor: 'Businesses needing unique functionality and complete control',
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'cms-websites',
    title: 'CMS-Based Solutions',
    description: 'Professional websites built on popular CMS platforms like Squarespace, WordPress, and Webflow for faster delivery and easier management.',
    icon: Globe,
    features: [
      'Quick setup and deployment',
      'User-friendly content management',
      'Professional templates and customization',
      'Built-in SEO tools',
      'E-commerce integration',
      'Training and documentation'
    ],
    pricing: 'Starting at £650',
    bestFor: 'Small businesses and individuals wanting quick, professional results',
    technologies: ['Squarespace', 'WordPress', 'Webflow', 'Shopify', 'Wix']
  }
];

export const Services = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            Web Development Services
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Whether you need a custom-built website with unique functionality or a quick, professional site on a popular platform, 
            I can help bring your vision to life with modern, responsive designs. I specialise in building educational and learning-focused applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-8 border-b border-neutral-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-yellow-600 font-semibold">{service.pricing}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>

              <div className="p-8">
                <h4 className="font-semibold text-gray-900 mb-4">What&apos;s Included:</h4>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                  <p className="text-gray-600 text-sm">{service.bestFor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and find the best solution for your needs. 
            I offer free consultations to help you choose the right approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors duration-200"
            >
              Get Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-yellow-600 hover:text-yellow-600 transition-colors duration-200"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
