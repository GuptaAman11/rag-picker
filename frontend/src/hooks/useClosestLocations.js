import { useEffect, useState } from 'react';

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

const useClosestLocations = (searchResult, locations) => {
  const [closestLocations, setClosestLocations] = useState([]);

  useEffect(() => {
    if (!searchResult) return;

    const results = locations
      .map(location => ({
        ...location,
        distance: distance(searchResult, location.coordinates)
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5);

    setClosestLocations(results);
  }, [searchResult, locations]);

  return closestLocations;
};

export default useClosestLocations;
