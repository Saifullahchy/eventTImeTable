import React from 'react'
import { VENUE_WIDTH, venues } from './VenueHeader'
import { START_TIME, STEP_MINUTES, SLOT_HEIGHT, generateTimes, END_TIME } from '../utils/common'

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
  const diff = minutesFromStart(end, START_TIME) - minutesFromStart(start, START_TIME)
  return (diff / STEP_MINUTES) * SLOT_HEIGHT
}

// demo events
const events = [
  {
    id: 1,
    title: 'Event 1',
    venueIds: ['v1'],
    start: '09:00',
    end: '09:30',
  },
  {
    id: 2,
    title: 'Event 2',
    venueIds: ['v1', 'v2'],
    start: '10:00',
    end: '11:30',
  },
  {
    id: 3,
    title: 'Event 3',
    venueIds: ['v3'],
    start: '09:45',
    end: '13:00',
  },
]

const VenueDetails = () => {
  const times = generateTimes(START_TIME, END_TIME, STEP_MINUTES)
  const totalWidth = venues.length * VENUE_WIDTH

  return (
    <div className="relative min-w-max" style={{ width: totalWidth }}>
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
                className="absolute border border-black flex justify-center items-center flex-col-reverse bg-gray-300 text-[11px] shadow-sm"
                style={{
                  left,
                  top,
                  width: width - 16,
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
