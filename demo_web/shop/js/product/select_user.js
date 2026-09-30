
	$(window).load(function() {
		$('.sp-wrap').smoothproducts();
	});

	
$(function(){
	$(".sys_item_spec .sys_item_specpara").each(function(){
		var i=$(this);
		var p=i.find("ul>li");
		p.click(function(){
			if(!!$(this).hasClass("selected")){
				$(this).removeClass("selected");
				i.removeAttr("data-attrval");
			}else{
				$(this).addClass("selected").siblings("li").removeClass("selected");
				i.attr("data-attrval",$(this).attr("data-aid"))
			}
		})
	})

})