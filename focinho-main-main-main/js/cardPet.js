const openButtons = document.querySelectorAll(".openPetCard");
const overlay = document.getElementById("cardPetOverlay");
const closeBtn = document.getElementById("closeCardPet");

// Campos do card
const imgField = document.getElementById("cardPetImg");
const nomeField = document.getElementById("cardPetNome");
const descField = document.getElementById("cardPetDescricao");
const idadeField = document.getElementById("cardPetIdade");
const porteField = document.getElementById("cardPetPorte");
const racaField = document.getElementById("cardPetRaca");

// Abrindo o card
openButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    imgField.src = btn.dataset.img;
    nomeField.textContent = btn.dataset.nome;
    descField.textContent = btn.dataset.descricao;
    idadeField.textContent = btn.dataset.idade;
    porteField.textContent = btn.dataset.porte;
    racaField.textContent = btn.dataset.raca;

    overlay.style.display = "flex";
  });
});

// Fechar
closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Fechar clicando fora
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});


