//
// Logly image javascript lib
// Copyright 2010 Logly co.
//
// Usage:   セレクタsl は要素名+クラス名（要素名だけでも良い）。
//          適用したいセレクタよりも下部で本メソッドをコールすること。
//          :style => "display:none"をimgタグに付けるとなおよい。
function loadedImageAutoResize(wd, he, sl) {
    $(sl).each(function() {
        $(this).hide();
    });
    $(sl).each(function() {
        $(this).load(function() {
            _resizeImage(wd, he, $(this));
            _fadeInImage($(this));
        })
    });
    jQuery.event.add(window, "load", function(){
        $(sl).each(function() {
            _resizeImage(wd, he, $(this));
            _fadeInImage($(this));
        })
    });
}
function _resizeImage(wd, he, elem) {
    if (elem.width() != 0 && elem.height() != 0) {
        if (elem.width() > elem.height()) {
            elem.width(wd);
        } else if (elem.width() < elem.height()) {
            elem.height(he);
        } else if (elem.width() == elem.height()) {
            if (wd > he) {
                elem.width(wd);
            } else {
                elem.height(he);
            }
        }
    }
}
function _fadeInImage(elem) {
    if (elem.width() != 0 && elem.height() != 0) {
        elem.fadeIn("slow");
    }
}
