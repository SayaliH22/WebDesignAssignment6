$(document).ready(function() {
    // Validate email
    $('#submit').click(function(event) {
      event.preventDefault(); // Prevent form submission
      
      // Reset error messages
      $('.error-message').text('');
      
      // Validate email
      var email = $('#email').val();
      if (!email.endsWith('@northeastern.edu')) {
        $('#email-error').text('Invalid email address');
        return;
      }
      
      // Validate username
      var username = $('#username').val();
      if (!username.match(/^[a-zA-Z0-9]+$/)) {
        $('#username-error').text('Invalid username');
        return;
      }
      
      // Validate password
      var password = $('#password').val();
      if (password.length < 8) {
        $('#password-error').text('Password must be at least 8 characters');
        return;
      }
      
      // Redirect to second page
      $('#welcome-message').text('Welcome, ' + username + '!');
      $('#page1').hide();
      $('#page2').show();
    });
    
    // Validate numbers and perform calculations
    var calculate = (operator) => {
      var num1 = Number($('#number1').val());
      var num2 = Number($('#number2').val());
      
      if (isNaN(num1) || isNaN(num2)) {
        $('#result').text('Invalid input');
        return;
      }
      
      var result;
      switch (operator) {
        case 'add':
          result = num1 + num2;
          break;
        case 'subtract':
          result = num1 - num2;
          break;
        case 'multiply':
          result = num1 * num2;
          break;
        case 'divide':
          if (num2 === 0) {
            $('#result').text('Cannot divide by zero');
            return;
          }
          result = num1 / num2;
          break;
      }
      
      $('#result').text(result);
    };
    
    $('#add').click(() => calculate('add'));
    
    $('#subtract').click(() => calculate('subtract'));