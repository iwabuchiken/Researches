if (typeof adingoDA0110600013 == 'undefined') {
    var adingoDA0110600013 = null;
}
var hybridPlus0110600013 = {
    keywordSets : [{"word":"\u793e\u4f1a\u4eba\u30b5\u30fc\u30af\u30eb","ref":"177"},{"word":"\u767d\u9aea\u67d3\u3081","ref":"181"},{"word":"\u30cf\u30a4\u30d6\u30ea\u30c3\u30c9\u30ab\u30fc","ref":"180"},{"word":"\u4e80\u982d\u5f37\u5316","ref":"42"},{"word":"\u30ab\u30c3\u30d7\u30ea\u30f3\u30b0\u30d1\u30fc\u30c6\u30a3","ref":"183"}],
    target : true,
    url : "http://search.cyzo.com/sponsor/?Keywords=",
    apikey : "0110600013",
    
    run : function()
    {
        hybridPlus0110600013.writeKeywords();
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
        for (var i = 0; i < hybridPlus0110600013.keywordSets.length; i++) {
            var li  = document.createElement("li");
            var a   = document.createElement("a");
            a.setAttribute("href", hybridPlus0110600013.url + encodeURIComponent(unescape(hybridPlus0110600013.keywordSets[i]['word'])) + '&ref=' + hybridPlus0110600013.keywordSets[i]['ref'] + "&e=ut");
            a.setAttribute("rel", "nofollow");
            a.onclick = function() {
                if (adingoDA0110600013!= null && typeof adingoPageTracker != 'undefined') {
                    adingoDA0110600013.adingoClickTracker(this);
                    return false;
                }
            }
            if (hybridPlus0110600013.target) a.setAttribute("target", "_blank");
            a.innerHTML = unescape(hybridPlus0110600013.keywordSets[i]['word']);
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
        if (hybridPlus0110600013.existDAScript() && typeof adingoPageTracker != 'undefined') {
            adingoDA0110600013 = new adingoPageTracker("PDA-1106-0008-0110600013", "UTF-8", "00001");
        } else if(count < 10) {
            setTimeout("hybridPlus0110600013.initDA(" + (count + 1) + ")", 100);
        }
    }
}
hybridPlus0110600013.run();
