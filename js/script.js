/* SHOW SKILLS */
$(document).on('click', '.skill_set', function(event) {
	event.preventDefault();
	$('.skill_set').removeClass('show_skills');
	$(this).addClass('show_skills');
});
/* QUALIFICATION TABS */
$('.education_tab').click(function(event) {
	$(this).addClass('active');
	$('.work_tab').removeClass('active');
	$('.education').show();
	$('.work').hide();
});
$('.work_tab').click(function(event) {
	$(this).addClass('active');
	$('.education_tab').removeClass('active');
	$('.work').show();
	$('.education').hide();
});
// ISOTOPE PLUGIN
$('.work_items').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
})
$('.work_tabs li').click(function(event) {
	/* Act on the event */
	$('.work_tabs li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');

	$('.work_items').isotope({
		filter : selector
	});
	return false;
});

// STICKEY NAVBAR
$(document).scroll(function(event) {
	/* Act on the event */
	if ($(document).scrollTop() > 200) { // document scroll is > 200
		$('.Navbar_Portion').addClass('stickey_nav');
	}else if($(document).scrollTop() < 200){
		$('.Navbar_Portion').removeClass('stickey_nav');
	}
});
// SCROLL TO TOP
$(document).scroll(function(event) {
	/* Act on the event */
	if ($(document).scrollTop() > 500) {
		$('.scroll_to_top').fadeIn(400);
	}else if ($(document).scrollTop() < 500) {
		$('.scroll_to_top').fadeOut(400);
	}
});
$('.scroll_to_top').click(function(event) {
	/* Act on the event */
	$(document).scrollTop(0);
});
// THEME CHANGER
$('.theme_shades span').click(function(event) {
	/* Act on the event */
	var themeColor = $(this).attr('data-color-code');
	$('html').css('--theme_color', themeColor);
	$('.theme_shades span').css('border', 'none');
	$(this).css('border', '2px solid var(--black_color)');
});
//MODE CHANGER
$('.dark_mode').click(function(event) {
	/* Act on the event */
	$('body').addClass('Dark_Mode');
	$('.dark_mode span').css('border', '2px solid #FFF');
	$('.light_mode span').css('border', 'none');
});
$('.light_mode').click(function(event) {
	/* Act on the event */
	$('body').removeClass('Dark_Mode');
	$('.light_mode span').css('border', '2px solid #000');
	$('.dark_mode span').css('border', 'none');
});
if ($(window).width() <= 992) {
	$('div').removeAttr('data-aos');
}

// variables for portfolio carousel
const portfolioCarouselCards = document.querySelectorAll('.portfolio-carousel-card');
const portfolioCarouselInner = document.querySelector('.portfolio-carousel-inner');
const portfolioCarouselNext = document.querySelector('#portfolio-carousel-next');
const portfolioCarouselPrev = document.querySelector('#portfolio-carousel-prev');

// create initial value for transform
const totalPortfoCard = portfolioCarouselCards.length;
let portfoCount = 0;

// carousel function
const carouselFunc = function (countParam) {

  if (countParam >= totalPortfoCard - 1) portfoCount = totalPortfoCard - 1;

  if (countParam <= 0) portfoCount = 0;

  portfolioCarouselInner.style.transform = `translateX(-${100 / totalPortfoCard * portfoCount}%)`;

}

// addEventListener on carousel next button
portfolioCarouselNext.addEventListener('click', function () {
  portfoCount++;
  carouselFunc(portfoCount);
});

// addEventListener on carousel previous button
portfolioCarouselPrev.addEventListener('click', function () {
  portfoCount--;
  carouselFunc(portfoCount);
});

/*
$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top>offset && top<offset+height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },500, 'linear')
    })
});
*/