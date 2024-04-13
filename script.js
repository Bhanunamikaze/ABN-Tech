function showSubmenu(element) {
    var submenu = element.nextElementSibling;
    submenu.style.display = "flex";

    var label = element;
    label.classList.add("underline");
    label.classList.add("label-gradient");
}

function hideSubmenu(event) {
    var target = event.currentTarget;
    var submenu = target.nextElementSibling;
    if (!submenu.contains(event.relatedTarget)) {
        submenu.style.display = "none";
        target.classList.remove("underline");
        target.classList.remove("label-gradient");
    }
}

// Attach event listeners for services label
var servicesLabel = document.querySelector(".services-label");
servicesLabel.addEventListener("mouseover", function() {
    showSubmenu(this);
});
servicesLabel.addEventListener("mouseout", hideSubmenu);
document.getElementById("servicesSubmenu").addEventListener("mouseout", hideSubmenu);

// Attach event listeners for products label
var productsLabel = document.querySelector(".products-label");
productsLabel.addEventListener("mouseover", function() {
    showSubmenu(this);
});
productsLabel.addEventListener("mouseout", hideSubmenu);
document.getElementById("productsSubmenu").addEventListener("mouseout", hideSubmenu);

// Additional event listener for submenu mouseout
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

const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
const imageWidth = images[0].offsetWidth + 12; // Image width + gap

const totalSliderWidth = images.length * imageWidth;
slider.style.width = `${totalSliderWidth}px`;
