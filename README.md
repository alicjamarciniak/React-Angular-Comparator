# Description
* Three micro frontends built with different technologies (React v15, React v0.14, and Angular)
* Each micro frontend is wrapped in Web Components
* Integration happen through another high-level Web Component
* Micro frontends are imported using HTML imports
* The main application is automatically rendered when the main script loads
* CDNs are used for the web components polyfills and bootstrap styling
* Each micro frontend distribution contains an index.html that will self initialize
* The application allows to manually load each different micro frontend on-demand
* The application allows to change the title of each frontend loaded on-demand

Note: Ideally these micro frontends will come from remote servers, but take in consideration that most servers will block [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) by default.

# How to
In order to run this project you will need to:
* manually build each `microfrontend` individually using `yarn install`
* install the node modules for the integration app using `yarn install`
* run `yarn start` to build each micro frontend and trigger the dev server instance