const img = document.querySelector("img");
const fetchbtn = document.querySelector("#fetchbtn");
const searchbtn = document.querySelector("#searchbtn");
const input = document.querySelector("#searchInput");
const result = document.querySelector("#searchresult");

searchbtn.addEventListener("click", async () => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=puSYVAXk3fRNp87Meaxtmx5LHn0AHduf&s=${input.value}`,
      { mode: "cors" }
    );
    const data = await response.json();
    const newimg = document.createElement("img");
    newimg.setAttribute("src", data.data.images.original.url);
    newimg.setAttribute("alt", input.value);
    result.appendChild(newimg);
  } catch (error) {
    result.textContent = error;
  }
});

// fetch(
//   "https://api.giphy.com/v1/gifs/translate?api_key=puSYVAXk3fRNp87Meaxtmx5LHn0AHduf&s=cats",
//   { mode: "cors" }
// )
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (response) {
//     img.src = response.data.images.original.url;
//   });

// fetchbtn.addEventListener("click", async () => {
//   try {
//     const response = await fetch(
//       "https://api.giphy.com/v1/gifs/translate?api_key=puSYVAXk3fRNp87Meaxtmx5LHn0AHduf&s=cats",
//       { mode: "cors" }
//     );
//     const data = await response.json();
//     img.src = data.data.images.original.url;
//   } catch (error) {
//     console.log(error);
//   }
// });
