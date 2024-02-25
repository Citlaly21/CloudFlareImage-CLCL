import axios from "axios";

const form = new FormData();
form.append("file", image);
form.append("requireSignedURLs", "");

const options = {
    method: "POST",
    url: "https://api.cloudflare.com/client/v4/accounts/ca9b43f77ee269734e8818fd05c17671/images/v1",
    data: formData,
    headers: {
        "Authorization": "Bearer APGaW3BGzl-GtysEtYmWdL_mGllJKOWiifmx_gL4",

    },
  data: '[form]'
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});