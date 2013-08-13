if (typeof adingoDA0110600012 == 'undefined') {
    var adingoDA0110600012 = null;
}
var hybridPlus0110600012 = {
    keywordSets : [{"word":"\u8584\u6bdb\u30fb\u629c\u3051\u6bdb","ref":"88"},{"word":"\u30a6\u30a8\u30b9\u30c8 \u304f\u3073\u308c","ref":"108"},{"word":"\u8db3\u306e\u81ed\u3044","ref":"109"},{"word":"\u7cbe\u529b\u5897\u5f37","ref":"80"},{"word":"\u30cb\u30ad\u30d3\u8de1","ref":"110"},{"word":"\u304a\u308a\u3082\u306e \u81ed\u3044","ref":"114"},{"word":"\u982d\u76ae \u81ed\u3044","ref":"97"},{"word":"\u6b6f\u69fd\u81bf\u6f0f","ref":"101"},{"word":"100\u5186PC","ref":"79"},{"word":"\u53e3\u81ed","ref":"94"},{"word":"\u4f4e\u8eab\u9577 \u6cbb\u7642","ref":"102"},{"word":"\u5f7c\u5973\u306e\u4f5c\u308a\u65b9","ref":"163"},{"word":"\u30d1\u30a4\u30d7\u30ab\u30c3\u30c8","ref":"139"},{"word":"V\u30e9\u30a4\u30f3 \u51e6\u7406","ref":"84"},{"word":"\u4e0b\u534a\u8eab\u592a\u308a","ref":"93"},{"word":"ED","ref":"58"},{"word":"\u72ec\u8eab\u5973\u6027","ref":"83"},{"word":"\u7570\u696d\u7a2e\u4ea4\u6d41\u4f1a","ref":"81"},{"word":"\u4e80\u982d\u5f37\u5316","ref":"115"},{"word":"\u6c38\u4e45\u8131\u6bdb","ref":"54"}],
    target : true,
    url : "http://search.cyzo.com/sponsor/?Keywords=",
    apikey : "0110600012",
    
    run : function()
    {
        hybridPlus0110600012.writeKeywords();
    },

    writeKeywords : function(){
        var divCount = 0;
        if (document.getElementById("adingo_keywords_" + this.apikey) != null) {
            divCount++;
            while (document.getElementById("adingo_keywords_" + this.apikey + "_" + (divCount)) != null) {
                divCount++;
            }
        }
        var idPrefix = divCount == 0 ? "" : "_" + divCount;
        document.write("<div id=\"adingo_keywords_" + this.apikey + idPrefix + "\" class=\"adingo_keywords\"></div>");

        var div = document.getElementById("adingo_keywords_" + this.apikey + idPrefix);

        var ul = document.createElement("ul");
        for (var i = 0; i < hybridPlus0110600012.keywordSets.length; i++) {
            var li  = document.createElement("li");
            var a   = document.createElement("a");
            a.setAttribute("href", hybridPlus0110600012.url + encodeURIComponent(unescape(hybridPlus0110600012.keywordSets[i]['word'])) + '&ref=' + hybridPlus0110600012.keywordSets[i]['ref'] + "&e=ut");
            a.setAttribute("rel", "nofollow");
            a.onclick = function() {
                if (adingoDA0110600012!= null && typeof adingoPageTracker != 'undefined') {
                    adingoDA0110600012.adingoClickTracker(this);
                    return false;
                }
            }
            if (hybridPlus0110600012.target) a.setAttribute("target", "_blank");
            a.innerHTML = unescape(hybridPlus0110600012.keywordSets[i]['word']);
            li.appendChild(a);
            ul.appendChild(li);
        }
        div.appendChild(ul);
    },

    addDAScript : function() {
        var script = document.createElement("script");
        script.setAttribute("src", "http://analytics.adingo.jp/pda.php");
        script.setAttribute("type", "text/javascript");
        document.getElementsByTagName("head")[0].appendChild(script); 
    },

    existDAScript : function() {
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].getAttribute('src') == "http://analytics.adingo.jp/pda.php") return true;
        }
        return false;
    },

    initDA : function(count) {
        if (hybridPlus0110600012.existDAScript() && typeof adingoPageTracker != 'undefined') {
            adingoDA0110600012 = new adingoPageTracker("PDA-1106-0008-0110600012", "UTF-8", "00001");
        } else if(count < 10) {
            setTimeout("hybridPlus0110600012.initDA(" + (count + 1) + ")", 100);
        }
    }
}
hybridPlus0110600012.run();
