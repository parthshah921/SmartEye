{
    window.onload = starter;
    // starter method 
    function starter() {
        let submitBtn = document.getElementById('signup-btn');
        submitBtn.addEventListener('click', validate);

    }
    // validate method to check all data format
    function validate(e) {
        e.preventDefault();
        let nameValFlag = validateName();
        if (!nameValFlag) {
            document.getElementById('err-name').style.display = 'block';
        }
        let phoneVal = phoneNoValidate();
        if (!phoneVal) {
            document.getElementById('err-mob').style.display = 'block';
        }
        let passCheck = valiatePassword();
        if (!passCheck) {
            document.getElementById('err-pass').style.display = 'block';
        }
        let dobVal = validateDob();
        if (!dobVal) {
            document.getElementById('err-dob').style.display = 'block';
        }
        if (nameValFlag && phoneVal && passCheck && dobVal) {
            alert("your account is created");
            location.reload();
        }

    }

    // name validate method
    function validateName() {
        let fName = document.getElementById("firstname").value;
        let lname = document.getElementById("lastname").value;
        if (fName.length == 0 || lname.length == 0) {
            return false;
        }
        return true;
    }
    //phone number validate
    function phoneNoValidate() {
        const rem = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;;
        const ree = /\S+@\S+\.\S+/;
        let iemail = document.getElementById('email').value;
        if (rem.test(iemail)) {
            return true;
        }
        if (ree.test(iemail)) {
            return true;
        }
        return false;
    }
    //dob validator method
    function validateDob() {
        let idob = document.getElementById('dob').value;
        if (idob == '') {
            return false;
        }
        return true;
    }
    //password Validator
    function valiatePassword() {
        if (document.getElementById('password').value == document.getElementById('rpassword').value && document.getElementById('password').value.length != 0 || document.getElementById('rpassword').value.length != 0) {
            return true;
        }
        return false;
    }

}