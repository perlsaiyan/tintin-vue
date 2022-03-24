Vuetify visualizations in Tintin++

You'll need the websocat utility (https://github.com/vi/websocat) with the
binary somewhere in your path.

There are three parts included in this repo:

1. The websocket server - In the ws/ folder, run node server.js, which will
launch a websocket server on port 9595.

2. The Single Page App (SPA) - In the spa folder, run 'npm run serve' to start
the vuetify app.  It will give you the URL to hit.

3. Tintin++ files - the tt folder contains the minimum required stuff to
connect to the websocket port.

Once in tt++, with a #run session named #socket, you can pass information to
the SPA.  I created an alias in my regular session:

#alias expupdate {#socket EXPGOAL:%0}

The browser should more or less immediately update the progress bar.

