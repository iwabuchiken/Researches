if (typeof adingoDA0110600011 == 'undefined') {
    var adingoDA0110600011 = null;
}
var hybridPlus0110600011 = {
    keywordSets : [{"word":"\u66f4\u5e74\u671f\u969c\u5bb3","ref":"171"},{"word":"\u6b6f\u5468\u75c5","ref":"64"},{"word":"40\u4ee3 \u72ec\u8eab","ref":"74"},{"word":"\u4e2d\u9ad8\u5e74\u5a5a\u6d3b","ref":"178"},{"word":"\u52a0\u9f62\u81ed","ref":"63"},{"word":"\u30ab\u30c3\u30d7\u30eb\u30db\u30c6\u30eb","ref":"126"},{"word":"\u304a\u898b\u5408\u3044\u30d1\u30fc\u30c6\u30a3","ref":"154"},{"word":"\u982d\u76ae\u306e\u81ed\u3044","ref":"62"},{"word":"\u6b6f\u306e\u9ec4\u3070\u307f","ref":"142"},{"word":"\u7cbe\u529b\u30c9\u30ea\u30f3\u30af","ref":"146"},{"word":"\u80cc\u4e2d\u306b\u304d\u3073","ref":"86"},{"word":"\u8584\u6bdb\u30fb\u629c\u3051\u6bdb","ref":"20"},{"word":"\u30db\u30af\u30ed \u9664\u53bb","ref":"5"},{"word":"\u59bb \u6d6e\u6c17","ref":"169"},{"word":"\u8001\u773c","ref":"157"},{"word":"\u767d\u9aea\u67d3\u3081","ref":"138"},{"word":"\u304b\u3064\u3089","ref":"196"},{"word":"\u9ad8\u8840\u5727","ref":"55"},{"word":"\u3046\u3064","ref":"41"},{"word":"\u5927\u4eba\u30cb\u30ad\u30d3","ref":"197"}],
    target : false,
    url : "http://search.cyzo.com/sponsor/?Keywords=",
    apikey : "0110600011",
    
    run : function()
    {
        hybridPlus0110600011.writeKeywords();
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
        for (var i = 0; i < hybridPlus0110600011.keywordSets.length; i++) {
            var li  = document.createElement("li");
            var a   = document.createElement("a");
            a.setAttribute("href", hybridPlus0110600011.url + encodeURIComponent(unescape(hybridPlus0110600011.keywordSets[i]['word'])) + '&ref=' + hybridPlus0110600011.keywordSets[i]['ref'] + "&e=ut");
            a.setAttribute("rel", "nofollow");
            a.onclick = function() {
                if (adingoDA0110600011!= null && typeof adingoPageTracker != 'undefined') {
                    adingoDA0110600011.adingoClickTracker(this);
                    return false;
                }
            }
            if (hybridPlus0110600011.target) a.setAttribute("target", "_blank");
            a.innerHTML = unescape(hybridPlus0110600011.keywordSets[i]['word']);
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
        if (hybridPlus0110600011.existDAScript() && typeof adingoPageTracker != 'undefined') {
            adingoDA0110600011 = new adingoPageTracker("PDA-1106-0008-0110600011", "UTF-8", "00001");
        } else if(count < 10) {
            setTimeout("hybridPlus0110600011.initDA(" + (count + 1) + ")", 100);
        }
    }
}
hybridPlus0110600011.run();
