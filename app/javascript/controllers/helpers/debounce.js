export const debounce = (callback, delay = 200) => {
  // store timer ID (undefined initially)
  let timeoutId 

  // returns a new function
  return () => {
    // clear any existing timers
    clearTimeout(timeoutId)

    // set the new timer
    timeoutId = setTimeout(() => callback(), delay)

    // return cleanup function (unsure on how this works or why it's needed?)
    return () => clearTimeout(timeoutId)
  }
}
