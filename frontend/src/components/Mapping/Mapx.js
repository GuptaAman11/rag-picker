import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import locations from './mumbaiLocations.json';
import { useAddMarkers, useClosestLocations } from '../../hooks/useAddMarkers';
import './map.css'; // Import the CSS file here

const Mapx = () => {
  const [map, setMap] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const mapContainerRef = useRef(null);
  const geocoderContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYW1hbjM0NSIsImEiOiJjbHlqcmxzdW8wdnI4MmtwYWxwMzYzZHBtIn0.andKMOgTS8IHABq-B6nEsg';
    const mapInstance = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [72.8777, 19.0760],
      zoom: 12,
    });

    mapInstance.on('load', () => {
      mapInstance.addControl(new mapboxgl.NavigationControl());
      mapInstance.scrollZoom.disable();
    });

    setMap(mapInstance);

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: 'Search for a location',
      zoom: 12,
      marker: true,
    });

    geocoderContainerRef.current.appendChild(geocoder.onAdd(mapInstance));

    geocoder.on('result', (e) => {
      setSearchResult(e.result.geometry.coordinates);
    });

    return () => mapInstance.remove();
  }, []);

  useAddMarkers(map, locations);
  const closestLocations = useClosestLocations(searchResult, locations);

  useEffect(() => {
    if (closestLocations.length > 0) {
      console.log('Top 5 closest locations:', closestLocations);
    }
  }, [closestLocations]);

  return (
    <div style={{ height: '100vh', display: 'flex', margin: '20px 0' }}>
      <div
        style={{
          width: '20%',
          padding: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          zIndex: '1',
        }}
      >
        <div ref={geocoderContainerRef} />
        {closestLocations.length > 0 && (
          <div>
            <h3>Top 5 closest locations:</h3>
            <ul>
              {closestLocations.map((location, index) => (
                <li key={index}>{location.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div ref={mapContainerRef} style={{ flex: '1' }} />
    </div>
  );
};

export default Mapx;
