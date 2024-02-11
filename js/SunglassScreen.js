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

  


  console.log("hello");

window.onload=starter;
//sungalsses array
let sunLi=[
    {
        link:"../assets/images/same1.jpg",
        spec:"Galaxy Eyewear ",
        price:145
    },
    {
        link:"../assets/images/same14.jpg",
        spec:"Prada",
        price:99
    },
    {
        link:"../assets/images/same13.jpg",
        spec:"Eyestar Optical",
        price:78
    },
    {
        link:"../assets/images/same12.jpg",
        spec:"Tom Ford",
        price:75
    },
    {
        link:"../assets/images/same11.jpg",
        spec:"Maui Jim",
        price:95
    },
    {
        link:"../assets/images/same10.jpg",
        spec:"Good Vibrations",
        price:105
    }
];
// limited edition array
let limEdi=[
    {
        link:"../assets/images/same1.jpg",
        spec:"Good Vibrations",
        price:125
    },
    {
        link:"../assets/images/same2.jpg",
        spec:"Ray-Ban",
        price:142
    },
    {
        link:"../assets/images/same3.jpg",
        spec:"Oakley",
        price:85
    },
    {
        link:"../assets/images/same4.jpg",
        spec:"Good Vibrations",
        price:75
    },
    {
        link:"../assets/images/same5.jpg",
        spec:"Maui Jim",
        price:95
    },
    {
        link:"../assets/images/same6.jpg",
        spec:"Good Vibrations",
        price:145
    }
];
//all time hit
let allTimeHit=[
    {
        link:"../assets/images/same1.jpg",
        spec:"Galaxy Eyewear",
        price:45
    },
    {
        link:"../assets/images/same2.jpg",
        spec:"Maui Jim",
        price:142
    },
    {
        link:"../assets/images/same3.jpg",
        spec:"Oakley",
        price:85
    },
    {
        link:"../assets/images/same4.jpg",
        spec:"Good Vibrations",
        price:75
    },
    {
        link:"../assets/images/same5.jpg",
        spec:"Maui Jim",
        price:95
    },
    {
        link:"../assets/images/same6.jpg",
        spec:"Good Vibrations",
        price:145
    }
]
function starter(){
    // loading limitedEdition glasses
    {
    let le=document.getElementById("limited-edition");
    let temp="";
    limEdi.forEach(function(item){
        temp+=`<span  class="img-link">
        <figure>
          <img src="${item.link}" alt="" class="popular-list-img">
          <buttton><i class="fa-regular fa-heart  heart-icon"></i></buttton>
          
          <p class="glass-specification">${item.spec}</p>
          <p class="glass-specification-price">Price : $${item.price}</p>
          
       
          </div>
          
          
          </figure>
      </span>`
    });
    le.innerHTML=temp;
    }
    //loading sunglasses
    {
        let le=document.getElementById("sunglasses-list");
        let temp="";
        sunLi.forEach(function(item){
            temp+=`<span  class="img-link">
            <figure>
              <img src="${item.link}" alt="" class="popular-list-img">
              <buttton><i class="fa-regular fa-heart  heart-icon"></i></buttton>
              <p class="glass-specification">${item.spec}</p>
              <p class="glass-specification-price">Price : $${item.price}</p>
              
              </figure>
          </span>`
        });
        le.innerHTML=temp;
    }
    //loading all hit list
    {
        let le=document.getElementById("allhit-list");
        let temp="";
        allTimeHit.forEach(function(item){
            temp+=`<span  class="img-link">
            <figure>
              <img src="${item.link}" alt="" class="popular-list-img">
              <buttton><i class="fa-regular fa-heart  heart-icon"></i></buttton>
              <p class="glass-specification">${item.spec}</p>
              <p class="glass-specification-price">Price : $${item.price}</p>
              
            </figure>
          </span>`
        });
        le.innerHTML=temp;
    }


}

//for pop up image
$(document).on('dblclick','.img-link',enLarge);
$(document).on('click','.closebtn',undoEnLarge);
$(document).on('click','.heart-icon',addWishList);
function enLarge(e){
    
    let img=e.target;
    let link=$(img).attr('src');
    
    $('#bigImage').attr('src',link);
    $('#show_image_popup').show();
}
function undoEnLarge(){
    $('#show_image_popup').hide();
}
//for toggle wish list color
function addWishList(e){
    let icon=e.target;
    if(icon.classList.contains('fa-solid')){
        icon.classList.remove('fa-solid');
    }
    else{
        icon.classList.add('fa-solid');
    }
}