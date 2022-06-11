export const capitalize = (value: string) =>
  value
    .split(' ')
    .map(v =>
      v.length > 2 ? v.charAt(0).toUpperCase() + v.slice(1).toLowerCase() : v.toLowerCase()
    )
    .join(' ')
