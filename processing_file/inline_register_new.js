// JavaScript Document
var resend_otp = 'false';
var send_otp;
var mobile;
var sam_url = "labtest1.gofrugal.com";
var portal = "stagging";
var verticalListURL = 'https://labtest1.gofrugal.com/service/product_details.php';
var gcaptchatoken;
if (document.domain == "www.gofrugal.com" || document.domain == "gofrugal.com") {
	portal = "gofrugal";
	sam_url = "sam.gofrugal.com";
	verticalListURL = 'https://sam.gofrugal.com/service/product_details.php';
}
var event_name = '';
var file_name = location.href.split('/').pop().split('?')[0];
var emailValidation = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

var generateOTP = false;
var mob_valid = false;
var nicescroll_enable = 'true';
var device_type;
var visitor_countrycode = '';
var selected_store;
var resendOtpCount = 0;
var date = new Date();
date.setTime(date.getTime() + (180 * 24 * 60 * 1000));
var deviceDetector = function () {
	var b = navigator.userAgent.toLowerCase(),
		a = function (a) {
			void 0 !== a && (b = a.toLowerCase());
			return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(b) ? "tablet" : /(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(b) ? "phone" : "desktop"
		};
	return {
		device: a(),
		detect: a,
		isMobile: "desktop" != a() ? !0 : !1,
		userAgent: b
	}
}();

$(document).ready(function () {
	Cookies.erase("gobill_download_link")
	var posUrl = $.urlParam('postype');
	var bUrl = $.urlParam('business');
	var vUrl = $.urlParam('vertical');
	var pCode = $.urlParam('pcode');
	// device type tracking
	if (deviceDetector.device == 'desktop') {
		device_type = 1;
	} else if (deviceDetector.device == 'tablet') {
		device_type = 2;
	} else {
		device_type = 3;
	}
	var count_err_msg = "Enter your shop count"
	
	if(file_name === 'specialized-distribution-software.html' || file_name === 'specialized-distribution-software') {
			  count_err_msg = "Enter your distribution outlet count"
	}
	if(Cookies['g_vertical_name']){
		event_name = Cookies['g_vertical_name'];
	}
	if(Cookies['g_vertical_id']){
		$("#vertical").val(Cookies['g_vertical_id'])
	}
	$.ajax({
		url: "https://iplocator.gofrugal.com/iplocator.php",
		type: "GET",
		dataType: "json",
		timeout: 10000,
		success: function (response) {
			visitor_countrycode = response.countryCode;
			visitor_region = response.regionName;
			visitor_city = response.city;
			visitor_country = response.country;
			Cookies.create('vc_redirection', visitor_countrycode, date);
			if (visitor_countrycode != 'undefined' && visitor_countrycode != '') {
				$("#country_name").val(visitor_country);
				$("#country").val(visitor_countrycode);
				$("#state_name").val(visitor_region);
				$("#city_name").val(visitor_city);
				international_mobile_validation(visitor_countrycode);
			}
		}
	});

	function international_mobile_validation(country) {
		$('#inline-RegForm')
			.find('[name="mob_no"]')
			.intlTelInput({
				utilsScript: '../js/utils.js',
				autoPlaceholder: false,
				preferredCountries: [country]
			});
		$(".inline-mobile-prefix").css("display", 'inline-block');
		var string = $('.selected-flag').attr('title') || country_title;
		var str = string.split(' ');
		$("#dial_code").text(str[str.length - 1]);
		if ($("#dial_code").text().length == 3) {
			$("#mob_no").css("padding-left", "33px");
		} else if ($("#dial_code").text().length == 4) {
			$("#mob_no").css("padding-left", "40px");
		} else {
			$("#dial_code").text('+1');
			$("#mob_no").css("padding-left", "30px");
		}
		$(".inline-mobile-prefix").css("display", 'inline-block');
		$('.allow-dropdown').css('display', 'inline-block');
	}

	$("#inline_otp_resend").click(function () {
		// inline_resend_otp();
		var isValid = $('#mob_no').intlTelInput('isValidNumber');
		if (!isValid) {
			mob_valid = false;
			$("#inline_rsnd-otp-msg").css("display", "none");
			$("#inline_otp-sent").css("display", "inline-block");
			//inline_enableOTP();
		} else {
			inline_resend_otp();
		}

		//$("#inline-sending-otp").css("display","inline-block");
		//$("#inline_otp_resend").css("display","none");
	});

	$.validator.addMethod("validateMobile", function (value, element) {
		if ($("#country").val() === "IN") {
			return mob_valid;
		} else {
			return mob_valid;
		}
	}, "Enter correct mobile number");

	$.validator.addMethod("validateemail", function (value, element) {
		return emailValidation.test(value);
	}, "Invalid Email");
	$.validator.addMethod("validateStoreCount", function (value, element) {
		return (value < 1 ? false : true);
	});
	$("#inline-RegForm, #inline-reg-btn,#inline_otp_resend").validate({
		submitHandler: function (form) {
			if ($(".inline-send-otp").is(":visible") === true && generateOTP === false) {
				$("#otp_generate").css("visibility", "visible");
			} else if ($("#GLH_CREATED_CATEGORY").val() === '36') {
				$("#otp_generate").css("display", "none");
				$("#inline-sending-otp").css("display", "inline-block");
				$(".inline-send-otp").css("display", "none");
				email_exist();
			} else {
				$("#otp_generate").css("display", "none");
				$("#inline-sending-otp").css("display", "inline-block");
				$(".inline-send-otp").css("display", "none");
				if ($("#GLH_CREATED_CATEGORY").val() == 38) {
					submit_the_signup_details_whatsnow();
				} else {
					submit_the_signup_details_inline_reg();
				}
			}

		},
		onfocus: true,
		rules: {
			mob_no: {
				required: true,
				minlength: 6,
				maxlength: 20,
				validateMobile: true
			},
			emailID: {
				required: true,
				email: true,
				validateemail: true
			},
			store_count: {
				required: true,
				minlength: 1,
				maxlength: 4,
				validateStoreCount: true
			},
			otp_val: {
				required: true,
				minlength: 5,
				maxlength: 5
			}
		},
		messages: {
			mob_no: {
				required: "Enter your mobile number",
				minlength: "Enter Valid Mobile Number",
				maxlength: "Enter Valid Mobile Number",
				validateMobile: "Enter Valid Mobile Number",
			},
			emailID: {
				required: "Enter Valid Email Address",
				email: "Enter Valid Email Address",
				remote: "Email already in use!",
				validateemail: "Enter Valid Email Address"
			},
			store_count: {
				required: count_err_msg,
				maxlength: "Enter a store count less than 10000",
				validateStoreCount: "Enter Store count minimum 1"
			},
			otp_val: //renamed the OTP for resend OTP when user change the input mobile number
			{
				required: "Enter 5 digit OTP",
				minlength: "Enter 5 digit OTP",
				maxlength: "Enter 5 digit OTP"
			}
		},
		errorPlacement: function (error, element) {
			$(element).css("background-color", "#fff3dd");
			$('.inline_email, .inline_mob').addClass('placeholder');
			if ($(element).is("input")) {
				element.val('').attr("placeholder", error.text());
				//element.css('font-size','12px');
			} else if ($(element).is("select")) {
				$(element).css("color", "#ff3333");
			}
			$("#store_count").click(function () {
				$(element).css("color", "#868082");
			});
			$(".alert-field").focusout(function () {
				$(this).css("background-color", "#fff");
			});

			return false;
		},
		onkeyup: false,
		onfocusout: false,
	});

	$(function () {
		$("input").keypress(function () {
			$(this).css("font-size", "16px");
			//$(this).css("background-color","white");        
		});

	});

	$('#inline-RegForm').find('[name="mob_no"]').on('keyup', function (event) {
		var isValid = $('#mob_no').intlTelInput('isValidNumber');
		if (!isValid) {
			mob_valid = false;
			$("#inline-mobile_valid_msg").css("display", "block");
			inline_enableOTP();
		} else {
			mob_valid = true;
			$("#inline-mobile_valid_msg").css("display", "none");
			$("#mob_validation").text("true");
			inline_enableOTP();
		}
	});
	$('#inline-download_link_product').on('click', function () {
		if (file_name !== 'food-truck-pos-software.html' && file_name !== 'food-truck-pos-software') {
			$(".inline_thankyou_desktop").css("display", "block");
			$("#inline-RegForm").css("display", "none");
			$("#inline-reg-section").css("padding", "5px 0");
		}

	});
	
});

var emailCheckResult = true;
var domainCheckResult = true;
var mobilecheckResult = true;

function email_exist() {
	$.ajax({
		type: "GET",
		url: '//' + sam_url + '/website/nebula_registration_page_details.php',
		async: false,
		data: {
			purpose: "emailid_exists",
			emailid: $("#emailID").val(),
			mob_no: $("#mob_no").val(),
			product: $("#product").val()
		},
		dataType: "json",
		success: function (d) {
			if (d.success == true) {
				emailCheckResult = true;
				mobilecheckResult = true;
				$("#emailID, #mob_no").css("background-color", "white");
			} // email id  is free to use
			else if (d.error_code == "601_EMAIL_ADDR_101") {
				emailCheckResult = false;
				mobilecheckResult = true;
				$("#mob_no").css("background-color", "white");
			} // already exists
			else if (d.error_code == "601_EMAIL_ADDR_102") {
				mobilecheckResult = false;
				emailCheckResult = true;
				$("#emailID").css("background-color", "white");
			} // mobile already exist
			else if (d.error_code == "601_EMAIL_ADDR_103") {
				emailCheckResult = false;
				mobilecheckResult = false;
			} //both exist
		},
		complete: function () {
			if (emailCheckResult == true && mobilecheckResult == true) {
				if ($("#GLH_CREATED_CATEGORY").val() === '36') {
					$("#product").val('605010TT30');
				} else if (skewCode != null && skewCode != 0 && $("#product").val() != "605010TT30") {

					$("#GLH_CREATED_CATEGORY").val('5');
				}
				submit_the_signup_details_cloud();
			} else {
				mob_valid = false;
				if (emailCheckResult == false) {
					$("#emailID").val('').attr("placeholder", "Email id already registered").css("font-size", "13px");
					$("#emailID").addClass("error");
				}
				if (mobilecheckResult == false) {
					$("#mob_no").val('').attr("placeholder", "Mobile already registered").css("font-size", "13px");
					$("#mob_no").addClass("error");
				}
			}
		}

	});
}

function inline_enableOTP() {
	if ($("#inline-otp-box").is(":visible") === false) {
		$("#otp_generate").css("visibility", "hidden");
		if (emailValidation.test($("#emailID").val()) && mob_valid) {
			if (resend_otp !== 'true') {
				$(".inline_mob").addClass('inline-mob-field-expand');
				$("#inline-sendotp-btn").css('display', 'inline-block');
			}
			if ($('#country').val() === 'IN') {
				send_otp = "sms";
				$(".otp-sentTo").text("Mobile and Email");
			} else {
				send_otp = "sms";
				$(".otp-sentTo").text("Mobile and Email");
			}
		} else {
			$("#inline-sendotp-btn").css('display', 'none');
			$(".inline_mob").removeClass('inline-mob-field-expand');
		}
	}
}

function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode != 46 && charCode > 31 &&
		(charCode < 48 || charCode > 57))
		return false;

	return true;
}
var gcaptcha_val = 'onpremise';
function submit_the_signup_details_inline_reg(){
	getcatcha();
	gcaptcha_val = 'onpremise';
}

function captcha_submit_the_signup_details() {
	$("#otp_generate").css("display", "none");
	alert(gcaptchatoken)
	Cookies.create('visitor_emailid', $("#emailID").val(), 1);
	$("#inline_sending-otp").css("display", "block");
	$(".inline-send-otp").css("display", "none");
	if ($(window).width() < 675) {
		$("#inline_sending-otp").css("display", "block");
		$("#inline_sending-otp").css("margin-top", "0px");
		$(".inline-dw-btn").addClass('inline-dw-resp');
	}
	var mobile = $("#mob_no").intlTelInput("getNumber", intlTelInputUtils.numberFormat.E164).replace('+', '');
	var verticalId = ($("#vertical").val() == 1202 || $("#vertical").val() == 1204 || $("#vertical").val() == 1205) ? 1201 : $("#vertical").val();
	if (visitor_countrycode === 'IN') {
		mobile = mobile.substring(2);
	}
	$.ajax({
		url: '//' + sam_url + '/website/web_lead_registration.php',
		data: {
			from_Nebula: '1',
			shopName: $("#emailID").val().split('@')[0],
			loc_name: $("#area_name").val(),
			area_name: $("#area_name").val(),
			city_name: $("#city_name").val(),
			state_name: $("#state_name").val(),
			pin_code: $("#pin_code").val(),
			country: $("#country_name").val(),
			lead_type: $("#inline-lead_type").val(),
			vertical: verticalId,
			business: $("#business").val(),
			lead_source: $("#lead_source").val(),
			lead_svalue: $.trim($('#lead_svalue').val()),
			numberOfStores: $('#store_count').val(),
			mob_no: mobile,
			emailID: $("#emailID").val(),
			product: $("#product").val(),
			GLH_CREATED_CATEGORY: Cookies['pageSource'] == 'icici' ? '59' :   $("#GLH_CREATED_CATEGORY").val(), //Whether icici connected banking registration or others,
			demo_date_time: $("#datepicker").val(),
			free_edition: $("#free_edition").val(),
			ggmap: $("#ggmap_details").val(),
			campaign_id: Cookies['campaign_id'],
			ccid: Cookies['ccid'],
			gclid: Cookies['gclid'],
			campaign_name:Cookies['utm_campaign'],
			campaign_source:Cookies['utm_source'],
			campaign_keyword:Cookies['utm_term'],
			campaign_medium:Cookies['utm_medium'],
			country_code: visitor_countrycode,
			//country_changed: country_changed,
			required_otp: send_otp,
			device_type: device_type,
			g_captcha: gcaptchatoken
		},
		dataType: 'json',
		success: function (data) {
			console.log(data)
			update_submit_details_inline_home(data)
		}
	});
}
function submit_the_signup_details_whatsnow(){
	getcatcha();
	gcaptcha_val = 'whatsnow';
}

function captcha_submit_whatsnow_signup_detailsl() {
	$("#otp_generate").css("display", "none");
	Cookies.create('visitor_emailid', $("#emailID").val(), 1);
	$("#inline_sending-otp").css("display", "inline-table");
	$(".inline-send-otp").css("display", "none");
	if ($(window).width() < 675) {
		$("#inline_sending-otp").css("display", "inline-table");
		$(".inline-dw-btn").addClass('inline-dw-resp');
	}
	var mobile = $("#mob_no").intlTelInput("getNumber", intlTelInputUtils.numberFormat.E164).replace('+', '');
	if (visitor_countrycode === 'IN') {
		mobile = mobile.substring(2);
	}
	$.ajax({
		type: 'POST',
		dataType: 'json',
		url: '//' + sam_url + '/website/web_lead_registration.php',
		data: {
			from_Nebula: '1',
			shopName: $("#emailID").val().split('@')[0],
			loc_name: $("#area_name").val(),
			area_name: $("#area_name").val(),
			city_name: $("#city_name").val(),
			state_name: $("#state_name").val(),
			pin_code: $("#pin_code").val(),
			country: $("#country_name").val(),
			lead_type: $("#inline-lead_type").val(),
			vertical: $("#vertical").val(),
			business: $("#business").val(),
			lead_source: $("#lead_source").val(),
			lead_svalue: $.trim($('#lead_svalue').val()),
			mob_no: mobile,
			emailID: $("#emailID").val(),
			product: $("#product").val(),
			GLH_CREATED_CATEGORY: $("#GLH_CREATED_CATEGORY").val(),
			demo_date_time: $("#datepicker").val(),
			free_edition: $("#free_edition").val(),
			ggmap: $("#ggmap_details").val(),
			campaign_id: Cookies['campaign_id'],
			ccid: Cookies['ccid'],
			gclid: Cookies['gclid'],
			campaign_name:Cookies['utm_campaign'],
			campaign_source:Cookies['utm_source'],
			campaign_keyword:Cookies['utm_term'],
			campaign_medium:Cookies['utm_medium'],
			country_code: visitor_countrycode,
			//country_changed: country_changed,
			required_otp: send_otp,
			device_type: device_type,
			g_captcha: gcaptchatoken
		},
		success: function (data) {
			update_submit_details_inline_home(data)
		}
	});

}

function submit_the_signup_details_cloud(){
	getcatcha();
	gcaptcha_val = 'cloud';
}

function captcha_submit_the_signup_details_cloud() {
	$("#otp_generate").css("display", "none");
	Cookies.create('visitor_emailid', $("#emailID").val(), 1);
	//$("#inline_sending-otp").css("display","inline-block");
	$(".inline-send-otp").css("display", "none");

	if ($(window).width() < 675) {
		$("#inline_sending-otp").css("display", "inline-table");
		$(".inline-dw-btn").addClass('inline-dw-resp');
		//$("#otp-box").css("margin-top","2px");
	}
	var mobile = $("#mob_no").intlTelInput("getNumber", intlTelInputUtils.numberFormat.E164).replace('+', '');
	if (visitor_countrycode === 'IN') {
		mobile = mobile.substring(2);
	}
	$.ajax({
		url: '//' + sam_url + '/website/web_lead_registration.php',
		data: {
			from_truesite: "1",
			shopName: $("#emailID").val().split('@')[0].toLowerCase(),
			country: $("#country_name").val(),
			state_name: $("#state_name").val(),
			city_name: $("#city_name").val(),
			lead_type: 1,
			business: $("#business").val(),
			vertical: $.trim($("#vertical").val()),
			emailID: $.trim($("#emailID").val()),
			product: $.trim($("#product").val()),
			mob_no: mobile,
			GLH_CREATED_CATEGORY: $("#GLH_CREATED_CATEGORY").val(),
			free_edition: "y",
			ggmap: $.trim($("#ggmap_details").val()),
			request_from: "website",
			//domain_name: $.trim($("#inp_domain_name").val().toLowerCase()),
			campaign_id: Cookies['campaign_id'],
			ccid: Cookies['ccid'],
			gclid: Cookies['gclid'],
			campaign_name:Cookies['utm_campaign'],
			campaign_source:Cookies['utm_source'],
			campaign_medium:Cookies['utm_medium'],
			campaign_keyword:Cookies['utm_term'],
			country_code: visitor_countrycode,
			//country_changed: country_changed,
			//state_changed:state_changed,
			required_otp: send_otp,
			device_type: device_type,
			g_captcha: gcaptchatoken
		},
		dataType: 'json',
		type: 'POST',
		success: function (data) {
			update_submit_details_inline_home(data);
		}
	})
}

function update_submit_details_inline_home(data) {
	$("#inline_sending-otp").css("display", "none");
	$("#inline_otp-sent").css("display", "block");
	$("#otp-box").css("display", "inline-table");
	$("#inline_otp_val").focus();
	$("#inline-sendotp-btn").hide();
	$("#emailID").hide();
	$(".glue-hq1").hide();
	$(".glue-hq").css("margin-top", "94px");
	$("#store_count").hide();
	$(".field-dropdown-icon").hide();
	$(".inline_mob").removeClass('inline-mob-field-expand');
	$(".inline-mobile-prefix").css("top", "7px");
	resend_otp = 'true';
	//$(".down-form .pos-btn").addClass("pos-btn-active").prop('disabled', false);	
	vLink = data.vlinkid;
	custId = data.cust_id;
	productCode = data.product_code + data.product_skew;
	product_data = encodeURIComponent(data.product_encrypt);
	Cookies.create("product_data", product_data, 1);
//	download_conversion_code();
	
	if ($("#inline-lead_type").val() == 1 && data.cust_id) {
		Cookies.create("sam_CustomerId", data.cust_id, 1);
		Cookies.create("sam_product_code", productCode, 1);
		Cookies.create("GLH_CREATED_CATEGORY", data.GLH_CREATED_CATEGORY, 1);
		Cookies.create("vertical_name", data.VERTICAL_NAME, 1);
	} else if ($("#inline-lead_type").val() == 2 && data.cust_id) {
		Cookies.create("sam_CustomerId", data.cust_id, 1);
		Cookies.create("sam_CustomerName", $("#shopName").val(), 1);
	} else {
		Cookies.erase("sam_CustomerId");
		Cookies.erase("sam_download_link");
		Cookies.erase("sam_OrderNo");
		Cookies.erase("vertical_name");
		Cookies.create("sam_CustomerId", data.cust_id, 1);
		Cookies.create("sam_product_code", productCode, 1);
		Cookies.create("GLH_CREATED_CATEGORY", data.GLH_CREATED_CATEGORY, 1);
		Cookies.create("vertical_name", data.VERTICAL_NAME, 1);
		$("#dwn_btn").show();
	}
}
function inline_resend_otp() {
	$("#inline_otp-sent").css("display", "none");
	$("#inline_sending-otp").css("display", "block");
	$("#inline_rsnd-otp-msg").css("display", "none");
	if ($(window).width() <= 992) {
		$("#inline_sending-otp").css("display", "inline-table");
	}
	var mobile = $("#mob_no").intlTelInput("getNumber", intlTelInputUtils.numberFormat.E164).replace('+', '');
	if (visitor_countrycode === 'IN') {
		mobile = mobile.substring(2);
	}
	resendOtpCount = resendOtpCount + 1;
	if (resendOtpCount > 3) {
		$('#inline_otp_resend,#inline_sending-otp').hide();
		$('#inline_rsnd-otp-msg').text('Kindly Check your mobile number / try after sometimes').attr('color', '#fe0006').show();
	} else {
		$.ajax({
			url: '//' + sam_url + '/website/nebula_registration_page_details.php',
			data: {
				cust_id: custId,
				vlinkid: vLink,
				purpose: "resend_otp",
				emailID: $("#emailID").val(),
				contact_no: mobile
			},
			dataType: 'json',
			success: function (data) {
				inline_update_otp_details(data)
			}
		});
	}
}

function inline_update_otp_details(data) {
	$("#inline_sending-otp").css("display", "none");
	$("#inline_rsnd-otp-msg").css("display", "block");
	if (data.status == "true") {
		setTimeout(function () {
			$("#rsnd-otp-msg").css("display", "none");
		}, 2000);
	}
}

function inline_otp_validate() {
	if (($("#inline_otp_val").val()).length === 5) {
		inline_otp_submit();
	} else if (($("#inline_otp_val").val()).length >= 5) {
		$("#inline_otp_val").val('');
	}
}

function inline_otp_submit() {
	$("#inline-sending-otp").css("display", "inline");
	if ($("#GLH_CREATED_CATEGORY").val() === '36' || $("#GLH_CREATED_CATEGORY").val() === '5') {
		$("#otp_resend").css("display", "none");
		Cookies.create("confirm_code", $("#inline_otp_val").val(), 1);
		$.ajax({
			url: '//' + sam_url + '/website/nebula_registration_page_details.php',
			data: {
				purpose: "validate_otp",
				vlinkid: vLink,
				emailid: $("#emailID").val(),
				otp: $("#inline_otp_val").val(),
				product: Cookies['sam_product_code'],
				required_otp: send_otp
			},
			dataType: "json",
			success: function (response) {
				console.log(response)
				inline_otp_submitted(response)
			}
		});
	} else {
		$.ajax({
			url: '//' + sam_url + '/website/nebula_registration_page_details.php',
			data: {
				vlinkid: vLink,
				cust_id: custId,
				confirm_code: $("#inline_otp_val").val(),
				purpose: "download_verification_link",
				required_otp: send_otp
			},
			dataType: 'json',
			success: function (data) {
				inline_otp_submitted(data)
			}
		});
	}
}

function saveIt(name1, name2, name3) {
	var x = $("input#cookievalue1").val()
	var y = $("input#cookievalue2").val()
	var z = $("input#cookievalue3").val()
	Cookies.create(name1, x, 7);
	Cookies.create(name2, y, 7);
	Cookies.create(name3, z, 7);
}

function inline_otp_submitted(data) {
	$("#inline-sending-otp").css("display", "none");
	if (data.status == "false") {
		$("#inline_otp_val").css('font-size', '12px');
		if (data.error_code == 'E001') {
			$("#inline_otp_val").addClass("error");
			$("#inline_otp_val").val('').attr("placeholder", "*Invalid OTP");
			$("#inline_otp_resend").css("display", "inline-table")
			$("#inline_otp_sucess_logo").css("display", "none");

		} else if (data.error_code == 'E002') {
			$("#inline-otp_val").addClass("error");
			$("#inline-otp_val").val('').attr("placeholder", "*Expired OTP");
			$("#inline-otp_resend").css("display", "inline-table");
			$("#inline_otp_sucess_logo").css("display", "none");
		}
	} else if (data.status == "error") {
		$("#inline_otp_val").addClass("error");
		$("#inline_otp_val").val('').attr("placeholder", "*Invalid OTP");
		$("#inline_otp_resend").css("display", "inline-table");
		$("#inline_otp_sucess_logo").css("display", "none");
	} else if (data.status == "true" || data.status == "success") {
		var data_download_link = data.download_link;
		var gobill_link = data.gobill_link;
		Cookies.create("sam_download_link", data_download_link, 1);
		gobill_link ? Cookies.create("gobill_download_link", gobill_link) : '';
		
		
		file_name !== 'food-truck-pos-software' ? (location.href = "../thankyou?business=" + $("#business").val() + "&vertical=" + $("#vertical").val()) : "";
		
		
		if ($(window).width() > 1024) {
			$("#inline-reg-btn,.inline-resendotp, #inline_otp-sent, #inline_rsnd-otp-msg").css("display", "none");
			$("#inline-download_link_product, #inline_otp_sucess_logo").css("display", "inline-block");
			if (file_name !== 'food-truck-pos-software') {
				$("#inline-download_link_product>a, .thankyou_download").attr('href', decodeURIComponent(data.download_link));
			} else if (file_name === 'food-truck-pos-software') {
				var data_vlinkid = data.vlinkid;
				var sam_CustomerId = data.cust_id;
				Cookies.create("sam_product_code", '60501.0TT30', 1);
				Cookies.create("sam_vLinkId", data_vlinkid, 1);
				Cookies.create("sam_CustomerId", sam_CustomerId, 1);
				$("#inline-download_link_product>a").attr('href', '../domain-registration?regtype=qsr');
			}
			if ($("#GLH_CREATED_CATEGORY").val() == 38) {
				$('.wtn-inline-reg-from').hide();
				$('.inline_thankyou_desktop').show();
			}

		} else if ($(window).width() <= 1024) {
			$("#inline-reg-btn,.inline-resendotp, .inline_rsnd-otp-msg, .inline-reg-form").css("display", "none");
			$("#inline-download_link_product, #inline_otp_sucess_logo").css("display", "inline-block");
			$(".inline_thankyou").css("display", "block")
		}
		var tracker = ga.getAll()[0].get('name');
	ga(tracker + '.send', 'event', {
		'eventCategory': 'Micro Registration',
		'eventAction': Cookies['g_vertical_name'] ? Cookies['g_vertical_name'] : $("#vertical").val(),
		eventLabel: custId
	});
		
//		var verticalVAL = getMacro($("#vertical").val())
//		
//		if(gobill_link){
//			location.href = "../thankyou-new?business=" + $("#business").val() + "&vertical=" + $("#vertical").val();
//		}else if (verticalVAL == '1101') {
//			location.href = "../thankyou-supermarket";
//		} else if (verticalVAL == '1102') {
//			location.href = "../thankyou-hypermarket";
//		} else if (verticalVAL == '1103') {
//			location.href = "../thankyou-pharma";
//		} else if (verticalVAL == '1104') {
//			location.href = "../thankyou-apparel";
//		} else if (verticalVAL == '1105') {
//			location.href = "../thankyou-electronics";
//		} else if (verticalVAL == '1106') {
//			location.href = "../thankyou-lifestyle";
//		} else if (verticalVAL == '1107') {
//			location.href = "../thankyou-specialized-retail";
//		} else if (verticalVAL == '1201') {
//			location.href = "../thankyou-restaurant";
//		} else if (verticalVAL == '1202') {
//			location.href = "../thankyou-qsr";
//		} else if (verticalVAL == '1203') {
//			location.href = "../thankyou-bakery";
//		} else if (verticalVAL == '1206') {
//			location.href = "../thankyou-sweetshop";
//		} else if (verticalVAL == '1207') {
//			location.href = "../thankyou-ice-cream";
//		} else if (verticalVAL == '1204') {
//			location.href = "../thankyou-food-court";
//		} else if (verticalVAL == '1301' || verticalVAL == '1303' || verticalVAL == '1304') {
//			location.href = "../thankyou-de" + "?vertical=" + verticalVAL;
//		} else if (verticalVAL == '1302') {
//			location.href = "../thankyou-de-pharma";
//		} else if ($(window).width() > 1024) {
//			$("#inline-reg-btn,.inline-resendotp, #inline_otp-sent, #inline_rsnd-otp-msg").css("display", "none");
//			$("#inline-download_link_product, #inline_otp_sucess_logo").css("display", "inline-block");
//			if (file_name !== 'food-truck-pos-software') {
//				$("#inline-download_link_product>a, .thankyou_download").attr('href', decodeURIComponent(data.download_link));
//			} else if (file_name === 'food-truck-pos-software') {
//				var data_vlinkid = data.vlinkid;
//				var sam_CustomerId = data.cust_id;
//				Cookies.create("sam_product_code", '60501.0TT30', 1);
//				Cookies.create("sam_vLinkId", data_vlinkid, 1);
//				Cookies.create("sam_CustomerId", sam_CustomerId, 1);
//				$("#inline-download_link_product>a").attr('href', '../domain-registration?regtype=qsr');
//			}
//			if ($("#GLH_CREATED_CATEGORY").val() == 38) {
//				$('.wtn-inline-reg-from').hide();
//				$('.inline_thankyou_desktop').show();
//
//			}
//
//		} else if ($(window).width() <= 1024) {
//			$("#inline-reg-btn,.inline-resendotp, .inline_rsnd-otp-msg, .inline-reg-form").css("display", "none");
//			$("#inline-download_link_product, #inline_otp_sucess_logo").css("display", "inline-block");
//			$(".inline_thankyou").css("display", "block")
//		}
	}
}

$("#inline_otp_val").bind("paste", function (e) {
	setTimeout(function () {}, 500);
});


if ($(window).width() < 992) {
	$("#mob_no").prop("type", "number");
}


setTimeout(function () {
	try {
		var slider = $('.vertical-cust-testimonial').data('flexslider');
		var animationSpeed = slider.vars.animationSpeed; //save animation speed to reset later
		slider.vars.animationSpeed = 1000;
		slider.flexAnimate(1); //position index for desired slide goes here
		slider.vars.animationSpeed = animationSpeed;
	} catch (e) {
//		console.log(e);
	}
}, 300);
$(function () {
	var acc = document.getElementsByClassName("toggle-vertical-desc");
	var ac = document.getElementsByClassName("vertical-xs-icon");
	var i;
	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			var panel = this.nextElementSibling;
			if (panel.classList.contains('vertical-desc-active')) {
				panel.style.maxHeight = null;
				$('.vertical-desc').removeClass('vertical-desc-active').css("max-height", '0');
				$('.toggle-vertical-desc').removeClass('toggle-vertical-desc-active');
			} else {
				$('.vertical-desc').removeClass('vertical-desc-active').css("max-height", '0');
				panel.style.maxHeight = panel.scrollHeight + "px";
				panel.className += " vertical-desc-active";
				if (!panel.nextElementSibling) {
					panel.style.marginBottom = 0;
				} else {
					panel.style.marginBottom = 16 + 'px';
				}
				$('.toggle-vertical-desc').removeClass('toggle-vertical-desc-active');
				this.className += " toggle-vertical-desc-active";
			}
		});
	}
	for (i = 0; i < ac.length; i++) {
		ac[i].addEventListener("click", function () {
			var nextpanel = (this.nextElementSibling).nextElementSibling;
			if (nextpanel.classList.contains('vertical-desc-active')) {
				nextpanel.style.maxHeight = null;
				$('.vertical-desc').removeClass('vertical-desc-active').css("max-height", '0');
				$('.toggle-vertical-desc').removeClass('toggle-vertical-desc-active');
			} else {
				if (!nextpanel.nextElementSibling) {
					nextpanel.style.marginBottom = 0;
				} else {
					nextpanel.style.marginBottom = 16 + 'px';
				}
				$('.vertical-desc').removeClass('vertical-desc-active').css("max-height", '0');
				nextpanel.style.maxHeight = nextpanel.scrollHeight + "px";
				nextpanel.className += " vertical-desc-active";
				$('.toggle-vertical-desc').removeClass('toggle-vertical-desc-active');
				this.nextElementSibling.className += " toggle-vertical-desc-active";
			}
		});
	}
});


if($(window).width()<767){
	
	
	
			$('.vertical-feature > div').click(function(){
		var panel = $(this).find('.feature-desc')
		
		if($(this).find('.feature-content').hasClass('featureactive')) {
			$(this).find('.feature-content').removeClass('featureactive');	
			$(this).find('.feature-desc').css('max-height', "0px")
		}else{
			$(this).siblings().find('.feature-content').removeClass('featureactive');
			$(this).siblings().find('.feature-desc').css('max-height',"0px")
			$(this).find('.feature-content').addClass('featureactive');
			$(this).find('.feature-desc').css('max-height', $(panel)[0].scrollHeight + "px")
		}
	})
}
	$('.know-more-link').click(function(){
		var featurelinkurl = $(this).parent().parent().attr('href');
		console.log(featurelinkurl);
	});

if (document.domain == "www.gofrugal.com" || document.domain == "gofrugal.com"){
	$.getScript("https://www.google.com/recaptcha/api.js?render=6LfiKd4ZAAAAALrNK4ECyfPX3u8qj5qf7yjVHGHc");
}
else{
	$.getScript("https://www.google.com/recaptcha/api.js?render=6Lc6VdMZAAAAAAyES-13iFhW22hm7GGnMqo1H_CV");
}

function getcatcha(){
	if (document.domain == "www.gofrugal.com" || document.domain == "gofrugal.com") {
		grecaptcha.ready(function() {
			grecaptcha.execute('6LfiKd4ZAAAAALrNK4ECyfPX3u8qj5qf7yjVHGHc', {action: 'web_registration'}).then(function(token) {
				gcaptchatoken = token
				if(gcaptcha_val == 'cloud'){
					captcha_submit_the_signup_details_cloud();
				}else if(gcaptcha_val == 'partner'){
					captcha_submit_whatsnow_signup_detailsl();
				}
				else{
					captcha_submit_the_signup_details();
				}
			});
		});
	}
	else{
		console.log('staging');
		grecaptcha.ready(function() {
			grecaptcha.execute('6Lc6VdMZAAAAAAyES-13iFhW22hm7GGnMqo1H_CV', {action: 'web_registration'}).then(function(token) {
				gcaptchatoken = token
				console.log(gcaptcha_val)
				if(gcaptcha_val == 'cloud'){
					captcha_submit_the_signup_details_cloud();
				}else if(gcaptcha_val == 'partner'){
					captcha_submit_whatsnow_signup_detailsl();
				}
				else{
					captcha_submit_the_signup_details();
				}
			});
		});
	}
}