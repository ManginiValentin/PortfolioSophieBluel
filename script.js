const gallery = document.querySelector(".gallery");
const figure = document.querySelector(".figure");

fetch("http://localhost:5678/api/works")
  .then((response) => response.json())

  .then((works) => {
    works.forEach((work) => {
      const bloc = document.createElement("div");
      const image = document.createElement("img");
      const title = document.createElement("text");

      image.src = `${work.imageUrl}`;
      title.innerHTML = `${work.title}`;

      bloc.appendChild(image);
      bloc.appendChild(title);
      gallery.appendChild(bloc);
    });
  });
