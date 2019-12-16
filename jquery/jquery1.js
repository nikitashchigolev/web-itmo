jQuery(document).ready(function() {
    // стили оформления ссылок и параграфов сопределенным классом (задайте сами) на собственный (задать самостоятельно
    $(".para").css("color", "red");
    $(".para").css("margin", "10px");
    $(".inp").css("width", "100%");
    $(".a1").css("margin-left", "5px");
    $("img").css("margin-top", "5px");
    $(".delete").css("float", "right");
    $(".inp").css("margin", "5px");
    $("body").css("width", "50%");
    $("body").css("margin-left", "25%");
    $(".para").css("width", "100%");
    $(".para").css("font-family", "sans-serif");
    $(".para").css("float", "left");
    $("#cols2").click(function() {});
    //написать функцию установки всех элементов формы в disabled иприменить ее при загрузке страницы ко всем элементам формы, имеющимся на странице
    $("form#form1 :input").each(function() {
        let input = $(this);
        id = input.context.id;
        $("#" + id).attr("disabled", "disabled");

        console.log(id);
    });
    $("div#link a").each(function() {
        let input = $(this);
        id = input.context.id;
        $("#" + id).append(
            "<img src='up-right-arrow.png' height='20px' width='20px' />"
        );
        $("#" + id).attr("target", "_blank");
        link = $("#" + id).attr("href");
        let re = /^(https).+/;

        let links = re.exec(link);
        console.log(link, links);
        if (!links) {
            let re = /^(http).+/;
            let links = re.exec(link);

            link = "https:" + links[0];

            $("#" + id).attr("href", link);
            console.log(link, links);
        }
    });
    $(".delete").click(function() {
        $("#link").remove();
    });
    jQuery("#bt2").click(function() {
        if (!$("#col2").is(":hidden")) {
            $("#col2").slideDown(3000, function() {
                $(this).css("border", "2px red inset");
                $("#txt1").css("text-align", "center");
                $("#txt1").css("color", "blue");
                $("#txt1").css("display", "block");
            });
        } else {
            $("#col2").hide();
        }
    });
    jQuery("#bt3").click(function() {
        if (!$("#col3").is(":hidden")) {
            $("#col3").fadeToggle("slow", function() {
                $("#col3").text("Animation");
                $("#col3").css("display", "block");
            });
        }
    });
    jQuery("#bt4").click(function() {
        if (!$("#col4").is(":hidden")) {
            $("#col4").animate({
                    width: "30%",
                    opacity: 0.25,
                    left: "+=50",
                    height: "toggle"
                },
                2000,
                function() {
                    $("#col4").text("Animation");
                    $("#col4").css("display", "block");
                }
            );
        }
    });
    jQuery("#bt5").click(function() {
        if (!$("#col5").is(":hidden")) {
            $("#col5").animate({
                    width: "30%",
                    opacity: 0.4,
                    marginLeft: "0.6in",
                    fontSize: "3em",
                    borderWidth: "10px"
                },
                2000,
                function() {
                    $("#col5").text("Animation");
                }
            );
        } else {
            $("#col5").hide();
        }
    });

    jQuery("#btn1").click(function() {
        txt = $("#col0").text();
        $("#btn1").fadeOut();
        $("#column1").text(txt);
    });
    jQuery("#btn2").click(function() {
        $("#btn2").fadeOut();
        $("#ajax").load("https://inxaoc.github.io/example/ajax-1.html");
    });

    jQuery("#btn3").click(function() {
        jQuery.getJSON("https://inxaoc.github.io/example/ajax.json", function(
            data
        ) {
            var array = [];
            if (!$(".my-new-list").text()) {
                array = data_to_array(data);

                $("<tr/>", {
                    class: "my-new-list",
                    html: items.join("")
                }).appendTo("body");
            }
        });
    });
});
var items = [];

function data_to_array(data) {
    var array = [];
    for (var key in data) {
        var value = data[key];
        if (typeof value === "string") {
            array[key] = value;
            items.push(
                "<tr><td id='" + key + "'>" + " " + key + ":  " + value + "</td></tr>"
            );
        } else {
            array[key] = data_to_array(value);
        }
    }

    return array;
}