import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

let DefaultIcon = L.icon({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const lesothoLocations = [
  {
    name: "Maletsunyane Falls",
    position: [-29.8453, 28.4975],
    description: "One of Africa's highest waterfalls near Semonkong",
    type: "Natural Wonder"
  },
  {
    name: "Katse Dam",
    position: [-29.2667, 28.5333],
    description: "Massive dam in the Maluti Mountains",
    type: "Engineering Landmark"
  },
  {
    name: "Thaba-Bosiu",
    position: [-29.5431, 27.5548],
    description: "Historical mountain fortress of King Moshoeshoe I",
    type: "Historical Site"
  },
  {
    name: "Afriski Mountain Resort",
    position: [-28.9667, 28.8833],
    description: "Africa's premier skiing destination",
    type: "Adventure Destination"
  },
  {
    name: "Sani Pass",
    position: [-29.6120, 29.0414],
    description: "Legendary mountain pass connecting Lesotho and South Africa",
    type: "Mountain Pass"
  }
];

const InteractiveMap = () => {
  return (
    <div className="w-full h-64">
      <MapContainer
        center={[-29.6, 28.5]}
        zoom={8}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {lesothoLocations.map((location, index) => (
          <Marker key={index} position={location.position}>
            <Popup>
              <div>
                <h3 className="text-lg font-bold text-green-700">{location.name}</h3>
                <p className="text-gray-600">{location.description}</p>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">
                  {location.type}
                </span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;