$('.menu').click(function(){
	$('.nav-section').toggleClass('open');
	$('body').toggleClass('menuopen')
	$('.top_promation_box').toggleClass('blurheader')
});
$('.nav-submenu').mouseenter(function(){
	// $('body').addClass('menuopen');
	var navbusid = $(this).attr('id');
	$('.nav-macro-menulist,.nav-macro-name,.deskview,.nav-submenu,.nav-section,.nav-business-name').removeClass('active');
	$('.nav-business-menu,.productmenu').removeClass('effectactive')
	if ($(window).width() < 1100){
		if($('#'+navbusid).hasClass('active')){
			$('.submenuevent').removeClass('active')
			$('.nav-submenu').children('.deskview').children('ul').removeClass('active');
			$('.nav-submenu').children('.deskview').removeClass('active')
			$(this).removeClass('active');
		}
		else{
			$('.nav-submenu').children('.deskview').children('ul').removeClass('active')
			$(this).children('.deskview').children('ul').addClass('active')
			$('.nav-submenu').children('.deskview').removeClass('active')
			$(this).children('.deskview').addClass('active');
			$(this).addClass('active');
			$(this).children('.nav-business-name').addClass('active');
			$('.nav-section').addClass('active');
		}
	}
	else{
		if($('#'+navbusid).hasClass('active')){
			$('.submenuevent').removeClass('active')
			$('.nav-submenu').next('.deskview').children('ul').removeClass('active');
			$('.nav-submenu').next('.deskview').removeClass('active');
			$(this).removeClass('active');
		}
		else{
			$('.nav-submenu').children('.deskview').children('ul').removeClass('active')
			$(this).children('.deskview').children('ul').addClass('active');
			setTimeout(function(){
		       $('.nav-business-menu').addClass('effectactive');
		       $('.productmenu').addClass('effectactive');
		   	}, 100);
			$('.nav-submenu').next('.deskview').removeClass('active')
			$(this).children('.deskview').addClass('active');
			$(this).children('.nav-business-name').addClass('active');
			$(this).addClass('active');
			$('.nav-section').addClass('active');
			$('.top_promation_box').addClass('blurheader')
		}

		if(navbusid == 'busnav4'){
			var setheightmenu = $('.navmoblist').height();
			if(setheightmenu < 300){
				$('.nav-business-menu').css('min-height',setheightmenu+100)
			}
			else{
				$('.nav-business-menu').css('min-height',setheightmenu+100)
			}
			
		}
		else{
			$('.nav-business-menu').css('min-height','300px')
		}
		$('#dd_retail1,#dd_rest1,#dd_de1,#dd_mob1').addClass('active');
		$('#dd_retail1,#dd_rest1,#dd_de1,#dd_mob1').children('.macroevent').addClass('active');
	}
	
	$(".nav-macro-menulist .nav-micro-menu li").show();
})

$('.macroevent').hover(function(){
	$('.macroevent').removeClass('active')
	$(this).addClass('active');
	$('.macroevent').parent().removeClass('active')
	$(this).parent().addClass('active');
	var heightmacro= $(this).attr('id');
	if(heightmacro == 'lifestylemacro'){
		var setheightmenu = $('#lifestylemacro').next('.nav-micro-menu').height();
		if ($(window).width() > 1100){
			$('.nav-business-menu').css('min-height',setheightmenu)
		}
	}
	else if(heightmacro == 'retailmobmacro'){
		var setheightmenu = $('#retailmobmacro').next('.nav-micro-menu').height();
		if ($(window).width() > 1100){
			$('.nav-business-menu').css('min-height',setheightmenu+80)
		}
	}
	else{
		$('.nav-business-menu').css('min-height','300px')
	}

	if(heightmacro == 'demobileevent') {
		$('#mobilitynav_prod').attr('href','https://www.gofrugal.com/distributor-management-system');
		$('.mobileprodutext').text('ManageEasy');
		$('.mobileprodsubtext').text('ERP to manage profit');
		$('#mobhothaplink').attr('href','https://www.gofrugal.com/mobile-app-solutions#instock');
		$('#cloudmenulink').parent('.dropsolubox').hide();
		
	}
	else if(heightmacro == 'restmobileevent') {
		$('#mobilitynav_prod').attr('href','https://www.gofrugal.com/restaurant-software');
		$('.mobileprodutext').text('ServeEasy');
		$('.mobileprodsubtext').text('ERP to drive delight');
		$('#mobhothaplink').attr('href','https://www.gofrugal.com/blog/category/restaurant-qsr-software/')
		$('#cloudmenulink').attr('href','https://www.gofrugal.com/cloud/restaurant-point-of-sale.html').parent('.dropsolubox').show();
		$('#cloudmenulink h5').text('ServeEasy OnCloud');
	}
	else{
		$('#mobilitynav_prod').attr('href','https://www.gofrugal.com/retail-solution');
		$('.mobileprodutext').text('RetailEasy');
		$('.mobileprodsubtext').text('ERP to boost efficiency');
		$('#mobhothaplink').attr('href','https://www.gofrugal.com/blog/category/software-retail/');
		$('#cloudmenulink').attr('href','https://www.gofrugal.com/cloud/retail-pos.html').parent('.dropsolubox').show();
		$('#cloudmenulink h5').text('RetailEasy OnCloud');
	}
	console.log(heightmacro)
});
$('.nav-submenu').on('mouseleave', function() {
	if ($(window).width() > 1100){
		$('.top_promation_box').removeClass('blurheader');
		// $('body').removeClass('menuopen');
	}
});
$('.navmenulist_ev,section').hover(function(){
	$('.top_promation_box').removeClass('blurheader');
	$('.deskview').removeClass('active')
});
var ytubeclikid = 0
$('.video').click(function(){
	$(".gof-video-box").html(' ');
	var youtubelink = $(this).attr('href');
	var video_id = youtubelink.split('v=')[1];
	var start = youtubelink.split('start=')[1];
	if (start == undefined) {
		start = 0;
	}
	var ampersandPosition = video_id.indexOf('&');
	if(ampersandPosition != -1) {
	  video_id = video_id.substring(0, ampersandPosition);
	}
	youtubelink = "https://www.youtube.com/embed/"+video_id
	event.preventDefault();
	if(ytubeclikid == 0){
		$("body").prepend('<div class="gof-video-modal" onclick="videopopupclose()"><a href="javascript:void(0);" class="gof-video-close" onclick="videopopupclose()"></a><div class="gof-video-modalInner"><div class="gof-video-container"><div class="gof-video-box"><div id="muteYouTubeVideoPlayer" class="zc-video-iframe"></div></div></div></div></div>');
		$(".gof-video-box").html('<iframe id="muteYouTubeVideoPlayer-0" src="'+youtubelink+'" frameborder="0" class="gof-video-iframe" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="560" height="316"></iframe>');
		ytubeclikid++;
	}
	else{
		$(".gof-video-box").html('<iframe id="muteYouTubeVideoPlayer-0" src="'+youtubelink+'" frameborder="0" class="gof-video-iframe" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="560" height="316"></iframe>');
	}
	$('.gof-video-modal').addClass('videoopen');
	
});
function videopopupclose(){
	$('.gof-video-modal').removeClass('videoopen');
	$('.gof-video-box').html('');
	// $(".gof-video-box").html('<iframe id="muteYouTubeVideoPlayer-0" src="'+0+'" frameborder="0" class="gof-video-iframe" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="560" height="316"></iframe>');
}

$('.gof-video-modalInner').click(function() {alert('trest')
    $(this).removeClass('videoopen');
});

setInterval(myTimer, 1000);
function myTimer() {
	if ($(window).width() < 1100) {
		$('.submenuevent a').attr('href','javascript:void(0)');
		$('.submenuevent').addClass('mobeventmenu')
	}
	else {
	   	$('.nav-section').removeClass('open');
	   	$('.nav-submenu').on('mouseleave', function() {
		   $('.nav-submenu,.nav-section,.nav-business-name').removeClass('active');
		   $('.nav-submenu').next('.deskview').children('ul').removeClass('active');
			$('.nav-submenu').next('.deskview').removeClass('active');
		});
	}
	
}
$(document).scroll(function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 100) {
      $('.nav-section').addClass('scroll-fixed');
    } else {
       $('.nav-section').removeClass('scroll-fixed');
    }
});

function searchmodel(){
	$('.gft-search-container').addClass('active');
	$('.top_promation_box').addClass('blurheader');
	$('.anouncement-bar').hide();
	$('.menu-nav').css('display','none');
	$('.gft-search-field').focus();
	$('.gft-search-field').val('');
}

$('.top_promation_box').click(function(){
	$(this).removeClass('blurheader')
	$('.gft-search-container').removeClass('active');
	$('.anouncement-bar').show();
	$('.menu-nav').css('display','flex')
})

function searchnavClick(){
	var query = $('#gft-search-query').val();
	if (query.length >= 1) {
		if(window.location.hostname == 'www.gofrugal.com'){
			window.location = 'https://www.gofrugal.com/search-results.html?query='+query;
		}
		else if(window.location.hostname == 'staging.gofrugal.com'){
			window.location = 'https://staging.gofrugal.com/search-results.html?query='+query;
		}
		else{
			window.location = 'http://localhost/newgen_branch/search-results.html?query='+query;
		}
	}
	else{

	}
	return false;
}


