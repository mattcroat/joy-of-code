type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(
	date: string,
	dateStyle: DateStyle = 'medium',
	locales = 'en'
) {
	return new Intl.DateTimeFormat(locales, { dateStyle }).format(new Date(date))
}
