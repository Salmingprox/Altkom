
const images = document.querySelectorAll('img');
const bigImage = document.querySelector('#big-photo');

/* 1 */ images[0].addEventListener('click',function(){  
        const url = this.src;
        const bigUrl = url.replace('300','600').replace('200','700');
        const photo = document.createElement('img');
        photo.src = bigUrl;
        bigImage.append(photo);
});


/* 2 */ images[1].addEventListener('click',function() {
        const url1 = this.src;
        const bigUrl1 = url1.replace('300','600').replace('200','700');
        const photo1 = document.createElement('img');
        photo1.src = bigUrl1;
        bigImage.append(photo1);
});
/* 3 */ images[2].addEventListener('click',function() {
        const url2 = this.src;
        const bigUrl2 = url2.replace('300','600').replace('200','700');
        const photo2 = document.createElement('img');
        photo2.src = bigUrl2;
        bigImage.append(photo2)

});