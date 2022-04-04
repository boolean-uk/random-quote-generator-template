const cardElement = document.querySelector(".card")
const quoteElement = document.querySelector(".quote")
const imageElement = document.querySelector(".image")
const buttonElement = document.querySelector(".button")

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

function randomImageFilePath() {
  const randomNumber = Math.floor(Math.random() * 10) + 1
  return `url(./assets/images/Cat${randomNumber}.png)`
}

function randomColour() {
  return `#${colours[Math.floor(Math.random() * colours.length)]}`
}

function changeQuote() {
  const textElement = document.createElement("p")
  const authorElement = document.createElement("p")
  const quote = randomQuote()

  textElement.innerText = `"${quote.text}"`
  authorElement.innerText = quote.author
  authorElement.style.fontWeight = "bold"

  imageElement.style.backgroundImage = randomImageFilePath()
  cardElement.style.backgroundColor = randomColour()

  quoteElement.innerHTML = ""
  quoteElement.appendChild(textElement)
  quoteElement.appendChild(authorElement)
}

window.addEventListener("load", () => {
  changeQuote()
})

buttonElement.addEventListener("click", () => {
  changeQuote()
})
