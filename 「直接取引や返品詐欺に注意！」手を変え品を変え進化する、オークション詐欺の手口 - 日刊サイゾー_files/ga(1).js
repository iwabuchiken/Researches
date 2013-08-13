$(function(){
	if (location.pathname == "/search.html") {
		$("#container_hashira_l a,#container_hashira_r a").css("height",($("#container-inner").innerHeight()+570)+"px");
	}
	else {
		$("#container_hashira_l a,#container_hashira_r a").css("height",($("#container-inner").innerHeight())+"px");
	}
	
	var saizoUrl; var nowDir; var ob; var sob;
	
	//topか下層か
	saizoUrl = location.pathname;
	if (saizoUrl == "/" || saizoUrl == "/index.html" || saizoUrl.match(/^\/[0-9]{1,}\.html$/)) {
		nowDir = "top";
	}
	else if (saizoUrl.match(/[0-9]{4}\/[0-9]{2}\/((index|[0-9]{1,})\.html)?$/)) {
		nowDir = "mon";
	}
	else if (saizoUrl.match(/[0-9]{4}\/[0-9]{2}\/.*\.html/)) {
		nowDir = "ent";
	}
	else if (saizoUrl.match(/[a-z0-9]*?\/[a-z0-9]*?\/(.*\.html)?/) || saizoUrl.match(/rensai.html/)) {
		nowDir = "cat";
	}
	else if (saizoUrl.match(/ranking20.html/)) {
		nowDir = "rank";
	}
	else {
		nowDir = "other";
	}
function gp(cat, act, lab) {
	var gpCat = cat + "：" + nowDir;
	var gpAct = act != "" ? cat + "：" + nowDir + " / " + act : "out of order";
	var gpLab = lab != "" ? cat + "：" + nowDir + " / " + lab : "";
	_gaq.push(['_trackEvent', gpCat, gpAct, gpLab]);
	//console.log("gpCat-> "+gpCat);console.log("gpAct-> "+gpAct);console.log("gpLab-> "+gpLab);console.log("------------------------------");
}
	
//fixNavi
	////TOPに戻るボタン
	$("#ticker-top a").click(function(e){
		gp("fixNavi", "topBtn", "");e.stopImmediatePropagation();
	});
	////横スクロールの記事
	$("#ticker-sc a").click(function(e){
		gp("fixNavi", "attentions", "");e.stopImmediatePropagation();
	});
	////アイコン
	$("#ticker-bt a").click(function(e){
		gp("fixNavi", $(this).find("img").attr("alt"), "");e.stopImmediatePropagation();
	});
	////検索
	$("#ticker-search #searchsubmit").click(function(e){
		gp("fixNavi", "search", "");e.stopImmediatePropagation();
	});

//logo + headlink
	////logo
	$("#header-name").click(function(e){
		gp("logo", "", "");e.stopImmediatePropagation();
	});
//ticker-media
	$("#ticker-media a").click(function(e){
		gp("headLink", $(this).find("img").attr("alt"), "");e.stopImmediatePropagation();
	});

//glovalNav
	////category
	$("#glnavi > li > a").click(function(e){
		gp("gloNavi", $(this).find("img").attr("alt"), "");e.stopImmediatePropagation();
	});
	////sub category
	$("#glnavi > li > ul a").click(function(e){
		gp("gloNavi", $(this).parents("li").find("a img").attr("alt")+" / "+$(this).text(), "");e.stopImmediatePropagation();
	});

//タブ切り替え
	////タブ切り替えボタン
	$("#tab a").click(function(e){
		gp("topics", $(this).find("img").attr("alt"), "");e.stopImmediatePropagation();
	});
	////textLink
	$(".topic-title a").click(function(e){
		gp("topics", "", $("#tab li:nth-child("+ $(this).closest("div").attr("id").slice($(this).closest("div").attr("id").length - 1) +") img").attr("alt")+" / article"+($(this).closest("div").find(".topic-title a").index(this)+1));e.stopImmediatePropagation();
	});
	////photoLink
	$(".top-pickup a").click(function(e){
		gp("topics", "", $("#tab li:nth-child("+ $(this).closest("div").attr("id").slice($(this).closest("div").attr("id").length - 1) +") img").attr("alt")+" / photo");e.stopImmediatePropagation();
	});

//検索上位 + オススメキーワード
	////検索上位
	$(".search-key > ul li a").click(function(e){
		//gp("searchWord", "", "");
		gp("searchWord", $(this).text(), "");e.stopImmediatePropagation();
	});

//右サイド ランキング
	//1-10
	$(".rank-back li a").click(function(e){
		gp("sideRank", $(this).closest("li").attr("class"), "");e.stopImmediatePropagation();
	});
	//11-
	$(".rank-back div a").click(function(e){
		gp("sideRank", "more", "");e.stopImmediatePropagation();
	});

//4head
	////人気連載
	$("#top-reco-top .top-reco-l .top-reco-arrow a, .ent-reco:nth-child(1) .top-reco-arrow a").click(function(e){
		gp("headRensai", "arrow", "");e.stopImmediatePropagation();
	});
	$("#top-reco-top .top-reco-l h2.top-reco-catch a, .ent-reco:nth-child(1) h2.top-reco-catch a").click(function(e){
		gp("headRensai", "title", "");e.stopImmediatePropagation();
	});
	$("#top-reco-top .top-reco-l div.top-reco-photo a, .ent-reco:nth-child(1) div.top-reco-photo a").click(function(e){
		gp("headRensai", "photo", "");e.stopImmediatePropagation();
	});
	$("#top-reco-top .top-reco-l div.top-reco-more a, .ent-reco:nth-child(1) div.top-reco-more a").click(function(e){
		gp("headRensai", "more", "");e.stopImmediatePropagation();
	});
	////おすすめ情報
	$("#top-reco-top .top-reco-r .top-reco-arrow a, .ent-reco:nth-child(2) .top-reco-arrow a").click(function(e){
		gp("headOsusume", "arrow", "");e.stopImmediatePropagation();
	});
	$("#top-reco-top .top-reco-r h2.top-reco-catch a, .ent-reco:nth-child(2) h2.top-reco-catch a").click(function(e){
		gp("headOsusume", "title", "");e.stopImmediatePropagation();
	});
	$("#top-reco-top .top-reco-r div.top-reco-photo a, .ent-reco:nth-child(2) div.top-reco-photo a").click(function(e){
		gp("headOsusume", "photo", "");e.stopImmediatePropagation();
	});
	$("#top-reco-top .top-reco-r div.top-reco-more a, .ent-reco:nth-child(2) div.top-reco-more a").click(function(e){
		gp("headOsusume", "more", "");e.stopImmediatePropagation();
	});
	////イチオシ企画
	$("#top-reco-bot .top-reco-l .top-reco-arrow a, .ent-reco:nth-child(3) .top-reco-arrow a").click(function(e){
		gp("headIchioshi", "arrow", "");e.stopImmediatePropagation();
	});
	$("#top-reco-bot .top-reco-l h2.top-reco-catch a, .ent-reco:nth-child(3) h2.top-reco-catch a").click(function(e){
		gp("headIchioshi", "title", "");e.stopImmediatePropagation();
	});
	$("#top-reco-bot .top-reco-l div.top-reco-photo a, .ent-reco:nth-child(3) div.top-reco-photo a").click(function(e){
		gp("headIchioshi", "photo", "");e.stopImmediatePropagation();
	});
	$("#top-reco-bot .top-reco-l div.top-reco-more a, .ent-reco:nth-child(3) div.top-reco-more a").click(function(e){
		gp("headIchioshi", "more", "");e.stopImmediatePropagation();
	});
	////インフォメーション
	$("#top-reco-bot .top-reco-r .top-reco-arrow a .ent-reco-end .top-reco-arrow a").click(function(e){
		gp("headInfo", "arrow", "");e.stopImmediatePropagation();
	});
	$("#top-reco-bot .top-reco-r h2.top-reco-catch a, .ent-reco-end h2.top-reco-catch a").click(function(e){
		gp("headInfo", "title", "");e.stopImmediatePropagation();
	});
	$("#top-reco-bot .top-reco-r div.top-reco-photo a, .ent-reco-end div.top-reco-more a").click(function(e){
		gp("headInfo", "photo", "");e.stopImmediatePropagation();
	});
	$("#top-reco-bot .top-reco-r div.top-reco-more a, .ent-reco-end div.top-reco-more a").click(function(e){
		gp("headInfo", "more", "");e.stopImmediatePropagation();
	});

//グラビア
	////画像
	$(".rmodule-gravure a").click(function(e){
		gp("sideGravure", "photo", "");e.stopImmediatePropagation();
	});
	////readMore
	$(".rm-arrow a[href*='gravure']").click(function(e){
		gp("sideGravure", "more", "");e.stopImmediatePropagation();
	});

//cyzo talk
	////readMore
	$(".rmodule-title2 .rm-arrow a").click(function(e){
		if ($(this).parents("div.rmodule-titlein").find("div.rm-text img").attr("alt") == "CYZOトーク") {
			gp("sideTalk", "more", "");e.stopImmediatePropagation();
		}
	});
	////photo
	$(".rmodule div a img").click(function(e){
		if ($(this).parents("div.rmodule").find("div.rm-text img").attr("alt") == "CYZOトーク") {
			gp("sideTalk", "photo", "");e.stopImmediatePropagation();
		}
	});

//app
	$(".rmodule div a img").click(function(e){
		if ($(this).attr("src").match(/.*iphone.*/)) {
			gp("sideApp", "iPhone", "");e.stopImmediatePropagation();
		}
		else if ($(this).attr("src").match(/.*android.*/)) {
			gp("sideApp", "Android", "");e.stopImmediatePropagation();
		}
	});

//sideTab
	////fb
	$("#floatMenu #side-facebook a").click(function(e){
		gp("sideTab", "facebook", "");e.stopImmediatePropagation();
	});
	////tw
	$("#floatMenu #side-twitter a").click(function(e){
		gp("sideTab", "twitter", "");e.stopImmediatePropagation();
	});

//archive
	$("h3.entry-title a").click(function(e){
		gp("articleList", "article", "title");e.stopImmediatePropagation();
	});
	$("div.entry-more a").click(function(e){
		gp("articleList", "article", "more");e.stopImmediatePropagation();
	});
	$("div.asset-photo a").click(function(e){
		gp("articleList", "article", "photo");e.stopImmediatePropagation();
	});
	$("div.entry-topbt a").click(function(e){
		gp("articleList", "article", "gotop");e.stopImmediatePropagation();
	});
	

//個別記事
	////関連記事+○○最新記事+最新記事
	$(".relation-entry a").click(function(e){
		var txt = $(this).parents("div.relation-entry").find("div.relation-title").text();
		if (txt=="[ 関連記事 ]") {
			gp("relation", "", "");e.stopImmediatePropagation();
		}
		else if (txt=="[ 最新記事 ]") {
			gp("newArticle", "", "");e.stopImmediatePropagation();
		}
		else if (txt.match(/.*最新記事/g)) {
			gp("catArticle", "", "");e.stopImmediatePropagation();
		}
	});
	$(".relation-entry_newzia a").click(function(e){
		gp("relation", "", "");e.stopImmediatePropagation();
	});
	////関連リンク
	$(".relation-site-list a").click(function(e){
		gp("outRelation", "", "");e.stopImmediatePropagation();
	});
	////カテゴリ +タグ
	$(".entry-d-key a").click(function(e){
		var txt = $(this).siblings("span").text();
		if (txt == "[ カテゴリ ]") {
			gp("catLink", "", "");e.stopImmediatePropagation();
		}
		else if (txt == "[ 関連タグ ]") {
			gp("tagLink", "", "");e.stopImmediatePropagation();
		}
	});
	////オススメ記事
	$("#reco-entry a").click(function(e){
		gp("osusumeArticle", "", "");e.stopImmediatePropagation();
	});
	////次の記事+前の記事
	$(".pagelinkBox a").click(function(e){
		if ($(this).parent("li").text().match(/前の記事/i)){
			gp("nexArticle", "", "");e.stopImmediatePropagation();
		}
		else if ($(this).parent("li").text().match(/次の記事/i)){
			gp("preArticle", "", "");e.stopImmediatePropagation();
		}
	});

//rank1-20
	if (saizoUrl.match(/ranking20.html/)) {
		$(".rank-list a").click(function(e){
			gp("mainRank", "rank"+($("div.rank-list").index($(this).parents("div.rank-list"))+1), "");e.stopImmediatePropagation();
		});
	}

//gotop
	$("a[href='#top']").click(function(e){
		gp("goPageTop", "", "");e.stopImmediatePropagation();
	});
//広告
	$("#ad_rB a").live("click",function(e){
		gp("adBnrRecB", "", "");e.stopImmediatePropagation();
	});
	$("#ad_rC a").live("click",function(e){
		gp("adBnrRecC", "", "");e.stopImmediatePropagation();
	});
	$("#ad_rD a").live("click",function(e){
		gp("adBnrRecD", "", "");e.stopImmediatePropagation();
	});
	$("#ad_rE a").live("click",function(e){
		gp("adBnrRecE", "", "");e.stopImmediatePropagation();
	});
	$(".rmodule-key a").live("click",function(e){
		hoge = $(this).parents(".rmodule").find(".rmodule-title img").attr("alt");
		if (hoge=="注目のキーワード"){
			gp("adHsSideChumoku", "", "");e.stopImmediatePropagation();
		}
		else if (hoge=="オススメ情報"){
			gp("adHsSideOsusume", "", "");e.stopImmediatePropagation();
		}
		else if (hoge=="トピックス"){
			gp("adHsSideTopics", "", "");e.stopImmediatePropagation();
		}
	});
	$(".amazon-box a").live("click",function(e){
		gp("adAmazon", "", "");e.stopImmediatePropagation();
	});
	$(".amazon-box a").live("click",function(e){
		gp("adAmazon", "", "");e.stopImmediatePropagation();
	});
	$(".entpr-key-in2 a").live("click",function(e){
		gp("adHsKijiShita1", "", "");e.stopImmediatePropagation();
	});
	$(".entpr-key-in a").live("click",function(e){
		gp("adHsKijiShita2", "", "");e.stopImmediatePropagation();
	});
	$(".search-key div a").live("click",function(e){
		gp("adHsHeadKeyword", $(this).text(), "");e.stopImmediatePropagation();
	});
	
	

	//ウェルカム
	// FB.Event.subscribe('edge.create', function(targetUrl) {
		// console.log(targetUrl);
		// //_gaq.push(['_trackEvent', 'facebook', 'like', targetUrl]);
	// });
	// // unlike
	// FB.Event.subscribe('edge.remove', function(targetUrl) {
		// //_gaq.push(['_trackEvent', 'facebook', 'unlike', targetUrl]);
	// });
// 
	// function extractParamFromUri(uri, paramName) {
		// if (!uri) { return; }
		// var uri = uri.split('#')[0];  // Remove anchor.
		// var parts = uri.split('?');  // Check for query params.
		// if (parts.length == 1) { return; }
		// var query = decodeURI(parts[1]);
// 		
		// // Find url param.
		// paramName += '=';
		// var params = query.split('&');
		// for (var i = 0, param; param = params[i]; ++i) {
			// if (param.indexOf(paramName) === 0) { return unescape(param.split('=')[1]); }
		// }
	// }
	// twttr.events.bind('tweet', function(event) {
		// if (event) {
			// var targetUrl;
			// console.log(event);
			// if (event.target && event.target.nodeName == 'IFRAME') { targetUrl = extractParamFromUri(event.target.src, 'url'); }
			// //_gaq.push(['_trackEvent', 'twitter', 'tweet', targetUrl]);
		// }
	// });
});