axios.get('/api/contributors')
  .then(({ data }) => {
    const { contributors } = data
    const list = document.getElementById('list')

    contributors.forEach( contributor => {
      const el = document.createElement('DIV')
      const link = document.createElement('A')
      const text = document.createTextNode(contributor.name)
      link.appendChild(text)
      link.setAttribute('href',contributor.url)
      link.setAttribute('class','contributor-text')

      el.appendChild(link)
      el.setAttribute('class', 'col-6 text-center mt-5')

      list.appendChild(el)
    })
  })
