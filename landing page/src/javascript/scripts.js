const myObserver = new IntersectionObserver ((entries) => {
    console.log(entries)
})

const elements = document.querySelectorAll ('menu')

elements.forEach ((element) => myOserver.observe (element))