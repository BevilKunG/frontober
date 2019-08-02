let tutorialId = 0;

const showTutorialText = (id = 0) => {
  const tutorialText = document.getElementById('tutorial-text')
  tutorialText.innerText = textList[id]
}

const nextButton = document.getElementById('next-button')
const prevButton = document.getElementById('prev-button')

nextButton.addEventListener('click', () => {
  if(tutorialId+1 < textList.length) {
    tutorialId++
    showTutorialText(tutorialId)
  }
})

prevButton.addEventListener('click', () => {
  if(tutorialId-1 >= 0) {
    tutorialId--
    showTutorialText(tutorialId)
  }
})

showTutorialText(tutorialId)
