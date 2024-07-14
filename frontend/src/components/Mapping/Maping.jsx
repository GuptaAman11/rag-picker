import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const Mapping = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hbjM0NSIsImEiOiJjbHlqcmxzdW8wdnI4MmtwYWxwMzYzZHBtIn0.andKMOgTS8IHABq-B6nEsg';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-73.99209, 40.68933],
      zoom: 10
    });

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        placeholder: 'Search for a location',
        zoom: 10,
        marker: true
      })
    );

    // Clean up
    return () => map.remove();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: '1', position: 'relative' }} id="map" />
      <div id="search-container" style={{ position: 'absolute', top: '10px', left: '10px', zIndex: '1', maxWidth: '400px' }}>
        <input id="geocoder" className="mapboxgl-ctrl-geocoder mapboxgl-ctrl" type="text" placeholder="Search for a location" style={{ width: '400px', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', outline: 'none' }} />
      </div>
    </div>
  );
};

export default Mapping;
