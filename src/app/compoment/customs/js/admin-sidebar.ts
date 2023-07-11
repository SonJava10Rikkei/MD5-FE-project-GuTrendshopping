export function adminSidebar() {

  (function () {
    // console.log("funciton test")

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

    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el: any, all = false) => {
      el = el.trim()
      if (all) {
        // @ts-ignore
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }

    /**
     * Easy event listener function
     */
    const on = (type: any, el: any, listener: any, all = false) => {
      if (all) {
        // @ts-ignore
        select(el, all).forEach(e => e.addEventListener(type, listener))
      } else {
        select(el, all).addEventListener(type, listener)
      }
    }

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el: any, listener: any) => {
      el.addEventListener('scroll', listener)
    }

    /**
     * Sidebar toggle
     */
    if (select('.toggle-sidebar-btn')) {
      on('click', '.toggle-sidebar-btn', function () {
        select('body').classList.toggle('toggle-sidebar')
      })
    }

    /**
     * Search bar toggle
     */
    if (select('.search-bar-toggle')) {
      on('click', '.search-bar-toggle', function () {
        select('.search-bar').classList.toggle('search-bar-show')
      })
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#user-navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      // @ts-ignore
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }

    /**
     * Initiate TinyMCE Editor
     */
    const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;

    /**
     * Initiate Bootstrap validation check
     */
    var needsValidation = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(needsValidation)
      .forEach(function (form) {
        // @ts-ignore
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })

  })();

}
