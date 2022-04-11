const urlToDisplayName = (url) => {
  let displayName;
  if (url === "/") {
    displayName = "Home";
  } else {
    let lowerCaseDisplayName = url.substring(1);
    displayName =
      lowerCaseDisplayName.charAt(0).toUpperCase() +
      lowerCaseDisplayName.slice(1);
  }

  return displayName;
};

export { urlToDisplayName };
