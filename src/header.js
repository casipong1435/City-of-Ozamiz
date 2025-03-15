class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="bg-white shadow-md fixed w-full top-0 left-0 z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
            <div class="flex items-center gap-2">
                <img src="./assets/logo.png" hieght="40" width="40" />
                <span class="font-bold">City of Ozamiz</span>
            </div>
            <div class="hidden md:flex space-x-6">
                <a href="index.html" class="text-gray-700 nav-link hover:text-gray-900 hover:border-b hover:border-gray-800 hover:font-bold active">Home</a>
                <a href="about.html" class="text-gray-700 nav-link hover:text-gray-900 hover:border-b hover:border-gray-800 hover:font-bold">About</a>
                <a href="demographic.html" class="text-gray-700 nav-link hover:text-gray-900 hover:border-b hover:border-gray-800 hover:font-bold">Demographic</a>
                <a href="services.html" class="text-gray-700 nav-link hover:text-gray-900 hover:border-b hover:border-gray-800 hover:font-bold">Services</a>
                <a href="touristspots.html" class="text-gray-700 nav-link hover:text-gray-900 hover:border-b hover:border-gray-800 hover:font-bold">Tourist Spots</a>
            </div>
            <button id="menu-toggle" class="md:hidden text-gray-700 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            </button>
        </div>
    </div>
    <div id="mobile-menu" class="md:hidden hidden flex flex-col bg-white p-4 space-y-2">
        <a href="index.html" class="text-gray-700 hover:text-blue-500">Home</a>
        <a href="about.html" class="text-gray-700 hover:text-blue-500">About</a>
        <a href="demographic.html" class="text-gray-700 hover:text-blue-500">Demographic</a>
        <a href="services.html" class="text-gray-700 hover:text-blue-500">Services</a>
        <a href="touristspots.html" class="text-gray-700 hover:text-blue-500">Tourist Spots</a>
    </div>
</nav>`;
  }
}

class Head extends HTMLElement {
  connectedCallback() {
    // Access the document's <head> element
    const head = document.querySelector("head");

    // Create and append elements to <head>
    head.innerHTML += `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="./src/output.css" rel="stylesheet">
      <link href="./src/custom.css" rel="stylesheet">
    `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="py-8 px-5 sm:px-20 bg-[#854E28]">
        <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-3">
          <div class="col-span-1 p-1">
            <img src="./assets/logo.png" alt="Ozamiz City Logo" class="rounded-full h-70 w-70">
          </div>
          <div class="col-span-1">
            <div class="flex flex-col gap-2">
              <strong class="text-white text-3xl">Quick Links</strong>
              <a href="index.html" class="decoration-none text-gray-50">Home</a>
              <a href="about.html" class="decoration-none text-gray-50">About</a>
              <a href="demographic.html" class="decoration-none text-gray-50">Demographics</a>
              <a href="services.html" class="decoration-none text-gray-50">Services</a>
              <a href="touristspots.html" class="decoration-none text-gray-50">Tourist Spots</a>
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex flex-col gap-2">
              <strong class="text-white text-3xl">Contact Us</strong>
              <div class="flex items-center gap-2 text-white">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  
                </span>
                <span>
                  cityofozamiz@gmail.com
                </span>
              </div>
              <div class="flex items-center gap-2 text-white">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  
                </span>
                <span>
                  (088) 422 - 3152
                </span>
              </div>
              <br>
              <strong class="text-white text-3xl">Address</strong>
              <div class="flex items-center gap-2 text-white">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
            
                  
                </span>
                <span>
                  Ozamiz City, Misamis Occidental, Philippines
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr class="text-white mt-2">
        <div class="text-center mt-3 text-gray-200 font-thin">
          Copyright &copy; 2025 by Christopher Casipong
        </div>
      </div>`;
  }
}

customElements.define("custom-head", Head);
customElements.define("custom-nav", Header);
customElements.define("custom-footer", Footer);
