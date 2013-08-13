if (typeof adingoDA0110600010 == 'undefined') {
    var adingoDA0110600010 = null;
}
var hybridPlus0110600010 = {
    keywordSets : [{"word":"\u51fa\u4f1a\u3044","ref":"125"},{"word":"\u30d1\u30cb\u30c3\u30af\u969c\u5bb3","ref":"16"},{"word":"\u5916\u8eca \u30ec\u30f3\u30bf\u30ab\u30fc","ref":"43"},{"word":"\u81a3\u7e2e\u5c0f","ref":"36"},{"word":"\u7cbe\u529b\u5897\u5f37","ref":"193"},{"word":"\u4e0d\u598a\u6cbb\u7642","ref":"124"},{"word":"\u4e80\u982d\u5897\u5927","ref":"2"},{"word":"\u30e9\u30d6\u30b3\u30b9\u30e1 \u901a\u8ca9","ref":"21"},{"word":"\u76d7\u8074\u8abf\u67fb","ref":"28"},{"word":"\u3044\u3073\u304d \u6cbb\u7642","ref":"35"},{"word":"\u30de\u30ab","ref":"140"},{"word":"\u66f4\u5e74\u671f\u969c\u5bb3","ref":"147"},{"word":"\u30ab\u30c3\u30d7\u30eb\u30db\u30c6\u30eb","ref":"13"},{"word":"\u5728\u5b85\u30ef\u30fc\u30af","ref":"158"},{"word":"\u30d1\u30a4\u30d7\u30ab\u30c3\u30c8","ref":"96"},{"word":"\u6e29\u6cc9\u65c5\u884c","ref":"10"},{"word":"\u30e1\u30f3\u30ba\u30a8\u30b9\u30c6","ref":"1"},{"word":"\u30a4\u30f3\u30d7\u30e9\u30f3\u30c8","ref":"22"},{"word":"\u30e9\u30d6\u30b0\u30c3\u30ba","ref":"160"},{"word":"\u30ef\u30ad \u81ed\u3044","ref":"30"}],
    target : true,
    url : "http://search.cyzo.com/sponsor/?Keywords=",
    apikey : "0110600010",
    
    run : function()
    {
        hybridPlus0110600010.writeKeywords();
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
        for (var i = 0; i < hybridPlus0110600010.keywordSets.length; i++) {
            var li  = document.createElement("li");
            var a   = document.createElement("a");
            a.setAttribute("href", hybridPlus0110600010.url + encodeURIComponent(unescape(hybridPlus0110600010.keywordSets[i]['word'])) + '&ref=' + hybridPlus0110600010.keywordSets[i]['ref'] + "&e=ut");
            a.setAttribute("rel", "nofollow");
            a.onclick = function() {
                if (adingoDA0110600010!= null && typeof adingoPageTracker != 'undefined') {
                    adingoDA0110600010.adingoClickTracker(this);
                    return false;
                }
            }
            if (hybridPlus0110600010.target) a.setAttribute("target", "_blank");
            a.innerHTML = unescape(hybridPlus0110600010.keywordSets[i]['word']);
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
        if (hybridPlus0110600010.existDAScript() && typeof adingoPageTracker != 'undefined') {
            adingoDA0110600010 = new adingoPageTracker("PDA-1106-0008-0110600010", "UTF-8", "00001");
        } else if(count < 10) {
            setTimeout("hybridPlus0110600010.initDA(" + (count + 1) + ")", 100);
        }
    }
}
hybridPlus0110600010.run();
