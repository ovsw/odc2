# ODC Redesign

## Local Dev

The project worfklow uses Gulp automation. Sources are written in PostCSS and plain JS. Uses Webpack for JS compiling - although not really neeed.

Don't forget to install dev dependencies `npm install`

### Gulp

Configure the local domain in line 11 of `gulp/tasks/watch.js`: `proxy: "http://odc2.ovs/"` by changing it to another virtual host if needed.

Run `gulp watch` to start the server. 

## Sources

All CSS and JS source files are locin `/src`.
Both CSS and JS compiled files have source maps enabled.

### CSS Sources

- Located in `/src/styles/`. Main file `/src/styles/styles.css` loads all other modular PostCSS files.
- `/src/styles/global/` contains the global styles, variables and mixins. 
- Mobile first approach with responsive mixins.
- BEM approach attempted.
- compiles to `styles/styles.css`

### JS sources

- Located in `/src/scripts/`
- App.js is the main file, it includes all other custom JS files from the `/src/scripts/modules/` folder;
- compiles to `/scripts/App.js`
- vendor files `/scripts/vendor/` folder.

### Minification / Compression

CSS and JS files are minified automatically via PHP with the ProCache Module, accessible in the back-end from `Setup > ProCache > Minify`
You need to turn off minification on development environment so that source maps work properly.

## PHP Templates

The main template file is `/main.php`. It acts as the basis for all page templates, including different files based on the template name.

Always start with this file if you want to make changes to a particular template - by following the PHP require / include directives you can get to any piece of code you need to modify.

There are other separate template files:
- `/full-screen-gallery.php` - for the full-screen gallery template
- `/blogs-main.php` - for the blog templates

Also some defautl php template files:
- `admin.php` for the back-end - do not edit.
- `404.php` for the 404 page.

## CDN

The Key CDN is integrated via ProCache module. settings accessible in the back-end from `Setup > ProCache > CDN`
