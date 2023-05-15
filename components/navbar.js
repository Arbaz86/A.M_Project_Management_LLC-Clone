const largeScreenNavbar = `
<!-- This code represents the top section of a website -->
<div class="site-wrap">
  <!-- This div contains the top bar with social media links and opening hours -->
  <div class="top-bar">
    <div class="top-bar-left-social">
      <a href="#">
        <i class="fa fa-facebook-f"></i>
      </a>
      <a href="#">
        <i class="fa fa-twitter"></i>
      </a>
      <a href="#">
        <i class="fa fa-linkedin"></i>
      </a>
      <a href="#">
        <i class="fa fa-google-plus"></i>
      </a>
    </div>
    <div class="top-bar-right-time">
      <i class="fa fa-clock-o"></i>
      Mon – Sat: 9:00 – 19:00
    </div>
  </div>
</div>
<!-- This div contains the site header with logo, contact details, and navigation menu -->
<div class="site-header">
  <!-- Logo -->
  <div class="header-logo">
    <a href="/">
      <img
        src="https://ampm-llc.com/wp-content/uploads/2022/11/Thank-you-for-comingvvv.png"
        alt="logo"
      />
    </a>
  </div>
  <div class="header-contact-em-ph">
    <!-- Contact details -->
    <div class="header-contact-details">
      <div class="contact-icon-email">
        <i
          class="fa fas fa-envelope-open"
          style="color: #016be1; font-size: 24px"
        ></i>
      </div>
      <div class="contact-email-details">
        <div>Email Us</div>
        <div>info@ampm-llc.com</div>
      </div>
    </div>
    <div class="header-contact-details">
      <div class="contact-icon-phone">
        <i
          class="fa fas fa-mobile"
          style="color: #016be1; font-size: 24px"
        ></i>
      </div>
      <div class="contact-phone-details">
        <div>Call Us</div>
        <div>+971 54 445 3622</div>
      </div>
    </div>
  </div>
</div>
<!-- Navigation menu -->
<nav class="navbar-sticky">
  <div class="nav-links">
    <a href="/">HOME</a>
    <a href="/">ABOUT US </a>
    <a href="./products.html">PRODUCTS</a>
    <a href="/">WHY US</a>
    <a href="/">PARTNERS & ASSOCIATES</a>
    <a href="./contact.html">CONTACT US</a>
    <button class="nav-download-btn">DOWNLOAD COMPANY PROFILE</button>
  </div>
</nav>
`;

const smallScreenNavbar = `
  <div class="small-navbar-div">
    <div class="small-navbar-logo">
    <a href="/">
      <img
        src="https://ampm-llc.com/wp-content/uploads/2022/11/Thank-you-for-comingvvv.png"
        alt="logo"
      />
    </a>
    </div>
    <div class="small-navbar-icons">
      <button class="navbar-search-icons">
        <i class="fa fa-search"></i>
      </button>
      <button class="navbar-hamburger-icons">
        <i class="fa fa-bars"></i>
      </button>
    </div>
  </div>
`;

document.querySelector(".large-screen-navbar").innerHTML = largeScreenNavbar;
document.querySelector(".small-screen-navbar").innerHTML = smallScreenNavbar;
