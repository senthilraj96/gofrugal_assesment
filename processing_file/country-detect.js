$(document).ready(function () {
	var Cookies = {
		init: function () {
			for (var a = document.cookie.split("; "), b = 0; b < a.length; b++) {
				var c = a[b].split("=");
				this[c[0]] = c[1]
			}
		},
		create: function (a, b, c) {
			if (c) {
				var d = new Date;
				d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3);
				var e = "; expires=" + d.toGMTString()
			} else var e = "";
			document.cookie = a + "=" + b + e + "; path=/", this[a] = b
		},
		erase: function (a) {
			this.create(a, "", -1), this[a] = void 0
		}
	};
	Cookies.init();

	var vc_redirection = Cookies['vc_redirection'];
	var visitor_countrycode;
	if (vc_redirection !== '' && vc_redirection !== 'undefined' && vc_redirection === 'AE') {
		$(".new_bar").hide();
		$(".uae_call_desktop").css("display", "inline-block");
		$('#price_inr_dtl,.price_inr_dtl,.weborder-login-sec').hide();
		$('#price_intl_dtl,.price_intl_dtl').show();
		$('.fr-ac-details').show();
		$('.in-ac-details').hide();
	} else if (vc_redirection == '' || vc_redirection == undefined || vc_redirection != 'AE') {
		var date = new Date();
		date.setTime(date.getTime() + (180 * 24 * 60 * 1000));
		$.ajax({
			url: "https://iplocator.gofrugal.com/iplocator.php",
			type: "GET",
			dataType: "json",
			timeout: 10000,
			success: function (response) {
				visitor_countrycode = response.countryCode;
				Cookies.create('vc_redirection', visitor_countrycode, date);
				if (visitor_countrycode != 'undefined' && visitor_countrycode === 'AE') {
					$(".new_bar").hide();
					$(".uae_call_desktop").css("display", "inline-block");
					$('.fr-ac-details').show();
					$('.in-ac-details').hide();
				}
//				 vc_redirection = "AE";
//				 visitor_countrycode = "AE"
				if (vc_redirection != 'IN' || visitor_countrycode != 'IN') {
					$('#price_inr_dtl,.weborder-login-sec,.price_inr_dtl').hide();
					$('#price_intl_dtl,.price_intl_dtl').show();
					$('.fr-ac-details').show();
					$('.in-ac-details').hide();
				} else {
					$('#price_inr_dtl,.price_inr_dtl').show();
					$('#price_intl_dtl,.price_intl_dtl').hide();
					$('.in-ac-details').show();
					$('.fr-ac-details').hide();
				}
//				Event alert Region wise
//				var vc_region = response.regionName;
////				var vc_region = 'Delhi';
//				//console.log(vc_region)
//				if(vc_region == "Maharashtra" || vc_region == "Goa" || vc_region == "Gujarat"  || vc_region == "Punjab"  || vc_region == "Haryana"  || vc_region == "Madhya Pradesh" || vc_region == "NCT" || vc_region == "Delhi"  ){
//					window.setTimeout(function () {
//							$(".event-alert-sec").slideDown('slow');
//						}, 200);
//						$(document).ready(function () {
//						$('.event-close').click(function (){
//							$('#event_sec_status').val('true');
//							$(".event-alert-sec").slideUp('slow');	
//						})
//						})
//				}
			}
		});
	}
});