import React, { useState } from 'react';
import { 
  FaPhone, 
  FaBuilding, 
  FaGlobe, 
  FaQuestion, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaPaperPlane,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

// Import data
import { 
  emergencyContacts, 
  embassyOffices, 
  frequentlyAskedQuestions,
  socialMediaLinks,
  tourismOffices,
  lesothoEmbassiesAbroad
} from '../data/contactData';

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [activeTab, setActiveTab] = useState('emergency');

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd handle form submission here
    alert('Thank you for your inquiry! We will respond within 24-48 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-200 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        {/* Responsive Hero Section */}
        <div 
            className="h-64 sm:h-80 md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-lg overflow-hidden mb-8"
            style={{backgroundImage: "url('/images/community/contact-hero.jpg')"}}
        >
            <div className="text-center bg-black bg-opacity-50 p-4 sm:p-6 md:p-10 rounded-xl w-full max-w-md mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">Contact & Community Engagement</h1>
              <p className="text-base sm:text-lg md:text-xl">Connect with Lesotho's Vibrant Communities and Local Initiatives</p>
            </div>
        </div>

        {/* Responsive Contact Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="min-w-max flex flex-nowrap border-b border-gray-300">
            {[
              { key: 'emergency', label: 'Emergency Contacts', icon: <FaPhone /> },
              { key: 'embassy', label: 'Embassy & Visa Offices', icon: <FaBuilding /> },
              { key: 'faq', label: 'Frequently Asked Questions', icon: <FaQuestion /> },
              { key: 'social', label: 'Connect With Us', icon: <FaGlobe /> }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center px-3 sm:px-4 py-2 sm:py-3 mr-1 text-sm sm:text-base transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'my-green-color-style text-white rounded-t-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 rounded-t-lg'
                }`}
              >
                <span className="mr-1 sm:mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-12">
          {activeTab === 'emergency' && (
            <>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 my-text-color-style">Emergency Contacts</h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="border rounded-lg p-3 sm:p-4 hover:border-blue-300 transition-colors">
                    <h3 className="text-base sm:text-lg font-semibold my-text-color-style">{contact.name}</h3>
                    <p className="text-lg sm:text-xl font-bold my-secondary-text-color-style my-2">{contact.number}</p>
                    <p className="text-sm sm:text-base text-gray-600">Hours: {contact.hours}</p>
                    <p className="mt-2 text-xs sm:text-sm text-gray-700">{contact.description}</p>
                  </div>
                ))}
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4 my-text-color-style">Tourism Offices</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {tourismOffices.map((office, index) => (
                  <div key={index} className="border rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold my-text-color-style text-sm sm:text-base">{office.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 my-1">{office.address}</p>
                    <p className="text-xs sm:text-sm font-medium">{office.phone}</p>
                    <p className="text-xs sm:text-sm my-secondary-text-color-style">{office.email}</p>
                    <p className="text-xs sm:text-sm text-gray-700 mt-2">Hours: {office.hours}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'embassy' && (
            <>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 my-text-color-style">Embassies & Consulates in Lesotho</h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {embassyOffices.map((embassy, index) => (
                  <div key={index} className="border rounded-lg p-3 sm:p-4 hover:border-blue-300 transition-colors">
                    <h3 className="text-base sm:text-lg font-semibold my-text-color-style">{embassy.country} Embassy</h3>
                    <p className="text-xs sm:text-sm text-gray-600 my-2">{embassy.address}</p>
                    <div className="mt-2 sm:mt-3 space-y-1 text-xs sm:text-sm">
                      <p><strong>Phone:</strong> {embassy.phone}</p>
                      <p><strong>Email:</strong> {embassy.email}</p>
                      <p><strong>Website:</strong> {embassy.website}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4 my-text-color-style">Lesotho Embassies Abroad</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {lesothoEmbassiesAbroad.map((embassy, index) => (
                  <div key={index} className="border rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold my-text-color-style text-sm sm:text-base">Lesotho Embassy in {embassy.country}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 my-1">{embassy.address}</p>
                    <p className="text-xs sm:text-sm font-medium">{embassy.phone}</p>
                    <p className="text-xs sm:text-sm my-secondary-text-color-style">{embassy.email}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'faq' && (
            <>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 my-text-color-style">Frequently Asked Questions</h2>
              <div className="space-y-3 sm:space-y-4">
                {frequentlyAskedQuestions.map((faq, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <button 
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 text-sm sm:text-base"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="font-medium my-text-color-style pr-2">{faq.question}</span>
                      {openFAQ === index ? <FaChevronUp className="flex-shrink-0" /> : <FaChevronDown className="flex-shrink-0" />}
                    </button>
                    
                    <div 
                      className={`px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t text-sm sm:text-base ${
                        openFAQ === index ? 'block' : 'hidden'
                      }`}
                    >
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'social' && (
            <>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 my-text-color-style">Connect With Us</h2>
              
              <div className="grid gap-6 sm:gap-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 my-text-color-style">Social Media</h3>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {socialMediaLinks.map((social, index) => (
                      <a 
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                      >
                        {social.platform === 'Facebook' && <FaFacebook className="my-secondary-text-color-style text-lg sm:text-xl mr-3" />}
                        {social.platform === 'Twitter' && <FaTwitter className="my-secondary-text-color-style text-lg sm:text-xl mr-3" />}
                        {social.platform === 'Instagram' && <FaInstagram className="my-secondary-text-color-style text-lg sm:text-xl mr-3" />}
                        {social.platform === 'YouTube' && <FaYoutube className="my-secondary-text-color-style text-lg sm:text-xl mr-3" />}
                        <div>
                          <p className="font-medium text-sm sm:text-base">{social.platform}</p>
                          <p className="text-xs sm:text-sm text-gray-600">{social.handle}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 my-text-color-style">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-colors text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-colors text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-colors text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-colors text-sm"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="px-4 sm:px-6 py-2 sm:py-3 my-green-color-style text-white rounded-lg hover:bg-green-700 transition-colors flex items-center text-sm sm:text-base"
                    >
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              
              <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 my-text-color-style flex items-center">
                  <FaEnvelope className="mr-2" />
                  Newsletter Subscription
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  Subscribe to our newsletter to receive updates on travel tips, new destinations, and special offers in Lesotho.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full sm:flex-1 px-3 sm:px-4 py-2 border rounded-lg sm:rounded-r-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-colors text-sm"
                  />
                  <button
                    className="my-green-color-style text-white px-4 py-2 rounded-lg sm:rounded-l-none hover:bg-blue-700 transition-colors text-sm sm:text-base"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;