if (typeof adingoDA0110600009 == 'undefined') {
    var adingoDA0110600009 = null;
}
var hybridPlus0110600009 = {
    keywordSets : [{"word":"\u52dd\u8ca0\u4e0b\u7740","ref":"17"},{"word":"\u719f\u5e74\u96e2\u5a5a","ref":"91"},{"word":"\u7c21\u5358\u30c0\u30a4\u30a8\u30c3\u30c8","ref":"72"},{"word":"\u30e2\u30c6\u9999\u6c34","ref":"27"},{"word":"\u30b3\u30f3\u30c9\u30fc\u30e0","ref":"131"}],
    target : true,
    url : "http://search.cyzo.com/sponsor/?Keywords=",
    apikey : "0110600009",
    
    run : function()
    {
        hybridPlus0110600009.writeKeywords();
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
        for (var i = 0; i < hybridPlus0110600009.keywordSets.length; i++) {
            var li  = document.createElement("li");
            var a   = document.createElement("a");
            a.setAttribute("href", hybridPlus0110600009.url + encodeURIComponent(unescape(hybridPlus0110600009.keywordSets[i]['word'])) + '&ref=' + hybridPlus0110600009.keywordSets[i]['ref'] + "&e=ut");
            a.setAttribute("rel", "nofollow");
            a.onclick = function() {
                if (adingoDA0110600009!= null && typeof adingoPageTracker != 'undefined') {
                    adingoDA0110600009.adingoClickTracker(this);
                    return false;
                }
            }
            if (hybridPlus0110600009.target) a.setAttribute("target", "_blank");
            a.innerHTML = unescape(hybridPlus0110600009.keywordSets[i]['word']);
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
        if (hybridPlus0110600009.existDAScript() && typeof adingoPageTracker != 'undefined') {
            adingoDA0110600009 = new adingoPageTracker("PDA-1106-0008-0110600009", "UTF-8", "00001");
        } else if(count < 10) {
            setTimeout("hybridPlus0110600009.initDA(" + (count + 1) + ")", 100);
        }
    }
}
hybridPlus0110600009.run();
