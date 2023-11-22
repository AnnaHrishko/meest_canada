// $('.service_page__menu__item ').click(function(){
//     $(this).toggleClass('active')
//     // $('.service_page__menu__item ').not(this).slideUp().removeClass('active')
//     // $(this).slideDown().addClass('active')
// });

// $(document).ready(function() {
//     $('.accordion-header').click(function() {
//         var $accordionItem = $(this).parent('.accordion-item');
//         var $accordionContent = $accordionItem.find('.accordion-content');
        
//         // Close all accordion items except the clicked one
//         $('.accordion-item').not($accordionItem).removeClass('active');
//         $('.accordion-content').not($accordionContent).slideUp();
        
//         // Toggle active class and slide content
//         $accordionItem.toggleClass('active');
//         $accordionContent.slideToggle();
//     });
// });


$(document).ready(function() {
    $('.service_page__menu__item__title').click(function() {
        var $accordionItem = $(this).parent('.service_page__menu__item');
        $accordionItem.addClass('active');
        var $accordionContent = $accordionItem.find('.service_page__menu__item__submenu');
        $accordionContent.slideDown();
         // Toggle active class and slide content
        
         
        // Close all accordion items except the clicked one
        $('.service_page__menu__item').not($accordionItem).removeClass('active');
        $('.service_page__menu__item__submenu').not($accordionContent).slideUp();
        
       
    });
});

{/* <div class="accordion-item">
        <div class="accordion-header">Section 1</div>
        <div class="accordion-content">
            <p>Content for Section 1</p>
        </div>
    </div> */}