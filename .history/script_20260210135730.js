const params = new URLSearchParams(window.location.search);
let pageIndex = parseInt(params.get("page")) || 0;

const container = document.getElementById("comic-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function renderPage() {
  container.innerHTML = "";

  // Comic image
  const img = document.createElement("img");
  img.src = comicPages[pageIndex].image;
  img.alt = comicPages[pageIndex].alt;
  img.className = "comic-page";
  container.appendChild(img);

  // Collapsible dialogue box (optional per page)
  if (comicPages[pageIndex].dialogue) {
    const details = document.createElement("details");
    details.className = "dialogue-box";

    const summary = document.createElement("summary");
    summary.textContent = "Show dialogue";
    details.appendChild(summary);

    const content = document.createElement("div");
    content.className = "dialogue-content";
    content.innerHTML = comicPages[pageIndex].dialogue;
    details.appendChild(content);

    details.addEventListener("toggle", () => {
      summary.textContent = details.open
        ? "Hide dialogue"
        : "Show dialogue";
    });

    container.appendChild(details);
  }

  prevBtn.disabled = pageIndex === 0;
  nextBtn.disabled = pageIndex === comicPages.length - 1;
}

prevBtn.onclick = () => {
  if (pageIndex > 0) {
    window.location.search = `?page=${pageIndex - 1}`;
  }
};

nextBtn.onclick = () => {
  if (pageIndex < comicPages.length - 1) {
    window.location.search = `?page=${pageIndex + 1}`;
  }
};

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;

  if (e.key === "ArrowLeft" && pageIndex > 0) {
    window.location.search = `?page=${pageIndex - 1}`;
  }

  if (e.key === "ArrowRight" && pageIndex < comicPages.length - 1) {
    window.location.search = `?page=${pageIndex + 1}`;
  }
});

renderPage();
