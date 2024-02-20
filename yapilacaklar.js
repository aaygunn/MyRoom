// -----------Seçiciler-------------
const input = document.getElementById("yapilacaklar-text");
const add = document.getElementById("yapilacaklar-icon");
const yapilacaklarCont = document.getElementById("yapiacaklar-container");

const anaCont = document.getElementById("ana-container");

// -----------Functions-------------------

const liste = [];
//contente içerik basan fonksiyon
function bas(element) {
  yapilacaklarCont.innerHTML += `<div class="yapilacaklar-cont">
    <div
      class="yapilacaklar-eklenen"
      id="yapilacaklar-eklenen"
      aria-readonly="true"
    >
      ${element}
    </div>
    <div class="yapilacaklar-sil"></div>
    <i class="fa-solid fa-trash-can yapilacak-sil"></i>
    <div class="yapilacak-guncelle-cont">
      <i class="fa-regular fa-pen-to-square yapilacak-guncelle"></i>
    </div>
  </div>
  `;
  const kapat = document.getElementById("kapat");
  kapat.addEventListener("click", () => {
    anaCont.style.display = "none";
  });
}

//-----------Event Listeners----------
//ekleye basildiginda contenti temizleyip listeyi contente basar
add.addEventListener("click", () => {
  yapilacaklarCont.innerHTML = "";
  const inputText = input.value;
  liste.push(inputText);
  for (let i = 0; i < liste.length; i++) {
    const element = liste[i];
    bas(element);
    input.value = "";
  }
});
