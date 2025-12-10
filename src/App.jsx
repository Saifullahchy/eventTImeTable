// src/App.jsx
import { useRef } from 'react'
import './App.css'

import WeekTab from './components/WeekTab'
import StikcyTime from './components/StickyTime'
import VenueDetails from './components/VenueDetails'
import VenueHeader from './components/VenueHeader'

function App() {
  const timelineRef = useRef(null)

  // any wheel on children will scroll this container vertically
  const handleVerticalWheel = (e) => {
    if (!timelineRef.current) return

    timelineRef.current.scrollTop += e.deltaY
    e.preventDefault() // stop child from having its own separate scroll
  }

  return (
    <div className="w-full h-screen p-12">
      <div className="h-full flex flex-col border border-gray-200">
        <WeekTab />

        {/* ONE vertical scroll container for time + grey area */}
        <div
          ref={timelineRef}
          className="flex  overflow-y-auto overflow-x-hidden"
        >
          {/* time column, no sticky */}
          <StikcyTime onWheel={handleVerticalWheel} />

          {/* right grey area, horizontal scroll only, vertical handled by parent */}
          <div
            className="flex-1 "
            onWheel={handleVerticalWheel}
          >
            <VenueHeader />
            <VenueDetails />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
