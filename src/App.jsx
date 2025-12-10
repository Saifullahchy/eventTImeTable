import { useEffect, useState } from 'react'
import './App.css'

import WeekTab from './components/WeekTab'
import StickyTime from './components/StickyTime'
import VenueDetails from './components/VenueDetails'
import VenueHeader from './components/VenueHeader'
import { venues, VENUE_WIDTH, defaultEvents } from './constants/venues'

function App() {
  const [selectedDayId, setSelectedDayId] = useState(0)

  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('events')
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch {
        console.error('Error parsing events from localStorage')
        return defaultEvents
      }
    }
    return defaultEvents
  })

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events))
  }, [events])

  const totalWidth = venues.length * VENUE_WIDTH
  const dayEvents = events.filter((evt) => evt.dayId === selectedDayId)

  // track if user has scrolled down
  const [hasScrolled, setHasScrolled] = useState(false)

  const handleScroll = (e) => {
    const top = e.currentTarget.scrollTop
    setHasScrolled(top > 0)
  }

  return (
    <div className="w-full h-screen p-12 bg-gray-50">
      <div className="h-full flex flex-col border border-gray-200 bg-white rounded-lg overflow-hidden">
        <WeekTab selectedDayId={selectedDayId} onSelectDay={setSelectedDayId} />

        <div
          className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
          onScroll={handleScroll}
        >
          <div className="flex flex-1">
            <div className="shrink-0 w-[80px] border-r border-gray-200">
              <StickyTime />
            </div>

            <div
              className={`flex-1 relative overflow-x-auto ${hasScrolled ? 'overflow-x-hidden' : ''}`}
            >
              <div className={hasScrolled ? 'hidden' : 'block'} style={{ width: totalWidth }}>
                <VenueHeader />
              </div>

              <div
                className={
                  'sticky top-0 z-50 bg-white border-b border-gray-200 ' +
                  (hasScrolled ? 'block' : 'hidden')
                }
                style={{ width: totalWidth }}
              >
                <VenueHeader />
              </div>

              <VenueDetails events={dayEvents} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
