$(document).ready(function(){$(".service_page__menu__item__title").click(function(){var e=$(this).parent(".service_page__menu__item");e.addClass("active");var _=e.find(".service_page__menu__item__submenu");_.slideDown(),$(".service_page__menu__item").not(e).removeClass("active"),$(".service_page__menu__item__submenu").not(_).slideUp()})});