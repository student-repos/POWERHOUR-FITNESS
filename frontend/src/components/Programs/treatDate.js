const options = { day: "numeric", month: "long", year: "numeric"}
const language = navigator.language // "de-DE"


export const treatDate = dates => {
  const entries = Object.entries(dates)
  return entries.reduce(( treatedDates, [ key, date ]) => {
    if (key.match(/^\w+Date$/i)) {
      const treated = new Date(date)
                      .toLocaleDateString(language, options)
      treatedDates[key] = treated
    }

    return treatedDates
  }, {})
}