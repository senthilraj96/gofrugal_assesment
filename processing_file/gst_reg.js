var chatUrl = ''
var webUrl = '';
var page_url = '';	 
var sam_url = '';	
var portal = '';

if(document.domain == "www.gofrugal.com" || document.domain == "gofrugal.com"){
	chatUrl = "https://cdn-delightchat.gofrugal.com/?source_from=website" + gclid
	webUrl = '//www.gofrugal.com/chatbot.html';
	page_url = "//cdn-web.gofrugal.com";	 
	sam_url = "sam.gofrugal.com";	
	portal = "gofrugal";
}else if (document.domain == "staging.gofrugal.com") {
	chatUrl = "https://delightchat-labtest.gofrugal.com/#/custhome?source_from=website" + gclid;
	webUrl = 'https://staging.gofrugal.com/chatbot.html';
	page_url = "//cdn-staging.gofrugal.com";
	sam_url = "labtest1.gofrugal.com";
	portal = "staging";
}else{
	chatUrl = "https://delightchat-labtest.gofrugal.com/#/custhome?source_from=website" + gclid;
	webUrl = '//'+document.location.host + '/chatbot.html';
	page_url = "//" + document.location.host;
	sam_url = "labtest1.gofrugal.com";
	portal = "staging";
}

var gclid = $.urlParam('gclid') ? '&gclid=' + $.urlParam('gclid') : '';


var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName = navigator.appName;
var fullVersion = '' + parseFloat(navigator.appVersion);
var majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;

// In Opera, the true version is after "Opera" or after "Version"
if ((verOffset = nAgt.indexOf("Opera")) != -1) {
	browserName = "Opera";
	fullVersion = nAgt.substring(verOffset + 6);
	if ((verOffset = nAgt.indexOf("Version")) != -1)
		fullVersion = nAgt.substring(verOffset + 8);
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
	browserName = "Microsoft Internet Explorer";
	fullVersion = nAgt.substring(verOffset + 5);
}
// In Chrome, the true version is after "Chrome"
else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
	browserName = "Chrome";
	fullVersion = nAgt.substring(verOffset + 7);
}
// In Safari, the true version is after "Safari" or after "Version"
else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
	browserName = "Safari";
	fullVersion = nAgt.substring(verOffset + 7);
	if ((verOffset = nAgt.indexOf("Version")) != -1)
		fullVersion = nAgt.substring(verOffset + 8);
}
// In Firefox, the true version is after "Firefox"
else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
	browserName = "Firefox";
	fullVersion = nAgt.substring(verOffset + 8);
}
// In most other browsers, "name/version" is at the end of userAgent
else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
	(verOffset = nAgt.lastIndexOf('/'))) {
	browserName = nAgt.substring(nameOffset, verOffset);
	fullVersion = nAgt.substring(verOffset + 1);
	if (browserName.toLowerCase() == browserName.toUpperCase()) {
		browserName = navigator.appName;
	}
}
// trim the fullVersion string at semicolon/space if present
if ((ix = fullVersion.indexOf(";")) != -1)
	fullVersion = fullVersion.substring(0, ix);
if ((ix = fullVersion.indexOf(" ")) != -1)
	fullVersion = fullVersion.substring(0, ix);

majorVersion = parseInt('' + fullVersion, 10);
if (isNaN(majorVersion)) {
	fullVersion = '' + parseFloat(navigator.appVersion);
	majorVersion = parseInt(navigator.appVersion, 10);
}


var browser_error = '<div class="modal fade" style="min-height:300px;" id="warning_message" tabindex="-1" role="dialog" aria-labelledby="warning_message" aria-hidden="true" style="overflow: inherit;">' +
	'          <div class="modal-dialog">' +
	'              <div class="modal-content text-center">' +
	'              <div class="modal-header text-center"> <i class="fa fa-cog fa-spin fa-5x fa-fw"></i> <span class="sr-only">Loading...</span>' +
	'                  <h2>To get the best experience of Chitti, update your browser to the latest version</h2>' +
	'                  <p>Download myGoFrugal App. Get all our product updates (GST patch, migration tools etc.,) and support related queries </p>' +
	'                  <a href="https://play.google.com/store/apps/details?id=com.gofrugal.mygofrugal" style="color: blue" target="_blank"><b><img title="Download myGoFrugal app in Google Play" alt="Download mygofrugal app in Google play store" src="' + page_url + '/images/google-play-medium.png" style="margin-bottom:25px;" width="160" height="48"></b></a> <a href="https://itunes.apple.com/in/app/mygofrugal-24x7-pos-support/id1086988029?mt=8" style="color: blue" target="_blank"><b><img alt="Download myGoFrugal app in App Store" src="' + page_url + '/images/appstore-medium-mobile.png" title="Download mygofrugal app in App store" style="margin-bottom:25px;" width="160" height="48"></b></a> </div>' +
	'            </div>' +
	'            </div>' +
	'        </div>';

var chat_html = '<div id="gft_live-chat">' +
	'<div id="gft_close_chat" style="">' +
	'   <div class="chat-icons" style=""><div class="gft_chat_icon chat_minimize_icon"></div></div>' +
	'   <div class="chat-icons">' +
	'     <a href="' + webUrl + '" target="_blank"> <div class="gft_chat_icon chat_maximize_icon"></div></a>' +
	'   </div>' +
	'</div>' +
	'<div id="gft_chat_frame_live" class="chat">' +
	'   <iframe id="gft_chatbot_live" frameborder="0" ></iframe>' +
	'</div>';

var browser_version = parseFloat(fullVersion);
var browser_name = browserName;
var errorMsg = 'false';
$(window).load(function () {
	if (browser_version <= parseFloat('37') && browser_name == 'Firefox' || browser_version <= parseFloat('43') && browser_name == 'Chrome' || browser_version <= parseFloat('9') && browser_name == 'Microsoft Internet Explorer' || browser_version <= parseFloat('8.1.5') && browser_name == 'Safari') {
		if ($(window).width() > 1100) {
			var doc = document.getElementById('gft_chatbot_live').contentWindow.document;
			//doc.write(browser_error)
			errorMsg = 'true';

		}
	}
	/*var doc = document.getElementById('gft_chatbot_live').contentWindow.document;
		doc.write(browser_error)
		errorMsg='true';
*/
});
var script_load = 'false';
if ($(window).width() > 767) {
	$('body').append(chat_html);
}

$("<link/>", {
	rel: "preload",
	type: "text/css",
	href: page_url + "/css/gft_livechat.css"
}).appendTo("head");



$(document).ready(function () {
	$('#popup_gofrugal').on('click', function (e) {
		if ($(window).width() <= 750) {
			window.open(webUrl + '#chat', '_blank');
		}

	});
});
$(window).load(function () {
	$('#gst-banner-stripe-lg').modal('show');
	$('body').removeClass("modal-open");
	$('.modal-backdrop').remove();
	$('#gst-banner-stripe-lg').css('padding', '0');
	$('.header-gst .close').click(function () {
		$('.header-background').css('top', '-200px');
		$('#gst_popup_strip_hidden').css('visibility', 'visible');
		localStorage.setItem("modal", "closed");
		langStored = localStorage.getItem("modal");
	});

	$('#gft_live-chat,#popup_gofrugal').click(function () {
		if ($(window).width() > 480 && script_load != 'true' && errorMsg != 'true') {
			$('#gft_chatbot_live').attr('src', chatUrl)
			script_load = 'true';
		}
	});

	$(window).scroll(function (e) {
		if ($("#gft_close_chat").is(":visible") === true) {
			e.preventDefault();
			$("#back-top").css('visibility', 'hidden');
		} else {
			e.preventDefault();
			$("#back-top").css('visibility', 'visible');
		}
	});
});

$('#popup_gofrugal').hide();
(function () {
	if ($(window).width() > 767) {
		setTimeout(function () {
			$('#popup_gofrugal').show();
			$('#popup_gofrugal').addClass('chat-ani');
		}, 1000);
		$('#gft_close_chat').hide();
		$('#gft_chat_frame_live').hide();
		$('#gft_live-chat #chat_header,#gft_close_chat,#popup_gofrugal').on('click', function () {
			$("#back-top").fadeOut(300, 'swing');
			$("#popup_gofrugal").fadeToggle(100, 'swing');
			$('.chat,#chat_header').slideToggle(300, 'swing');
			$('.chat-message-counter, #gft_close_chat').fadeToggle(400, 'swing');
			$('.chat-message-counter').fadeToggle(400, 'swing');
		});
		$('.chat-icons').click(function () {
			$('.chat-message-counter').remove();
		});
		$('.chat-close').on('click', function (e) {
			$("#back-top").css('visibility', 'visible');
			e.preventDefault();
			$('#gft_live-chat').fadeOut(300);
		});
	} else {
		setTimeout(function () {
			$('#popup_gofrugal').show();
			$('#popup_gofrugal').addClass('chat-ani');
		}, 200);
	}
})();






$(document).ready(function () {
	$(".sub_email").keypress(function () {
		$(".sub_email").css("font-size", "13px");
	});

var isFirefox = typeof InstallTrigger !== 'undefined';
//var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
//var isIE = /*@cc_on!@*/false || !!document.documentMode;
//var isEdge = !isIE && !!window.StyleMedia;
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

	
if(isFirefox==true || isSafari==true){
	$('html, body').hide();
	if (location.hash) {
		setTimeout(function () {
			$('html, body').scrollTop(0).show();
			jump();
		}, 0);
	} else {
		$('html, body').show();
	}
	$('html, body').css('scroll-behavior','auto');
	$('.g-menu-link').click(function () {
		$('html, body').css('scroll-behavior','smooth');
	});
}
	var jump = function (e) {
	if (e) {
		e.preventDefault();
		var target = $(this).attr("href");
	} else {
		var target = location.hash;
	}
	var scrollPosition = $(target).offset().top;
	console.log($(target).offset().top);
	$('html,body').animate({
		scrollTop: scrollPosition
	},  2000);
}
});




var emailValidation = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
try {
	$.validator.addMethod("validateemail", function (value, element) {
		return emailValidation.test(value);
	}, "Invalid Email");
	$(".subscribe-form, .sub-btn").validate({
		submitHandler: function (form) {
			websubscription();
		},
		onfocus: true,
		rules: {
			sub_email: {
				required: true,
				email: true,
				validateemail: true
			}
		},
		messages: {
			sub_email: {
				required: "Enter Valid Email Address",
				email: "Enter Valid Email Address",
				remote: "Email already in use!",
				validateemail: "Enter Valid Email Address"
			}
		},
		errorPlacement: function (error, element) {
			$(element).css("background-color", "#fff3dd");
			if ($(element).is("input")) {
				element.val('').attr("placeholder", error.text());
				element.css('font-size', '10px');
			} else if ($(element).is("select")) {
				$(element).css("color", "#ff3333");
				element.css('font-size', '14px');
			}

			return false;
		},
		onkeyup: false,
		onfocusout: false,
	});
} catch (e) {}

function websubscription() {
	$.ajax({
		url: '//' + sam_url + '/website/nebula_web_cust_details_submit.php',
		data: {
			from_Nebula: '1',
			Lead_status: "contact",
			GLH_CREATED_CATEGORY: "50",
			business: "1",
			Vertical: "General-Traders",
			Business_type: "Retail",
			shopName: $(".sub_email").val().split('@')[0],
			emailID: $(".sub_email").val()
		},
		dataType: 'json',
		success: function (data) {
			subscription_submitted(data)
		}
	});
}

function subscription_submitted(data) {
	if (data.Verification_mail == "true") {
		$(".subscribe-form").fadeOut('fast', function () {
			$('.g-sub-thankyou-message').css('display','block');
		});
	}
}