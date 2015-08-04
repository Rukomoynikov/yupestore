$(document).on('click',function(){
	$('#mainmenu.collapse').collapse('hide');
})

$(document).on('keydown',function(key){
	if(key.keyCode == 27) {
		$('.collapse').collapse('hide');
	}
})

$(function(){

	// Выбор города на экране офомления заказа.
	$('li.choosecity').on('click', function(elem){
		$('.opencitylist').text($(this).text());
	});
    
    // $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    //   " - $" + $( "#slider-range" ).slider( "values", 1 ) );	

})

 $(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $('#type0_name').val(ui.values[ 0 ]);
        $('#type0_name_2').val(ui.values[ 1 ]);
      }
    });
  });