
let $ = (selector) => document.querySelector(selector);

var modal = document.getElementById('id01');

// on window load giving validate details function
window.onload = function () {
  $('#login').onclick = loginValidate;
  $('#eye').onclick = passwordVisible;
  $('#email').onchange = valuesChange;
  $('#password').onchange = valuesChange;
 
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// go to home
function goToHome()
{
  window.location.href = "./screens/HomeScreen.html";
}


// handle signinbutton opacity
function valuesChange()
{
  let emailValFlag = emailValidate();
  let passCheck = valiatePassword();
  if (emailValFlag && passCheck) {
    $('#login').style.opacity = 1
  }
}

// handle password toggle
function passwordVisible(){
  this.classList.toggle("fa-eye-slash")
  const type = $('#password').getAttribute("type") === "password" ? "text" : "password"
  $('#password').setAttribute("type", type)
}
                    
  function loginValidate(e) {

    e.preventDefault();
   
    let emailValFlag = emailValidate();
    if (!emailValFlag) {
        document.getElementById('err-email').style.display = 'block';
    }
    
    let passCheck = valiatePassword();
    if (!passCheck) {
        document.getElementById('err-passwd').style.display = 'block';
    }
    
    if (emailValFlag && passCheck) {
      localStorage.setItem('email',document.getElementById('email').value)
      document.getElementById('id01').style.display='block'
    }else{
    
    }
}


//phone number validate
function emailValidate() {
   
    const ree = /\S+@\S+\.\S+/;
    let iemail = document.getElementById('email').value;
    if (ree.test(iemail)) {
        return true;
    }
    return false;
}

//password Validator
function valiatePassword() {
    if (document.getElementById('password').value.length != 0 ) {
        return true;
    }
    return false;
}

;


