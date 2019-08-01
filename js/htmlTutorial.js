let tutorialId = 0;

const codeEditor = () => {
  const html = document.getElementById('html')
  const code = document.getElementById('code').contentWindow.document
  document.body.onkeyup = () => {
    code.open()
    code.writeln(html.value)
    code.close()
  }
}

const htmlTutorialText = (id = 0) => {
  const tutorialText = document.getElementById('html-tutorial-text')
  tutorialText.innerText = textList[id]
}

const nextButton = document.getElementById('next-button')
const prevButton = document.getElementById('prev-button')

nextButton.addEventListener('click', () => {
  if(tutorialId+1 < textList.length) {
    tutorialId++
    htmlTutorialText(tutorialId)
  }
})

prevButton.addEventListener('click', () => {
  if(tutorialId-1 >= 0) {
    tutorialId--
    htmlTutorialText(tutorialId)
  }
})

codeEditor()
htmlTutorialText(tutorialId)
