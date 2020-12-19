const https = require("https");

const baseURL = "api-b2b.backenster.com";
const key =
  "a_ItVQVpy8n2JpN7SO382k7W0vMPV3O27WE9QQ0PXkAAAPDX9HEHRS5VJmcPuOPGzZoH2U0PglLUVbv2W0";
const version = "v3";
const english = "en_GB";
const spanish = "es_CO";
const translateEndpointUrl = `/b1/api/${version}/translate`;

exports.translate = (text) => {
  const data = JSON.stringify({
    from: english,
    to: spanish,
    data: text,
    platform: "api",
  });

  const options = {
    hostname: baseURL,
    port: 443,
    path: translateEndpointUrl,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length,
      Authorization: `Bearer ${key}`,
    },
  };

  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
};
