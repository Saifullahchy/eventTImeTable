// src/components/StickyTime.jsx
import React from 'react'
import { START_TIME, END_TIME, STEP_MINUTES, SLOT_HEIGHT, generateTimes } from '../utils/common'

const StickyTime = () => {
  const times = generateTimes(START_TIME, END_TIME, STEP_MINUTES)

  return (
    <div className="bg-white">
      {/* top spacer, same height as venue header (h-8) */}
      <div className="h-8 border-b border-gray-200" />

      {times.map((time) => (
        <div
          key={time}
          className="flex items-start justify-center pr-2 text-[10px] text-gray-500 border-b border-gray-100"
          style={{ height: SLOT_HEIGHT }}
        >
          <span className="mt-[2px]">{time}</span>
        </div>
      ))}
    </div>
  )
}

export default StickyTime
