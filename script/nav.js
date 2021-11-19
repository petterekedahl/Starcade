'use strict';

//Above the hamburgermeny lies an invisible checkbox - 
//if checked the meny appears and the hamburger turns into an X
$('#hamCheckbox').on('click', function () {
	if ($(this).prop('checked') == true) {
		$('#hamClosed').css({
			display: 'block'
		});
		$('#hamOpen').css({
			display: 'flex'
		});
	} else if ($(this).prop('checked') == false) {
		$('#hamClosed').css({
			display: 'block'
		});
		$('#hamOpen').css({
			display: 'none'
		});
	}
});

//The meny starts as a 'burger' and is therfore unchecked
$('#hamCheckbox').attr('checked', false);