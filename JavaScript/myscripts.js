var formSubmitted = false;

function contactShow(){
  var x = document.getElementById("invs1");
  var y = document.getElementById("contactButton");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.innerHTML = "Hide Contact Info";
  } else {
    x.style.display = "none";
    y.innerHTML = "Show Contact Info";
  }
}

function submitApplication() {
  formSubmitted = true;
  var valid = true;

  valid = validateTextField('fullName', $('#fullName').val().trim() !== '', 'Full Name cannot be empty') && valid;
  valid = validateEmailField('email', $('#email').val().trim()) && valid;
  valid = validatePhoneField('phone', $('#phone').val().trim()) && valid;
  valid = validateSelectField('position', $('#position').val() !== '', 'Position Applying For cannot be empty') && valid;
  valid = validateAvailability() && valid;
  valid = validateTextareaField('experience', $('#experience').val().trim(), 20, 'Previous Experience cannot be empty', 'Previous Experience must be at least 20 characters long') && valid;
  valid = validateTextareaField('why', $('#why').val().trim(), 20, 'Why do you want to work here cannot be empty', 'Why do you want to work here must be at least 20 characters long') && valid;

  if (!valid) {
    $('#applicationSuccess').hide();
    return false;
  }

  $('#applicationSuccess').show();
  $('#applicationForm')[0].reset();
  $('.validation-message').hide().removeClass('validation-error validation-success');
  formSubmitted = false;
}

function validateEmailField(fieldId, value) {
  if (value === '') {
    return showFieldMessage(fieldId, 'Email Address cannot be empty', false);
  }
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return showFieldMessage(fieldId, 'Email Address must be a valid format (e.g., example@domain.com)', false);
  }
  return showFieldMessage(fieldId, '', true);
}

function validatePhoneField(fieldId, value) {
  if (value === '') {
    return showFieldMessage(fieldId, 'Phone Number cannot be empty', false);
  }
  if (!/^\d+$/.test(value)) {
    return showFieldMessage(fieldId, 'Phone Number must contain only numbers', false);
  }
  if (value.length < 10) {
    return showFieldMessage(fieldId, 'Phone Number must be at least 10 digits long', false);
  }
  return showFieldMessage(fieldId, '', true);
}

function validateTextField(fieldId, condition, message) {
  if (!condition) {
    return showFieldMessage(fieldId, message, false);
  }
  return showFieldMessage(fieldId, '', true);
}

function validateTextareaField(fieldId, value, minLength, emptyMessage, shortMessage) {
  if (value === '') {
    return showFieldMessage(fieldId, emptyMessage, false);
  }
  if (value.length < minLength) {
    return showFieldMessage(fieldId, shortMessage + ' (currently ' + value.length + ' characters)', false);
  }
  return showFieldMessage(fieldId, '', true);
}

function validateSelectField(fieldId, condition, message) {
  if (!condition) {
    return showFieldMessage(fieldId, message, false);
  }
  return showFieldMessage(fieldId, '', true);
}

function validateAvailability() {
  var checked = $('input[name="availability"]:checked').length > 0;
  return showFieldMessage('availability', checked ? '' : 'Availability: Please select one option (Full-time or Part-time)', checked);
}

function showFieldMessage(fieldId, message, valid) {
  var errorLabel = $('#' + fieldId + 'Error');
  if (!valid) {
    errorLabel.text(message).removeClass('validation-success').addClass('validation-error').show();
    return false;
  }

  if (errorLabel.is(':visible')) {
    errorLabel.text('✓ Valid').removeClass('validation-error').addClass('validation-success').show();
  }
  return true;
}

$(function() {
  $('#applicationForm input, #applicationForm textarea, #applicationForm select').on('input change', function() {
    if (!formSubmitted) {
      return;
    }

    var fieldId = this.type === 'radio' ? this.name : (this.id || this.name);
    var label = $('#' + fieldId + 'Error');
    if (!label.is(':visible')) {
      return;
    }

    switch (fieldId) {
      case 'fullName':
        validateTextField(fieldId, $(this).val().trim() !== '', 'Full Name cannot be empty');
        break;
      case 'email':
        validateEmailField(fieldId, $(this).val().trim());
        break;
      case 'phone':
        validatePhoneField(fieldId, $(this).val().trim());
        break;
      case 'position':
        validateSelectField(fieldId, $(this).val() !== '', 'Position Applying For cannot be empty');
        break;
      case 'availability':
        validateAvailability();
        break;
      case 'experience':
        validateTextareaField(fieldId, $(this).val().trim(), 20, 'Previous Experience cannot be empty', 'Previous Experience must be at least 20 characters long');
        break;
      case 'why':
        validateTextareaField(fieldId, $(this).val().trim(), 20, 'Why do you want to work here cannot be empty', 'Why do you want to work here must be at least 20 characters long');
        break;
    }
  });
});