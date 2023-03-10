export function timeSince(date: Date) {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)

  let interval = seconds / 31536000

  if (interval > 1) {
    const i = Math.floor(interval)
    return i + ` year${i > 1 ? "s" : ""} ago`
  }
  interval = seconds / 2592000
  if (interval > 1) {
    const i = Math.floor(interval)
    return i + ` month${i > 1 ? "s" : ""} ago`
  }
  interval = seconds / 86400
  if (interval > 1) {
    const i = Math.floor(interval)
    return i + ` day${i > 1 ? "s" : ""} ago`
  }
  interval = seconds / 3600
  if (interval > 1) {
    const i = Math.floor(interval)
    return i + ` hour${i > 1 ? "s" : ""} ago`
  }
  interval = seconds / 60
  if (interval > 1) {
    const i = Math.floor(interval)
    return i + ` minute${i > 1 ? "s" : ""} ago`
  }
  return "Just now"
}
