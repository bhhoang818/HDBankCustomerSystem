const startMarquee = () => {
    $('.marquee_text').marquee({
        direction: 'left',
        duration: 15000,
        gap: 8,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true
    });
}
const focusContact = () => {
    $('.input').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })
}
$(document).ready(function () {
    startMarquee();
    focusContact();
})