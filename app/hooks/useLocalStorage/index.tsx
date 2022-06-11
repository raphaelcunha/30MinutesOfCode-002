import React from 'react'

function getStorageValue(key: string, defaultValue: string) {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key)

    if (saved !== null) {
      return JSON.parse(saved) as string
    }

    return defaultValue
  }

  return undefined
}

export const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = React.useState(() => getStorageValue(key, defaultValue))

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
