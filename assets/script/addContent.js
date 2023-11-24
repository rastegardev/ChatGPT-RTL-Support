addStyle = () => {
  let domStyle = document.createElement("style");
  domStyle.id = "custom-styles";
  domStyle.append("main { direction: rtl !important; }");
  document.body.appendChild(domStyle);
};
addStyle();