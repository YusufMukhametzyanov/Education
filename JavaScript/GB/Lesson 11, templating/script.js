const dataProductsJS = JSON.parse(dataProducts);

const contentEl = document.querySelector(".content");
console.log(contentEl);

dataProductsJS.forEach((element) => {
  contentEl.insertAdjacentHTML(
    "beforeend",
    `
    <div class="product">
  <figure>
    <img class="img" src="${element.img}" alt="photo of people">
  </figure>
  <div class="discription">
    <p class="title"></p>
    <div class="price">Price:
      <p class="price_">&nbsp;${element.price}</p>
    </div>
    <div class="color">Color:
      <p class="color_">&nbsp;${element.color}</p>
    </div>
    <div class="size">Size:
      <p class="size_">&nbsp;${element.size}</p>
    </div>
    <div class="quantity">Quantity:
      <input class="inputForQuantity" type="text" value="${element.quantity}">
    </div>
  </div>
  <div class="cancel">
    <img class="vector" src="img/Vector.svg" alt="">
  </div>
</div>
  `
  );
});
