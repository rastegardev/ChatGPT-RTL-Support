addStyle = () => {
  let domStyle = document.createElement("style");
  domStyle.id = "custom-styles";
  domStyle.append(`
    main { direction: rtl !important; text-align: justify; }
    pre { direction: ltr !important; }
    .rtl { direction: rtl !important; }
    .ltr { direction: ltr !important; text-align: left; }
  `);
  document.body.appendChild(domStyle);

  function detectTextDirection(element) {
    const text = element.textContent;

    if (
      /[\u0600-\u06FF\u0750-\u077F\u0590-\u05FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(
        text
      )
    ) {
      element.classList.add("rtl");
    } else {
      element.classList.add("ltr");
    }
  }

  const paragraphElements = document.querySelectorAll("p");
  paragraphElements.forEach((element) => {
    detectTextDirection(element);
  });

  const paragraphElementDiv = document.querySelectorAll(".text-base");
  paragraphElementDiv.forEach((element) => {
    detectTextDirection(element);
  });
};

addStyle();
