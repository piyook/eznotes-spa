# ez-note DEMO 

## About
```
This is a simple DEMO SPA application using VUE-3 designed to use a custom backend API (ez-notes API).
The App allows users to login and create noticeboards for a topic and then attach post-it notes
to each noticeboard.
Noticeboard and note colours can be customised.
```

### Using
```
The project needs to be built and the generated dist folder contents loaded into the public folder 
of the chosen webserver.
The htaccess file (for apache) or the config file (for nginx) need to be set-up so as to direct 
all url paths to theindex.html for the vue-router to work 
(see vue docs - https://cli.vuejs.org/guide/deployment.html)

IMPORTANT - The ez-notes API backend needs to be set-up to be available in a public/api folder 
with the remaining non-public API files stored outside the public folder one directory level down.
See ez-notes-API README for information.

When using vue-cli as a development server, a proxy is used and defined in the vue.config.js file 
to overcome CORS issues cause by sending requests from localhost:8080 (VUE webpack devserver port) 
to localhost:3000 (API port if using XAMPP or docker).

```

