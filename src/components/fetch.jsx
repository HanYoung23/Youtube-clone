import React, { Component } from "react";

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetch: {
        kind: "youtube#videoListResponse",
        etag: "UFO9oVGuP6PeTIAFJbAUQRj-4E0",
        items: [
          {
            kind: "youtube#video",
            etag: "RPzzy15QfMw7q6kgdQpmAgm9GhA",
            id: "MmrGeWxd87Y",
            snippet: {
              publishedAt: "2020-10-27T15:03:27Z",
              channelId: "UCXIJgqnII2ZOINSWNOGFThA",
              title:
                "2020 Election Results Live: Presidential and Senate races | Fox News",
              description:
                "Stay here to get the latest U.S. election results, as well as a look at the balance of power in ",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/MmrGeWxd87Y/default_live.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/MmrGeWxd87Y/mqdefault_live.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/MmrGeWxd87Y/hqdefault_live.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/MmrGeWxd87Y/sddefault_live.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url:
                    "https://i.ytimg.com/vi/MmrGeWxd87Y/maxresdefault_live.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "Fox News",
              tags: ["Fox News", "election results", "2020 election"],
              categoryId: "25",
              liveBroadcastContent: "live",
              defaultLanguage: "en",
              localized: {
                title:
                  "2020 Election Results Live: Presidential and Senate races | Fox News",
                description:
                  "Stay here to get the latest U.S. election results, as well as a look at the balance of power in Congress. #FoxNews #Election2020\n\nSubscribe to Fox News!",
              },
              defaultAudioLanguage: "en",
            },
          },
        ],
        nextPageToken: "CAEQAA",
        pageInfo: {
          totalResults: 200,
          resultsPerPage: 1,
        },
      },
    };
  }
  sendFetch() {
    let itemsArray = [...this.props.newItems];
    let newItems = itemsArray.push(this.state.fetch.items);
    let items = newItems;
    this.props.fetch(items);
    console.log(items);
  }

  render() {
    return <div>{this.sendFetch}</div>;
  }
}

export default Fetch;
