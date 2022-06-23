module.exports = {
  slugify,
};

function slugify(string) {
  return string.toLowerCase().replaceAll(' ', '-').replaceAll('&', 'and').trim();
}
