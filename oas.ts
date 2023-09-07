export const spotifyOAS = {
  openapi: "3.0.3",
  info: {
    description:
      'You can use Spotify\'s Web API to discover music and podcasts, manage your Spotify library, control audio playback, and much more. Browse our available Web API endpoints using the sidebar at left, or via the navigation bar on top of this page on smaller screens.\n\nIn order to make successful Web API requests your app will need a valid access token. One can be obtained through <a href="https://developer.spotify.com/documentation/general/guides/authorization-guide/">OAuth 2.0</a>.\n\nThe base URI for all Web API requests is `https://api.spotify.com/v1`.\n\nNeed help? See our <a href="https://developer.spotify.com/documentation/web-api/guides/">Web API guides</a> for more information, or visit the <a href="https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer">Spotify for Developers community forum</a> to ask questions and connect with other developers.\n',
    version: "1.0.0",
    title: "Spotify Web API",
    termsOfService: "https://developer.spotify.com/terms/",
    contact: {
      name: "Spotify for Developers Community",
      url: "https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer",
    },
  },
  servers: [
    {
      url: "https://api.spotify.com/v1",
    },
  ],
  tags: [
    {
      name: "Albums",
    },
    {
      name: "Artists",
    },
    {
      name: "Audiobooks",
    },
    {
      name: "Categories",
    },
    {
      name: "Chapters",
    },
    {
      name: "Episodes",
    },
    {
      name: "Library",
    },
    {
      name: "Genres",
    },
    {
      name: "Markets",
    },
    {
      name: "Player",
    },
    {
      name: "Playlists",
    },
    {
      name: "Search",
    },
    {
      name: "Shows",
    },
    {
      name: "Tracks",
    },
    {
      name: "Users",
    },
  ],
  paths: {
    "/albums/{id}": {
      get: {
        operationId: "get-an-album",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataPolicyList",
        },
        tags: ["Albums"],
        summary: "Get Album\n",
        description: "Get Spotify catalog information for a single album.\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathAlbumId",
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/OneAlbum",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/albums": {
      get: {
        operationId: "get-multiple-albums",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataPolicyList",
        },
        tags: ["Albums"],
        summary: "Get Several Albums\n",
        description:
          "Get Spotify catalog information for multiple albums identified by their Spotify IDs.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryAlbumIds",
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/ManyAlbums",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/albums/{id}/tracks": {
      get: {
        operationId: "get-an-albums-tracks",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataPolicyList",
        },
        tags: ["Albums", "Tracks"],
        summary: "Get Album Tracks\n",
        description:
          "Get Spotify catalog information about an album’s tracks.\nOptional parameters can be used to limit the number of tracks returned.\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathAlbumId",
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
          {
            $ref: "#/components/parameters/QueryLimit",
          },
          {
            $ref: "#/components/parameters/QueryOffset",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/PagingSimplifiedTrackObject",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/artists/{id}": {
      get: {
        tags: ["Artists"],
        operationId: "get-an-artist",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataPolicyList",
        },
        summary: "Get Artist\n",
        description:
          "Get Spotify catalog information for a single artist identified by their unique Spotify ID.\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathArtistId",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/OneArtist",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/artists": {
      get: {
        tags: ["Artists"],
        operationId: "get-multiple-artists",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataPolicyList",
        },
        summary: "Get Several Artists\n",
        description:
          "Get Spotify catalog information for several artists based on their Spotify IDs.\n",
        parameters: [
          {
            name: "ids",
            required: true,
            in: "query",
            schema: {
              title: "Spotify Artist IDs",
              description:
                "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the artists. Maximum: 50 IDs.\n",
              example:
                "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/ManyArtists",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/artists/{id}/albums": {
      get: {
        tags: ["Artists", "Albums"],
        operationId: "get-an-artists-albums",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataPolicyList",
        },
        summary: "Get Artist's Albums\n",
        description:
          "Get Spotify catalog information about an artist's albums.\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathArtistId",
          },
          {
            $ref: "#/components/parameters/QueryIncludeGroups",
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
          {
            $ref: "#/components/parameters/QueryLimit",
          },
          {
            $ref: "#/components/parameters/QueryOffset",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/PagingArtistDiscographyAlbumObject",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/artists/{id}/top-tracks": {
      get: {
        tags: ["Artists", "Tracks"],
        operationId: "get-an-artists-top-tracks",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataPolicyList",
        },
        summary: "Get Artist's Top Tracks\n",
        description:
          "Get Spotify catalog information about an artist's top tracks by country.\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathArtistId",
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/ManyTracks",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/artists/{id}/related-artists": {
      get: {
        tags: ["Artists"],
        operationId: "get-an-artists-related-artists",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataPolicyList",
        },
        summary: "Get Artist's Related Artists\n",
        description:
          "Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathArtistId",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/ManyArtists",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/shows/{id}": {
      get: {
        tags: ["Shows"],
        operationId: "get-a-show",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataPolicyList",
        },
        summary: "Get Show\n",
        description:
          "Get Spotify catalog information for a single show identified by its\nunique Spotify ID.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryMarket",
          },
          {
            $ref: "#/components/parameters/PathShowId",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/OneShow",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-read-playback-position"],
          },
        ],
      },
    },
    "/shows": {
      get: {
        tags: ["Shows"],
        operationId: "get-multiple-shows",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataPolicyList",
        },
        summary: "Get Several Shows\n",
        description:
          "Get Spotify catalog information for several shows based on their Spotify IDs.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryMarket",
          },
          {
            $ref: "#/components/parameters/QueryShowIds",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/ManySimplifiedShows",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/shows/{id}/episodes": {
      get: {
        tags: ["Shows", "Episodes"],
        operationId: "get-a-shows-episodes",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataPolicyList",
        },
        summary: "Get Show Episodes\n",
        description:
          "Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathShowId",
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
          {
            $ref: "#/components/parameters/QueryLimit",
          },
          {
            $ref: "#/components/parameters/QueryOffset",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/PagingSimplifiedEpisodeObject",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-read-playback-position"],
          },
        ],
      },
    },
    "/episodes/{id}": {
      get: {
        tags: ["Episodes"],
        operationId: "get-an-episode",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataPolicyList",
        },
        summary: "Get Episode\n",
        description:
          "Get Spotify catalog information for a single episode identified by its\nunique Spotify ID.\n",
        parameters: [
          {
            name: "id",
            required: true,
            in: "path",
            schema: {
              title: "Get an Episode",
              description:
                "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.",
              example: "512ojhOuo1ktJprKbVcKyQ",
              type: "string",
            },
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/OneEpisode",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-read-playback-position"],
          },
        ],
      },
    },
    "/episodes": {
      get: {
        tags: ["Episodes"],
        operationId: "get-multiple-episodes",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataPolicyList",
        },
        summary: "Get Several Episodes\n",
        description:
          "Get Spotify catalog information for several episodes based on their Spotify IDs.\n",
        parameters: [
          {
            name: "ids",
            required: true,
            in: "query",
            schema: {
              title: "Ids",
              description:
                "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the episodes. Maximum: 50 IDs.\n",
              example: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
              type: "string",
            },
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/ManyEpisodes",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-read-playback-position"],
          },
        ],
      },
    },
    "/audiobooks/{id}": {
      get: {
        operationId: "get-an-audiobook",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataPolicyList",
        },
        tags: ["Audiobooks"],
        summary: "Get an Audiobook\n",
        description:
          "Get Spotify catalog information for a single audiobook.<br />\n**Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathAudiobookId",
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/OneAudiobook",
          },
          400: {
            $ref: "#/components/responses/BadRequest",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          404: {
            $ref: "#/components/responses/NotFound",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/audiobooks": {
      get: {
        operationId: "get-multiple-audiobooks",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataPolicyList",
        },
        tags: ["Audiobooks"],
        summary: "Get Several Audiobooks\n",
        description:
          "Get Spotify catalog information for several audiobooks identified by their Spotify IDs.<br />\n**Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryAudiobookIds",
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/ManyAudiobooks",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/audiobooks/{id}/chapters": {
      get: {
        operationId: "get-audiobook-chapters",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataPolicyList",
        },
        tags: ["Audiobooks", "Chapters"],
        summary: "Get Audiobook Chapters\n",
        description:
          "Get Spotify catalog information about an audiobook's chapters.<br />\n**Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathAudiobookId",
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
          {
            $ref: "#/components/parameters/QueryLimit",
          },
          {
            $ref: "#/components/parameters/QueryOffset",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/PagingSimplifiedChapterObject",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/me/audiobooks": {
      get: {
        tags: ["Audiobooks", "Library"],
        operationId: "get-users-saved-audiobooks",
        summary: "Get User's Saved Audiobooks\n",
        description:
          "Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryLimit",
          },
          {
            $ref: "#/components/parameters/QueryOffset",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/PagingSimplifiedAudiobookObject",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-read"],
          },
        ],
      },
      put: {
        tags: ["Audiobooks", "Library"],
        operationId: "save-audiobooks-user",
        summary: "Save Audiobooks for Current User\n",
        description:
          "Save one or more audiobooks to the current Spotify user's library.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryAudiobookIds",
          },
        ],
        responses: {
          200: {
            description: "Audiobook(s) are saved to the library",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-modify"],
          },
        ],
      },
      delete: {
        tags: ["Audiobooks", "Library"],
        operationId: "remove-audiobooks-user",
        summary: "Remove User's Saved Audiobooks\n",
        description:
          "Remove one or more audiobooks from the Spotify user's library.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryAudiobookIds",
          },
        ],
        responses: {
          200: {
            description: "Audiobook(s) have been removed from the library",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-modify"],
          },
        ],
      },
    },
    "/me/audiobooks/contains": {
      get: {
        tags: ["Audiobooks", "Library"],
        operationId: "check-users-saved-audiobooks",
        summary: "Check User's Saved Audiobooks\n",
        description:
          "Check if one or more audiobooks are already saved in the current Spotify user's library.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryAudiobookIds",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/ArrayOfBooleans",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-read"],
          },
        ],
      },
    },
    "/chapters/{id}": {
      get: {
        operationId: "get-a-chapter",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataPolicyList",
        },
        tags: ["Chapters"],
        summary: "Get a Chapter\n",
        description:
          "Get Spotify catalog information for a single chapter.<br />\n**Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathChapterId",
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/OneChapter",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/chapters": {
      get: {
        operationId: "get-several-chapters",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataPolicyList",
        },
        tags: ["Chapters"],
        summary: "Get Several Chapters\n",
        description:
          "Get Spotify catalog information for several chapters identified by their Spotify IDs.<br />\n**Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryChapterIds",
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/ManyChapters",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/tracks/{id}": {
      get: {
        tags: ["Tracks"],
        operationId: "get-track",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataWithMachineLearningPolicyList",
        },
        summary: "Get Track\n",
        description:
          "Get Spotify catalog information for a single track identified by its\nunique Spotify ID.\n",
        parameters: [
          {
            name: "id",
            required: true,
            in: "path",
            schema: {
              title: "Spotify Track ID",
              description:
                "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the track.\n",
              example: "11dFghVXANMlKmJXsNCbNl",
              type: "string",
            },
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/OneTrack",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/tracks": {
      get: {
        tags: ["Tracks"],
        operationId: "get-several-tracks",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataWithMachineLearningPolicyList",
        },
        summary: "Get Several Tracks\n",
        description:
          "Get Spotify catalog information for multiple tracks based on their Spotify IDs.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryMarket",
          },
          {
            $ref: "#/components/parameters/QueryTrackIds",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/ManyTracks",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/search": {
      get: {
        tags: ["Search"],
        operationId: "search",
        "x-spotify-policy-list": [
          {
            $ref: "#/components/x-spotify-policy/policies/MachineLearning",
          },
        ],
        summary: "Search for Item\n",
        description:
          "Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks\nthat match a keyword string.<br />\n**Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**\n",
        parameters: [
          {
            name: "q",
            required: true,
            in: "query",
            schema: {
              title: "Query",
              description:
                "Your search query.\n\nYou can narrow down your search using field filters. The available filters are `album`, `artist`, `track`, `year`, `upc`, `tag:hipster`, `tag:new`, `isrc`, and `genre`. Each field filter only applies to certain result types.\n\nThe `artist` and `year` filters can be used while searching albums, artists and tracks. You can filter on a single `year` or a range (e.g. 1955-1960).<br />\nThe `album` filter can be used while searching albums and tracks.<br />\nThe `genre` filter can be used while searching artists and tracks.<br />\nThe `isrc` and `track` filters can be used while searching tracks.<br />\nThe `upc`, `tag:new` and `tag:hipster` filters can only be used while searching albums. The `tag:new` filter will return albums released in the past two weeks and `tag:hipster` can be used to return only albums with the lowest 10% popularity.<br />\n",
              example: "remaster%20track:Doxy%20artist:Miles%20Davis",
              type: "string",
            },
          },
          {
            name: "type",
            required: true,
            explode: false,
            in: "query",
            schema: {
              title: "Item type",
              description:
                'A comma-separated list of item types to search across. Search results include hits\nfrom all the specified item types. For example: `q=abacab&type=album,track` returns\nboth albums and tracks matching "abacab".\n',
              items: {
                type: "string",
                enum: [
                  "album",
                  "artist",
                  "playlist",
                  "track",
                  "show",
                  "episode",
                  "audiobook",
                ],
              },
              type: "array",
            },
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
          {
            name: "limit",
            required: false,
            in: "query",
            schema: {
              title: "Limit",
              description:
                "The maximum number of results to return in each item type.\n",
              default: 20,
              example: 10,
              type: "integer",
              minimum: 0,
              maximum: 50,
            },
          },
          {
            name: "offset",
            required: false,
            in: "query",
            schema: {
              title: "Offset",
              description:
                "The index of the first result to return. Use\nwith limit to get the next page of search results.\n",
              default: 0,
              minimum: 0,
              maximum: 1000,
              example: 5,
              type: "integer",
            },
          },
          {
            name: "include_external",
            required: false,
            in: "query",
            schema: {
              title: "Include External",
              description:
                "If `include_external=audio` is specified it signals that the client can play externally hosted audio content, and marks\nthe content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.\n",
              type: "string",
              enum: ["audio"],
            },
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/SearchItems",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/me": {
      get: {
        tags: ["Users"],
        operationId: "get-current-users-profile",
        summary: "Get Current User's Profile\n",
        description:
          "Get detailed profile information about the current user (including the\ncurrent user's username).\n",
        responses: {
          200: {
            $ref: "#/components/responses/OnePrivateUser",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-read-private", "user-read-email"],
          },
        ],
      },
    },
    "/playlists/{playlist_id}": {
      get: {
        tags: ["Playlists"],
        operationId: "get-playlist",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataWithMachineLearningPolicyList",
        },
        summary: "Get Playlist\n",
        description: "Get a playlist owned by a Spotify user.\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathPlaylistId",
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
          {
            name: "fields",
            required: false,
            in: "query",
            schema: {
              title: "Fields",
              description:
                "Filters for the query: a comma-separated list of the\nfields to return. If omitted, all fields are returned. For example, to get\njust the playlist''s description and URI: `fields=description,uri`. A dot\nseparator can be used to specify non-reoccurring fields, while parentheses\ncan be used to specify reoccurring fields within objects. For example, to\nget just the added date and user ID of the adder: `fields=tracks.items(added_at,added_by.id)`.\nUse multiple parentheses to drill down into nested objects, for example: `fields=tracks.items(track(name,href,album(name,href)))`.\nFields can be excluded by prefixing them with an exclamation mark, for example:\n`fields=tracks.items(track(name,href,album(!name,href)))`\n",
              example: "items(added_by.id,track(name,href,album(name,href)))",
              type: "string",
            },
          },
          {
            $ref: "#/components/parameters/QueryAdditionalTypes",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/OnePlaylist",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
      put: {
        tags: ["Playlists", "Library"],
        operationId: "change-playlist-details",
        summary: "Change Playlist Details\n",
        description:
          "Change a playlist's name and public/private state. (The user must, of\ncourse, own the playlist.)\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathPlaylistId",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                example: {
                  name: "Updated Playlist Name",
                  description: "Updated playlist description",
                  public: false,
                },
                type: "object",
                additionalProperties: true,
                properties: {
                  name: {
                    type: "string",
                    description:
                      'The new name for the playlist, for example `"My New Playlist Title"`\n',
                  },
                  public: {
                    type: "boolean",
                    description:
                      "If `true` the playlist will be public, if `false` it will be private.\n",
                  },
                  collaborative: {
                    type: "boolean",
                    description:
                      "If `true`, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. <br/>\n_**Note**: You can only set `collaborative` to `true` on non-public playlists._\n",
                  },
                  description: {
                    type: "string",
                    description:
                      "Value for playlist description as displayed in Spotify Clients and in the Web API.\n",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Playlist updated",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["playlist-modify-public", "playlist-modify-private"],
          },
        ],
      },
    },
    "/playlists/{playlist_id}/tracks": {
      get: {
        tags: ["Playlists", "Tracks"],
        operationId: "get-playlists-tracks",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataWithMachineLearningPolicyList",
        },
        summary: "Get Playlist Items\n",
        description:
          "Get full details of the items of a playlist owned by a Spotify user.\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathPlaylistId",
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
          {
            name: "fields",
            required: false,
            in: "query",
            schema: {
              title: "Fields",
              description:
                "Filters for the query: a comma-separated list of the\nfields to return. If omitted, all fields are returned. For example, to get\njust the total number of items and the request limit:<br/>`fields=total,limit`<br/>A\ndot separator can be used to specify non-reoccurring fields, while parentheses\ncan be used to specify reoccurring fields within objects. For example, to\nget just the added date and user ID of the adder:<br/>`fields=items(added_at,added_by.id)`<br/>Use\nmultiple parentheses to drill down into nested objects, for example:<br/>`fields=items(track(name,href,album(name,href)))`<br/>Fields\ncan be excluded by prefixing them with an exclamation mark, for example:<br/>`fields=items.track.album(!external_urls,images)`\n",
              example: "items(added_by.id,track(name,href,album(name,href)))",
              type: "string",
            },
          },
          {
            $ref: "#/components/parameters/QueryLimit",
          },
          {
            $ref: "#/components/parameters/QueryOffset",
          },
          {
            $ref: "#/components/parameters/QueryAdditionalTypes",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/PagingPlaylistTrackObject",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["playlist-read-private"],
          },
        ],
      },
      post: {
        tags: ["Playlists", "Tracks"],
        operationId: "add-tracks-to-playlist",
        summary: "Add Items to Playlist\n",
        description: "Add one or more items to a user's playlist.\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathPlaylistId",
          },
          {
            name: "position",
            required: false,
            in: "query",
            schema: {
              title: "Position (append by default)",
              description:
                "The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0`; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they are listed in the query string or request body.\n",
              example: 0,
              type: "integer",
            },
          },
          {
            name: "uris",
            required: false,
            in: "query",
            schema: {
              title: "Spotify Track URIs",
              description:
                "A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add, can be track or episode URIs. For example:<br/>`uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:track:1301WleyT98MSxVHPZCA6M, spotify:episode:512ojhOuo1ktJprKbVcKyQ`<br/>A maximum of 100 items can be added in one request. <br/>\n_**Note**: it is likely that passing a large number of item URIs as a query parameter will exceed the maximum length of the request URI. When adding a large number of items, it is recommended to pass them in the request body, see below._\n",
              example:
                "spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M",
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                additionalProperties: true,
                properties: {
                  uris: {
                    description:
                      'A JSON array of the [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}`<br/>A maximum of 100 items can be added in one request. _**Note**: if the `uris` parameter is present in the query string, any URIs listed here in the body will be ignored._\n',
                    type: "array",
                    items: {
                      type: "string",
                    },
                  },
                  position: {
                    description:
                      'The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0` ; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}`\n',
                    type: "integer",
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            $ref: "#/components/responses/PlaylistSnapshotId",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["playlist-modify-public", "playlist-modify-private"],
          },
        ],
      },
      put: {
        tags: ["Playlists", "Tracks"],
        operationId: "reorder-or-replace-playlists-tracks",
        summary: "Update Playlist Items\n",
        description:
          "Either reorder or replace items in a playlist depending on the request's parameters.\nTo reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.\nTo replace items, include `uris` as either a query parameter or in the request's body.\nReplacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.\n<br/>\n**Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.\nThese operations can't be applied together in a single request.\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathPlaylistId",
          },
          {
            name: "uris",
            required: false,
            in: "query",
            schema: {
              title: "Spotify Track URIs",
              description:
                "A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to set, can be track or episode URIs. For example: `uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M,spotify:episode:512ojhOuo1ktJprKbVcKyQ`<br/>A maximum of 100 items can be set in one request.\n",
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                example: {
                  range_start: 1,
                  insert_before: 3,
                  range_length: 2,
                },
                type: "object",
                additionalProperties: true,
                properties: {
                  uris: {
                    type: "array",
                    items: {
                      type: "string",
                    },
                  },
                  range_start: {
                    type: "integer",
                    description:
                      "The position of the first item to be reordered.\n",
                  },
                  insert_before: {
                    type: "integer",
                    description:
                      "The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0.\n",
                  },
                  range_length: {
                    type: "integer",
                    description:
                      "The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2.\n",
                  },
                  snapshot_id: {
                    type: "string",
                    description:
                      "The playlist's snapshot ID against which you want to make the changes.\n",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            $ref: "#/components/responses/PlaylistSnapshotId",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["playlist-modify-public", "playlist-modify-private"],
          },
        ],
      },
      delete: {
        tags: ["Playlists", "Tracks"],
        operationId: "remove-tracks-playlist",
        summary: "Remove Playlist Items\n",
        description: "Remove one or more items from a user's playlist.\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathPlaylistId",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["tracks"],
                properties: {
                  tracks: {
                    type: "array",
                    description:
                      'An array of objects containing [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) of the tracks or episodes to remove.\nFor example: `{ "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }`. A maximum of 100 objects can be sent at once.\n',
                    items: {
                      type: "object",
                      properties: {
                        uri: {
                          type: "string",
                          description: "Spotify URI",
                        },
                      },
                    },
                  },
                  snapshot_id: {
                    type: "string",
                    description:
                      "The playlist's snapshot ID against which you want to make the changes.\nThe API will validate that the specified items exist and in the specified positions and make the changes,\neven if more recent changes have been made to the playlist.\n",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            $ref: "#/components/responses/PlaylistSnapshotId",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["playlist-modify-public", "playlist-modify-private"],
          },
        ],
      },
    },
    "/me/playlists": {
      get: {
        tags: ["Playlists", "Library"],
        operationId: "get-a-list-of-current-users-playlists",
        summary: "Get Current User's Playlists\n",
        description:
          "Get a list of the playlists owned or followed by the current Spotify\nuser.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryLimit",
          },
          {
            name: "offset",
            required: false,
            in: "query",
            schema: {
              title: "Offset",
              description:
                "'The index of the first playlist to return. Default:\n0 (the first object). Maximum offset: 100.000\\. Use with `limit` to get the\nnext set of playlists.'\n",
              default: 0,
              example: 5,
              type: "integer",
            },
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/PagedPlaylists",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["playlist-read-private"],
          },
        ],
      },
    },
    "/me/albums": {
      get: {
        tags: ["Albums", "Library"],
        operationId: "get-users-saved-albums",
        summary: "Get User's Saved Albums\n",
        description:
          "Get a list of the albums saved in the current Spotify user's 'Your Music' library.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryLimit",
          },
          {
            $ref: "#/components/parameters/QueryOffset",
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/PagingSavedAlbumObject",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-read"],
          },
        ],
      },
      put: {
        tags: ["Albums", "Library"],
        operationId: "save-albums-user",
        summary: "Save Albums for Current User\n",
        description:
          "Save one or more albums to the current user's 'Your Music' library.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryAlbumIds",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                additionalProperties: true,
                properties: {
                  ids: {
                    type: "array",
                    description:
                      'A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n',
                    items: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "The album is saved",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-modify"],
          },
        ],
      },
      delete: {
        tags: ["Albums", "Library"],
        operationId: "remove-albums-user",
        summary: "Remove Users' Saved Albums\n",
        description:
          "Remove one or more albums from the current user's 'Your Music' library.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryAlbumIds",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                additionalProperties: true,
                properties: {
                  ids: {
                    type: "array",
                    description:
                      'A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n',
                    items: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Album(s) have been removed from the library",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-modify"],
          },
        ],
      },
    },
    "/me/albums/contains": {
      get: {
        tags: ["Albums", "Library"],
        operationId: "check-users-saved-albums",
        summary: "Check User's Saved Albums\n",
        description:
          "Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryAlbumIds",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/ArrayOfBooleans",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-read"],
          },
        ],
      },
    },
    "/me/tracks": {
      get: {
        tags: ["Tracks", "Library"],
        operationId: "get-users-saved-tracks",
        summary: "Get User's Saved Tracks\n",
        description:
          "Get a list of the songs saved in the current Spotify user's 'Your Music' library.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryMarket",
          },
          {
            $ref: "#/components/parameters/QueryLimit",
          },
          {
            $ref: "#/components/parameters/QueryOffset",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/PagingSavedTrackObject",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-read"],
          },
        ],
      },
      put: {
        tags: ["Tracks", "Library"],
        operationId: "save-tracks-user",
        summary: "Save Tracks for Current User\n",
        description:
          "Save one or more tracks to the current user's 'Your Music' library.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryTrackIds",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                additionalProperties: true,
                required: ["uris"],
                properties: {
                  ids: {
                    type: "array",
                    description:
                      'A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n',
                    items: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Track saved",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-modify"],
          },
        ],
      },
      delete: {
        tags: ["Tracks", "Library"],
        operationId: "remove-tracks-user",
        summary: "Remove User's Saved Tracks\n",
        description:
          "Remove one or more tracks from the current user's 'Your Music' library.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryTrackIds",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                additionalProperties: true,
                properties: {
                  ids: {
                    type: "array",
                    description:
                      'A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n',
                    items: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Track removed",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-modify"],
          },
        ],
      },
    },
    "/me/tracks/contains": {
      get: {
        tags: ["Tracks", "Library"],
        operationId: "check-users-saved-tracks",
        summary: "Check User's Saved Tracks\n",
        description:
          "Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryTrackIds",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/ArrayOfBooleans",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-read"],
          },
        ],
      },
    },
    "/me/episodes": {
      get: {
        tags: ["Episodes", "Library"],
        operationId: "get-users-saved-episodes",
        summary: "Get User's Saved Episodes\n",
        description:
          "Get a list of the episodes saved in the current Spotify user's library.<br/>\nThis API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryMarket",
          },
          {
            $ref: "#/components/parameters/QueryLimit",
          },
          {
            $ref: "#/components/parameters/QueryOffset",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/PagingSavedEpisodeObject",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-read", "user-read-playback-position"],
          },
        ],
      },
      put: {
        tags: ["Episodes", "Library"],
        operationId: "save-episodes-user",
        summary: "Save Episodes for Current User\n",
        description:
          "Save one or more episodes to the current user's library.<br/>\nThis API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).\n",
        parameters: [
          {
            name: "ids",
            required: true,
            in: "query",
            schema: {
              title: "Spotify Episodes IDs",
              description:
                "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 50 IDs.\n",
              example: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                additionalProperties: true,
                required: ["uris"],
                properties: {
                  ids: {
                    type: "array",
                    description:
                      "A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n",
                    items: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Episode saved",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-modify"],
          },
        ],
      },
      delete: {
        tags: ["Episodes", "Library"],
        operationId: "remove-episodes-user",
        summary: "Remove User's Saved Episodes\n",
        description:
          "Remove one or more episodes from the current user's library.<br/>\nThis API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryTrackIds",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                additionalProperties: true,
                properties: {
                  ids: {
                    type: "array",
                    description:
                      "A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n",
                    items: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Episode removed",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-modify"],
          },
        ],
      },
    },
    "/me/episodes/contains": {
      get: {
        tags: ["Episodes", "Library"],
        operationId: "check-users-saved-episodes",
        summary: "Check User's Saved Episodes\n",
        description:
          "Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>\nThis API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..\n",
        parameters: [
          {
            name: "ids",
            required: true,
            in: "query",
            schema: {
              title: "Spotify Episode IDs",
              description:
                "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the episodes. Maximum: 50 IDs.\n",
              example: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/ArrayOfBooleans",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-read"],
          },
        ],
      },
    },
    "/me/shows": {
      get: {
        tags: ["Shows", "Library"],
        operationId: "get-users-saved-shows",
        summary: "Get User's Saved Shows\n",
        description:
          "Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryLimit",
          },
          {
            $ref: "#/components/parameters/QueryOffset",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/PagingSavedShowObject",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-read"],
          },
        ],
      },
      put: {
        tags: ["Shows", "Library"],
        operationId: "save-shows-user",
        summary: "Save Shows for Current User\n",
        description:
          "Save one or more shows to current Spotify user's library.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryShowIds",
          },
        ],
        responses: {
          200: {
            description: "Show saved",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-modify"],
          },
        ],
      },
      delete: {
        tags: ["Shows", "Library"],
        operationId: "remove-shows-user",
        summary: "Remove User's Saved Shows\n",
        description:
          "Delete one or more shows from current Spotify user's library.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryShowIds",
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
        ],
        responses: {
          200: {
            description: "Show removed",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-modify"],
          },
        ],
      },
    },
    "/me/shows/contains": {
      get: {
        tags: ["Shows", "Library"],
        operationId: "check-users-saved-shows",
        summary: "Check User's Saved Shows\n",
        description:
          "Check if one or more shows is already saved in the current Spotify user's library.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryShowIds",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/ArrayOfBooleans",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-library-read"],
          },
        ],
      },
    },
    "/me/top/{type}": {
      get: {
        tags: ["Users", "Tracks", "Library"],
        operationId: "get-users-top-artists-and-tracks",
        summary: "Get User's Top Items\n",
        description:
          "Get the current user's top artists or tracks based on calculated affinity.\n",
        parameters: [
          {
            name: "type",
            required: true,
            in: "path",
            schema: {
              title: "Type",
              description:
                "The type of entity to return. Valid values: `artists` or `tracks`\n",
              enum: ["artists", "tracks"],
              type: "string",
            },
          },
          {
            name: "time_range",
            required: false,
            in: "query",
            schema: {
              title: "Time Range",
              description:
                "Over what time frame the affinities are computed. Valid values: `long_term` (calculated from several years of data and including all new data as it becomes available), `medium_term` (approximately last 6 months), `short_term` (approximately last 4 weeks). Default: `medium_term`\n",
              default: "medium_term",
              example: "medium_term",
              type: "string",
            },
          },
          {
            $ref: "#/components/parameters/QueryLimit",
          },
          {
            $ref: "#/components/parameters/QueryOffset",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/PagingArtistOrTrackObject",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-top-read"],
          },
        ],
      },
    },
    "/users/{user_id}": {
      get: {
        tags: ["Users"],
        operationId: "get-users-profile",
        summary: "Get User's Profile\n",
        description: "Get public profile information about a Spotify user.\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathUserId",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/OnePublicUser",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/users/{user_id}/playlists": {
      get: {
        tags: ["Playlists", "Users"],
        operationId: "get-list-users-playlists",
        summary: "Get User's Playlists\n",
        description:
          "Get a list of the playlists owned or followed by a Spotify user.\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathUserId",
          },
          {
            $ref: "#/components/parameters/QueryLimit",
          },
          {
            name: "offset",
            required: false,
            in: "query",
            schema: {
              title: "Offset",
              description:
                "The index of the first playlist to return. Default:\n0 (the first object). Maximum offset: 100.000\\. Use with `limit` to get the\nnext set of playlists.\n",
              default: 0,
              example: 5,
              type: "integer",
            },
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/PagedPlaylists",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["playlist-read-private", "playlist-read-collaborative"],
          },
        ],
      },
      post: {
        tags: ["Playlists", "Library"],
        operationId: "create-playlist",
        summary: "Create Playlist\n",
        description:
          "Create a playlist for a Spotify user. (The playlist will be empty until\nyou [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).)\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathUserId",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                example: {
                  name: "New Playlist",
                  description: "New playlist description",
                  public: false,
                },
                type: "object",
                additionalProperties: true,
                required: ["name"],
                properties: {
                  name: {
                    type: "string",
                    description:
                      'The name for the new playlist, for example `"Your Coolest Playlist"`. This name does not need to be unique; a user may have several playlists with the same name.\n',
                  },
                  public: {
                    type: "boolean",
                    description:
                      "Defaults to `true`. If `true` the playlist will be public, if `false` it will be private. To be able to create private playlists, the user must have granted the `playlist-modify-private` [scope](/documentation/web-api/concepts/scopes/#list-of-scopes)\n",
                  },
                  collaborative: {
                    type: "boolean",
                    description:
                      "Defaults to `false`. If `true` the playlist will be collaborative. _**Note**: to create a collaborative playlist you must also set `public` to `false`. To create collaborative playlists you must have granted `playlist-modify-private` and `playlist-modify-public` [scopes](/documentation/web-api/concepts/scopes/#list-of-scopes)._\n",
                  },
                  description: {
                    type: "string",
                    description:
                      "value for playlist description as displayed in Spotify Clients and in the Web API.\n",
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            $ref: "#/components/responses/OnePlaylist",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["playlist-modify-public", "playlist-modify-private"],
          },
        ],
      },
    },
    "/playlists/{playlist_id}/followers": {
      put: {
        tags: ["Users", "Playlists"],
        operationId: "follow-playlist",
        description: "Add the current user as a follower of a playlist.\n",
        summary: "Follow Playlist\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathPlaylistId",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                example: {
                  public: false,
                },
                type: "object",
                additionalProperties: true,
                properties: {
                  public: {
                    type: "boolean",
                    description:
                      "Defaults to `true`. If `true` the playlist will be included in user's public playlists, if `false` it will remain private.\n",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Playlist followed",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["playlist-modify-public", "playlist-modify-private"],
          },
        ],
      },
      delete: {
        tags: ["Users", "Playlists"],
        operationId: "unfollow-playlist",
        summary: "Unfollow Playlist\n",
        description: "Remove the current user as a follower of a playlist.\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathPlaylistId",
          },
        ],
        responses: {
          200: {
            description: "Playlist unfollowed",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["playlist-modify-public", "playlist-modify-private"],
          },
        ],
      },
    },
    "/browse/featured-playlists": {
      get: {
        tags: ["Playlists"],
        operationId: "get-featured-playlists",
        "x-spotify-policy-list": [
          {
            $ref: "#/components/x-spotify-policy/policies/MultipleIntegrations",
          },
        ],
        summary: "Get Featured Playlists\n",
        description:
          "Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).\n",
        parameters: [
          {
            name: "country",
            required: false,
            in: "query",
            schema: {
              title: "Country",
              description:
                "A country: an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Provide this parameter if you want the list of returned items to be relevant to a particular country. If omitted, the returned items will be relevant to all countries.\n",
              example: "SE",
              type: "string",
            },
          },
          {
            name: "locale",
            required: false,
            in: "query",
            schema: {
              title: "Locale",
              description:
                'The desired language, consisting of a lowercase [ISO 639-1 language code](http://en.wikipedia.org/wiki/ISO_639-1) and an uppercase [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning "Spanish (Mexico)". Provide this parameter if you want the results returned in a particular language (where available). <br/>\n_**Note**: if `locale` is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). The `locale` parameter, combined with the `country` parameter, may give odd results if not carefully matched. For example `country=SE&locale=de_DE` will return a list of categories relevant to Sweden but as German language strings._\n',
              example: "sv_SE",
              type: "string",
            },
          },
          {
            name: "timestamp",
            required: false,
            in: "query",
            schema: {
              title: "Timestamp",
              description:
                'A timestamp in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601): `yyyy-MM-ddTHH:mm:ss`. Use this parameter to specify the user\'s local time to get results tailored for that specific date and time in the day. If not provided, the response defaults to the current UTC time. Example: "2014-10-23T09:00:00" for a user whose local time is 9AM. If there were no featured playlists (or there is no data) at the specified time, the response will revert to the current UTC time.\n',
              example: "2014-10-23T09:00:00",
              type: "string",
            },
          },
          {
            $ref: "#/components/parameters/QueryLimit",
          },
          {
            $ref: "#/components/parameters/QueryOffset",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/PagedFeaturedPlaylists",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/browse/categories": {
      get: {
        tags: ["Categories"],
        operationId: "get-categories",
        summary: "Get Several Browse Categories\n",
        description:
          "Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).\n",
        parameters: [
          {
            name: "country",
            required: false,
            in: "query",
            schema: {
              title: "Country",
              description:
                "A country: an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Provide this parameter if you want to narrow the list of returned categories to those relevant to a particular country. If omitted, the returned items will be globally relevant.\n",
              example: "SE",
              type: "string",
            },
          },
          {
            name: "locale",
            required: false,
            in: "query",
            schema: {
              title: "Locale",
              description:
                'The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning "Spanish (Mexico)". Provide this parameter if you want the category metadata returned in a particular language. <br/>\n_**Note**: if `locale` is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). The `locale` parameter, combined with the `country` parameter, may give odd results if not carefully matched. For example `country=SE&locale=de_DE` will return a list of categories relevant to Sweden but as German language strings._\n',
              example: "sv_SE",
              type: "string",
            },
          },
          {
            $ref: "#/components/parameters/QueryLimit",
          },
          {
            $ref: "#/components/parameters/QueryOffset",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/PagedCategories",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/browse/categories/{category_id}": {
      get: {
        tags: ["Categories"],
        operationId: "get-a-category",
        summary: "Get Single Browse Category\n",
        description:
          "Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).\n",
        parameters: [
          {
            name: "category_id",
            required: true,
            in: "path",
            schema: {
              title: "Category ID",
              description:
                "The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.\n",
              example: "dinner",
              type: "string",
            },
          },
          {
            name: "country",
            required: false,
            in: "query",
            schema: {
              title: "Country",
              description:
                "A country: an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Provide this parameter to ensure that the category exists for a particular country.\n",
              example: "SE",
              type: "string",
            },
          },
          {
            name: "locale",
            required: false,
            in: "query",
            schema: {
              title: "Locale",
              description:
                "The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language.<br/> _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._\n",
              example: "sv_SE",
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/OneCategory",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/browse/categories/{category_id}/playlists": {
      get: {
        tags: ["Playlists", "Categories"],
        operationId: "get-a-categories-playlists",
        summary: "Get Category's Playlists\n",
        description:
          "Get a list of Spotify playlists tagged with a particular category.\n",
        parameters: [
          {
            name: "category_id",
            required: true,
            in: "path",
            schema: {
              title: "Category ID",
              description:
                "The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.\n",
              example: "dinner",
              type: "string",
            },
          },
          {
            name: "country",
            required: false,
            in: "query",
            schema: {
              title: "Country",
              description:
                "A country: an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Provide this parameter to ensure that the category exists for a particular country.\n",
              example: "SE",
              type: "string",
            },
          },
          {
            $ref: "#/components/parameters/QueryLimit",
          },
          {
            $ref: "#/components/parameters/QueryOffset",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/PagedFeaturedPlaylists",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/playlists/{playlist_id}/images": {
      get: {
        tags: ["Playlists"],
        operationId: "get-playlist-cover",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/metadataWithMachineLearningPolicyList",
        },
        summary: "Get Playlist Cover Image\n",
        description:
          "Get the current image associated with a specific playlist.\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathPlaylistId",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/ArrayOfImages",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
      put: {
        tags: ["Playlists"],
        operationId: "upload-custom-playlist-cover",
        summary: "Add Custom Playlist Cover Image\n",
        description:
          "Replace the image used to represent a specific playlist.\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathPlaylistId",
          },
        ],
        requestBody: {
          content: {
            "image/jpeg": {
              schema: {
                example:
                  "/9j/2wCEABoZGSccJz4lJT5CLy8vQkc9Ozs9R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0cBHCcnMyYzPSYmPUc9Mj1HR0dEREdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR//dAAQAAf/uAA5BZG9iZQBkwAAAAAH/wAARCAABAAEDACIAAREBAhEB/8QASwABAQAAAAAAAAAAAAAAAAAAAAYBAQAAAAAAAAAAAAAAAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwAAARECEQA/AJgAH//Z",
                format: "byte",
                type: "string",
                required: true,
                description:
                  "Base64 encoded JPEG image data, maximum payload size is 256 KB.",
              },
            },
          },
        },
        responses: {
          202: {
            description: "Image uploaded",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [
              "ugc-image-upload",
              "playlist-modify-public",
              "playlist-modify-private",
            ],
          },
        ],
      },
    },
    "/browse/new-releases": {
      get: {
        tags: ["Albums"],
        operationId: "get-new-releases",
        "x-spotify-policy-list": [
          {
            $ref: "#/components/x-spotify-policy/policies/MultipleIntegrations",
          },
        ],
        summary: "Get New Releases\n",
        description:
          "Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).\n",
        parameters: [
          {
            name: "country",
            required: false,
            in: "query",
            schema: {
              title: "Country",
              description:
                "A country: an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Provide this parameter if you want the list of returned items to be relevant to a particular country. If omitted, the returned items will be relevant to all countries.\n",
              example: "SE",
              type: "string",
            },
          },
          {
            $ref: "#/components/parameters/QueryLimit",
          },
          {
            $ref: "#/components/parameters/QueryOffset",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/PagedAlbums",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/me/following": {
      get: {
        tags: ["Users", "Library", "Artists"],
        operationId: "get-followed",
        summary: "Get Followed Artists\n",
        description: "Get the current user's followed artists.\n",
        parameters: [
          {
            name: "type",
            required: true,
            in: "query",
            schema: {
              title: "Item Type",
              description:
                "The ID type: currently only `artist` is supported.\n",
              enum: ["artist"],
              example: "artist",
              type: "string",
            },
          },
          {
            name: "after",
            required: false,
            in: "query",
            schema: {
              title: "After",
              description:
                "The last artist ID retrieved from the previous request.\n",
              example: "0I2XqVXqHScXjHhk6AYYRe",
              type: "string",
            },
          },
          {
            name: "limit",
            required: false,
            in: "query",
            schema: {
              title: "Limit",
              description:
                "The maximum number of items to return. Default: 20\\. Minimum: 1\\. Maximum: 50\\.\n",
              default: 20,
              example: 10,
              type: "integer",
              minimum: 0,
              maximum: 50,
            },
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/CursorPagedArtists",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-follow-read"],
          },
        ],
      },
      put: {
        tags: ["Users", "Artists", "Library"],
        operationId: "follow-artists-users",
        summary: "Follow Artists or Users\n",
        description:
          "Add the current user as a follower of one or more artists or other Spotify users.\n",
        parameters: [
          {
            name: "type",
            required: true,
            in: "query",
            schema: {
              title: "Item Type",
              description: "The ID type.\n",
              enum: ["artist", "user"],
              example: "artist",
              type: "string",
            },
          },
          {
            name: "ids",
            required: true,
            in: "query",
            schema: {
              title: "Spotify IDs",
              description:
                "A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids).\nA maximum of 50 IDs can be sent in one request.\n",
              example:
                "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                additionalProperties: true,
                required: ["ids"],
                properties: {
                  ids: {
                    type: "array",
                    description:
                      'A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids).\nFor example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n',
                    items: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          204: {
            description: "Artist or user followed",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-follow-modify"],
          },
        ],
      },
      delete: {
        tags: ["Users", "Artists", "Library"],
        operationId: "unfollow-artists-users",
        summary: "Unfollow Artists or Users\n",
        description:
          "Remove the current user as a follower of one or more artists or other Spotify users.\n",
        parameters: [
          {
            name: "type",
            required: true,
            in: "query",
            schema: {
              title: "Item Type",
              description: "The ID type: either `artist` or `user`.\n",
              enum: ["artist", "user"],
              example: "artist",
              type: "string",
            },
          },
          {
            name: "ids",
            required: true,
            in: "query",
            schema: {
              title: "Spotify IDs",
              description:
                "A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be sent in one request.\n",
              example:
                "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                additionalProperties: true,
                properties: {
                  ids: {
                    type: "array",
                    description:
                      'A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n',
                    items: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Artist or user unfollowed",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-follow-modify"],
          },
        ],
      },
    },
    "/me/following/contains": {
      get: {
        tags: ["Users", "Artists", "Library"],
        operationId: "check-current-user-follows",
        summary: "Check If User Follows Artists or Users\n",
        description:
          "Check to see if the current user is following one or more artists or other Spotify users.\n",
        parameters: [
          {
            name: "type",
            required: true,
            in: "query",
            schema: {
              title: "Item Type",
              description: "The ID type: either `artist` or `user`.\n",
              enum: ["artist", "user"],
              example: "artist",
              type: "string",
            },
          },
          {
            name: "ids",
            required: true,
            in: "query",
            schema: {
              title: "Spotify IDs",
              description:
                "A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) to check. For example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be sent in one request.\n",
              example:
                "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/ArrayOfBooleans",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-follow-read"],
          },
        ],
      },
    },
    "/playlists/{playlist_id}/followers/contains": {
      get: {
        tags: ["Users", "Playlists"],
        operationId: "check-if-user-follows-playlist",
        summary: "Check if Users Follow Playlist\n",
        description:
          "Check to see if one or more Spotify users are following a specified playlist.\n",
        parameters: [
          {
            $ref: "#/components/parameters/PathPlaylistId",
          },
          {
            name: "ids",
            required: true,
            in: "query",
            schema: {
              title: "Spotify user IDs",
              description:
                "A comma-separated list of [Spotify User IDs](/documentation/web-api/concepts/spotify-uris-ids) ; the ids of the users that you want to check to see if they follow the playlist. Maximum: 5 ids.\n",
              example: "jmperezperez,thelinmichael,wizzler",
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/ArrayOfBooleans",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/audio-features": {
      get: {
        tags: ["Tracks"],
        operationId: "get-several-audio-features",
        "x-spotify-policy-list": [
          {
            $ref: "#/components/x-spotify-policy/policies/MachineLearning",
          },
        ],
        summary: "Get Tracks' Audio Features\n",
        description:
          "Get audio features for multiple tracks based on their Spotify IDs.\n",
        parameters: [
          {
            name: "ids",
            required: true,
            in: "query",
            schema: {
              title: "Spotify Track IDs",
              description:
                "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids)\nfor the tracks. Maximum: 100 IDs.\n",
              example:
                "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/ManyAudioFeatures",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/audio-features/{id}": {
      get: {
        tags: ["Tracks"],
        operationId: "get-audio-features",
        "x-spotify-policy-list": [
          {
            $ref: "#/components/x-spotify-policy/policies/MachineLearning",
          },
        ],
        summary: "Get Track's Audio Features\n",
        description:
          "Get audio feature information for a single track identified by its unique\nSpotify ID.\n",
        parameters: [
          {
            name: "id",
            required: true,
            in: "path",
            schema: {
              title: "Spotify Track ID",
              description:
                "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.\n",
              example: "11dFghVXANMlKmJXsNCbNl",
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/OneAudioFeatures",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/audio-analysis/{id}": {
      get: {
        tags: ["Tracks"],
        operationId: "get-audio-analysis",
        summary: "Get Track's Audio Analysis\n",
        description:
          "Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.\n",
        parameters: [
          {
            name: "id",
            required: true,
            in: "path",
            schema: {
              title: "Spotify Track ID",
              description:
                "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the track.\n",
              example: "11dFghVXANMlKmJXsNCbNl",
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/OneAudioAnalysis",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/recommendations": {
      get: {
        tags: ["Tracks"],
        operationId: "get-recommendations",
        "x-spotify-policy-list": [
          {
            $ref: "#/components/x-spotify-policy/policies/MachineLearning",
          },
        ],
        summary: "Get Recommendations\n",
        description:
          "Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.\n\nFor artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.\n",
        parameters: [
          {
            name: "limit",
            required: false,
            in: "query",
            schema: {
              title: "Limit",
              description:
                "The target size of the list of recommended tracks. For seeds with unusually small pools or when highly restrictive filtering is applied, it may be impossible to generate the requested number of recommended tracks. Debugging information for such cases is available in the response. Default: 20\\. Minimum: 1\\. Maximum: 100.\n",
              default: 20,
              example: 10,
              type: "integer",
              minimum: 1,
              maximum: 100,
            },
          },
          {
            $ref: "#/components/parameters/QueryMarket",
          },
          {
            name: "seed_artists",
            required: true,
            in: "query",
            schema: {
              title: "Spotify Artist ID Seeds",
              description:
                "A comma separated list of [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for seed artists.  Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.<br/> _**Note**: only required if `seed_genres` and `seed_tracks` are not set_.\n",
              example: "4NHQUGzhtTLFvgF5SZesLK",
              type: "string",
            },
          },
          {
            name: "seed_genres",
            required: true,
            in: "query",
            schema: {
              title: "Genres Seeds",
              description:
                "A comma separated list of any genres in the set of [available genre seeds](/documentation/web-api/reference/get-recommendation-genres). Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.<br/> _**Note**: only required if `seed_artists` and `seed_tracks` are not set_.\n",
              example: "classical,country",
              type: "string",
            },
          },
          {
            name: "seed_tracks",
            required: true,
            in: "query",
            schema: {
              title: "Spotify Track ID Seeds",
              description:
                "A comma separated list of [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for a seed track.  Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.<br/> _**Note**: only required if `seed_artists` and `seed_genres` are not set_.\n",
              example: "0c6xIDDpzE81m2q797ordA",
              type: "string",
            },
          },
          {
            name: "min_acousticness",
            required: false,
            in: "query",
            schema: {
              title: "Min. Acousticness",
              description:
                "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "max_acousticness",
            required: false,
            in: "query",
            schema: {
              title: "Max. Acousticness",
              description:
                "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "target_acousticness",
            required: false,
            in: "query",
            schema: {
              title: "Target Acousticness",
              description:
                "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "min_danceability",
            required: false,
            in: "query",
            schema: {
              title: "Min. Danceability",
              description:
                "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "max_danceability",
            required: false,
            in: "query",
            schema: {
              title: "Max. Danceability",
              description:
                "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "target_danceability",
            required: false,
            in: "query",
            schema: {
              title: "Target Danceability",
              description:
                "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "min_duration_ms",
            required: false,
            in: "query",
            schema: {
              title: "Min. Duration (ms)",
              description:
                "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              type: "integer",
            },
          },
          {
            name: "max_duration_ms",
            required: false,
            in: "query",
            schema: {
              title: "Max. Duration (ms)",
              description:
                "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              type: "integer",
            },
          },
          {
            name: "target_duration_ms",
            required: false,
            in: "query",
            schema: {
              title: "Target Duration (ms)",
              description: "Target duration of the track (ms)",
              type: "integer",
            },
          },
          {
            name: "min_energy",
            required: false,
            in: "query",
            schema: {
              title: "Min. Energy",
              description:
                "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "max_energy",
            required: false,
            in: "query",
            schema: {
              title: "Max. Energy",
              description:
                "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "target_energy",
            required: false,
            in: "query",
            schema: {
              title: "Target Energy",
              description:
                "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "min_instrumentalness",
            required: false,
            in: "query",
            schema: {
              title: "Min. Instrumentalness",
              description:
                "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "max_instrumentalness",
            required: false,
            in: "query",
            schema: {
              title: "Max. Instrumentalness",
              description:
                "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "target_instrumentalness",
            required: false,
            in: "query",
            schema: {
              title: "Target Instrumentalness",
              description:
                "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "min_key",
            required: false,
            in: "query",
            schema: {
              title: "Min. Key",
              description:
                "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              type: "integer",
              minimum: 0,
              maximum: 11,
            },
          },
          {
            name: "max_key",
            required: false,
            in: "query",
            schema: {
              title: "Max. Key",
              description:
                "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              type: "integer",
              minimum: 0,
              maximum: 11,
            },
          },
          {
            name: "target_key",
            required: false,
            in: "query",
            schema: {
              title: "Target Key",
              description:
                "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              type: "integer",
              minimum: 0,
              maximum: 11,
            },
          },
          {
            name: "min_liveness",
            required: false,
            in: "query",
            schema: {
              title: "Min. Liveness",
              description:
                "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "max_liveness",
            required: false,
            in: "query",
            schema: {
              title: "Max. Liveness",
              description:
                "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "target_liveness",
            required: false,
            in: "query",
            schema: {
              title: "Target Liveness",
              description:
                "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "min_loudness",
            required: false,
            in: "query",
            schema: {
              title: "Min. Loudness",
              description:
                "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              type: "number",
            },
          },
          {
            name: "max_loudness",
            required: false,
            in: "query",
            schema: {
              title: "Max. Loudness",
              description:
                "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              type: "number",
            },
          },
          {
            name: "target_loudness",
            required: false,
            in: "query",
            schema: {
              title: "Target Loudness",
              description:
                "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              type: "number",
            },
          },
          {
            name: "min_mode",
            required: false,
            in: "query",
            schema: {
              title: "Min. Mode",
              description:
                "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              type: "integer",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "max_mode",
            required: false,
            in: "query",
            schema: {
              title: "Max. Mode",
              description:
                "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              type: "integer",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "target_mode",
            required: false,
            in: "query",
            schema: {
              title: "Target Mode",
              description:
                "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              type: "integer",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "min_popularity",
            required: false,
            in: "query",
            schema: {
              title: "Min. Popularity",
              description:
                "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              type: "integer",
              minimum: 0,
              maximum: 100,
            },
          },
          {
            name: "max_popularity",
            required: false,
            in: "query",
            schema: {
              title: "Max. Popularity",
              description:
                "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              type: "integer",
              minimum: 0,
              maximum: 100,
            },
          },
          {
            name: "target_popularity",
            required: false,
            in: "query",
            schema: {
              title: "Target Popularity",
              description:
                "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              type: "integer",
              minimum: 0,
              maximum: 100,
            },
          },
          {
            name: "min_speechiness",
            required: false,
            in: "query",
            schema: {
              title: "Min. Speechiness",
              description:
                "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "max_speechiness",
            required: false,
            in: "query",
            schema: {
              title: "Max. Speechiness",
              description:
                "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "target_speechiness",
            required: false,
            in: "query",
            schema: {
              title: "Target Speechiness",
              description:
                "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "min_tempo",
            required: false,
            in: "query",
            schema: {
              title: "Min. Tempo",
              description:
                "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              type: "number",
            },
          },
          {
            name: "max_tempo",
            required: false,
            in: "query",
            schema: {
              title: "Max. Tempo",
              description:
                "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              type: "number",
            },
          },
          {
            name: "target_tempo",
            required: false,
            in: "query",
            schema: {
              title: "Target Tempo",
              description: "Target tempo (BPM)",
              type: "number",
            },
          },
          {
            name: "min_time_signature",
            required: false,
            in: "query",
            schema: {
              title: "Min. Time Signature",
              description:
                "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              type: "integer",
              maximum: 11,
            },
          },
          {
            name: "max_time_signature",
            required: false,
            in: "query",
            schema: {
              title: "Max. Time Signature",
              description:
                "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              type: "integer",
            },
          },
          {
            name: "target_time_signature",
            required: false,
            in: "query",
            schema: {
              title: "Target Time Signature",
              description:
                "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              type: "integer",
            },
          },
          {
            name: "min_valence",
            required: false,
            in: "query",
            schema: {
              title: "Min. Valence",
              description:
                "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "max_valence",
            required: false,
            in: "query",
            schema: {
              title: "Max. Valence",
              description:
                "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
          {
            name: "target_valence",
            required: false,
            in: "query",
            schema: {
              title: "Target Valence",
              description:
                "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/OneRecommendations",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/recommendations/available-genre-seeds": {
      get: {
        tags: ["Genres"],
        operationId: "get-recommendation-genres",
        summary: "Get Available Genre Seeds\n",
        description:
          "Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).\n",
        responses: {
          200: {
            $ref: "#/components/responses/ManyGenres",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
    "/me/player": {
      get: {
        tags: ["Player"],
        operationId: "get-information-about-the-users-current-playback",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/playerPolicyList",
        },
        summary: "Get Playback State\n",
        description:
          "Get information about the user’s current playback state, including track or episode, progress, and active device.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryMarket",
          },
          {
            $ref: "#/components/parameters/QueryAdditionalTypes",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/OneCurrentlyPlaying",
          },
          204: {
            description: "Playback not available or active",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-read-playback-state"],
          },
        ],
      },
      put: {
        tags: ["Player"],
        operationId: "transfer-a-users-playback",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/playerPolicyList",
        },
        summary: "Transfer Playback\n",
        description:
          "Transfer playback to a new device and determine if it should start playing.\n",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                example: {
                  device_ids: ["74ASZWbe4lXaubB36ztrGX"],
                },
                type: "object",
                additionalProperties: true,
                required: ["device_ids"],
                properties: {
                  device_ids: {
                    type: "array",
                    description:
                      'A JSON array containing the ID of the device on which playback should be started/transferred.<br/>For example:`{device_ids:["74ASZWbe4lXaubB36ztrGX"]}`<br/>_**Note**: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return `400 Bad Request`_\n',
                    items: {
                      type: "string",
                    },
                  },
                  play: {
                    type: "boolean",
                    description:
                      "**true**: ensure playback happens on new device.<br/>**false** or not provided: keep the current playback state.\n",
                    additionalProperties: true,
                  },
                },
              },
            },
          },
        },
        responses: {
          204: {
            description: "Playback transferred",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-modify-playback-state"],
          },
        ],
      },
    },
    "/me/player/devices": {
      get: {
        tags: ["Player"],
        operationId: "get-a-users-available-devices",
        summary: "Get Available Devices\n",
        description: "Get information about a user’s available devices.\n",
        responses: {
          200: {
            $ref: "#/components/responses/ManyDevices",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-read-playback-state"],
          },
        ],
      },
    },
    "/me/player/currently-playing": {
      get: {
        tags: ["Player"],
        operationId: "get-the-users-currently-playing-track",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/playerPolicyList",
        },
        summary: "Get Currently Playing Track\n",
        description:
          "Get the object currently being played on the user's Spotify account.\n",
        parameters: [
          {
            $ref: "#/components/parameters/QueryMarket",
          },
          {
            $ref: "#/components/parameters/QueryAdditionalTypes",
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/OneCurrentlyPlayingTrack",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-read-currently-playing"],
          },
        ],
      },
    },
    "/me/player/play": {
      put: {
        tags: ["Player"],
        operationId: "start-a-users-playback",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/playerPolicyList",
        },
        summary: "Start/Resume Playback\n",
        description:
          "Start a new context or resume current playback on the user's active device.\n",
        parameters: [
          {
            name: "device_id",
            required: false,
            in: "query",
            schema: {
              title: "Device ID",
              description:
                "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.",
              example: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                example: {
                  context_uri: "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
                  offset: {
                    position: 5,
                  },
                  position_ms: 0,
                },
                type: "object",
                additionalProperties: true,
                properties: {
                  context_uri: {
                    type: "string",
                    description:
                      'Optional. Spotify URI of the context to play.\nValid contexts are albums, artists & playlists.\n`{context_uri:"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"}`\n',
                    additionalProperties: true,
                  },
                  uris: {
                    type: "array",
                    description:
                      'Optional. A JSON array of the Spotify track URIs to play.\nFor example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]}`\n',
                    items: {
                      type: "string",
                    },
                  },
                  offset: {
                    type: "object",
                    description:
                      'Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object\n"position" is zero based and can’t be negative. Example: `"offset": {"position": 5}`\n"uri" is a string representing the uri of the item to start at. Example: `"offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"}`\n',
                    additionalProperties: true,
                  },
                  position_ms: {
                    type: "integer",
                    description: "integer",
                    additionalProperties: true,
                  },
                },
              },
            },
          },
        },
        responses: {
          204: {
            description: "Playback started",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-modify-playback-state"],
          },
        ],
      },
    },
    "/me/player/pause": {
      put: {
        tags: ["Player"],
        operationId: "pause-a-users-playback",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/playerPolicyList",
        },
        summary: "Pause Playback\n",
        description: "Pause playback on the user's account.\n",
        parameters: [
          {
            name: "device_id",
            required: false,
            in: "query",
            schema: {
              title: "Device ID",
              description:
                "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.\n",
              example: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
              type: "string",
            },
          },
        ],
        responses: {
          204: {
            description: "Playback paused",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-modify-playback-state"],
          },
        ],
      },
    },
    "/me/player/next": {
      post: {
        tags: ["Player"],
        operationId: "skip-users-playback-to-next-track",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/playerPolicyList",
        },
        summary: "Skip To Next\n",
        description: "Skips to next track in the user’s queue.\n",
        parameters: [
          {
            name: "device_id",
            required: false,
            in: "query",
            schema: {
              title: "Device ID",
              description:
                "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.",
              example: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
              type: "string",
            },
          },
        ],
        responses: {
          204: {
            description: "Command sent",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-modify-playback-state"],
          },
        ],
      },
    },
    "/me/player/previous": {
      post: {
        tags: ["Player"],
        operationId: "skip-users-playback-to-previous-track",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/playerPolicyList",
        },
        summary: "Skip To Previous\n",
        description: "Skips to previous track in the user’s queue.\n",
        parameters: [
          {
            name: "device_id",
            required: false,
            in: "query",
            schema: {
              title: "Device ID",
              description:
                "The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n",
              example: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
              type: "string",
            },
          },
        ],
        responses: {
          204: {
            description: "Command sent",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-modify-playback-state"],
          },
        ],
      },
    },
    "/me/player/seek": {
      put: {
        tags: ["Player"],
        operationId: "seek-to-position-in-currently-playing-track",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/playerPolicyList",
        },
        summary: "Seek To Position\n",
        description:
          "Seeks to the given position in the user’s currently playing track.\n",
        parameters: [
          {
            name: "position_ms",
            required: true,
            in: "query",
            schema: {
              title: "Position (ms)",
              description:
                "The position in milliseconds to seek to. Must be a\npositive number. Passing in a position that is greater than the length of\nthe track will cause the player to start playing the next song.\n",
              example: 25000,
              type: "integer",
            },
          },
          {
            name: "device_id",
            required: false,
            in: "query",
            schema: {
              title: "Device ID",
              description:
                "The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n",
              example: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
              type: "string",
            },
          },
        ],
        responses: {
          204: {
            description: "Command sent",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-modify-playback-state"],
          },
        ],
      },
    },
    "/me/player/repeat": {
      put: {
        tags: ["Player"],
        operationId: "set-repeat-mode-on-users-playback",
        summary: "Set Repeat Mode\n",
        description:
          "Set the repeat mode for the user's playback. Options are repeat-track,\nrepeat-context, and off.\n",
        parameters: [
          {
            name: "state",
            required: true,
            in: "query",
            schema: {
              title: "State",
              description:
                "**track**, **context** or **off**.<br/>\n**track** will repeat the current track.<br/>\n**context** will repeat the current context.<br/>\n**off** will turn repeat off.\n",
              example: "context",
              type: "string",
            },
          },
          {
            name: "device_id",
            required: false,
            in: "query",
            schema: {
              title: "Device ID",
              description:
                "The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n",
              example: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
              type: "string",
            },
          },
        ],
        responses: {
          204: {
            description: "Command sent",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-modify-playback-state"],
          },
        ],
      },
    },
    "/me/player/volume": {
      put: {
        tags: ["Player"],
        operationId: "set-volume-for-users-playback",
        summary: "Set Playback Volume\n",
        description: "Set the volume for the user’s current playback device.\n",
        parameters: [
          {
            name: "volume_percent",
            required: true,
            in: "query",
            schema: {
              title: "Volume %",
              description:
                "The volume to set. Must be a value from 0 to 100 inclusive.\n",
              example: 50,
              type: "integer",
            },
          },
          {
            name: "device_id",
            required: false,
            in: "query",
            schema: {
              title: "Device ID",
              description:
                "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.\n",
              example: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
              type: "string",
            },
          },
        ],
        responses: {
          204: {
            description: "Command sent",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-modify-playback-state"],
          },
        ],
      },
    },
    "/me/player/shuffle": {
      put: {
        tags: ["Player"],
        operationId: "toggle-shuffle-for-users-playback",
        summary: "Toggle Playback Shuffle\n",
        description: "Toggle shuffle on or off for user’s playback.\n",
        parameters: [
          {
            name: "state",
            required: true,
            in: "query",
            schema: {
              title: "State",
              description:
                "**true** : Shuffle user's playback.<br/>\n**false** : Do not shuffle user's playback.\n",
              example: true,
              type: "boolean",
            },
          },
          {
            name: "device_id",
            required: false,
            in: "query",
            schema: {
              title: "Device ID",
              description:
                "The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n",
              example: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
              type: "string",
            },
          },
        ],
        responses: {
          204: {
            description: "Command sent",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-modify-playback-state"],
          },
        ],
      },
    },
    "/me/player/recently-played": {
      get: {
        tags: ["Player"],
        operationId: "get-recently-played",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/playerPolicyList",
        },
        summary: "Get Recently Played Tracks\n",
        description:
          "Get tracks from the current user's recently played tracks.\n_**Note**: Currently doesn't support podcast episodes._\n",
        parameters: [
          {
            name: "limit",
            required: false,
            in: "query",
            schema: {
              title: "Limit",
              description:
                "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n",
              default: 20,
              example: 10,
              type: "integer",
              minimum: 0,
              maximum: 50,
            },
          },
          {
            name: "after",
            required: false,
            in: "query",
            schema: {
              title: "After",
              description:
                "A Unix timestamp in milliseconds. Returns all items\nafter (but not including) this cursor position. If `after` is specified, `before`\nmust not be specified.\n",
              example: 1484811043508,
              type: "integer",
            },
          },
          {
            name: "before",
            required: false,
            in: "query",
            schema: {
              title: "Before",
              description:
                "A Unix timestamp in milliseconds. Returns all items\nbefore (but not including) this cursor position. If `before` is specified,\n`after` must not be specified.\n",
              type: "integer",
            },
          },
        ],
        responses: {
          200: {
            $ref: "#/components/responses/CursorPagedPlayHistory",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-read-recently-played"],
          },
        ],
      },
    },
    "/me/player/queue": {
      get: {
        tags: ["Player"],
        operationId: "get-queue",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/playerPolicyList",
        },
        summary: "Get the User's Queue\n",
        description: "Get the list of objects that make up the user's queue.\n",
        responses: {
          200: {
            $ref: "#/components/responses/Queue",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-read-playback-state"],
          },
        ],
      },
      post: {
        tags: ["Player"],
        operationId: "add-to-queue",
        "x-spotify-policy-list": {
          $ref: "#/components/x-spotify-policy/playerPolicyList",
        },
        summary: "Add Item to Playback Queue\n",
        description:
          "Add an item to the end of the user's current playback queue.\n",
        parameters: [
          {
            name: "uri",
            required: true,
            in: "query",
            schema: {
              title: "Spotify URI",
              description:
                "The uri of the item to add to the queue. Must be a track or an episode uri.\n",
              example: "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
              type: "string",
            },
          },
          {
            name: "device_id",
            required: false,
            in: "query",
            schema: {
              title: "Device ID",
              description:
                "The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n",
              example: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
              type: "string",
            },
          },
        ],
        responses: {
          204: {
            description: "Command received",
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: ["user-modify-playback-state"],
          },
        ],
      },
    },
    "/markets": {
      get: {
        tags: ["Markets"],
        operationId: "get-available-markets",
        summary: "Get Available Markets\n",
        description: "Get the list of markets where Spotify is available.\n",
        responses: {
          200: {
            description: "A markets object with an array of country codes",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    markets: {
                      type: "array",
                      items: {
                        type: "string",
                      },
                      example: ["CA", "BR", "IT"],
                    },
                  },
                },
              },
            },
          },
          401: {
            $ref: "#/components/responses/Unauthorized",
          },
          403: {
            $ref: "#/components/responses/Forbidden",
          },
          429: {
            $ref: "#/components/responses/TooManyRequests",
          },
        },
        security: [
          {
            oauth_2_0: [],
          },
        ],
      },
    },
  },
  components: {
    securitySchemes: {
      oauth_2_0: {
        type: "oauth2",
        description:
          "Spotify supports OAuth 2.0 for authenticating all API requests.",
        flows: {
          authorizationCode: {
            authorizationUrl: "https://accounts.spotify.com/authorize",
            tokenUrl: "https://accounts.spotify.com/api/token",
            scopes: {
              "app-remote-control":
                "Communicate with the Spotify app on your device.\n",
              "playlist-read-private": "Access your private playlists.\n",
              "playlist-read-collaborative":
                "Access your collaborative playlists.\n",
              "playlist-modify-public": "Manage your public playlists.\n",
              "playlist-modify-private": "Manage your private playlists.\n",
              "user-library-read": "Access your saved content.\n",
              "user-library-modify": "Manage your saved content.\n",
              "user-read-private": "Access your subscription details.\n",
              "user-read-email": "Get your real email address.\n",
              "user-follow-read":
                "Access your followers and who you are following.\n",
              "user-follow-modify": "Manage your saved content.\n",
              "user-top-read": "Read your top artists and content.\n",
              "user-read-playback-position":
                "Read your position in content you have played.\n",
              "user-read-playback-state":
                "Read your currently playing content and Spotify Connect devices information.\n",
              "user-read-recently-played":
                "Access your recently played items.\n",
              "user-read-currently-playing":
                "Read your currently playing content.\n",
              "user-modify-playback-state":
                "Control playback on your Spotify clients and Spotify Connect devices.\n",
              "ugc-image-upload": "Upload images to Spotify on your behalf.\n",
              streaming:
                "Play content and control playback on your other devices.\n",
            },
          },
        },
      },
    },
    "x-spotify-policy": {
      policies: {
        $ref: "../policies.yaml",
      },
      metadataPolicyList: [
        {
          $ref: "#/components/x-spotify-policy/policies/Downloading",
        },
        {
          $ref: "#/components/x-spotify-policy/policies/VisualAlteration",
        },
        {
          $ref: "#/components/x-spotify-policy/policies/Attribution",
        },
      ],
      metadataWithMachineLearningPolicyList: [
        {
          $ref: "#/components/x-spotify-policy/policies/Downloading",
        },
        {
          $ref: "#/components/x-spotify-policy/policies/VisualAlteration",
        },
        {
          $ref: "#/components/x-spotify-policy/policies/Attribution",
        },
        {
          $ref: "#/components/x-spotify-policy/policies/MachineLearning",
        },
      ],
      playerPolicyList: [
        {
          $ref: "#/components/x-spotify-policy/policies/CommercialStreaming",
        },
        {
          $ref: "#/components/x-spotify-policy/policies/ContentAlteration",
        },
        {
          $ref: "#/components/x-spotify-policy/policies/Synchronization",
        },
        {
          $ref: "#/components/x-spotify-policy/policies/Broadcasting",
        },
      ],
      downloading: {
        $ref: "#/components/x-spotify-policy/policies/Downloading",
      },
    },
    responses: {
      Unauthorized: {
        description:
          "Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["error"],
              properties: {
                error: {
                  $ref: "#/components/schemas/ErrorObject",
                },
              },
            },
          },
        },
      },
      Forbidden: {
        description:
          "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["error"],
              properties: {
                error: {
                  $ref: "#/components/schemas/ErrorObject",
                },
              },
            },
          },
        },
      },
      NotFound: {
        description: "The requested resource cannot be found.\n",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["error"],
              properties: {
                error: {
                  $ref: "#/components/schemas/ErrorObject",
                },
              },
            },
          },
        },
      },
      BadRequest: {
        description:
          "The request contains malformed data in path, query parameters, or body.\n",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["error"],
              properties: {
                error: {
                  $ref: "#/components/schemas/ErrorObject",
                },
              },
            },
          },
        },
      },
      TooManyRequests: {
        description: "The app has exceeded its rate limits.\n",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["error"],
              properties: {
                error: {
                  $ref: "#/components/schemas/ErrorObject",
                },
              },
            },
          },
        },
      },
      ManyAlbums: {
        description: "A set of albums",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["albums"],
              properties: {
                albums: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/AlbumObject",
                  },
                },
              },
            },
          },
        },
      },
      ManyAudiobooks: {
        description: "A set of audiobooks",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["audiobooks"],
              properties: {
                audiobooks: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/AudiobookObject",
                  },
                },
              },
            },
          },
        },
      },
      ManyChapters: {
        description: "A set of chapters",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["chapters"],
              properties: {
                chapters: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/ChapterObject",
                  },
                },
              },
            },
          },
        },
      },
      ManyDevices: {
        description: "A set of devices",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["devices"],
              properties: {
                devices: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/DeviceObject",
                  },
                },
              },
            },
          },
        },
      },
      PagedAlbums: {
        description: "A paged set of albums",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["albums"],
              properties: {
                albums: {
                  $ref: "#/components/schemas/PagingSimplifiedAlbumObject",
                },
              },
            },
          },
        },
      },
      PagedPlaylists: {
        description: "A paged set of playlists",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PagingPlaylistObject",
            },
          },
        },
      },
      PagedFeaturedPlaylists: {
        description: "A paged set of playlists",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PagingFeaturedPlaylistObject",
            },
          },
        },
      },
      PagedCategories: {
        description: "A paged set of categories",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["categories"],
              properties: {
                categories: {
                  $ref: "#/components/schemas/PagingObject",
                },
              },
            },
          },
        },
      },
      CursorPagedArtists: {
        description: "A paged set of artists",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["artists"],
              properties: {
                artists: {
                  $ref: "#/components/schemas/CursorPagingSimplifiedArtistObject",
                },
              },
            },
          },
        },
      },
      CursorPagedPlayHistory: {
        description: "A paged set of tracks",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/CursorPagingPlayHistoryObject",
            },
          },
        },
      },
      ManyArtists: {
        description: "A set of artists",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["artists"],
              properties: {
                artists: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/ArtistObject",
                  },
                },
              },
            },
          },
        },
      },
      ManyAudioFeatures: {
        description: "A set of audio features",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["audio_features"],
              properties: {
                audio_features: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/AudioFeaturesObject",
                  },
                },
              },
            },
          },
        },
      },
      ManyEpisodes: {
        description: "A set of episodes",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["episodes"],
              properties: {
                episodes: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/EpisodeObject",
                  },
                },
              },
            },
          },
        },
      },
      ManyGenres: {
        description: "A set of genres",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["genres"],
              properties: {
                genres: {
                  type: "array",
                  example: ["alternative", "samba"],
                  items: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
      OneEpisode: {
        description: "An episode",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/EpisodeObject",
            },
          },
        },
      },
      OneChapter: {
        description: "A Chapter",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ChapterObject",
            },
          },
        },
      },
      OneAudiobook: {
        description: "An Audiobook",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/AudiobookObject",
            },
          },
        },
      },
      OneAlbum: {
        description: "An album",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/AlbumObject",
            },
          },
        },
      },
      ArrayOfImages: {
        description: "A set of images",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ImageObject",
              },
            },
          },
        },
      },
      OnePrivateUser: {
        description: "A user",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PrivateUserObject",
            },
          },
        },
      },
      OnePublicUser: {
        description: "A user",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PublicUserObject",
            },
          },
        },
      },
      OneTrack: {
        description: "A track",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/TrackObject",
            },
          },
        },
      },
      OneShow: {
        description: "A show",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ShowObject",
            },
          },
        },
      },
      OneCategory: {
        description: "A category",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/CategoryObject",
            },
          },
        },
      },
      OnePlaylist: {
        description: "A playlist",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PlaylistObject",
            },
          },
        },
      },
      OneAudioFeatures: {
        description: "Audio features for one track",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/AudioFeaturesObject",
            },
          },
        },
      },
      OneAudioAnalysis: {
        description: "Audio analysis for one track",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/AudioAnalysisObject",
            },
          },
        },
      },
      OneArtist: {
        description: "An artist",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ArtistObject",
            },
          },
        },
      },
      ManyTracks: {
        description: "A set of tracks",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["tracks"],
              properties: {
                tracks: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/TrackObject",
                  },
                },
              },
            },
          },
        },
      },
      ManySimplifiedShows: {
        description: "A set of shows",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["shows"],
              properties: {
                shows: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/SimplifiedShowObject",
                  },
                },
              },
            },
          },
        },
      },
      PagingSimplifiedTrackObject: {
        description: "Pages of tracks",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PagingSimplifiedTrackObject",
            },
          },
        },
      },
      PagingSavedTrackObject: {
        description: "Pages of tracks",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PagingSavedTrackObject",
            },
          },
        },
      },
      PagingPlaylistTrackObject: {
        description: "Pages of tracks",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PagingPlaylistTrackObject",
            },
          },
        },
      },
      PagingArtistDiscographyAlbumObject: {
        description: "Pages of albums",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PagingArtistDiscographyAlbumObject",
            },
          },
        },
      },
      PagingSavedAlbumObject: {
        description: "Pages of albums",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PagingSavedAlbumObject",
            },
          },
        },
      },
      PagingSavedShowObject: {
        description: "Pages of shows",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PagingSavedShowObject",
            },
          },
        },
      },
      PagingSimplifiedEpisodeObject: {
        description: "Pages of episodes",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PagingSimplifiedEpisodeObject",
            },
          },
        },
      },
      PagingSavedEpisodeObject: {
        description: "Pages of episodes",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PagingSavedEpisodeObject",
            },
          },
        },
      },
      PagingSimplifiedAudiobookObject: {
        description: "Pages of audiobooks",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PagingSimplifiedAudiobookObject",
            },
          },
        },
      },
      PagingSimplifiedChapterObject: {
        description: "Pages of chapters",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PagingSimplifiedChapterObject",
            },
          },
        },
      },
      PagingArtistOrTrackObject: {
        description: "Pages of artists or tracks",
        content: {
          "application/json": {
            schema: {
              type: "object",
              allOf: [
                {
                  $ref: "#/components/schemas/PagingObject",
                },
                {
                  type: "object",
                  properties: {
                    items: {
                      type: "array",
                      items: {
                        type: "object",
                        oneOf: [
                          {
                            $ref: "#/components/schemas/ArtistObject",
                          },
                          {
                            $ref: "#/components/schemas/TrackObject",
                          },
                        ],
                        discriminator: {
                          propertyName: "type",
                        },
                      },
                    },
                  },
                },
              ],
            },
          },
        },
      },
      SearchItems: {
        description: "Search response",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                tracks: {
                  $ref: "#/components/schemas/PagingTrackObject",
                },
                artists: {
                  $ref: "#/components/schemas/PagingArtistObject",
                },
                albums: {
                  $ref: "#/components/schemas/PagingSimplifiedAlbumObject",
                },
                playlists: {
                  $ref: "#/components/schemas/PagingPlaylistObject",
                },
                shows: {
                  $ref: "#/components/schemas/PagingSimplifiedShowObject",
                },
                episodes: {
                  $ref: "#/components/schemas/PagingSimplifiedEpisodeObject",
                },
                audiobooks: {
                  $ref: "#/components/schemas/PagingSimplifiedAudiobookObject",
                },
              },
            },
          },
        },
      },
      OneRecommendations: {
        description: "A set of recommendations",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/RecommendationsObject",
            },
          },
        },
      },
      ArrayOfBooleans: {
        description: "Array of booleans",
        content: {
          "application/json": {
            schema: {
              type: "array",
              example: [false, true],
              items: {
                type: "boolean",
              },
            },
          },
        },
      },
      Queue: {
        description: "Information about the queue",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/QueueObject",
            },
          },
        },
      },
      OneCurrentlyPlaying: {
        description: "Information about playback",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/CurrentlyPlayingContextObject",
            },
          },
        },
      },
      OneCurrentlyPlayingTrack: {
        description: "Information about the currently playing track",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/CurrentlyPlayingContextObject",
            },
          },
        },
      },
      PlaylistSnapshotId: {
        description: "A snapshot ID for the playlist",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                snapshot_id: {
                  type: "string",
                  example: "abc",
                },
              },
            },
          },
        },
      },
    },
    schemas: {
      LinkedTrackObject: {
        type: "object",
        "x-spotify-docs-type": "LinkedTrackObject",
        properties: {
          external_urls: {
            allOf: [
              {
                $ref: "#/components/schemas/ExternalUrlObject",
              },
            ],
            description: "Known external URLs for this track.\n",
          },
          href: {
            type: "string",
            description:
              "A link to the Web API endpoint providing full details of the track.\n",
          },
          id: {
            type: "string",
            description:
              "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.\n",
          },
          type: {
            type: "string",
            description: 'The object type: "track".\n',
          },
          uri: {
            type: "string",
            description:
              "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.\n",
          },
        },
      },
      TrackRestrictionObject: {
        type: "object",
        "x-spotify-docs-type": "TrackRestrictionObject",
        properties: {
          reason: {
            type: "string",
            description:
              "The reason for the restriction. Supported values:\n- `market` - The content item is not available in the given market.\n- `product` - The content item is not available for the user's subscription type.\n- `explicit` - The content item is explicit and the user's account is set to not play explicit content.\n\nAdditional reasons may be added in the future.\n**Note**: If you use this field, make sure that your application safely handles unknown values.\n",
          },
        },
      },
      AlbumRestrictionObject: {
        type: "object",
        "x-spotify-docs-type": "AlbumRestrictionObject",
        properties: {
          reason: {
            type: "string",
            enum: ["market", "product", "explicit"],
            description:
              "The reason for the restriction. Albums may be restricted if the content is not available in a given market, to the user's subscription type, or when the user's account is set to not play explicit content.\nAdditional reasons may be added in the future.\n",
          },
        },
      },
      EpisodeRestrictionObject: {
        type: "object",
        "x-spotify-docs-type": "EpisodeRestrictionObject",
        properties: {
          reason: {
            type: "string",
            description:
              "The reason for the restriction. Supported values:\n- `market` - The content item is not available in the given market.\n- `product` - The content item is not available for the user's subscription type.\n- `explicit` - The content item is explicit and the user's account is set to not play explicit content.\n\nAdditional reasons may be added in the future.\n**Note**: If you use this field, make sure that your application safely handles unknown values.\n",
          },
        },
      },
      ChapterRestrictionObject: {
        type: "object",
        "x-spotify-docs-type": "ChapterRestrictionObject",
        properties: {
          reason: {
            type: "string",
            description:
              "The reason for the restriction. Supported values:\n- `market` - The content item is not available in the given market.\n- `product` - The content item is not available for the user's subscription type.\n- `explicit` - The content item is explicit and the user's account is set to not play explicit content.\n- `payment_required` - Payment is required to play the content item.\n\nAdditional reasons may be added in the future.\n**Note**: If you use this field, make sure that your application safely handles unknown values.\n",
          },
        },
      },
      ArtistObject: {
        type: "object",
        "x-spotify-docs-type": "ArtistObject",
        properties: {
          external_urls: {
            allOf: [
              {
                $ref: "#/components/schemas/ExternalUrlObject",
              },
            ],
            description: "Known external URLs for this artist.\n",
          },
          followers: {
            allOf: [
              {
                $ref: "#/components/schemas/FollowersObject",
              },
            ],
            description: "Information about the followers of the artist.\n",
          },
          genres: {
            type: "array",
            items: {
              type: "string",
            },
            example: ["Prog rock", "Grunge"],
            description:
              "A list of the genres the artist is associated with. If not yet classified, the array is empty.\n",
          },
          href: {
            type: "string",
            description:
              "A link to the Web API endpoint providing full details of the artist.\n",
          },
          id: {
            type: "string",
            description:
              "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist.\n",
          },
          images: {
            type: "array",
            items: {
              $ref: "#/components/schemas/ImageObject",
            },
            description:
              "Images of the artist in various sizes, widest first.\n",
          },
          name: {
            type: "string",
            description: "The name of the artist.\n",
          },
          popularity: {
            type: "integer",
            description:
              "The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks.\n",
          },
          type: {
            type: "string",
            enum: ["artist"],
            description: "The object type.\n",
          },
          uri: {
            type: "string",
            description:
              "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist.\n",
          },
        },
      },
      SimplifiedArtistObject: {
        type: "object",
        "x-spotify-docs-type": "SimplifiedArtistObject",
        properties: {
          external_urls: {
            allOf: [
              {
                $ref: "#/components/schemas/ExternalUrlObject",
              },
            ],
            description: "Known external URLs for this artist.\n",
          },
          href: {
            type: "string",
            description:
              "A link to the Web API endpoint providing full details of the artist.\n",
          },
          id: {
            type: "string",
            description:
              "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist.\n",
          },
          name: {
            type: "string",
            description: "The name of the artist.\n",
          },
          type: {
            type: "string",
            enum: ["artist"],
            description: "The object type.\n",
          },
          uri: {
            type: "string",
            description:
              "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist.\n",
          },
        },
      },
      PlayHistoryObject: {
        type: "object",
        "x-spotify-docs-type": "PlayHistoryObject",
        properties: {
          track: {
            allOf: [
              {
                $ref: "#/components/schemas/TrackObject",
              },
            ],
            description: "The track the user listened to.",
          },
          played_at: {
            type: "string",
            format: "date-time",
            "x-spotify-docs-type": "Timestamp",
            description: "The date and time the track was played.",
          },
          context: {
            allOf: [
              {
                $ref: "#/components/schemas/ContextObject",
              },
            ],
            description: "The context the track was played from.",
          },
        },
      },
      PlaylistTrackObject: {
        type: "object",
        "x-spotify-docs-type": "PlaylistTrackObject",
        properties: {
          added_at: {
            type: "string",
            format: "date-time",
            "x-spotify-docs-type": "Timestamp",
            description:
              "The date and time the track or episode was added. _**Note**: some very old playlists may return `null` in this field._\n",
          },
          added_by: {
            allOf: [
              {
                $ref: "#/components/schemas/PlaylistUserObject",
              },
            ],
            description:
              "The Spotify user who added the track or episode. _**Note**: some very old playlists may return `null` in this field._\n",
          },
          is_local: {
            type: "boolean",
            description:
              "Whether this track or episode is a [local file](/documentation/web-api/concepts/playlists/#local-files) or not.\n",
          },
          track: {
            oneOf: [
              {
                $ref: "#/components/schemas/TrackObject",
              },
              {
                $ref: "#/components/schemas/EpisodeObject",
              },
            ],
            "x-spotify-docs-type": "TrackObject | EpisodeObject",
            description: "Information about the track or episode.",
            discriminator: {
              propertyName: "type",
            },
          },
        },
      },
      QueueObject: {
        type: "object",
        "x-spotify-docs-type": "QueueObject",
        properties: {
          currently_playing: {
            oneOf: [
              {
                $ref: "#/components/schemas/TrackObject",
              },
              {
                $ref: "#/components/schemas/EpisodeObject",
              },
            ],
            discriminator: {
              propertyName: "type",
            },
            "x-spotify-docs-type": "TrackObject | EpisodeObject",
            description:
              "The currently playing track or episode. Can be `null`.",
          },
          queue: {
            type: "array",
            items: {
              oneOf: [
                {
                  $ref: "#/components/schemas/TrackObject",
                },
                {
                  $ref: "#/components/schemas/EpisodeObject",
                },
              ],
              discriminator: {
                propertyName: "type",
              },
              "x-spotify-docs-type": "TrackObject | EpisodeObject",
            },
            description: "The tracks or episodes in the queue. Can be empty.",
          },
        },
      },
      CurrentlyPlayingContextObject: {
        type: "object",
        "x-spotify-docs-type": "CurrentlyPlayingContextObject",
        properties: {
          device: {
            allOf: [
              {
                $ref: "#/components/schemas/DeviceObject",
              },
            ],
            description: "The device that is currently active.\n",
          },
          repeat_state: {
            type: "string",
            description: "off, track, context",
          },
          shuffle_state: {
            type: "boolean",
            description: "If shuffle is on or off.",
          },
          context: {
            allOf: [
              {
                $ref: "#/components/schemas/ContextObject",
              },
            ],
            description: "A Context Object. Can be `null`.",
          },
          timestamp: {
            type: "integer",
            description: "Unix Millisecond Timestamp when data was fetched.",
          },
          progress_ms: {
            type: "integer",
            description:
              "Progress into the currently playing track or episode. Can be `null`.",
          },
          is_playing: {
            type: "boolean",
            description: "If something is currently playing, return `true`.",
          },
          item: {
            oneOf: [
              {
                $ref: "#/components/schemas/TrackObject",
              },
              {
                $ref: "#/components/schemas/EpisodeObject",
              },
            ],
            discriminator: {
              propertyName: "type",
            },
            "x-spotify-docs-type": "TrackObject | EpisodeObject",
            description:
              "The currently playing track or episode. Can be `null`.",
          },
          currently_playing_type: {
            type: "string",
            description:
              "The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`.\n",
          },
          actions: {
            allOf: [
              {
                $ref: "#/components/schemas/DisallowsObject",
              },
            ],
            description:
              "Allows to update the user interface based on which playback actions are available within the current context.\n",
          },
        },
      },
      DisallowsObject: {
        type: "object",
        "x-spotify-docs-type": "DisallowsObject",
        properties: {
          interrupting_playback: {
            type: "boolean",
            description: "Interrupting playback. Optional field.",
          },
          pausing: {
            type: "boolean",
            description: "Pausing. Optional field.",
          },
          resuming: {
            type: "boolean",
            description: "Resuming. Optional field.",
          },
          seeking: {
            type: "boolean",
            description: "Seeking playback location. Optional field.",
          },
          skipping_next: {
            type: "boolean",
            description: "Skipping to the next context. Optional field.",
          },
          skipping_prev: {
            type: "boolean",
            description: "Skipping to the previous context. Optional field.",
          },
          toggling_repeat_context: {
            type: "boolean",
            description: "Toggling repeat context flag. Optional field.",
          },
          toggling_shuffle: {
            type: "boolean",
            description: "Toggling shuffle flag. Optional field.",
          },
          toggling_repeat_track: {
            type: "boolean",
            description: "Toggling repeat track flag. Optional field.",
          },
          transferring_playback: {
            type: "boolean",
            description:
              "Transfering playback between devices. Optional field.",
          },
        },
      },
      ErrorObject: {
        type: "object",
        "x-spotify-docs-type": "ErrorObject",
        required: ["status", "message"],
        properties: {
          status: {
            type: "integer",
            minimum: 400,
            maximum: 599,
            description:
              "The HTTP status code (also returned in the response header; see [Response Status Codes](/documentation/web-api/concepts/api-calls#response-status-codes) for more information).\n",
          },
          message: {
            type: "string",
            description: "A short description of the cause of the error.\n",
          },
        },
      },
      PrivateUserObject: {
        type: "object",
        "x-spotify-docs-type": "PrivateUserObject",
        properties: {
          country: {
            type: "string",
            description:
              "The country of the user, as set in the user's account profile. An [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._\n",
          },
          display_name: {
            type: "string",
            description:
              "The name displayed on the user's profile. `null` if not available.\n",
          },
          email: {
            type: "string",
            description:
              "The user's email address, as entered by the user when creating their account. _**Important!** This email address is unverified; there is no proof that it actually belongs to the user._ _This field is only available when the current user has granted access to the [user-read-email](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._\n",
          },
          explicit_content: {
            allOf: [
              {
                $ref: "#/components/schemas/ExplicitContentSettingsObject",
              },
            ],
            description:
              "The user's explicit content settings. _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._\n",
          },
          external_urls: {
            allOf: [
              {
                $ref: "#/components/schemas/ExternalUrlObject",
              },
            ],
            description: "Known external URLs for this user.",
          },
          followers: {
            allOf: [
              {
                $ref: "#/components/schemas/FollowersObject",
              },
            ],
            description: "Information about the followers of the user.",
          },
          href: {
            type: "string",
            description: "A link to the Web API endpoint for this user.\n",
          },
          id: {
            type: "string",
            description:
              "The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for the user.\n",
          },
          images: {
            type: "array",
            items: {
              $ref: "#/components/schemas/ImageObject",
            },
            description: "The user's profile image.",
          },
          product: {
            type: "string",
            description:
              'The user\'s Spotify subscription level: "premium", "free", etc. (The subscription level "open" can be considered the same as "free".) _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._\n',
          },
          type: {
            type: "string",
            description: 'The object type: "user"\n',
          },
          uri: {
            type: "string",
            description:
              "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the user.\n",
          },
        },
      },
      PublicUserObject: {
        type: "object",
        "x-spotify-docs-type": "PublicUserObject",
        properties: {
          display_name: {
            type: "string",
            nullable: true,
            description:
              "The name displayed on the user's profile. `null` if not available.\n",
          },
          external_urls: {
            allOf: [
              {
                $ref: "#/components/schemas/ExternalUrlObject",
              },
            ],
            description: "Known public external URLs for this user.\n",
          },
          followers: {
            allOf: [
              {
                $ref: "#/components/schemas/FollowersObject",
              },
            ],
            description: "Information about the followers of this user.\n",
          },
          href: {
            type: "string",
            description: "A link to the Web API endpoint for this user.\n",
          },
          id: {
            type: "string",
            description:
              "The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user.\n",
          },
          images: {
            type: "array",
            items: {
              $ref: "#/components/schemas/ImageObject",
            },
            description: "The user's profile image.\n",
          },
          type: {
            type: "string",
            enum: ["user"],
            description: "The object type.\n",
          },
          uri: {
            type: "string",
            description:
              "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.\n",
          },
        },
      },
      AudioAnalysisObject: {
        type: "object",
        "x-spotify-docs-type": "AudioAnalysisObject",
        properties: {
          meta: {
            type: "object",
            properties: {
              analyzer_version: {
                type: "string",
                example: "4.0.0",
                description:
                  "The version of the Analyzer used to analyze this track.",
              },
              platform: {
                type: "string",
                example: "Linux",
                description:
                  "The platform used to read the track's audio data.",
              },
              detailed_status: {
                type: "string",
                example: "OK",
                description:
                  "A detailed status code for this track. If analysis data is missing, this code may explain why.",
              },
              status_code: {
                type: "integer",
                example: 0,
                description:
                  "The return code of the analyzer process. 0 if successful, 1 if any errors occurred.",
              },
              timestamp: {
                type: "integer",
                example: 1495193577,
                description:
                  "The Unix timestamp (in seconds) at which this track was analyzed.",
              },
              analysis_time: {
                type: "number",
                example: 6.93906,
                description: "The amount of time taken to analyze this track.",
              },
              input_process: {
                type: "string",
                example: "libvorbisfile L+R 44100->22050",
                description: "The method used to read the track's audio data.",
              },
            },
          },
          track: {
            type: "object",
            properties: {
              num_samples: {
                type: "integer",
                example: 4585515,
                description:
                  "The exact number of audio samples analyzed from this track. See also `analysis_sample_rate`.",
              },
              duration: {
                type: "number",
                description: "Length of the track in seconds.",
                example: 207.95985,
              },
              sample_md5: {
                type: "string",
                description: "This field will always contain the empty string.",
              },
              offset_seconds: {
                type: "integer",
                example: 0,
                description:
                  "An offset to the start of the region of the track that was analyzed. (As the entire track is analyzed, this should always be 0.)",
              },
              window_seconds: {
                type: "integer",
                example: 0,
                description:
                  "The length of the region of the track was analyzed, if a subset of the track was analyzed. (As the entire track is analyzed, this should always be 0.)",
              },
              analysis_sample_rate: {
                type: "integer",
                example: 22050,
                description:
                  "The sample rate used to decode and analyze this track. May differ from the actual sample rate of this track available on Spotify.",
              },
              analysis_channels: {
                type: "integer",
                example: 1,
                description:
                  "The number of channels used for analysis. If 1, all channels are summed together to mono before analysis.",
              },
              end_of_fade_in: {
                type: "number",
                example: 0,
                description:
                  "The time, in seconds, at which the track's fade-in period ends. If the track has no fade-in, this will be 0.0.",
              },
              start_of_fade_out: {
                type: "number",
                example: 201.13705,
                description:
                  "The time, in seconds, at which the track's fade-out period starts. If the track has no fade-out, this should match the track's length.",
              },
              loudness: {
                $ref: "#/components/schemas/Loudness",
              },
              tempo: {
                $ref: "#/components/schemas/Tempo",
              },
              tempo_confidence: {
                type: "number",
                example: 0.73,
                minimum: 0,
                maximum: 1,
                description:
                  "The confidence, from 0.0 to 1.0, of the reliability of the `tempo`.",
              },
              time_signature: {
                $ref: "#/components/schemas/TimeSignature",
              },
              time_signature_confidence: {
                type: "number",
                example: 0.994,
                minimum: 0,
                maximum: 1,
                description:
                  "The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`.",
              },
              key: {
                $ref: "#/components/schemas/Key",
              },
              key_confidence: {
                type: "number",
                example: 0.408,
                minimum: 0,
                maximum: 1,
                description:
                  "The confidence, from 0.0 to 1.0, of the reliability of the `key`.",
              },
              mode: {
                $ref: "#/components/schemas/Mode",
              },
              mode_confidence: {
                type: "number",
                example: 0.485,
                minimum: 0,
                maximum: 1,
                description:
                  "The confidence, from 0.0 to 1.0, of the reliability of the `mode`.",
              },
              codestring: {
                type: "string",
                description:
                  "An [Echo Nest Musical Fingerprint (ENMFP)](https://academiccommons.columbia.edu/doi/10.7916/D8Q248M4) codestring for this track.",
              },
              code_version: {
                type: "number",
                example: 3.15,
                description:
                  "A version number for the Echo Nest Musical Fingerprint format used in the codestring field.",
              },
              echoprintstring: {
                type: "string",
                description:
                  "An [EchoPrint](https://github.com/spotify/echoprint-codegen) codestring for this track.",
              },
              echoprint_version: {
                type: "number",
                example: 4.15,
                description:
                  "A version number for the EchoPrint format used in the echoprintstring field.",
              },
              synchstring: {
                type: "string",
                description:
                  "A [Synchstring](https://github.com/echonest/synchdata) for this track.",
              },
              synch_version: {
                type: "number",
                example: 1,
                description:
                  "A version number for the Synchstring used in the synchstring field.",
              },
              rhythmstring: {
                type: "string",
                description:
                  "A Rhythmstring for this track. The format of this string is similar to the Synchstring.",
              },
              rhythm_version: {
                type: "number",
                example: 1,
                description:
                  "A version number for the Rhythmstring used in the rhythmstring field.",
              },
            },
          },
          bars: {
            type: "array",
            description:
              "The time intervals of the bars throughout the track. A bar (or measure) is a segment of time defined as a given number of beats.",
            items: {
              $ref: "#/components/schemas/TimeIntervalObject",
            },
          },
          beats: {
            type: "array",
            description:
              "The time intervals of beats throughout the track. A beat is the basic time unit of a piece of music; for example, each tick of a metronome. Beats are typically multiples of tatums.",
            items: {
              $ref: "#/components/schemas/TimeIntervalObject",
            },
          },
          sections: {
            type: "array",
            description:
              "Sections are defined by large variations in rhythm or timbre, e.g. chorus, verse, bridge, guitar solo, etc. Each section contains its own descriptions of tempo, key, mode, time_signature, and loudness.",
            items: {
              $ref: "#/components/schemas/SectionObject",
            },
          },
          segments: {
            type: "array",
            description:
              "Each segment contains a roughly conisistent sound throughout its duration.",
            items: {
              $ref: "#/components/schemas/SegmentObject",
            },
          },
          tatums: {
            type: "array",
            description:
              "A tatum represents the lowest regular pulse train that a listener intuitively infers from the timing of perceived musical events (segments).",
            items: {
              $ref: "#/components/schemas/TimeIntervalObject",
            },
          },
        },
      },
      TimeIntervalObject: {
        type: "object",
        properties: {
          start: {
            type: "number",
            description:
              "The starting point (in seconds) of the time interval.",
            example: 0.49567,
          },
          duration: {
            type: "number",
            description: "The duration (in seconds) of the time interval.",
            example: 2.18749,
          },
          confidence: {
            type: "number",
            description:
              "The confidence, from 0.0 to 1.0, of the reliability of the interval.",
            example: 0.925,
            minimum: 0,
            maximum: 1,
          },
        },
      },
      SectionObject: {
        type: "object",
        properties: {
          start: {
            type: "number",
            description: "The starting point (in seconds) of the section.",
            example: 0,
          },
          duration: {
            type: "number",
            description: "The duration (in seconds) of the section.",
            example: 6.97092,
          },
          confidence: {
            type: "number",
            description:
              'The confidence, from 0.0 to 1.0, of the reliability of the section\'s "designation".',
            example: 1,
            minimum: 0,
            maximum: 1,
          },
          loudness: {
            type: "number",
            description:
              "The overall loudness of the section in decibels (dB). Loudness values are useful for comparing relative loudness of sections within tracks.",
            example: -14.938,
          },
          tempo: {
            type: "number",
            description:
              "The overall estimated tempo of the section in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.",
            example: 113.178,
          },
          tempo_confidence: {
            type: "number",
            description:
              "The confidence, from 0.0 to 1.0, of the reliability of the tempo. Some tracks contain tempo changes or sounds which don't contain tempo (like pure speech) which would correspond to a low value in this field.",
            example: 0.647,
            minimum: 0,
            maximum: 1,
          },
          key: {
            type: "integer",
            description:
              "The estimated overall key of the section. The values in this field ranging from 0 to 11 mapping to pitches using standard Pitch Class notation (E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on). If no key was detected, the value is -1.",
            example: 9,
          },
          key_confidence: {
            type: "number",
            description:
              "The confidence, from 0.0 to 1.0, of the reliability of the key. Songs with many key changes may correspond to low values in this field.",
            example: 0.297,
            minimum: 0,
            maximum: 1,
          },
          mode: {
            type: "number",
            description:
              'Indicates the modality (major or minor) of a section, the type of scale from which its melodic content is derived. This field will contain a 0 for "minor", a 1 for "major", or a -1 for no result. Note that the major key (e.g. C major) could more likely be confused with the minor key at 3 semitones lower (e.g. A minor) as both keys carry the same pitches.',
            enum: [-1, 0, 1],
          },
          mode_confidence: {
            type: "number",
            description:
              "The confidence, from 0.0 to 1.0, of the reliability of the `mode`.",
            example: 0.471,
            minimum: 0,
            maximum: 1,
          },
          time_signature: {
            $ref: "#/components/schemas/TimeSignature",
          },
          time_signature_confidence: {
            type: "number",
            description:
              "The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`. Sections with time signature changes may correspond to low values in this field.",
            example: 1,
            minimum: 0,
            maximum: 1,
          },
        },
      },
      SegmentObject: {
        type: "object",
        properties: {
          start: {
            type: "number",
            description: "The starting point (in seconds) of the segment.",
            example: 0.70154,
          },
          duration: {
            type: "number",
            description: "The duration (in seconds) of the segment.",
            example: 0.19891,
          },
          confidence: {
            type: "number",
            example: 0.435,
            minimum: 0,
            maximum: 1,
            description:
              "The confidence, from 0.0 to 1.0, of the reliability of the segmentation. Segments of the song which are difficult to logically segment (e.g: noise) may correspond to low values in this field.\n",
          },
          loudness_start: {
            type: "number",
            description:
              'The onset loudness of the segment in decibels (dB). Combined with `loudness_max` and `loudness_max_time`, these components can be used to describe the "attack" of the segment.',
            example: -23.053,
          },
          loudness_max: {
            type: "number",
            description:
              'The peak loudness of the segment in decibels (dB). Combined with `loudness_start` and `loudness_max_time`, these components can be used to describe the "attack" of the segment.',
            example: -14.25,
          },
          loudness_max_time: {
            type: "number",
            description:
              'The segment-relative offset of the segment peak loudness in seconds. Combined with `loudness_start` and `loudness_max`, these components can be used to desctibe the "attack" of the segment.',
            example: 0.07305,
          },
          loudness_end: {
            type: "number",
            description:
              "The offset loudness of the segment in decibels (dB). This value should be equivalent to the loudness_start of the following segment.",
            example: 0,
          },
          pitches: {
            type: "array",
            description:
              "Pitch content is given by a “chroma” vector, corresponding to the 12 pitch classes C, C#, D to B, with values ranging from 0 to 1 that describe the relative dominance of every pitch in the chromatic scale. For example a C Major chord would likely be represented by large values of C, E and G (i.e. classes 0, 4, and 7).\n\nVectors are normalized to 1 by their strongest dimension, therefore noisy sounds are likely represented by values that are all close to 1, while pure tones are described by one value at 1 (the pitch) and others near 0.\nAs can be seen below, the 12 vector indices are a combination of low-power spectrum values at their respective pitch frequencies.\n![pitch vector](https://developer.spotify.com/assets/audio/Pitch_vector.png)\n",
            items: {
              type: "number",
              minimum: 0,
              maximum: 1,
            },
            example: [0.212, 0.141, 0.294],
          },
          timbre: {
            type: "array",
            description:
              "Timbre is the quality of a musical note or sound that distinguishes different types of musical instruments, or voices. It is a complex notion also referred to as sound color, texture, or tone quality, and is derived from the shape of a segment’s spectro-temporal surface, independently of pitch and loudness. The timbre feature is a vector that includes 12 unbounded values roughly centered around 0. Those values are high level abstractions of the spectral surface, ordered by degree of importance.\n\nFor completeness however, the first dimension represents the average loudness of the segment; second emphasizes brightness; third is more closely correlated to the flatness of a sound; fourth to sounds with a stronger attack; etc. See an image below representing the 12 basis functions (i.e. template segments).\n![timbre basis functions](https://developer.spotify.com/assets/audio/Timbre_basis_functions.png)\n\nThe actual timbre of the segment is best described as a linear combination of these 12 basis functions weighted by the coefficient values: timbre = c1 x b1 + c2 x b2 + ... + c12 x b12, where c1 to c12 represent the 12 coefficients and b1 to b12 the 12 basis functions as displayed below. Timbre vectors are best used in comparison with each other.\n",
            items: {
              type: "number",
            },
            example: [42.115, 64.373, -0.233],
          },
        },
      },
      TimeSignature: {
        type: "integer",
        description:
          'An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".',
        example: 4,
        minimum: 3,
        maximum: 7,
      },
      Tempo: {
        type: "number",
        example: 118.211,
        format: "float",
        "x-spotify-docs-type": "Float",
        description:
          "The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.\n",
      },
      Loudness: {
        type: "number",
        example: -5.883,
        format: "float",
        "x-spotify-docs-type": "Float",
        description:
          "The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.\n",
      },
      Key: {
        type: "integer",
        example: 9,
        minimum: -1,
        maximum: 11,
        description:
          "The key the track is in. Integers map to pitches using standard [Pitch Class notation](https://en.wikipedia.org/wiki/Pitch_class). E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.\n",
      },
      Mode: {
        type: "integer",
        example: 0,
        description:
          "Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.\n",
      },
      AudioFeaturesObject: {
        type: "object",
        "x-spotify-docs-type": "AudioFeaturesObject",
        properties: {
          acousticness: {
            type: "number",
            format: "float",
            example: 0.00242,
            minimum: 0,
            maximum: 1,
            "x-spotify-docs-type": "Float",
            description:
              "A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.\n",
          },
          analysis_url: {
            type: "string",
            example:
              "https://api.spotify.com/v1/audio-analysis/2takcwOaAZWiXQijPHIx7B\n",
            description:
              "A URL to access the full audio analysis of this track. An access token is required to access this data.\n",
          },
          danceability: {
            type: "number",
            example: 0.585,
            format: "float",
            "x-spotify-docs-type": "Float",
            description:
              "Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.\n",
          },
          duration_ms: {
            type: "integer",
            example: 237040,
            description: "The duration of the track in milliseconds.\n",
          },
          energy: {
            type: "number",
            example: 0.842,
            format: "float",
            "x-spotify-docs-type": "Float",
            description:
              "Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.\n",
          },
          id: {
            type: "string",
            example: "2takcwOaAZWiXQijPHIx7B",
            description: "The Spotify ID for the track.\n",
          },
          instrumentalness: {
            type: "number",
            example: 0.00686,
            format: "float",
            "x-spotify-docs-type": "Float",
            description:
              'Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.\n',
          },
          key: {
            $ref: "#/components/schemas/Key",
          },
          liveness: {
            type: "number",
            example: 0.0866,
            format: "float",
            "x-spotify-docs-type": "Float",
            description:
              "Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.\n",
          },
          loudness: {
            $ref: "#/components/schemas/Loudness",
          },
          mode: {
            $ref: "#/components/schemas/Mode",
          },
          speechiness: {
            type: "number",
            example: 0.0556,
            format: "float",
            "x-spotify-docs-type": "Float",
            description:
              "Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.\n",
          },
          tempo: {
            $ref: "#/components/schemas/Tempo",
          },
          time_signature: {
            $ref: "#/components/schemas/TimeSignature",
          },
          track_href: {
            type: "string",
            example:
              "https://api.spotify.com/v1/tracks/2takcwOaAZWiXQijPHIx7B\n",
            description:
              "A link to the Web API endpoint providing full details of the track.\n",
          },
          type: {
            type: "string",
            enum: ["audio_features"],
            description: "The object type.\n",
          },
          uri: {
            type: "string",
            example: "spotify:track:2takcwOaAZWiXQijPHIx7B",
            description: "The Spotify URI for the track.\n",
          },
          valence: {
            type: "number",
            example: 0.428,
            minimum: 0,
            maximum: 1,
            format: "float",
            "x-spotify-docs-type": "Float",
            description:
              "A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).\n",
          },
        },
      },
      SimplifiedTrackObject: {
        type: "object",
        "x-spotify-docs-type": "SimplifiedTrackObject",
        properties: {
          artists: {
            type: "array",
            items: {
              $ref: "#/components/schemas/SimplifiedArtistObject",
            },
            description:
              "The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist.",
          },
          available_markets: {
            type: "array",
            items: {
              type: "string",
            },
            description:
              "A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.\n",
          },
          disc_number: {
            type: "integer",
            description:
              "The disc number (usually `1` unless the album consists of more than one disc).",
          },
          duration_ms: {
            type: "integer",
            description: "The track length in milliseconds.",
          },
          explicit: {
            type: "boolean",
            description:
              "Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown).",
          },
          external_urls: {
            allOf: [
              {
                $ref: "#/components/schemas/ExternalUrlObject",
              },
            ],
            description: "External URLs for this track.\n",
          },
          href: {
            type: "string",
            description:
              "A link to the Web API endpoint providing full details of the track.",
          },
          id: {
            type: "string",
            description:
              "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.\n",
          },
          is_playable: {
            type: "boolean",
            description:
              "Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied. If `true`, the track is playable in the given market. Otherwise `false`.\n",
          },
          linked_from: {
            allOf: [
              {
                $ref: "#/components/schemas/LinkedTrackObject",
              },
            ],
            description:
              "Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied and is only part of the response if the track linking, in fact, exists. The requested track has been replaced with a different track. The track in the `linked_from` object contains information about the originally requested track.",
          },
          restrictions: {
            allOf: [
              {
                $ref: "#/components/schemas/TrackRestrictionObject",
              },
            ],
            description:
              "Included in the response when a content restriction is applied.\n",
          },
          name: {
            type: "string",
            description: "The name of the track.",
          },
          preview_url: {
            type: "string",
            nullable: true,
            description:
              "A URL to a 30 second preview (MP3 format) of the track.\n",
            "x-spotify-policy-list": [
              {
                $ref: "#/components/x-spotify-policy/policies/StandalonePreview",
              },
            ],
          },
          track_number: {
            type: "integer",
            description:
              "The number of the track. If an album has several discs, the track number is the number on the specified disc.\n",
          },
          type: {
            type: "string",
            description: 'The object type: "track".\n',
          },
          uri: {
            type: "string",
            description:
              "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.\n",
          },
          is_local: {
            type: "boolean",
            description: "Whether or not the track is from a local file.\n",
          },
        },
      },
      DeviceObject: {
        type: "object",
        "x-spotify-docs-type": "DeviceObject",
        properties: {
          id: {
            type: "string",
            nullable: true,
            description: "The device ID.",
          },
          is_active: {
            type: "boolean",
            description: "If this device is the currently active device.",
          },
          is_private_session: {
            type: "boolean",
            description: "If this device is currently in a private session.",
          },
          is_restricted: {
            type: "boolean",
            description:
              'Whether controlling this device is restricted. At present if this is "true" then no Web API commands will be accepted by this device.',
          },
          name: {
            type: "string",
            example: "Kitchen speaker",
            description:
              'A human-readable name for the device. Some devices have a name that the user can configure (e.g. \\"Loudest speaker\\") and some devices have a generic name associated with the manufacturer or device model.',
          },
          type: {
            type: "string",
            example: "computer",
            description:
              'Device type, such as "computer", "smartphone" or "speaker".',
          },
          volume_percent: {
            type: "integer",
            minimum: 0,
            example: 59,
            maximum: 100,
            nullable: true,
            description: "The current volume in percent.",
          },
          supports_volume: {
            type: "boolean",
            description: "If this device can be used to set the volume.",
          },
        },
      },
      CursorObject: {
        type: "object",
        "x-spotify-docs-type": "CursorObject",
        properties: {
          after: {
            type: "string",
            description:
              "The cursor to use as key to find the next page of items.",
          },
          before: {
            type: "string",
            description:
              "The cursor to use as key to find the previous page of items.",
          },
        },
      },
      CursorPagingObject: {
        type: "object",
        "x-spotify-docs-type": "CursorPagingObject",
        properties: {
          href: {
            type: "string",
            description:
              "A link to the Web API endpoint returning the full result of the request.",
          },
          limit: {
            type: "integer",
            description:
              "The maximum number of items in the response (as set in the query or by default).",
          },
          next: {
            type: "string",
            description: "URL to the next page of items. ( `null` if none)",
          },
          cursors: {
            allOf: [
              {
                $ref: "#/components/schemas/CursorObject",
              },
            ],
            description: "The cursors used to find the next set of items.",
          },
          total: {
            type: "integer",
            description: "The total number of items available to return.",
          },
        },
      },
      CursorPagingPlayHistoryObject: {
        type: "object",
        "x-spotify-docs-type": "PagingTrackObject",
        allOf: [
          {
            $ref: "#/components/schemas/CursorPagingObject",
          },
          {
            type: "object",
            properties: {
              items: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/PlayHistoryObject",
                },
              },
            },
          },
        ],
      },
      CursorPagingSimplifiedArtistObject: {
        type: "object",
        "x-spotify-docs-type": "PagingArtistObject",
        allOf: [
          {
            $ref: "#/components/schemas/CursorPagingObject",
          },
          {
            type: "object",
            properties: {
              items: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ArtistObject",
                },
              },
            },
          },
        ],
      },
      PagingObject: {
        type: "object",
        "x-spotify-docs-type": "PagingObject",
        required: [
          "href",
          "items",
          "limit",
          "next",
          "offset",
          "previous",
          "total",
        ],
        properties: {
          href: {
            type: "string",
            example: "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
            description:
              "A link to the Web API endpoint returning the full result of the request\n",
          },
          limit: {
            type: "integer",
            example: 20,
            description:
              "The maximum number of items in the response (as set in the query or by default).\n",
          },
          next: {
            type: "string",
            example: "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
            nullable: true,
            description: "URL to the next page of items. ( `null` if none)\n",
          },
          offset: {
            type: "integer",
            example: 0,
            description:
              "The offset of the items returned (as set in the query or by default)\n",
          },
          previous: {
            type: "string",
            example: "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
            nullable: true,
            description:
              "URL to the previous page of items. ( `null` if none)\n",
          },
          total: {
            type: "integer",
            example: 4,
            description: "The total number of items available to return.\n",
          },
        },
      },
      PagingPlaylistObject: {
        type: "object",
        "x-spotify-docs-type": "PagingPlaylistObject",
        allOf: [
          {
            $ref: "#/components/schemas/PagingObject",
          },
          {
            type: "object",
            properties: {
              items: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/SimplifiedPlaylistObject",
                },
              },
            },
          },
        ],
      },
      PagingFeaturedPlaylistObject: {
        type: "object",
        "x-spotify-docs-type": "PagingFeaturedPlaylistObject",
        properties: {
          message: {
            type: "string",
          },
          playlists: {
            $ref: "#/components/schemas/PagingPlaylistObject",
          },
        },
      },
      PagingArtistDiscographyAlbumObject: {
        type: "object",
        "x-spotify-docs-type": "PagingArtistDiscographyAlbumObject",
        allOf: [
          {
            $ref: "#/components/schemas/PagingObject",
          },
          {
            type: "object",
            properties: {
              items: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ArtistDiscographyAlbumObject",
                },
              },
            },
          },
        ],
      },
      PagingSimplifiedAlbumObject: {
        type: "object",
        "x-spotify-docs-type": "PagingAlbumObject",
        allOf: [
          {
            $ref: "#/components/schemas/PagingObject",
          },
          {
            type: "object",
            properties: {
              items: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/SimplifiedAlbumObject",
                },
              },
            },
          },
        ],
      },
      PagingSavedAlbumObject: {
        type: "object",
        "x-spotify-docs-type": "PagingSavedAlbumObject",
        allOf: [
          {
            $ref: "#/components/schemas/PagingObject",
          },
          {
            type: "object",
            properties: {
              items: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/SavedAlbumObject",
                },
              },
            },
          },
        ],
      },
      PagingSimplifiedTrackObject: {
        type: "object",
        "x-spotify-docs-type": "PagingTrackObject",
        allOf: [
          {
            $ref: "#/components/schemas/PagingObject",
          },
          {
            type: "object",
            properties: {
              items: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/SimplifiedTrackObject",
                },
              },
            },
          },
        ],
      },
      PagingSavedTrackObject: {
        type: "object",
        "x-spotify-docs-type": "PagingTrackObject",
        allOf: [
          {
            $ref: "#/components/schemas/PagingObject",
          },
          {
            type: "object",
            properties: {
              items: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/SavedTrackObject",
                },
              },
            },
          },
        ],
      },
      PagingTrackObject: {
        type: "object",
        "x-spotify-docs-type": "PagingTrackObject",
        allOf: [
          {
            $ref: "#/components/schemas/PagingObject",
          },
          {
            type: "object",
            properties: {
              items: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/TrackObject",
                },
              },
            },
          },
        ],
      },
      PagingPlaylistTrackObject: {
        type: "object",
        "x-spotify-docs-type": "PagingPlaylistTrackObject",
        allOf: [
          {
            $ref: "#/components/schemas/PagingObject",
          },
          {
            type: "object",
            properties: {
              items: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/PlaylistTrackObject",
                },
              },
            },
          },
        ],
      },
      PagingSimplifiedShowObject: {
        type: "object",
        "x-spotify-docs-type": "PagingShowObject",
        allOf: [
          {
            $ref: "#/components/schemas/PagingObject",
          },
          {
            type: "object",
            properties: {
              items: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/SimplifiedShowObject",
                },
              },
            },
          },
        ],
      },
      PagingSavedShowObject: {
        type: "object",
        "x-spotify-docs-type": "PagingShowObject",
        allOf: [
          {
            $ref: "#/components/schemas/PagingObject",
          },
          {
            type: "object",
            properties: {
              items: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/SavedShowObject",
                },
              },
            },
          },
        ],
      },
      PagingSimplifiedEpisodeObject: {
        type: "object",
        "x-spotify-docs-type": "PagingEpisodeObject",
        allOf: [
          {
            $ref: "#/components/schemas/PagingObject",
          },
          {
            type: "object",
            properties: {
              items: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/SimplifiedEpisodeObject",
                },
              },
            },
          },
        ],
      },
      PagingSavedEpisodeObject: {
        type: "object",
        "x-spotify-docs-type": "PagingEpisodeObject",
        allOf: [
          {
            $ref: "#/components/schemas/PagingObject",
          },
          {
            type: "object",
            properties: {
              items: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/SavedEpisodeObject",
                },
              },
            },
          },
        ],
      },
      PagingSimplifiedAudiobookObject: {
        type: "object",
        "x-spotify-docs-type": "PagingAudiobookObject",
        allOf: [
          {
            $ref: "#/components/schemas/PagingObject",
          },
          {
            type: "object",
            properties: {
              items: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/SimplifiedAudiobookObject",
                },
              },
            },
          },
        ],
      },
      PagingArtistObject: {
        type: "object",
        "x-spotify-docs-type": "PagingArtistObject",
        allOf: [
          {
            $ref: "#/components/schemas/PagingObject",
          },
          {
            type: "object",
            properties: {
              items: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ArtistObject",
                },
              },
            },
          },
        ],
      },
      PagingSimplifiedChapterObject: {
        type: "object",
        "x-spotify-docs-type": "PagingSimplifiedChapterObject",
        allOf: [
          {
            $ref: "#/components/schemas/PagingObject",
          },
          {
            type: "object",
            properties: {
              items: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/SimplifiedChapterObject",
                },
              },
            },
          },
        ],
      },
      RecommendationsObject: {
        type: "object",
        "x-spotify-docs-type": "RecommendationsObject",
        required: ["seeds", "tracks"],
        properties: {
          seeds: {
            type: "array",
            items: {
              $ref: "#/components/schemas/RecommendationSeedObject",
            },
            description: "An array of recommendation seed objects.\n",
          },
          tracks: {
            type: "array",
            items: {
              $ref: "#/components/schemas/TrackObject",
            },
            description:
              "An array of track object (simplified) ordered according to the parameters supplied.\n",
          },
        },
      },
      RecommendationSeedObject: {
        type: "object",
        "x-spotify-docs-type": "RecommendationSeedObject",
        properties: {
          afterFilteringSize: {
            type: "integer",
            description:
              "The number of tracks available after min\\_\\* and max\\_\\* filters have been applied.\n",
          },
          afterRelinkingSize: {
            type: "integer",
            description:
              "The number of tracks available after relinking for regional availability.\n",
          },
          href: {
            type: "string",
            description:
              "A link to the full track or artist data for this seed. For tracks this will be a link to a Track Object. For artists a link to an Artist Object. For genre seeds, this value will be `null`.\n",
          },
          id: {
            type: "string",
            description:
              "The id used to select this seed. This will be the same as the string used in the `seed_artists`, `seed_tracks` or `seed_genres` parameter.\n",
          },
          initialPoolSize: {
            type: "integer",
            description:
              "The number of recommended tracks available for this seed.\n",
          },
          type: {
            type: "string",
            description:
              "The entity type of this seed. One of `artist`, `track` or `genre`.\n",
          },
        },
      },
      SavedAlbumObject: {
        type: "object",
        "x-spotify-docs-type": "SavedAlbumObject",
        properties: {
          added_at: {
            type: "string",
            format: "date-time",
            "x-spotify-docs-type": "Timestamp",
            description:
              "The date and time the album was saved\nTimestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.\nIf the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.\n",
          },
          album: {
            allOf: [
              {
                $ref: "#/components/schemas/AlbumObject",
              },
            ],
            description: "Information about the album.",
          },
        },
      },
      SavedTrackObject: {
        type: "object",
        "x-spotify-docs-type": "SavedTrackObject",
        properties: {
          added_at: {
            type: "string",
            format: "date-time",
            "x-spotify-docs-type": "Timestamp",
            description:
              "The date and time the track was saved.\nTimestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.\nIf the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.\n",
          },
          track: {
            allOf: [
              {
                $ref: "#/components/schemas/TrackObject",
              },
            ],
            description: "Information about the track.",
          },
        },
      },
      SavedEpisodeObject: {
        type: "object",
        "x-spotify-docs-type": "SavedEpisodeObject",
        properties: {
          added_at: {
            type: "string",
            format: "date-time",
            "x-spotify-docs-type": "Timestamp",
            description:
              "The date and time the episode was saved.\nTimestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.\n",
          },
          episode: {
            allOf: [
              {
                $ref: "#/components/schemas/EpisodeObject",
              },
            ],
            description: "Information about the episode.",
          },
        },
      },
      SavedShowObject: {
        type: "object",
        "x-spotify-docs-type": "SavedShowObject",
        properties: {
          added_at: {
            type: "string",
            format: "date-time",
            "x-spotify-docs-type": "Timestamp",
            description:
              "The date and time the show was saved.\nTimestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.\nIf the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.\n",
          },
          show: {
            allOf: [
              {
                $ref: "#/components/schemas/SimplifiedShowObject",
              },
            ],
            description: "Information about the show.",
          },
        },
      },
      PlaylistObject: {
        type: "object",
        "x-spotify-docs-type": "PlaylistObject",
        properties: {
          collaborative: {
            type: "boolean",
            description:
              "`true` if the owner allows other users to modify the playlist.\n",
          },
          description: {
            type: "string",
            nullable: true,
            description:
              "The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.\n",
          },
          external_urls: {
            allOf: [
              {
                $ref: "#/components/schemas/ExternalUrlObject",
              },
            ],
            description: "Known external URLs for this playlist.\n",
          },
          followers: {
            allOf: [
              {
                $ref: "#/components/schemas/FollowersObject",
              },
            ],
            description: "Information about the followers of the playlist.",
          },
          href: {
            type: "string",
            description:
              "A link to the Web API endpoint providing full details of the playlist.\n",
          },
          id: {
            type: "string",
            description:
              "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.\n",
          },
          images: {
            type: "array",
            items: {
              $ref: "#/components/schemas/ImageObject",
            },
            description:
              "Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](/documentation/web-api/concepts/playlists). _**Note**: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._\n",
          },
          name: {
            type: "string",
            description: "The name of the playlist.\n",
          },
          owner: {
            allOf: [
              {
                $ref: "#/components/schemas/PlaylistOwnerObject",
              },
            ],
            description: "The user who owns the playlist\n",
          },
          public: {
            type: "boolean",
            description:
              "The playlist's public/private status: `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)\n",
          },
          snapshot_id: {
            type: "string",
            description:
              "The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version\n",
          },
          tracks: {
            type: "object",
            allOf: [
              {
                $ref: "#/components/schemas/PagingPlaylistTrackObject",
              },
            ],
            description: "The tracks of the playlist.\n",
          },
          type: {
            type: "string",
            description: 'The object type: "playlist"\n',
          },
          uri: {
            type: "string",
            description:
              "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.\n",
          },
        },
      },
      SimplifiedPlaylistObject: {
        type: "object",
        "x-spotify-docs-type": "SimplifiedPlaylistObject",
        properties: {
          collaborative: {
            type: "boolean",
            description:
              "`true` if the owner allows other users to modify the playlist.\n",
          },
          description: {
            type: "string",
            description:
              "The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.\n",
          },
          external_urls: {
            allOf: [
              {
                $ref: "#/components/schemas/ExternalUrlObject",
              },
            ],
            description: "Known external URLs for this playlist.\n",
          },
          href: {
            type: "string",
            description:
              "A link to the Web API endpoint providing full details of the playlist.\n",
          },
          id: {
            type: "string",
            description:
              "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.\n",
          },
          images: {
            type: "array",
            items: {
              $ref: "#/components/schemas/ImageObject",
            },
            description:
              "Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](/documentation/web-api/concepts/playlists). _**Note**: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._\n",
          },
          name: {
            type: "string",
            description: "The name of the playlist.\n",
          },
          owner: {
            allOf: [
              {
                $ref: "#/components/schemas/PlaylistOwnerObject",
              },
            ],
            description: "The user who owns the playlist\n",
          },
          public: {
            type: "boolean",
            description:
              "The playlist's public/private status: `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)\n",
          },
          snapshot_id: {
            type: "string",
            description:
              "The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version\n",
          },
          tracks: {
            allOf: [
              {
                $ref: "#/components/schemas/PlaylistTracksRefObject",
              },
            ],
            description:
              "A collection containing a link ( `href` ) to the Web API endpoint where full details of the playlist's tracks can be retrieved, along with the `total` number of tracks in the playlist. Note, a track object may be `null`. This can happen if a track is no longer available.\n",
          },
          type: {
            type: "string",
            description: 'The object type: "playlist"\n',
          },
          uri: {
            type: "string",
            description:
              "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.\n",
          },
        },
      },
      PlaylistTracksRefObject: {
        type: "object",
        "x-spotify-docs-type": "PlaylistTracksRefObject",
        properties: {
          href: {
            type: "string",
            description:
              "A link to the Web API endpoint where full details of the playlist's tracks can be retrieved.\n",
          },
          total: {
            type: "integer",
            description: "Number of tracks in the playlist.\n",
          },
        },
      },
      PlaylistUserObject: {
        type: "object",
        "x-spotify-docs-type": "PlaylistUserObject",
        properties: {
          external_urls: {
            allOf: [
              {
                $ref: "#/components/schemas/ExternalUrlObject",
              },
            ],
            description: "Known public external URLs for this user.\n",
          },
          followers: {
            allOf: [
              {
                $ref: "#/components/schemas/FollowersObject",
              },
            ],
            description: "Information about the followers of this user.\n",
          },
          href: {
            type: "string",
            description: "A link to the Web API endpoint for this user.\n",
          },
          id: {
            type: "string",
            description:
              "The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user.\n",
          },
          type: {
            type: "string",
            enum: ["user"],
            description: "The object type.\n",
          },
          uri: {
            type: "string",
            description:
              "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.\n",
          },
        },
      },
      PlaylistOwnerObject: {
        allOf: [
          {
            $ref: "#/components/schemas/PlaylistUserObject",
          },
          {
            type: "object",
            properties: {
              display_name: {
                type: "string",
                nullable: true,
                description:
                  "The name displayed on the user's profile. `null` if not available.\n",
              },
            },
          },
        ],
      },
      CategoryObject: {
        type: "object",
        "x-spotify-docs-type": "CategoryObject",
        required: ["href", "icons", "id", "name"],
        properties: {
          href: {
            type: "string",
            description:
              "A link to the Web API endpoint returning full details of the category.\n",
          },
          icons: {
            type: "array",
            items: {
              $ref: "#/components/schemas/ImageObject",
            },
            description: "The category icon, in various sizes.\n",
          },
          id: {
            type: "string",
            example: "equal",
            description:
              "The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) of the category.\n",
          },
          name: {
            type: "string",
            example: "EQUAL",
            description: "The name of the category.\n",
          },
        },
      },
      TrackObject: {
        type: "object",
        "x-spotify-docs-type": "TrackObject",
        properties: {
          album: {
            allOf: [
              {
                $ref: "#/components/schemas/SimplifiedAlbumObject",
              },
            ],
            description:
              "The album on which the track appears. The album object includes a link in `href` to full information about the album.\n",
          },
          artists: {
            type: "array",
            items: {
              $ref: "#/components/schemas/ArtistObject",
            },
            description:
              "The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist.\n",
          },
          available_markets: {
            type: "array",
            items: {
              type: "string",
            },
            description:
              "A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.\n",
          },
          disc_number: {
            type: "integer",
            description:
              "The disc number (usually `1` unless the album consists of more than one disc).\n",
          },
          duration_ms: {
            type: "integer",
            description: "The track length in milliseconds.\n",
          },
          explicit: {
            type: "boolean",
            description:
              "Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown).\n",
          },
          external_ids: {
            allOf: [
              {
                $ref: "#/components/schemas/ExternalIdObject",
              },
            ],
            description: "Known external IDs for the track.\n",
          },
          external_urls: {
            allOf: [
              {
                $ref: "#/components/schemas/ExternalUrlObject",
              },
            ],
            description: "Known external URLs for this track.\n",
          },
          href: {
            type: "string",
            description:
              "A link to the Web API endpoint providing full details of the track.\n",
          },
          id: {
            type: "string",
            description:
              "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.\n",
          },
          is_playable: {
            type: "boolean",
            description:
              "Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied. If `true`, the track is playable in the given market. Otherwise `false`.\n",
          },
          linked_from: {
            type: "object",
            description:
              "Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied, and the requested track has been replaced with different track. The track in the `linked_from` object contains information about the originally requested track.\n",
          },
          restrictions: {
            allOf: [
              {
                $ref: "#/components/schemas/TrackRestrictionObject",
              },
            ],
            description:
              "Included in the response when a content restriction is applied.\n",
          },
          name: {
            type: "string",
            description: "The name of the track.\n",
          },
          popularity: {
            type: "integer",
            description:
              "The popularity of the track. The value will be between 0 and 100, with 100 being the most popular.<br/>The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.<br/>Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated independently. Artist and album popularity is derived mathematically from track popularity. _**Note**: the popularity value may lag actual popularity by a few days: the value is not updated in real time._\n",
          },
          preview_url: {
            type: "string",
            nullable: true,
            description:
              "A link to a 30 second preview (MP3 format) of the track. Can be `null`\n",
            "x-spotify-policy-list": [
              {
                $ref: "#/components/x-spotify-policy/policies/StandalonePreview",
              },
            ],
          },
          track_number: {
            type: "integer",
            description:
              "The number of the track. If an album has several discs, the track number is the number on the specified disc.\n",
          },
          type: {
            type: "string",
            description: 'The object type: "track".\n',
            enum: ["track"],
          },
          uri: {
            type: "string",
            description:
              "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.\n",
          },
          is_local: {
            type: "boolean",
            description: "Whether or not the track is from a local file.\n",
          },
        },
      },
      EpisodeObject: {
        "x-spotify-docs-type": "EpisodeObject",
        type: "object",
        allOf: [
          {
            $ref: "#/components/schemas/EpisodeBase",
          },
          {
            type: "object",
            required: ["show"],
            properties: {
              show: {
                allOf: [
                  {
                    $ref: "#/components/schemas/SimplifiedShowObject",
                  },
                ],
                description: "The show on which the episode belongs.\n",
              },
            },
          },
        ],
      },
      SimplifiedEpisodeObject: {
        "x-spotify-docs-type": "SimplifiedEpisodeObject",
        type: "object",
        allOf: [
          {
            $ref: "#/components/schemas/EpisodeBase",
          },
          {
            type: "object",
          },
        ],
      },
      EpisodeBase: {
        type: "object",
        required: [
          "audio_preview_url",
          "description",
          "html_description",
          "duration_ms",
          "explicit",
          "external_urls",
          "href",
          "id",
          "images",
          "is_externally_hosted",
          "is_playable",
          "languages",
          "name",
          "release_date",
          "release_date_precision",
          "resume_point",
          "type",
          "uri",
        ],
        properties: {
          audio_preview_url: {
            type: "string",
            nullable: true,
            example:
              "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
            description:
              "A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.\n",
            "x-spotify-policy-list": [
              {
                $ref: "#/components/x-spotify-policy/policies/StandalonePreview",
              },
            ],
          },
          description: {
            type: "string",
            example:
              "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
            description:
              "A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.\n",
          },
          html_description: {
            type: "string",
            example:
              "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
            description:
              "A description of the episode. This field may contain HTML tags.\n",
          },
          duration_ms: {
            type: "integer",
            example: 1686230,
            description: "The episode length in milliseconds.\n",
          },
          explicit: {
            type: "boolean",
            description:
              "Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).\n",
          },
          external_urls: {
            allOf: [
              {
                $ref: "#/components/schemas/ExternalUrlObject",
              },
            ],
            description: "External URLs for this episode.\n",
          },
          href: {
            type: "string",
            example:
              "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
            description:
              "A link to the Web API endpoint providing full details of the episode.\n",
          },
          id: {
            type: "string",
            example: "5Xt5DXGzch68nYYamXrNxZ",
            description:
              "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.\n",
          },
          images: {
            type: "array",
            items: {
              $ref: "#/components/schemas/ImageObject",
            },
            description:
              "The cover art for the episode in various sizes, widest first.\n",
          },
          is_externally_hosted: {
            type: "boolean",
            description:
              "True if the episode is hosted outside of Spotify's CDN.\n",
          },
          is_playable: {
            type: "boolean",
            description:
              "True if the episode is playable in the given market. Otherwise false.\n",
          },
          language: {
            type: "string",
            deprecated: true,
            example: "en",
            description:
              "The language used in the episode, identified by a [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code. This field is deprecated and might be removed in the future. Please use the `languages` field instead.\n",
          },
          languages: {
            type: "array",
            items: {
              type: "string",
            },
            example: ["fr", "en"],
            description:
              "A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.\n",
          },
          name: {
            type: "string",
            example:
              "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
            description: "The name of the episode.\n",
          },
          release_date: {
            type: "string",
            example: "1981-12-15",
            description:
              'The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.\n',
          },
          release_date_precision: {
            type: "string",
            example: "day",
            enum: ["year", "month", "day"],
            description:
              "The precision with which `release_date` value is known.\n",
          },
          resume_point: {
            allOf: [
              {
                $ref: "#/components/schemas/ResumePointObject",
              },
            ],
            description:
              "The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.\n",
          },
          type: {
            type: "string",
            enum: ["episode"],
            description: "The object type.\n",
          },
          uri: {
            type: "string",
            example: "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr",
            description:
              "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the episode.\n",
          },
          restrictions: {
            allOf: [
              {
                $ref: "#/components/schemas/EpisodeRestrictionObject",
              },
            ],
            description:
              "Included in the response when a content restriction is applied.\n",
          },
        },
      },
      ResumePointObject: {
        type: "object",
        "x-spotify-docs-type": "ResumePointObject",
        properties: {
          fully_played: {
            type: "boolean",
            description:
              "Whether or not the episode has been fully played by the user.\n",
          },
          resume_position_ms: {
            type: "integer",
            description:
              "The user's most recent position in the episode in milliseconds.\n",
          },
        },
      },
      ShowBase: {
        type: "object",
        required: [
          "available_markets",
          "copyrights",
          "description",
          "explicit",
          "external_urls",
          "href",
          "html_description",
          "id",
          "images",
          "is_externally_hosted",
          "languages",
          "media_type",
          "name",
          "publisher",
          "total_episodes",
          "type",
          "uri",
        ],
        properties: {
          available_markets: {
            type: "array",
            items: {
              type: "string",
            },
            description:
              "A list of the countries in which the show can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.\n",
          },
          copyrights: {
            type: "array",
            items: {
              $ref: "#/components/schemas/CopyrightObject",
            },
            description: "The copyright statements of the show.\n",
          },
          description: {
            type: "string",
            description:
              "A description of the show. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.\n",
          },
          html_description: {
            type: "string",
            description:
              "A description of the show. This field may contain HTML tags.\n",
          },
          explicit: {
            type: "boolean",
            description:
              "Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown).\n",
          },
          external_urls: {
            allOf: [
              {
                $ref: "#/components/schemas/ExternalUrlObject",
              },
            ],
            description: "External URLs for this show.\n",
          },
          href: {
            type: "string",
            description:
              "A link to the Web API endpoint providing full details of the show.\n",
          },
          id: {
            type: "string",
            description:
              "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the show.\n",
          },
          images: {
            type: "array",
            items: {
              $ref: "#/components/schemas/ImageObject",
            },
            description:
              "The cover art for the show in various sizes, widest first.\n",
          },
          is_externally_hosted: {
            type: "boolean",
            description:
              "True if all of the shows episodes are hosted outside of Spotify's CDN. This field might be `null` in some cases.\n",
          },
          languages: {
            type: "array",
            items: {
              type: "string",
            },
            description:
              "A list of the languages used in the show, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.\n",
          },
          media_type: {
            type: "string",
            description: "The media type of the show.\n",
          },
          name: {
            type: "string",
            description: "The name of the episode.\n",
          },
          publisher: {
            type: "string",
            description: "The publisher of the show.\n",
          },
          type: {
            type: "string",
            enum: ["show"],
            description: "The object type.\n",
          },
          uri: {
            type: "string",
            description:
              "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the show.\n",
          },
          total_episodes: {
            type: "integer",
            description: "The total number of episodes in the show.\n",
          },
        },
      },
      ShowObject: {
        "x-spotify-docs-type": "ShowObject",
        allOf: [
          {
            $ref: "#/components/schemas/ShowBase",
          },
          {
            type: "object",
            required: ["episodes"],
            properties: {
              episodes: {
                type: "object",
                allOf: [
                  {
                    $ref: "#/components/schemas/PagingSimplifiedEpisodeObject",
                  },
                ],
                description: "The episodes of the show.\n",
              },
            },
          },
        ],
      },
      SimplifiedShowObject: {
        "x-spotify-docs-type": "SimplifiedShowObject",
        allOf: [
          {
            $ref: "#/components/schemas/ShowBase",
          },
          {
            type: "object",
          },
        ],
      },
      AudiobookBase: {
        type: "object",
        required: [
          "authors",
          "available_markets",
          "copyrights",
          "description",
          "explicit",
          "external_urls",
          "href",
          "html_description",
          "id",
          "images",
          "languages",
          "media_type",
          "name",
          "narrators",
          "publisher",
          "total_chapters",
          "type",
          "uri",
        ],
        properties: {
          authors: {
            type: "array",
            items: {
              $ref: "#/components/schemas/AuthorObject",
            },
            description: "The author(s) for the audiobook.\n",
          },
          available_markets: {
            type: "array",
            items: {
              type: "string",
            },
            description:
              "A list of the countries in which the audiobook can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.\n",
          },
          copyrights: {
            type: "array",
            items: {
              $ref: "#/components/schemas/CopyrightObject",
            },
            description: "The copyright statements of the audiobook.\n",
          },
          description: {
            type: "string",
            description:
              "A description of the audiobook. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.\n",
          },
          html_description: {
            type: "string",
            description:
              "A description of the audiobook. This field may contain HTML tags.\n",
          },
          edition: {
            type: "string",
            description: "The edition of the audiobook.\n",
            example: "Unabridged",
          },
          explicit: {
            type: "boolean",
            description:
              "Whether or not the audiobook has explicit content (true = yes it does; false = no it does not OR unknown).\n",
          },
          external_urls: {
            allOf: [
              {
                $ref: "#/components/schemas/ExternalUrlObject",
              },
            ],
            description: "External URLs for this audiobook.\n",
          },
          href: {
            type: "string",
            description:
              "A link to the Web API endpoint providing full details of the audiobook.\n",
          },
          id: {
            type: "string",
            description:
              "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.\n",
          },
          images: {
            type: "array",
            items: {
              $ref: "#/components/schemas/ImageObject",
            },
            description:
              "The cover art for the audiobook in various sizes, widest first.\n",
          },
          languages: {
            type: "array",
            items: {
              type: "string",
            },
            description:
              "A list of the languages used in the audiobook, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.\n",
          },
          media_type: {
            type: "string",
            description: "The media type of the audiobook.\n",
          },
          name: {
            type: "string",
            description: "The name of the audiobook.\n",
          },
          narrators: {
            type: "array",
            items: {
              $ref: "#/components/schemas/NarratorObject",
            },
            description: "The narrator(s) for the audiobook.\n",
          },
          publisher: {
            type: "string",
            description: "The publisher of the audiobook.\n",
          },
          type: {
            type: "string",
            enum: ["audiobook"],
            description: "The object type.\n",
          },
          uri: {
            type: "string",
            description:
              "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.\n",
          },
          total_chapters: {
            type: "integer",
            description: "The number of chapters in this audiobook.\n",
          },
        },
      },
      AudiobookObject: {
        "x-spotify-docs-type": "AudiobookObject",
        allOf: [
          {
            $ref: "#/components/schemas/AudiobookBase",
          },
          {
            type: "object",
            required: ["chapters"],
            properties: {
              chapters: {
                type: "object",
                allOf: [
                  {
                    $ref: "#/components/schemas/PagingSimplifiedChapterObject",
                  },
                ],
                description: "The chapters of the audiobook.\n",
              },
            },
          },
        ],
      },
      SimplifiedAudiobookObject: {
        "x-spotify-docs-type": "SimplifiedAudiobookObject",
        allOf: [
          {
            $ref: "#/components/schemas/AudiobookBase",
          },
          {
            type: "object",
          },
        ],
      },
      AlbumBase: {
        type: "object",
        required: [
          "album_type",
          "total_tracks",
          "available_markets",
          "external_urls",
          "href",
          "id",
          "images",
          "name",
          "release_date",
          "release_date_precision",
          "type",
          "uri",
        ],
        properties: {
          album_type: {
            type: "string",
            description: "The type of the album.\n",
            enum: ["album", "single", "compilation"],
            example: "compilation",
          },
          total_tracks: {
            type: "integer",
            description: "The number of tracks in the album.",
            example: 9,
          },
          available_markets: {
            type: "array",
            items: {
              type: "string",
            },
            example: ["CA", "BR", "IT"],
            description:
              "The markets in which the album is available: [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _**NOTE**: an album is considered available in a market when at least 1 of its tracks is available in that market._\n",
          },
          external_urls: {
            allOf: [
              {
                $ref: "#/components/schemas/ExternalUrlObject",
              },
            ],
            description: "Known external URLs for this album.\n",
          },
          href: {
            type: "string",
            description:
              "A link to the Web API endpoint providing full details of the album.\n",
          },
          id: {
            type: "string",
            description:
              "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the album.\n",
            example: "2up3OPMp9Tb4dAKM2erWXQ",
          },
          images: {
            type: "array",
            items: {
              $ref: "#/components/schemas/ImageObject",
            },
            description:
              "The cover art for the album in various sizes, widest first.\n",
          },
          name: {
            type: "string",
            description:
              "The name of the album. In case of an album takedown, the value may be an empty string.\n",
          },
          release_date: {
            type: "string",
            example: "1981-12",
            description: "The date the album was first released.\n",
          },
          release_date_precision: {
            type: "string",
            enum: ["year", "month", "day"],
            example: "year",
            description:
              "The precision with which `release_date` value is known.\n",
          },
          restrictions: {
            allOf: [
              {
                $ref: "#/components/schemas/AlbumRestrictionObject",
              },
            ],
            description:
              "Included in the response when a content restriction is applied.\n",
          },
          type: {
            type: "string",
            enum: ["album"],
            description: "The object type.\n",
          },
          uri: {
            type: "string",
            example: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
            description:
              "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the album.\n",
          },
        },
      },
      SimplifiedAlbumObject: {
        "x-spotify-docs-type": "SimplifiedAlbumObject",
        allOf: [
          {
            $ref: "#/components/schemas/AlbumBase",
          },
          {
            type: "object",
            required: ["artists"],
            properties: {
              artists: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/SimplifiedArtistObject",
                },
                description:
                  "The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.\n",
              },
            },
          },
        ],
      },
      ArtistDiscographyAlbumObject: {
        "x-spotify-docs-type": "ArtistDiscographyAlbumObject",
        allOf: [
          {
            $ref: "#/components/schemas/SimplifiedAlbumObject",
          },
          {
            type: "object",
            required: ["album_group"],
            properties: {
              album_group: {
                type: "string",
                enum: ["album", "single", "compilation", "appears_on"],
                example: "compilation",
                description:
                  "This field describes the relationship between the artist and the album.\n",
              },
            },
          },
        ],
      },
      ChapterObject: {
        "x-spotify-docs-type": "ChapterObject",
        type: "object",
        allOf: [
          {
            $ref: "#/components/schemas/ChapterBase",
          },
          {
            type: "object",
            required: ["audiobook"],
            properties: {
              audiobook: {
                allOf: [
                  {
                    $ref: "#/components/schemas/SimplifiedAudiobookObject",
                  },
                ],
                description: "The audiobook for which the chapter belongs.\n",
              },
            },
          },
        ],
      },
      SimplifiedChapterObject: {
        "x-spotify-docs-type": "SimplifiedChapterObject",
        type: "object",
        allOf: [
          {
            $ref: "#/components/schemas/ChapterBase",
          },
          {
            type: "object",
          },
        ],
      },
      ChapterBase: {
        type: "object",
        required: [
          "audio_preview_url",
          "chapter_number",
          "description",
          "html_description",
          "duration_ms",
          "explicit",
          "external_urls",
          "href",
          "id",
          "images",
          "is_playable",
          "languages",
          "name",
          "release_date",
          "release_date_precision",
          "resume_point",
          "type",
          "uri",
        ],
        properties: {
          audio_preview_url: {
            type: "string",
            nullable: true,
            example:
              "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
            description:
              "A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.\n",
            "x-spotify-policy-list": [
              {
                $ref: "#/components/x-spotify-policy/policies/StandalonePreview",
              },
            ],
          },
          available_markets: {
            type: "array",
            items: {
              type: "string",
            },
            description:
              "A list of the countries in which the chapter can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.\n",
          },
          chapter_number: {
            type: "integer",
            example: 1,
            description: "The number of the chapter\n",
          },
          description: {
            type: "string",
            example:
              "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
            description:
              "A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.\n",
          },
          html_description: {
            type: "string",
            example:
              "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
            description:
              "A description of the episode. This field may contain HTML tags.\n",
          },
          duration_ms: {
            type: "integer",
            example: 1686230,
            description: "The episode length in milliseconds.\n",
          },
          explicit: {
            type: "boolean",
            description:
              "Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).\n",
          },
          external_urls: {
            allOf: [
              {
                $ref: "#/components/schemas/ExternalUrlObject",
              },
            ],
            description: "External URLs for this episode.\n",
          },
          href: {
            type: "string",
            example:
              "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
            description:
              "A link to the Web API endpoint providing full details of the episode.\n",
          },
          id: {
            type: "string",
            example: "5Xt5DXGzch68nYYamXrNxZ",
            description:
              "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.\n",
          },
          images: {
            type: "array",
            items: {
              $ref: "#/components/schemas/ImageObject",
            },
            description:
              "The cover art for the episode in various sizes, widest first.\n",
          },
          is_playable: {
            type: "boolean",
            description:
              "True if the episode is playable in the given market. Otherwise false.\n",
          },
          languages: {
            type: "array",
            items: {
              type: "string",
            },
            example: ["fr", "en"],
            description:
              "A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.\n",
          },
          name: {
            type: "string",
            example:
              "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
            description: "The name of the episode.\n",
          },
          release_date: {
            type: "string",
            example: "1981-12-15",
            description:
              'The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.\n',
          },
          release_date_precision: {
            type: "string",
            example: "day",
            enum: ["year", "month", "day"],
            description:
              "The precision with which `release_date` value is known.\n",
          },
          resume_point: {
            allOf: [
              {
                $ref: "#/components/schemas/ResumePointObject",
              },
            ],
            description:
              "The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.\n",
          },
          type: {
            type: "string",
            enum: ["episode"],
            description: "The object type.\n",
          },
          uri: {
            type: "string",
            example: "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr",
            description:
              "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the episode.\n",
          },
          restrictions: {
            allOf: [
              {
                $ref: "#/components/schemas/ChapterRestrictionObject",
              },
            ],
            description:
              "Included in the response when a content restriction is applied.\n",
          },
        },
      },
      AlbumObject: {
        "x-spotify-docs-type": "AlbumObject",
        required: [
          "artists",
          "tracks",
          "copyrights",
          "external_ids",
          "genres",
          "label",
          "popularity",
        ],
        allOf: [
          {
            $ref: "#/components/schemas/AlbumBase",
          },
          {
            type: "object",
            properties: {
              artists: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/SimplifiedArtistObject",
                },
                description:
                  "The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.\n",
              },
              tracks: {
                allOf: [
                  {
                    $ref: "#/components/schemas/PagingSimplifiedTrackObject",
                  },
                ],
                description: "The tracks of the album.\n",
              },
              copyrights: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/CopyrightObject",
                },
                description: "The copyright statements of the album.\n",
              },
              external_ids: {
                allOf: [
                  {
                    $ref: "#/components/schemas/ExternalIdObject",
                  },
                ],
                description: "Known external IDs for the album.\n",
              },
              genres: {
                type: "array",
                items: {
                  type: "string",
                },
                example: ["Egg punk", "Noise rock"],
                description:
                  "A list of the genres the album is associated with. If not yet classified, the array is empty.\n",
              },
              label: {
                type: "string",
                description: "The label associated with the album.\n",
              },
              popularity: {
                type: "integer",
                description:
                  "The popularity of the album. The value will be between 0 and 100, with 100 being the most popular.\n",
              },
            },
          },
        ],
      },
      ContextObject: {
        type: "object",
        "x-spotify-docs-type": "ContextObject",
        properties: {
          type: {
            type: "string",
            description:
              'The object type, e.g. "artist", "playlist", "album", "show".\n',
          },
          href: {
            type: "string",
            description:
              "A link to the Web API endpoint providing full details of the track.",
          },
          external_urls: {
            allOf: [
              {
                $ref: "#/components/schemas/ExternalUrlObject",
              },
            ],
            description: "External URLs for this context.",
          },
          uri: {
            type: "string",
            description:
              "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the context.\n",
          },
        },
      },
      CopyrightObject: {
        type: "object",
        "x-spotify-docs-type": "CopyrightObject",
        properties: {
          text: {
            type: "string",
            description: "The copyright text for this content.\n",
          },
          type: {
            type: "string",
            description:
              "The type of copyright: `C` = the copyright, `P` = the sound recording (performance) copyright.\n",
          },
        },
      },
      AuthorObject: {
        type: "object",
        "x-spotify-docs-type": "AuthorObject",
        properties: {
          name: {
            type: "string",
            description: "The name of the author.\n",
          },
        },
      },
      NarratorObject: {
        type: "object",
        "x-spotify-docs-type": "NarratorObject",
        properties: {
          name: {
            type: "string",
            description: "The name of the Narrator.\n",
          },
        },
      },
      ExternalIdObject: {
        type: "object",
        "x-spotify-docs-type": "ExternalIdObject",
        properties: {
          isrc: {
            type: "string",
            description:
              "[International Standard Recording Code](http://en.wikipedia.org/wiki/International_Standard_Recording_Code)\n",
          },
          ean: {
            type: "string",
            description:
              "[International Article Number](http://en.wikipedia.org/wiki/International_Article_Number_%28EAN%29)\n",
          },
          upc: {
            type: "string",
            description:
              "[Universal Product Code](http://en.wikipedia.org/wiki/Universal_Product_Code)\n",
          },
        },
      },
      ExternalUrlObject: {
        type: "object",
        "x-spotify-docs-type": "ExternalUrlObject",
        properties: {
          spotify: {
            type: "string",
            description:
              "The [Spotify URL](/documentation/web-api/concepts/spotify-uris-ids) for the object.\n",
          },
        },
      },
      FollowersObject: {
        type: "object",
        "x-spotify-docs-type": "FollowersObject",
        properties: {
          href: {
            type: "string",
            nullable: true,
            description:
              "This will always be set to null, as the Web API does not support it at the moment.\n",
          },
          total: {
            type: "integer",
            description: "The total number of followers.\n",
          },
        },
      },
      ImageObject: {
        type: "object",
        "x-spotify-docs-type": "ImageObject",
        required: ["url", "height", "width"],
        properties: {
          url: {
            type: "string",
            example:
              "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            description: "The source URL of the image.\n",
          },
          height: {
            type: "integer",
            example: 300,
            nullable: true,
            description: "The image height in pixels.\n",
          },
          width: {
            type: "integer",
            example: 300,
            nullable: true,
            description: "The image width in pixels.\n",
          },
        },
      },
      ExplicitContentSettingsObject: {
        type: "object",
        "x-spotify-docs-type": "ExplicitContentSettingsObject",
        properties: {
          filter_enabled: {
            type: "boolean",
            description:
              "When `true`, indicates that explicit content should not be played.\n",
          },
          filter_locked: {
            type: "boolean",
            description:
              "When `true`, indicates that the explicit content setting is locked and can't be changed by the user.\n",
          },
        },
      },
    },
    parameters: {
      PathAlbumId: {
        in: "path",
        name: "id",
        required: true,
        schema: {
          title: "Spotify Album ID",
          description:
            "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the album.\n",
          example: "4aawyAB9vmqN3uQ7FjRGTy",
          type: "string",
        },
      },
      PathPlaylistId: {
        name: "playlist_id",
        required: true,
        in: "path",
        schema: {
          title: "Playlist ID",
          description:
            "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n",
          example: "3cEYpjA9oz9GiPac4AsH4n",
          type: "string",
        },
      },
      QueryMarket: {
        name: "market",
        required: false,
        in: "query",
        schema: {
          title: "Market",
          description:
            "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/se/account/overview/).\n",
          example: "ES",
          type: "string",
        },
      },
      QueryLimit: {
        name: "limit",
        required: false,
        in: "query",
        schema: {
          title: "Limit",
          description:
            "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n",
          default: 20,
          example: 10,
          type: "integer",
          minimum: 0,
          maximum: 50,
        },
      },
      QueryOffset: {
        name: "offset",
        required: false,
        in: "query",
        schema: {
          title: "Offset",
          description:
            "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n",
          default: 0,
          example: 5,
          type: "integer",
        },
      },
      QueryAdditionalTypes: {
        name: "additional_types",
        required: false,
        in: "query",
        schema: {
          title: "Additional Types",
          description:
            "A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/>\n_**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/>\nIn addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.\n",
          type: "string",
        },
      },
      QueryAlbumIds: {
        name: "ids",
        required: true,
        in: "query",
        schema: {
          title: "Spotify Album IDs",
          description:
            "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.\n",
          example:
            "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
          type: "string",
        },
      },
      PathArtistId: {
        name: "id",
        required: true,
        in: "path",
        schema: {
          title: "Spotify Artist ID",
          description:
            "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.\n",
          example: "0TnOYISbd1XYRBk9myaseg",
          type: "string",
        },
      },
      PathShowId: {
        name: "id",
        required: true,
        in: "path",
        schema: {
          title: "Spotify Show ID",
          description:
            "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the show.\n",
          example: "38bS44xjbVVZ3No3ByF1dJ",
          type: "string",
        },
      },
      PathAudiobookId: {
        name: "id",
        required: true,
        in: "path",
        schema: {
          title: "Spotify Audiobook ID",
          description:
            "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the audiobook.\n",
          example: "7iHfbu1YPACw6oZPAFJtqe",
          type: "string",
        },
      },
      QueryAudiobookIds: {
        name: "ids",
        required: true,
        in: "query",
        schema: {
          title: "Spotify Audiobook IDs",
          description:
            "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.\n",
          example:
            "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
          type: "string",
        },
      },
      PathChapterId: {
        name: "id",
        required: true,
        in: "path",
        schema: {
          title: "Spotify Chapter ID",
          description:
            "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the chapter.\n",
          example: "0D5wENdkdwbqlrHoaJ9g29",
          type: "string",
        },
      },
      QueryChapterIds: {
        name: "ids",
        required: true,
        in: "query",
        schema: {
          title: "Spotify Chapter IDs",
          description:
            "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU`. Maximum: 50 IDs.\n",
          example:
            "0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU,0D5wENdkdwbqlrHoaJ9g29",
          type: "string",
        },
      },
      QueryTrackIds: {
        name: "ids",
        required: true,
        in: "query",
        schema: {
          title: "Spotify Track IDs",
          description:
            "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.\n",
          example:
            "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
          type: "string",
        },
      },
      QueryIncludeGroups: {
        name: "include_groups",
        required: false,
        in: "query",
        schema: {
          title: "Groups to include (single, album, appears_on, compilation)",
          description:
            "A comma-separated list of keywords that will be used to filter the response. If not supplied, all album types will be returned. <br/>\nValid values are:<br/>- `album`<br/>- `single`<br/>- `appears_on`<br/>- `compilation`<br/>For example: `include_groups=album,single`.\n",
          example: "single,appears_on",
          type: "string",
        },
      },
      QueryShowIds: {
        name: "ids",
        required: true,
        in: "query",
        schema: {
          title: "Ids",
          description:
            "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs.\n",
          example: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
          type: "string",
        },
      },
      PathUserId: {
        name: "user_id",
        required: true,
        in: "path",
        schema: {
          title: "User ID",
          description:
            "The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).\n",
          example: "smedjan",
          type: "string",
        },
      },
    },
  },
} as const;