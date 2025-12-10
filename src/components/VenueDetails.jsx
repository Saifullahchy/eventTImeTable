import React from 'react'
import { VENUE_WIDTH, venues } from './VenueHeader'
import { SLOT_HEIGHT, START_TIME, END_TIME, STEP_MINUTES, generateTimes } from '../utils/common'

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

// one sample event
const sampleEvents = [
  {
    id: 1,
    venueId: 'v1',
    title: 'Event 1',
    start: '09:00',
    end: '9:30',
  },
  {
    id: 2,
    venueId: 'v1',
    title: 'Event 2',
    start: '10:00',
    end: '10:30',
  },
  {
    id: 3,
    venueId: 'v2',
    title: 'Event 2',
    start: '10:00',
    end: '10:30',
  },
  {
    id: 4,
    venueId: 'v3',
    title: 'Event 3',
    start: '9:45',
    end: '10:45',
  },
]

const VenueDetails = () => {
  const times = generateTimes(START_TIME, END_TIME, STEP_MINUTES)
  const totalWidth = venues.length * VENUE_WIDTH

  return (
    <div className="relative min-w-max" style={{ width: totalWidth }}>
      {/* background time rows */}
      <div className="relative">
        {times.map((t) => (
          <div
            key={t}
            className="border-b border-gray-100"
            style={{ height: SLOT_HEIGHT, width: totalWidth }}
          />
        ))}

        {/* events layer */}
        <div className="absolute inset-0">
          {sampleEvents.map((evt) => {
            const venueIndex = venues.findIndex((v) => v.id === evt.venueId)
            const left = venueIndex * VENUE_WIDTH
            const top = pxFromTime(evt.start)
            const height = pxDuration(evt.start, evt.end)

            return (
              <div
                key={evt.id}
                className="absolute mx-2 rounded bg-gray-300 text-[11px] p-2 shadow-sm"
                style={{
                  left,
                  top,
                  width: VENUE_WIDTH - 16,
                  height,
                }}
              >
                <div className="font-semibold">{evt.title}</div>
                <div>
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
