
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






$(document).ready(() => {
    var moreId1 = true;
    var moreId2 = true;
    var moreId3 = true;

    $('#more1').click((e) => {
        if (moreId1) {
            $('#moreStr1')
                .next()
                .html('Page: Lenses, About us, Offer</br>Email:KuoRui@example.com')
                .css('margin-top', '20px')
                .css('padding-left', '20px')
                .css('text-align', 'left').show();
            moreId1 = false;
        } else {
            $('#moreStr1')
                .next()
                .hide();
            moreId1 = true;
        }
    });
    $('#more2').click((e) => {
        if (moreId2) {
            $('#moreStr2')
                .next()
                .html('Page: Login, Home, Profile</br>Email:parthshah.ps921@gmail.com')
                .css('margin-top', '20px')
                .css('padding-left', '20px')
                .css('text-align', 'left').show();
            moreId2 = false;
        } else {
            $('#moreStr2')
                .next()
                .hide();
            moreId2 = true;
        }
    });
    $('#more3').click((e) => {
        if (moreId3) {
            $('#moreStr3')
                .next()
                .html('Page: Signup, Order, Sunglass</br>Email:Shyam@example.com')
                .css('margin-top', '20px')
                .css('padding-left', '20px')
                .css('text-align', 'left').show();
            moreId3 = false;
        } else {
            $('#moreStr3')
                .next()
                .hide();
            moreId3 = true;
        }
    });


});