// Selecionar elementos
const popupOverlay = document.getElementById('popupOverlay');
const closePopupButton = document.getElementById('closePopup');
const denyPopupButton = document.getElementById('denyedPopup');

// Mostrar popup ao carregar a página
window.addEventListener('load', () => {
  popupOverlay.style.display = 'block';
});

// Fechar popup
closePopupButton.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});

// Recarregar página ao clicar no botão denyPopup
denyPopupButton.addEventListener('click', () => {
  location.reload(); // Recarrega a página
});
