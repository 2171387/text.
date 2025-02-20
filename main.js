let baner = document.getElementById("baner");
let sendHTTPrequest = (url) => {
  let html = "";
  axios
    .get("http://localhost:3000/baner")
    .then((res) => {
      res.data.map((elem) => {
        html += `
            <div class="baner">
            <img src="${elem.url}" alt="">
            </div>
            `;
      });
      baner.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
sendHTTPrequest("http://localhost:3000/baner");

const imags = document.getElementById("imags");
let send = (url) => {
  let htm = "";
  axios
    .get("http://localhost:3000/imag")
    .then((response) => {
      response.data.map((element) => {
        let htmText = "";
        if (element.text && Array.isArray(element.text)) {
          for (let i = 0; i < element.text.length; i++) {
            htmText += `<p>${element.text[i]}</p>`;
          }
        }
        htm += `
          <img src="${element.url}" alt="Image ${element.id}" id="${element.id}">
          ${htmText}
        `;
      });
      imags.innerHTML = htm;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
send("http://localhost:3000/imag");

let video = document.getElementById("video");
let sendHTTP = (url) => {
  let ht = "";
  axios
    .get("http://localhost:3000/video")
    .then((responsev) => {
      responsev.data.map((elements) => {
        ht += `

      <video src="${elements.url}" controls></video>
            `;
      });
      video.innerHTML = ht;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
sendHTTP("http://localhost:3000/video");
 


const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const productImages = document.getElementById("product-images");
const images = productImages.querySelectorAll("img");
const imageWidth = 270;
let currentIndex = 0;

const totalImages = images.length;
const clonedImagesCount = 2;

const clonedImages = [...images].map((img) => img.cloneNode(true));
clonedImages.forEach((clone) => productImages.appendChild(clone));

setTimeout(() => {
  productImages.style.transition = "transform 0.5s ease-in-out";
  updateImages();
}, 100);

icon1.addEventListener("click", () => {
  if (currentIndex >= totalImages) {
    productImages.style.transition = "none";
    currentIndex = 0;
    productImages.style.transform = `translateX(0)`;
    setTimeout(() => {
      productImages.style.transition = "transform 0.5s ease-in-out";
      updateImages();
    }, 50);
  } else {
    currentIndex++;
    updateImages();
  }
});

icon2.addEventListener("click", () => {
  if (currentIndex <= 0) {
    productImages.style.transition = "none";
    currentIndex = totalImages * clonedImagesCount - 1;
    productImages.style.transform = `translateX(-${
      imageWidth * currentIndex
    }px)`;
    setTimeout(() => {
      productImages.style.transition = "transform 0.5s ease-in-out";
      updateImages();
    }, 50);
  } else {
    currentIndex--;
    updateImages();
  }
});
function updateImages() {
  const offset = -imageWidth * currentIndex;
  productImages.style.transform = `translateX(${offset}px)`;
}