// src/components/StickyTime.jsx
import React from 'react'
import { START_TIME, END_TIME, STEP_MINUTES, SLOT_HEIGHT, generateTimes } from '../utils/common'

const StickyTime = ({ onWheel }) => {
  const times = generateTimes(START_TIME, END_TIME, STEP_MINUTES)

  return (
    // fixed width column, no sticky, sends wheel to parent via onWheel
    <div className="shrink-0 bg-white border-r border-gray-200" onWheel={onWheel}>
      {/* header spacer, matches VenueHeader height */}
      <div className="h-8 border-b border-gray-200" />

      {times.map((time) => (
        <div
          key={time}
          className="flex items-center justify-center px-6 text-[10px] text-gray-500 border-b border-gray-100"
          style={{ height: SLOT_HEIGHT }}
        >
          {time}
        </div>
      ))}
    </div>
  )
}

export default StickyTime
