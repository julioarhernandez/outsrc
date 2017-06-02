loadLanguages('en');
$("#language_toggle_country").change(function() { loadLanguages() });

function loadLanguages(se) {
    if ($("#language_toggle_country option").length) {
        var e = $("#language_toggle_country option:selected").attr("data-languages");
        var g = e.split(":");
        $("#language_toggle_site_editions").empty();
        var t = g[0].split("|");
        var a = g[1].split("|");
        for (var o = 0; o < t.length; o++) {
            var n = se == t[o] ? "selected='selected'" : "";
            $("#language_toggle_site_editions").append($("<option " + n + "></option>").attr("value", t[o]).text(a[o])) } } }
$(document).mouseup(function(e) {
    var g = $("#language_toggle");
    var t = $("#language_toggle_link");
    if (!g.is(e.target) && g.has(e.target).length === 0 && !t.is(e.target)) { $("#language_toggle").removeClass("show") } else if (t.is(e.target)) { $("#language_toggle").toggleClass("show") } });
$("#language_toggle_link").on("keyup", function(e) {
    if (e.type != "click" && e.keyCode != 13) {
        return }
    $("#language_toggle").toggleClass("show") });
(function() { $("button.proceed").on("focusout", function() { $("#language_toggle").removeClass("show") }) })();
