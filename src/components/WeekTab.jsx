import React, { useRef } from 'react'
import { days } from '../constants/venues'

const WeekTab = ({ selectedDayId, onSelectDay }) => {
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
  }

  return (
    <div className="relative w-full border-b border-gray-200 group bg-white">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 
                   bg-white px-2 py-1 shadow z-20 rounded 
                   hidden group-hover:flex text-lg"
      >
        ‹
      </button>

      <div ref={scrollRef} className="w-full overflow-x-auto overflow-y-hidden no-scrollbar">
        <div className="flex flex-row min-w-max">
          {days.map((day) => {
            const isActive = selectedDayId === day.id

            return (
              <div
                key={day.id}
                onClick={() => onSelectDay(day.id)}
                className={
                  `border w-[260px] border-gray-200 shrink-0 cursor-pointer p-4 
                   hover:bg-gray-100 transition-all text-center ` +
                  (isActive ? 'bg-gray-200 font-semibold' : 'bg-white')
                }
              >
                <h4 className="text-xs font-medium text-center">{day.label}</h4>
                <p className="text-xs text-gray-500 text-center">Date: {day.date}</p>
              </div>
            )
          })}
        </div>
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 
                   bg-white px-2 py-1 shadow z-20 rounded 
                   hidden group-hover:flex text-lg"
      >
        ›
      </button>
    </div>
  )
}

export default WeekTab
