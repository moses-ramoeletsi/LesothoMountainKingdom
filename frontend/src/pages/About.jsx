import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-200">
      <div className='max-w-4xl mx-auto p-6'>

        <div 
          className="h-[400px] bg-cover bg-center flex items-center justify-center text-white"
          style={{backgroundImage: "url('/images/community/contact-hero.jpg')"}}
        >
          <div className="text-center bg-black bg-opacity-50 p-10 rounded-xl">
            <h1 className="text-4xl font-bold mb-4">About Lesotho</h1>
            <p className="text-xl">Know more about this beautiful country</p>
          </div>
        </div>
      
        <section className="mb-10">
          <h2 className="text-2xl font-semibold my-text-color-style mb-4">Geography, Climate, and Population</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-gray-800">
                Lesotho is a small, landlocked country completely surrounded by South Africa. It's located in Southern Africa with a total area of approximately 30,355 square kilometers (11,720 square miles).
              </p>
              <p className="text-gray-800">
                The country is notable for its unique geography as the only independent state in the world that lies entirely above 1,000 meters (3,281 feet) in elevation, with its lowest point at 1,400 meters (4,593 feet).
              </p>
              <p className="text-gray-800">
                <strong>Climate:</strong> Lesotho has a temperate climate with four distinct seasons. Winters (May to August) can be cold with snow in the highlands, while summers (November to February) are warm and rainy.
              </p>
              <p className="text-gray-800">
                <strong>Population:</strong> Lesotho has approximately 2.1 million people, with the majority being ethnic Basotho. The official languages are Sesotho and English.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-medium my-text-color-style mb-2">Key Facts</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Capital city: Maseru</li>
                <li>Official languages: Sesotho and English</li>
                <li>Currency: Lesotho Loti (LSL)</li>
                <li>Government: Constitutional monarchy</li>
                <li>Monarch: King Letsie III</li>
                <li>Major rivers: Orange River (known locally as Senqu)</li>
                <li>Highest point: Thabana Ntlenyana (3,482 m / 11,424 ft)</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold my-text-color-style mb-4">The Kingdom in the Sky</h2>
          <div className="bg-blue-50 p-5 rounded-lg mb-4">
            <p className="text-gray-800 italic">
              "Lesotho is often referred to as the 'Kingdom in the Sky' or the 'Mountain Kingdom' due to its unique geographical position."
            </p>
          </div>
          <p className="text-gray-800 mb-3">
            Lesotho earned its nickname as the "Kingdom in the Sky" due to its high elevation. The entire country sits above 1,000 meters, with more than 80% of the country lying above 1,800 meters (5,906 feet).
          </p>
          <p className="text-gray-800 mb-3">
            This mountainous terrain has played a significant role in shaping Lesotho's history and culture. The highlands provided natural fortification that helped the Basotho people maintain their independence during the colonial era.
          </p>
          <p className="text-gray-800">
            The Maloti Mountains dominate the landscape, creating breathtaking scenery that attracts tourists seeking adventure, hiking, and the experience of traditional Basotho village life in the mountains.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold my-text-color-style mb-4">Historical Journey</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-medium my-text-color-style">Moshoeshoe I and Nation Building</h3>
              <p className="text-gray-800">
                Lesotho's history as a unified nation begins with King Moshoeshoe I (c. 1786-1870), who founded the Basotho nation in the early 19th century. During a period of regional upheaval known as the Lifaqane (or Mfecane), Moshoeshoe gathered various displaced groups and established a stronghold at Thaba Bosiu ("Mountain of the Night").
              </p>
              <p className="text-gray-800">
                Moshoeshoe was known for his diplomatic skills and strategic thinking. He negotiated with neighboring tribes, European settlers, and colonial powers to maintain his people's independence, even as conflicts and land disputes arose with the Boers from the expanding Orange Free State.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-300 pl-4">
              <h3 className="text-xl font-medium my-text-color-style">Colonial Era</h3>
              <p className="text-gray-800">
                Facing increasing pressure from Boer encroachment, Moshoeshoe sought protection from the British. In 1868, Lesotho became a British protectorate known as Basutoland. This status saved the territory from being absorbed into South Africa but placed it under colonial rule.
              </p>
              <p className="text-gray-800">
                Under British protection, the Basotho preserved much of their cultural identity and traditional governance structures, though with reduced autonomy.
              </p>
            </div>
            
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="text-xl font-medium my-text-color-style">Independence and Modern Era</h3>
              <p className="text-gray-800">
                Lesotho gained independence from Britain on October 4, 1966, becoming a constitutional monarchy with King Moshoeshoe II as head of state and Chief Leabua Jonathan as Prime Minister.
              </p>
              <p className="text-gray-800">
                The post-independence period has seen political instability at times, including military coups, constitutional crises, and democratic transitions. Despite these challenges, Lesotho has maintained its monarchy, with King Letsie III serving as the current monarch since 1996 (with an earlier brief reign from 1990-1995).
              </p>
              <p className="text-gray-800">
                Today, Lesotho operates as a constitutional monarchy with a parliamentary system. The Prime Minister serves as head of government, while the King serves as head of state with primarily ceremonial duties.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold my-text-color-style mb-4">Culture and Society</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium my-text-color-style mb-2">Cultural Heritage</h3>
              <p className="text-gray-800 mb-3">
                The Basotho people have a rich cultural heritage expressed through music, dance, crafts, and oral traditions. The mokorotlo (Basotho hat) has become a national symbol, even appearing on the country's flag.
              </p>
              <p className="text-gray-800">
                Traditional Basotho blankets are another important cultural element, worn for warmth and as ceremonial attire. Different patterns and colors carry specific meanings and are worn for different occasions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium my-text-color-style mb-2">Economy</h3>
              <p className="text-gray-800 mb-3">
                Lesotho's economy relies heavily on textile manufacturing, diamond mining, water resources, and remittances from citizens working in South Africa.
              </p>
              <p className="text-gray-800">
                The Lesotho Highlands Water Project, a joint venture with South Africa, generates significant revenue through the sale of water to South Africa and hydroelectric power production.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;