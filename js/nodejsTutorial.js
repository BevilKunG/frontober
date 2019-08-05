const routeName = document.getElementById('route')
const pathFile = document.getElementById('path-file')
const routeCode = document.getElementById('route-code')
const copybutton = document.getElementById('copy-button')

const setRouteCode = (r, p) => {
  routeCode.value = `app.get('/${r}', (req, res) => {
    res.sendFile(path.join(__dirname + '/contribute/${p}'))
  })`
}

routeName.addEventListener('input', () => {
  setRouteCode(routeName.value, pathFile.value)
})

pathFile.addEventListener('input', () => {
  setRouteCode(routeName.value, pathFile.value)
})

setRouteCode('your-route-name', 'your-path-file')

copybutton.addEventListener('click', () => {
  routeCode.select()
  document.execCommand('copy')
})
