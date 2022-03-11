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
    handleClick.on('click', () => {
        handleClick.toggleClass('active');
        handleClick.parent().find('.list-history').slideToggle();
    });
    notification.on('click', () => {
        $('header').find('.notification-wrapper').slideToggle();
        $('#overlay').toggleClass('active');
    });
    $('#overlay').on('click', () => {
        $('#overlay').removeClass('active');
        $('header').find('.notification-wrapper').slideUp();
    });
    $('.pending-request-custommer').find('.wrapper-left_title').on('click', () => {
        $('.pending-request-custommer').find('.info-wrapper').slideToggle();
        $('.pending-request-custommer').find('.wrapper-left_title').toggleClass('active');
    })
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

    var theTabs = $(".nav-tabs li");
    var i;

    function theTabClicks(tabClickEvent) {
        var clickedTab = tabClickEvent.currentTarget;
        var tabParent = tabClickEvent.currentTarget.parentNode.parentNode.parentNode;
        var theTabs = tabParent.querySelectorAll(".nav-tabs li");
        for (var i = 0; i < theTabs.length; i++) {
            theTabs[i].classList.remove("active");
        }

        clickedTab.classList.add("active");
        tabClickEvent.preventDefault();
        var contentPanes = tabParent.querySelectorAll(".panel");
        for (i = 0; i < contentPanes.length; i++) {
            contentPanes[i].classList.remove("active");
        }
        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = tabParent.querySelector(activePaneId);
        activePane.classList.add("active");

    }
    for (i = 0; i < theTabs.length; i++) {
        theTabs[i].addEventListener("click", theTabClicks)
    }
}
const myChart = () => {
    if (($('#myChart1').length >= 1) && ($('#myChart2').length >= 1)) {
        new Chart("myChart1", {
            type: "doughnut",
            data: {
                datasets: [{
                    data: [18, 64, 18],
                    backgroundColor: [
                        '#EB2629',
                        '#FF993B',
                        '#FFC20E'
                    ],
                }]
            },
            options: {
                cutout: 65,
                hoverOffset: 0,
                borderWidth: 0
            }
        });
        new Chart("myChart2", {
            type: "doughnut",
            data: {
                datasets: [{
                    label: 'My First Dataset',
                    data: [18, 41, 41],
                    backgroundColor: [
                        '#7DBA00',
                        '#EB2629',
                        '#FFC20E'
                    ],
                }]
            },
            options: {
                cutout: 65,
                hoverOffset: 0,
                borderWidth: 0
            }
        });
    }
    if (($('#myChart3').length >= 1) && ($('#myChart4').length >= 1)) {
        new Chart("myChart3", {
            type: "doughnut",
            data: {
                datasets: [{
                    data: [5, 15, 35, 45],
                    backgroundColor: [
                        '#7DBA00',
                        '#EB2629',
                        '#F56600',
                        '#FFC20E'
                    ],
                }]
            },
            options: {
                cutout: 65,
                hoverOffset: 0,
                borderWidth: 0
            }
        });
        new Chart("myChart4", {
            type: "doughnut",
            data: {
                datasets: [{
                    data: [20, 65, 25],
                    backgroundColor: [
                        '#EB2629',
                        '#F56600',
                        '#FFC20E'
                    ],
                }]
            },
            options: {
                cutout: 65,
                hoverOffset: 0,
                borderWidth: 0
            }
        });

    }
    if (($('#myChart5').length >= 1)) {
        new Chart("myChart5", {
            type: "doughnut",
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ],
            data: {
                datasets: [{
                    label: '',
                    data: [15, 65, 20],
                    backgroundColor: [
                        '#EB2629',
                        '#7DBA00',
                        '#FFDF80'
                    ],
                }]
            },
            options: {
                cutout: 65,
                hoverOffset: 0,
                borderWidth: 0,
            }
        });
    }
}
const swiperInit = () => {
    $(".fancybox__slide .popup-detail").each(function (index, element) {
        var $this = $(this);
        var top = $this.find('.gallery-top .swiper')
        var thumb = $this.find('.gallery-thumbnail .swiper')
        top.addClass("instance-gallery-top-" + index);
        thumb.addClass("instance-gallery-thumbs-" + index);
        $this.find(".gallery-top .swiper-button-prev").addClass("swiper-button-prev-" + index);
        $this.find(".gallery-top .swiper-button-next").addClass("swiper-button-next-" + index);
        $this.find(".gallery-top .swiper-pagination").addClass("swiper-pagination-" + index);
        var swiper = new Swiper(".instance-gallery-thumbs-" + index, {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            observer: true,
            observeParents: true,
        });
        var swiper2 = new Swiper(".instance-gallery-top-" + index, {
            spaceBetween: 10,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: ".swiper-button-next-" + index,
                prevEl: ".swiper-button-prev-" + index,
            },
            thumbs: {
                swiper: swiper,
            },
        });
    })
    var swiper = new Swiper(".gallery-thumbnail .swiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
    });
    var swiper2 = new Swiper(".gallery-top .swiper", {
        spaceBetween: 10,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: ".gallery-top .swiper-button-next",
            prevEl: ".gallery-top .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

const progressBar = () => {
    var bars = document.querySelectorAll('.progress > .progress-bar');
    setInterval(function () {
        bars.forEach(function (bar) {
            var getWidth = parseFloat(bar.dataset.progress);
            for (var i = 0; i < getWidth; i++) {
                bar.style.width = i + '%';
            }
        });
    }, 500);
}
const accordian = () => {
    $(".navigation-list_item__title").on("click", function (e) {
        let $this = $(this);
        e.preventDefault();
        if ($this.parent().next().hasClass("show")) {
            $this.parent().next().removeClass("show");
            $this.parent().next().slideUp(350);
            $this.closest('.navigation-list_item').removeClass("active");
        } else {
            $this.parent().parents().find(".navigation-sub").removeClass("show");
            $this.parent().parents().find(".navigation-sub").slideUp(350);
            $this.parent().parents('.navigation-list').find(".navigation-list_item").removeClass("active");
            $this.parent().next().toggleClass("show");
            $this.parent().next().slideDown(350);
            $this.parents("li").addClass("active");
        }
    });
    if ($(".navigation-list .navigation-list_item").hasClass("active")) {
        $(".navigation-list .navigation-list_item.active").find(".navigation-sub").slideDown(350);
    }
}
$(document).ready(function () {
    startMarquee();
    focusContact();
    searchBox();
    customerSelect();
    handleClickSlide();
    tabsPanel();
    myChart();
    swiperInit();
    progressBar();
    accordian();
})