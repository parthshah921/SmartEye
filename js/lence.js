
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openCartPage() {
  window.location.href = "../screens/order_page.html";
}

function openProfilePage() {
  window.location.href = "../screens/ProfileFile.html";
}

function openWishListPage() {
  window.location.href = "../screens/order_page.html";
}

function openHelpPage() {
  window.location.href = "../screens/aboutus.html";
}



'use strict';
$(document).ready(() => {
  let nextSlide = $('#slides img:first-child');

  // start slide show
  setInterval(() => {
    $('#caption').fadeOut(5000);
    $('#slide').fadeOut(5000, () => {
      if (nextSlide.next().length == 0) {
        nextSlide = $('#slides img:first-child');
      } else {
        nextSlide = nextSlide.next();
      }
      const nextSlideSource = nextSlide.attr('src');
      const nextCaption = nextSlide.attr('alt');
      $('#slide').attr('src', nextSlideSource).fadeIn(5000);
      $('#caption').text(nextCaption).fadeIn(5000);
    }); // end fadeOut()
  }, 3000); // end setInterval()
});