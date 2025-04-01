import React, { useState, useRef, useEffect } from 'react';
import { 
  FaImage, 
  FaVideo, 
  FaVrCardboard, 
  FaCloudUploadAlt,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaExpand,
  FaShare,
  FaDownload,
  FaHeart,
  FaTimes,
  FaSearch,
  FaPaw,
  FaCalendarAlt,
  FaDrumstickBite
} from 'react-icons/fa';

// Import the gallery data and helper functions
import galleryData, { 
  getLocationsList, 
  getCategoriesList,
  formatCategoryTitle,
  filterGalleryItems,
  searchGallery
} from '../data/galleryData';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('landscapes');
  const [currentSlide, setCurrentSlide] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadForm, setUploadForm] = useState({ title: '', description: '', category: 'landscapes', file: null });
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [filterType, setFilterType] = useState('location');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const fileInputRef = useRef(null);
  const searchInputRef = useRef(null);

  // Get all available category tabs
  const categoryTabs = [
    { key: 'landscapes', label: 'Landscapes', icon: <FaImage /> },
    { key: 'cultural', label: 'Cultural Heritage', icon: <FaImage /> },
    { key: 'people', label: 'People of Lesotho', icon: <FaImage /> },
    { key: 'wildlife', label: 'Wildlife', icon: <FaPaw /> },
    { key: 'seasons', label: 'Seasonal Highlights', icon: <FaCalendarAlt /> },
    { key: 'festivals', label: 'Festivals', icon: <FaDrumstickBite /> },
    { key: 'virtualTours', label: 'Virtual Tours', icon: <FaVrCardboard /> },
    { key: 'videos', label: 'Videos & Documentaries', icon: <FaVideo /> },
    { key: 'userUploads', label: 'Visitor Experiences', icon: <FaCloudUploadAlt /> },
  ];

  // Effect for handling search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setIsSearchActive(false);
      setSearchResults([]);
      return;
    }

    const timeoutId = setTimeout(() => {
      setLoading(true);
      // Simulate a delay to show loading state
      setTimeout(() => {
        const results = searchGallery(searchQuery);
        setSearchResults(results);
        setIsSearchActive(true);
        setLoading(false);
      }, 500);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // Close mobile menu when a category is selected
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activeTab]);

  const openModal = (item) => {
    setCurrentSlide(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const openUploadModal = () => {
    setIsUploadModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeUploadModal = () => {
    setIsUploadModalOpen(false);
    document.body.style.overflow = 'auto';
    setUploadForm({ title: '', description: '', category: 'landscapes', file: null });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setUploadForm({
        ...uploadForm,
        file: e.target.files[0]
      });
    }
  };

  const handleUploadFormChange = (e) => {
    const { name, value } = e.target;
    setUploadForm({
      ...uploadForm,
      [name]: value
    });
  };

  const handleSubmitUpload = (e) => {
    e.preventDefault();
    // In a real app, you would handle the file upload to a server here
    alert('Thank you for sharing your Lesotho experience! Your photo will be reviewed before being published.');
    closeUploadModal();
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearchActive(false);
    setSearchResults([]);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderGalleryItems = () => {
    // If search is active, show search results
    if (isSearchActive) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {searchResults.length > 0 ? (
            searchResults.map((item) => (
              <div 
                key={item.id} 
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 my-green-color-style text-white text-xs px-2 py-1 rounded">
                    {item.category}
                  </div>
                </div>
                <div className="p-3 sm:p-4 bg-white">
                  <h3 className="text-base sm:text-lg font-semibold my-text-color-style line-clamp-1">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1 line-clamp-2">{item.description}</p>
                  <p className="text-gray-500 text-xs mt-2">Location: {item.location}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 py-8 sm:py-16 text-center">
              <p className="text-gray-500 text-base sm:text-lg">No results found for "{searchQuery}"</p>
              <p className="text-gray-400 mt-2 text-sm">Try different keywords or browse the gallery categories</p>
            </div>
          )}
        </div>
      );
    }
    
    // Regular gallery view based on active tab
    let items = filterGalleryItems(activeTab, filterType, filter);
    
    if (activeTab === 'landscapes' || activeTab === 'cultural' || activeTab === 'people' || 
        activeTab === 'wildlife' || activeTab === 'seasons' || activeTab === 'festivals') {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {item.conservation && (
                  <div className={`absolute top-2 right-2 text-white text-xs px-2 py-1 rounded ${
                    item.conservation === 'Endangered' ? 'bg-red-600' : 
                    item.conservation === 'Vulnerable' ? 'bg-orange-600' : 'bg-green-600'
                  }`}>
                    {item.conservation}
                  </div>
                )}
                {item.season && (
                  <div className="absolute top-2 right-2 my-green-color-style text-white text-xs px-2 py-1 rounded">
                    {item.season}
                  </div>
                )}
              </div>
              <div className="p-3 sm:p-4 bg-white">
                <h3 className="text-base sm:text-lg font-semibold my-text-color-style line-clamp-1">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 line-clamp-2">{item.description}</p>
                <p className="text-gray-500 text-xs mt-2">Location: {item.location}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }
    
    if (activeTab === 'virtualTours') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {items.map((tour) => (
            <div key={tour.id} className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <div className="relative h-56 sm:h-64 md:h-80">
                <img 
                  src={tour.src} 
                  alt={tour.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 sm:px-4 rounded-full flex items-center text-sm sm:text-base"
                    onClick={() => openModal(tour)}
                  >
                    <FaVrCardboard className="mr-1 sm:mr-2" />
                    Explore 360° View
                  </button>
                </div>
              </div>
              <div className="p-3 sm:p-5 bg-white">
                <h3 className="text-base sm:text-xl font-semibold my-text-color-style">{tour.title}</h3>
                <p className="text-gray-600 text-sm mt-1 sm:mt-2 line-clamp-3">{tour.description}</p>
                <div className="mt-3 sm:mt-4 flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-gray-500">{tour.location}</span>
                  <button 
                    className="text-blue-600 hover:my-text-color-style flex items-center text-xs sm:text-sm"
                    onClick={() => openModal(tour)}
                  >
                    <FaExpand className="mr-1" /> Full Screen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
    
    if (activeTab === 'videos') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {items.map((video) => (
            <div key={video.id} className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48 sm:h-56 md:h-64">
                <img 
                  src={video.src} 
                  alt={video.title} 
                  className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 sm:p-4 transition-all"
                    onClick={() => openModal(video)}
                  >
                    <FaPlay className="text-white text-xl sm:text-2xl" />
                  </button>
                </div>
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white text-xs sm:text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-3 sm:p-4 bg-white">
                <h3 className="text-base sm:text-lg font-semibold my-text-color-style">{video.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 line-clamp-2">{video.description}</p>
                <div className="mt-2 flex justify-between items-center flex-wrap gap-y-2">
                  <span className="inline-block px-2 py-1 bg-blue-100 my-text-color-style text-xs rounded">
                    {video.category === 'documentary' ? 'Documentary' : 'Adventure'}
                  </span>
                  <span className="text-gray-500 text-xs">
                    Uploaded: {new Date(video.uploadDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
    
    if (activeTab === 'userUploads') {
      return (
        <>
          <div className="mb-6 sm:mb-8">
            <button 
              onClick={openUploadModal}
              className="my-green-color-style hover:bg-blue-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg flex items-center justify-center shadow-md w-full sm:w-auto"
            >
              <FaCloudUploadAlt className="mr-2 text-lg sm:text-xl" />
              Share Your Lesotho Experience
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {items.map((item) => (
              <div key={item.id} className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-48 sm:h-56 md:h-64">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4 bg-white">
                  <h3 className="text-base sm:text-lg font-semibold my-text-color-style line-clamp-1">{item.title}</h3>
                  <div className="flex justify-between items-center mt-1 sm:mt-2 flex-wrap gap-y-1">
                    <span className="text-gray-500 text-xs sm:text-sm">By: {item.photographer}</span>
                    <span className="text-gray-500 text-xs">{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-600 text-xs mt-1">Location: {item.location}</p>
                  <div className="flex justify-between items-center mt-2 sm:mt-3">
                    <span className="text-gray-500 text-xs">Camera: {item.camera}</span>
                    <div className="flex items-center text-red-500 text-xs sm:text-sm">
                      <FaHeart className="mr-1" /> {item.likes}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }
    
    return null;
  };


  // Function to render the lightbox modal
  const renderModal = () => {
    if (!isModalOpen || !currentSlide) return null;

    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
        <button 
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 z-10"
          onClick={closeModal}
        >
          <FaTimes className="text-lg sm:text-xl" />
        </button>
        
        {/* Navigation arrows */}
        <button 
          className="absolute left-2 sm:left-4 text-white bg-black bg-opacity-50 p-2 sm:p-3 rounded-full hover:bg-opacity-70 z-10"
          onClick={() => {
            // Implement previous slide logic
            const items = filterGalleryItems(activeTab, filterType, filter);
            const currentIndex = items.findIndex(item => item.id === currentSlide.id);
            if (currentIndex > 0) {
              setCurrentSlide(items[currentIndex - 1]);
            }
          }}
        >
          <FaChevronLeft className="text-base sm:text-xl" />
        </button>
        
        <button 
          className="absolute right-2 sm:right-4 text-white bg-black bg-opacity-50 p-2 sm:p-3 rounded-full hover:bg-opacity-70 z-10"
          onClick={() => {
            // Implement next slide logic
            const items = filterGalleryItems(activeTab, filterType, filter);
            const currentIndex = items.findIndex(item => item.id === currentSlide.id);
            if (currentIndex < items.length - 1) {
              setCurrentSlide(items[currentIndex + 1]);
            }
          }}
        >
          <FaChevronRight className="text-base sm:text-xl" />
        </button>
        
        {/* Content based on type */}
        <div className="w-full max-w-6xl mx-auto p-2 sm:p-4 overflow-y-auto max-h-screen">
          {/* For image content */}
          {(currentSlide.category === 'landscape' || 
            currentSlide.category === 'cultural' || 
            currentSlide.category === 'people' || 
            currentSlide.category === 'wildlife' || 
            currentSlide.category === 'seasons') && (
            <div className="text-center pt-8 sm:pt-0">
              <img 
                src={currentSlide.src} 
                alt={currentSlide.title} 
                className="max-h-[50vh] sm:max-h-[70vh] mx-auto mb-4 object-contain"
              />
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{currentSlide.title}</h2>
              <p className="text-gray-300 mb-4 text-sm sm:text-base px-4">{currentSlide.description}</p>
              <p className="text-gray-400 text-sm">Location: {currentSlide.location}</p>
              
              {currentSlide.conservation && (
                <p className={`inline-block px-2 py-1 mt-2 rounded text-xs sm:text-sm ${
                  currentSlide.conservation === 'Endangered' ? 'bg-red-600' : 
                  currentSlide.conservation === 'Vulnerable' ? 'bg-orange-600' : 'bg-green-600'
                }`}>
                  Conservation Status: {currentSlide.conservation}
                </p>
              )}
              
              <div className="flex justify-center mt-4 space-x-4 flex-wrap">
                <button className="flex items-center text-blue-400 hover:text-blue-300 text-sm">
                  <FaShare className="mr-2" /> Share
                </button>
                <button className="flex items-center text-blue-400 hover:text-blue-300 text-sm">
                  <FaDownload className="mr-2" /> Download
                </button>
              </div>
            </div>
          )}
          
          {/* For virtual tour content */}
          {currentSlide.category === 'virtual' && (
            <div className="text-center pt-8 sm:pt-0">
              <div className="relative h-[50vh] sm:h-[70vh] bg-gray-800 mb-4 flex items-center justify-center">
                <p className="text-white text-base sm:text-lg px-4">360° Virtual Tour Viewer Would Be Embedded Here</p>
                <img 
                  src={currentSlide.src} 
                  alt={currentSlide.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{currentSlide.title}</h2>
              <p className="text-gray-300 mb-4 text-sm sm:text-base px-4">{currentSlide.description}</p>
              <p className="text-gray-400 text-sm">Location: {currentSlide.location}</p>
            </div>
          )}
          
          {/* For video content */}
          {currentSlide.category === 'documentary' || currentSlide.category === 'adventure' ? (
            <div className="text-center pt-8 sm:pt-0">
              <div className="relative aspect-video bg-gray-800 mb-4 flex items-center justify-center">
                <p className="text-white text-base sm:text-lg px-4">Video Player Would Be Embedded Here</p>
                <img 
                  src={currentSlide.src} 
                  alt={currentSlide.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaPlay className="text-white text-3xl sm:text-4xl opacity-80" />
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{currentSlide.title}</h2>
              <p className="text-gray-300 mb-4 text-sm sm:text-base px-4">{currentSlide.description}</p>
              <div className="flex justify-between items-center text-sm px-4 flex-wrap gap-y-2">
                <span className="text-gray-400">Duration: {currentSlide.duration}</span>
                <span className="text-gray-400">Category: {currentSlide.category === 'documentary' ? 'Documentary' : 'Adventure'}</span>
              </div>
            </div>
          ) : null}
          
          {/* For user uploads */}
          {currentSlide.photographer && (
            <div className="text-center pt-8 sm:pt-0">
              <img 
                src={currentSlide.src} 
                alt={currentSlide.title} 
                className="max-h-[50vh] sm:max-h-[70vh] mx-auto mb-4 object-contain"
              />
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{currentSlide.title}</h2>
              <p className="text-gray-300 mb-2 text-sm">Photographed by: {currentSlide.photographer}</p>
              <p className="text-gray-400 mb-4 text-sm">Location: {currentSlide.location}</p>
              <p className="text-gray-400 text-sm">Camera: {currentSlide.camera}</p>
              <div className="flex justify-center mt-4 space-x-4 flex-wrap">
                <button className="flex items-center text-red-400 hover:text-red-300 text-sm">
                  <FaHeart className="mr-2" /> {currentSlide.likes} Likes
                </button>
                <button className="flex items-center text-blue-400 hover:text-blue-300 text-sm">
                  <FaShare className="mr-2" /> Share
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Function to render filter options
  const renderFilterOptions = () => {
    if (isSearchActive) return null;
    
    let filterOptions = [];
    
    if (activeTab === 'landscapes' || activeTab === 'cultural' || activeTab === 'people' || activeTab === 'virtualTours') {
      const locations = getLocationsList(activeTab);
      filterOptions = locations;
      
      return (
        <div className="w-full mb-4 sm:mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Location:</label>
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full ${filter === 'all' ? 'my-green-color-style text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setFilter('all')}
            >
              All Locations
            </button>
            {filterOptions.map(option => (
              <button
                key={option}
                className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full ${filter === option ? 'my-green-color-style text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setFilter(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      );
    }
    
    if (activeTab === 'wildlife') {
      return (
        <div className="w-full mb-4 sm:mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Conservation Status:</label>
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => {setFilter('all'); setFilterType('conservation');}}
            >
              All
            </button>
            <button
              className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full ${filter === 'Endangered' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => {setFilter('Endangered'); setFilterType('conservation');}}
            >
              Endangered
            </button>
            <button
              className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full ${filter === 'Vulnerable' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => {setFilter('Vulnerable'); setFilterType('conservation');}}
            >
              Vulnerable
            </button>
            <button
              className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full ${filter === 'Least Concern' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => {setFilter('Least Concern'); setFilterType('conservation');}}
            >
              Least Concern
            </button>
          </div>
        </div>
      );
    }
    
    if (activeTab === 'seasons') {
      return (
        <div className="w-full mb-4 sm:mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Season:</label>
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => {setFilter('all'); setFilterType('season');}}
            >
              All Seasons
            </button>
            <button
              className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full ${filter === 'Spring' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => {setFilter('Spring'); setFilterType('season');}}
            >
              Spring
            </button>
            <button
              className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full ${filter === 'Summer' ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => {setFilter('Summer'); setFilterType('season');}}
            >
              Summer
            </button>
            <button
              className={`px-3 py-1.5 text-sm rounded-full ${filter === 'Autumn' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => {setFilter('Autumn'); setFilterType('season');}}
            >
              Autumn
            </button>
            <button
              className={`px-3 py-1.5 text-sm rounded-full ${filter === 'Winter' ? 'bg-blue-400 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => {setFilter('Winter'); setFilterType('season');}}
            >
              Winter
            </button>
          </div>
        </div>
      );
    }
    
    if (activeTab === 'videos') {
      return (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Type:</label>
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-3 py-1.5 text-sm rounded-full ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => {setFilter('all'); setFilterType('category');}}
            >
              All Videos
            </button>
            <button
              className={`px-3 py-1.5 text-sm rounded-full ${filter === 'documentary' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => {setFilter('documentary'); setFilterType('category');}}
            >
              Documentaries
            </button>
            <button
              className={`px-3 py-1.5 text-sm rounded-full ${filter === 'adventure' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => {setFilter('adventure'); setFilterType('category');}}
            >
              Adventure
            </button>
          </div>
        </div>
      );
    }
    
    if (activeTab === 'festivals') {
      return (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Month:</label>
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-3 py-1.5 text-sm rounded-full ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => {setFilter('all'); setFilterType('date');}}
            >
              All Months
            </button>
            <button
              className={`px-3 py-1.5 text-sm rounded-full ${filter === 'June' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => {setFilter('June'); setFilterType('date');}}
            >
              June
            </button>
            <button
              className={`px-3 py-1.5 text-sm rounded-full ${filter === 'July' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => {setFilter('July'); setFilterType('date');}}
            >
              July
            </button>
            <button
              className={`px-3 py-1.5 text-sm rounded-full ${filter === 'October' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => {setFilter('October'); setFilterType('date');}}
            >
              October
            </button>
          </div>
        </div>
      );
    }
    
    return null;
  };

  // Function to render the upload modal
  const renderUploadModal = () => {
    if (!isUploadModalOpen) return null;

    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold my-text-color-style">Share Your Experience</h2>
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={closeUploadModal}
            >
              <FaTimes />
            </button>
          </div>
          
          <form onSubmit={handleSubmitUpload}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={uploadForm.title}
                onChange={handleUploadFormChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={uploadForm.description}
                onChange={handleUploadFormChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-20"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                value={uploadForm.category}
                onChange={handleUploadFormChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="landscapes">Landscapes</option>
                <option value="cultural">Cultural Heritage</option>
                <option value="people">People of Lesotho</option>
                <option value="wildlife">Wildlife</option>
                <option value="adventure">Adventures</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photo
              </label>
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50"
                onClick={() => fileInputRef.current.click()}
              >
                {uploadForm.file ? (
                  <div className="text-gray-700">
                    <p>Selected file: {uploadForm.file.name}</p>
                  </div>
                ) : (
                  <div className="text-gray-500">
                    <FaCloudUploadAlt className="mx-auto text-3xl mb-2" />
                    <p>Click to select an image file</p>
                    <p className="text-xs mt-1">JPG, PNG or WEBP (max. 5MB)</p>
                  </div>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                  required={!uploadForm.file}
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={closeUploadModal}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-200 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4x1 mx-auto px-4 sm:px-6 py-6">
        <div 
          className="h-64 sm:h-80 md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-lg overflow-hidden mb-8"
          style={{backgroundImage: "url('/images/history/gallery.jpg')"}}
        >
          <div className="text-center bg-black bg-opacity-50 p-4 sm:p-6 md:p-10 rounded-xl w-full max-w-md mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">Lesotho Visual Gallery</h1>
            <p className="text-base sm:text-lg md:text-xl">Explore the beauty and culture of Lesotho through stunning visuals</p>
          </div>
        </div>
        
        {/* Search bar */}
        <div className=" container mx-auto relative mb-8 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search the gallery..."
              value={searchQuery}
              onChange={handleSearch}
              ref={searchInputRef}
              className="w-full px-4 py-3 pl-10 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            {searchQuery && (
              <button 
                onClick={clearSearch} 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            )}
          </div>
          {loading && (
            <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
            </div>
          )}
        </div>
        
        {isSearchActive && (
          <div className=" container mx-auto mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-1">
              Search Results for "{searchQuery}"
            </h2>
            <p className="text-sm text-gray-500">
              Found {searchResults.length} items
            </p>
            <button 
              onClick={clearSearch}
              className="mt-1 text-blue-600 hover:my-text-color-style text-sm flex items-center"
            >
              <FaTimes className="mr-1" /> Clear search
            </button>
          </div>
        )}
        
        {/* Category tabs */}
        {!isSearchActive && (
          <div className=" container mx-auto mb-8">
            <div className="flex flex-wrap gap-2">
              {categoryTabs.map((tab) => (
                <button
                  key={tab.key}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                    activeTab === tab.key 
                      ? 'my-green-color-style text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => {
                    setActiveTab(tab.key);
                    setFilter('all');
                    setFilterType('location');
                  }}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}
        
      <div className='container mx-auto  flex py-6'>
        {renderFilterOptions()}
      </div>
      </div>
      
      {/* Gallery content */}
      <div className=" container mx-auto mb-12">
        {renderGalleryItems()}
      </div>
      
      {/* Modal for viewing images/videos/360 tours */}
      {renderModal()}
      
      {/* Upload modal */}
      {renderUploadModal()}
    </div>
  );
};

export default Gallery;