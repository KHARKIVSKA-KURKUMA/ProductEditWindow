import { renderSummary, renderPhotos } from "./summary";
import productData from "../data/products.json";
import { renderLocationTable } from "./location";

document.addEventListener("DOMContentLoaded", () => {
  renderSummary(productData);
  renderPhotos(productData);
  renderLocationTable(productData);
});
