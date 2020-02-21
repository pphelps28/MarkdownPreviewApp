let input = document.getElementById("input")
let body = document.getElementById("body")
input.addEventListener('keydown', () => {
    console.log(event.keyCode)
    console.log(input.value)
    if (event.keyCode === 13) {
        body.innerHTML = (marked(input.value))
        console.log(marked(input.value))
        input.value = ''
    }
})