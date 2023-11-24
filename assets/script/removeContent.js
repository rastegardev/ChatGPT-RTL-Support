removeStyle = () => {
  let styles = document.getElementById("custom-styles");
  if (styles) {
    styles.parentNode.removeChild(styles);
  }
};
removeStyle();