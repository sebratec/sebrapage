class Header extends HTMLElement {
    // var baseUrl = "https://sebratec.com"
    baseUrl = "http://localhost/sebrapage"

    constructor() {
      super();
    }
    
    static get observedAttributes() {
        return ['language', 'pageUrl'];
    }

    connectedCallback() {
        
        var selectedLanguage = this.getAttribute("language")
        var url = this.getAttribute("pageUrl")
        
        this.innerHTML = `
            <div id="nav-bar">
                <!-- Logo -->
                <a class="logo-wrapper" href="index.html">
                    <svg class="the-logo" viewBox="0 0 1029 495" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
                        <g transform="matrix(4.16667,0,0,4.16667,0.5,0.5)">
                            <g transform="matrix(0.986329,0,0,0.986329,1.64656,-51.1473)">
                                <path d="M164.545,67.818C164.563,66.881 164.617,64.491 164.545,60.959C164.492,58.262 163.69,57.861 161.678,59.131C159.444,60.542 147.228,68.878 144.657,70.709C142.567,72.199 143.05,73.793 145.816,73.603C146.089,73.585 230.167,67.812 238.64,67.231C244.259,66.845 246.091,67.997 246.544,69.503C246.995,71.009 246.031,72.998 241.666,75.62C240.144,76.534 172.281,115.531 170.023,116.755C164.842,119.565 164.553,117.271 164.545,112.906C164.529,102.577 164.546,89.476 164.57,84.29L169.078,84.29C169.092,91.489 169.097,93.811 169.105,98.924C169.111,102.191 170.747,103.544 174.368,101.427C175.549,100.736 196.775,86.583 199.44,84.58C202.509,82.276 201.829,80.392 198.156,80.251C198.155,80.251 127.537,80.13 127.531,80.13C120.43,80.002 120.184,76.937 127.041,73.274C131.732,70.769 157.814,56.462 162.769,53.989C167.691,51.532 169.03,52.139 169.105,57.327C169.159,61.022 169.105,67.524 169.105,67.524L164.657,67.818C164.652,68.05 164.65,68.08 164.651,67.818L164.545,67.818Z" style="fill:rgb(250,70,22);"/>
                            </g>
                            <g transform="matrix(0.986329,0,0,0.986329,1.64656,77.6686)">
                                <path d="M192.531,26.243L192.531,27.712C192.531,33.821 194.774,36.177 200.431,36.117C203.926,36.08 207.116,34.736 207.641,34.096L212.249,36.134C209.476,38.849 205.102,40.271 199.464,40.347C188.005,40.502 184.465,34.989 184.465,27.767L184.465,22.433C184.465,20.619 184.585,18.941 184.824,17.399C185.063,15.857 185.629,14.524 186.522,13.4C187.415,12.275 188.721,11.395 190.441,10.76C194.453,9.279 202.398,9.193 206.638,10.733C208.337,11.349 209.654,12.211 210.589,13.318C211.525,14.424 212.157,15.767 212.483,17.345C212.81,18.923 212.973,20.674 212.973,22.597L212.973,26.243L192.531,26.243ZM46.384,26.243L46.384,27.712C46.384,33.821 48.627,36.177 54.284,36.117C57.78,36.08 60.969,34.736 61.494,34.096L66.101,36.134C63.329,38.849 58.955,40.271 53.317,40.347C41.858,40.502 38.318,34.989 38.318,27.767L38.318,22.433C38.318,20.619 38.438,18.941 38.677,17.399C38.917,15.857 39.482,14.524 40.376,13.4C41.268,12.275 42.574,11.395 44.294,10.76C48.306,9.279 56.251,9.193 60.491,10.733C62.189,11.349 63.506,12.211 64.442,13.318C65.378,14.424 66.01,15.767 66.337,17.345C66.663,18.923 66.827,20.674 66.827,22.597L66.827,26.243L46.384,26.243ZM219.307,30.108C219.077,28.249 219.128,21.423 219.29,20.007C219.991,13.891 223.9,9.478 234.169,9.616C239.808,9.692 243.872,11.115 246.645,13.83L241.278,15.868C240.753,15.227 238.632,13.884 235.136,13.847C230.524,13.798 228.181,15.355 227.473,19.244C227.133,21.113 227.063,28.393 227.462,30.653C227.485,30.785 227.509,30.914 227.536,31.04C228.314,34.694 230.652,36.164 235.136,36.117C238.632,36.08 240.753,34.736 241.278,34.096L246.645,36.134C243.872,38.849 239.808,40.271 234.169,40.347C223.985,40.484 220.056,36.145 219.307,30.108ZM80.885,10.322C84.28,9.731 90.376,9.395 94.232,10.205C97.631,10.919 100.614,13.15 101.526,16.271C102.328,19.018 102.745,27.817 101.495,33.134C100.246,38.45 96.047,40.229 87.872,40.319C79.697,40.409 74.386,38.426 72.818,37.601L72.818,0.611L80.885,0.611L80.885,10.322ZM137.959,10.442C147.046,9.89 158.674,9.057 158.674,21.89L158.674,37.601C154.306,39.327 149.228,40.296 145.124,40.318C137.842,40.355 135.478,39.464 133.17,38.161C131.821,37.399 130.775,36.41 130.035,35.195C129.295,33.98 129.009,32.44 129.009,30.734C129.009,23.078 136.305,22.056 140.892,21.836C144.256,21.675 147.785,21.956 150.69,22.142C150.855,15.452 149.336,13.311 133.822,14.513L137.959,10.442ZM7.726,29.339C8.747,33.471 10.977,35.043 15.665,35.02C20.48,34.996 24.344,33.389 24.34,28.649C24.337,25.218 23.266,21.758 15.78,20.099C2.581,17.174 0.467,14.541 0.429,9.044C0.396,4.103 3.019,-0.03 15.706,0.035C26.832,0.093 31.265,3.338 31.609,8.881L23.894,9.752C23.863,6.141 19.668,4.905 15.695,4.91C11.467,4.915 8.582,5.609 8.399,8.522C8.225,11.282 9.038,12.492 12.582,13.716C13.909,14.174 15.651,14.61 17.935,15.078C29.995,17.548 33.085,21.855 32.842,28.617C32.6,35.378 28.394,40.526 15.403,40.283C4.204,40.075 0.995,35.458 0,30.211L7.726,29.339ZM172.836,10.352L182.091,10.352L177.97,14.27L172.836,14.27L172.836,27.821C172.836,33.984 174.101,36.083 177.606,37.147L177.606,37.257L177.671,40.271C170.764,39.854 164.77,38.03 164.77,27.821L164.77,5.108L172.836,0.658L172.836,10.352ZM116.354,39.794L108.287,39.794L108.287,20.202C108.348,17.07 109.3,14.917 111.213,13.445C114.674,10.78 121.282,10.34 131.459,10.352L127.396,14.216C119.345,14.72 116.354,15.711 116.354,20.202L116.354,39.794ZM150.608,25.9C143.773,25.231 137.439,25.169 137.122,30.923C137.007,33.012 138.407,36.102 143.977,36.044C147.27,36.01 150.053,34.898 150.608,34.2L150.608,25.9ZM93.861,18.36C92.375,14.659 89.656,14.308 87.239,14.327C84.823,14.346 82.222,14.876 80.885,15.265L80.885,33.795C80.885,33.841 83.06,35.963 87.341,35.951C89.957,35.945 92.647,35.078 93.768,32.619C95.036,29.838 94.891,20.926 93.861,18.36ZM205.158,22.597C205.468,16.271 204.238,13.959 198.927,13.906C193.619,13.853 192.35,15.809 192.531,22.597L205.158,22.597ZM59.012,22.597C59.321,16.271 58.092,13.959 52.781,13.906C47.473,13.853 46.202,15.809 46.384,22.597L59.012,22.597Z" style="fill:rgb(32,23,71);"/>
                            </g>
                        </g>
                    </svg>
                </a>

                <nav class="module-group right">
                    <!-- Primary Menu -->
                    <div class="module menu left">
                        <ul id="nav-primary" class="nav nav-primary">
                            ${this.getMenu()}
                        </ul>
                    </div>
                </nav>

                <!-- Mobile menu -->
                <div  class="menu-toggle">
                    <a href="" data-toggle="mobile-menu" class="mobile-trigger" ><span><span></span></span></a>
                </div>

                <!-- Language menu -->
                <div class="Lang">
                    ${this.getFlag()}
                    
                    <div id="LangSelect">
                        <div id="enFlag" class="LangOption ${(selectedLanguage === 'en') ? "active" : ""} " style="cursor: pointer;">
                            <img src="${this.baseUrl}/assets/img/flags/eur.png" alt="English" class="flag">
                            <p>English</p>
                            <small>In use</small>
                        </div>
                        <div id="enSweden" class="LangOption ${(selectedLanguage === 'se') ? "active" : ""} " style="cursor: pointer;">
                            <img src="${this.baseUrl}/assets/img/flags/swe.png" alt="Svenska" class="flag">
                            <p>Svenska</p>
                            <small>Aktiv</small>
                        </div>
                        <div id="enBrazil" class="LangOption ${(selectedLanguage === 'pt') ? "active" : ""} " style="cursor: pointer;">
                            <img src="${this.baseUrl}/assets/img/flags/bra.png" alt="Português" class="flag">
                            <p>Português</p>
                            <small>Ativo</small>
                        </div>
                        <div id="enNetherlands" class="LangOption ${(selectedLanguage === 'nl') ? "active" : ""} " style="cursor: pointer;">
                            <img src="${this.baseUrl}/assets/img/flags/nl.png" alt="Dutch" class="flag">
                            <p>Dutch</p>
                            <small>Aktiv</small>
                        </div>                        
                    </div>
                </div>
            </div>
            `;

        var urlDictionary = { 
            se: { 
                index: "se/index.html#home",
                about: "se/om-sebratec.html",
                academy: "se/sebratec-akademi.html",
                computerVision: "se/computer-vision.html",
                contact: "se/kontakt.html",
                deepLearning: "se/deep-learning.html",
                deployModel: "se/deploy-model.html"
            },
            pt: { 
                index: "pt/index.html#home",
                about: "pt/sobre-sebratec.html",
                academy: "pt/academia-sebratec.html",
                computerVision: "pt/visao-computacional.html",
                contact: "pt/contato.html",
                deepLearning: "pt/deep-learning.html",
                deployModel: "pt/deploy-model.html"
            },
            en: { 
                index: "index.html#home",
                about: "about-sebratec.html",
                academy: "sebratec-academy.html",
                computerVision: "computer-vision.html",
                contact: "contact.html",
                deepLearning: "deep-learning.html",
                deployModel: "deploy-model.html"
            },
            nl: { 
                index: "nl/index.html#home",
                about: "nl/about-sebratec.html",
                academy: "nl/sebratec-academy.html",
                computerVision: "nl/computer-vision.html",
                contact: "nl/contact.html",
                deepLearning: "nl/deep-learning.html",
                deployModel: "nl/deploy-model.html"
            },
        }
        
        var localBaseUrl = this.baseUrl
        document.querySelector('#LangTrigger').onclick = function() {  
            var ToggleMenu = document.getElementById("LangSelect");
  
            if (ToggleMenu.style.display === "block") {
                ToggleMenu.style.display = "none";
            } else {
                ToggleMenu.style.display = "block";
            }
        };

        document.querySelector('#enFlag').onclick = function() { window.location = `${localBaseUrl}/${urlDictionary['en'][url]}` };
        document.querySelector('#enSweden').onclick = function() { window.location = `${localBaseUrl}/${urlDictionary['se'][url]}` };
        document.querySelector('#enBrazil').onclick = function() { window.location = `${localBaseUrl}/${urlDictionary['pt'][url]}` };
        document.querySelector('#enNetherlands').onclick = function() { window.location = `${localBaseUrl}/${urlDictionary['nl'][url]}` };
    }

    getFlag() {
        switch (this.getAttribute("language")) {
            case "se":
                return `                    
                    <button id="LangTrigger">
                        <img src="${this.baseUrl}/assets/img/flags/swe.png" alt="Svenska" class="flag">
                    </button>` 
            case "pt":
                return `                    
                    <button id="LangTrigger">
                        <img src="${this.baseUrl}/assets/img/flags/bra.png" alt="Português" class="flag">
                    </button>` 
            case "nl":
                return `                    
                    <button id="LangTrigger">
                        <img src="${this.baseUrl}/assets/img/flags/nl.png" alt="Dutch" class="flag">
                    </button>` 
            default:
                return `                    
                    <button id="LangTrigger">
                        <img src="${this.baseUrl}/assets/img/flags/eur.png" alt="English" class="flag">
                    </button>`
        }
    }

    getMenu() {
        var selectedLanguage = this.getAttribute("language")
        var menuDictionary = {
            se: [
                {url: "index.html#home", title: "HEM"},
                {url: "index.html#services", title: "TJÄNSTER"},
                {url: "om-sebratec.html", title: "OM"},
                {url: "index.html#customers", title: "PARTNERS"},
                {url: "sebratec-akademi.html", title: "ACADEMY"},
                {url: "https://blog.sebratec.com", title: "BLOGG"},
                {url: "https://sebratec-ab.breezy.hr", title: "KARRIÄR"},
                {url: "kontakt.html", title: "KONTAKT"},
            ],
            pt: [
                {url: "index.html#home", title: "INICIO"},
                {url: "index.html#services", title: "SERVIÇOS"},
                {url: "sobre-sebratec.html", title: "SOBRE"},
                {url: "index.html#customers", title: "PARCEIROS"},
                {url: "academia-sebratec.html", title: "ACADEMY"},
                {url: "https://blog.sebratec.com", title: "BLOG"},
                {url: "https://sebratec-ab.breezy.hr", title: "CARREIRAS"},
                {url: "contato.html", title: "CONTATO"},
            ],
            en: [
                {url: "index.html#home", title: "Home"},
                {url: "index.html#services", title: "Services"},
                {url: "about-sebratec.html", title: "About"},
                {url: "index.html#customers", title: "Partners"},
                {url: "sebratec-academy.html", title: "Academy"},
                {url: "https://blog.sebratec.com", title: "Blog"},
                {url: "https://sebratec-ab.breezy.hr", title: "Careers"},
                {url: "contact.html", title: "Contact"},
            ],
            nl: [
                {url: "index.html#home", title: "Home"},
                {url: "index.html#services", title: "Services"},
                {url: "about-sebratec.html", title: "About"},
                {url: "index.html#customers", title: "Partners"},
                {url: "sebratec-academy.html", title: "Academy"},
                {url: "https://blog.sebratec.com", title: "Blog"},
                {url: "https://sebratec-ab.breezy.hr", title: "Careers"},
                {url: "contact.html", title: "Contact"},
            ],
        }

        return menuDictionary[selectedLanguage].map((menuOption) => {
            return `<li><a href="${menuOption.url}">${menuOption.title}</a></li>`
        }).join("")
    }
  }
  
  customElements.define('header-component', Header);