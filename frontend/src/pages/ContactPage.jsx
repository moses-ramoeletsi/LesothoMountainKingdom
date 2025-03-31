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
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-blue-200">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">
        Contact & Community Engagement
      </h1>

      {/* Contact Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap border-b border-gray-300">
          {[
            { key: 'emergency', label: 'Emergency Contacts', icon: <FaPhone /> },
            { key: 'embassy', label: 'Embassy & Visa Offices', icon: <FaBuilding /> },
            { key: 'faq', label: 'Frequently Asked Questions', icon: <FaQuestion /> },
            { key: 'social', label: 'Connect With Us', icon: <FaGlobe /> }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center px-4 py-3 mr-1 transition-colors ${
                activeTab === tab.key
                  ? 'bg-blue-600 text-white rounded-t-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 rounded-t-lg'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        {activeTab === 'emergency' && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">Emergency Contacts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="border rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <h3 className="text-lg font-semibold text-blue-800">{contact.name}</h3>
                  <p className="text-xl font-bold text-red-600 my-2">{contact.number}</p>
                  <p className="text-gray-600">Hours: {contact.hours}</p>
                  <p className="mt-2 text-sm text-gray-700">{contact.description}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-4 text-blue-900">Tourism Offices</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {tourismOffices.map((office, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-blue-800">{office.name}</h4>
                  <p className="text-sm text-gray-600 my-1">{office.address}</p>
                  <p className="text-sm font-medium">{office.phone}</p>
                  <p className="text-sm text-blue-600">{office.email}</p>
                  <p className="text-sm text-gray-700 mt-2">Hours: {office.hours}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'embassy' && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">Embassies & Consulates in Lesotho</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {embassyOffices.map((embassy, index) => (
                <div key={index} className="border rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <h3 className="text-lg font-semibold text-blue-800">{embassy.country} Embassy</h3>
                  <p className="text-sm text-gray-600 my-2">{embassy.address}</p>
                  <div className="mt-3 space-y-1 text-sm">
                    <p><strong>Phone:</strong> {embassy.phone}</p>
                    <p><strong>Email:</strong> {embassy.email}</p>
                    <p><strong>Website:</strong> {embassy.website}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-4 text-blue-900">Lesotho Embassies Abroad</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {lesothoEmbassiesAbroad.map((embassy, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-blue-800">Lesotho Embassy in {embassy.country}</h4>
                  <p className="text-sm text-gray-600 my-1">{embassy.address}</p>
                  <p className="text-sm font-medium">{embassy.phone}</p>
                  <p className="text-sm text-blue-600">{embassy.email}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'faq' && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {frequentlyAskedQuestions.map((faq, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-blue-800">{faq.question}</span>
                    {openFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  
                  <div 
                    className={`px-6 py-4 bg-gray-50 border-t ${
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
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">Connect With Us</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Social Media</h3>
                <div className="space-y-4">
                  {socialMediaLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                    >
                      {social.platform === 'Facebook' && <FaFacebook className="text-blue-600 text-xl mr-3" />}
                      {social.platform === 'Twitter' && <FaTwitter className="text-blue-400 text-xl mr-3" />}
                      {social.platform === 'Instagram' && <FaInstagram className="text-pink-500 text-xl mr-3" />}
                      {social.platform === 'YouTube' && <FaYoutube className="text-red-600 text-xl mr-3" />}
                      <div>
                        <p className="font-medium">{social.platform}</p>
                        <p className="text-sm text-gray-600">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-colors"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
                <FaEnvelope className="mr-2" />
                Newsletter Subscription
              </h3>
              <p className="text-gray-700 mb-4">
                Subscribe to our newsletter to receive updates on travel tips, new destinations, and special offers in Lesotho.
              </p>
              <div className="flex flex-wrap">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 min-w-[200px] px-4 py-2 border rounded-l-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-colors"
                />
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;