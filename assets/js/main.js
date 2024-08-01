// sticky header script starts here
window.onscroll = function() {
    stickHeader();
  };
  
function stickHeader() {
    var header = document.getElementById("site__header");
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition > 10) {
      header.classList.add("fixed-header");
    } else {
      header.classList.remove("fixed-header");
    }
}
//   sticky header script ends here

// mobile menu script starts here

// Select all elements with the class 'menu-btn'
var menuBtns = document.querySelectorAll('header .menu-btn');
var headerMenu = document.getElementById('headerNav');
var navItems = document.querySelectorAll('header .menu .nav-link');

// Add a click event listener to each menu button
menuBtns.forEach(function(menuBtn) {
  menuBtn.addEventListener('click', function(event) {
    // Toggle the 'open' class on headerMenu
    headerMenu.classList.toggle('open');

    // Toggle the 'open' class on all menu buttons
    menuBtns.forEach(function(btn) {
      btn.classList.toggle('open');
    });

    // Stop the event from propagating to the document click event listener
    event.stopPropagation();
  });
});

// Add a click event listener to the document to close the menu when clicking outside headerNav
document.addEventListener('click', function(event) {
  // Check if the clicked element is a child of headerNav, if not, remove the 'open' class
  if (!headerMenu.contains(event.target)) {
    // Remove the 'open' class from headerMenu and all menu buttons
    headerMenu.classList.remove('open');
    menuBtns.forEach(function(btn) {
      btn.classList.remove('open');
    });
  }
});
// mobile menu script ends here

// tabs script starts here
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');
            activateTab(tabId);
        });
    });
});

function activateTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active');
    });

    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const activeTabContent = document.getElementById(tabId);
    activeTabContent.classList.add('active');

    const activeTab = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    activeTab.classList.add('active');
}
// tabs script ends here