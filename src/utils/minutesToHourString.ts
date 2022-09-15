export const minutesToHourString = (minutesAmount: number) => {
  const hours = String(Math.floor(minutesAmount / 60))
  const minutes = String(minutesAmount % 60)

  const hourString = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`

  return hourString
}
