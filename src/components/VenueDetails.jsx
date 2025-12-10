// src/components/VenueDetails.jsx
import React from 'react'
import { VENUE_WIDTH, venues } from '../constants/venues'
import { START_TIME, END_TIME, STEP_MINUTES, SLOT_HEIGHT, generateTimes } from '../utils/common'
import VenueHeader from './VenueHeader'

const minutesFromStart = (time, start) => {
  const [h, m] = time.split(':').map(Number)
  const [sh, sm] = start.split(':').map(Number)
  return h * 60 + m - (sh * 60 + sm)
}

const pxFromTime = (time) => {
  const mins = minutesFromStart(time, START_TIME)
  return (mins / STEP_MINUTES) * SLOT_HEIGHT
}

const pxDuration = (start, end) => {
  const startMins = minutesFromStart(start, START_TIME)
  const endMins = minutesFromStart(end, START_TIME)

  // add one extra 15-minute slot so the card visually reaches the next line
  const diff = endMins - startMins + STEP_MINUTES

  return (diff / STEP_MINUTES) * SLOT_HEIGHT
}

const VenueDetails = ({ events, showStickyHeader }) => {
  const times = generateTimes(START_TIME, END_TIME, STEP_MINUTES)
  const totalWidth = venues.length * VENUE_WIDTH

  return (
    <div className="min-w-max relative" style={{ width: totalWidth }}>
      {/* sticky header only when scrolled */}
      

      <div className="relative">
        {times.map((t) => (
          <div
            key={t}
            className="border-b border-gray-100"
            style={{ height: SLOT_HEIGHT, width: totalWidth }}
          />
        ))}

        <div className="absolute inset-0">
          {events.map((evt) => {
            const indices = evt.venueIds
              .map((id) => venues.findIndex((v) => v.id === id))
              .filter((i) => i >= 0)
              .sort((a, b) => a - b)

            if (!indices.length) return null

            const firstIndex = indices[0]
            const lastIndex = indices[indices.length - 1]

            const left = firstIndex * VENUE_WIDTH
            const width = (lastIndex - firstIndex + 1) * VENUE_WIDTH

            const top = pxFromTime(evt.start)
            const height = pxDuration(evt.start, evt.end)

            return (
              <div
                key={evt.id}
                className="absolute border border-gray-400 flex justify-center items-center flex-col-reverse bg-gray-300 text-[11px] shadow-sm"
                style={{
                  left,
                  top,
                  width,
                  height,
                }}
              >
                <div className="font-semibold truncate text-center">{evt.title}</div>
                <div className="text-[10px] text-center">
                  {evt.start} - {evt.end}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default VenueDetails
