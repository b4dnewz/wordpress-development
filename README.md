# Wordpress Development

> the best development experience for WordPress

This project aims to bring the best features of the latest tooling to Wordpress theme development. Namely, this project brings the hot module replacement experience provided by Webpack, mixed with SCSS and Babel, Eslint super setup along with the superpowers of Docker containers.

## Requirements

* docker
* docker-compose

And optionally [dns-proxy-server](https://github.com/mageddo/dns-proxy-server) to resolve for you hostnames and have a better experience.

## Getting Started

Download or clone the project from GitHub specifing a custom directory name for your project:

```bash
git clone https://github.com/b4dnewz/webpack-wordpress.git <my-project>
```

#### Project setup

Than move inside the folder just created and install the development dependencies:

```bash
npm install
yarn install
```

When installing for the first time it will ask you for the project name, which should be the same as the hostname you want to assign to the project. For example if the folder name is called __example.com__ the setup script will ask you to confirm the project name `example.com` than it will prepare for you the environment file and update the `package.json` according to the new name.

#### Running containers

When your project is ready start the WordPress instance by running docker compose, it will pull the required images (_if not already present_) and start a dedicated network with the site and database instances.

```bash
docker-compose up
```

Once docker has done and all containers has been created open a web browser and visit the address http://localhost:8080 or the port you specified in the configuration, and you will see the site, __hooray!__.

If you are using [dns-proxy-server](https://github.com/mageddo/dns-proxy-server) as suggested, you can also reach the website using the __hostname__ (_project name_) you entered during the installation process, so based on the example before http://example.com should be reachable and should contain your WordPress site.

If a new instance is started you __should see the WordPress installation page__, if not stop and remove the containers and repeat the steps from the beginning.

Be sure to setup WordPress with the __correct url__ to avoid unwanted redirects, for example if you are not using the dns proxy setup the website on `localhost:port` otherwise on `hostname` where hostname is the name of your project specified in the `.env` file.

#### Theme development

If you want to benefit all the cool things offered for development, open another terminal and type:

```bash
npm run start
yarn run start
```

To start the development server than visit http://localhost:8088 or the port you specified in the configuration, you should see the proxied website with the __hot module replacemente__ enabled and livereload for HTML and PHP file changes.

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
