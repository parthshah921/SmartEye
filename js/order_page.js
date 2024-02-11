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



let orderList = [
    {
        img_src: "../assets/images/glass_type_1.PNG",
        prod_desc: "Clearly Basics Stephenville-54",
        prod_details: "Lightweight and comfortable fit",
        price: 100,
        quantity: 1,

    },
    {
        img_src: "../assets/images/glass_type_2.PNG",
        prod_desc: "Derek Cardigan Kallichore-53",
        prod_details: "adjustable nose pads",
        price: 100,
        quantity: 1,

    },
    {
        img_src: "../assets/images/glass_type_3.PNG",
        prod_desc: "Clearly Basics Pickle Lake-54",
        prod_details: "Made of acetate",
        price: 120,
        quantity: 5,

    }
]
window.onload = function () {

    // showinng list method
    function showList() {
        let container = document.getElementById('order-list');
        let items = "";
        for (let i = 0; i < orderList.length; i++) {
            items += `<li class="order-item">
            <div class="item-name-photo">
                <figure><img src="${orderList[i].img_src}" alt="" class="small-image"></figure>
                <div class="product-detail">
                    <h5>${orderList[i].prod_desc}</h5>
                    <p>${orderList[i].prod_details}</p>
                </div>
            </div>

            <div>
                <p>price : ${orderList[i].price} </p>
                <p>Qty :${orderList[i].quantity} <button id="additem-${i}"  class="addbtn">+</button><button class="removebtn"id="removeitem-${i}">-</button></p>
            </div>
            <button id="removeitem-${i}" class="removeitem">removeitem</button>
        </li>`;
        }

        
        container.innerHTML = items;
        totalAmmount();
    }


    // method to add quantity
    function addQunatity(e) {
        console.log("add");
        let index = e.target.id.substring(8);
        orderList[index].quantity = orderList[index].quantity + 1;
        showList();
    }
    // method to removeQunatity
    function removeQunatity(e) {
        let index = e.target.id.substring(11);
        if (orderList[index].quantity > 1) {
            orderList[index].quantity = orderList[index].quantity - 1;
            showList();
        }

    }
    // remove item from list
    function removeItem(e) {
        let index = e.target.id.substring(11);
        orderList.splice(index, 1);
        showList();
    }
    //showing total amount method
    function totalAmmount() {
        let list = document.getElementById('order-list').nextElementSibling;
        let total = 0;
        for (let i = 0; i < orderList.length; i++) {
            total += orderList[i].price * orderList[i].quantity;
        }
        list.innerHTML = `SubTotal : ${total}`;

        let tax = document.getElementById('tax');
        let taxAmount = (total * 0.13).toFixed(2);
        tax.innerHTML = `Tax : ${taxAmount}`;
        total += total * .13;
        document.getElementById('total').innerHTML = `Total :${total} `;

    }
    // image enlarge method
    function enLargeImage(e) {
        let path = $(e.target).attr('src');
        console.log($('#show_image_popup'));
        $('#pop-up').attr('src', path);
        $('#show_image_popup').show();
        // $('#show_image_popup').focus();
        // $(window).scrollTop(0);
    }
    function undoEnLarge() {
        console.log("close");
        $('#show_image_popup').hide();

    }
    showList();
    $(document).on("click", ".addbtn", addQunatity);
    $(document).on("click", ".removebtn", removeQunatity);
    $(document).on("click", ".removeitem", removeItem);
    $(document).on("dblclick", ".small-image", enLargeImage);
    $(document).on('click', ".closebtn", undoEnLarge);
}