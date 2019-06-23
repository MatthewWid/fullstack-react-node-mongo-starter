# Full-Stack React, Node and MongoDB Starter Kit

Easily get up and running on a full-stack project and stop wasting time with boilerplating.

**Front-End Technologies**
* React
* React-Router
* Webpack
* Babel
* Axios
* SASS / SCSS

**Back-End**
* Node.js
* MongoDB
* Mongoose
* Express
* Pug

# Features

* **Model-View-Controller** architecture to keep your code organised.
* Client-side routing with React Router and server-side routing for API endpoints.
* webpack, Babel and SASS transpilation for ES6, JSX and CSS.
* Zero-effort cache-busting when in production mode.
* Automatic route error handling.
* Easily extensible and highly organised webpack configuration files for development and production.

# Get Started

1. Clone `git clone https://github.com/MatthewWid/fullstack-react-node-mongo-starter.git`.
2. Install dependencies `npm i` or `yarn`.
3. Rename `variables.env.sample` to `variables.env` and change `PORT` to `8080` and `DATABASE_URL` to your MongoDB URI.
4. Transpile code and start the server `npm run start` or `yarn start`.
5. Visit your application `http://localhost:8080`.

Clear out the template code for the welcome page:

1. Delete the contents of the `App` component in `/src/js/components/App.js`.
2. Delete `exports.ping` in `/src/controllers/baseController.js`.
3. Delete `router.get("/ping" ...` in `/src/routes/api.js`.
4. Delete the contents of `/src/scss/global.scss` and `/src/scss/_colours.scss`.

To switch between development and production mode change the environment variable `NODE_ENV` in `variables.env` to `development` or `production` respectively.

# Commands

* `npm run dev` - Run and automatically restart the webpack and Express server on code changes.
* `npm run start` - Compile build artifacts and run the Express server.

---

* `npm run server` - Run the Express server.
* `npm run server:watch` - Run the Express server and restart on code changes.
* `npm run build` - Compile build artifacts into `/public/` directory with webpack.
* `npm run build:watch` - Run webpack in watch mode.

# Add webpack Output Bundles

## Create New webpack Entry Points

To add a new JS bundle file simply add another key/value pair in `config.entry` in `/config/webpack.common.config.js` in the following format:

	"js/NAME": path.join(SRCDIR_JS, "NAME.js"),

And the same with SASS/CSS bundle files:

	"css/NAME": path.join(SRCDIR_CSS, "NAME.scss"),

## Include the new Bundle in the Page

In your Pug template you can include a new JS bundle with a `<script>` tag:

	block scripts
		if manifest
			...
			script(src=manifest["js/NAME.js"])

To include a new CSS bundle use a `<link>` tag:

	block head
		if manifest
			...
			link(rel="stylesheet" href=manifest["css/NAME.css"])

## Code Placement

Client-side JS source code should be in the `/src/js/` directory.  
SASS/CSS source code should be in the `/src/scss/` directory.

JS and CSS build artifacts will be created in the `/public/js/` and `/public/css/` directories respectively. Vendor modules (from `node_modules`) are split from the main bundle into a separate `vendor.js` chunk file that is included in every page.
