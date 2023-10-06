export const splitDate = (date) => {
  const newDate = new Date(date)
  return newDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
  })
}

export const formatRoute = (text) => {
  let formattedText = text.toLowerCase()
  formattedText = formattedText.replace(/\s+/g, '-')
  formattedText = formattedText.replace(/[^a-z0-9-]/g, '')

  return formattedText || null
}

export const scrollToTop = () => {
  if (process.client) {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }
}

export const checkEmptyVar = (text) => text && text.trim() !== ''
