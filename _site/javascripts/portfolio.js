/*
$(document).ready(function () {
    // console.log('here');
    $('a.gallery-link').colorbox();
});
*/

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
