let header = document.querySelector('#page-header')
header.style.textAlign = 'left'
let dogImages = document.querySelectorAll('.dog-image')
let dogNames = document.querySelectorAll('.dog-name')
let footer = document.querySelector('.footer')
footer.style.color = 'blue'
footer.style.borderStyle = 'solid'
for (let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.transform = 'rotate(180deg)'
}
for (let j = 0; j < dogNames.length; j++) {
    dogNames[j].style.textAlign = 'left'
}
// Select some elements...