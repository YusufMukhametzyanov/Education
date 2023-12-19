const featuredItemsJS = JSON.parse(featuredItems);
console.log(featuredItemsJS);

const contentItems = document.querySelectorAll(".content1_image1");
const contentItem2 = document.querySelector(".content2_top_background");
const contentTopBackground = document.querySelector(".content2_top_background");

let count = 0;

featuredItemsJS.forEach((element) => {
  contentItems[count].insertAdjacentHTML(
    "beforeend",
    `<img src="${element.img}" alt="picture_man" class="body4_picture1">
    <a href="#" class="content1_active">
            <img src="img/content1_active_img.png" alt="" class="content1_active_img">
            <p class="content1_active_p">Add to Cart</p>
    </a>
`
  );

  contentItems[count].nextElementSibling.insertAdjacentHTML(
    "beforeend",
    `
  <div class="content1__bottom">
    <p class="content1_text1"><strong>${element.title}</strong><br><br></p>
    <p class="content1_text2">${element.discription}</p><br>
    <p class="content1_text3">${element.price}</p>
  </div>
  `
  );

  count++;

  if (element.img === "img/body4_picture2.png") {
    contentItem2.insertAdjacentHTML(
      "beforeend",
      `<img src="${element.img}" alt="picture_women" class="content2_top_backgroun_img">
      <a href="#" class="content1_active">
            <img src="img/content1_active_img.png" alt="" class="content1_active_img">
            <p class="content1_active_p">Add to Cart</p>
      </a>
    `
    );

    contentItem2.nextElementSibling.insertAdjacentHTML(
      "beforeend",
      `
      <div class="content1__bottom">
      <p class="content1_text1"><strong>${element.title}</strong><br><br></p>
      <p class="content1_text2">${element.discription}</p><br>
      <p class="content1_text3">${element.price}</p>
    </div>
    `
    );
    count = 1;
  }
});
