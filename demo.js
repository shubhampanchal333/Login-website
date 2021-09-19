var clevertap
{
clevertap.onUserLogin.push = function () {
    Logindata = {
        "Name": $("#name").val(),
        "Email": $("#email").val(),
        "Phone": $("#ph_no").val(),
        "DOB": $("#dob").val()
    }

    return Logindata;
}

$(document).ready(function () {
    $("#login_btn").click(function () {
        userData = clevertap.onUserLogin.push();
        console.log(userData);
    })
})

clevertap.profile.push = function () {
    Profiledata = {
        "Name": $("#name").val(),
        "Email": $("#email").val(),
        "Phone": $("#ph_no").val(),
        "DOB": $("#dob").val()
    }

    return Profiledata;
}

$(document).ready(function () {
    $("#Profile").click(function () {
        userData = clevertap.profile.push();
        console.log(userData);
    })
})

sessionStorage.setItem('key', 'value');
let data = sessionStorage.getItem('key');
sessionStorage.removeItem('key');
sessionStorage.clear();

clevertap.event.push("Website Viewed");
}