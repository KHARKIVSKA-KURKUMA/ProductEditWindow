import moreIcon from "../img/more__icon.png";

type ProductEntry = {
  original_id: string;
  same_id: string;
  fk_edit_employee: string;
};

type ProductData = {
  products: ProductEntry[];
};

export function renderProductTable(data: ProductData): void {
  const table = document.querySelector(".products__table") as HTMLTableElement;
  const counterEl = document.querySelector(".products__counter") as HTMLElement;
  if (counterEl) {
    counterEl.textContent = String(data.products.length);
    counterEl.classList.add("counter");
  }
  if (table) {
    const limitedProducts = data.products.slice(0, 4);
    limitedProducts.forEach((product) => {
      const row = document.createElement("tr");
      row.classList.add("products__table__row");
      row.innerHTML = `
        <td class="products__table__cell table__cell">${
          product.original_id
        }</td>
        <td class="products__table__cell table__cell ">${product.same_id}</td>
        <td class="products__table__cell table__cell">${
          product.fk_edit_employee
        }</td>
        <td class="products__table__cell table__cell">
          <a
            href="https://www.google.com/search?q=${encodeURIComponent(
              product.original_id
            )}"
            class="products__table__cell__link"
            target="_blank"
            rel="noopener"
          >
            <img
              class="products__table__cell__link__icon"
              src=${moreIcon}
              alt="Search"
            />
          </a>
        </td>
      `;
      table.appendChild(row);
    });
  }
}
