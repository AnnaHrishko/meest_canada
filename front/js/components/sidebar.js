$(document).ready(function() {
    $('.service_page__menu__item__title').click(function() {
        let $accordionItem = $(this).parent('.service_page__menu__item');
        let $accordionContent = $accordionItem.find('.service_page__menu__item__submenu');
        if($accordionItem.hasClass('active')) {
            $accordionContent.slideUp(200);
            setTimeout(function () {
                $accordionItem.removeClass('active');
            }, 200)
        } else {
            $accordionContent.slideDown(200);
            $accordionItem.addClass('active');
        }
         
        // Close all accordion items except the clicked one
        $('.service_page__menu__item').not($accordionItem).removeClass('active');
        $('.service_page__menu__item__submenu').not($accordionContent).slideUp();
        
    });
});
