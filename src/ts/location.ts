import moreIcon from "../img/more__icon.png";

type LocationEntry = {
  device_pn: string;
  quantity: number;
  condition: string;
  edit_user: string;
  notes: string;
};

type ProductData = {
  id: string;
  brand: string;
  category: string;
  e_user: string;
  locations: LocationEntry[];
};

export function renderLocationTable(data: ProductData): void {
  const table = document.querySelector(".location__table") as HTMLTableElement;
  const counterEl = document.querySelector(".location__counter") as HTMLElement;
  if (counterEl) {
    counterEl.textContent = String(data.locations.length);
    counterEl.classList.add("counter");
  }

  if (table) {
    const limitedLocations = data.locations.slice(0, 4);

    limitedLocations.forEach((location) => {
      const row = document.createElement("tr");
      row.classList.add("location__table__row");
      row.innerHTML = `
        <td class="location__table__cell table__cell">${data.id}</td>
        <td class="location__table__cell table__cell ">${data.brand}</td>
        <td class="location__table__cell table__cell">${data.category}</td>
        <td class="location__table__cell table__cell">${location.device_pn}</td>
        <td class="location__table__cell table__cell">${location.quantity}</td>
        <td class="location__table__cell table__cell">${location.condition}</td>
        <td class="location__table__cell table__cell">${location.edit_user}</td>
        <td class="location__table__cell table__cell">${location.notes}</td>
        <td class="location__table__cell table__cell">
          <a
            href="https://www.google.com/search?q=${encodeURIComponent(
              location.device_pn
            )}"
            class="location__table__cell__link"
            target="_blank"
            rel="noopener"
          >
            <img
              class="location__table__cell__link__icon"
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
