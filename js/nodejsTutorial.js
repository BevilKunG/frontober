const routeName = document.getElementById('route')
const pathFile = document.getElementById('path-file')
const routeNameShow = document.getElementById('route-show')
const pathFileShow = document.getElementById('path-file-show')

routeName.addEventListener('input', () => {
  routeNameShow.innerText = routeName.value
})

pathFile.addEventListener('input', (value) => {
  console.log(value);
  pathFileShow.innerText = pathFile.value
})
