import React from 'react'
import { SLOT_HEIGHT, generateTimes, START_TIME, END_TIME, STEP_MINUTES } from '../utils/common'



const StickyTime = () => {
  const times = generateTimes(START_TIME, END_TIME, STEP_MINUTES)

  return (
    <div className="sticky left-0 top-0 z-20 bg-white border-r border-gray-200">
      {/* header spacer: same height as VenueHeader row (h-8) */}
      <div className="h-8 border-b border-gray-200" />

      {times.map((time) => (
        <div
          key={time}
          className="flex items-start justify-end pr-2 text-[10px] text-gray-500 border-b border-gray-100"
          style={{ height: SLOT_HEIGHT }}
        >
          {time}
        </div>
      ))}
    </div>
  )
}

export default StickyTime
