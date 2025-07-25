import moreIconSq from "../img/more_sq__icon.png";
import moreIcon from "../img/more__icon.png";
type ProductData = Record<string, string | number | null | undefined>;

export function renderSummary(data: ProductData): void {
  const list = document.getElementById("summary-feature-list");

  const fieldLabels: Record<string, string> = {
    brand: "Brand",
    model_series: "Model/Series",
    device_pn: "Device P/N",
    dev_type: "Dev. Type",
    rnk: "RNK",
    min_price: "Min price",
    max_price: "Max price",
    quantity: "Quantity",
    epRq: "EPrq",
    ea4q: "EA4q",
    photo_device: "Photo_device",
    sku: "Sku",
    l_user: "L-User",
    category: "Category",
    e_user: "E-User",
    green_id: "Green_id",
    edit_at: "Edit_at",
    create_at: "Create_at",
    amazon_listing_src: "Amazon Listing Src",
    elccq: "ELCCq",
    amazq: "Amazq",
    notes: "Notes",
  };

  Object.entries(fieldLabels).forEach(([key, label]) => {
    const rawValue = data[key];
    const value =
      rawValue === null || rawValue === undefined || rawValue === ""
        ? "----------"
        : rawValue;
    const li = document.createElement("li");
    li.className = "summary__list__item";

    const feature = document.createElement("p");
    feature.className = "summary__list__item__feature";
    feature.textContent = label;

    const val = document.createElement("p");
    val.className = "summary__list__item__value";

    const strValue = String(value);
    const shortText =
      strValue.length > 24 ? strValue.slice(0, 23) + "…" : strValue;

    // Додаємо текст і, якщо потрібно, посилання
    if (
      (key === "photo_device" || key === "amazon_listing_src") &&
      value !== "----------"
    ) {
      val.classList.add("summary__list__item__value--small");
      val.innerHTML = `
  ${shortText}
  <a href="${strValue}" class="summary__list__item__link" target="_blank" rel="noopener">
    <img
      class="summary__list__item__link__icon"
      src="${moreIconSq}"
      alt="More"
    />
  </a>
    `;
    } else if (
      ["brand", "sku", "l_user", "category", "e_user"].includes(key) &&
      value !== "----------"
    ) {
      const query = encodeURIComponent(strValue);
      val.innerHTML = `
      ${shortText}
      <a href="https://www.google.com/search?q=${query}" class="summary__list__item__link" target="_blank" rel="noopener">
        <img
          class="summary__list__item__link__icon"
          src="${moreIcon}"
          alt="Search"
        />
      </a>
    `;
    } else {
      val.textContent = shortText;
    }

    li.appendChild(feature);
    li.appendChild(val);
    list.appendChild(li);
  });
}

export function renderPhotos(data: ProductData): void {
  const gallery = document.getElementById("photo-gallery");
  if (!gallery) return;

  const photos: { type: string; url?: string }[] = [
    { type: "Photo_device", url: data.photo_device },
    { type: "Photo_data_plate", url: data.photo_data_plate },
  ];

  gallery.innerHTML = "";

  photos.forEach(({ type, url }) => {
    if (!url) return;

    const li = document.createElement("li");
    li.className = "summary__productList__item";

    const p = document.createElement("p");
    p.className = "summary__productList__item__type";
    p.textContent = type;

    const img = document.createElement("img");
    img.src = url;
    img.alt = "Product Img";
    img.className = "summary__productList__item__img";

    li.appendChild(p);
    li.appendChild(img);
    gallery.appendChild(li);
  });
}
