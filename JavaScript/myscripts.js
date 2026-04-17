// Global variable to track if the form has been submitted
var formSubmitted = false;

// Function to toggle the visibility of contact information
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

// Function to handle form submission and validation
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

// Function to validate email field
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

// Function to validate phone field
function validatePhoneField(fieldId, value) {
  if (value === '') {
    return showFieldMessage(fieldId, 'Phone Number cannot be empty', false);
  }
  if (!/^\d+$/.test(value)) {
    return showFieldMessage(fieldId, 'Phone Number must contain only numbers', false);
  }
  if (value.length < 11) {
    return showFieldMessage(fieldId, 'Phone Number must be at least 11 digits long', false);
  }
  return showFieldMessage(fieldId, '', true);
}

// Function to validate text field
function validateTextField(fieldId, condition, message) {
  if (!condition) {
    return showFieldMessage(fieldId, message, false);
  }
  return showFieldMessage(fieldId, '', true);
}

// Function to validate textarea field
function validateTextareaField(fieldId, value, minLength, emptyMessage, shortMessage) {
  if (value === '') {
    return showFieldMessage(fieldId, emptyMessage, false);
  }
  if (value.length < minLength) {
    return showFieldMessage(fieldId, shortMessage + ' (currently ' + value.length + ' characters)', false);
  }
  return showFieldMessage(fieldId, '', true);
}

// Function to validate select field
function validateSelectField(fieldId, condition, message) {
  if (!condition) {
    return showFieldMessage(fieldId, message, false);
  }
  return showFieldMessage(fieldId, '', true);
}

// Function to validate availability radio buttons
function validateAvailability() {
  var checked = $('input[name="availability"]:checked').length > 0;
  return showFieldMessage('availability', checked ? '' : 'Availability: Please select one option (Full-time or Part-time)', checked);
}

// Function to show validation message for a field
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

// Slider configuration for each menu section
var menuSectionSliders = [
  {
    id: 'hot-drinks',
    slides: [
      { name: 'Latte', image: 'https://via.placeholder.com/720x480?text=Latte', alt: 'Latte' },
      { name: 'Cappuccino', image: 'https://via.placeholder.com/720x480?text=Cappuccino', alt: 'Cappuccino' },
      { name: 'Americano', image: 'https://via.placeholder.com/720x480?text=Americano', alt: 'Americano' }
    ]
  },
  {
    id: 'cold-drinks',
    slides: [
      { name: 'Iced Latte', image: 'https://via.placeholder.com/720x480?text=Iced+Latte', alt: 'Iced Latte' },
      { name: 'Iced Tea', image: 'https://via.placeholder.com/720x480?text=Iced+Tea', alt: 'Iced Tea' },
      { name: 'Berry Smoothie', image: 'https://via.placeholder.com/720x480?text=Berry+Smoothie', alt: 'Berry Smoothie' }
    ]
  },
  {
    id: 'pastries-bakery',
    slides: [
      { name: 'Croissant', image: 'https://via.placeholder.com/720x480?text=Croissant', alt: 'Croissant' },
      { name: 'Blueberry Muffin', image: 'https://via.placeholder.com/720x480?text=Blueberry+Muffin', alt: 'Blueberry Muffin' },
      { name: 'Cinnamon Roll', image: 'https://via.placeholder.com/720x480?text=Cinnamon+Roll', alt: 'Cinnamon Roll' }
    ]
  },
  {
    id: 'breakfast-items',
    slides: [
      { name: 'Avocado Toast', image: 'https://via.placeholder.com/720x480?text=Avocado+Toast', alt: 'Avocado Toast' },
      { name: 'Yogurt & Granola', image: 'https://via.placeholder.com/720x480?text=Yogurt+%26+Granola', alt: 'Yogurt & Granola' },
      { name: 'Pancakes', image: 'https://via.placeholder.com/720x480?text=Pancakes', alt: 'Pancakes' }
    ]
  },
  {
    id: 'light-lunch',
    slides: [
      { name: 'Chicken Sandwich', image: 'https://via.placeholder.com/720x480?text=Chicken+Sandwich', alt: 'Chicken Sandwich' },
      { name: 'Veggie Wrap', image: 'https://via.placeholder.com/720x480?text=Veggie+Wrap', alt: 'Veggie Wrap' },
      { name: 'Soup of the Day', image: 'https://via.placeholder.com/720x480?text=Soup+of+the+Day', alt: 'Soup of the Day' }
    ]
  }
];

function initSectionSliders() {
  var sliderContainers = document.querySelectorAll('[data-slider-id]');

  sliderContainers.forEach(function(container) {
    var sliderId = container.getAttribute('data-slider-id');
    var sliderConfig = menuSectionSliders.find(function(config) {
      return config.id === sliderId;
    });
    if (!sliderConfig) {
      return;
    }

    var state = {
      currentIndex: 0,
      timer: null,
      slides: sliderConfig.slides
    };

    var image = container.querySelector('.slider-image');
    var label = container.querySelector('.slider-item-label');
    var prevButton = container.querySelector('.slider-prev');
    var nextButton = container.querySelector('.slider-next');

    function renderSlider() {
      var slide = state.slides[state.currentIndex];
      if (!slide) {
        return;
      }
      image.src = slide.image;
      image.alt = slide.alt;
      label.textContent = slide.name;
    }

    function changeSlide(step) {
      state.currentIndex = (state.currentIndex + step + state.slides.length) % state.slides.length;
      renderSlider();
      resetSliderTimer();
    }

    function startSliderTimer() {
      state.timer = setInterval(function() {
        changeSlide(1);
      }, 5000);
    }

    function resetSliderTimer() {
      if (state.timer) {
        clearInterval(state.timer);
      }
      startSliderTimer();
    }

    prevButton.addEventListener('click', function() {
      changeSlide(-1);
    });
    nextButton.addEventListener('click', function() {
      changeSlide(1);
    });

    renderSlider();
    startSliderTimer();
  });
}

// Event handler for input changes in the application form
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

    if (fieldId === 'fullName') {
      validateTextField(fieldId, $(this).val().trim() !== '', 'Full Name cannot be empty');
    } else if (fieldId === 'email') {
      validateEmailField(fieldId, $(this).val().trim());
    } else if (fieldId === 'phone') {
      validatePhoneField(fieldId, $(this).val().trim());
    } else if (fieldId === 'position') {
      validateSelectField(fieldId, $(this).val() !== '', 'Position Applying For cannot be empty');
    } else if (fieldId === 'availability') {
      validateAvailability();
    } else if (fieldId === 'experience') {
      validateTextareaField(fieldId, $(this).val().trim(), 20, 'Previous Experience cannot be empty', 'Previous Experience must be at least 20 characters long');
    } else if (fieldId === 'why') {
      validateTextareaField(fieldId, $(this).val().trim(), 20, 'Why do you want to work here cannot be empty', 'Why do you want to work here must be at least 20 characters long');
    }
  });

  initSectionSliders();
});