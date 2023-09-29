addStyle = () => {
  let domStyle = document.createElement("style");
  domStyle.id = "custom-styles";
  domStyle.append("* { direction: rtl !important; }");
  document.body.appendChild(domStyle);
};
addStyle();
