import { NormalizeOAS, createClient } from "fets";
import {spotifyOAS} from "./oas.js";
import * as dotenv from "dotenv";
dotenv.config();

const spotifyToken = process.env.SPOTIFY_TOKEN;
if (!spotifyToken) {
  throw new Error("Please set SPOTIFY_TOKEN in your .env file");
}

const client = createClient<NormalizeOAS<typeof spotifyOAS>>({
  endpoint: "https://api.spotify.com/v1",
});

const response = await client["/users/{user_id}/playlists"].get({
  headers: {
    Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`,
  },
  params: {
    user_id: "1150651118",
  },
});

if (!response.ok) {
  throw new Error(response.statusText);
}

const artist = await response.json();
console.log(artist);
