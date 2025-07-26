type ListingEntry = {
  listing_id: string;
  sku: string;
  condition_id: string;
  product_id: string;
  title: string;
  price: number;
  listing_qty: number;
  inventory_qty: number;
};

type ProductData = {
  listings: ListingEntry[];
};

function truncate(value: string | number, maxLength = 14): string {
  const str = String(value);
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}
function truncateTitle(value: string | number, maxLength = 30): string {
  const str = String(value);
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}

export function renderListingTable(data: ProductData): void {
  const table = document.querySelector(".listing__table") as HTMLTableElement;
  const counterEl = document.querySelector(".listing__counter") as HTMLElement;
  if (counterEl) {
    counterEl.textContent = String(data.listings.length);
    counterEl.classList.add("counter");
  }

  if (table) {
    const limitedListings = data.listings.slice(0, 4);

    limitedListings.forEach((listing) => {
      const row = document.createElement("tr");
      row.classList.add("listing__table__row");
      row.innerHTML = `
        <td class="listing__table__cell table__cell">${truncate(
          listing.listing_id
        )}</td>
        <td class="listing__table__cell table__cell">${truncate(
          listing.sku
        )}</td>
        <td class="listing__table__cell table__cell">${truncate(
          listing.condition_id
        )}</td>
        <td class="listing__table__cell table__cell">${truncate(
          listing.product_id
        )}</td>
        <td class="listing__table__cell table__cell">${truncateTitle(
          listing.title
        )}</td>
        <td class="listing__table__cell table__cell">${truncate(
          listing.price
        )}</td>
        <td class="listing__table__cell table__cell">${truncate(
          listing.listing_qty
        )}</td>
        <td class="listing__table__cell table__cell">${truncate(
          listing.inventory_qty
        )}</td>
      `;
      table.appendChild(row);
    });
  }
}
