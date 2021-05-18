class SchemaOrg extends HTMLMetaElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
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
  
  customElements.define('schema-org-component', SchemaOrg);