let addFontFamily = document.createElement("style");
addFontFamily.id = "custom-font-family-cdn";
addFontFamily.append(`
@import url('https://v1.fontapi.ir/css/Estedad');
  * { font-family: Estedad, sans-serif !important; };
`);
document.body.appendChild(addFontFamily);