const bilgisayar = document.getElementById("bilgisayar");
const power = document.getElementById("power");
const hastaneContainer = document.getElementById("hastane-container");
const hastane = document.getElementById("hastane");
const yapilacaklar = document.getElementById("yapilacaklar");
const hastaneClose = document.getElementById("hastane-close");
const bilgisayarClose = document.getElementById("bilgisayar-close");
const cardContainer = document.getElementById("card-container");
const doktorlarimiz = document.getElementById("doktorlarimiz");
const cardImg = document.querySelector(".card-img");
const win98 = document.querySelector(".win98");
const container = document.getElementById("container");

power.addEventListener("click", () => {
  bilgisayar.classList.add("power-on");
  win98.style.display = "none";
  // container.classList.add("blur");
});

hastane.addEventListener("click", () => {
  bilgisayar.classList.remove("power-on");
  hastaneContainer.classList.add("power-on");
});

hastaneClose.addEventListener("click", () => {
  hastaneContainer.classList.remove("power-on");
  bilgisayar.classList.add("power-on");
  cardContainer.innerHTML = "";
});

bilgisayarClose.addEventListener("click", () => {
  bilgisayar.classList.remove("power-on");
  win98.style.display = "block";
});

const api = "./db/doktorlar.json";
let cardId = 0;
async function getDoctors() {
  const data = await fetch(api);
  const veri = await data.json();
  const doktorlar = veri.doktorlar;
  cardContainer.innerHTML = "";

  doktorlar.forEach((element) => {
    const ad = element.ad;
    const uzmanlik = element.uzmanlik;
    const foto = element.img;
    const id = element.id;
    cardId++;

    cardContainer.innerHTML += `<div class="doktor-ana"><div class="card" id="card${cardId}">
      <div class="card-img">
         <i><img class="image" src="${foto}"></i>
      </div>
      <p class="doktor-adi">${ad}</p>
      <p class="uzmanlik">${uzmanlik}</p>
      <button class="dr-sec" id="dr-sec" data-id="${cardId}" data-name="${ad}" data-uzman="${uzmanlik}" data-foto= "${foto}">Seç</button>
    </div>
    </div>`;
  });

  let drBtn = document.getElementsByClassName("dr-sec");
  const drList = [...drBtn];
  drList.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const secilenDr = e.target;
      console.log(secilenDr);

      const secilenAd = secilenDr.getAttribute("data-name");
      const secilenUzmanlik = secilenDr.getAttribute("data-uzman");
      const secilenImg = secilenDr.getAttribute("data-foto");
      cardContainer.innerHTML = `<div class="acilan-card">
      <div class="acilan-head"><i class="fa-solid fa-arrow-left" id="ok"></i><h4>${secilenAd}</h4></div>
      <img class="acilan-img" src="${secilenImg}" alt="" />
      <p class="acilan-uzman">${secilenUzmanlik}</p>
      <p class="acilan-desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
        iusto eum nam aspernatur repellat voluptatibus excepturi
        inventore nesciunt doloribus qui optio perferendis similique
        ullam vero laudantium alias itaque, labore quibusdam.
      </p>
    </div>`;
      const ok = document.getElementById("ok");
      console.log(ok);
      ok.addEventListener("click", () => getDoctors());
    });
  });
}
doktorlarimiz.addEventListener("click", getDoctors);

// -----------WEATHER--------------

const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=";

const apiKey = "05f6ac7fb18348b990fbaf8489165d1f";

const havaInput = document.getElementById("hava-input");
const search = document.getElementById("hava-search");
const havaDerece = document.getElementById("hava-derece");
const havaDesc = document.getElementById("hava-desc");
const nem = document.getElementById("nem");
const ruzgar = document.getElementById("ruzgar");
const sehirIsmi = document.getElementById("sehir-ismi");
const havaImg = document.getElementById("hava-img");
const havaClose = document.getElementById("hava-close");
const havaDurumuContainer = document.getElementById("hava-durumu-container");
const havaDurumu = document.getElementById("hava-durumu");

let sehir = "";

// İnputa girilen şehrin hava durumunu getiren fonk.
search.addEventListener("click", () => {
  sehir = havaInput.value;
  fetch(`${weatherAPI}${sehir}&appid=${apiKey}&units=metric&lang=tr`).then(
    (response) => response.json().then((data) => Render(data))
  );
});
//Gelen datayı DOMA basan fonksiyon
const Render = function (data) {
  sehirIsmi.innerText = `${data.name}`;
  console.log(data);
  havaDerece.innerText = `${Math.round(data.main.temp)}`;
  havaDesc.innerText = `${data.weather[0].description} `;
  nem.innerText = `%${data.main.humidity}`;
  ruzgar.innerText = `${data.wind.speed} Km/h`;
  havaInput.value = "";
  //hava durumuna göre image değiştiriyorum
  havaImg.innerHTML = `<img src="img/hava-durumu/${data.weather[0].main}.png" alt="" />`;
};

//Uygulamayı açan fonk.

havaDurumu.addEventListener(
  "click",
  () => (havaDurumuContainer.style.display = "block")
);

//Uygulamayı kapatan fonk.
havaClose.addEventListener(
  "click",
  () => (havaDurumuContainer.style.display = "none")
);

yapilacaklar.addEventListener("click", () => {
  anaCont.style.display = "block";
});
