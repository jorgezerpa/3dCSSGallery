import './style.css'

const images = [
    { htmlElements: document.querySelectorAll('.cube__face--front img'), image: '/img1.jpg' },
    { htmlElements: document.querySelectorAll('.cube__face--back img'), image: '/img2.jpg' },
    { htmlElements: document.querySelectorAll('.cube__face--right img'), image: '/img3.jpg' },
    { htmlElements: document.querySelectorAll('.cube__face--left img'), image: '/img4.jpg' },
]

images.forEach(({ htmlElements, image }) => {
    htmlElements.forEach((htmlElement) => {
        htmlElement.setAttribute('src', image)
    })
})

const cubes:NodeListOf<HTMLDivElement> = document.querySelectorAll('.cube')
const buttonPrev:HTMLDivElement|null = document.querySelector('.scene .button__prev')
const buttonNext:HTMLDivElement|null = document.querySelector('.scene .button__next')

let currentRotation = 0

const rotateCubes = (direction:'prev'|'next') => {
    cubes.forEach((cube) => {
        cube.style.transition = `transform .5s`
        cube.style.transform = `translateZ(-150px) rotateY(${direction === 'prev' ? currentRotation - 10 : currentRotation + 10}deg)` // translateZ the middle of the cube width    
    })
    
    setTimeout(() => {
        cubes.forEach((cube, i) => {
                cube.style.transition = `transform 1s ${i * 0.1}s`
                cube.style.transform = `translateZ(-150px) rotateY(${direction === 'prev' ? currentRotation + 90 : currentRotation - 90}deg)` // translateZ the middle of the cube width
        })
        currentRotation = direction === 'prev' ? currentRotation + 90 : currentRotation - 90
    }, 500)
}

buttonPrev?.addEventListener('click', ()=>rotateCubes('prev'))
buttonNext?.addEventListener('click', ()=>rotateCubes('next'))



