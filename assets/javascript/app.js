const image = document.getElementById("image");
const images = [
  "./image/banner/banner1.jpg",
  "./image/banner/banner2.jpg",
  "./image/banner/banner3.jpg",
  "./image/banner/banner4.jpg",
];
setInterval(function () {
  const random = Math.floor(Math.random() * 4);
  image.src = images[random];
}, 3000);



// ==================clients=================
$('.brand-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 4
    }
  }
})
