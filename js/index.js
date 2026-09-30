// [].slice.call( document.querySelectorAll('a[href="#"') ).forEach( function(el) {
// 				el.addEventListener( 'click', function(ev) { ev.preventDefault(); } );
// 			} );

$("#mySidenav").load("nav.html");


/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";

    // 選單順序播放動畫
	var count = $('.sidenav h2').length;
	$('.sidenav').slideDown( (count*1.2)*100 );
	$('.sidenav h2').each(function(i){
		var thisLI = $(this);
		timeOut = 100*i;
		setTimeout(function(){
			thisLI.css({
				'opacity':'1',
				'margin-left':'0'
			});
		},100*i);
	});

};

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

    var count = $('.sidenav h2').length;
	$('.sidenav h2').css({
		'opacity':'0',
		'margin-left':'-160px'
	});
};

