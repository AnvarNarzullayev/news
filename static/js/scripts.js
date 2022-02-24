(function ($) {
    $(document).ready(function () {
        $(document).on("keydown", function (e) {
            if (e.target.value) {
                if ((e.metaKey || e.ctrlKey) && (String.fromCharCode(e.which).toLowerCase() === 'b')) {
                    $(e.target).val(convertToCyrill(e.target.value));
                }
                if ((e.metaKey || e.ctrlKey) && (String.fromCharCode(e.which).toLowerCase() === 'l')) {
                    $(e.target).val(convertToLatin(e.target.value));
                }
            }
        });

        $('.checkbo').checkBo();
        setFocusToSearch();
        setDeleteButton();
        //setTrashButton();

        $('.mobile-phone').formatter({
            'pattern': '+(998) {{99}} {{999}}-{{99}}-{{99}}',
            'persistent': true
        });

        $('.landline-phone').formatter({
            'pattern': '+(0) {{999}} {{999}}-{{99}}-{{99}}',
            'persistent': true
        });

        var $loading = $('#loader').hide();
        var $scrollTop = 0;
        $(document)
            .ajaxStart(function () {
                //$scrollTop = $(document).scrollTop()
                //$loading.show();
            })
            .ajaxStop(function () {
                $loading.hide();
                //$(window).scrollTop($scrollTop)
            })

    });
    $(document).on('ready pjax:success', function () {
        //setFocusToSearch();
        setDeleteButton();
        $('.selectable-row tr').on('click', function () {
            //$(this).find('.checkbox input:first-child').click();
        });

    });

})(jQuery);

function setDeleteButton() {
    $('.btn-delete').on('click', function () {
        if (confirm('Are you sure to delete?')) {
            if ($(this).attr('action').length > 0) {
                document.location.href = $(this).attr('action');
            } else {
                return true;
            }
        }
        return false;
    });
}

function setTrashButton() {
    $('.btn-trash').on('click', function () {
        if (confirm('Are you sure move to trash?')) {
            if ($(this).attr('action').length > 0) {
                document.location.href = $(this).attr('action');
            } else {
                return true;
            }
        }
        return false;
    });
}

function setFocusToSearch() {
    var input = $("input[name*='[search]'][type='text']");
    if (input == undefined) {
        input = $('#data-grid-filters input[type=\"text\"]:first');
    }
    if (input != undefined && input.length > 0) {
        input.focus().delay(1000).val(input.val());
        document.getElementById(input.attr('id')).setSelectionRange(100, 100);
    }
}

function convertToSlug(Text) {
    Text = cyrlat(Text.toLowerCase());
    return Text
        .replace(/[^\w _\-]+/g, '')
        .replace(/ +/g, '-');
}

function convertToCyrill(Text) {
    Text = latcyr(Text);
    return Text;
}

function latcyr(car) {
    car = car.replace(/Yu/g, "Ð®");
    car = car.replace(/yu/g, "ÑŽ");
    car = car.replace(/Ya/g, "Ð¯");
    car = car.replace(/ya/g, "Ñ");
    car = car.replace(/Ch/g, "Ð§");
    car = car.replace(/ch/g, "Ñ‡");
    car = car.replace(/Sh/g, "Ð¨");
    car = car.replace(/sh/g, "Ñˆ");
    car = car.replace(/Sh/g, "Ð©");
    car = car.replace(/sh/g, "Ñ‰");
    car = car.replace(/Yo/g, "Ð");
    car = car.replace(/yo/g, "Ñ‘");
    car = car.replace(/G`/g, "Ò’");
    car = car.replace(/g`/g, "Ò“");
    car = car.replace(/G'/g, "Ò’");
    car = car.replace(/g'/g, "Ò“");
    car = car.replace(/O`/g, "ÐŽ");
    car = car.replace(/o`/g, "Ñž");
    car = car.replace(/O'/g, "ÐŽ");
    car = car.replace(/o'/g, "Ñž");
    car = car.replace(/A/g, "Ð");
    car = car.replace(/a/g, "Ð°");
    car = car.replace(/B/g, "Ð‘");
    car = car.replace(/b/g, "Ð±");
    car = car.replace(/V/g, "Ð’");
    car = car.replace(/v/g, "Ð²");
    car = car.replace(/G/g, "Ð“");
    car = car.replace(/g/g, "Ð³");
    car = car.replace(/D/g, "Ð”");
    car = car.replace(/d/g, "Ð´");
    car = car.replace(/E/g, "Ð•");
    car = car.replace(/e/g, "Ðµ");
    car = car.replace(/J/g, "Ð–");
    car = car.replace(/j/g, "Ð¶");
    car = car.replace(/Z/g, "Ð—");
    car = car.replace(/z/g, "Ð·");
    car = car.replace(/I/g, "Ð˜");
    car = car.replace(/i/g, "Ð¸");
    car = car.replace(/Y/g, "Ð™");
    car = car.replace(/y/g, "Ð¹");
    car = car.replace(/K/g, "Ðš");
    car = car.replace(/k/g, "Ðº");
    car = car.replace(/L/g, "Ð›");
    car = car.replace(/l/g, "Ð»");
    car = car.replace(/M/g, "Ðœ");
    car = car.replace(/m/g, "Ð¼");
    car = car.replace(/N/g, "Ð");
    car = car.replace(/n/g, "Ð½");
    car = car.replace(/O/g, "Ðž");
    car = car.replace(/o/g, "Ð¾");
    car = car.replace(/P/g, "ÐŸ");
    car = car.replace(/p/g, "Ð¿");
    car = car.replace(/R/g, "Ð ");
    car = car.replace(/r/g, "Ñ€");
    car = car.replace(/S/g, "Ð¡");
    car = car.replace(/s/g, "Ñ");
    car = car.replace(/T/g, "Ð¢");
    car = car.replace(/t/g, "Ñ‚");
    car = car.replace(/U/g, "Ð£");
    car = car.replace(/u/g, "Ñƒ");
    car = car.replace(/F/g, "Ð¤");
    car = car.replace(/f/g, "Ñ„");
    car = car.replace(/X/g, "Ð¥");
    car = car.replace(/x/g, "Ñ…");
    car = car.replace(/C/g, "Ð¦");
    car = car.replace(/c/g, "Ñ†");
    car = car.replace(/E/g, "Ð­");
    car = car.replace(/e/g, "Ñ");
    car = car.replace(/H/g, "Ò²");
    car = car.replace(/h/g, "Ò³");
    car = car.replace(/Q/g, "Òš");
    car = car.replace(/q/g, "Ò›");

    return car;
}

function convertToLatin(Text) {
    Text = cyrlat(Text);
    return Text;
}

function cyrlat(car) {
    car = car.replace(/Ð®/g, "Yu");
    car = car.replace(/ÑŽ/g, "yu");
    car = car.replace(/ÑŽÐµ/g, "yuye");
    car = car.replace(/Ð¯/g, "Ya");
    car = car.replace(/Ñ/g, "ya");
    car = car.replace(/Ð§/g, "Ch");
    car = car.replace(/Ñ‡/g, "ch");
    car = car.replace(/Ð¨/g, "Sh");
    car = car.replace(/Ñˆ/g, "sh");
    car = car.replace(/Ð©/g, "Sh");
    car = car.replace(/Ñ‰/g, "sh");
    car = car.replace(/Ð/g, "Yo");
    car = car.replace(/Ñ‘Ðµ/g, "yoye");
    car = car.replace(/Ñ‘/g, "yo");
    car = car.replace(/Ò’/g, "G'");
    car = car.replace(/Ò“/g, "g'");
    car = car.replace(/ÐŽ/g, "O'");
    car = car.replace(/Ñž/g, "o'");
    car = car.replace(/Ð/g, "A");
    car = car.replace(/Ð°/g, "a");
    car = car.replace(/Ð°Ðµ/g, "aye");
    car = car.replace(/Ð‘/g, "B");
    car = car.replace(/Ð±/g, "b");
    car = car.replace(/Ð’/g, "V");
    car = car.replace(/Ð²/g, "v");
    car = car.replace(/Ð“/g, "G");
    car = car.replace(/Ð³/g, "g");
    car = car.replace(/Ð”/g, "D");
    car = car.replace(/Ð´/g, "d");
    car = car.replace(/Ð•/g, "E");
    car = car.replace(/Ðµ/g, "e");
    car = car.replace(/Ð–/g, "J");
    car = car.replace(/Ð¶/g, "j");
    car = car.replace(/Ð—/g, "Z");
    car = car.replace(/Ð·/g, "z");
    car = car.replace(/Ð˜/g, "I");
    car = car.replace(/Ð¸/g, "i");
    car = car.replace(/Ð¸Ðµ/g, "iye");
    car = car.replace(/Ð™/g, "Y");
    car = car.replace(/Ð¹/g, "y");
    car = car.replace(/Ðš/g, "K");
    car = car.replace(/Ðº/g, "k");
    car = car.replace(/Ð›/g, "L");
    car = car.replace(/Ð»/g, "l");
    car = car.replace(/Ðœ/g, "M");
    car = car.replace(/Ð¼/g, "m");
    car = car.replace(/Ð/g, "N");
    car = car.replace(/Ð½/g, "n");
    car = car.replace(/Ðž/g, "O");
    car = car.replace(/Ð¾/g, "o");
    car = car.replace(/Ð¾Ðµ/g, "oye");
    car = car.replace(/ÐŸ/g, "P");
    car = car.replace(/Ð¿/g, "p");
    car = car.replace(/Ð /g, "R");
    car = car.replace(/Ñ€/g, "r");
    car = car.replace(/Ð¡/g, "S");
    car = car.replace(/Ñ/g, "s");
    car = car.replace(/Ð¢/g, "T");
    car = car.replace(/Ñ‚/g, "t");
    car = car.replace(/Ð£/g, "U");
    car = car.replace(/Ñƒ/g, "u");
    car = car.replace(/ÑƒÐµ/g, "uye");
    car = car.replace(/Ð¤/g, "F");
    car = car.replace(/Ñ„/g, "f");
    car = car.replace(/Ð¥/g, "X");
    car = car.replace(/Ñ…/g, "x");
    car = car.replace(/Ð¦/g, "C");
    car = car.replace(/Ñ†/g, "c");
    car = car.replace(/Ð­/g, "E");
    car = car.replace(/Ñ/g, "e");
    car = car.replace(/Ò²/g, "H");
    car = car.replace(/Ò³/g, "h");
    car = car.replace(/Òš/g, "Q");
    car = car.replace(/Ò›/g, "q");

    return car;
}