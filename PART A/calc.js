$(document).ready(function() {
	// Get the logged-in user's name from localStorage
	var username = localStorage.getItem('username');
	$('#username').text(username);

	// Validate the input fields and perform the operation on button click
	$('#add-btn, #sub-btn, #mul-btn, #div-btn').click(function() {
		var num1 = $('#num1').val();
		var num2 = $('#num2').val();

		// Validate the input fields
		if (num1 === '' || num2 === '') {
			alert('Please enter two numbers!');
			return;
		}

		if (!$.isNumeric(num1) || !$.isNumeric(num2)) {
			alert('Please enter only numbers!');
			return;
		}

		// Perform the operation based on the button clicked
		var result;
		switch ($(this).attr('id')) {
			case 'add-btn':
				result = parseFloat(num1) + parseFloat(num2);
				break;
			case 'sub-btn':
				result = parseFloat(num1) - parseFloat(num2);
				break;
			case 'mul-btn':
				result = parseFloat(num1) * parseFloat(num2);
				break;
			case 'div-btn':
				result = parseFloat(num1) / parseFloat(num2);
				break;
		}

		// Display the result
		$('#result').val(result);
	});

    $('#logout-btn').click(function() {
        window.location.replace('./PART A/registration.html');
    });

    $('#clear-btn').click(function() {
        $('#num1, #num2, #result').val("");
    });
});