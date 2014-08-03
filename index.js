var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
  files.unshift(pattern(path.join(__dirname, 'src', 'webcomponent-helpers.js')));
};

framework.$inject = ['config.files'];
module.exports = {'framework:webcomponent-helpers': ['factory', framework]};
