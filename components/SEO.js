class SEO extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <link rel="canonical" href="https://sebratec.com" />
        <meta property="og:url" content="https://sebratec.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sebratec – Software & Technology" />
        <meta property="og:description" content="Sebratec is an I.T. service company. We are specialized in tailored software solutions, consultancy and technology training programs." />
        <meta property="og:image" content="https://sebratec.com/assets/img/SebratecLogo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sebratec – Software & Technology" />
        <meta name="twitter:description" content="Sebratec is an I.T. service company. We are specialized in tailored software solutions, consultancy and technology training programs." />
        <meta name="twitter:image" content="https://sebratec.com/assets/img/SebratecLogo.png" />

        <!-- schema.org Identifiers [IMPORTANT] -->
        <script type="application/ld+json">
        {
            "@context" : "https://schema.org",
            "@type" : "Organization",
            "name" : "Sebratec AB",
            "description": "Sebratec is specialized in consulting services for the automotive and tech industry in Sweden.",
            "url" : "https://www.sebratec.com",
            "sameAs" : [
                "https://www.facebook.com/SebratecConsultancy",
                "https://www.linkedin.com/company/sebratec-ab", 
                "https://www.instagram.com/sebratec"
            ]
        }
        </script>
      `;
    }
  }
  
  customElements.define('seo-component', SEO);