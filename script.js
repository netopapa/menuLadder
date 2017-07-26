$(document).ready(function() {

    //animação do menu para mobile
    var btn = $("#menu");
    btn.click(function() {
        if (!btn.hasClass("change")) {
            var item01 = $("ul#lista >:nth-child(2)");
            var item02 = $("ul#lista >:nth-child(3)");
            var item03 = $("ul#lista >:nth-child(4)");
            var item04 = $("ul#lista >:nth-child(5)");
            var item05 = $("ul#lista >:nth-child(6)");

            var sai01 = function() {
                item01.removeClass("saida01").removeClass("entrada").addClass("saida");
            }
            var sai02 = function() {
                item02.removeClass("saida02").removeClass("entrada").addClass("saida");
            }
            var sai03 = function() {
                item03.removeClass("saida03").removeClass("entrada").addClass("saida");
            }
            var sai04 = function() {
                item04.removeClass("saida04").removeClass("entrada").addClass("saida");
            }
            var sai05 = function() {
                item05.removeClass("saida05").removeClass("entrada").addClass("saida");
            }

            item01.addClass("saida01");
            setTimeout(sai01, 800);
            item02.addClass("saida02");
            setTimeout(sai02, 800);
            item03.addClass("saida03");
            setTimeout(sai03, 800);
            item04.addClass("saida04");
            setTimeout(sai04, 800);
            item05.addClass("saida05");
            setTimeout(sai05, 800);
        } else {

            var item01 = $("ul#lista >:nth-child(2)");
            var item02 = $("ul#lista >:nth-child(3)");
            var item03 = $("ul#lista >:nth-child(4)");
            var item04 = $("ul#lista >:nth-child(5)");
            var item05 = $("ul#lista >:nth-child(6)");

            var fica01 = function() {
                item01.removeClass("entrada01").removeClass("saida").addClass("entrada");
            }
            var fica02 = function() {
                item02.removeClass("entrada02").removeClass("saida").addClass("entrada");
            }
            var fica03 = function() {
                item03.removeClass("entrada03").removeClass("saida").addClass("entrada");
            }
            var fica04 = function() {
                item04.removeClass("entrada04").removeClass("saida").addClass("entrada");
            }
            var fica05 = function() {
                item05.removeClass("entrada05").removeClass("saida").addClass("entrada");
            }

            item01.addClass("entrada01");
            setTimeout(fica01, 800);
            item02.addClass("entrada02");
            setTimeout(fica02, 800);
            item03.addClass("entrada03");
            setTimeout(fica03, 800);
            item04.addClass("entrada04");
            setTimeout(fica04, 800);
            item05.addClass("entrada05");
            setTimeout(fica05, 800);
        }
    });
});