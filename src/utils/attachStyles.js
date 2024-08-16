import createCache from "@emotion/cache";

export const getStylesCache = () => {
  const headElement = attachStyles();

  return createCache({
    key: "crediblemind-assessment-shadow",
    container: headElement,
  });
}

const attachStyles = () => {
  const shadow = document.querySelector('crediblemind-assessment').shadowRoot;
  const headElement = document.createElement("head");
  const rootElement = document.createElement("div");

  shadow.appendChild(headElement);
  shadow.appendChild(rootElement);
  return headElement;
}
