if (typeof adingoDA0110600008 == 'undefined') {
    var adingoDA0110600008 = null;
}
var hybridPlus0110600008 = {
    keywordSets : [{"word":"\u30e0\u30c0\u6bdb\u51e6\u7406","ref":"118"},{"word":"\u7af6\u99ac","ref":"119"},{"word":"\u591a\u6c57\u75c7","ref":"51"},{"word":"\u30b3\u30f3\u30c9\u30fc\u30e0","ref":"122"},{"word":"\u30d1\u30c1\u30b9\u30ed","ref":"3"}],
    target : true,
    url : "http://search.cyzo.com/sponsor/?Keywords=",
    apikey : "0110600008",
    
    run : function()
    {
        hybridPlus0110600008.writeKeywords();
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
        for (var i = 0; i < hybridPlus0110600008.keywordSets.length; i++) {
            var li  = document.createElement("li");
            var a   = document.createElement("a");
            a.setAttribute("href", hybridPlus0110600008.url + encodeURIComponent(unescape(hybridPlus0110600008.keywordSets[i]['word'])) + '&ref=' + hybridPlus0110600008.keywordSets[i]['ref'] + "&e=ut");
            a.setAttribute("rel", "nofollow");
            a.onclick = function() {
                if (adingoDA0110600008!= null && typeof adingoPageTracker != 'undefined') {
                    adingoDA0110600008.adingoClickTracker(this);
                    return false;
                }
            }
            if (hybridPlus0110600008.target) a.setAttribute("target", "_blank");
            a.innerHTML = unescape(hybridPlus0110600008.keywordSets[i]['word']);
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
        if (hybridPlus0110600008.existDAScript() && typeof adingoPageTracker != 'undefined') {
            adingoDA0110600008 = new adingoPageTracker("PDA-1106-0008-0110600008", "UTF-8", "00001");
        } else if(count < 10) {
            setTimeout("hybridPlus0110600008.initDA(" + (count + 1) + ")", 100);
        }
    }
}
hybridPlus0110600008.run();
