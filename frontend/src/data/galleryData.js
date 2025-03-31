export const galleryData = {
    landscapes: [
      { 
        id: 'l1', 
        title: 'Maletsunyane Falls', 
        description: 'Spectacular 192-meter waterfall near Semonkong', 
        src: '/images/landscapes/maletsunyane-falls.jpg', 
        category: 'landscape', 
        location: 'Semonkong' 
      },
      { 
        id: 'l2', 
        title: 'Sehlabathebe National Park', 
        description: 'UNESCO World Heritage site with unique rock formations', 
        src: '/images/landscapes/sehlabathebe.jpg', 
        category: 'landscape', 
        location: 'Qacha\'s Nek' 
      },
      { 
        id: 'l3', 
        title: 'Thabana Ntlenyana', 
        description: 'The highest peak in Southern Africa', 
        src: '/images/landscapes/thabana-ntlenyana.jpg', 
        category: 'landscape', 
        location: 'Mokhotlong' 
      },
      { 
        id: 'l4', 
        title: 'Katse Dam', 
        description: 'Africa\'s second largest double-curvature arch dam', 
        src: '/images/landscapes/katse-dam.jpg', 
        category: 'landscape', 
        location: 'Thaba-Tseka' 
      },
      { 
        id: 'l5', 
        title: 'Maluti Mountains', 
        description: 'Breathtaking mountain range covered in snow during winter', 
        src: '/images/landscapes/maluti-mountains.jpg', 
        category: 'landscape', 
        location: 'Central Highlands' 
      },
      { 
        id: 'l6', 
        title: 'Sani Pass', 
        description: 'Challenging mountain pass connecting South Africa and Lesotho', 
        src: '/images/landscapes/sani-pass.jpg', 
        category: 'landscape', 
        location: 'Eastern Highlands' 
      },
    ],
    cultural: [
      { 
        id: 'c1', 
        title: 'Basotho Blankets', 
        description: 'Traditional ceremonial blankets with distinctive patterns', 
        src: '/images/cultural/basotho-blankets.jpg', 
        category: 'cultural', 
        location: 'Maseru' 
      },
      { 
        id: 'c2', 
        title: 'Mokorotlo Hats', 
        description: 'Iconic conical straw hats representing Lesotho\'s national symbol', 
        src: '/images/cultural/mokorotlo-hats.jpg', 
        category: 'cultural', 
        location: 'Various' 
      },
      { 
        id: 'c3', 
        title: 'Traditional Dancers', 
        description: 'Performers showcasing Basotho cultural dances', 
        src: '/images/cultural/traditional-dancers.jpg', 
        category: 'cultural', 
        location: 'Thaba Bosiu' 
      },
      { 
        id: 'c4', 
        title: 'Royal Palace', 
        description: 'The modern royal residence in Maseru', 
        src: '/images/cultural/royal-palace.jpg', 
        category: 'cultural', 
        location: 'Maseru' 
      },
    ],
    people: [
      { 
        id: 'p1', 
        title: 'Basotho Horsemen', 
        description: 'Riders showcasing traditional horsemanship', 
        src: '/images/people/basotho-horsemen.jpg', 
        category: 'people', 
        location: 'Mokhotlong' 
      },
      { 
        id: 'p2', 
        title: 'Local Shepherds', 
        description: 'Young shepherds wearing traditional blankets', 
        src: '/images/people/local-shepherds.jpg', 
        category: 'people', 
        location: 'Highlands' 
      },
      { 
        id: 'p3', 
        title: 'Wool and Mohair Artisans', 
        description: 'Local craftspeople creating textiles', 
        src: '/images/people/wool-mohair-artisans.jpg', 
        category: 'people', 
        location: 'Leribe' 
      },
    ],
    virtualTours: [
      { 
        id: 'v1', 
        title: 'Thaba Bosiu 360°', 
        description: 'Explore the mountain fortress of King Moshoeshoe I', 
        src: '/images/virtual/thaba-bosiu-360.jpg', 
        category: 'virtual', 
        location: 'Maseru District',
        virtualTourUrl: '/virtual-tours/thaba-bosiu' 
      },
      { 
        id: 'v2', 
        title: 'Katse Dam 360°', 
        description: 'Virtual tour of the impressive dam and surroundings', 
        src: '/images/virtual/katse-dam-360.jpg', 
        category: 'virtual', 
        location: 'Thaba-Tseka',
        virtualTourUrl: '/virtual-tours/katse-dam' 
      },
      { 
        id: 'v3', 
        title: 'Ha Kome Cave Houses 360°', 
        description: 'Explore ancient cave dwellings still in use today', 
        src: '/images/virtual/ha-kome-360.jpg', 
        category: 'virtual', 
        location: 'Berea District',
        virtualTourUrl: '/virtual-tours/ha-kome-caves' 
      },
    ],
    videos: [
      { 
        id: 'vid1', 
        title: 'The Kingdom in the Sky', 
        description: 'Documentary about Lesotho\'s geography and natural beauty', 
        src: '/images/videos/kingdom-sky-thumbnail.jpg', 
        videoUrl: '/videos/kingdom-in-the-sky.mp4',
        duration: '18:45', 
        category: 'documentary',
        uploadDate: '2024-01-15' 
      },
      { 
        id: 'vid2', 
        title: 'Basotho Cultural Heritage', 
        description: 'A look into traditional customs, music, and dance', 
        src: '/images/videos/cultural-heritage-thumbnail.jpg', 
        videoUrl: '/videos/basotho-heritage.mp4',
        duration: '24:12', 
        category: 'documentary',
        uploadDate: '2024-02-03' 
      },
      { 
        id: 'vid3', 
        title: 'Blanket Evolution', 
        description: 'The history and significance of Basotho blankets', 
        src: '/images/videos/blanket-evolution-thumbnail.jpg', 
        videoUrl: '/videos/blanket-evolution.mp4',
        duration: '15:30', 
        category: 'documentary',
        uploadDate: '2024-01-28' 
      },
      { 
        id: 'vid4', 
        title: 'Highlands Crossing', 
        description: 'Adventure travel through Lesotho\'s mountain passes', 
        src: '/images/videos/highlands-crossing-thumbnail.jpg', 
        videoUrl: '/videos/highlands-crossing.mp4',
        duration: '32:08', 
        category: 'adventure',
        uploadDate: '2024-02-20' 
      },
    ],
    userUploads: [
      { 
        id: 'u1', 
        title: 'Sunrise at Bokong', 
        photographer: 'Sarah J.', 
        date: '2024-02-15', 
        src: '/images/user-uploads/sunrise-bokong.jpg', 
        likes: 24,
        location: 'Bokong Nature Reserve',
        camera: 'Canon EOS R5' 
      },
      { 
        id: 'u2', 
        title: 'Village Life', 
        photographer: 'Thomas M.', 
        date: '2024-01-20', 
        src: '/images/user-uploads/village-life.jpg', 
        likes: 18,
        location: 'Malealea',
        camera: 'Sony A7III' 
      },
      { 
        id: 'u3', 
        title: 'Mountain Pony Trek', 
        photographer: 'David L.', 
        date: '2024-03-05', 
        src: '/images/user-uploads/pony-trek.jpg', 
        likes: 32,
        location: 'Eastern Highlands',
        camera: 'Nikon Z7' 
      },
      { 
        id: 'u4', 
        title: 'Traditional Healer', 
        photographer: 'Emma W.', 
        date: '2024-02-28', 
        src: '/images/user-uploads/traditional-healer.jpg', 
        likes: 29,
        location: 'Quthing',
        camera: 'Fujifilm X-T4' 
      },
      { 
        id: 'u5', 
        title: 'Stars over Thaba-Tseka', 
        photographer: 'Michael P.', 
        date: '2024-03-10', 
        src: '/images/user-uploads/stars-thaba-tseka.jpg', 
        likes: 45,
        location: 'Thaba-Tseka',
        camera: 'Canon EOS R6' 
      },
    ],
    // New categories to enhance the gallery
    wildlife: [
      { 
        id: 'w1', 
        title: 'Bearded Vulture', 
        description: 'Rare bearded vulture soaring over the Maluti Mountains', 
        src: '/images/wildlife/bearded-vulture.jpg', 
        category: 'wildlife', 
        location: 'Maluti Mountains',
        conservation: 'Endangered' 
      },
      { 
        id: 'w2', 
        title: 'Chacma Baboons', 
        description: 'Troop of baboons in Sehlabathebe National Park', 
        src: '/images/wildlife/chacma-baboons.jpg', 
        category: 'wildlife', 
        location: 'Sehlabathebe',
        conservation: 'Least Concern' 
      },
      { 
        id: 'w3', 
        title: 'Rock Hyrax', 
        description: 'Small mammals sunning on the rocks', 
        src: '/images/wildlife/rock-hyrax.jpg', 
        category: 'wildlife', 
        location: 'Thaba Bosiu',
        conservation: 'Least Concern' 
      },
      { 
        id: 'w4', 
        title: 'Malachite Sunbird', 
        description: 'Brilliantly colored sunbird feeding on mountain flowers', 
        src: '/images/wildlife/malachite-sunbird.jpg', 
        category: 'wildlife', 
        location: 'Bokong Nature Reserve',
        conservation: 'Least Concern' 
      },
    ],
    seasons: [
      { 
        id: 's1', 
        title: 'Spring Wildflowers', 
        description: 'Colorful wildflowers carpet the highlands in spring', 
        src: '/images/seasons/spring-wildflowers.jpg', 
        category: 'seasons', 
        season: 'Spring',
        location: 'Maluti Mountains' 
      },
      { 
        id: 's2', 
        title: 'Summer Thunderstorm', 
        description: 'Dramatic lightning over the mountains during summer', 
        src: '/images/seasons/summer-thunderstorm.jpg', 
        category: 'seasons', 
        season: 'Summer',
        location: 'Thaba-Tseka' 
      },
      { 
        id: 's3', 
        title: 'Autumn Colors', 
        description: 'Golden hues of autumn in the lowlands', 
        src: '/images/seasons/autumn-colors.jpg', 
        category: 'seasons', 
        season: 'Autumn',
        location: 'Morija' 
      },
      { 
        id: 's4', 
        title: 'Winter Snowfall', 
        description: 'Snow-covered mountains in the highlands', 
        src: '/images/seasons/winter-snowfall.jpg', 
        category: 'seasons', 
        season: 'Winter',
        location: 'Sani Pass' 
      },
    ],
    festivals: [
      { 
        id: 'f1', 
        title: 'Morija Arts & Cultural Festival', 
        description: 'Annual celebration of Basotho arts, music, and culture', 
        src: '/images/festivals/morija-festival.jpg', 
        date: 'October',
        location: 'Morija' 
      },
      { 
        id: 'f2', 
        title: 'King\'s Birthday Celebrations', 
        description: 'National celebrations for the King\'s birthday', 
        src: '/images/festivals/kings-birthday.jpg', 
        date: 'July',
        location: 'Maseru' 
      },
      { 
        id: 'f3', 
        title: 'Semonkong Winter Festival', 
        description: 'Music and adventure festival near Maletsunyane Falls', 
        src: '/images/festivals/semonkong-festival.jpg', 
        date: 'June',
        location: 'Semonkong' 
      },
    ]
  };
  
  // Helper functions for filtering and sorting gallery data
  export const getLocationsList = (category) => {
    if (!galleryData[category]) return [];
    
    const locations = galleryData[category]
      .map(item => item.location)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort();
      
    return locations;
  };
  
  export const getCategoriesList = () => {
    return Object.keys(galleryData).map(key => ({
      key: key,
      title: formatCategoryTitle(key)
    }));
  };
  
  export const formatCategoryTitle = (categoryKey) => {
    switch(categoryKey) {
      case 'landscapes': return 'Landscapes';
      case 'cultural': return 'Cultural Heritage';
      case 'people': return 'People of Lesotho';
      case 'virtualTours': return 'Virtual Tours';
      case 'videos': return 'Videos & Documentaries';
      case 'userUploads': return 'Visitor Experiences';
      case 'wildlife': return 'Wildlife';
      case 'seasons': return 'Seasonal Highlights';
      case 'festivals': return 'Festivals & Events';
      default: return categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);
    }
  };
  
  export const filterGalleryItems = (category, filterType, filterValue) => {
    if (!galleryData[category] || filterValue === 'all') {
      return galleryData[category] || [];
    }
    
    return galleryData[category].filter(item => {
      if (filterType === 'location') {
        return item.location === filterValue;
      } else if (filterType === 'season') {
        return item.season === filterValue;
      } else if (filterType === 'category') {
        return item.category === filterValue;
      }
      return true;
    });
  };
  
  export const searchGallery = (query) => {
    if (!query || query.trim() === '') return [];
    
    const searchTerms = query.toLowerCase().trim().split(' ');
    const results = [];
    
    // Search through all categories
    Object.keys(galleryData).forEach(category => {
      galleryData[category].forEach(item => {
        // Check if any of the search terms appear in the item's title, description, or location
        const matchesSearch = searchTerms.some(term => 
          (item.title && item.title.toLowerCase().includes(term)) ||
          (item.description && item.description.toLowerCase().includes(term)) ||
          (item.location && item.location.toLowerCase().includes(term))
        );
        
        if (matchesSearch) {
          results.push({
            ...item,
            category: formatCategoryTitle(category)
          });
        }
      });
    });
    
    return results;
  };
  
  export default galleryData