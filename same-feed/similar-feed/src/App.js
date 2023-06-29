import React, { useState } from "react";
import Duck from "./Duck";

// Data for user's liked items and feeds
const likedItems = ["item1", "item2", "item3"];
const feedsData = {
  item1: ["feed1", "feed2", "feed3"],
  item2: ["feed4", "feed5"],
  item3: ["feed6", "feed7", "feed8", "feed9"],
};

const App = () => {
  const [feeds, setFeeds] = useState([]);

  const handleLike = (itemId) => {
    // Get the feeds data for the liked item
    const feedsForItem = feedsData[itemId] || [];
    // Update the state with the feeds for the liked item
    setFeeds(feedsForItem);
  };

  return (
    <Duck />
    // <div>
    //   <h1>LinkedIn-like Feeds Algorithm</h1>
    //   <h3>Liked Items:</h3>
    //   <ul>
    //     {likedItems.map((item) => (
    //       <li key={item}>
    //         {item}
    //         <button onClick={() => handleLike(item)}>Like</button>
    //       </li>
    //     ))}
    //   </ul>
    //   <h3>Feeds:</h3>
    //   <ul>
    //     {feeds.map((feed) => (
    //       <li key={feed}>{feed}</li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default App;
