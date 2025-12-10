export const SLOT_HEIGHT = 50 //px

export const START_TIME = '09:00'
export const END_TIME = '18:00'
export const STEP_MINUTES = 15

export const generateTimes = (start, end, stepMinutes) => {
  const result = []
  let [h, m] = start.split(':').map(Number)
  const [endH, endM] = end.split(':').map(Number)

  while (h < endH || (h === endH && m <= endM)) {
    const hh = String(h).padStart(2, '0')
    const mm = String(m).padStart(2, '0')
    result.push(`${hh}:${mm}`)
    m += stepMinutes
    if (m >= 60) {
      m -= 60
      h += 1
    }
  }

  return result
}
