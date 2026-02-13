'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'
import L from 'leaflet'

const position: [number, number] = [40.7128, -74.0060]

export default function Map() {
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    })
  }, [])

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: '100%', minHeight: '400px', borderRadius: '12px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <div className="text-center">
            <strong className="text-lg">RR Biryani Restaurant</strong>
            <br />
            123 Main Street
            <br />
            City, State 12345
            <br />
            <a
              href="https://maps.google.com/?q=123+Main+Street+City+State"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline mt-2 inline-block"
            >
              Get Directions
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
