const slugify = require("slugify");

// Remove reserved characters from slug
// https://tools.ietf.org/html/rfc3986#section-2.2
module.exports = str => {
  const slugified = slugify(str.toLowerCase());
  const reservedCharacters = /[:/?#[\]@!$&'()*+,;=]/g;
  return slugified.replace(reservedCharacters, "");
};
