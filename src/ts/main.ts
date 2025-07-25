import { renderSummary, renderPhotos } from "./summary";
import productData from "../data/products.json";

document.addEventListener("DOMContentLoaded", () => {
  renderSummary(productData);
  renderPhotos(productData);
});
