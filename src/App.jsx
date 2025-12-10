import './App.css'

import WeekTab from './components/WeekTab'
import StikcyTime from './components/StickyTime'
import VenueDetails from './components/VenueDetails'
import VenueHeader from './components/VenueHeader'

function App() {
  return (
    <div className="w-full h-screen p-12">
      <div className="h-full flex flex-col border border-gray-200">
        {/* Top tabbar: only horizontal scroll inside WeekTab */}
        <WeekTab />

        {/* Timeline area: vertical scroll here, both sides move together */}
        <div className="flex flex-1 overflow-y-auto overflow-x-hidden">
          {/* Left time column, fixed horizontally, scrolls vertically */}
          <StikcyTime />

          {/* Right grey section: horizontal + vertical scroll effect */}
          <div className="flex-1 overflow-x-auto">
            <VenueHeader />
            <VenueDetails />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
