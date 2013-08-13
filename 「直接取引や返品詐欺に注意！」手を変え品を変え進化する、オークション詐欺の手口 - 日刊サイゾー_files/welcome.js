// $('#ticker').before('<div id="welcome"></div>');
// 
// 	
// //default
	// var welcomePage    = "/parts/inc_welcome.html";
// //campaign
	// //var welcomePage    = "/parts/20130318camp.html";
// 	
	// $("#welcome").load(welcomePage+" .welcomeInner", function() {
		// $("#close").click(function(){
			// $("#welcome").fadeOut();
			// jQuery.cookie("sharevisited","sharevisited",{ expires: 30, path: "/" });
		// });
	// });
// 
// // 最初だけ表示するヤツ
// $(function(){
// 
	// var sharevisited = jQuery.cookie("sharevisited") && jQuery.cookie("sharevisited")!=null ? false : true;
	// if(sharevisited){
		// $("#welcome").css({
			// display: "block",
			// opacity: 0,
			// marginTop: -200
		// }).animate({
			// marginTop: 80,
			// opacity: 1
		// },{
			// duration: 500,
			// easing: "swing"
		// });
		// $("#close").click(function(){
			// $("#welcome").fadeOut();
			// jQuery.cookie("sharevisited","sharevisited",{ expires: 30, path: "/" });
		// });
	// }
// 	
	// $("#reset").click(function(){
		// jQuery.cookie("sharevisited",null);
		// location.href = location.href;
		// return false;
	// });
// 
// });



// cookie リセット
$("#resetViewCookie").click(function(){
	$.cookie("viewmode" ,null, { path: "/" });
	location.href = location.href;
	return false;
});


// UA判定 スマホ振り分け
function is_mobile () {
  var useragents = [
    'Android',
    'BlackBerry',
    'Windows Phone',
    'iPhone'
    ];
  var pattern = new RegExp(useragents.join('|'), 'i');
  return pattern.test(navigator.userAgent);
}
if (is_mobile()) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = '/common/css/sp.css';
  document.getElementsByTagName('head')[0].appendChild(link);
}

