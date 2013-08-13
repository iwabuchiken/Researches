if (typeof adingoDA0110600007 == 'undefined') {
    var adingoDA0110600007 = null;
}
var hybridPlus0110600007 = {
    keywordSets : [{"word":"\u4eba\u63a2\u3057","ref":"23"},{"word":"\u6d6e\u6c17\u8abf\u67fb","ref":"137"},{"word":"\u907f\u598a","ref":"155"},{"word":"\u5305\u830e\u624b\u8853","ref":"8"},{"word":"\u304a\u898b\u5408\u3044\u30d1\u30fc\u30c6\u30a3\u30fc","ref":"24"}],
    target : true,
    url : "http://search.cyzo.com/sponsor/?Keywords=",
    apikey : "0110600007",
    
    run : function()
    {
        hybridPlus0110600007.writeKeywords();
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
        for (var i = 0; i < hybridPlus0110600007.keywordSets.length; i++) {
            var li  = document.createElement("li");
            var a   = document.createElement("a");
            a.setAttribute("href", hybridPlus0110600007.url + encodeURIComponent(unescape(hybridPlus0110600007.keywordSets[i]['word'])) + '&ref=' + hybridPlus0110600007.keywordSets[i]['ref'] + "&e=ut");
            a.setAttribute("rel", "nofollow");
            a.onclick = function() {
                if (adingoDA0110600007!= null && typeof adingoPageTracker != 'undefined') {
                    adingoDA0110600007.adingoClickTracker(this);
                    return false;
                }
            }
            if (hybridPlus0110600007.target) a.setAttribute("target", "_blank");
            a.innerHTML = unescape(hybridPlus0110600007.keywordSets[i]['word']);
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
        if (hybridPlus0110600007.existDAScript() && typeof adingoPageTracker != 'undefined') {
            adingoDA0110600007 = new adingoPageTracker("PDA-1106-0008-0110600007", "UTF-8", "00001");
        } else if(count < 10) {
            setTimeout("hybridPlus0110600007.initDA(" + (count + 1) + ")", 100);
        }
    }
}
hybridPlus0110600007.run();
