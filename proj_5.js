var pic = document.getElementsByClassName('photo')
const photos = [...pic]
console.log(photos)

    
        photos.forEach(function(photo) {
        photo.style.display="none";
        
        slideIndex++;
        if(slideIndex > photos.length) {slideIndex = 1}
        photos[slideIndex-1].style.display = "block";
        setTimeout(slides,4000);
    });

