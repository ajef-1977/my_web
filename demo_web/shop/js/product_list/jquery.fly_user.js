$(function() {
            var offset = $("#end").offset();
            $(".addcar").click(function(event) {
                var addcar = $(this);
 //             var img = addcar.parent().find('img').attr('src');  //獲取當前點擊圖片鏈接 
 //             var flyer = $('<img class="u-flyer" src="' + img + '">'); //拋物體對象 
				var img = 'img/ui/car_b.png';
                var flyer = $('<img class="u-flyer" src="' + img + '">'); //拋物體對象 
                flyer.fly({
                    start: {
                        left: event.pageX, //拋物體起點橫坐標
                        top: event.pageY //拋物體起點縱坐標 
                    },
                    end: {
                        left: offset.left + 10, //拋物體終點橫坐標
                        top: offset.top + 10, //拋物體終點縱坐標 
                        width: 0,
                        height: 0
                    },
                    onEnd: function() {
                        $("#msg").show().animate({
                            width: '250px'
                        }, 100).fadeOut(2000); ////成功加入購物車動畫效果 
                        addcar.css("cursor", "default");
                        this.destory(); //銷毀拋物體 
                    }
                });
            });

        });

		
