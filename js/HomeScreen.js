
let itemList = [
  {
    img_src : "../assets/images/glasses/g14.webp",
    prod_desc : "Ray-Ban - Classic",
    price : "60$"
},
{
    img_src : "../assets/images/glasses/g14.webp",
    prod_desc : "Ray-Ban - Retro",
    price : "100$"

},
{
    img_src : "../assets/images/glasses/g14.webp",
    prod_desc : "Oakley - Classic",
    price : "120$"
},

{
    img_src : "../assets/images/glasses/g16.webp",
    prod_desc : "Oakley - Classic",
    price : "123$"
},

{
    img_src : "../assets/images/glasses/g17.webp",
    prod_desc : "Oakley - Classic",
    price : "220$"
},

{
    img_src : "../assets/images/glasses/g18.webp",
    prod_desc : "Oakley - Classic",
    price : "124$"
}

]

// setting details on run-time

window.onload = function () {
      let container = document.getElementById('mainbox');
      let items = "";
     
      for (let i = 0; i <itemList.length - 1; i++) {

        var item= itemList[i];
        items += `  <div class="rowContainer">
        <div class="colContainer">
          <div class="img_container">
            <img src="${item.img_src}" id="myImg" onclick="openModal();currentSlide(1)">
          </div>
          <div class="glass_text">
            <h1>${item.prod_desc}</h1>
          </div>
          <div class="price_box">
            <p>50$ </p>
            <button id="addToCartButton" class="addToCart" onclick="">Add To Cart</button>
            <img id="wishList" src="../assets/images/wishlist.png" onclick="changeImage()"/>
          </div>
        </div>
      </div>`   
      }  
      // container.innerHTML = items;
}


// Handling events of click buttons

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

// open image click zoom model

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let myImagesArray = [
  '../assets/images/ads/ad2.webp',
  '../assets/images/ads/ad10.webp',
  '../assets/images/ads/ad9.webp',
  '../assets/images/ads/ad10.webp',
];

// Section 2 -------------------------------------------------
//make an automatic slide to display the images
let ImageNumber = 0;
let difference = myImagesArray.length - 1;

let delay = 2000; //milliseconds    1sec=1000milliseconds

setInterval('ChangeImages(1)', delay);
//-1 to show the slide backwards
//1 to show the slide forwards

function ChangeImages(direction) {
  //begin function

  ImageNumber = ImageNumber + direction;

  if (ImageNumber > difference) {
    ImageNumber = 0;
  } 

  if (ImageNumber < 0) {
    ImageNumber = difference;
  } 
  document.getElementById('slideshow').src = myImagesArray[ImageNumber];
} //end function

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// show ads slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}


// change images of wishlist
function changeImage() {
  if (document.getElementById("wishList").src == "http://127.0.0.1:5501/assets/images/wishlist.png") {
    document.getElementById("wishList").src = "http://127.0.0.1:5501/assets/images/filled_wishlist.png";
  } else {
    document.getElementById("wishList").src = "http://127.0.0.1:5501/assets/images/wishlist.png";
  }
}




 

