if (typeof adingoDA0110600015 == 'undefined') {
    var adingoDA0110600015 = null;
}
var hybridPlus0110600015 = {
    keywordSets : [{"word":"\u30e9\u30d6\u30b0\u30c3\u30ba","ref":"174"},{"word":"\u4eee\u9762 \u5408\u30b3\u30f3","ref":"172"},{"word":"SNS \u5a5a\u6d3b","ref":"170"},{"word":"\u7537\u6027 \u66f4\u5e74\u671f","ref":"161"},{"word":"\u4e2d\u9ad8\u5e74 \u5a5a\u6d3b","ref":"166"}],
    target : true,
    url : "http://search.cyzo.com/sponsor/?Keywords=",
    apikey : "0110600015",
    
    run : function()
    {
        hybridPlus0110600015.writeKeywords();
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
        for (var i = 0; i < hybridPlus0110600015.keywordSets.length; i++) {
            var li  = document.createElement("li");
            var a   = document.createElement("a");
            a.setAttribute("href", hybridPlus0110600015.url + encodeURIComponent(unescape(hybridPlus0110600015.keywordSets[i]['word'])) + '&ref=' + hybridPlus0110600015.keywordSets[i]['ref'] + "&e=ut");
            a.setAttribute("rel", "nofollow");
            a.onclick = function() {
                if (adingoDA0110600015!= null && typeof adingoPageTracker != 'undefined') {
                    adingoDA0110600015.adingoClickTracker(this);
                    return false;
                }
            }
            if (hybridPlus0110600015.target) a.setAttribute("target", "_blank");
            a.innerHTML = unescape(hybridPlus0110600015.keywordSets[i]['word']);
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
        if (hybridPlus0110600015.existDAScript() && typeof adingoPageTracker != 'undefined') {
            adingoDA0110600015 = new adingoPageTracker("PDA-1106-0008-0110600015", "UTF-8", "00001");
        } else if(count < 10) {
            setTimeout("hybridPlus0110600015.initDA(" + (count + 1) + ")", 100);
        }
    }
}
hybridPlus0110600015.run();
