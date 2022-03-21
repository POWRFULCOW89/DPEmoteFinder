/* Populating table */

let table = document.querySelector("#emote_table");

let allEmotes = Object.assign({}, emotes, prop_emotes, shared_emotes);

// sort all emotes by name
allEmotes = Object.keys(allEmotes)
  .sort()
  .reduce((obj, key) => {
    obj[key] = allEmotes[key];
    return obj;
  }, {});

Object.entries(allEmotes).forEach(([key, value]) => {
  let row = document.createElement("tr");
  let name = document.createElement("td");
  let code = document.createElement("td");
  name.innerText = key;
  code.innerText = value;
  row.appendChild(name);
  row.appendChild(code);
  table.appendChild(row);
});

/* Actual finder */

let input = document.querySelector("#input");

input.addEventListener("keyup", (e) => {
  let search = input.value.toLowerCase();
  let rows = table.querySelectorAll("tr");

  let [first, ...rest] = rows;
  rest.forEach((row) => {
    let name = row.querySelector("td");

    // console.log(row.children);
    let text = row.children[0].innerText.toLowerCase();

    if (text.includes(search)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});
