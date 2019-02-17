# Wordpress Development

> the best development experience for WordPress

This project aims to bring the best features of the latest tooling to Wordpress theme development. Namely, this project brings the hot module replacement experience provided by Webpack, mixed with SCSS and Babel, Eslint super setup along with the superpowers of Docker containers.

## Requirements

* docker
* docker-compose

And optionally [dns-proxy-server](https://github.com/mageddo/dns-proxy-server) to resolve for you hostnames and have a better experience.

---

## Getting Started

Download or clone the project from GitHub specifing a custom directory name for your project, ideally the directory should be named as the hostname of the website you are creating, so for example name it `example.com`.

```
git clone https://github.com/b4dnewz/webpack-wordpress.git <my-project>
```

Than you need to install the node dependencies necessary for development, such as webpack and all his loaders and finally the images needed for the container, in case you don't have it already.

Before installing the dependencies and starting the project it should be configured with the new name and informations, to do so you have two main options:

##### Setup Script

You can manually execute the node setup script by moving inside the project folder and running `node ./setup.js`, or you can use the __preinstall__ script and directly type:

```
cd example.com
npm install
```

This will run the [setup script](./setup.js) if not already called once and it will ask you some questions in order to customize the project before installing modules.

##### Manual updates

You can manually update your files by replacing the occurences of __wordpress.development__ hostname is the `.env` file or any other file and you can set the `package.json` properties to match your project name and author informations, for example:

```json
{
  "name": "example.com",
  "description": "The example.com website development image",
  "version": "0.1.0",
  "author": "My Company"
}
```

### Running containers

When your project is ready start the WordPress instance by running docker compose, it will pull the required images (_if not already present_) and start a dedicated network with the site and database instances.

```
docker-compose up
```

Once docker has done and all containers has been created open a web browser and visit the address http://localhost:8080 or the port you specified in the configuration, and you will see the site, __hooray!__.

If you are using [dns-proxy-server](https://github.com/mageddo/dns-proxy-server) as suggested, you can also reach the website using the __hostname__ (_project name_) you entered during the installation process, so based on the example before http://example.com should be reachable and should contain your WordPress site.

If a new instance is started you __should see the WordPress installation page__, if not stop and remove the containers and repeat the steps from the beginning.

Be sure to setup WordPress with the __correct url__ to avoid unwanted redirects, for example if you are not using the dns proxy setup the website on `localhost:port` otherwise on `hostname` where hostname is the name of your project specified in the `.env` file.

Now you should have a fully running dockerized WordPress website, inside a new git repository with a development workspace ready to be used, next step in the actual project development.


### Theme development

If you want to benefit all the cool things offered for development, open another terminal and type:

```
npm run start
yarn run start
```

To start the development server than visit http://localhost:8088 or the port you specified in the configuration, you should see the proxied website with the __hot module replacemente__ enabled and livereload for HTML and PHP file changes.

Note that is you are using [dns-proxy-server](https://github.com/mageddo/dns-proxy-server) you can directly __query the hostname you specified during the initial setup__ and reach your WordPress website.

That's it.. if you __liked it__ leave __a star__ and talk to a friend about it.

---

## Development

For the theme development, clone the repository on your machine, enter the root directory and start the example website after pulling the required images.

```
git clone https://github.com/b4dnewz/wordpress-development.git
cd wordpress-development
docker-compose up
```

After docker-compose has pulled all the images and created the containers, you can visit the default hostname at [wordpress.development](http://wordpress.development) and play around with the theme or test the configuration trying to find some potential issues or updates, that are mainly use-case needs.

If you want to contribute to the source code of the default theme that comes with the project or propose your configuration or updates, please follow the contributing guide shown below.

---

## Future steps

These are a few things that I think would make this tool just that much better

-   [ ] add a cool banner and good documentation
-   [ ] add build test and travis ci integration

---

## Contributing

1.  Create an issue and describe your idea
2.  Fork the project (<https://github.com/b4dnewz/wordpress-development/fork>)
3.  Create your feature branch (`git checkout -b my-new-feature`)
4.  Commit your changes (`git commit -am 'Add some feature'`)
5.  Publish the branch (`git push origin my-new-feature`)
6.  Create a new Pull Request

## License

This project is released under [MIT LICENSE](./LICENSE) from Filippo [b4dnewz](https://b4dnewz.github.io/) Conti.
