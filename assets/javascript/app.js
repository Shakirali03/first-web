const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}



// ===========banner===============


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

  
$(function() {
  var $clientslider = $('#clientlogo');
  var clients = $clientslider.children().length;
  var clientwidth = (clients * 220); 
  $clientslider.css('width', clientwidth);
  var rotating = true;
  var clientspeed = 1800;
  var seeclients = setInterval(rotateClients, clientspeed);
  $(document).on({
    mouseenter: function() {
      rotating = false;
    },
    mouseleave: function() {
      rotating = true;
    }
  }, '#ourclients');
  function rotateClients() {
    if (rotating != false) {
      var $first = $('#clientlogo li:first');
      $first.animate({
        'margin-left': '-220px'
      }, 2000, function() {
        $first.remove().css({
          'margin-left': '0px'
        });
        $('#clientlogo li:last').after($first);
      });
    }
  }
});




// ===================================horizontal timeline on about us page=======
var vTimeline = document.getElementById("horizontal-timeline");

activation(hTimeline);

function activation(timeline) {
  var divs = timeline.getElementsByTagName("div");
  for (var i = 0; i < divs.length; i++) {
    if (
      divs[i].classList.contains("circle") ||
      divs[i].classList.contains("link")
    ) {
      divs[i].style.background = "#05A5D1";
      if (divs[i].classList.contains("activated")) {
        break;
      }
    }
  }
}

