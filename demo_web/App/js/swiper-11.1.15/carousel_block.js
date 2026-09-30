$(function () {
    var swiper_images = [{
            img_name: "banner_01",
            url: "",
        },
        {
            img_name: "banner_02",
            url: "",
        },
        {
            img_name: "banner_03",
            url: "",
        },
        {
            img_name: "banner_01",
            url: "",
        },
        {
            img_name: "banner_02",
            url: "",
        },
        {
            img_name: "banner_03",
            url: "",
        },
    ];

    var htmlStr = "";
    var i = 1;

    $.each(swiper_images, function (key, obj) {
        // console.log(key)
        htmlStr +=
            '<div class="swiper-slide" style="background: url(img/carousel/' +
            obj.img_name +
            '.jpg) no-repeat 50% 50% / cover;">';
        htmlStr += '<a class="tag" href="javascript:;">';
        htmlStr += "</a>";
        htmlStr += "</div>";
        i++;
    });
    $(".swiper-wrapper").html(htmlStr);
});