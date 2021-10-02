export function getDate() {
  const [month, day, year] = new Date()
    .toLocaleString('en', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    })
    .split('/')

  return `${year}-${month}-${day}`
}
