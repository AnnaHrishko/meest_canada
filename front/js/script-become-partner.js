


$(document).ready(function() {
    $('.select').select2();
});
$(document).on('change', '.select', function() {
  $(this).valid();
});


$(function() {
    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "");
  });
$(function() {
    $(".form-become-partner").validate({
        rules: {
            "represent": {
                required: true,
            },
            "looking-for": {
                required: true,
            },
            "location": {
                required: true,
            },
            "name": {
                required: true,
                minlength: 3,
            },
            "phone": {
                required: true,
                minlength: 11,
            },
            "email": {
                required: true,
                emailRegex: true,
            },
            "pr-policy-partner": {
              required: true,
            }
        },
        messages: {
            "represent": {
                required: "Required",
            },
            "looking-for": {
                required: "Required",
            },
            "location": {
                required: "Required",
            },
            "name": {
                required: "Required field",
                minlength: "Enter your full name",
            },
            "phone": {
                required: "Required field",
                minlength: "Enter your full phone number",
            },
            "email": {
                required: "Required",
                emailRegex: "Enter full email",
            },
            "pr-policy-partner": {
              required: "Required",
            }
        },
    });
  });