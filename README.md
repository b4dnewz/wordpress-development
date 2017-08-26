# Wordpress Webpack
> wordpress oriented workspace based on webpack

This project aims to bring the best features of the latest tooling to Wordpress theme development. Namely, this project gives you the ability to have hot module replacement provided by Webpack to allow you to develop javascript rich themes that without having to constantly reload the page. Additionally you can import any npm module and have it available on the front-end. This project also allows you to write your styling using SASS and use ES2015, and utilizes the awesome webpack-dashboard tool so you feel cool too.

## Requirements

The project depend on the [wp-cli](http://wp-cli.org/) package for the _setup process_ to download a instance of WordPress. Be sure to install it first, if you already have it you can skip this step, if you don't you can follow this [instructions](http://wp-cli.org/#installing) from their website.

## Getting Started

Clone the project from GitHub with this command:

```bash
git clone https://github.com/b4dnewz/webpack-wordpress.git
```

Move inside the folder and install the project development dependencies:

```bash
npm install
```

When your project is ready, before start the development you __MUST install__ a WordPress instance to work with, you can choose one of the ways described below.

### Automatic (WordPress) installation:

The easiest way, _which requires __wp-cli__ as mentioned above in the [requirements](https://github.com/codekraft-studio/webstart#requirements) section_, is to run the setup script:

```bash
npm run setup
```

### Manual (WordPress) installation:

If you want to manual instal WordPress in new projects, follow this steps:
  * Download the [latest](https://wordpress.org/latest.zip) WordPress release
  * Create a directory called `wordpress` in the root folder of the project and extract the files in it.

### Webserver configuration:

The setup command will download the latest WordPress release and place it in the `wordpress` folder in the root directory.

To view your project you will need to aim a tool like __MAMP__, __WAMP__, __XAMMP__, etc. to this wordpress folder or manually you configure a __virtual host__ on your apache web server.

We suggest you to read the [official guide](https://httpd.apache.org/docs/2.4/vhosts/) on virtual hosts, since can be very tricky to configurate in the right way, also take a quick look at the example provided, which will work on most cases and has a short explanation:

```apache
# Listen to port defined in proxy configuration
Listen 8080

# Create a virtual host on that port
<VirtualHost *:8080>

  # This should be changed accorgind your email
  ServerAdmin <youremail>

  # The servername match the folder name containing WordPress
  ServerName wordpress

  # DocumentRoot: The directory out of which you will serve your
  # documents. Be sure to specify /webpack-wordpress/wordpress/ in path
  DocumentRoot path/to/www/webpack-wordpress/wordpress/

  # This should be changed to whatever you set DocumentRoot to.
  <Directory "path/to/www/webpack-wordpress/wordpress/">

    # For development purposes
    Options All

  </Directory>

</VirtualHost>
```

Now make sure to turn on your Apache server along with your MySQL server, then visit localhost:8080. You should now see the Wordpress wp-config creation page. Create a new database continue using WordPress walkthrough.

After that start the development server by running:

```bash
npm run start
```

Once run a browser will load the home page of your site at localhost:3000.

If you see `Error occured while trying to proxy to: localhost:3000/` this mean __your apache websever is not started__.

---

## Development
### Styling
To style your webpages you simply go into the awesome-theme/styling folder. Any SASS styles that are added to these folders will reload in the browser instantaneously.

### Javascript
In awesome-theme/index.js you can import any and all javascript that you would like. Import npm packages or import your own files. Take advantage of having a modern ecosystem to create web apps using Wordpress.

### PHP and Template Files
All edits to php files will require a manual refresh to see changes. The hope is that in future versions of this tool that this will no longer be a need, but for now it is a requirement.

---

## Future steps
These are a few things that I think would make this tool just that much better
- [x] simplify project dependencies
- [x] code linting in development and before build (_with eslint_)
- [x] upgrade webpack and plugins to last versions
- [ ] have page refresh when php file is changed, not just sass and js
- [ ] source maps for sass
- [ ] __?__ add composer to handle the plugins (php)
- [ ] adding build test and travis integration for automatic build tests
