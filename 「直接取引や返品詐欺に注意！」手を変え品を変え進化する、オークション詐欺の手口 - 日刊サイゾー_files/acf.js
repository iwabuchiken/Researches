/* Beagle2.0 JS 20121012 */
if(typeof(adingoBeagle)=="undefined"){
    adingoBeagle = new Array();
    adingoBeagle.showCount = 1;
    adingoBeagle.outputCount = 0;
    
    adingoBeagle.adingoAdsRequest = function(){
        if(typeof(adingoBeagle.showCount)!="undefined" && adingoBeagle.outputCount!="undefined"){
            if(adingoBeagle.maxCount!=0){
                var ctxtId = '';
                var ctxtArr = new Array('pro0300','fin0200','hom0300','rea0101','hom0103','rea0104','rea0200','rea0000','hom0400','rea0103','rea0100','rea0300','fin0206','pro0600','boo0200','rea0102','sof0300');var randNum = Math.floor(Math.random() * ctxtArr.length);ctxtId = ctxtArr[randNum];
                var typeCtxtId = ctxtId;
                /* Yahoo Request JS Script */
document.write('<script type="text/javascript" src="http://im.ecnavi.ov.yahoo.co.jp/js_flat/?source=ecnavi_jp_cyzo_im&type=all_' + typeCtxtId + '&ctxtKeywords=&ctxtId=' + ctxtId + '&keywordCharEnc=utf8&outputCharEnc=utf8&maxCount=7&ctxtUrl=' + encodeURIComponent(document.URL) + '&ref=' + encodeURIComponent(document.referrer) + '&gen=&age="><\/script>');
            }
        }
    }
    
    adingoBeagle.showListing = function(id){
        if(typeof(adingoBeagle["showAdingoBeagle"+id])=="undefined") return;
        adingoBeagle["showAdingoBeagle"+id](id);
    }
    
    adingoBeagle.adingoAdsRequest();
}

/* showAdingoBeagle0000000000000131 */
adingoBeagle["showAdingoBeagle"+"0000000000000131"] = function(id){
var tmp='';
if(typeof(zSr)=="undefined") return;
var zsrStart = (adingoBeagle.outputCount+1)*6;
adingoBeagle.outputCount += 1;
var zsrEnd = (adingoBeagle.outputCount+1)*6;
if(zSr.length<zsrEnd) zsrEnd = zSr.length;
if(zsrStart >= zsrEnd) return;
var i=zsrStart;

tmp+="<!-- banner start-->";
tmp+="<div style=\"margin: 0; padding: 0; width: auto; height: auto; text-align: left !important; letter-spacing: normal !important; font-family: 'Lucida Grande','Hiragino Kaku Gothic Pro','ヒラギノ角ゴ Pro W3','ＭＳ Ｐゴシック',Geneva,Arial,Verdana,sans-serif !important;\">";
tmp+="<div style=\"border: 1px solid #FFFFFF; zoom: 1;\">";
for(var i=zsrStart; i<zsrEnd; i=i+6) {
tmp+="<div>";
tmp+="<a href=\"";
tmp += zSr[i+2];
tmp+="\" style=\"padding: 8px 10px; height: auto; display: block; color: #E60000; background: #ffffff; text-decoration: none;\" onmouseover=\"this.style.backgroundColor='#ffffff';this.style.color='#7F7F7F';\" onmouseout=\"this.style.backgroundColor='#ffffff';this.style.color='#E60000';\" target=\"_new\">";
tmp+="<span style=\"line-height: 1.2; display: inline; color: #E60000; font-weight: bold; font-size: 20px; text-decoration: underline;\" onmouseover=\"this.style.textDecoration='underline';this.style.color='#7F7F7F';\" onmouseout=\"this.style.textDecoration='underline';this.style.color='#E60000';\">";
tmp += zSr[i+3];
tmp+="</span>";
tmp+="<span style=\"line-height: 1.2; color: #1b703a; font-size: 12px; display: inline; text-decoration: none !important;\" >&nbsp;&ndash;&nbsp;";
tmp += zSr[i+4];
tmp+="</span>";
tmp+="<span style=\"width: auto; height: auto; line-height: 1.2; color: #000000; font-size: 18px; display: block; text-decoration: none !important;\">";
tmp += zSr[i];
tmp+="</span>";
tmp+="</a>";
tmp+="</div>";
}
tmp+="<!-- overtureim -->";
tmp+="<div style=\"margin: 0; padding: 0; width: 100% !important; height: 16px; clear: both; background: #FFFFFF;\">";
tmp+="<ul style=\"margin: 0; padding: 3px 6px 0 0; display: block; color: #CCCCCC; font-size: 11px; text-align: right; list-style: none;\">";
tmp+="<li style=\"margin: 0; padding: 0; color: #CCCCCC; line-height: 1; display: inline; font-size: 11px;\">インタレストマッチ&nbsp;&ndash;&nbsp;</li>";
tmp+="<li style=\"display: inline; font-size: 11px;\"><a href=\"http://ov.yahoo.co.jp/service/int/index.html?o=IM0028\" target=\"_blank\" style=\"margin: 0 0 0 3px; padding: 0; width: auto; height: auto; color: #CCCCCC; background: none; text-decoration: none; font-size: 11px; line-height: 1; display: inline; font-weight: normal;\">広告の掲載について</a></li>";
tmp+="</ul>";
tmp+="</div>";
tmp+="<!-- /overtureim -->";
tmp+="</div>";
tmp+="</div>";


adingoBeagle.showCount = Math.floor(Math.random()*1000000000000)+1;
document.write('<div id="adingoBeagle'+adingoBeagle.showCount+'"  ></div>')
document.getElementById('adingoBeagle'+adingoBeagle.showCount).innerHTML = tmp;
}

/* showAdingoBeagle0000000000000419 */
adingoBeagle["showAdingoBeagle"+"0000000000000419"] = function(id){
var tmp='';
if(typeof(zSr)=="undefined") return;
var zsrStart = (adingoBeagle.outputCount+1)*6;
adingoBeagle.outputCount += 3;
var zsrEnd = (adingoBeagle.outputCount+1)*6;
if(zSr.length<zsrEnd) zsrEnd = zSr.length;
if(zsrStart >= zsrEnd) return;
var i=zsrStart;

tmp+="<head>";
tmp+="<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />";
tmp+="<meta http-equiv=\"Content-Style-Type\" content=\"text/css\" />";
tmp+="<meta http-equiv=\"Content-Script-Type\" content=\"text/javascript\" />";
tmp+="<title></title>";
tmp+="<style type=\"text/css\"><!--";
tmp+="/*--------------------------------------------------";
tmp+="Common styles";
tmp+="--------------------------------------------------*/";
tmp+="body {";
tmp+="position: relative;";
tmp+="background: #ffffff;";
tmp+="border: 1px solid #999999;";
tmp+="zoom: 1;";
tmp+="}";
tmp+=".adOverture {";
tmp+="position: relative;";
tmp+="margin: 0;";
tmp+="padding: 0;";
tmp+="font-family: \"Lucida Grande\",\"Hiragino Kaku Gothic Pro\",\"ヒラギノ角ゴ Pro W3\",\"ＭＳ Ｐゴシック\",Geneva,Arial,Verdana,sans-serif !important;";
tmp+="text-align: left !important;";
tmp+="letter-spacing: normal !important;";
tmp+="}";
tmp+="/* common a */";
tmp+="div.AdingoLayout a:link,";
tmp+="div.AdingoLayout a:visited,";
tmp+="div.AdingoLayout a:hover,";
tmp+="div.AdingoLayout a:active {";
tmp+="text-decoration: none;";
tmp+="}";
tmp+="div.AdingoLayout a {";
tmp+="clear: both;";
tmp+="cursor: pointer;";
tmp+="overflow: hidden;";
tmp+="display: block;";
tmp+="}";
tmp+="/* title and background Color */";
tmp+="div.AdingoLayout a{";
tmp+="color: #0000ff;";
tmp+="text-decoration: underline;";
tmp+="}";
tmp+="div.AdingoLayout a:hover{";
tmp+="color: #CC0000;";
tmp+="background: #FFFFCC;";
tmp+="}";
tmp+="/* title underline on mouseover */";
tmp+="div.AdingoLayout a:hover span.adttl {";
tmp+="text-decoration: underline;";
tmp+="}";
tmp+="/* common span */";
tmp+="div.AdingoLayout a span.adttl {";
tmp+="line-height: 1.2;";
tmp+="display: block;";
tmp+="text-decoration: underline;";
tmp+="font-weight: bold;";
tmp+="font-size: 12px;";
tmp+="}";
tmp+="div.AdingoLayout a span.adtext {";
tmp+="display: block;";
tmp+="line-height: 1.2;";
tmp+="color: #000000;";
tmp+="font-size: 12px;";
tmp+="display: block;";
tmp+="}";
tmp+="div.AdingoLayout a span.adlink {";
tmp+="line-height: 1.2;";
tmp+="color: #1b703a;";
tmp+="font-size: 10px;";
tmp+="display: block;";
tmp+="}";
tmp+="/* overtureim */";
tmp+="body div.overtureim {";
tmp+="position: absolute;";
tmp+="bottom: 0;";
tmp+="margin: 0;";
tmp+="padding: 0;";
tmp+="width: 100% !important;";
tmp+="height: 26px;";
tmp+="clear: both;";
tmp+="text-align: right;";
tmp+="background: #FFFFFF;";
tmp+="}";
tmp+="body div.overtureim ul {";
tmp+="margin: 0;";
tmp+="padding: 0 5px 0 0;";
tmp+="height: 26px;";
tmp+="line-height: 26px;";
tmp+="color: #B3B3B3;";
tmp+="font-size: 11px;";
tmp+="list-style: none;";
tmp+="vertical-align: middle;";
tmp+="}";
tmp+="body div.overtureim ul li {";
tmp+="margin: 0;";
tmp+="padding: 2px 0 0 0;";
tmp+="line-height: 11px;";
tmp+="}";
tmp+="body div.overtureim ul li a {";
tmp+="margin: 0;";
tmp+="padding: 0;";
tmp+="width: auto;";
tmp+="height: auto;";
tmp+="display: block;";
tmp+="color: #B3B3B3;";
tmp+="background: none;";
tmp+="text-decoration: none;";
tmp+="}";
tmp+="body div.overtureim ul li a:hover {";
tmp+="color: #B3B3B3;";
tmp+="background: none;";
tmp+="}";
tmp+="/*--------------------------------------------------";
tmp+="AdingoAdImg_160_600_div";
tmp+="--------------------------------------------------*/";
tmp+="div#AdingoAdImg_160_600_iframe {";
tmp+="margin: 0;";
tmp+="padding: 0;";
tmp+="width: auto;";
tmp+="height: 100%;";
tmp+="overflow: hidden;";
tmp+="}";
tmp+="div#AdingoAdImg_160_600_iframe div.Adingoinner {";
tmp+="}";
tmp+="div#AdingoAdImg_160_600_iframe div.AdingoLayout {";
tmp+="height: 190px;";
tmp+="}";
tmp+="div#AdingoAdImg_160_600_iframe div.AdingoLayout a {";
tmp+="width: atuo;";
tmp+="height: 100%;";
tmp+="display: block;";
tmp+="}";
tmp+="div#AdingoAdImg_160_600_iframe div.AdingoLayout a img {";
tmp+="margin: 5px 8px 2px;";
tmp+="width: 140px;";
tmp+="height: 85px;";
tmp+="border: 1px solid #ccc;";
tmp+="display: block;";
tmp+="text-align: center;";
tmp+="}";
tmp+="div#AdingoAdImg_160_600_iframe div.AdingoLayout a span.adwrap {";
tmp+="padding: 0 9px 8px;";
tmp+="display: block;";
tmp+="}";
tmp+="div#AdingoAdImg_160_600_iframe div.AdingoLayout span.adttl {";
tmp+="margin: 0 0 2px;";
tmp+="}";
tmp+="div#AdingoAdImg_160_600_iframe div.AdingoLayout a span.adlink {";
tmp+="word-break: break-all;";
tmp+="}";
tmp+="--></style>";
tmp+="</head>";
tmp+="<body>";
tmp+="<div id=\"AdingoAdImg_160_600_iframe\" class=\"adOverture\">";
tmp+="<div class=\"Adingoinner\">";
for(var i=zsrStart; i<zsrEnd; i=i+6){
tmp+="<div class=\"AdingoLayout\">";
tmp+="<a href=\"";
tmp += zSr[i+2];
tmp+="\" target=\"_new\">";
tmp+="<img src=\"http://adingo.heartrails-capture.com/140x85/key=7a41ecf8e0358fe7a90792c22050d206/site=ecnavi_jp_cyzo_im?http://";
tmp += zSr[i+4];
tmp+="\" width=\"85\" height=\"58\" alt=\"\" />";
tmp+="<span class=\"adwrap\">";
tmp+="<span class=\"adttl\">";
tmp += zSr[i+3];
tmp+="</span>";
tmp+="<span class=\"adtext\">";
tmp += zSr[i+0];
tmp+="</span>";
tmp+="<span class=\"adlink\">";
tmp += zSr[i+4];
tmp+="</span>";
tmp+="</span>";
tmp+="</a>";
tmp+="</div>";
}
tmp+="<div class=\"overtureim\">";
tmp+="<ul>";
tmp+="<li>インタレストマッチ&nbsp;&ndash;&nbsp;</li>";
tmp+="<li>";
tmp+="<a href=\"http://ov.yahoo.co.jp/service/int/index.html?o=IM0028\" target=\"_blank\">広告の掲載について</a>";
tmp+="</li>";
tmp+="</ul>";
tmp+="</div>";
tmp+="</div>";
tmp+="</div>";
tmp+="</body>";


adingoBeagle.showCount = Math.floor(Math.random()*1000000000000)+1;
document.write('<iframe id="adingoBeagle'+adingoBeagle.showCount+'" width="160" height="600" allowtransparency="false" hspace="0" vspace="0" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" ></iframe>')
var iframeDocument = document.getElementById('adingoBeagle'+adingoBeagle.showCount).contentWindow.document;iframeDocument.write(tmp);iframeDocument.close();
}

/* showAdingoBeagle0000000000000132 */
adingoBeagle["showAdingoBeagle"+"0000000000000132"] = function(id){
var tmp='';
if(typeof(zSr)=="undefined") return;
var zsrStart = (adingoBeagle.outputCount+1)*6;
adingoBeagle.outputCount += 3;
var zsrEnd = (adingoBeagle.outputCount+1)*6;
if(zSr.length<zsrEnd) zsrEnd = zSr.length;
if(zsrStart >= zsrEnd) return;
var i=zsrStart;

tmp+="<!-- banner start-->";
tmp+="<div style=\"margin: 0; padding: 0; width: auto; height: auto; text-align: left !important; letter-spacing: normal !important; font-family: 'Lucida Grande','Hiragino Kaku Gothic Pro','ヒラギノ角ゴ Pro W3','ＭＳ Ｐゴシック',Geneva,Arial,Verdana,sans-serif !important;\">";
tmp+="<div style=\"border: 1px solid #FFFFFF; zoom: 1;\">";
for(var i=zsrStart; i<zsrEnd; i=i+6) {
tmp+="<div>";
tmp+="<a href=\"";
tmp += zSr[i+2];
tmp+="\" style=\"padding: 8px 10px; height: auto; display: block; color: #E60000; background: #ffffff; text-decoration: none;\" onmouseover=\"this.style.backgroundColor='#ffffff';this.style.color='#7F7F7F';\" onmouseout=\"this.style.backgroundColor='#ffffff';this.style.color='#E60000';\" target=\"_new\">";
tmp+="<span style=\"line-height: 1.2; display: inline; color: #E60000; font-weight: bold; font-size: 20px; text-decoration: underline;\" onmouseover=\"this.style.textDecoration='underline';this.style.color='#7F7F7F';\" onmouseout=\"this.style.textDecoration='underline';this.style.color='#E60000';\">";
tmp += zSr[i+3];
tmp+="</span>";
tmp+="<span style=\"line-height: 1.2; color: #1b703a; font-size: 12px; display: inline; text-decoration: none !important;\" >&nbsp;&ndash;&nbsp;";
tmp += zSr[i+4];
tmp+="</span>";
tmp+="<span style=\"width: auto; height: auto; line-height: 1.2; color: #000000; font-size: 18px; display: block; text-decoration: none !important;\">";
tmp += zSr[i];
tmp+="</span>";
tmp+="</a>";
tmp+="</div>";
}
tmp+="<!-- overtureim -->";
tmp+="<div style=\"margin: 0; padding: 0; width: 100% !important; height: 16px; clear: both; background: #FFFFFF;\">";
tmp+="<ul style=\"margin: 0; padding: 3px 6px 0 0; display: block; color: #CCCCCC; font-size: 11px; text-align: right; list-style: none;\">";
tmp+="<li style=\"margin: 0; padding: 0; color: #CCCCCC; line-height: 1; display: inline; font-size: 11px;\">インタレストマッチ&nbsp;&ndash;&nbsp;</li>";
tmp+="<li style=\"display: inline; font-size: 11px;\"><a href=\"http://ov.yahoo.co.jp/service/int/index.html?o=IM0028\" target=\"_blank\" style=\"margin: 0 0 0 3px; padding: 0; width: auto; height: auto; color: #CCCCCC; background: none; text-decoration: none; font-size: 11px; line-height: 1; display: inline; font-weight: normal;\">広告の掲載について</a></li>";
tmp+="</ul>";
tmp+="</div>";
tmp+="<!-- /overtureim -->";
tmp+="</div>";
tmp+="</div>";


adingoBeagle.showCount = Math.floor(Math.random()*1000000000000)+1;
document.write('<div id="adingoBeagle'+adingoBeagle.showCount+'"  ></div>')
document.getElementById('adingoBeagle'+adingoBeagle.showCount).innerHTML = tmp;
}

