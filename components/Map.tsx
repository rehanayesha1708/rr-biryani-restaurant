'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'
import L from 'leaflet'
import { MapPin, AlertTriangle } from 'lucide-react'

const position: [number, number] = [40.7128, -74.0060]

export default function Map() {
  const [isMounted, setIsMounted] = useState(false)
  const [mapError, setMapError] = useState(false)

  useEffect(() => {
    try {
      setIsMounted(true)
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })
    } catch (error) {
      console.error('Failed to initialize map:', error)
      setMapError(true)
    }
  }, [])

  if (mapError) {
    return (
      <div className="h-full min-h-[400px] flex items-center justify-center bg-primary-dark rounded-2xl">
        <div className="text-center px-4 max-w-md">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="text-accent-gold" size={32} />
            </div>
          </div>
          <h3 className="text-lg font-playfair font-bold text-text-primary mb-2">
            Map Unavailable
          </h3>
          <p className="text-text-secondary text-sm mb-4">
            Unable to load the map. Please use the link below to get directions.
          </p>
          <a
            href="https://maps.google.com/?q=123+Main+Street+City+State"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2 text-sm"
          >
            <MapPin size={16} />
            <span>Get Directions</span>
          </a>
        </div>
      </div>
    )
  }

  if (!isMounted) {
    return (
      <div className="h-full min-h-[400px] flex items-center justify-center bg-secondary-dark rounded-2xl">
        <div className="text-center">
          <MapPin className="text-accent-gold mx-auto mb-2 animate-pulse" size={32} />
          <p className="text-text-secondary">Loading map...</p>
        </div>
      </div>
    )
  }

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
