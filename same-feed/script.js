// mock data for feeds
const feedsData = [
  {
    title: "Feed 1",
    content: "This is Feed 1",
    category: "category1",
  },
  {
    title: "Feed 12",
    content: "This is Feed 2",
    category: "category2",
  },
  {
    title: "Feed 3",
    content: "This is Feed 3",
    category: "category3",
  },
  {
    title: "Feed 4",
    content: "This is Feed 4",
    category: "category1",
  },
  {
    title: "Feed 5",
    content: "This is Feed 5",
    category: "category2",
  },
  {
    title: "Feed 6",
    content: "This is Feed 6",
    category: "category3",
  },
  {
    title: "Feed 7",
    content: "This is Feed 7",
    category: "category1",
  },
  {
    title: "Feed 8",
    content: "This is Feed 8",
    category: "category2",
  },
];

// function to display feeds
function displayFeeds(feeds) {
  const feedsContainer = document.getElementById("feedsContainer");
  feedsContainer.innerHTML = "";
  feeds.forEach((feed) => {
    const feedCard = document.createElement("div");
    feedCard.classList.add("feedCard");
    feedCard.innerHTML = `
    <h3>${feed.title}</h3>
    <ps>${feed.content}</ps>
    `;
    feedsContainer.appendChild(feedCard);
  });
}

// function to filter feeds based on category
function filterFeeds(category) {
  const filteredFeeds = feedsData.filter((feed) => feed.category === category);
  return filteredFeeds;
}

const likedCategory = "category3";
const filteredFeeds = filterFeeds(likedCategory);

displayFeeds(filteredFeeds);
