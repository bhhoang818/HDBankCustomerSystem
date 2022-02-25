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
const customerSelect = () => {
    $('select').each(function () {
        var $this = $(this), numberOfOptions = $(this).children('option').length;
        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');
        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
            // if ($this.children('option').eq(i).is(':selected')) {
            //     $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
            // }
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').slideToggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.slideUp();
        });

    });
}
const handleClickSlide = () => {
    var handleClick = $('.history-list .history-list_header');
    var notification = $('header').find('.notification');
    console.log(notification);
    handleClick.on('click', () => {
        handleClick.toggleClass('active');
        handleClick.parent().find('.list-history').slideToggle();
    });
    notification.on('click', () => {
        $('header').find('.notification-wrapper').slideToggle();
    });
}

const tabsPanel = () => {
    $(".tabs-list > li").on("click", function () {
        let $panel = $(this).closest(".tabs");
        $panel.find("li.active").removeClass("active");
        $(this).addClass("active");
        let panelToShow = $(this).attr("rel");
        console.log(panelToShow);
        $panel.find(".panel.active").fadeOut(300, showNextPanel);

        function showNextPanel() {
            $(this).removeClass("active");
            $("#" + panelToShow).fadeIn(300, function () {
                $(this).addClass("active").fadeIn(300);
            });
        }

    });
}
$(document).ready(function () {
    startMarquee();
    focusContact();
    searchBox();
    customerSelect();
    handleClickSlide();
    tabsPanel();
    $("#progressbar-individualCustomer").progressbar({
        value: 3
    });
    $("#progressbar-bussinessCustomer").progressbar({
        value: 4
    });
})