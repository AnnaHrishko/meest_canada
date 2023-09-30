$('.meest-canada-faq__wrapper .content').hide();
$('.meest-canada-faq__wrapper .accordion-sec').click(function() {
  $(this).toggleClass('active')
  $('.meest-canada-faq__wrapper .accordion-sec').not(this).removeClass('active')
  $('.meest-canada-faq__wrapper .accordion-sec').not(this).find('.content').slideUp()
  $(this).find('.content').slideToggle()
  return false;
});

$('.country-sec .content').hide();
$('.country-sec').click(function() {
  $(this).toggleClass('active')
  $('.country-sec').not(this).removeClass('active')
  $('.country-sec').not(this).find('.content').slideUp()
  $(this).find('.content').slideToggle()
  return false;
});

$(document).ready(function() {
    $('.select').select2();
});

$('.phone').each(function(){
    window.intlTelInput(this, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    separateDialCode: true,
});
})

// $(".select").select2().change(function() {
//     $(this).valid();
// });

if ($(".our_news_swiper").length > 0){
  $(document).ready(function(){
    const swiper = new Swiper('.our_news_swiper', {
  // Optional parameters
  
  loop: false,
  rewind: true,
  slidesPerView: 3.5,
  spaceBetween: 30,
  autoplay: {
  delay: 2000,
  },
  
  // If we need pagination
  pagination: {
   el: '.swiper-pagination',
  },
  
  // Navigation arrows
  navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
  },
  pagination: {
   el: ".swiper-pagination",
   type: "fraction",
  },
  scrollbar: {
   el: '.swiper-scrollbar',
   draggable: true,
  },
  breakpoints: {
   // when window width is >= 320px
   320: {
     slidesPerView: 1.2,
     spaceBetween: 15,
   },
   991: {
     slidesPerView: 3.5,
     spaceBetween: 30,
   },
  }
  
  });
  })
}

$(function() {
  $.validator.addMethod("emailRegex", function(value, element) {
      return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
  }, "");
});

$(function() {
  $(".form-promos").validate({
      rules: {
          "name": {
              required: true,
              minlength: 3,
          },
          "phone": {
              required: true,
              number: true,
          },
          "email": {
              required: true,
              emailRegex: true,
          },
          "province": {
              required: true,
          },
      },
      messages: {
          "name": {
              required: "Required field",
              minlength: "Enter your full name",
          },
          "phone": {
              required: "Required field",
              number: "Enter only number"
          },
          "email": {
              required: "Required",
              emailRegex: "Enter your full email",
          },
          "province": {
              required: "Required",
          },
      },
  });
});

$(function() {
  $(".form-promos2").validate({
      rules: {
          "name": {
              required: true,
              minlength: 3,
          },
          "phone": {
              required: true,
              number: true,
          },
          "email": {
              required: true,
              emailRegex: true,
          },
          "province": {
              required: true,
          },
      },
      messages: {
          "name": {
              required: "Required field",
              minlength: "Enter your full name",
          },
          "phone": {
              required: "Required field",
              number: "Enter only number"
          },
          "email": {
              required: "Required",
              emailRegex: "",
          },
          "province": {
              required: "Required",
          },
      },
  });
});

