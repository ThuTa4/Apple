const randomfunction = (max) => {
  return Math.floor(Math.random() * max);
};

const containerTag = document.getElementsByClassName("iphoneContainer")[0];

const iphoneContainer = [
  {
    imageSrc: "../image/iphone14promax-puple.png",
    test: "I phone 14 pro max",
    star: randomfunction(5),
    price: "USD 805$",
  },
  {
    imageSrc: "../image/iphone14promax-gold.png",
    test: "I phone 14 pro max",
    star: randomfunction(5),
    price: "USD 805$",
  },
  {
    imageSrc: "../image/i[hone14promax-Space-Black.png",
    test: "I phone 14 pro max",
    star: randomfunction(5),
    price: "USD 805$",
  },
  {
    imageSrc: "../image/iphone15promax-black-titanium.png",
    test: "I phone 15 pro max",
    star: randomfunction(5),
    price: "USD 1199$",
  },
  {
    imageSrc: "../image/iphone15promax-natural-titanium.png",
    test: "I phone 15 pro max",
    star: randomfunction(5),
    price: "USD 1199$",
  },
  {
    imageSrc: "../image/iphone15promax-spaceblue.png",
    test: "I phone 15 pro max",
    star: randomfunction(5),
    price: "USD 1199$",
  },
  {
    imageSrc: "../image/iphone15promax-white.png",
    test: "I phone 15 pro max",
    star: randomfunction(5),
    price: "USD 1199$",
  },
  {
    imageSrc: "../image/iphone15promax-white.png",
    test: "I phone 15 pro max",
    star: randomfunction(5),
    price: "USD 1199$",
  },
];
const starArray = [1, 2, 3, 4, 5];

iphoneContainer.map((data, index) => {
  containerTag.innerHTML += ` <div
  style="
      max-width: 275px;
      max-height: 450x;
      box-shadow: 2px 2px 20px 0px #c9c7c7da;
      border-radius: 15px;
      padding: 15px;
      margin-top:40px;
      overflow: hidden;
    "
    class="iphone"
>
<div
          style="
            padding: 5px;
            display: flex;
            width: 100%;
            height: 220px;
            overflow: hidden;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          "
        >
          <img
            src=${data.imageSrc}
            style="width: 210px; height: 220px; object-fit: contain; overflow: hidden;"
          />
        </div>
<div
  class="hoverDiv"
  style="
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 175px;
    height: 40px;
    padding: 20px;
    background-color: #e7e7e7;
    margin: auto;
    border-radius: 10px;
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-eye btHover"
    viewBox="0 0 16 16"
  >
    <path
      d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
    />
    <path
      d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
    />
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-heart btHover"
    viewBox="0 0 16 16"
  >
    <path
      d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
    /></svg
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-shuffle btHover"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"
    />
    <path
      d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192"
    /></svg
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-handbag btHover"
    viewBox="0 0 16 16"
  >
    <path
      d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z"
    />
  </svg>
</div>
<div style="padding: 10px">
  <span style="font-size: 18px; font-weight: 800"
    >${data.test} </span
  >
  <div>${data.price}</div>
  ${starArray
    .map((number) =>
      data.star < number
        ? `  
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  class="bi bi-star-fill"
  viewBox="0 0 16 16"
  color="gold"
>
  <path
    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
  />
</svg>`
        : ``
    )
    .join("")}
</div>
</div>`;
});

const showOverLayMenuTag =
  document.getElementsByClassName("showOverLayMenu")[0];
const menuListTag = document.getElementsByClassName("menuList")[0];
const bodyTag = document.getElementsByTagName("body")[0];
const menuListChildUpTag =
  document.getElementsByClassName("menuListChildUp")[0];
const menuListChildMiddleTag = document.getElementsByClassName(
  "menuListChildMiddle"
)[0];
const menuListChildBottomTag = document.getElementsByClassName(
  "menuListChildBottom"
)[0];

menuListTag.addEventListener("click", () => {
  if (showOverLayMenuTag.classList.contains("showOverLayMenu1")) {
    showOverLayMenuTag.classList.remove("showOverLayMenu1");
    bodyTag.classList.remove("body");
    menuListChildUpTag.classList.remove("menuListChildUp1");
    menuListChildMiddleTag.classList.remove("menuListChildMiddle1");
    menuListChildBottomTag.classList.remove("menuListChildBottom1");
  } else {
    showOverLayMenuTag.classList.add("showOverLayMenu1");
    bodyTag.classList.add("body");
    menuListChildUpTag.classList.add("menuListChildUp1");
    menuListChildMiddleTag.classList.add("menuListChildMiddle1");
    menuListChildBottomTag.classList.add("menuListChildBottom1");
  }
});

const shopContainerTag = document.getElementsByClassName("shopContainer")[0];

iphoneContainer.map((data, index) => {
  shopContainerTag.innerHTML += ` <div
  style="
      max-width: 275px;
      max-height: 450x;
      box-shadow: 2px 2px 20px 0px #c9c7c7da;
      border-radius: 15px;
      padding: 15px;
      margin-top:40px;
      overflow: hidden;
    "
    class="iphone2"
>
<div
          style="
            padding: 5px;
            display: flex;
            width: 100%;
            height: 220px;
            overflow: hidden;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          "
        >
          <img
            src=${data.imageSrc}
            style="width: 210px; height: 220px; object-fit: contain; overflow: hidden;"
          />
        </div>
<div
  class="hoverDiv"
  style="
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 175px;
    height: 40px;
    padding: 20px;
    background-color: #e7e7e7;
    margin: auto;
    border-radius: 10px;
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-eye btHover"
    viewBox="0 0 16 16"
  >
    <path
      d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
    />
    <path
      d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
    />
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-heart btHover"
    viewBox="0 0 16 16"
  >
    <path
      d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
    /></svg
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-shuffle btHover"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"
    />
    <path
      d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192"
    /></svg
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-handbag btHover"
    viewBox="0 0 16 16"
  >
    <path
      d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z"
    />
  </svg>
</div>
<div style="padding: 10px">
  <span style="font-size: 18px; font-weight: 800"
    >${data.test} </span
  >
  <div>${data.price}</div>
  ${starArray
    .map((number) =>
      data.star < number
        ? `  
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  class="bi bi-star-fill"
  viewBox="0 0 16 16"
  color="gold"
>
  <path
    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
  />
</svg>`
        : ``
    )
    .join("")}
</div>
</div>`;
});
