
// Get in touch Hover Effect
document.addEventListener('DOMContentLoaded', function() { 
    const navContainer = document.querySelector('.navbar'); 

    navContainer.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('link-get-in-touch')) {
            const link = event.target.closest('li').querySelector('.link');
            link.style.opacity = '0';
        }
    });

    navContainer.addEventListener('mouseout', (event) => {
        if (event.target.classList.contains('link-get-in-touch')) {
            const link = event.target.closest('li').querySelector('.link');
            link.style.opacity = 'unset'; 
        }
    });
});



// Navigation bar Desktop Submenu
function showSubmenu(element) {
    var submenu = element.nextElementSibling;
    submenu.style.display = "flex";

    var label = element;
    label.classList.add("label-gradient");
}

function hideSubmenu(event) {
    var target = event.currentTarget;
    var submenu = target.nextElementSibling;
    if (!submenu.contains(event.relatedTarget)) {
        submenu.style.display = "none";
        target.classList.remove("label-gradient");
    }
}

var servicesLabel = document.querySelector(".services-label");
servicesLabel.addEventListener("mouseover", function() {
    showSubmenu(this);
});
servicesLabel.addEventListener("mouseout", hideSubmenu);
document.getElementById("servicesSubmenu").addEventListener("mouseout", hideSubmenu);

var productsLabel = document.querySelector(".products-label");
productsLabel.addEventListener("mouseover", function() {
    showSubmenu(this);
});
productsLabel.addEventListener("mouseout", hideSubmenu);
document.getElementById("productsSubmenu").addEventListener("mouseout", hideSubmenu);


  var servicesSubmenu = document.getElementById("servicesSubmenu");
  servicesSubmenu.addEventListener("mouseout", function(event) {
      if (!servicesSubmenu.contains(event.relatedTarget)) {
          servicesSubmenu.style.display = "none";
          servicesLabel.classList.remove("underline");
          servicesLabel.classList.remove("label-gradient");
      }
  });

  var productsSubmenu = document.getElementById("productsSubmenu");
  productsSubmenu.addEventListener("mouseout", function(event) {
      var productsLabel = document.querySelector(".products-label");
      if (!productsSubmenu.contains(event.relatedTarget)) {
          productsSubmenu.style.display = "none";
          productsLabel.classList.remove("underline");
          productsLabel.classList.remove("label-gradient");
      }
  });


  // Navigation bar for Mobile SubMenu
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
});
}


// JS for Slider 
const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
const imageWidth = images[0].offsetWidth + 12; // Image width + gap

const totalSliderWidth = images.length * imageWidth;
slider.style.width = `${totalSliderWidth}px`;


// Contact us Form 
function submitForm() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    var formData = new FormData();
    formData.append("first-name", firstName);
    formData.append("last-name", lastName);
    formData.append("email", email);
    formData.append("phone", phone);

    var xhr = new XMLHttpRequest();
    // Change filename4
    xhr.open("POST", "submit.php"); 
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          alert(xhr.responseText); 
          document.getElementById("contact-form").reset();
        } else {
          alert('Oops! Something went wrong. Please try again later.');
        }
      }
    };
    xhr.send(formData);
  }