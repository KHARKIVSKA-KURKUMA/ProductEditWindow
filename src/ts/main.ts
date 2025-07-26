import { renderSummary, renderPhotos } from "./summary";
import productData from "../data/products.json";
import { renderLocationTable } from "./location";
import { renderListingTable } from "./listing";
import { renderProductTable } from "./products";

document.addEventListener("DOMContentLoaded", () => {
  renderSummary(productData);
  renderPhotos(productData);
  renderLocationTable(productData);
  renderListingTable(productData);
  renderProductTable(productData);
});
