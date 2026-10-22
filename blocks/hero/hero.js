export default function decorate(block) {
  const rows = [...block.children];

  const getValue = (label) => {
    const row = rows.find(
      (item) =>
        item.children[0]?.textContent.trim().toLowerCase() ===
        label.toLowerCase()
    );

    return row?.children[1];
  };

  const heading = getValue("Heading");
  const description = getValue("Description");
  const button = getValue("Button");
  const image = getValue("Image");

  const heroContent = document.createElement("div");
  heroContent.className = "hero-content";

  if (heading) {
    const title = document.createElement("h1");
    title.textContent = heading.textContent.trim();
    heroContent.append(title);
  }

  if (description) {
    const text = document.createElement("p");
    text.textContent = description.textContent.trim();
    heroContent.append(text);
  }

  if (button) {
    const link = button.querySelector("a");
    const cta = document.createElement("a");

    cta.className = "button";
    cta.textContent = button.textContent.trim();
    cta.href = link?.href || "#services";

    heroContent.append(cta);
  }

  block.replaceChildren(heroContent);

  if (image) {
    const img = image.querySelector("img");

    if (img) {
      const visual = document.createElement("div");
      visual.className = "hero-visual";
      visual.append(img);
      block.append(visual);
    }
  }
}
