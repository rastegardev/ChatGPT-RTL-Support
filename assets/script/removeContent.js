removeStyle = () => {
  // Remove custom styles
  let styles = document.getElementById("custom-styles");
  if (styles) {
    styles.parentNode.removeChild(styles);
  }
};
// Call the function to remove custom styles and z-index spans
removeStyle();