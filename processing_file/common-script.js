	// JavaScript Document
	//// Start Disable "Select Content", "Copy Content", "Right click on Images" ///
	//finder
var cdnUrl = "https://cdn-web.gofrugal.com";
var goBillSupport = ['Department Stores','Supermarket','Auto Parts','Fancy Store','Gifts & Greeting Cards','Stationery Shop','Ayurvedic & Wellness','Shoes','Tyre','Glass And Crockeries','Fashion Jewelry','Luggage and Bags','Groceries and Vegetables','Convenience store']
var gobillSScreen = '', gobillScreenCnt = '', gobillBScreen = '', gobillzoom = 2

	$.urlParam = function (name) {
		var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
		return results && results[1] || 0;
	}
	var file_name = location.href.split('/').pop().split('?')[0];
	$('img').bind('contextmenu', function (e) {
		return false;
	});

	function addLink() {
		var body_element = document.getElementsByTagName('body')[0];
		var selection;
		selection = window.getSelection();
		var pagelink = "<br /><br /> Read more at: <a href='" + document.location.href + "'>" + document.location.href + "</a><br />Copyright © GOFRUGAL Technologies Pvt. Ltd"; // change this if you want
		var copytext = selection + pagelink;
		var newdiv = document.createElement('div');
		newdiv.style.position = 'absolute';
		newdiv.style.left = '-99999px';
		body_element.appendChild(newdiv);
		newdiv.innerHTML = copytext;
		selection.selectAllChildren(newdiv);
		window.setTimeout(function () {
			body_element.removeChild(newdiv);
		}, 0);
	}
	document.oncopy = addLink;

	//// END Disable "Select Content", "Copy Content", "Right click on Images" ///
		$(document).ready(function() {
 setTimeout(function () { $('.nrai').addClass('nrai-slide');
			}, 200);
$('.nrai-close').click(function(){
$('.nrai').fadeOut();
});
		});


	jQuery(document).ready(function ($) {
		// Added for CTA consistancy for all reg btn
		$('a').click(function () {
			var url_name = $(this).attr("href").split('/').pop().split('?')[0];
			if (url_name === 'register.html' || url_name === 'contact.html' || url_name == 'partner-signup.html' || url_name === 'register' || url_name === 'contact' || url_name == 'partner-signup') {
				var ctaName = $.trim($(this).text());
				$(this).find('div').hasClass('vertical-box-custom') ? ctaName = 'Try for FREE' : '';
				$(this).find('div').hasClass('reg-free') ? ctaName = 'Register now' : '';
				var date = new Date();
				date.setTime(date.getTime() + (20 * 1000));
				Cookies.create('ctaName', ctaName, date);
			}
		});

		if ($.urlParam('ccid') != '') {
			Cookies.create('ccid', $.urlParam('ccid'), 7);
		} else if (Cookies['ccid'] != '') {
			Cookies.create('ccid', Cookies['ccid'], 7);
		}
		if ($.urlParam('campaign_id') != '') {
			Cookies.create('campaign_id', $.urlParam('campaign_id'), 7);
		} else if (Cookies['campaign_id'] != '') {
			Cookies.create('campaign_id', Cookies['campaign_id'], 7);
		}
		if ($.urlParam('gclid') != '') {
			Cookies.create('gclid', $.urlParam('gclid'), 7);
		} else if (Cookies['gclid'] != '') {
			Cookies.create('gclid', Cookies['gclid'], 7);
		}
		
		if($.urlParam('utm_campaign')!=''){
            Cookies.create('utm_campaign',decodeURIComponent($.urlParam('utm_campaign')),7);
        }else if(Cookies['utm_campaign']!=''){
            Cookies.create('utm_campaign',Cookies['utm_campaign'],7);
        }
		if($.urlParam('utm_source')!=''){
            Cookies.create('utm_source',decodeURIComponent($.urlParam('utm_source')),7);
        }else if(Cookies['utm_source']!=''){
            Cookies.create('utm_source',Cookies['utm_source'],7);
        }
		
		if($.urlParam('utm_term')!=''){
            Cookies.create('utm_term',decodeURIComponent($.urlParam('utm_term')),7);
        }else if(Cookies['utm_term']!=''){
            Cookies.create('utm_term',Cookies['utm_term'],7);
        }
		
		if($.urlParam('utm_medium')!=''){
            Cookies.create('utm_medium',decodeURIComponent($.urlParam('utm_medium')),7);
        }else if(Cookies['utm_medium']!=''){
            Cookies.create('utm_medium',Cookies['utm_medium'],7);
        }
		if($.urlParam('utm_adgroup')!=''){
			Cookies.create('utm_adgroup',decodeURIComponent($.urlParam('utm_adgroup')),7);
		}else if(Cookies['utm_adgroup']!=''){
			Cookies.create('utm_adgroup',Cookies['utm_adgroup'],7);
		}
	});
//Template JS-->


// Covid Announcement Bar

function myFunction(x) {
  if (x.matches) { 
  // If media query matches
//  	document.getElementsByTagName("HEADER")[0].style.marginTop = "95px"; 
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
//    document.getElementById("nav").style.top = "0px";
    // document.querySelectorAll("header").style.margin = "0px 0 85px";
    // document.getElementById("covid-19-Gofrugal").style.position = "relative";
  } else {
//    document.getElementById("nav").style.top = "-50px";
    // document.querySelectorAll("header").style.margin = "0px 0 85px";
    // document.getElementById("covid-19-Gofrugal").style.position = "absolute";
  }
  prevScrollpos = currentScrollPos;
  }
  } 
  else {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
//    document.getElementById("nav").style.top = "0";
  } else {
//    document.getElementById("nav").style.top = "-37px";
  }
  prevScrollpos = currentScrollPos;
}
  }
}
var x = window.matchMedia("(max-width: 767px)")
myFunction(x) 
x.addListener(myFunction)

// Covid Announcement Bar Ends

$(".menu").click(function () {
    $("#nav").toggleClass("open");
    $("#covid-19-Gofrugal").toggleClass("hide");
  });
if (window.matchMedia('(max-width: 1199px)').matches) {
  
  $(".g-menu-list h5").children('a').attr('href', '#');
  $(".dropdown > a .plus-minus-toggle").click(function () {
	event.preventDefault();	
	if ($(".dropdown").children().children('.plus-minus-toggle').not(this).parent().parent().children('.dropdown-menu').hasClass("active")) {
      $(".dropdown").children().children('.plus-minus-toggle').not(this).parent().parent().children('.dropdown-menu').slideUp();
      $(".dropdown").children().children('.plus-minus-toggle').not(this).parent().parent().children('.dropdown-menu').removeClass("active");
		$(".dropdown").children().children('.plus-minus-toggle').not(this).addClass('collapsed')
    }
    $(this).parent().siblings('.dropdown-menu').toggleClass("active");
    $(this).parent().siblings('.dropdown-menu').slideToggle();
  });
	$(".go-mobile li a").click(function () {
		$(".menu").trigger('click')
	})
	$(".g-menu-group h5 a").click(function () {
		if($(this).attr('href')=='#'){
			event.preventDefault();	
		}
    if ( $(".g-menu-list h5").children('a').not(this).parent().hasClass("active")) {
      $(".g-menu-list h5").children('a').not(this).parent().siblings('li').slideUp();
      $(".g-menu-list h5").children('a').not(this).parent().removeClass("active");
	}
	$(this).parent().toggleClass("active");
    $(this).parent().siblings('li').slideToggle();	
		$(".g-menu-list h5").children('a').not(this).children('.plus-minus-toggle').addClass('collapsed')
  });
	$('.show_menu').removeClass('hide')
	
	
		$(function() {
  $('.plus-minus-toggle').on('click', function() {
    $(this).toggleClass('collapsed');
  });
});
}
	
	$(".g-search-wrap input").focus(function() {
		  $('.g-search-wrap').addClass('active')
	});
	$(".g-search-wrap input").focusout(function() {
	  $('.g-search-wrap').removeClass('active')
	});

function setVerticalFunc(verticalName, verticalID) {
  Cookies.create('g_vertical_name', verticalName);
  Cookies.create('g_vertical_id', verticalID);
	if(goBillSupport.indexOf(verticalName) !== -1){
		gobillBScreen =  '<li><img src="../images/vertical-images/gobill-screen.png" /></li>'
		gobillSScreen = '<img class="sm-zoom-img1"  src="../images/vertical-images/gobill-screen-big.png">'
		gobillScreenCnt =  '<div class="sm-zoom-content1"><span>A Simple, new-age billing application for super fast checkouts. Gobill is ready to delight its users with complete touch compatibility, multi-language support and extensive offline billing option</span></div>'
		gobillzoom = 1
		$('.g_gobill_supported').css('display','block');
		if(verticalName == 'Supermarket'){
			gobillBScreen =  '<li><img src="../../images/vertical-images/gobill-screen.png" /></li>'
			gobillSScreen = '<img class="sm-zoom-img1"  src="../../images/vertical-images/gobill-screen-big.png">'
		}
		$('.hide_gobill_supported').hide()
	}
}
//Template JS-->
	// scroll body to 0px on click
	$('#back-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});


	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 100) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
	});

	$(document).ready(function () {
		
		var addEvent = (document.addEventListener) ? function(target,event,fn){ if(target) return target.addEventListener(event,fn,false);  }: function(target,event,fn){ if(target) return target.attachEvent(('on' + event),fn);   }, allLinks = document.links || document.getElementsByTagName('a'); 
		
		for(var i=0;i<allLinks.length;i++)
	      addEvent(allLinks[i],'mouseup',function(e){
			  if(this.getAttribute('onclick')){
			  if(this.getAttribute('onclick').indexOf('setVerticalFunc') !== -1){
				  if(e.which == 3 || e.which == 2){
					eval(this.getAttribute('onclick'))	  
				  }
				  
			  }
			  }
    	});
		
		$('.integration-link-icon a[href^="#"] , #product-feature-mobile>a[href^="#"]').on('click', function (e) {
			e.preventDefault();

			var target = this.hash,
				$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 200
			}, 100, 'swing', function () {
				//window.location.hash = target-82;
				target - 80;
			});
			return false;
		});
		$(".faq-section li").click(function () {
			if ($(this).find('div').is(":hidden")) {
				$(".faq-section li>div").slideUp("500");
				$(".faq-section li").removeClass("faq-back");
				$(this).children('div').delay(400).slideDown("fast");
				$(this).addClass("faq-back");
			} else {
				$(this).children('div').slideUp();
				$(this).removeClass("faq-back");
			}
		});
		$(function () {
			$('[data-toggle="tooltip"]').tooltip()
		})
		var isMobile = false; //initiate as false
		// device detection
		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
		if (isMobile == true) {
			//$(".retail-banner-content span, .restaurant-banner-content span,#business-supported>a").text("Experience now");
			$(".retail-banner-content>a, .restaurant-banner-content>a, #business-supported>a").attr('href', 'register.html?regtype=callback&business=1');
			$("#whatsnow-banner-cta,#cloud-qsr-btn,#de-feature-sec1").css("display", "none");
			$("#whatsnow-mobile-cta,#cloud-qsr-mobile-btn,#earnsmart-app-download").css("display", "block");
		}

		//play youtube video in pop up
	});

	/* Cookies creation code */
	var Cookies = {
		init: function () {
			var allCookies = document.cookie.split('; ');
			for (var i = 0; i < allCookies.length; i++) {
				var cookiePair = allCookies[i].split('=');
				this[cookiePair[0]] = cookiePair[1];
			}
		},
		create: function (name, value, days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				var expires = "; expires=" + date.toGMTString();
			} else var expires = "";
			document.cookie = name + "=" + value + expires + "; path=/";
			this[name] = value;
		},
		erase: function (name) {
			this.create(name, '', -1);
			this[name] = undefined;
		}
	};
	Cookies.init();

	/*COOKIE JAVASCRIPT END*/
	$(document).ready(function () {
		if ($(window).width() < 767) {
			if ($('.mobile-responsive-cta')[0]) {
				$('#popup_gofrugal').css('bottom', '60px');
				$('footer p:last-child').css('margin-bottom', '55px');
			}
		}
		// Youtube sticky subscribe Button
		$('.sticky_youtube_subscribe .close').click(function () {
			if ($(window).width() > 767) {
				$('.sticky_youtube_subscribe').css('transform', ' translateX(-388px)');
			} else {
				$('.sticky_youtube_subscribe').css('transform', ' translateY(388px)');
			}
		});
	});

	/* animate cash register addon pricing */
	$(".cr-addon-box").hover(
		function () {
			$(this).find(".cr-addon-price").animate({
				bottom: "+=32px"
			});
		},
		function () {
			$(this).find(".cr-addon-price").animate({
				bottom: "-=32px"
			});
		}
	);

	/* detect element in viewport */

	/*This basic check will return true if the entire element is visible to the user (within the visual viewport).
	$('#element').visible();
	If you'd like to check for ANY PART of the element, you can use the following:
	$('#element').visible( true );
	*/
	! function (t) {
		var i = t(window);
		t.fn.visible = function (t, e, o) {
			if (!(this.length < 1)) {
				var r = this.length > 1 ? this.eq(0) : this,
					n = r.get(0),
					f = i.width(),
					h = i.height(),
					o = o ? o : "both",
					l = e === !0 ? n.offsetWidth * n.offsetHeight : !0;
				if ("function" == typeof n.getBoundingClientRect) {
					var g = n.getBoundingClientRect(),
						u = g.top >= 0 && g.top < h,
						s = g.bottom > 0 && g.bottom <= h,
						c = g.left >= 0 && g.left < f,
						a = g.right > 0 && g.right <= f,
						v = t ? u || s : u && s,
						b = t ? c || a : c && a;
					if ("both" === o) return l && v && b;
					if ("vertical" === o) return l && v;
					if ("horizontal" === o) return l && b
				} else {
					var d = i.scrollTop(),
						p = d + h,
						w = i.scrollLeft(),
						m = w + f,
						y = r.offset(),
						z = y.top,
						B = z + r.height(),
						C = y.left,
						R = C + r.width(),
						j = t === !0 ? B : z,
						q = t === !0 ? z : B,
						H = t === !0 ? R : C,
						L = t === !0 ? C : R;
					if ("both" === o) return !!l && p >= q && j >= d && m >= L && H >= w;
					if ("vertical" === o) return !!l && p >= q && j >= d;
					if ("horizontal" === o) return !!l && m >= L && H >= w
				}
			}
		}
	}(jQuery);




//------------------

$(document).ready(function () {		
$("a").each(function(){
	if($(this).attr('href') != undefined){
		if($(this).attr('href').indexOf('.html') !== -1){
			if(($(this).attr('href').indexOf('downloads') !== -1) || ($(this).attr('href').indexOf('license-agreement') !== -1)){

			}else{
				// $(this).attr('href', $(this).attr('href').replace('.html',''))
			}
		}
	}
})

	var g_vertical_name = $.urlParam('type')
	dynamic_contentJSON[g_vertical_name] ? setDynamicContent(dynamic_contentJSON[g_vertical_name]) : '';
	changeMicrofunc()
	if(g_vertical_name == "canteen"||g_vertical_name == "centralkitchen"||g_vertical_name == "franchise"){
		$('#foodagg').empty();
		$('#foodagg').append('<div class="feature-app-content"><a href="../gosecure-data-backup-and-recovery" class="res-feature-icon gosecure-ft"></a><div class="feature-content"><h3>Automated Cloud backup</h3><div class="feature-desc"><p>One click data recovery to restore your business; GoSecure your data and future proof your restaurant</p><a href="../gosecure-data-backup-and-recovery" class="secondary_cta_links vertical_feature_exlink" id="secondary_cta_link8">Know more</a></div></div></div>');
	}
	if(g_vertical_name == 'kirana'){
		window.location.href = "https://www.gofrugal.com/retail/supermarket-pos/kirana-store-software.html";
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/supermarket-pos/kirana-store-software.html');
	}
	else if(g_vertical_name == 'cloudkitchen'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/cloud/restaurant-pos/cloud-kitchen-software.html');
	}
	else if(g_vertical_name == 'tyre'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/specialized-retail-pos/tire-shop-software.html');
	}
	else if(g_vertical_name == 'grocery'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/supermarket-pos/grocery-store-software.html');
		window.location.href = "https://www.gofrugal.com/retail/supermarket-pos/grocery-store-software.html";
	}
	else if(g_vertical_name == 'restaurant'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/restaurant-pos-software.html');
	}
	else if(g_vertical_name == 'ayurvedic'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/pharmacy-software/ayurvedic-homeopathy-pos.html');
		window.location.href = "https://www.gofrugal.com/retail/pharmacy-software/ayurvedic-homeopathy-pos.html";
	}
	else if(g_vertical_name == 'chemist'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/pharmacy-software/chemist-pos.html');
		window.location.href = "https://www.gofrugal.com/retail/pharmacy-software/chemist-pos.html";
	}
	else if(g_vertical_name == 'healthcare'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/pharmacy-software/healthcare-pos-billing.html');
		window.location.href = "https://www.gofrugal.com/retail/pharmacy-software/healthcare-pos-billing.html";
	}
	else if(g_vertical_name == 'medicalshop'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/pharmacy-software/medical-store-billing.html');
		window.location.href = "https://www.gofrugal.com/retail/pharmacy-software/medical-store-billing.html";
	}
	else if(g_vertical_name == 'surgical'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/pharmacy-software/surgical-pos-billing.html'); 
		window.location.href = "https://www.gofrugal.com/retail/pharmacy-software/surgical-pos-billing.html";
	}
	else if(g_vertical_name == 'hypermarket'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/hypermarket-software/hypermarket-billing-pos.html'); 
		window.location.href = "https://www.gofrugal.com/retail/hypermarket-software/hypermarket-billing-pos.html";
	}
	else if(g_vertical_name == 'convenience'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/hypermarket-software/convenience-store-pos.html'); 
		window.location.href = "https://www.gofrugal.com/retail/hypermarket-software/convenience-store-pos.html";
	}
	else if(g_vertical_name == 'department'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/hypermarket-software/departmental-store-pos.html'); 
		window.location.href = "https://www.gofrugal.com/retail/hypermarket-software/departmental-store-pos.html";
	}
	else if(g_vertical_name == 'fertilizer'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/specialized-retail-pos/fertilizer-management-software.html'); 
		window.location.href = "https://www.gofrugal.com/specialized-retail-pos/fertilizer-management-software.html";
	}
	else if(g_vertical_name == 'franchise'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/franchise-management-software.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/franchise-management-software.html";
	}
	else if(g_vertical_name == 'multichain'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/restaurant-chain-software.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/restaurant-chain-software.html";
	}
	else if(g_vertical_name == 'centralkitchen'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/central-kitchen-management-system.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/central-kitchen-management-system.html";
	}
	else if(g_vertical_name == 'supermarket'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/supermarket-pos/'); 
		window.location.href = "https://www.gofrugal.com/retail/supermarket-pos/";
	}
	else if(g_vertical_name == 'bakery'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/bakery-software/'); 
		window.location.href = "https://www.gofrugal.com/restaurant/bakery-software/";
	}
	else if(g_vertical_name == 'mobilephone'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/electronics-pos/mobile-shop-billing-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/electronics-pos/mobile-shop-billing-software.html";
	}
	else if(g_vertical_name == 'fruits'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/supermarket-pos/fruit-vegetables-billing-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/supermarket-pos/fruit-vegetables-billing-software.html";
	}
	else if(g_vertical_name == 'ricetraders'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/supermarket-pos/rice-mill-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/supermarket-pos/rice-mill-software.html";
	}
	else if(g_vertical_name == 'apparel'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/apparel-pos/'); 
		window.location.href = "https://www.gofrugal.com/retail/apparel-pos/";
	}
	else if(g_vertical_name == 'clothing'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/apparel-pos/clothing-store-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/apparel-pos/clothing-store-software.html";
	}
	else if(g_vertical_name == 'garment'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/apparel-pos/garments-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/apparel-pos/garments-software.html";
	}
	else if(g_vertical_name == 'boutique'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/apparel-pos/botique-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/apparel-pos/botique-software.html";
	}
	else if(g_vertical_name == 'footwear'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/apparel-pos/footwear-shop-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/apparel-pos/footwear-shop-software.html";
	}
	else if(g_vertical_name == 'shoes'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/apparel-pos/shoe-store-inventory-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/apparel-pos/shoe-store-inventory-software.html";
	}
	else if(g_vertical_name == 'fancycostume'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/apparel-pos/fancy-costume-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/apparel-pos/fancy-costume-software.html";
	}
	else if(g_vertical_name == 'textile'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/apparel-pos/textile-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/apparel-pos/textile-software.html";
	}
	else if(g_vertical_name == 'autoparts'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/specialized-retail-pos/auto-parts-billing.html'); 
		window.location.href = "https://www.gofrugal.com/specialized-retail-pos/auto-parts-billing.html";
	}
	else if(g_vertical_name == 'hardware'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/specialized-retail-pos/hardware-shop-software.html'); 
		window.location.href = "https://www.gofrugal.com/specialized-retail-pos/hardware-shop-software.html";
	}
	else if(g_vertical_name == 'sports'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/specialized-retail-pos/sports-shop-software.html'); 
		window.location.href = "https://www.gofrugal.com/specialized-retail-pos/sports-shop-software.html";
	}
	else if(g_vertical_name == 'vessel'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/specialized-retail-pos/vessel-shop-billing.html'); 
		window.location.href = "https://www.gofrugal.com/specialized-retail-pos/vessel-shop-billing.html";
	}
	else if(g_vertical_name == 'greetingcard'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/specialized-retail-pos/gift-shop-pos-system.html'); 
		window.location.href = "https://www.gofrugal.com/specialized-retail-pos/gift-shop-pos-system.html";
	}
	else if(g_vertical_name == 'electronics'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/electronics-pos'); 
		window.location.href = "https://www.gofrugal.com/retail/electronics-pos";
	}
	else if(g_vertical_name == 'camera'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/electronics-pos/camera-shop-pos.html'); 
		window.location.href = "https://www.gofrugal.com/retail/electronics-pos/camera-shop-pos.html";
	}
	else if(g_vertical_name == 'computerhardware'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/electronics-pos/computer-hardware-shop-pos-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/electronics-pos/computer-hardware-shop-pos-software.html";
	}
	else if(g_vertical_name == 'electrical'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/electronics-pos/electrical-shop-billing-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/electronics-pos/electrical-shop-billing-software.html";
	}
	else if(g_vertical_name == 'homeappliance'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/electronics-pos/home-appliances-billing-solution.html'); 
		window.location.href = "https://www.gofrugal.com/retail/electronics-pos/home-appliances-billing-solution.html";
	}
	else if(g_vertical_name == 'bbq'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/restaurant-pos-software/bbq-pos.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/restaurant-pos-software/bbq-pos.html";
	}
	else if(g_vertical_name == 'restaurant'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/restaurant-pos-software/'); 
		window.location.href = "https://www.gofrugal.com/restaurant/restaurant-pos-software/";
	}
	else if(g_vertical_name == 'briyani'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/restaurant-pos-software/biryani-pos.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/restaurant-pos-software/biryani-pos.html";
	}
	else if(g_vertical_name == 'buffet'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/restaurant-pos-software/buffet-pos.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/restaurant-pos-software/buffet-pos.html";
	}
	else if(g_vertical_name == 'drivein'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/restaurant-pos-software/drive-thru-pos.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/restaurant-pos-software/drive-thru-pos.html";
	}
	else if(g_vertical_name == 'selfservice'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/restaurant-pos-software/self-ordering-kiosk.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/restaurant-pos-software/self-ordering-kiosk.html";
	}
	else if(g_vertical_name == 'beauty'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/lifestyle-pos/beauty-cosmetic-shop.html'); 
		window.location.href = "https://www.gofrugal.com/retail/lifestyle-pos/beauty-cosmetic-shop.html";
	}
	else if(g_vertical_name == 'bookshop'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/lifestyle-pos/book-store-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/lifestyle-pos/book-store-software.html";
	}
	else if(g_vertical_name == 'fashion'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/lifestyle-pos/fashion-jewellery-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/lifestyle-pos/fashion-jewellery-software.html";
	}
	else if(g_vertical_name == 'fancystore'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/lifestyle-pos/fancy-store-billing-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/lifestyle-pos/fancy-store-billing-software.html";
	}
	else if(g_vertical_name == 'florist'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/lifestyle-pos/florist-pos-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/lifestyle-pos/florist-pos-software.html";
	}
	else if(g_vertical_name == 'glasscrockeries'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/lifestyle-pos/glass-store-billing.html'); 
		window.location.href = "https://www.gofrugal.com/retail/lifestyle-pos/glass-store-billing.html";
	}
	else if(g_vertical_name == 'furniture'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/lifestyle-pos/furniture-billing-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/lifestyle-pos/furniture-billing-software.html";
	}
	else if(g_vertical_name == 'musicshop'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/lifestyle-pos/music-pos-system.html'); 
		window.location.href = "https://www.gofrugal.com/retail/lifestyle-pos/music-pos-system.html";
	}
	else if(g_vertical_name == 'luggage'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/lifestyle-pos/luggage-store-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/lifestyle-pos/luggage-store-software.html";
	}
	else if(g_vertical_name == 'games'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/electronics-pos/game-store-pos.html'); 
		window.location.href = "https://www.gofrugal.com/retail/electronics-pos/game-store-pos.html";
	}
	else if(g_vertical_name == 'opticals'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/lifestyle-pos/optical-shop-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/lifestyle-pos/optical-shop-software.html";
	}
	else if(g_vertical_name == 'photoshop'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/lifestyle-pos/photography-studio-management-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/lifestyle-pos/photography-studio-management-software.html";
	}
	else if(g_vertical_name == 'stationery'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/lifestyle-pos/stationery-shop-management-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/lifestyle-pos/stationery-shop-management-software.html";
	}
	else if(g_vertical_name == 'toys'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/lifestyle-pos/toy-store-pos.html'); 
		window.location.href = "https://www.gofrugal.com/retail/lifestyle-pos/toy-store-pos.html";
	}
	else if(g_vertical_name == 'watches'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/lifestyle-pos/watch-shop-software.html'); 
		window.location.href = "https://www.gofrugal.com/retail/lifestyle-pos/watch-shop-software.html";
	}
	else if(g_vertical_name == 'cakeshop'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/bakery-software/cake-pos-system.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/bakery-software/cake-pos-system.html";
	}
	else if(g_vertical_name == 'savouries'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/bakery-software/snack-shop-pos.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/bakery-software/snack-shop-pos.html";
	}
	else if(g_vertical_name == 'sweetshop'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/bakery-software/sweet-shop-pos.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/bakery-software/sweet-shop-pos.html";
	}
	else if(g_vertical_name == 'loungebar'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/bar-pos/'); 
		window.location.href = "https://www.gofrugal.com/restaurant/bar-pos/";
	}
	else if(g_vertical_name == 'restobar'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/bar-pos/restobar-pos.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/bar-pos/restobar-pos.html";
	}
	else if(g_vertical_name == 'pubs'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/bar-pos/pub-pos-system.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/bar-pos/pub-pos-system.html";
	}
	else if(g_vertical_name == 'catering'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/take-away-pos/catering-software.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/take-away-pos/catering-software.html";
	}
	else if(g_vertical_name == 'foodtruck'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/take-away-pos/food-truck-pos.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/take-away-pos/food-truck-pos.html";
	}
	else if(g_vertical_name == 'bookpublishing'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/retail/lifestyle-pos/book-publishing-store-pos.html'); 
		window.location.href = "https://www.gofrugal.com/retail/lifestyle-pos/book-publishing-store-pos.html";
	}
	else if(g_vertical_name == 'qsr'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/'); 
		window.location.href = "https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/";
	}
	else if(g_vertical_name == 'bistro'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/bistro-pos.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/bistro-pos.html";
	}
	else if(g_vertical_name == 'burgershop'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/burger-shop-pos.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/burger-shop-pos.html";
	}
	else if(g_vertical_name == 'cafe'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/coffee-shop-pos.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/coffee-shop-pos.html";
	}
	else if(g_vertical_name == 'canteen'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/canteen-management-system.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/canteen-management-system.html";
	}
	else if(g_vertical_name == 'chaatshop'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/chaat-shop-software.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/chaat-shop-software.html";
	}
	else if(g_vertical_name == 'desserts'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/dessert-shop-software.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/dessert-shop-software.html";
	}
	else if(g_vertical_name == 'juiceshop'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/juice-shop-pos.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/juice-shop-pos.html";
	}
	else if(g_vertical_name == 'foodcourt'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/food-court-pos.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/food-court-pos.html";
	}
	else if(g_vertical_name == 'icecreamshop'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/ice-cream-pos-system.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/ice-cream-pos-system.html";
	}
	else if(g_vertical_name == 'pizzashop'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/pizza-pos-system.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/pizza-pos-system.html";
	}
	else if(g_vertical_name == 'teahouse'){
		$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/tea-shop-pos.html'); 
		window.location.href = "https://www.gofrugal.com/restaurant/quick-service-restaurant-pos/tea-shop-pos.html";
	}
})

function setDynamicContent(data){

	(data.title).replace(' ','') != '' ? $('title').text(data.title) : '';
	(data.desc).replace(' ','') != '' ? $('meta[name=description]').attr('content', data.desc) : '';
	(data.keywords).replace(' ','') != '' ? $('meta[name=keywords]').attr('content', data.keywords) : '';
	$('#banner_section').addClass('hidden');
	$('.vertical_ban_primary').text('Free trial to get started');
	$('#banner_section_new').addClass(data.banner_img);
		(data.vertical_title1).replace(' ','') != '' ? $('#g_vertical_title1').text(data.vertical_title1) : '';
		(data.g_vertical_title_h2).replace(' ','') != '' ? $('#g_vertical_title_h2').text(data.g_vertical_title_h2) : '';
		(data.g_vertical_img_new).replace(' ','') != '' ? $('#g_vertical_img_new').attr('src', "../images/vertical-images/"+data.g_vertical_img_new) : '';
		(data.vertical_id).replace(' ','') != '' ? $('.vertical_ban_primary').attr('href', "../register?regtype=softwaretrial&business="+data.business_name+"&vertical="+data.vertical_id) : '';
		$('#g_vertical_img').attr('alt', data.vertical_name + " POS Billing Software").attr('title', data.vertical_name + " POS Billing Software")
		if($.urlParam('type') == 'fruits'){
			(data.g_vertical_img_new).replace(' ','') != '' ? $('#g_vertical_img_new').attr('src', "../../images/vertical-images/"+data.g_vertical_img_new) : '';
			(data.vertical_id).replace(' ','') != '' ? $('.vertical_ban_primary').attr('href', "../../register?regtype=softwaretrial&business="+data.business_name+"&vertical="+data.vertical_id) : '';
		}
		else if($.urlParam('type') == 'ricetraders'){
			(data.g_vertical_img_new).replace(' ','') != '' ? $('#g_vertical_img_new').attr('src', "../../images/vertical-images/"+data.g_vertical_img_new) : '';
			(data.vertical_id).replace(' ','') != '' ? $('.vertical_ban_primary').attr('href', "../../register?regtype=softwaretrial&business="+data.business_name+"&vertical="+data.vertical_id) : '';
		}
		else if($.urlParam('type') == 'supermarket'){
			(data.g_vertical_img_new).replace(' ','') != '' ? $('#g_vertical_img_new').attr('src', "../../images/vertical-images/"+data.g_vertical_img_new) : '';
			(data.vertical_id).replace(' ','') != '' ? $('.vertical_ban_primary').attr('href', "../../register?regtype=softwaretrial&business="+data.business_name+"&vertical="+data.vertical_id) : '';
		}
		else if($.urlParam('type') == 'cakeshop'){
			(data.g_vertical_img_new).replace(' ','') != '' ? $('#g_vertical_img_new').attr('src', "../../images/vertical-images/"+data.g_vertical_img_new) : '';
			(data.vertical_id).replace(' ','') != '' ? $('.vertical_ban_primary').attr('href', "../../register?regtype=softwaretrial&business="+data.business_name+"&vertical="+data.vertical_id) : '';
		}
		else if($.urlParam('type') == 'savouries'){
			(data.g_vertical_img_new).replace(' ','') != '' ? $('#g_vertical_img_new').attr('src', "../../images/vertical-images/"+data.g_vertical_img_new) : '';
			(data.vertical_id).replace(' ','') != '' ? $('.vertical_ban_primary').attr('href', "../../register?regtype=softwaretrial&business="+data.business_name+"&vertical="+data.vertical_id) : '';
		}
	// if(data.business_name == 1 && $.urlParam('type') == 'apparel'){
		
	// 	$('#banner_section_new').addClass(data.banner_img);
	// 	(data.vertical_title1).replace(' ','') != '' ? $('#g_vertical_title1').text(data.vertical_title1) : '';
	// 	(data.g_vertical_title_h2).replace(' ','') != '' ? $('#g_vertical_title_h2').text(data.g_vertical_title_h2) : '';
	// 	(data.g_vertical_img_new).replace(' ','') != '' ? $('#g_vertical_img_new').attr('src', "../images/vertical-images/"+data.g_vertical_img_new) : '';
	// 	$('#g_vertical_img').attr('alt', data.vertical_name + " POS Billing Software").attr('title', data.vertical_name + " POS Billing Software")
	// }
	// else if(data.business_name == 1 && $.urlParam('type') == 'pharmacy'){
		
	// 	$('#banner_section_new').addClass(data.banner_img);
	// 	(data.vertical_title1).replace(' ','') != '' ? $('#g_vertical_title1').text(data.vertical_title1) : '';
	// 	(data.g_vertical_title_h2).replace(' ','') != '' ? $('#g_vertical_title_h2').text(data.g_vertical_title_h2) : '';
	// 	(data.g_vertical_img_new).replace(' ','') != '' ? $('#g_vertical_img_new').attr('src', "../images/vertical-images/"+data.g_vertical_img_new) : '';
	// 	$('#g_vertical_img').attr('alt', data.vertical_name + " POS Billing Software").attr('title', data.vertical_name + " POS Billing Software")
	// }
	if(data.business_name == 1 && $.urlParam('type') == undefined){
		$('#banner_section_new').addClass('hide');
		$('#banner_section').removeClass('hidden');
		$('#banner_section').show();
		(data.vertical_title).replace(' ','') != '' ? $('#g_vertical_title').text(data.vertical_title) : '';
		(data.image_url).replace(' ','') != '' ? $('#g_vertical_img').attr('src', "../images/dynamic_banner/"+data.image_url+".png") : '';
		$('#g_vertical_img').attr('alt', data.vertical_name + " POS Billing Software").attr('title', data.vertical_name + " POS Billing Software");
	}
	else{
		// $('#banner_section_new').addClass('hidden');
		(data.vertical_title).replace(' ','') != '' ? $('#g_vertical_title').text(data.vertical_title) : '';
		(data.image_url).replace(' ','') != '' ? $('#g_vertical_img').attr('src', "../images/dynamic_banner/"+data.image_url+".png") : '';
		$('#g_vertical_img').attr('alt', data.vertical_name + " POS Billing Software").attr('title', data.vertical_name + " POS Billing Software");
	}
	
	if(((data.vertical_name).replace(' ','') != '') || ((data.vertical_id).replace(' ','') != '')){
		setVerticalFunc(data.vertical_name, data.vertical_id)	
	}
	(document.location.pathname && document.location.search) ? 	$('link[rel=canonical]').attr('href', 'https://www.gofrugal.com' + document.location.pathname + document.location.search) : '';
}

function changeMicrofunc(){ 
	$("a").each(function(){
		if($(this).attr('href') != undefined){
			var new_vertical_id = Cookies['g_vertical_id'];
			var vertical_param_val = getAllUrlParams($(this).attr('href')).vertical;
			var business_param_val = getAllUrlParams($(this).attr('href')).business;
			if(new_vertical_id){
				if(vertical_param_val){
					if ($(this).attr('href').indexOf('register') !== -1 &&  file_name != "downloads.html" && file_name != "downloads") {
						$(this).attr('href', $(this).attr('href').replace(vertical_param_val ,new_vertical_id))   
				   }
				}
				if($(this).attr('href').indexOf('plans-pricing') !== -1 && file_name != "plans-pricing.html" && file_name != "plans-pricing"){
					if(vertical_param_val){
						   if(new_vertical_id > 0 && new_vertical_id < 999){
							var pricing_url_val =$(this).attr('href').split('?')[0] + "?micro_vertical="+ new_vertical_id +"&business=" + business_param_val +"&type=" + $.urlParam('type')
//							$(this).attr('href', pricing_url_val)
						   }else{
							   $(this).attr('href', $(this).attr('href').replace(vertical_param_val ,new_vertical_id))
						   }
					}else if(business_param_val && file_name != 'retail-solution' && file_name != 'restaurant-software' && file_name != 'distributor-management-system'){
						if(new_vertical_id > 0 && new_vertical_id < 999){
						var pricing_url_val =$(this).attr('href').split('?')[0] + "?micro_vertical="+ new_vertical_id +"&business=" + business_param_val +"&type=" + $.urlParam('type')
						$(this).attr('href', pricing_url_val)
					   }else{
						   var pricing_url_val =$(this).attr('href').split('?')[0] + "?vertical="+ new_vertical_id +"&business=" + business_param_val +"&type=" + $.urlParam('type')
						$(this).attr('href', pricing_url_val)
					   }
					}	
				}
			}		
		}
	})
}

function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {

        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string'){
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
}



const dynamic_contentJSON = {
"bakery":{	 	 	 
 "title": "Bakery Software | Bakery Shop POS System | Bakery Billing Software",
 "desc": "Bakery software helps to streamline bakery operations (including bakery billing, inventory) and increase profits. Download Gofrugal's Bakery shop POS management software for free!",
 "keywords": "Bakery POS, Bakery POS System, Bakery POS Software, Bakery point of sale, best POS system for bakery, best POS for bakery",
 "vertical_title": "Powerful Bakery Software with Bakery POS billing & more!",
 "vertical_title1": "Powerful Bakery Software with Bakery POS billing & more!",
 "g_vertical_title_h2": "Streamline bakery operations with our bakery POS solution",
 "g_vertical_img_new": "Bakery/Restaurant-Bakery.jpg",
 "banner_img": "g_bakery_banner",
 "image_url":"bakery-confectionery/bakery-banner-visual",
 "image_alt":"",
 "vertical_id":"1203",
 "business_name":"16",
 "vertical_name":"Bakery & Confectioneries"
},	 	 	 	 
"cakeshop":{	 	 	 
 "title": "Cake Shop POS System with Billing - Gofrugal",
 "desc": "Cake POS software is designed for Cake shops to manage POS billing, inventory, accounting & more. Try Gofrugal's Cake shop POS system for free!",
 "keywords": "Cake POS, Cake pos system, cake point of sale, cake pos support, cake restaurant pos",
 "vertical_title": "Cake shop POS software with easy Billing, Inventory",
 "vertical_title1": "Cake shop POS software with easy Billing, Inventory",
 "g_vertical_title_h2":"",
 "g_vertical_img_new": "Bakery/cake-shop.jpg",
 "banner_img": "g_cake_banner",
 "image_url":"bakery-confectionery/cake-shop-img",
 "image_alt":" ",
 "vertical_id":"13",
 "business_name":"16",
 "vertical_name":"Cake shop"
},	 	 	 	 
"savouries":{	 	 	  
 "title": "Snacks shop POS with Billing, Delivery Management",
 "desc": "Snacks shop POS software is designed for savories shops to manage POS billing, distribution, delivery, accounting & more. Try Gofrugal's Snacks shop delivery & distribution management software for free!",
 "keywords": "snack shop pos",
 "vertical_title": "Savories shop POS software with easy billing, delivery & distribution",
 "vertical_title1": "Savories shop POS software with easy billing, delivery & distribution",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Bakery/snack-shop.jpg",
 "banner_img": "g_bakery_banner",
 "image_url":"bakery-confectionery/savouries-snack-img",
 "image_alt":" ",
 "vertical_id":"13",
	"business_name":"16",
 "vertical_name":"Savouries & Snack"
},	 	 	 	 
"sweetshop":{	 	 	 
 "title": "Sweet Shop POS | Production & Batch Management | Try Trial now",
 "desc": "Set up production plans for all your sweets with complete recipe control across outlets .Download Sweet shop management software",
 "keywords": "sweet shop billing software, sweet shop management software",
 "vertical_title": "Keep the sweets on the shelves fresh with sweet shop management software",
 "vertical_title1": "Keep the sweets on the shelves fresh with sweet shop management software",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Bakery/sweet-shop.jpg",
 "banner_img": "g_sweet_banner",
 "image_url":"bakery-confectionery/sweet-shop-img",
 "image_alt":" ",
 "vertical_id":"61",
	"business_name":"16",
 "vertical_name":"Sweet shop"
},	 	 	 	 
"bars":{	 	 	 
 "title": "Bar POS Software | Table & Happy hour management | Try Now",
 "desc": "Manage happy hours,offers & steward wise sales with a bar pos system and bring in more cheers to your business. Download 15 day trial now",
 "keywords": "Bar POS, bar pos system, bar management software, bar pos software, bar point of sale systems",
 "vertical_title": "Bar management software to help you brew more profits",
 "vertical_title1": "Bar POS system that let's you brew more profits!",
 "g_vertical_title_h2": "Increase sales & improve service with bar POS",
 "g_vertical_img_new": "Restaurant-bar/Restaurant-bar.jpg",
 "banner_img": "g_bar_banner",
 "image_url":"bars-breweries/lounge-bar-img",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Bars & Breweries"
},	 	 	 	 
"loungebar":{	 	 	 
 "title": "Bar POS System with Inventory, Billing - Gofrugal",
 "desc": "Bar POS software is designed for bars to manage billing, inventory, accounting, and more. Try Gofrugal's Bar & breweries management software for free.",
 "keywords": "Lounge bar software",
 "vertical_title": "Bar & breweries POS System with Inventory management",
 "vertical_title1": "Bar & breweries POS System with Inventory management",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Restaurant-bar.jpg",
 "banner_img": "g_bar_banner",
 "image_url":"bars-breweries/lounge-bar-img",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Lounge bar"
},	 	 	 	 
"pubs":{	 	 	 
 "title": "Pub POS System with Billing, Inventory Management",
 "desc": "Pub POS software is designed for Pubs to manage billing, inventory, accounting, and more. Try Gofrugal's Pubs management software for free.",
 "keywords": "PUB pos, pub till systems, pub pos system, pub point of sale",
 "vertical_title": "Pub POS Software with easy billing & inventory",
 "vertical_title1": "Pub POS Software with easy billing & inventory",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Restaurant-bar.jpg",
 "banner_img": "g_bar_banner",
 "image_url":"bars-breweries/pubs-img",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Pubs"
},	 	 	 	 
"restobar":{	 	 	 
 "title": "Resto Bar POS Software - Gofrugal",
 "desc": "Resto bar POS software is designed for resto bars to manage billing, inventory, accounting, and more. Try Gofrugal's Resto bar management software for free.",
 "keywords": "resto pos, restopos",
 "vertical_title": "Resto bar POS software with easy billing & inventory",
 "vertical_title1": "Resto bar POS software with easy billing & inventory",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Restaurant-bar.jpg",
 "banner_img": "g_bar_banner",
 "image_url":"bars-breweries/resto-bar-img",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Resto bar"
},	 	 	 	 
"delivery":{	 	 	 
 "title": "Delivery business POS | Cloud Software| 14 day Free Trial",
 "desc": "Manage multiple orders and deliver more with a take away POS software that controls inventory,production and recipe at your kitchen. Try Trial now.",
 "keywords": "pos delivery, delivery pos systems, takeaway pos, pos system for takeaway, takeaway pos software",
 "vertical_title": "Takeaway POS software for hassle free kitchen operations",
 "vertical_title1": "Takeaway POS software for hassle free kitchen operations",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Restaurant-Take-away.jpg",
 "banner_img": "g_qsr_banner",
 "image_url":"",
 "image_alt":"",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Delivery / Take Away"
},	 	 	 	 
"catering":{	 	 	 
 "title": "Catering Software | POS System for Catering Business",
 "desc": "Catering management software is designed for catering businesses to efficiently manage billing, inventory, invoices & reports. Try Gofrugal's Catering POS system for free.",
 "keywords": "catering pos, pos catering, catering software, restaurant catering system",
 "vertical_title": "Best Catering Software",
 "vertical_title1": "Best Catering Software",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Restaurant-Take-away.jpg",
 "banner_img": "g_qsr_banner",
 "image_url":"",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Catering business"
},
"cloudkitchen":{	 	 	 
 "title": "Cloud Kitchen Software | Kitchen Inventory Management | Kitchen POS System",
 "desc": "Cloud kitchen software act as a Kitchen POS system for cloud kitchens to manage all their operations from ordering taking, menu, recipe,inventory, delivery and more. Try Gofrugal's Cloud Kitchen management software for free.",
 "keywords": "cloud kitchen software, Kitchen Inventory Management, Kitchen POS System, kitchen inventory management, cloud kitchen pos, cloud based restaurant inventory management software",
 "vertical_title": "Hassle-free kitchen operations need a robust cloud kitchen software",
 "vertical_title1": "Hassle-free kitchen operations need a robust cloud kitchen software",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Restaurant-Take-away.jpg",
 "banner_img": "g_qsr_banner",
 "image_url":"",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Cloud kitchen"
},	 	 	 	 	 	 	 
"foodtruck":{	 	 	 
 "title": "Food Truck POS | Best POS System for Food Trucks - Gofrugal",
 "desc": "Food truck POS software is designed to efficiently manage billing, inventory, invoices & reports of Food truck business. Try Gofrugal's Foof Truck POS system for free.",
 "keywords": "food truck pos, food truck pos system, pos truck, best pos for food truck, food truck point of sale",
 "vertical_title": "Best Food Truck Point-of-Sale (POS) System",
 "vertical_title1": "Best Food Truck Point-of-Sale (POS) System",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Restaurant-Take-away.jpg",
 "banner_img": "g_truck_banner",
 "image_url":"delivery-take-away/food-truck-img",
 "image_alt":"",
 "vertical_id":"1205",
	"business_name":"16",
 "vertical_name":"Food truck"
},	 	 	 	 
"qsr":{	 	 	 
 "title": "Quick Service Restaurant (QSR) POS System - Gofrugal",
 "desc": "Quick service restaurant POS software is designed to manage restaurant operations effectively & quickly. Try Gofrugal's QSR POS system for free.",
 "keywords": "qsr pos, qsr pos systems, qsr pos software, qsr kitchen display system, qsr point of sale",
 "vertical_title": "Best Quick Service Restaurant (QSR) POS System",
 "vertical_title1": "Best Quick Service Restaurant (QSR) POS System",
 "g_vertical_title_h2": "Delight customers with faster service with a QSR POS",
 "g_vertical_img_new": "QSR/Restaurant-Quick-Service.jpg",
 "banner_img": "g_qsr_banner",
 "image_url":"quick-service/qsr-banner-visual",
 "image_alt":"",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Quick Service Restaurant"
},	 	 	 	 
"bistro":{	 	 	 
 "title": "Best Bistro POS system | Gofrugal",
 "desc": "Bistro POS software is designed with KOT, billing, table management & more. Try Gofrugal's Bistro POS system for free.",
 "keywords": "bistro pos, bistro pos system",
 "vertical_title": "Complete Bistro POS system",
 "vertical_title1": "Complete Bistro POS system",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "QSR/Restaurant-Quick-Service.jpg",
 "banner_img": "g_bistro_banner",
 "image_url":"quick-service/bistro-img",
 "image_alt":"",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Bistro"
},	 	 	 	 
"burgershop":{	 	 	 
 "title": "Download QSR Billing Software | 15 Day Free Trial",
 "desc": " Burger Restaurant POS software is designed with KOT, billing, table management & more. Try Gofrugal's Burger POS system for free.",
 "keywords": "sandwich shop pos",
 "vertical_title": "Complete POS system for Burger Restaurants",
 "vertical_title1": "Complete POS system for Burger Restaurants",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Burger.jpg",
 "banner_img": "g_burger_banner",
 "image_url":"quick-service/burger-sandwich-img",
 "image_alt":"",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Burger & Sandwich shop"
},	 	 	 	 
"cafe":{	 	 	 
 "title": "Cafe POS System | Coffee Shop Management Software ",
 "desc": "Coffee Shop POS system is designed with easy billing, table management & more. Try Gofrugal's Cafe POS Management software for free.",
 "keywords": "coffee shop pos, coffee shop pos system, pos coffee, coffee shop point of sale",
 "vertical_title": "Complete POS System for Cafe/Coffee Shop",
 "vertical_title1": "Complete POS System for Cafe/Coffee Shop",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "QSR/Restaurant-Quick-Service.jpg",
 "banner_img": "g_coffee_banner",
 "image_url":"quick-service/cafe-coffee-img",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Cafe / Coffee shop"
},	 	 	 	 
"canteen":{	 	 	 
 "title": "Canteen Management System | POS software for Cafeteria",
 "desc": "Canteen management system is designed with billing, inventory, accounting & more to easily run a canteen/cafeteria . Try Gofrugal's Cafeteraia/Canteen POS software for free!",
 "keywords": "cafeteria pos, cafeteria pos system, cafeteria point of sale",
 "vertical_title": "Complete POS system for Canteen/Cafeteria",
 "vertical_title1": "Complete POS system for Canteen/Cafeteria",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Canteen.jpg",
 "banner_img": "g_cafe_banner",
 "image_url":"quick-service/cafeteria-canteen-img",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Cafeteria / Canteen"
},	 	 	 	 
"chaatshop":{	 	 	 
 "title": "Chaat Shop Software with POS Billing, Inventory - Gofrugal",
 "desc": "Chatt Shop POS software is designed with billing, inventory, accounting & more. Try Gofrugal's Chaat Shop Software for free!",
 "keywords": "Chaat shop software",
 "vertical_title": "Chaat shop software to manage combos,offers and much more",
 "vertical_title1": "Chaat shop software to manage combos,offers and much more",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/chaat-shop.jpg",
 "banner_img": "g_chaat_banner",
 "image_url":"quick-service/chat-shop-img",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Chaat shop"
},	 	 	 	 
"desserts":{	 	 	 
 "title": "Dessert Shop Software with POS Billing, Inventory - Gofrugal",
 "desc": "Dessert Shop POS software is designed with billing, inventory, accounting & more. Try Gofrugal's Dessert Shop POS System for free!",
 "keywords": "dessert shop software",
 "vertical_title": "Dessert Shop Software with Billing, Inventory management",
 "vertical_title1": "Dessert Shop Software with Billing, Inventory management",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Desserts.jpg",
 "banner_img": "g_dessert_banner",
 "image_url":"quick-service/desserts-caked-img",
 "image_alt":" ",
 "vertical_id":"13",
	"business_name":"16",
 "vertical_name":"Desserts & Cakes"
},	 	 	 	 
"foodcourt":{	 	 	 
 "title": "Food Court Management System | Food Court POS Billing",
 "desc": "Food court POS software is designed with easy POS billing, inventory, accounting & more. Try Gofrugal's Food Court Management System for free!",
 "keywords": "food court pos, food court pos system",
 "vertical_title": "Food Court Management Software with POS billing, Inventory Management & more",
 "vertical_title1": "Food Court Management Software with POS billing, Inventory Management & more",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Food-street.jpg",
 "banner_img": "g_fstreet_banner",
 "image_url":"quick-service/food-court-img",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Food court / Food street"
},	 	 	 	 
"icecreamshop":{	 	 	 
 "title": "Ice Cream Shop POS System | Ice Cream Billing & Inventory",
 "desc": "Ice cream shop POS software is designed with easy POS billing, inventory, accounting & more. Try Gofrugal's POS System for Ice cream shop for free!",
 "keywords": "ice cream pos, pos system for ice cream shop, best pos system for ice cream shop",
 "vertical_title": "Best POS system for Ice Cream Shop",
 "vertical_title1": "Best POS system for Ice Cream Shop",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Icecream.jpg",
 "banner_img": "g_ice_banner",
 "image_url":"quick-service/ice-cream-img",
 "image_alt":" ",
 "vertical_id":"36",
	"business_name":"16",
 "vertical_name":"Ice cream shop"
},	 	 	 	 
"juiceshop":{	 	 	 
 "title": "Juice Bar POS System | Juice Shop Billing Software",
 "desc": "Juice shop POS System is designed with easy POS billing, inventory, accounting & more. Try Gofrugal's Juice bar POS Software for free!",
 "keywords": "juice bar pos",
 "vertical_title": "Best POS system for Juice Shop",
 "vertical_title1": "Best POS system for Juice Shop",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Juice-shop.jpg",
 "banner_img": "g_juice_banner",
 "image_url":"quick-service/juice-shop-img",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Juice shop"
},	 	 	 	 
"pizzashop":{	 	 	 
 "title": "Pizza POS System | Pizza Shop Point-of-Sale Software",
 "desc": "Pizza shop POS System is designed with easy POS billing, inventory, accounting & more. Try Gofrugal's Pizza shop POS Software for free!",
 "keywords": "pizza software, pizza pos system, pos system for pizza shop, pizza shop software",
 "vertical_title": "Best POS system for Pizza Shop",
 "vertical_title1": "Best POS system for Pizza Shop",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Pizza.jpg",
 "banner_img": "g_qsr_banner",
 "image_url":"quick-service/pizza-shop-img",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Pizza shop"
},	 	 	 	 
"teahouse":{	 	 	 
 "title": "Tea Shop POS System | Tea Shop Billing Software",
 "desc": "Tea shop POS System is designed with easy POS billing, inventory, accounting & more. Try Gofrugal's Tea shop POS Software for free!",
 "keywords": "Tea shop POS",
 "vertical_title": "Tea shop POS system with KOT, Table Management",
 "vertical_title1": "Tea shop POS system with KOT, Table Management",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "QSR/Restaurant-Quick-Service.jpg",
 "banner_img": "g_coffee_banner",
 "image_url":"quick-service/tea-house-img",
 "image_alt":" ",
 "vertical_id":"13",
	"business_name":"16",
 "vertical_name":"Tea house"
},	 	 	 	 
"restaurant":{	 	 	 
 "title": "Restaurant POS Software | Restaurant Billing Software | KOT system",
 "desc": "Restaurant POS software helps to manage restaurant billing, ordering, inventory tracking, kitchen order taking(KOT software), and more.  Try GoFrugal's Restaurant billing system & POS for free!",
 "keywords": "restaurant pos software, restaurant pos system, restaurant software, restaurant billing software, kot software for restaurant, restaurant kot software, pos for restaurant india, restaurant pos india, restaurant pos, restaurant billing software india",
 "vertical_title": "Restaurant POS Software with restaurant billing, KOT",
 "vertical_title1": "Restaurant POS Software with restaurant billing, KOT",
 "g_vertical_title_h2": "Restaurant POS system is a simple POS software designed for restaurants to effectively manage inventory tracking, kitchen order tracking(KOT), and restaurant billing.",
 "g_vertical_img_new": "Restaurant-bar/Rest-Restaurant.jpg",
 "banner_img": "g_restaurant_banner",
 "image_url":"restaurant/restaurant",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Restaurant"
},	 	 	 	 
"bbq":{	 	 	 
 "title": "BBQ Restaurant POS | Download Free BBQ POS Software - Gofrugal",
 "desc": "Barbecue (BBQ) shop POS software helps manage kitchen inventory, order taking, billing & more in BBQ shops. Try Gofrugal's BBQ shop POS for free!",
 "keywords": "bbq pos,",
 "vertical_title": "Complete BBQ POS Software with Kitchen inventory & order tracking!",
 "vertical_title1": "Complete BBQ POS Software with Kitchen inventory & order tracking!",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Rest-Restaurant.jpg",
 "banner_img": "g_restaurant_banner",
 "image_url":"restaurant/bbq-img",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Barbecue - BBQ"
},	 	 	 	 
"briyani":{	 	 	 
 "title": "Biryani Shop Software | Download Biryani Shop POS - Gofrugal",
 "desc": "Biryani shop POS software helps manage kitchen inventory, order taking, billing & more in Briyani shops. Try Gofrugal's Biryani shop management software for free!",
 "keywords": "biryani software",
 "vertical_title": "Track every ingredient of your lip smacking briyani with accurate recipe management",
 "vertical_title1": "Track every ingredient of your lip smacking briyani with accurate recipe management",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Rest-Restaurant.jpg",
 "banner_img": "g_restaurant_banner",
 "image_url":"restaurant/briyani-img",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Briyani"
},	 	 	 	 
"buffet":{	 	 	 
 "title": "Buffet Management Software for Restaurants | Buffet POS - Gofrugal",
 "desc": "Streamline buffet operations for restaurants with built in table,recipe & kitchen management and avoid wastage with Gofrugal's buffet POS software. Try now!",
 "keywords": "buffet software, buffet pos, pos buffet",
 "vertical_title": "Complete Buffet Management Software for Restaurants",
 "vertical_title1": "Complete Buffet Management Software for Restaurants",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Rest-Restaurant.jpg",
 "banner_img": "g_buffet_banner",
 "image_url":"restaurant/buffet-img",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Buffet"
},	 	 	 	 
"drivein":{	 	 	 
 "title": "Drive-Thru POS system for Restaurants | Drive-in Restaurant POS - Gofrugal",
 "desc": "Streamline drive-thru restaurant operations with built in ordering system, easy billing & inventory management with Gofrugal's Drive-thru restaurant POS software. Try now!",
 "keywords": "Drive in restaurant management",
 "vertical_title": "Complete Drive-thru Restaurant POS system!",
 "vertical_title1": "Complete Drive-thru Restaurant POS system!",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Rest-Restaurant.jpg",
 "banner_img": "g_drive_banner",
 "image_url":"restaurant/drive-in-img",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Drive - In"
},	 	 	 	 
"selfservice":{	 	 	 
 "title": "Self Ordering Kiosk for Restaurants | Self service Kiosk POS - Gofrugal",
 "desc": "Self ordering restaurant kiosk POS software simplifies the operations in the self service restaurants. Try Gofrugal's Restaurant Kiosk Pos for free!",
 "keywords": "self service pos system",
 "vertical_title": "Complete Self ordering Restaurant Kiosk Software",
 "vertical_title1": "Complete Self ordering Restaurant Kiosk Software",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Rest-Restaurant.jpg",
 "banner_img": "g_restaurant_banner",
 "image_url":"restaurant/self-service-img",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Self service"
},	 	 	 	 
"multichain":{	 	 	 
 "title": "Download Restaurant Chain Management software",
 "desc": "Chain restaurant software to manage all your outlets and central kitchen. Inventory, accounting & more. keep 360 control Try trial now",
 "keywords": "chain restaurant software, chain restaurant pos",
 "vertical_title": "Chain restaurant software to easily manage multi-location restaurants",
 "vertical_title1": "Chain restaurant software to easily manage multi-location restaurants",
 "g_vertical_title_h2": "Ensure streamlined operations across outlets",
 "g_vertical_img_new": "Restaurant-bar/Rest-Multi-Chain.jpg",
 "banner_img": "g_multichain_banner",
 "image_url":"multi-chain/multi-chain",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Multi-Chain operations"
},	 	 	 	 
"centralkitchen":{	 	 	 
 "title": "Kitchen Management System | Central Kitchen Management Software",
 "desc": "Central kitchen management system helps the kitchen to manage inventory requests, orders & analyze wastage with accurate reports. Download Gofrugal's Kitchen management software for free.",
 "keywords": "central kitchen management, central kitchen software",
 "vertical_title": "Central kitchen management to maintain taste consistency across your outlets",
 "vertical_title1": "Central kitchen management to maintain taste consistency across your outlets",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Rest-Multi-Chain.jpg",
 "banner_img": "g_multichain_banner",
 "image_url":"multi-chain/ckm-img",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Central kitchen management"
},	 	 	 	 
"franchise":{	 	 	 
 "title": "Franchise Management software | Download Trial",
 "desc": "Manage your franchise with centralised inventory control, stock request/transfer options & know brand insights from all your franchise outlets",
 "keywords": "franchise management software",
 "vertical_title": "Powerful Franchise management software for Restaurants",
 "vertical_title1": "Powerful Franchise management software for Restaurants",
	"g_vertical_title_h2":"",
 "g_vertical_img_new": "Restaurant-bar/Rest-Multi-Chain.jpg",
 "banner_img": "g_multichain_banner",
 "image_url":"multi-chain/franchise-img",
 "image_alt":" ",
 "vertical_id":"28",
	"business_name":"16",
 "vertical_name":"Franchise management"
},	 	 	 	 
"apparel":{	 	 	 
 "title":"Apparel Software | Apparel Store POS system | Retail Apparel Billing",
 "desc":"Apparel store software helps retail apparel shops effectively maintain inventory, billing, and more. Manage your Apparel stores now with Gofrugal's Apparel software!",
 "keywords":"Apparel pos software, apparel pos system, apparel inventory management",
 "vertical_title":"Powerful Apparel POS Software with Billing & Inventory!",
	"vertical_title1":"Powerful Apparel POS Software with Billing & Inventory!",
	"g_vertical_title_h2":"Grow your business efficiently with our apparel and footwear POS solutions",
	"g_vertical_img_new": "Apparel/apparel_tablet.jpg",
	"banner_img": "apparel_banner",
 "image_url":"apparel/apparel-clothing",
 "image_alt":" ",
 "vertical_id":"1104",
	"business_name":"1",
 "vertical_name":"Apparel & Footwear"
},	 	 	 	 
"textile":{	 	 	 
 "title":"Textile POS Software | Fabric Inventory & Textile Accounting ",
 "desc":"Textile ERP software designed for textiles to maintain textile inventory, accounting, billing, and more. Download Gofrugal's Textile POS software for free!",
 "keywords":"Textile billing software, textile shop management, textile pos software, textile inventory management",
 "vertical_title":"Textile Software with Billing, Accounting & Inventory management",
	"vertical_title1":"Textile Software with Billing, Accounting & Inventory management",
	"g_vertical_title_h2":"Grow your business efficiently with our textile POS solutions",
	"g_vertical_img_new": "Apparel/Retail-Textile.jpg",
	"banner_img": "apparel_banner",
 "image_url":"apparel/textile",
 "image_alt":" ",
 "vertical_id":"4",
	"business_name":"1",
 "vertical_name":"Textile"
},	 	 	 	 
"garment":{	 	 	 
 "title":"Garments Software | Garment Inventory & Billing Software | Garment POS System",
 "desc":"Garment store software is designed for garments to manage garments inventory, billing, accounting, business management & more. Try Gofrugal's Garments POS with Billing & inventory for free!",
 "keywords":"Garment billing software, garment shop management, garment pos software, garment inventory management",
 "vertical_title":"Garments Software with easy Billing & Inventory management!",
	"vertical_title1":"Garments Software with easy Billing & Inventory management!",
	"g_vertical_title_h2":"Grow your business efficiently with our readymade garments POS solutions",
	"g_vertical_img_new": "Apparel/Retail-Readymade-Garment.jpg",
	"banner_img": "apparel_banner",
 "image_url":"apparel/readymade-garment",
 "image_alt":" ",
 "vertical_id":"5",
	"business_name":"1",
 "vertical_name":"Readymade Garment"
},	 	 	 	 
"shoes":{	 	 	 
 "title":"Shoe POS Software | Shoe Shop Inventory Management",
 "desc":"Shoe shop POS software designed for Shoe stores to maintain shoe inventory, billing, and more. Download Gofrugal's Shoe shop management software for free!",
 "keywords":"Shoe shop billing software, shoe shop management, shoe store pos software, shoe shop inventory management",
 "vertical_title":"Shoe Store POS Software with Shoe Inventory management & Billing!",
	"vertical_title1":"Shoe Store POS Software with Shoe Inventory management & Billing!",
	"g_vertical_title_h2":"Grow your business efficiently with our shoes POS solutions",
	"g_vertical_img_new": "Apparel/Retail-Shoes.jpg",
	"banner_img": "retailban_shoe",
 "image_url":"apparel/shoes",
 "image_alt":" ",
 "vertical_id":"29",
	"business_name":"1",
 "vertical_name":"Shoes"
},	 	 	 	 
"footwear":{	 	 	 
 "title":"Footwear POS Software | Footwear Retail ERP | Footwear Inventory Management",
 "desc":"Footwear shop POS software designed to maintain shoe inventory, billing, and more. Download Gofrugal's Footwear inventory & billing management software for free!",
 "keywords":"Footwear shop billing software, footwear store management, footwear store pos software, footwear shop inventory management",
 "vertical_title":"Footwear POS Software with Inventory management & Billing!",
	"vertical_title1":"Footwear POS Software with Inventory management & Billing!",
	"g_vertical_title_h2":"Grow your business efficiently with our footwear POS solutions",
	"g_vertical_img_new": "Apparel/Retail-Footwear.jpg",
	"banner_img": "retailban_footwear",
 "image_url":"apparel/footwear",
 "image_alt":" ",
 "vertical_id":"29",
	"business_name":"1",
 "vertical_name":"Footwear"
},	 	 	 	 
"clothing":{	 	 	 
 "title":"Clothing Store POS Software | Clothing Billing & Inventory Management",
 "desc":"Clothing POS system helps clothing stores to maintain clothing inventory and billing from a single software. Mange your clothing shops with Gofrugal's Clothing store software for free!",
 "keywords":"Apparel & clothing software, apparel & clothing shop management, apparel & clothing pos software, apparel & clothing inventory management",
 "vertical_title":"Powerful Clothing Store POS Software with Billing & Inventory!",
	"vertical_title1":"Powerful Clothing Store POS Software with Billing & Inventory!",
	"g_vertical_title_h2":"Grow your business efficiently with our clothing POS solutions",
	"g_vertical_img_new": "Apparel/Retail-Clothing.jpg",
	"banner_img": "apparel_banner",
 "image_url":"apparel/apparel-clothing",
 "image_alt":" ",
 "vertical_id":"5",
	"business_name":"1",
 "vertical_name":"Apparel & Clothing"
},	 	 	 	 
"boutique":{	 	 	 
 "title":"Boutique POS System | Billing Software for Boutique Store - Gofrugal",
 "desc":" Boutique POS software helps fashion boutiques to achieve high turnover in merchandise, balance buying, easy billing and more. Download Gofrugal's Boutique POS billing system for free!",
 "keywords":"Boutique software: Achieve high turnover in merchandise, balance buying and replenishment with on-premise and cloud-based POS for boutique business",
 "vertical_title":"Boutique POS Software with easy Billing & Inventory management!",
	"vertical_title1":"Boutique POS Software with easy Billing & Inventory management!",
	"g_vertical_title_h2":"Grow your business efficiently with our boutiques POS solutions",
	"g_vertical_img_new": "Apparel/Retail-Boutiques.jpg",
	"banner_img": "retailban_boutique",
 "image_url":"apparel/boutique",
 "image_alt":" ",
 "vertical_id":"5",
	"business_name":"1",
 "vertical_name":"Boutiques"
},	 	 	 	 
"fancycostume":{	 	 	 
 "title":"Fancy Costume POS Software | Costume Store Billing - Gofrugal",
 "desc":"Fancy Costume POS software designed for costume stores to maintain inventory, billing, and more. Download Gofrugal's Fancy costume shop management software for free!",
 "keywords":"Fancy costume billing software, fancy costume shop management, fancy costume pos software, fancy costume inventory management",
 "vertical_title":"More walk-in customers and trending inventory with fancy costume POS",
	"vertical_title1":"More walk-in customers and trending inventory with fancy costume POS",
	"g_vertical_title_h2":"Grow your business efficiently with our fancy costume POS solutions",
	"g_vertical_img_new": "Apparel/Retail-Fancy-costume.jpg",
	"banner_img": "retailban_costume",
 "image_url":"apparel/fancy-costume",
 "image_alt":" ",
 "vertical_id":"5",
	"business_name":"1",
 "vertical_name":"Fancy costume"
},	 	 	 	 
"electrical":{	 	 	 
 "title":"Retail Electrical Shop POS | Billing Software for Electrical Shops",
 "desc":"Electrical store POS software designed to manage electrical shop billing,  invoicing, accounting & more. Download Gofrugal's Electrical shop billing system for free.",
 "keywords":"Electrical shop POS, Electrical shop software, electrical billing software",
 "vertical_title":"Powerful Electrical Shop POS System with easy billing, invoicing & more!",
	"vertical_title1":"Powerful Electrical Shop POS System with easy billing, invoicing & more!",
	"g_vertical_title_h2":"Grow your business efficiently with our electrical POS solutions",
	"g_vertical_img_new": "Electronics/Retail-Electrical.jpg",
	"banner_img": "retail_elecban",
 "image_url":"electronics/electrical-electronics",
 "image_alt":" ",
 "vertical_id":"7",
	"business_name":"1",
 "vertical_name":"Electrical"
},	 	 	 	 
"computerhardware":{	 	 	 
 "title":"Computer Hardware Store POS Software | Download Computer Store Billing System",
 "desc":"Computer store POS System designed to manage Computer hardware & accessories billing,  invoicing, inventory, accounting & more. Download Gofrugal's Computer hardware shop billing system for free.",
 "keywords":"Computer hardware shop POS, computer hardware shop software, computer hardware billing software",
 "vertical_title":"Computer Hardware Shop POS System with easy billing, invoicing & more!",
	"vertical_title1":"Computer Hardware Shop POS System with easy billing, invoicing & more!",
	"g_vertical_title_h2":"Grow your business efficiently with our computer hardware POS solutions",
	"g_vertical_img_new": "Electronics/Retail-Computer_Hardware.jpg",
	"banner_img": "retailhardban",
 "image_url":"electronics/computer-hardware",
 "image_alt":" ",
 "vertical_id":"15",
	"business_name":"1",
 "vertical_name":"Computer hardware"
},	 	 	 	 
"mobilephone":{	 	 	 
 "title":"Mobile Shop Billing Software |  Cell Phone Store POS System | Mobile Store Software",
 "desc":"Mobile shop POS software helps Mobile phone and accessories shops to manage billing, inventory, stock management and more. Download Gofrugal's Mobile shop management software for free!",
 "keywords":"Mobile phone shop POS, mobile accessories billing software, mobile phone shop software",
 "vertical_title":"Powerful Mobile Shop POS Software With Billing, Inventory Management",
	"vertical_title1":"Powerful Mobile Shop POS Software With Billing, Inventory Management",
	"g_vertical_title_h2":"Grow your business efficiently with our mobile shop POS solutions",
	"g_vertical_img_new": "Electronics/Retail-Mobile-Phone.jpg",
	"banner_img": "retailmobileban",
 "image_url":"electronics/mobile-accessories",
 "image_alt":" ",
 "vertical_id":"16",
	"business_name":"1",
 "vertical_name":"Mobile phone & accessories"
},	 	 	 	 
"electronics":{	 	 	 
 "title":"Electronic Store POS System | Electronics Shop Billing & Invoicing Software",
 "desc":"Electronics shop POS software designed to manage electronics billing,  invoicing, inventory, accounting & more. Download Gofrugal's Electronics store billing & invoicing system for free.",
 "keywords":"Electronics shop POS, electronics shop software, electronics shop billing software",
 "vertical_title":"Powerful Electronics shop POS System with easy billing, invoicing & more!",
	"vertical_title1":"Powerful Electronics shop POS System with easy billing, invoicing & more!",
	"g_vertical_title_h2":"Grow your business efficiently with our electronics POS solutions",
	"g_vertical_img_new": "Electronics/Retail-Electronics.jpg",
	"banner_img": "electrical_banner",
 "image_url":"electronics/electronics",
 "image_alt":" ",
 "vertical_id":"22",
	"business_name":"1",
 "vertical_name":"Electronics"
},	 	 	 	 
"homeappliance":{	 	 	 
 "title":"Home Appliance Store POS | Billing Solution for Home Appliances",
 "desc":"Home appliances store POS software designed to manage home appliances billing,  invoicing, inventory & more. Download Gofrugal's Home appliances shop billing system for free.",
 "keywords":"Home appliance shop POS, home appliance shop software, home appliance shop billing software",
 "vertical_title":"Powerful Home Appliances Store POS Software with easy billing, invoicing & more!",
	"vertical_title1":"Powerful Home Appliances Store POS Software with easy billing, invoicing & more!",
	"g_vertical_title_h2":"Grow your business efficiently with our home appliances POS solutions",
	"g_vertical_img_new": "Electronics/Retail-Home-Appliances.jpg",
	"banner_img": "electrical_banner",
 "image_url":"electronics/home-appliances",
 "image_alt":" ",
 "vertical_id":"22",
	"business_name":"1",
 "vertical_name":"Home appliances"
},	 	 	 	 
"camera":{	 	 	 
 "title":"Camera Shop POS System | Camera Store Billing Software",
 "desc":"Camera store POS software designed to manage camera & photography accessories shop billing,  invoicing, inventory, accounting & more. Download Gofrugal's Camera store billing system for free.",
 "keywords":"Camera accessories POS, camera accessories billing software, camera accessories software",
 "vertical_title":"Powerful Camera Shop POS System with easy billing, invoicing & more!",
	"vertical_title1":"Powerful Camera Shop POS System with easy billing, invoicing & more!",
	"g_vertical_title_h2":"Grow your business efficiently with our camera POS solutions",
	"g_vertical_img_new": "Electronics/Retail-Camera.jpg",
	"banner_img": "electrical_banner",
 "image_url":"electronics/camera-accessories",
 "image_alt":" ",
 "vertical_id":"15",
	"business_name":"1",
 "vertical_name":"Camera & Accessories"
},	 	 	 	 
"games":{	 	 	 
 "title":"Game store Point-of-sale (POS) Software - Gofrugal",
 "desc":"Game store POS software designed for Video game shops to maintain billing, accounting & more. Download Gofrugal's Video Game store POS software for free!",
 "keywords":"Video accessories POS, games accessories billing software, video accessories software",
 "vertical_title":"The best Game shop POS Software",
	"vertical_title1":"The best Game shop POS Software",
	"g_vertical_title_h2":"Grow your business efficiently with our games accessories POS solutions",
	"g_vertical_img_new": "Electronics/Retail-Games.jpg",
	"banner_img": "retail_gamesban",
 "image_url":"electronics/video-games",
 "image_alt":" ",
 "vertical_id":"22",
	"business_name":"1",
 "vertical_name":"Videos & Games Accessories"
},	 	 	 	 
"department":{	 	 	 
 "title":"Departmental Store Software | Departmental Store POS Software Free Download",
 "desc":"Departmental store software is designed for departmental stores to manage departmental store billing, inventory, accounting, and more. Try Gofrugal's departmental POS & billing software for free!",
 "keywords":"Departmental store software, departmental store inventory management, departmental store billing software, departmental store pos",
 "vertical_title":"Powerful Departmental store software with Billing, Inventory & more!",
	"vertical_title1":"Powerful Departmental store software with Billing, Inventory & more!",
	"g_vertical_title_h2":"Grow your business efficiently with our department stores POS solutions",
	"g_vertical_img_new": "Hypermarket/Hypermarket.jpg",
	"banner_img": "department_banner",
 "image_url":"hypermarket/department-store",
 "image_alt":" ",
 "vertical_id":"2",
	"business_name":"1",
 "vertical_name":"Department Stores"
},	 	 	 	 
"convenience":{	 	 	 
 "title":"Convenience Store POS System | Convenience Store Billing Software Free Download",
 "desc":"Convenience store POS software is designed for convenience stores to manage billing, inventory, accounting, and more. Try Gofrugal's Convenience store billing software for free!",
 "keywords":"Convenience store software, convenience store inventory management, convenience store billing software, convenience store pos",
 "vertical_title":"Convenience Store POS System with easy Billing & Inventory!",
	"vertical_title1":"Convenience Store POS System with easy Billing & Inventory!",
	"g_vertical_title_h2":"Grow your business efficiently with our convenience store POS solutions",
	"g_vertical_img_new": "Hypermarket/Hypermarket.jpg",
	"banner_img": "department_banner",
 "image_url":"hypermarket/convenience-store",
 "image_alt":" ",
 "vertical_id":"59",
	"business_name":"1",
 "vertical_name":"Convenience store"
},	 	 	 	 
"hypermarket":{	 	 	 
 "title":"Hypermarket Software | Hypermarket Billing System | Hypermarket POS",
 "desc":"Hypermarket software is designed for hypermarkets (supermarket with departmental stores) to manage their billing, inventory, accounting, and more. Try Gofrugal's hypermarket billing & POS system for free!",
 "keywords":"Hypermarket software, hypermarket inventory management, hypermarket billing software, hypermarket pos",
 "vertical_title":"Efficient Hypermarket software with hypermarket POS billing, and more!",
	"vertical_title1":"Efficient Hypermarket software with hypermarket POS billing, and more!",
	"g_vertical_title_h2":"Grow your business efficiently with our hypermarket POS solutions",
	"g_vertical_img_new": "Hypermarket/Hypermarket.jpg",
	"banner_img": "department_banner",
 "image_url":"hypermarket/hypermarket-departmental",
 "image_alt":" ",
 "vertical_id":"1102",
	"business_name":"1",
 "vertical_name":"Hypermarket"
},	 	 	 	 
"fancystore":{	 	 	 
 "title":"Fancy Store Billing Software | Fancy Shop POS - Gofrugal",
 "desc":"Fancy shop POS software is build with simple billing, inventory management, accounting & more. Download Gofrugal's Fancy store billing software for free.",
 "keywords":"Fancy store software, fancy store billing software, fancy store pos software, fancy store pos system",
 "vertical_title":"Fancy Store POS Software with Billing, Inventory & Accounting",
	"vertical_title1":"Fancy Store POS Software with Billing, Inventory & Accounting",
	"g_vertical_title_h2":"Grow your business efficiently with our fancy store POS solutions",
	"g_vertical_img_new": "Lifestyle/fancy-store.jpg",
	"banner_img": "retailban_fancystore",
 "image_url":"lifestyle-fashion/fancy-store",
 "image_alt":" ",
 "vertical_id":"9",
	"business_name":"1",
 "vertical_name":"Fancy Store"
},	 	 	 	 
"bookshop":{	 	 	 
 "title":"Book Store Software | Book Shop Billing Management - Gofrugal",
 "desc":"Book shop POS software is build with simple book shop inventory management , easy billing, accounting & more.Download Gofrugal's Book store management software for free.",
 "keywords":"Book shop software, book store billing software, book shop pos software, book store pos system",
 "vertical_title":"Book Shop Software with books Inventory, Billing!",
	"vertical_title1":"Book Shop Software with books Inventory, Billing!",
	"g_vertical_title_h2":"Grow your business efficiently with our book shop POS solutions",
	"g_vertical_img_new": "Lifestyle/Book-shop.jpg",
	"banner_img": "retailban_bookshop",
 "image_url":"lifestyle-fashion/books-shop",
 "image_alt":" ",
 "vertical_id":"11",
	"business_name":"1",
 "vertical_name":"Books Shop"
},	 	 	 	 
"stationery":{	 	 	 
 "title":"Stationary Shop POS Software with Billing, Inventory - Gofrugal",
 "desc":"Stationery shop POS software is build with easy retail POS billing, inventory management, accounting & more. Download Gofrugal's Stationary shop management software for free.",
 "keywords":"Stationery shop software, Stationery store billing software, Stationery shop pos software, Stationery store pos system",
 "vertical_title":"Stationery shop POS Software with Billing & Inventory",
	"vertical_title1":"Stationery shop POS Software with Billing & Inventory",
	"g_vertical_title_h2":"Grow your business efficiently with our stationery shop POS solutions",
	"g_vertical_img_new": "Lifestyle/Stationary-shop.jpg",
	"banner_img": "retailban_station",
 "image_url":"lifestyle-fashion/stationery-shop",
 "image_alt":" ",
 "vertical_id":"12",
	"business_name":"1",
 "vertical_name":"Stationery Shop"
},	 	 	 	 
"bookpublishing":{	 	 	 
 "title":"Book Publishing Store POS Software | Gofrugal",
 "desc":"Book Publishing Store POS system is designed with easy billing, inventory, accounting & more. Try Gofrugal's Book publishing Store POS software for free.",
 "keywords":"Book publishing shop software, Book publishing store billing software, Book publishing shop pos software, Book publishing store pos system",
 "vertical_title":"Complete POS system for Book Publishing Store",
	"vertical_title1":"Complete POS system for Book Publishing Store",
	"g_vertical_title_h2":"Grow your business efficiently with our book publishing POS solutions",
	"g_vertical_img_new": "Lifestyle/Book-publishing.jpg",
	"banner_img": "retailban_bookpublish",
 "image_url":"lifestyle-fashion/books-shop",
 "image_alt":" ",
 "vertical_id":"11",
	"business_name":"1",
 "vertical_name":"Books & Publishing"
},	 	 	 	 
"photoshop":{	 	 	 
 "title":"Photography Studio Management Software with Billing, Inventory",
 "desc":"Photography shop POS software is build with simple POS billing, inventory management, accounting & more.Download Gofrugal's Photography studio management software for free.",
 "keywords":"Photo shop software, photo shop billing software, photo shop pos software, photo shop pos system",
 "vertical_title":"Photography shop management software with Billing & Inventory",
	"vertical_title1":"Photography shop management software with Billing & Inventory",
	"g_vertical_title_h2":"Grow your business efficiently with our photo shop retail POS solutions",
	"g_vertical_img_new": "Lifestyle/Photo-shop.jpg",
	"banner_img": "retailban_photoshop",
 "image_url":"lifestyle-fashion/photo-shop",
 "image_alt":" ",
 "vertical_id":"14",
	"business_name":"1",
 "vertical_name":"Photo Shop"
},	 	 	 	 
"toys":{	 	 	 
 "title":"Toy Store POS System | Toy Shop Billing Software - Gofrugal",
 "desc":"Toy store POS software is build with easy retail POS billing, inventory management, accounting & more. Download Gofrugal's Toy shop management software for free.",
 "keywords":"Toys shop software, toy shop billing software, toy shop pos software, toy shop pos system",
 "vertical_title":"Best Retail Toy store POS System ",
	"vertical_title1":"Best Retail Toy store POS System ",
	"g_vertical_title_h2":"Grow your business efficiently with our toys retail POS solutions",
	"g_vertical_img_new": "Lifestyle/Toys.jpg",
	"banner_img": "retailban_toys",
 "image_url":"lifestyle-fashion/kids-fashion",
 "image_alt":" ",
 "vertical_id":"17",
	"business_name":"1",
 "vertical_name":"Toys, Baby shops & Kids fashion"
},	 	 	 	 
"opticals":{	 	 	 
 "title":"Optical Shop Software with Billing, Inventory - Gofrugal",
 "desc":"Optical shop POS software is build with simple POS billing, inventory management, accounting & more.Download Gofrugal's retail optical shop management software for free.",
 "keywords":"Optical shop software, optical shop billing software, optical shop pos software, optical shop pos system",
 "vertical_title":"Optical shop management software with Billing & Inventory",
	"vertical_title1":"Optical shop management software with Billing & Inventory",
	"g_vertical_title_h2":"Grow your business efficiently with our opticals POS solutions",
	"g_vertical_img_new": "Lifestyle/Optical.jpg",
	"banner_img": "retailban_opticals",
 "image_url":"lifestyle-fashion/opticals",
 "image_alt":"",
 "vertical_id":"18",
	"business_name":"1",
 "vertical_name":"Opticals"
},	 	 	 	 
"musicshop":{	 	 	 
 "title":"Music Store POS System | Music Shop Billing Software - Gofrugal",
 "desc":"Music shop POS software is designed to manage music instrument billing, inventory, accounting & more. Try Gofrugal's Music instrument store POS system for free!",
 "keywords":"music shop software, music shop billing software, music shop pos software, music shop pos system",
 "vertical_title":"Music store POS software with Billing, Accounting",
	"vertical_title1":"Music store POS software with Billing, Accounting",
	"g_vertical_title_h2":"Grow your business efficiently with our music shop POS solutions",
	"g_vertical_img_new": "Lifestyle/Music-and-Movies.jpg",
	"banner_img": "retailban_music",
 "image_url":"lifestyle-fashion/music-movies",
 "image_alt":"",
 "vertical_id":"25",
	"business_name":"1",
 "vertical_name":"Music & Movies"
},	 	 	 	 
"furniture":{	 	 	 
 "title":"Furniture shop POS Software | Furniture Billing Software - Gofrugal",
 "desc":"Furniture store POS software is designed to manage furniture billing, inventory, accounting & more. Try Gofrugal's Furniture shop POS system for free!",
 "keywords":"Furniture shop software, furniture shop billing software, furniture shop pos software, furniture shop pos system",
 "vertical_title":"Furniture store POS software with Billing, Accounting",
	"vertical_title1":"Furniture store POS software with Billing, Accounting",
	"g_vertical_title_h2":"Grow your business efficiently with our furniture retail POS solutions",
	"g_vertical_img_new": "Lifestyle/Home-Decors.jpg",
	"banner_img": "retailban_furniture",
 "image_url":"lifestyle-fashion/homedecor-furniture",
 "image_alt":" ",
 "vertical_id":"26",
	"business_name":"1",
 "vertical_name":"Home decor & Furniture"
},	 	 	 	 
"glasscrockeries":{	 	 	 
 "title":"Glass shop Management Software | Glass store POS Billing Software",
 "desc":"Glass store management software is designed to manage glass billing, inventory, accounting & more. Try Gofrugal's Glass shop POS system for free!",
 "keywords":"Glass shop software, crockeries shop billing software, glass shop pos software, crockeries shop pos system",
 "vertical_title":"Glass shop management software with POS billing, Inventory & accounting",
	"vertical_title1":"Glass shop management software with POS billing, Inventory & accounting",
	"g_vertical_title_h2":"Grow your business efficiently with our glass and crockeries retail POS solutions",
	"g_vertical_img_new": "Lifestyle/Glass-and-Crockeries.jpg",
	"banner_img": "retailban_glass",
 "image_url":"lifestyle-fashion/glass-crockeries",
 "image_alt":" ",
 "vertical_id":"32",
	"business_name":"1",
 "vertical_name":"Glass And Crockeries"
},	 	 	 	 
"fashion":{	 	 	 
 "title":"Jewellery Software | Jewelry Shop Billing Software | Jewellery Inventory Software",
 "desc":"Jewelry shop POS software is build with simple book shop inventory management , easy billing, accounting & more.Download Gofrugal's Book store management software for free.",
 "keywords":"Fashion jewellery shop software, fashion jewellery shop billing software, fashion jewellery shop pos software, fashion jewellery shop pos system",
 "vertical_title":"Jewellery Software to manage Jewelry Shop Billing & Inventory",
	"vertical_title1":"Jewellery Software to manage Jewelry Shop Billing & Inventory",
	"g_vertical_title_h2":"Grow your business efficiently with our fashion jewelry retail POS",
	"g_vertical_img_new": "Lifestyle/Fashion-Jewelry.jpg",
	"banner_img": "retailban_fashion",
 "image_url":"lifestyle-fashion/fashion-jewellery",
 "image_alt":" ",
 "vertical_id":"33",
	"business_name":"1",
 "vertical_name":"Fashion Jewelry"
},	 	 	 	 
"luggage":{	 	 	 
 "title":"Luggage store POS Software | Bag Shop Billing Software - Gofrugal",
 "desc":"Luggage & baggage shop POS software is designed to manage bag shop billing, inventory, accounting & more. Try Gofrugal's Baggage shop POS system for free!",
 "keywords":"Luggage shop software, Luggage shop billing software, bag shop pos software, bags shop pos system",
 "vertical_title":"Luggage store POS software with Billing, Accounting",
	"vertical_title1":"Luggage store POS software with Billing, Accounting",
	"g_vertical_title_h2":"Grow your business efficiently with our luggage and bags retail POS solutions",
	"g_vertical_img_new": "Lifestyle/Luggage-and-bags.jpg",
	"banner_img": "retailban_luggage",
 "image_url":"lifestyle-fashion/luggage-bags",
 "image_alt":" ",
 "vertical_id":"40",
	"business_name":"1",
 "vertical_name":"Luggage and Bags"
},	 	 	 	 
"watches":{	 	 	 
 "title":"Watch Shop Software with POS Billing - Gofrugal",
 "desc":"Watch shop POS software is build with easy retail POS billing, inventory management, accounting & more. Download Gofrugal's Watch shop management software for free.",
 "keywords":"watch shop software, watch shop billing software, watch shop pos software, watch shop pos system",
 "vertical_title":"Best Watch shop POS Software with Billing & Inventory ",
	"vertical_title1":"Best Watch shop POS Software with Billing & Inventory ",
	"g_vertical_title_h2":"Grow your business efficiently with our watches retail POS solutions",
	"g_vertical_img_new": "Lifestyle/Watches.jpg",
	"banner_img": "retailban_watch",
 "image_url":"lifestyle-fashion/watches",
 "image_alt":" ",
 "vertical_id":"17",
	"business_name":"1",
 "vertical_name":"Watches"
},	 	 	 	 
"beauty":{	 	 	 
 "title":"Beauty & Cosmetic Shop POS | Cosmetics Inventory Software -Gofrugal",
 "desc":"Beauty and cosmetics store POS software is build with cosmetics inventory management easy billing, accounting & more.Download Gofrugal's Beauty shop POS for free!",
 "keywords":"Beauty and Cosmetics shop software, beauty and cosmetics billing software, beauty shop pos software, cosmetics shop pos system",
 "vertical_title":"Beauty & Cosmetics shop Software with Inventory, Billing!",
	"vertical_title1":"Beauty & Cosmetics shop Software with Inventory, Billing!",
	"g_vertical_title_h2":"Grow your business efficiently with our cosmetics retail POS solutions",
	"g_vertical_img_new": "Lifestyle/Beauty-and-Cosmetics.jpg",
	"banner_img": "retailban_beauty",
 "image_url":"lifestyle-fashion/spa-salon",
 "image_alt":" ",
 "vertical_id":"17",
	"business_name":"1",
 "vertical_name":"Beauty & Cosmetics"
},	 	 	 	 
"florist":{	 	 	 
 "title":"Floral POS Software | Flower Shop POS System for Florist - Gofrugal",
 "desc":"Florist POS software is designed to mange flower shop billing, inventory, accounting & more. Try Gofrugal's Floral POS system for free!",
 "keywords":"Florists shop software, florists billing software, florists pos software, florists shop pos system",
 "vertical_title":"Florist POS System with floral billing, Inventory & accounting",
	"vertical_title1":"Florist POS System with floral billing, Inventory & accounting",
	"g_vertical_title_h2":"Grow your business efficiently with our florists retail POS solutions",
	"g_vertical_img_new": "Lifestyle/Florists.jpg",
	"banner_img": "retailban_florist",
 "image_url":"lifestyle-fashion/florists",
 "image_alt":"",
 "vertical_id":"17",
	"business_name":"1",
 "vertical_name":"Florists"
},	 	 	 	 
"pharmaretail":{	 	 	 
 "title":"Pharmacy Software | Retail Pharmacy Billing | Pharmacy Management System - Gofrugal",
 "desc":"Pharmacy software helps to manage all the operational workflows (including order tracking, pharmacy billing, delivery) of a pharmacy/retail medical shops. Try Gofrugal's retail pharmacy management software now!",
 "keywords":"pharmacy billing software, pharmacy software,pharmacy management system, pharmacy management software, pharmacy retail software, retail pharmacy software, medical store software, medical shop billing software, pharmacy pos software free download, billing software for medical retail pharmacy shop, medical shop software",
 "vertical_title":"Your expiry loss can be 0% with our pharmacy POS",
	"vertical_title1":"Your expiry loss can be 0% with our pharmacy POS",
	"g_vertical_title_h2":"Grow your business efficiently with our pharmacy POS solutions",
	"g_vertical_img_new": "Pharma/Pharmacy.jpg",
	"banner_img": "pharma_banner",
 "image_url":"pharma/pharmacy",
 "image_alt":"",
 "vertical_id":"1",
	"business_name":"1",
 "vertical_name":"Pharmacy"
},	 	 	 	 
"ayurvedic":{	 	 	 
 "title":"Ayurvedic Shop Software for Billing, Accounting, Invoice | Ayurveda & Homeopathy Store POS",
 "desc":"Ayurveda store POS software helps ayurvedic and homeopathy shops to manage billing, accounting, invoice, and more, Try Gofrugal's homeopathy store software for free!",
 "keywords":"Ayurvedic software, ayurvedic store software, ayurvedic billing software, ayurvedic billing software",
 "vertical_title":"Powerful Ayurvedic software for homeopathy and Ayurveda stores!",
	"vertical_title1":"Powerful Ayurvedic software for homeopathy and Ayurveda stores!",
	"g_vertical_title_h2":"Grow your business efficiently with our ayurvedic POS solutions",
	"g_vertical_img_new": "Pharma/Ayurvedic-and-Wellness.jpg",
	"banner_img": "retail_ayur_banner",
 "image_url":"pharma/ayurvedic-wellness",
 "image_alt":" ",
 "vertical_id":"24",
	"business_name":"1",
 "vertical_name":"Ayurvedic & Wellness"
},	 	 	 	 
"medicalshop":{	 	 	 
 "title":"Medical Store Software | Download Free Medical Shop Billing Software",
 "desc":"Medical shop software helps retail medicals to manage billing, inventory, expiry, accounting, and more from a single software. Try Gofrugal's Medical store POS for free!",
 "keywords":"medical shop software, medical shop inventory management, medical billing software, medical pos",
 "vertical_title":"Medical store software with expiry management, billing & more!",
	"vertical_title1":"Medical store software with expiry management, billing & more!",
	"g_vertical_title_h2":"Complete medical store software for medical shops to manage billing, expiry management, and every other operation in a single software",
	"g_vertical_img_new": "Pharma/Medical_Shop.jpg",
	"banner_img": "pharma_banner",
 "image_url":"pharma/medical-shop",
 "image_alt":"medical shop software",
 "vertical_id":"1",
	"business_name":"1",
 "vertical_name":"Medical shop"
},	 	 	 	 
"surgical":{	 	 	 
 "title":"Surgical Shop POS Software | Download Surgical Billing Software for free",
 "desc":"Surgical shop POS software helps to increase customer footfalls, manage expiry effectively, multi-fold app orders & deliveries, minimize staff count, and more. Try Gofrugal's surgical shop software for free.",
 "keywords":"surgical shop software, surgical shop inventory management, surgical billing software, surgical shop pos",
 "vertical_title":"Surgical shop POS software",
	"vertical_title1":"Surgical shop POS software",
	"g_vertical_title_h2":"Grow your business efficiently with our surgical POS solutions",
	"g_vertical_img_new": "Pharma/Surgical.jpg",
	"banner_img": "retail_surg_banner",
 "image_url":"pharma/surgical",
 "image_alt":" ",
 "vertical_id":"4",
	"business_name":"1",
 "vertical_name":"Surgical"
},	 	 	 	 
"healthcare":{	 	 	 
 "title":"Healthcare Shop POS | Download Healthcare Store Billing Management Software",
 "desc":"Healthcare store POS software helps to manage billing, invoice, accounting, order taking, delivery, and more. Try Gofrugal's Healthcare shop management software for free!",
 "keywords":"Healthcare shop software, Healthcare shop inventory management, Healthcare shop billing software, Healthcare shop pos",
 "vertical_title":"Powerful healthcare POS software for Healthcare stores!",
	"vertical_title1":"Powerful healthcare POS software for Healthcare stores!",
	"g_vertical_title_h2":"Grow your business efficiently with our healthcare POS solutions",
	"g_vertical_img_new": "Pharma/Health-care.jpg",
	"banner_img": "pharma_banner",
 "image_url":"pharma/healthcare",
 "image_alt":" ",
 "vertical_id":"24",
	"business_name":"1",
 "vertical_name":"Health care"
},	 	 	 	 
"chemist":{	 	 	 
 "title":"Chemist Shop Management Software | Chemist POS Billing Software",
 "desc":"Chemist shop POS billing software to increase customer footfalls, manage expiry effectively, multi-fold app orders & deliveries, minimize staff count and more. Try free trial.",
 "keywords":"chemist shop software, chemist shop inventory management, chemist shop billing software, chemist shop pos",
 "vertical_title":"Your expiry loss can be 0% with our chemists & druggists POS",
	"vertical_title1":"Your expiry loss can be 0% with our chemists & druggists POS",
	"g_vertical_title_h2":"Grow your business efficiently with our chemists & druggists POS solutions",
	"g_vertical_img_new": "Pharma/Chemists-and-Druggists.jpg",
	"banner_img": "pharma_banner",
 "image_url":"pharma/chemists-druggists",
 "image_alt":" ",
 "vertical_id":"1",
	"business_name":"1",
 "vertical_name":"Chemists & druggists"
},	 	 	 	 
"supermarket":{	 	 	 
 "title":"Supermarket Software | Easy to use POS | Download Now",
 "desc":"Supermarket software - With retail POS, experience super fast billing, increase customer footfalls, acquire new customers and expand your market reach. Get trial now!",
 "keywords":"supermarket pos, retail supermarket software, supermarket inventory management, supermarket billing software",
 "vertical_title":"Acquire new customers, sell more and save more with supermarket POS",
	"vertical_title1":"Acquire new customers, sell more and save more with supermarket POS",
	"g_vertical_title_h2":"Grow your business efficiently with our supermarket POS solutions",
	"g_vertical_img_new": "Hypermarket/Supermarket-ban.jpg",
	"banner_img": "super_banner",
 "image_url":"supermarket/supermarket",
 "image_alt":" ",
 "vertical_id":"3",
	"business_name":"1",
 "vertical_name":"Supermarket"
},	 	 	 	 
"fruits":{	 	 	 
 "title":"Fruit  Shop POS | Fruits & Vegetables Billing Software - Gofrugal",
 "desc":"Fruits Shop management software help in superfast fruits & vegetable billing, accounting and managing the fruits shop. Download Gofrugal's Fruit shop POS Billing Software for free!",
 "keywords":"Fruits shop pos, fruits shop software, fruits shop inventory management, fruits shop billing software",
 "vertical_title":"Powerful Fruits & Vegetables POS billing software!",
	"vertical_title1":"Powerful Fruits & Vegetables POS billing software!",
	"g_vertical_title_h2":"Grow your business efficiently with our fruits & vegetables POS solutions",
	"g_vertical_img_new": "Hypermarket/fruits-and-vegetables.jpg",
	"banner_img": "retail_fruit_banner",
 "image_url":"supermarket/fruits-vegetables",
 "image_alt":" ",
 "vertical_id":"37",
	"business_name":"1",
 "vertical_name":"Fruits & Vegetables"
},	 	 	 	 
"ricetraders":{	 	 	 
 "title":"Rice Mill Management System | Rice Mill POS Billing Software",
 "desc":"Rice mill management software help in superfast billing, accounting and managing the Rice traders shop. Download Gofrugal's Rice trader management system for free!",
 "keywords":"Rice traders shop pos, rice traders shop software, rice traders shop inventory management, rice traders shop billing software",
 "vertical_title":"Rice Mill Management Software with Billing, Accounting & more!",
	"vertical_title1":"Rice Mill Management Software with Billing, Accounting & more!",
	"g_vertical_title_h2":"Grow your business efficiently with our rice traders POS solutions",
	"g_vertical_img_new": "Hypermarket/Rice-Traders.jpg",
	"banner_img": "retail_rice_banner",
 "image_url":"supermarket/rice-traders",
 "image_alt":" ",
 "vertical_id":"39",
	"business_name":"1",
 "vertical_name":"Rice Traders"
},	 	 	 	  	 	 
"grocery":{	 	 	 
 "title":"Grocery Store Software | Grocery Shop POS System | Grocery Billing Software",
 "desc":"Grocery software helps grocery shops with super-fast grocery billing, inventory, customer management, and more. Download Gofrugal's grocery store POS system for free!",
 "keywords":"grocery software, grocery store software, grocery software solutions, grocery store pos,grocery shop billing software, pos software for grocery store,pos for grocery store,pos for grocery,grocery pos software,grocery retail software,grocery pos",
 "vertical_title":"Grocery store POS software for super-fast grocery billing and management",
	"vertical_title1":"Grocery store POS software for super-fast grocery billing and management",
	"g_vertical_title_h2":"Gofrugal's grocery software is designed to manage all the activities like grocery shop billing, accounting, inventory from a single POS system.",
	"g_vertical_img_new": "Hypermarket/Groceries-and-Vegetables.jpg",
	"banner_img": "super_banner",
 "image_url":"supermarket/groceries-vegetables",
 "image_alt":" ",
 "vertical_id":"58",
	"business_name":"1",
 "vertical_name":"Groceries and Vegetables"
},
"kirana":{	 	 	 
 "title":"Kirana Store Software | Kirana Shop Billing Management Software",
 "desc":"Gofrugal's Kirana shop software helps Kirana store businesses with retail POS, super-fast billing, and more. Download our Kirana store billing software for free",
 "keywords":"kirana store software, pos for kirana stores, kirana software, kirana billing software, kirana shop billing software, billing software for kirana store, kirana store billing software free download, kirana store software, free download, kirana shop software, kirana store management software, kirana shop software free download",
 "vertical_title":"Acquire new customers, sell, save more with POS software for kirana store",
	"vertical_title1":"Acquire new customers, sell, save more with POS software for kirana store",
	"g_vertical_title_h2":"Grow your business efficiently with our kirana POS solutions",
	"g_vertical_img_new": "Hypermarket/Groceries-and-Vegetables.jpg",
	"banner_img": "super_banner",
 "image_url":"supermarket/groceries-vegetables",
 "image_alt":" ",
 "vertical_id":"58",
	"business_name":"1",
 "vertical_name":"Groceries and Vegetables"
},	 	 		 	 	 	 
"autoparts":{	 	 	 
 "title":"Automobile Parts Billing Software | Auto Parts Shop Management",
 "desc":"Auto parts software designed for automotive parts stores to maintain auto parts inventory, accounting, billing, and more. Download Gofrugal's Auto parts POS software for free!",
 "keywords":"Auto parts pos, auto parts shop software, auto parts shop inventory management, auto parts shop billing software",
 "vertical_title":"Auto Spare Parts Shop Billing Software",
	"vertical_title1":"Auto Spare Parts Shop Billing Software",
	"g_vertical_title_h2":"Grow your business efficiently with our auto parts POS solutions",
	"g_vertical_img_new": "Specialized-retail/Auto-parts.jpg",
	"banner_img": "special_banner",
 "image_url":"specialized-retail/autoparts",
 "image_alt":" ",
 "vertical_id":"6",
	"business_name":"1",
 "vertical_name":"Auto Parts"
},	 	 	 	 
"fertilizer":{	 	 	 
 "title":"Fertilizer Management Software | Fertilizer Shop POS | Download Fertilizer Billing Software",
 "desc":"Fertilizer shop POS software acts as fertilizer management software to manage fertilizer billing, accounting, & more. Download Gofrugal's Fertilizer shop POS & billing software for free!",
 "keywords":"Fertilizer pos, fertilizer shop software, fertilizer shop inventory management, fertilizer shop billing software",
 "vertical_title":"Fertilizer shop management software with billing, and more!",
	"vertical_title1":"Fertilizer shop management software with billing, and more!",
	"g_vertical_title_h2":"Grow your business efficiently with our fertilizer and agro products POS solutions",
	"g_vertical_img_new": "Specialized-retail/Fertilizer.jpg",
	"banner_img": "retail_Fertil_banner",
 "image_url":"specialized-retail/fertilizer-agro",
 "image_alt":" ",
 "vertical_id":"35",
	"business_name":"1",
 "vertical_name":"Fertilizer & Agro products"
},	 	 	 	 
"greetingcard":{	 	 	 
 "title":"Gift Shop POS System | Gift Shop Billing Software",
 "desc":"Gift shop POS software designed to manage Gift shop billing, inventory, accounting & more. Download Gofrugal's Gift shop POS system for free.",
 "keywords":"Greeting card shop pos, greeting card store software, greeting card shop inventory management, greeting card shop billing software",
 "vertical_title":"Complete Gift shop POS System with easy billing, inventory & more!",
	"vertical_title1":"Complete Gift shop POS System with easy billing, inventory & more!",
	"g_vertical_title_h2":"Grow your business efficiently with our gift shop POS solutions",
	"g_vertical_img_new": "Specialized-retail/Gifts-and-Greeting-cards.jpg",
	"banner_img": "retail_Gifts_banner",
 "image_url":"specialized-retail/gift-greetings",
 "image_alt":" ",
 "vertical_id":"10",
	"business_name":"1",
 "vertical_name":"Gifts & Greeting Cards"
},	 	 	 	 
"hardware":{	 	 	 
 "title":"Hardware Store POS System | Billing Software for Hardware Shop",
 "desc":"Hardware store management system designed to manage hardware shop activities like hardware billing, inventory, accounting & more. Download Gofrugal's Hardware shop POS software.",
 "keywords":"Hardware shop pos, hardware store software, hardware shop inventory management, hardware shop billing software",
 "vertical_title":"Hardware store software with easy billing, inventory & more!",
	"vertical_title1":"Hardware store software with easy billing, inventory & more!",
	"g_vertical_title_h2":"Grow your business efficiently with our hardware POS solutions",
	"g_vertical_img_new": "Specialized-retail/Hardware.jpg",
	"banner_img": "retail_spechard_banner",
 "image_url":"specialized-retail/hardware",
 "image_alt":" ",
 "vertical_id":"8",
	"business_name":"1",
 "vertical_name":"Hardware"
},	 	 	 	 
"sports":{	 	 	 
 "title":"Sports Shop POS System | Billing Software for Sports Shop",
 "desc":"Sports shop management system designed to manage billing, inventory, accounting & more. Download Gofrugal's Sports shop POS software.",
 "keywords":"Sports shop pos, sports store software, sports shop inventory management, sports shop billing software",
 "vertical_title":"Sports shop POS software with easy billing, inventory & more!",
	"vertical_title1":"Sports shop POS software with easy billing, inventory & more!",
	"g_vertical_title_h2":"Grow your business efficiently with our sports shop POS solutions",
	"g_vertical_img_new": "Specialized-retail/Sports-ban.jpg",
	"banner_img": "sports_banner",
 "image_url":"specialized-retail/sports",
 "image_alt":" ",
 "vertical_id":"23",
	"business_name":"1",
 "vertical_name":"Sports & Fitness / Sportswear"
},	 	 	 	 
"tyre":{	 	 	 
 "title":"Tire shop software | Tyre shop Billing & Inventory management software | Tire POS",
 "desc":"Tire shop software that helps retail tire shops effectively manage billing, tire inventory, and more from a single POS system. Download Gofrugal's tyre shop management software for free",
 "keywords":"tire shop software,tire inventory software, free tire inventory software, tyre shop management software,tyre shop billing software,tyre stock management software",
 "vertical_title":"Tyre shop software to simplify your tire inventory management and billing process",
	"vertical_title1":"Tyre shop software to simplify your tire inventory management and billing process",
	"g_vertical_title_h2":"Tire shop management software is a simple POS that helps tire shops to effectively manage tire inventory, billing, accounting, customer management and many more.",
	"g_vertical_img_new": "Specialized-retail/Tyre.jpg",
	"banner_img": "special_banner",
 "image_url":"specialized-retail/tyre",
 "image_alt":" ",
 "vertical_id":"30",
	"business_name":"1",
 "vertical_name":"Tyre"
},	 	 	 	 
"vessel":{	 	 	 
 "title":" Vessel Shop POS | Vessel Shop Billing Management Software",
 "desc":" Vessel shop software designed to manage vessel shop activities like billing, inventory, accounting & more. Download Gofrugal's Vessel shop POS software for free.",
 "keywords":"Vessel shop software, Vessel shop billing software, Vessel shop management software, Vessel shop pos",
 "vertical_title":"Vessel shop POS software with easy billing, inventory & more!",
	"vertical_title1":"Vessel shop POS software with easy billing, inventory & more!",
	"g_vertical_title_h2":"Grow your business efficiently with our vessel shop POS solutions",
	"g_vertical_img_new": "Specialized-retail/Vessels.jpg",
	"banner_img": "spec_vess_banner",
 "image_url":"specialized-retail/vessel-shop",
 "image_alt":" ",
 "vertical_id":"57",
	"business_name":"1",
 "vertical_name":"Vessel Shop"
}	 	 	 	 	 	 

}
