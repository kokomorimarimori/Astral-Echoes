const params = new URLSearchParams(window.location.search);
let pageIndex = parseInt(params.get("page")) || 0;

const container = document.getElementById("comic-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function renderPage() {
  container.innerHTML = "";

  const img = document.createElement("img");
  img.src = comicPages[pageIndex].image;
  img.alt = comicPages[pageIndex].alt;
  img.className = "comic-page";

  container.appendChild(img);

  prevBtn.disabled = pageIndex === 0;
  nextBtn.disabled = pageIndex === comicPages.length - 1;
}

prevBtn.onclick = () => {
  if (pageIndex > 0) {
    pageIndex--;
    window.location.search = `?page=${pageIndex}`;
  }
};

nextBtn.onclick = () => {
  if (pageIndex < comicPages.length - 1) {
    pageIndex++;
    window.location.search = `?page=${pageIndex}`;
  }
};

renderPage();
