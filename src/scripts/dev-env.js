const HOSTNAME = process.env.HOSTNAME
const DEVPORT = process.env.DEVPORT
const DEVSERVER = `localhost:${DEVPORT}`

module.exports = document.addEventListener('DOMContentLoaded', function() {

  const links = [
    ...document.getElementsByTagName('a'),
    ...document.getElementsByTagName('link')
  ]
  const scripts = [...document.getElementsByTagName('script')]

  links.forEach((link) => {
    link.setAttribute('href', link.getAttribute("href").replace(HOSTNAME, DEVSERVER))
  })

  scripts.forEach((script) => {
    let src = script.getAttribute("src");
    if (!src) {
      return;
    }
    script.setAttribute('src', script.getAttribute("src").replace(HOSTNAME, DEVSERVER))
  })

}, false);
