// src/components/VenueHeader.jsx
import React from 'react'
import { VENUE_WIDTH, venues } from '../constants/venues'

const VenueHeader = () => {
  return (
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
  )
}

export default VenueHeader
