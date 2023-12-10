document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionContent = header.nextElementSibling;
      const isActive = header.classList.contains("active");

      header.classList.toggle("active");
      accordionContent.style.maxHeight = isActive ? 0 : accordionContent.scrollHeight + "px";

      accordionHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          otherHeader.classList.remove("active");
          otherHeader.nextElementSibling.style.maxHeight = 0;
        }
      });
    });
  });
});
