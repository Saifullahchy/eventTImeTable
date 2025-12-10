// src/App.jsx
import './App.css'

import WeekTab from './components/WeekTab'
import StikcyTime from './components/StickyTime'
import VenueDetails from './components/VenueDetails'
import VenueHeader from './components/VenueHeader'

function App() {
  return (
    <div className="w-full h-screen p-12">
      <div className="h-full flex flex-col border border-gray-200">
        <WeekTab />

        <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <div className="flex flex-1">
            <div className="shrink-0 w-[80px] border-r border-gray-200">
              <StikcyTime />
            </div>

            {/* Grey area: horizontal scroll only, shares vertical scroll with parent */}

            <div className="flex-1 overflow-x-auto relative">
              <VenueDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
