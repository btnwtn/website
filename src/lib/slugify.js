import slugify from "slugify";

// Remove reserved characters from slug
// https://tools.ietf.org/html/rfc3986#section-2.2
export default str => {
  const slugified = slugify(str);
  const reservedCharacters = /[:/?#[\]@!$&'()*+,;=]/g;
  return slugified.replace(reservedCharacters, "");
};
