$(document).ready(function(){
	scrollFunc();
});

function scrollFunc() {
	$("div section a").click(function(e) {
		e.preventDefault();
		var linkID = e.currentTarget.id + "Section";
		
		$("html body").animate({
			scrollTop: $("#"+linkID).offset().top
		},1000);
	});

}