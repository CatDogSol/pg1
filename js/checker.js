window.onload = function () {
  var element = window.document.createElement("div");
  element.className = "get-a-better-browser-detector";
  window.document.body.appendChild(element);
  if (element.offsetHeight > 0) {
    var inlineCss = document.createElement("style");
    inlineCss.innerText =
      "html,body {overflow: hidden;}iframe.get-a-better-browser { width: 100%;height: 768px;display: block !important;padding: 0;margin: 0;overflow: hidden;border: none;z-index: 2147483647;position: relative;background: #fff;}";
    document.head.appendChild(inlineCss);

    setTimeout(function () {
      var iframe = document.createElement("iframe");
      iframe.className = "get-a-better-browser";
      iframe.src = window.location.protocol + "//www.getabetterbrowser.com";
      document.body.insertBefore(iframe, window.document.body.childNodes[0]);
    }, 500);
  } else {
    document.body.removeChild(element);
  }
};
