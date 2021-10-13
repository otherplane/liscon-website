import { formatISO, getTime } from 'date-fns'
import { zonedTimeToUtc, utcToZonedTime } from 'date-fns-tz'

export function convertTime12to24(time12h) {
  const [time, modifier] = time12h.split(' ')

  // eslint-disable-next-line
  let [hours, minutes] = time.split(':')

  if (hours === '12') {
    hours = '00'
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12
  }

  return `${hours}:${minutes}`
}

export function getTimestamp(day, time) {
  const [hour, min] = time.split(':')

  const date = new Date(
    2021,
    9,
    day,
    parseInt(hour) + 2,
    parseInt(min)
  ).getTime()

  const utcTime = utcToZonedTime(date, 'Europe/Lisbon')

  return getTime(utcTime)
}

export function generateGoogleCalendarUrl(event) {
  const { title, startTime, endTime, room, fullSpeaker } = event
  const startTimeTimestamp = getTimestamp(
    parseInt(event.day),
    convertTime12to24(startTime)
  )

  const endTimeTimestamp = getTimestamp(
    parseInt(event.day),
    convertTime12to24(endTime)
  )

  const utcTimeStart = formatISO(
    zonedTimeToUtc(startTimeTimestamp, 'Europe/Lisbon'),
    { format: 'basic' }
  )
  const utcTimeEnd = formatISO(
    zonedTimeToUtc(endTimeTimestamp, 'Europe/Lisbon'),
    { format: 'basic' }
  )

  const location =
    'LxFactory, R. Rodrigues de Faria 103, 1300-501 Lisboa, Portugal'

  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&location=${location}&dates=${utcTimeStart}%2F${utcTimeEnd}&details=Speaker: ${fullSpeaker}%0AStage: ${room}`
}
