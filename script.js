document.getElementById("submit").addEventListener('click', function () {
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let email = document.getElementById('email').value
    let msg = document.getElementById('msg').value
    let radio_gen = document.getElementById('gen')
    let radio_sup = document.getElementById('sup')
    let check_box = document.getElementById('chk')
    const emailreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // console.log(fname)


    if (check_empty(fname) == true) {
        document.getElementById('ferror').style.display = 'block'
        document.getElementById('fname').style.border = '1px solid red'
    }
    else {
        document.getElementById('ferror').style.display = 'none'
        document.getElementById('fname').style.border = ' 1px solid hsl(169, 82%, 27%)'
    }
    if (check_empty(lname) == true) {
        document.getElementById('lerror').style.display = "block"
        document.getElementById('lname').style.border = '1px solid red'
    }
    else {
        document.getElementById('lerror').style.display = 'none'
        document.getElementById('lname').style.border = ' 1px solid hsl(169, 82%, 27%)'
    }

    const test = emailreg.test(email)

    if (check_empty(email) == true || test == false) {
        document.getElementById('eemail').style.display = 'block'
        document.getElementById('email').style.border = '1px solid red'
    }
    else {
        document.getElementById('eemail').style.display = 'none'
        document.getElementById('email').style.border = ' 1px solid hsl(169, 82%, 27%)'
    }

    if (check_empty(msg) == true) {
        document.getElementById('emsg').style.display = 'block'
        document.getElementById('msg').style.border = '1px solid red'
    }
    else {
        document.getElementById('emsg').style.display = 'none'
        document.getElementById('msg').style.border = ' 1px solid hsl(169, 82%, 27%)'
    }

    if (radio_gen.checked != true && radio_sup.checked != true) {
        document.getElementById('radio_error').style.display = 'block'
    }
    else {
        document.getElementById('radio_error').style.display = 'none'

    }

    if (check_box.checked != true) {
        document.getElementById('check_error').style.display = 'block'
    }
    else {
        document.getElementById('check_error').style.display = 'none'
    }


    if (!check_empty(fname) && !check_empty(lname) && (!check_empty(email) && test == true) && !check_empty(msg) && (radio_gen.checked || radio_sup.checked) && check_box.checked) {
        document.getElementById('success').style.display = 'block'
        console.log("successfull")
    }
    function check_empty(val) {
        if (val.trim() == '') {
            return true
        }
    }
})