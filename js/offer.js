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



"use strict";
$(document).ready(() => {
    // init
    let seedetA = false;
    let seedetB = false;
    let seedetC = false;
    reset();

    // detail
    $('#seedetA').click(() => {
        seedetA = detailShow(seedetA, ".detailsA");
    });
    $('#seedetB').click(() => {
        seedetB = detailShow(seedetB, ".detailsB");
    });
    $('#seedetC').click(() => {
        seedetC = detailShow(seedetC, ".detailsC");
    });

    function detailShow(seedet, idName) {
        if (seedet) {
            $(idName).hide();
            $(".arrow-dwn").show();
            $(".arrow-up").css('display', 'none')
                .hide();
            return false;
        } else {
            $(idName).show();
            $(".arrow-dwn").hide();
            $(".arrow-up").css('display', 'inline-block')
                .show();
            return true;
        }
    }
    // detail

    function reset() {
        $("#email-dialog").hide();
        $("#email-dialog-err").hide();
        $("#email-msg").hide();
        $("#email-msg-err").hide();
        $("#email-msg").text('');
        $("#email-msg-err").text('');
        $('#email-coupon').val('');
        $("#email-msg-err").text('');
    }

    // click
    $('#cancle-popup').click(() => {
        // reset
        reset();
        $(".little-popup").show();
        $(".popup-wrapper").hide();
    });
    $('#coupon-subscribe').click(() => {
        $("#email-msg-err").text('');
        let email = $('#email-coupon').val();
        let emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        // console.dir(emailPattern);
        if (email === '') {
            $("#email-dialog-err").show();
            $("#email-msg-err").show();
            $("#email-msg-err").text('Please enter your email')
                .css('padding-left', '10%')
                .css('padding-right', '10%')
                .css('color', 'red');
        } else if (!emailPattern.test(email)) {
            $("#email-dialog-err").show();
            $("#email-msg-err").show();
            $("#email-msg-err").text('Please enter right email format')
                .css('padding-left', '10%')
                .css('padding-right', '10%')
                .css('color', 'red');
        } else {
            $("#email-dialog").show();
            $("#email-msg").show();
            $("#email-msg").text(email).css('color', 'red')
        }

    });
    $('.coupon-icon').click(() => {
        $(".popup-wrapper").show();
        $(".little-popup").hide();
    });

});