# Install
```bash
npm install
```

# Configuration
- Create a spotify app at https://developer.spotify.com/dashboard and in its settings set a redirect URI to `http://localhost:8888/callback`.

- Copy the `.env.example` file to `.env` and fill in the `CLIENT_ID` and `CLIENT_SECRET` values.

- Run the token server with `npm run spotify-token`.

- Open `http://localhost:8888` in your browser and authorize the app.

- Fill in the `SPOTIFY_TOKEN` value in `.env` with the `access_token` displayed in your browser.

# Usage
```bash
npm start
```