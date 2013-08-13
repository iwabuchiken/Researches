if (typeof adingoDA0110600014 == 'undefined') {
    var adingoDA0110600014 = null;
}
var hybridPlus0110600014 = {
    keywordSets : [{"word":"\u30d1\u30a4\u30d7\u30ab\u30c3\u30c8","ref":"14"},{"word":"\u6b6f\u306e\u9ec4\u3070\u307f","ref":"190"},{"word":"\u75d4 \u624b\u8853","ref":"188"},{"word":"\u30ef\u30ad \u81ed\u3044","ref":"191"},{"word":"\u8131\u6bdb \u9670\u90e8","ref":"192"}],
    target : true,
    url : "http://search.cyzo.com/sponsor/?Keywords=",
    apikey : "0110600014",
    
    run : function()
    {
        hybridPlus0110600014.writeKeywords();
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
        for (var i = 0; i < hybridPlus0110600014.keywordSets.length; i++) {
            var li  = document.createElement("li");
            var a   = document.createElement("a");
            a.setAttribute("href", hybridPlus0110600014.url + encodeURIComponent(unescape(hybridPlus0110600014.keywordSets[i]['word'])) + '&ref=' + hybridPlus0110600014.keywordSets[i]['ref'] + "&e=ut");
            a.setAttribute("rel", "nofollow");
            a.onclick = function() {
                if (adingoDA0110600014!= null && typeof adingoPageTracker != 'undefined') {
                    adingoDA0110600014.adingoClickTracker(this);
                    return false;
                }
            }
            if (hybridPlus0110600014.target) a.setAttribute("target", "_blank");
            a.innerHTML = unescape(hybridPlus0110600014.keywordSets[i]['word']);
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
        if (hybridPlus0110600014.existDAScript() && typeof adingoPageTracker != 'undefined') {
            adingoDA0110600014 = new adingoPageTracker("PDA-1106-0008-0110600014", "UTF-8", "00001");
        } else if(count < 10) {
            setTimeout("hybridPlus0110600014.initDA(" + (count + 1) + ")", 100);
        }
    }
}
hybridPlus0110600014.run();
