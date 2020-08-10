const randomColor = () => {
    const color = Math.ceil(Math.random() * 256)
    return color
}
const rgb = () => {
    const r = randomColor()
    const g = randomColor()
    const b = randomColor()

    const body = document.body
    body.style.display = 'flex'
    body.style.alignItems = 'center'
    body.style.justifyContent = 'space-between'
    body.style.flexWrap = "wrap"
    body.style.margin = '0'
    body.style.padding = '0'
    const div = document.createElement('div')

    div.className = 'color'
    div.style.width = '15rem'
    div.style.height = '15rem'
    div.style.borderRadius = "50%"
    div.style.backgroundColor = `rgb(${r},${g},${b})`
    div.style.display = 'flex'
    div.style.alignItems = 'center'
    div.style.justifyContent = 'center'
    div.innerHTML = `rgb(${r},${g},${b})`
    div.style.fontSize = "1.5rem"
    div.style.transition = '.4s'

    body.appendChild(div)

}


const btn = document.createElement('button')
btn.innerHTML = "generate"
btn.style.display = "block"
btn.style.position = 'sticky'
btn.style.left = '50%'
btn.style.top = '50px'
btn.style.width = "15rem"
btn.style.height = '5rem'
btn.style.borderRadius = '5%'
btn.style.fontSize = "1.5rem"
btn.style.transform = 'translate(-50%,-50%)'
const body = document.body
body.appendChild(btn)

btn.addEventListener('click', () => {
    rgb()  
})








