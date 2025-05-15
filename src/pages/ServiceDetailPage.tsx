import React from 'react';
import ServicePage from './ServicePage';

interface ServiceDetails {
  [key: string]: {
    title: string;
    description: string;
    features: string[];
    image: string;
    process: {
      title: string;
      description: string;
    }[];
  };
}

const serviceDetails: ServiceDetails = {
  'web-development': {
    title: 'Web Development',
    description: 'We create custom, responsive websites and web applications tailored to your specific business needs. Our development team combines technical expertise with creative design to deliver high-performance digital experiences that drive results.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      'Custom website and web application development',
      'Responsive design for all devices and screen sizes',
      'E-commerce solutions with secure payment integration',
      'Content management systems (CMS) implementation',
      'Progressive Web Applications (PWAs)',
      'API development and integration',
      'Performance optimization and speed enhancement',
      'SEO-friendly development practices',
      'Web accessibility compliance (WCAG)'
    ],
    process: [
      {
        title: 'Discovery & Planning',
        description: 'We begin by understanding your business objectives, target audience, and project requirements to create a comprehensive development strategy.'
      },
      {
        title: 'UI/UX Design',
        description: 'Our designers create intuitive, engaging interfaces with user-centered design principles to ensure an exceptional user experience.'
      },
      {
        title: 'Development',
        description: 'Our development team builds your solution with clean, efficient code using the latest technologies and best practices.'
      },
      {
        title: 'Testing & QA',
        description: 'Rigorous testing across devices and browsers ensures your website functions perfectly in all environments.'
      },
      {
        title: 'Deployment & Launch',
        description: 'We handle the smooth deployment of your website or application, ensuring a seamless transition to the live environment.'
      },
      {
        title: 'Ongoing Support',
        description: 'Our relationship continues after launch with ongoing maintenance, updates, and support to keep your digital presence performing optimally.'
      }
    ]
  },
  'app-development': {
    title: 'App Development',
    description: 'Our expert team designs and develops mobile applications that deliver exceptional user experiences across all platforms. Whether you need native iOS and Android apps or cross-platform solutions, we create scalable, feature-rich applications tailored to your business objectives.',
    image: 'https://images.pexels.com/photos/4068381/pexels-photo-4068381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      'Native iOS and Android app development',
      'Cross-platform solutions (React Native, Flutter)',
      'User-centered design focused on engagement',
      'Integration with device features (camera, GPS, etc.)',
      'Offline functionality and data synchronization',
      'Push notification implementation',
      'Secure authentication and data protection',
      'Third-party API integrations',
      'App store optimization and submission'
    ],
    process: [
      {
        title: 'Strategy & Planning',
        description: 'We define your app concept, target audience, and core functionality to create a roadmap for development.'
      },
      {
        title: 'UX/UI Design',
        description: 'Our designers create intuitive, engaging interfaces with user-centered design principles to ensure an exceptional user experience.'
      },
      {
        title: 'App Development',
        description: 'Our developers build your app with clean, efficient code optimized for performance and scalability.'
      },
      {
        title: 'Quality Assurance',
        description: 'Comprehensive testing across devices ensures your app functions perfectly under all conditions.'
      },
      {
        title: 'Deployment',
        description: 'We handle the submission process to app stores and ensure your app meets all publishing requirements.'
      },
      {
        title: 'Post-Launch Support',
        description: 'Ongoing maintenance, updates, and support keep your app performing optimally and meeting evolving user needs.'
      }
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    description: 'Our design team creates intuitive, visually stunning interfaces that engage users and drive conversions. We combine aesthetic excellence with deep user research to deliver experiences that are both beautiful and functional, tailored to your brand identity and business goals.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      'User research and persona development',
      'Information architecture and user flows',
      'Wireframing and prototyping',
      'Visual design and brand integration',
      'Interactive design elements and micro-interactions',
      'Usability testing and iteration',
      'Design systems creation',
      'Cross-platform design consistency',
      'Accessibility-focused design'
    ],
    process: [
      {
        title: 'Research & Discovery',
        description: 'We analyze your users, market, and competitors to understand behavior patterns and identify opportunities.'
      },
      {
        title: 'Strategy & Architecture',
        description: 'We develop information architecture and user flows to ensure intuitive navigation and optimal user journeys.'
      },
      {
        title: 'Wireframing',
        description: 'Low-fidelity mockups establish layout and structure before visual design elements are applied.'
      },
      {
        title: 'Visual Design',
        description: 'We create high-fidelity designs that align with your brand and appeal to your target audience.'
      },
      {
        title: 'Prototyping',
        description: 'Interactive prototypes allow you to experience the user journey and provide feedback before development.'
      },
      {
        title: 'Validation & Iteration',
        description: 'User testing provides insights that drive design refinements and ensure optimal usability.'
      }
    ]
  },
  'it-consulting': {
    title: 'IT Consulting',
    description: 'Our strategic IT consulting services help businesses leverage technology to achieve their objectives. We provide expert guidance on digital transformation, technology strategy, system optimization, and more, tailored to your unique challenges and opportunities.',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      'Technology strategy and roadmap development',
      'Digital transformation consulting',
      'IT infrastructure assessment and optimization',
      'Cloud migration and strategy',
      'System integration planning',
      'Cybersecurity assessment and strategy',
      'Software selection and implementation guidance',
      'Process automation consulting',
      'IT cost optimization'
    ],
    process: [
      {
        title: 'Assessment',
        description: 'We evaluate your current technology environment, identifying strengths, weaknesses, and opportunities for improvement.'
      },
      {
        title: 'Strategy Development',
        description: 'We create a customized technology roadmap aligned with your business objectives and budget constraints.'
      },
      {
        title: 'Solution Design',
        description: 'Our experts design tailored solutions to address your specific challenges and capitalize on opportunities.'
      },
      {
        title: 'Implementation Planning',
        description: 'We develop a detailed implementation plan with clear milestones, responsibilities, and risk mitigation strategies.'
      },
      {
        title: 'Execution Support',
        description: 'Our team provides guidance throughout the implementation process, ensuring alignment with strategic objectives.'
      },
      {
        title: 'Optimization & Review',
        description: 'We conduct regular reviews to measure outcomes against objectives and identify ongoing improvement opportunities.'
      }
    ]
  }
};

interface ServiceDetailPageProps {
  service: string;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service }) => {
  const details = serviceDetails[service];
  
  if (!details) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p>The service you're looking for doesn't exist.</p>
      </div>
    );
  }
  
  return <ServicePage {...details} />;
};

export default ServiceDetailPage;