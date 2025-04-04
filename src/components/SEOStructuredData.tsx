import React from 'react';
import { useLocation } from 'react-router-dom';

interface SEOStructuredDataProps {
  type?: 'organization' | 'localBusiness' | 'professionalService' | 'webpage';
  title?: string;
  description?: string;
  imageUrl?: string;
}

const SEOStructuredData: React.FC<SEOStructuredDataProps> = ({
  type = 'professionalService',
  title = 'P4 Companies and Services - Business Consulting',
  description = 'Premium business consulting services for strategy, finance, and management.',
  imageUrl = '/og-image.png'
}) => {
  const location = useLocation();
  const currentUrl = `https://p4consulting.com${location.pathname}`;
  
  // Base organization data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "P4 Companies and Services",
    "url": "https://p4consulting.com",
    "logo": "https://p4consulting.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-890",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Avenue",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/p4consulting",
      "https://twitter.com/p4consulting"
    ]
  };

  // Professional service data (extends organization)
  const professionalServiceData = {
    ...organizationData,
    "@type": "ProfessionalService",
    "description": "P4 Companies and Services is a premier business consulting firm dedicated to helping organizations navigate challenges, seize opportunities, and achieve sustainable growth.",
    "priceRange": "$$$$",
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Business Consulting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Strategy Consulting",
            "description": "Strategic planning and roadmap development for sustainable growth."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Financial Consulting",
            "description": "Financial analysis and performance improvement services."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Management Consulting",
            "description": "Organizational design and transformation services."
          }
        }
      ]
    }
  };

  // Updated webpage data to include all required organization properties
  const webpageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": currentUrl,
    "name": title,
    "description": description,
    "isPartOf": {
      "@type": "WebSite",
      "name": "P4 Companies and Services",
      "url": "https://p4consulting.com"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": `https://p4consulting.com${imageUrl}`
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".speakable"]
    },
    "logo": "https://p4consulting.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-890",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Avenue",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/p4consulting",
      "https://twitter.com/p4consulting"
    ]
  };

  let jsonLdData = organizationData;

  switch (type) {
    case 'localBusiness':
      jsonLdData = {...organizationData, "@type": "LocalBusiness"};
      break;
    case 'professionalService':
      jsonLdData = professionalServiceData;
      break;
    case 'webpage':
      jsonLdData = webpageData;
      break;
    default:
      jsonLdData = organizationData;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
};

export default SEOStructuredData;
