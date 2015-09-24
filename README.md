## Debug express code
Node inspector allow debug node server code in a Chrome Developer Tools panel
```
npm install -g node-inspector
```

Once installed you need to open a new Terminal and run this command in the root of the project:

```
node-inspector --web-port=8200 &
```

Now set in `gulpfile.babel.js` file in `serve` task the variable `debug_activated` to `true` and start developement:

```
gulp start:dev
```
