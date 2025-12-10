import React, { useRef } from 'react'

const days = [
  { id: 0, label: 'Monday', date: '2024-12-01' },
  { id: 1, label: 'Tuesday', date: '2024-12-02' },
  { id: 2, label: 'Wednesday', date: '2024-12-03' },
  { id: 3, label: 'Thursday', date: '2024-12-04' },
  { id: 4, label: 'Friday', date: '2024-12-05' },
  { id: 5, label: 'Saturday', date: '2024-12-06' },
  { id: 6, label: 'Sunday', date: '2024-12-07' },
]

const WeekTab = () => {
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
  }

  return (
    <div className="relative w-full border-gray-200 group">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 
                   bg-white px-2 py-1 shadow z-20 
                   hidden group-hover:flex"
      >
        ‹
      </button>

      {/* Scrollable Container */}
      <div ref={scrollRef} className="w-full overflow-x-auto overflow-y-hidden no-scrollbar">
        <div className="flex flex-row min-w-max">
          {days.map((day) => (
            <div
              key={day.id}
              className="border w-[260px] border-gray-200 shrink-0 cursor-pointer 
                         hover:bg-gray-100 p-4"
            >
              <h4 className="text-xs font-medium  text-center">{day.label}</h4>
              <p className="text-xs text-gray-500 text-center">Date: {day.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 
                   bg-white px-2 py-1 shadow z-20 
                   hidden group-hover:flex"
      >
        ›
      </button>
    </div>
  )
}

export default WeekTab
