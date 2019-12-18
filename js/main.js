const setup = () => {
  const evenNumDishes = lunch.length % 2;
  const numOfRows = evenNumDishes ? lunch.length / 2 : lunch.length / 2 + 1;

  let rows = [];

  for (let i = 0; i < numOfRows; i++) {
    const rowElement = document.createElement("div");
    rowElement.setAttribute("class", "row justify-content-between menu-row");
    rows[i] = rowElement;
  }

  (lunch || []).map(dish => {
    const { title, price, image, description } = dish;
  });
};

setup();
