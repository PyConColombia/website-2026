(() => {
  var path = window.location.pathname;
  if (path === "/" || path === "") return;
  var lastSlash = path.lastIndexOf("/");
  var base = lastSlash <= 0 ? "/" : path.slice(0, lastSlash);
  var route = lastSlash <= 0 ? path : path.slice(lastSlash);
  window.location.replace(base + "#" + route);
})();
