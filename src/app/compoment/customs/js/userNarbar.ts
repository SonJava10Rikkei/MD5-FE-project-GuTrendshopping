export function userNarbar() {

  (function () {
    console.log("funciton test")

// narbar active link
    const links = document.querySelectorAll('.nav-links');

    if (links.length) {
      links.forEach((link) => {
        link.addEventListener('click', (e) => {
          links.forEach((link) => {
            link.classList.remove('active');
          });
          e.preventDefault();
          link.classList.add('active');
        });
      });
    }




  })();
}
