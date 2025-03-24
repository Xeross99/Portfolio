const dateFormatter = new Intl.DateTimeFormat('pl-PL', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})

export function FormattedDate({ date, ...props }) {
  date = typeof date === 'string' ? new Date(date) : date

  return (
    <time dateTime={date.toISOString()} {...props}>
      {dateFormatter.format(date)}
    </time>
  )
}
