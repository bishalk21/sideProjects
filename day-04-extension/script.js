// Todays learning:
// Event listeners
// innerHtml
// localStorage
// function parameter
// JSON object
// template strings
// object in arrays
// Manifest.json
// chrome extensions
// build simple extension using these concepts - QUICKSAVE EXTENSION

const inputText = document.getElementById("input-text");
const saveInput = document.getElementById("save-input");
const saveTab = document.getElementById("save-tab");
const deleteAll = document.getElementById("delete-all");
const inputList = document.getElementById("input-list");

let allInput = [];

if (localStorage.getItem("allInput")) {
  allInput = JSON.parse(localStorage.getItem("allInput"));
  showAllInput();
}

saveInput.addEventListener("click", () => {
  allInput.push(inputText.value);
  console.log(allInput[allInput.length - 1]);
  inputText.value = null;
  localStorage.setItem("allInput", JSON.stringify(allInput));
  console.log(localStorage.getItem("allInput"));
  showAllInput();
});

saveTab.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    allInput.push(tabs[0].url);
    localStorage.setItem("allInput", JSON.stringify(allInput));
    showAllInput();
  });
});

deleteAll.addEventListener("dblclick", () => {
  allInput = [];
  localStorage.clear();
  showAllInput();
});

function showAllInput() {
  let lists = "";
  for (let i = 0; i < allInput.length; i++) {
    lists += `
          <li>
              <a href="${allInput[i]}" target="_blank">${allInput[i]}</a>
          </li>
          `;
  }

  //   let allLists = Object.keys(localStorage);
  //   for (let i = 0; i < allLists.length; i++) {
  //     lists += `
  //     <li>
  //     <a href="${localStorage[allLists[i]]}" target="_blank">
  //         ${localStorage[allLists[i]]}
  //     </a>
  // </li>`;
  //   }

  inputList.innerHTML = lists;
}
