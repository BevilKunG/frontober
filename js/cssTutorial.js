const codeEditor = () => {
  const css = document.getElementById('css')
  const code = document.getElementById('code').contentWindow.document
  const elements = '<h1>&lt;h1&gt;Red Text&lt;/h1&gt;</h1>' +
      '<h2 id="green">&lt;h2 id="green"&gt;Green Border&lt;/h2&gt;</h2>' +
      '<h3 class="blue">&lt;h3 class="blue"&gt;Blue Background&lt;/h3&gt;</h3>'
  code.open()
  code.writeln(elements)
  code.close()

  document.body.onkeyup = () => {
    code.open()
    code.writeln(`${elements}<style>${css.value}</style>`)
    code.close()
  }
}

codeEditor()
