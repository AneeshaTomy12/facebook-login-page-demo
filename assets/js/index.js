$(document).ready(function () {
    $('#myform').submit(function (e) {
        e.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();
        $('.error').css("display", "none");
        if (email.length < 1) {
            $('.error').css("display", "block");
        }
        else {
            var regEx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var phnEx = /^[0-9]{10}$/;
            var validEmail = regEx.test(email) || phnEx.test(email);
        }
        if (!validEmail) {
            $('.error').css("display", "block");
        }
        if (password.length < 1) {
            $('.error').css("display", "block");
        }
        else {
            var passwordRegex = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
            var passvalidation = passwordRegex.test(password)
        }
        if (!passvalidation) {
            $('.error').css("display", "block");
        }
    });
});

