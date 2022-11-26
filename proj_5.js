// var pic = document.getElementsByClassName('photo')
// const photos = [...pic]
// console.log(photos)

    
//         photos.forEach(function(photo) {
//         photo.style.display="none";
        
//         slideIndex++;
//         if(slideIndex > photos.length) {slideIndex = 1}
//         photos[slideIndex-1].style.display = "block";
//         setTimeout(slides,4000);
//     });

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
};