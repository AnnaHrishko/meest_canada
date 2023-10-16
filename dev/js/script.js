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



$('.top_news_canada .item_menu_navigations').click(function(){
  $(this).addClass("active")
  $('.top_news_canada .item_menu_navigations').not(this).removeClass('active')
  let index = $(this).attr("item-tag") 
  $(".faq_wrap").fadeOut(0)
  $('.wrap' + index).fadeIn(200);
   if (index == 1) {
     $(".faq_wrap").fadeIn(200)
   }
  return false
})

// jQuery(function($){
//   $(".phone").mask("(999) 999-9999",{placeholder:"(000) 000-0000"}, {autoclear: true});
// });

$(document).ready(function(){
  $('.phone').mask('000-000-000',{placeholder:"000-000-000"}, {autoclear: true});
});

$(document).ready(function(){
  function setCurrency (currency) {
	  if (!currency.id) { return currency.text; }
		var $currency = $('<span>' + currency.element.value + " " + currency.text + '</span>');
		return $currency;
	};
	$(".language-select").select2({
		// placeholder: "What currency do you use?", //placeholder
		templateResult: setCurrency,
		templateSelection: setCurrency
	});
})


if ($(".our_news_swiper").length > 0){
  $(document).ready(function(){
    const swiper = new Swiper('.our_news_swiper', {
  // Optional parameters
  
  loop: false,
  rewind: true,
  slidesPerView: 3.2,
  spaceBetween: 30,
  autoplay: true,
  
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
  $(".form-promos1").validate({
      rules: {
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
          "province": {
              required: true,
          },
          "pr_policy": {
            required: true,
          }
      },
      messages: {
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
              emailRegex: "Enter your full email",
          },
          "province": {
              required: "Required",
          },
          "pr_policy": {
            required: "Required",
          }
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
              minlength: 11,
          },
          "email": {
              required: true,
              emailRegex: true,
          },
          "province": {
              required: true,
          },
          "pr_policy": {
            required: true,
          }
      },
      messages: {
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
              emailRegex: "",
          },
          "province": {
              required: "Required",
          },
          "pr_policy": {
            required: "Required",
          }
      },
  });
});

