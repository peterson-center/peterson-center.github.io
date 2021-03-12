(function () {
  // ===
  // Smooth scroll

  const navlinks = document.querySelectorAll('.navmain a');

  navlinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const id = link.getAttribute('href');
      const section = document.querySelector(id);
      const bounds = section ? section.getBoundingClientRect() : {};
      const scrollTop =
        window.document.body.scrollTop ||
        window.document.documentElement.scrollTop;

      console.log(scrollTop);

      if (bounds.top) {
        e.preventDefault();
        window.scrollTo({
          left: 0,
          top: bounds.top + scrollTop,
          behavior: 'smooth',
        });
      }
    });
  });
})();
