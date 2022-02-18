const randomIndex = (length) => {
  return Math.floor(Math.random() * length);
};

const fetchData = async function (url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    const characters = data[randomIndex(data.length)];

    console.log(characters);
    const output = `
    <h1>${characters.name}</h1>
    
    `;

    document.querySelector(".content").innerHTML = output;
  } catch (error) {
    console.error(error);
  }
};

const endpoint = "https://anapioficeandfire.com/api/characters/583";

fetchData(endpoint);
