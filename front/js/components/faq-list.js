
$(document).ready(function () {
    const items = $('.faq_list__item');

    $('.faq_list__item__question').click(function (e) {
        e.preventDefault();

        const item = $(this).parents('.faq_list__item');
        const inactiveItems = items.not(item);

        inactiveItems.removeClass('active');
        inactiveItems.find('.faq_list__item__answer').slideUp();
        inactiveItems.find('.faq_list__item__question__arrow').each((i,el) => {
            const $el = $(el);
            $el.attr('src', $el.data('inactive-src'));
        });

        const $arrow = item.find('.faq_list__item__question__arrow');
        if (item.hasClass('active')) {
            item.removeClass('active');
            item.find('.faq_list__item__answer').slideUp();
            $arrow.attr('src', $arrow.data('inactive-src'));
        } else {
            item.addClass('active');
            item.find('.faq_list__item__answer').slideDown();
            $arrow.attr('src', $arrow.data('active-src'));
        }
    });
});