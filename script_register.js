function check_input() {
    let company_name = document.getElementById("company_name");
    let boot_size = document.getElementById("boot_size");
    let chair = document.getElementById("chair");
    let register_name = document.getElementById("register_name");
    let tel_register = document.getElementById("tel_register");

    var label = document.getElementById("alert_company_name");
    if (company_name.value == "") {
        label.innerHTML = "Please Enter Your Company Name";
    } else {
        label.innerHTML = "";
    }

    label = document.getElementById("alert_boot_size");
    if (boot_size.value == "default") {
        label.innerHTML = "Please Choose Your Boot Size";
    } else {
        label.innerHTML = "";
    }

    label = document.getElementById("alert_chair");
    if (chair.value == "") {
        label.innerHTML = "Please Enter Number of Chairs";
    } else if (chair.value < 1 || chair.value > 10 || isNaN(chair.value)) {
        label.innerHTML = "Please Enter Number Between 1-10";
    } else {
        label.innerHTML = "";
    }

    label = document.getElementById("alert_name")
    if (register_name.value == "") {
        label.innerHTML = "Please Enter Your Name";
    } else {
        label.innerHTML = "";
    }

    label = document.getElementById("alert_tel");
    if (tel_register.value == "") {
        label.innerHTML = "Please Enter Your Telephone Number";
    } else {
        label.innerHTML = "";
    }

}