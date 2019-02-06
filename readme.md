# Church Content Manager [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Will Take Input and produce Output!


## Dev

```
$ npm install
```

### Run

```
$ npm start
```

### Build

```
$ npm run build
```

Builds the app for macOS, Linux, and Windows, using [electron-packager](https://github.com/electron-userland/electron-packager).


## License

The Unlicense © [<%= name %>](<%= website %>)

---

# TODOS
* Add Libs to Create Content
* Better Readme
* Settings, etc
* Online Sync-Server (Token, Save all info, but no real assets) (php + mysql (one table, 4 fields: churchname + token + JSON + passwd (if set = private)))
  * GET sync.php?token=XXX <-- return JSON
  * POST sync.php?token=XXX (body:JSON) <-- Save JSON for Token (update or insert)
  * GET info.php <-- list of churches + token
 * https://stackoverflow.com/questions/36773711/passing-data-to-windows-in-electron
 * https://github.com/maximegris/angular-electron
