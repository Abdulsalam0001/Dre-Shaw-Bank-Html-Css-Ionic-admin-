function check(form) {
    /*the following code checkes whether the entered userid and password are matching*/
    if (form.username.value == "Paullutge00@gmail.com" && form.password.value == "pulgen@12") {
        swal("Good job!", "Please Wait while we login you in, Please note your account is restricted please contact support for help", "success");


        location.href = "./account/dashboard.html";
        event.preventDefault();
    }
    else if (form.username.value == "" && form.password.value == "") {
        swal("Please Confirm Login Details", "Please provide your correct username and password to access wallet", "warning");


        event.preventDefault();
    }



    else {
        swal("Sorry Try Again!", "We do not have any records of your wallet", "error");

        event.preventDefault();
        return false;


    }
}
var form = document.getElementById("form-id");
document.getElementById("your-id").addEventListener("click", function () {
    form.submit();
});
