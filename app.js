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
