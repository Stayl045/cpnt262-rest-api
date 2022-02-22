const btn = document.querySelector(".btn");
// const txt = document.querySelector(".txt");
// const submit = document.querySelector(".submit");
const content = document.querySelector(".content");

const randomIndex = (length) => {
  return Math.floor(Math.random() * length);
};

const fetchData = async () => {
  try {
    const response = await fetch("https://digimon-api.vercel.app/api/digimon");
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();

    console.log(data[randomIndex(data.length)]);
    // console.log(characters);
    const html = data
      .map(
        (el) => `
    <h1>${el.name}</h1>
    <img src= "${el.img}">
    <p>${el.level}</p>
    
    `
      )
      .join("");

    content.insertAdjacentHTML("afterbegin", html);

    // document.querySelector(".content").innerHTML = output;
  } catch (error) {
    console.error(error);
  }
};

// const endpoint = "https://digimon-api.vercel.app/api/digimon";

// fetchData(endpoint);

// btn.addEventEventListener("click", function (e) {
//   e.preventDefault();
//   fetchData();
// });

// btn.addEventListener("click", fetchData);

// fetchData();

const submitHandler = (event) => {
  event.preventDefault();

  btn.addEventListener("click", submitHandler);
};

fetchData();
