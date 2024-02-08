let addFontFamily = document.createElement("style");
addFontFamily.id = "custom-styles-font-family";
addFontFamily.append(`
@import url('https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css');
  * { font-family: 'VazirMatn', sans-serif !important; }
`);
document.body.appendChild(addFontFamily);