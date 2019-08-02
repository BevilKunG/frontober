const codeEditor = () => {
  const html = document.getElementById('html')
  const code = document.getElementById('code').contentWindow.document
  document.body.onkeyup = () => {
    code.open()
    code.writeln(html.value)
    code.close()
  }
}



codeEditor()
