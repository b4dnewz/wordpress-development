# Wordpress Development

> the best development experience for WordPress

This project aims to bring the best features of the latest tooling to Wordpress theme development. Namely, this project brings the hot module replacement experience provided by Webpack, mixed with SCSS and Babel, Eslint super setup along with the superpowers of Docker containers.

## Requirements

* docker
* docker-compose

And optionally [dns-proxy-server](https://github.com/mageddo/dns-proxy-server) to resolve for you hostnames and have a better experience.

## Getting Started

Clone the project from GitHub with this command:

```bash
git clone https://github.com/b4dnewz/webpack-wordpress.git
```

Optionally rename the folder than move inside it and __edit__ the `package.json` file adding your project name and author references, than install the project development dependencies using your favourite package manager:

```bash
npm install
yarn install
```

Meanwhile, create a `.env` file or rename the `.env.example` file and optionally edit the project configurations, to customize the database and wordpress instance.

When your project is ready, pull the required containers (if not already present) and start the WordPress instance by running docker compose:

```bash
docker-compose up
```

Once docker has done open a web browser and visit the address http://localhost:8080 or the port you specified in the configuration, and you will see the site, __hooray!__.

If you want to benefit all the cool things offered for development, open another terminal and type:

```bash
npm run start
yarn run start
```

To start the development server than visit http://localhost:3000 or the port you specified in the configuration, you should see the proxied website with the __hot module replacemente__ enabled and livereload for HTML and PHP file changes.

That's it.. if you __liked it__ leave __a star__ and talk to a friend about it.

---

## Development

For the theme development, just change your source files and webpack dev server will do all for you.

---

## Contributing

1.  Create an issue and describe your idea
2.  Fork the project (<https://github.com/b4dnewz/wordpress-development/fork>)
3.  Create your feature branch (`git checkout -b my-new-feature`)
4.  Commit your changes (`git commit -am 'Add some feature'`)
5.  Publish the branch (`git push origin my-new-feature`)
6.  Create a new Pull Request

---

## Future steps

These are a few things that I think would make this tool just that much better

-   [ ] add a cool banner and good documentation
-   [ ] add build test and travis ci integration
