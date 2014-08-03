(function(global){
  var helpers = global.helpers = global.helpers || {};

  // Imports an HTML file via a <link> tag.
  helpers.importHref = function(href, cb) {
    var link = document.createElement('link');
    link.rel = 'import';
    link.href = href;
    link.addEventListener('load', function(){
      cb();
    });
    document.body.appendChild(link);
    return link;
  };

  // Injects HTML into the body of the document, returning the created Element
  // If multiple elements are passed at the same level, only the first is created
  // and injected.
  helpers.injectElement = function(html, cb) {
    var div = document.createElement('div');
    div.innerHTML = html;
    var element = div.childNodes[0];
    document.body.appendChild(element);
    div.remove();

    // yield for async processing
    setTimeout(cb, 10);

    return element;
  };

}(this));

