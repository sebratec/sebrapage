class SignarureGenerator extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {    
    this.innerHTML = `
      <div style="display: flex; padding: 20px">
        <div style=" flex-direction: column; flex: 3; padding: 10px">
          <form
            class="validate-form"
            id="generator-form"
            method="POST"
            data-message-error="Opps... Something went wrong - please try again later"
            data-message-success="Downloading"
          >
            <div class="row">
              <div class="form-group col-sm-6">
                <input
                  name="name"
                  id="name"
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              <div class="form-group col-sm-6">
              <input
                name="email"
                id="email"
                type="text"
                class="form-control"
                placeholder="E-mail address"
                required
              />
              </div>
              </div>
              
              <div class="row">
              <div class="form-group col-sm-6">
              <input
                name="position"
                id="position"
                type="text"
                class="form-control"
                placeholder="position"
                required
              />
              </div>
              <div class="form-group col-sm-6">
                <input
                  name="picture"
                  id="picture"
                  type="file"
                  class="form-control"
                  placeholder="picture"
                  required
                />
                </div>
            </div>

            <div
              class="row"
              style="width: 100%; float: left; clear: both; margin-top: 15px"
            >
              <div class="col-md-4 col-sm-6">
                <button
                  class="btn btn-filled btn-submit btn-block"
                  id="generateButton"
                  type="submit"
                >
                  <span>Generate <i class="i-after ti-arrow-right"></i></span>
                </button>
              </div>

            </div>
          </form>
        </div>
        <div style="flex: 2; padding: 10px" flex-direction:column '>
          <div id='signaturePreview'></div>
          <div style="margin-top: 10px;" class="col-md-4 col-sm-6" >
            <button
              class="btn btn-filled btn-submit btn-block"
              id="copyButton"
              style="display: none;"
            >
              <span>Copy Signature </span>
            </button>
          </div>
        </div>
        <input hidden type="text" value="Hello World" id="myInput">
      </div>
    `;

    $.fn.serializeObject = function(){
      var o = {};
      var a = this.serializeArray();
      $.each(a, function() {
          if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                  o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
      });
      return o;
    };

    document.querySelector('#generator-form').onsubmit = function() {
      var data = $('form').serializeObject()
      var picture = document.querySelector('#picture').files[0]
      var base64 = ''
      var reader = new FileReader();
      reader.onload = function () {
        base64 = btoa(reader.result);
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
      reader.readAsBinaryString(picture);

      setTimeout(() => {
        var signature = document.querySelector('#signaturePreview')
        signature.innerHTML = `
        <table cellpadding=\"0\" cellpadding=\"0\" style=\"width: 500px; font-family: Helvetica Neue , Sans-serif; \">
          <tr>
            <td style=\"width: 100px; vertical-align: top;\">
              <img src=\"data:image/png;base64, ${base64}\" width=\"100\" height=\"100\">    ​
              <p style=\"margin: 7px 0 0 0; width: 100px; text-align: center\">
                <a style=\"text-decoration: none;color: white;\" href=\"https://sebratec.com/\" target=\"_blank\"> <img src=\"https://i.postimg.cc/zvxRL10g/Final-logo-png.png\"width=\"84\"></a>	
              </p>
            </td>
            <td style=\"width: 400px; vertical-align: top;padding-left: 16px;padding-top: 6px;\">
              <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"250\" style=\"font-family: Helvetica Neue , Sans-serif;\">
                <tr>
                  <td width=\"250\" valign=\"top\" style=\"border-bottom: 1px solid #fa4616; padding-bottom: 7px;\">
                    <h2 style=\"color: #201747; font-size: 15px; vertical-align: top; margin: 0;text-transform: uppercase; \">${data.name}</h2>
                    <h3 style=\"font-weight: normal;font-size: 13px;margin: 0; padding-top: 1px;\">${data.position}</h3>
                  </td>
                </tr>
              </table>
              <p style=\"margin: 10px 0 0 0;font-size: 13px;\">
                <span style=\"color: #201747; font-size: 13px;font-weight: bold;\"> E-mail:</span><a style=\"text-decoration: none; color: black;  \" href=\"mailto:${data.email}\" > ${data.email}</a>
              </p>
              <p style=\"margin: 10px 0 0 0;font-size: 13px;\">
                  Rua Oscar Freire 379 - Conj 121 Sala 5
              </p>
              <p style=\"margin:0;font-size: 13px;\">
                  CEP 01426-900 - Cerqueira Cesar - Sao Paulo – Brazil
              </p>
              <p style=\"margin: 12px 0 0 0; width: 298px; text-align: left;\">
                <a style=\"text-decoration: none;color: white;\" href=\"https://www.linkedin.com/company/sebratec\" target=\"_blank\"><img src=\"https://i.postimg.cc/BZpF7x4n/linkedin.png\" height=\"22\" width=\"22\" > </a>
                <a style=\"text-decoration: none;color: white; \" href=\"https://www.instagram.com/sebratec/?hl=en\" target=\"_blank\"><img src=\"https://i.postimg.cc/BnL1vkDj/Instagram.png\" height=\"22\" width=\"22\" style=\"margin-left: 3px;\"> </a>
                <a style=\"text-decoration: none;color: white; \" href=\"https://www.facebook.com/SebratecConsulting/\" target=\"_blank\"><img src=\"https://i.postimg.cc/sxjhD29z/facebook.png\" height=\"22\" width=\"22\" style=\"margin-left: 3px;\"> </a>
              </p>
            </td>
          </tr>
        </table>`
        var hiddenInput =  document.querySelector('#myInput');
        var copyButton =  document.querySelector('#copyButton');
        copyButton.setAttribute("style", "diplay: block;");
        hiddenInput.value = signature.innerHTML;
      }, 500)
      return false;
    };

    document.querySelector('#copyButton').onclick = function() {
      console.log('in')
      var copyText = document.getElementById("myInput");

      copyText.select();
      copyText.setSelectionRange(0, 99999);
    
      navigator.clipboard.writeText(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <title>Eduarda Lehoczki Bonet Email Signatur</title>​
        </head>
        <body>
          ${copyText.value}
        </body>
      </html>
      `);

      alert('Signature code copied to your clipboard')
    }
  }
}

customElements.define('signature-component', SignarureGenerator);