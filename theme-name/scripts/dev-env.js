module.exports = document.addEventListener('DOMContentLoaded', function() {

  const links = [...document.getElementsByTagName('a'), ...document.getElementsByTagName('link')]
  const scripts = [...document.getElementsByTagName('script')]

  links.forEach((link) => {
    link.setAttribute('href', link.getAttribute("href").replace('localhost:8080', 'localhost:3000'))
  })

  scripts.forEach((script) => {
    let src = script.getAttribute("src");
    if( !src ) { return; }
    script.setAttribute('src', script.getAttribute("src").replace('localhost:8080', 'localhost:3000'))
  })

}, false);
