// ---------------- Swiper ----------------

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 5,
    },
  },
});

// ---------------- Suggested Categories ----------------

const suggestedCard = document.getElementById("suggestedCategoriesCard");

if (suggestedCard) {
  axios
    .get("http://localhost:3000/0")
    .then((res) => {
      console.log(res)
      const items = res.data.suggestedCategories;

      const row1Items = items.filter((item) => item.row === 1);
      const row2Items = items.filter((item) => item.row === 2);

      let row1HTML = `
      <div class="suggested-categories_row">
      ${row1Items
        .map(
          (item) => `
          <div class="category-item">
            <div class="category-item_circle">
              <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>
            <span class="category-item_label">
              ${item.title}
            </span>
          </div>
        `,
        )
        .join("")}
      </div>
      `;

      let row2HTML = `
      <div class="suggested-categories_row">
      ${row2Items
        .map(
          (item) => `
          <div class="category-item">
            <div class="category-item_circle">
              <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>
            <span class="category-item_label">
              ${item.title}
            </span>
          </div>
        `,
        )
        .join("")}
      </div>
      `;

      suggestedCard.innerHTML =
        row1HTML +
        `<div class="suggested-categories_divider"></div>` +
        row2HTML;
    })
    .catch((error) => {
      console.error("خطا:", error);
    });
}
// ---------------- product-box ----------------

// const product-box = document.getElementById("product-box");
