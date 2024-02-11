
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


let $ = (selector) => document.querySelector(selector);

profile = {
    email : "parthshah.ps921@gmail.com",
    contact : "+1 437-424-5838",
    gender : "Male",
    dob: "02 Oct 1997",
    address_1 : "12 garneau street,gihon spring drive ,ON, CA L4L1R1",
    address_2 : "22 finch street martin grove Road ON, CA L3L0M1",
    rewards : "You have 5$ joing rewards in your account",
    newsletter_subscription : "No",
    preferences : "SunGlasses, EyeGlasses, Lens"


}


// swet details programmatically from json on load the page
window.onload = function () {
 
      // document.getElementById("email").innerHTML  = 
      $('#email').append(profile.email)
      $('#contactNo').append(profile.contact)
      $('#gender').append(profile.gender)
      $('#dob').append(profile.dob)
      $('#address1').append(profile.address_1)
      $('#address2').append(profile.address_2)
      $('#rewards').append(profile.rewards)
      $('#newsletter_subscription').append(profile.newsletter_subscription)
      $('#preferences').append(profile.preferences)
   
}

