$('.top-wrapper__text').each(function() {
    let $pTag = $(this).find('p');
    if($pTag.text().length > 200){
        let shortText = $pTag.text().substring(0, 200);
        let btn = $(this).find('.see-more-btn');
        btn.remove();
        $pTag.addClass('fullArticle').hide();
        $(this).append('<p class="preview">'+shortText+'</p>');
        $(this).append(btn);
    } else {
      $(this).find('.see-more-btn').hide();
    }
});
  
$( ".see-more-btn" ).on('click', function(e) {
    e.preventDefault();
    $(this).parent().find($('.preview')).hide();
    $(this).parent().find($('.fullArticle')).show(); 
    $(this).hide()
});