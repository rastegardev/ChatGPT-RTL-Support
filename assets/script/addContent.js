addStyle = () => {
  let domStyle = document.createElement("style");
  domStyle.id = "custom-styles";
  domStyle.append("main { direction: rtl !important; } pre { direction: ltr;}");
  document.body.appendChild(domStyle);
};
addStyle();
