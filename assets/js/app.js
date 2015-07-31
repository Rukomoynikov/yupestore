$(document).on('click',function(){
	$('.collapse').collapse('hide');
})

$(document).on('keydown',function(key){
	if(key.keyCode == 27) {
		$('.collapse').collapse('hide');
	}
})

$(function(){

	$('li.choosecity').on('click', function(elem){
		$('.opencitylist').text($(this).text());
	})

})