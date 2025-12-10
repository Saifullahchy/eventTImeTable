// src/constants/venues.js
export const VENUE_WIDTH = 400

export const venues = [
  { id: 'v1', name: 'Venue 1' },
  { id: 'v2', name: 'Venue 2' },
  { id: 'v3', name: 'Venue 3' },
  { id: 'v4', name: 'Venue 4' },
]

// week days with date (from the assignment image)
export const days = [
  { id: 0, label: 'Monday', date: '2024-12-01' },
  { id: 1, label: 'Tuesday', date: '2024-12-02' },
  { id: 2, label: 'Wednesday', date: '2024-12-03' },
  { id: 3, label: 'Thursday', date: '2024-12-04' },
  { id: 4, label: 'Friday', date: '2024-12-05' },
  { id: 5, label: 'Saturday', date: '2024-12-06' },
  { id: 6, label: 'Sunday', date: '2024-12-07' },
]

// default events, grouped by dayId
// dayId refers to days[id] above
export const defaultEvents = [
  // Monday
  { id: 1, dayId: 0, title: 'Event 1', venueIds: ['v1'], start: '09:00', end: '09:30' },
  { id: 2, dayId: 0, title: 'Event 2', venueIds: ['v1', 'v2'], start: '10:00', end: '11:30' },
  { id: 3, dayId: 0, title: 'Event 3', venueIds: ['v3'], start: '9:45', end: '18:00' },

  // Tuesday
  { id: 3, dayId: 1, title: 'Event 3', venueIds: ['v3'], start: '09:45', end: '13:00' },

  // Wednesday
  { id: 4, dayId: 2, title: 'Event 4', venueIds: ['v4'], start: '16:45', end: '17:45' },
]
