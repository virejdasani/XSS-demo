function sanitize(string) {
  if (string.indexOf("<") > -1) {
    return "Nice try, but you can't hack me";
  } else {
    return "No results found for: " + string;
  }
}
// textContent

{
  /* <img src=x onerror=alert(1);> */
}
