// src/hooks/useAddMarkers.js
import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

export const useAddMarkers = (map, locations) => {
  useEffect(() => {
    if (!map) return; // If map is not initialized, do nothing

    locations.forEach(location => {
      new mapboxgl.Marker()
        .setLngLat(location.coordinates) // Set the marker at the given coordinates
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${location.name}</h3>`)) // Add a popup with the location name
        .addTo(map); // Add the marker to the map
    });
  }, [map, locations]); // Re-run if map or locations change
};





// src/hooks/useClosestLocations.js
export const useClosestLocations = (searchResult, locations) => {
    const distance = (coord1, coord2) => {
      const R = 6371; // Radius of the Earth in km
      const dLat = toRad(coord2[1] - coord1[1]);
      const dLon = toRad(coord2[0] - coord1[0]);
      const lat1 = toRad(coord1[1]);
      const lat2 = toRad(coord2[1]);
  
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.sin(dLon / 2) * Math.sin(dLon / 2) *
                Math.cos(lat1) * Math.cos(lat2);
  
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    };
  
    const toRad = (value) => {
      return value * Math.PI / 180;
    };
  
    if (!searchResult) return [];
  
    return locations
      .map(location => ({
        ...location,
        distance: distance(searchResult, location.coordinates)
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5); // Get the top 5 closest locations
  };
  
  