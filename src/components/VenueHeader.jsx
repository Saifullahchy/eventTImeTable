// src/components/VenueHeader.jsx
import React from 'react'

export const VENUE_WIDTH = 400

export const venues = [
  { id: 'v1', name: 'Venue 1' },
  { id: 'v2', name: 'Venue 2' },
  { id: 'v3', name: 'Venue 3' },
  { id: 'v4', name: 'Venue 4' },
]

const VenueHeader = () => {
  return (
    // sticky inside the vertical scroll container (right grey side)
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex min-w-max border-b border-gray-200 h-8">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className="flex items-center justify-center border-r border-gray-200"
            style={{ width: VENUE_WIDTH }}
          >
            <div className="text-center">
              <div className="text-sm font-semibold">{venue.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VenueHeader
