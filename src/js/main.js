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
const searchBox = () => {
    $('.search-button ').on('click', function () {
        $('.search-container ').slideToggle();
    })
    $('.close-box').on('click', function () {
        $('.search-container ').slideUp();
    })
}


$(document).ready(function () {
    startMarquee();
    focusContact();
    searchBox();
    $("#progressbar-individualCustomer").progressbar({
        value: 3
    });
    $("#progressbar-bussinessCustomer").progressbar({
        value: 4
    });
})