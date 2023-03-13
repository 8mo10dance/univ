import listeners from 'listeners'

listeners.forEach((listener) => {
  document.addEventListener('DOMContentLoaded', listener)
})
