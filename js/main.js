const fetchData = async function (url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();

    console.log(data.data[8].films);

    const filmsOutput = `<ul><li>${data.data[8].films.join(
      "</li><li>"
    )}</li></ul>`;

    const output = `
        <h1>${data.data[8].name}</h1>
        <img src="${data.data[8].imageUrl}" alt="Image of ${data.data[8].name}">
        <p>
          <a href="${data.data[8].url}">Raw Data</a>
        </p>
        <p>Films</p>
        ${filmsOutput}
      `;

    document.querySelector(".content").innerHTML = output;
  } catch (error) {
    console.error(error);
  }
};

const endpoint = "http://api.disneyapi.dev/characters";

fetchData(endpoint);
