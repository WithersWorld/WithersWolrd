window.onload = function() {
    $('.group').on('click', function() {
        $(this+'.groupArticles').toggle();
    })
};