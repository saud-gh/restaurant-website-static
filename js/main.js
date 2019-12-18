const setup = () => {
  const evenNumItems = lunch.length % 2;
  const numOfRows = evenNumItems ? lunch.length / 2 : lunch.length / 2 + 1;

  let rows = [];

  for (let i = 0; i < numOfRows; i++) {
    const rowElement = document.createElement("div");
    rowElement.setAttribute("class", "row justify-content-between menu-row");
    rows[i] = rowElement;
  }

  (lunch || []).map(item => {
    const { name, price, image, description } = item;
  });
};

const getMenuItemTemplate = (name, price, image, description) => {
  return `
    <div class="col-5">
        <div class="row">
        <div class="col-3">
            <div class="circle">
            <img
                class="img-fluid"
                src="${image}"
                alt="${name}"
            />
            </div>
        </div>
        <div class="col-9">
            <h3>${name}</h3>
            <p>${description}</p>
            <p><strong>$${price}</strong></p>
        </div>
        </div>
    </div>
    `;
};

setup();
