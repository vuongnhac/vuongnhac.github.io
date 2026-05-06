(() => {
  const headerTarget = document.querySelector("[data-site-header]");
  const footerTarget = document.querySelector("[data-site-footer]");

  if (headerTarget) {
    headerTarget.innerHTML = `
      <header class="bg-primary py-4 sm:py-5">
        <div class="container flex items-center justify-between">
          <a href="/" aria-label="Vuong Tan Nhac home">
            <img src="/assets/img/logo.svg" class="w-24 lg:w-40" alt="Vuong Tan Nhac logo" />
          </a>
          <nav class="hidden lg:block" aria-label="Primary navigation">
            <ul class="flex items-center">
              <li class="group pl-6"><a href="/#about" class="pt-0.5 font-header font-semibold uppercase text-white">About</a><span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span></li>
              <li class="group pl-6"><a href="/#skills" class="pt-0.5 font-header font-semibold uppercase text-white">Skills</a><span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span></li>
              <li class="group pl-6"><a href="/#projects" class="pt-0.5 font-header font-semibold uppercase text-white">Projects</a><span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span></li>
              <li class="group pl-6"><a href="/#contact" class="pt-0.5 font-header font-semibold uppercase text-white">Contact</a><span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span></li>
            </ul>
          </nav>
          <button class="block lg:hidden" type="button" data-menu-open aria-label="Open menu">
            <i class="bx bx-menu text-4xl text-white"></i>
          </button>
        </div>
      </header>
      <div class="site-mobile-menu pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" data-menu>
        <nav class="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 md:w-1/3" aria-label="Mobile navigation">
          <button class="absolute top-0 right-0 mt-4 mr-4" type="button" data-menu-close aria-label="Close menu">
            <img src="/assets/img/icon-close.svg" class="h-10 w-auto" alt="" />
          </button>
          <ul class="mt-12 flex flex-col">
            <li class="py-2"><a href="/#about" class="font-header font-semibold uppercase text-white">About</a></li>
            <li class="py-2"><a href="/#skills" class="font-header font-semibold uppercase text-white">Skills</a></li>
            <li class="py-2"><a href="/#projects" class="font-header font-semibold uppercase text-white">Projects</a></li>
            <li class="py-2"><a href="/#contact" class="font-header font-semibold uppercase text-white">Contact</a></li>
          </ul>
        </nav>
      </div>
    `;

    const menu = headerTarget.querySelector("[data-menu]");
    const openButton = headerTarget.querySelector("[data-menu-open]");
    const closeButton = headerTarget.querySelector("[data-menu-close]");
    const openMenu = () => {
      menu.classList.remove("pointer-events-none", "opacity-0");
      menu.classList.add("pointer-events-auto", "opacity-100");
      document.body.classList.add("overflow-hidden", "max-h-screen");
    };
    const closeMenu = () => {
      menu.classList.add("pointer-events-none", "opacity-0");
      menu.classList.remove("pointer-events-auto", "opacity-100");
      document.body.classList.remove("overflow-hidden", "max-h-screen");
    };

    openButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);
    menu.addEventListener("click", (event) => {
      if (event.target === menu || event.target.closest("a")) closeMenu();
    });
  }

  if (footerTarget) {
    footerTarget.innerHTML = `
      <footer class="bg-primary">
        <div class="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p class="text-center font-body text-white sm:text-left">Copyright 2026. Vuong Tan Nhac. All rights reserved.</p>
          <div class="flex items-center justify-center gap-4">
            <a href="https://github.com/vuongnhac" aria-label="GitHub"><i class="bx bxl-github text-2xl text-white hover:text-yellow"></i></a>
            <a href="https://www.linkedin.com/in/nhacvuong" aria-label="LinkedIn"><i class="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i></a>
            <a href="https://www.facebook.com/nhac.vuong.1" aria-label="Facebook"><i class="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i></a>
          </div>
        </div>
      </footer>
    `;
  }
})();
