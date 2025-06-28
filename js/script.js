(function () {
   emailjs.init("2BC7ceRLeK4YF_Kg4");
 })();

 document
   .getElementById("contact-form")
   .addEventListener("submit", function (e) {
     e.preventDefault();

     emailjs.sendForm("123456789", "template_cejr7yv", this).then(
       function () {
         document.getElementById("status-message").innerText =
           "Message sent successfully!";
       },
       function (error) {
         document.getElementById("status-message").innerText =
           "Failed to send message: " + error.text;
       }
     );

     this.reset();
   });

 function toggleMenu() {
   const nav = document.getElementById("navLinks");
   nav.classList.toggle("active");
 }

 document.querySelectorAll("#navLinks a").forEach((link) => {
   link.addEventListener("click", () => {
     const nav = document.getElementById("navLinks");
     nav.classList.remove("active");
   });
 });

 document.querySelectorAll(".read-more-btn").forEach((button) => {
   button.addEventListener("click", () => {
     const paragraph = button.previousElementSibling;
     const isShort = paragraph.getAttribute("data-is-short") === "true";
     const fullText = paragraph.getAttribute("data-full-text");
     const shortText = fullText.split(".")[0] + ".";

     if (isShort) {
       paragraph.textContent = fullText;
       paragraph.setAttribute("data-is-short", "false");
       button.innerHTML = `<i class="fa-solid fa-chevron-up"></i> Read Less`;
     } else {
       paragraph.textContent = shortText;
       paragraph.setAttribute("data-is-short", "true");
       button.innerHTML = `<i class="fa-solid fa-chevron-down"></i> Read More`;
     }
   });
 });

 const swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   loop: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
   },
 });