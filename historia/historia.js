//LINEA DE TIEMPO
function mostrarMasMenos() {
    const mostrarMasButton = document.getElementById('mostrarMas');
    const hiddenItems = document.querySelectorAll('.hide');
    if (mostrarMasButton.textContent === 'MOSTRAR MÁS') {
      hiddenItems.forEach(item => item.style.display = 'block');
      mostrarMasButton.textContent = 'MOSTRAR MENOS';
    } else {
      hiddenItems.forEach(item => item.style.display = 'none');
      mostrarMasButton.textContent = 'MOSTRAR MÁS';
    }
  }

  