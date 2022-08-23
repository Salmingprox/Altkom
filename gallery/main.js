
const images = document.querySelectorAll('img');
const bigImage = document.querySelector('#big-photo');


function renderPhoto(photo){
    bigImage?.firstElementChild?.remove();
        bigImage?.append(photo);
}
function handleClickOnImage(){
    const url = this.src;
        const bigUrl = url.replace('300','600').replace('200','700');
        const photo = document.createElement('img');
        photo.src = bigUrl;
        renderPhoto(photo)
}

images.forEach(function (image){
    images.addEventListener('click',handleClickOnImage);
})
/* 1 */ images[0].addEventListener('click',handleClickOnImage);
/* 2 */ images[1].addEventListener('click',handleClickOnImage);
/* 3 */ images[2].addEventListener('click',handleClickOnImage);