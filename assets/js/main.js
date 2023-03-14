//creo array images

const images = [
    'https://www.themoviedb.org/t/p/original/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
    'https://www.themoviedb.org/t/p/original/AhifyrSNkRVFMJ94CEMfBv1FaMz.jpg',
    'https://www.themoviedb.org/t/p/original/1xO2UnWyxoyTrdvVDXW276LaHQc.jpg',
    'https://www.themoviedb.org/t/p/original/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg'
]

// selezione immagine attiva
let activeImage = 0

//seleziono immagine dom
const imagesElement = document.querySelector('.slider > .images')

// loop for ciclare immagini
for (let i = 0; i < images.length; i++) {
    const imgSrc = images[i];
    const imgElement = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="${imgSrc}" alt="">`
    console.log(imgElement);

    //insertAdjacentHTML
    imagesElement.insertAdjacentHTML('beforeend', imgElement)

    //innerHTML (option2)
    /* imagesElement.innerHTML += imgElement */

}

// select all slides
const slideImagesElements = document.querySelectorAll('.slider > .images > img')

// listen click next
const nextEl = document.querySelector('.next')
nextEl.addEventListener('click', function () {
    console.log('cliccato next')

    // select current slide
    const currentSlide = slideImagesElements[activeImage]
    console.log(currentSlide);

    // remove acrive class dreom the active image
    currentSlide.classList.remove('active');
    // incremento the value of the activeimage variable
    activeImage++;
    // select the next slide
    const nextImage = slideImagesElements[activeImage]
    // add the active class
    console.log(nextImage);
    nextImage.classList.add('active');
})

// listen click prev
const prevEl = document.querySelector('.prev')
prevEl.addEventListener('click', function () {
    console.log('cliccato prev')

    // select current slide
    const currentSlide = slideImagesElements[activeImage]
    console.log(currentSlide);

    // remove acrive class dreom the active image
    currentSlide.classList.remove('active');
    // incremento the value of the activeimage variable
    activeImage--;
    // select the next slide
    const nextImage = slideImagesElements[activeImage]
    // add the active class
    console.log(nextImage);
    nextImage.classList.add('active');
})







//ternary operator

/* if (condizione) {

} else {

}

condition ? '' : '' */