import darkmode from "./main";

; (() => {
  const dark = new darkmode()

  let switcher = false

  setInterval(() => {
    !switcher ? dark.turnOn() : dark.turnOff()
    switcher = !switcher
  }, 2000);
})()



