// Funkce pro zpracování kliknutí na číslice
function handleDigitClick(event) {
    const clickedButton = event.target;  // Získání tlačítka, na které bylo kliknuto
    const digit = clickedButton.textContent;  // Získání číslice z tlačítka
  
    const display = document.querySelector('.display');  // Získání displeje kalkulačky
  
    // Pokud je na displeji "0" a kliknuto na číslici jinou než "0", nahradíme ji kliknutou číslicí
    if (display.textContent === '0' && digit !== '0') {
      display.textContent = digit;
    } else {
      // Pokud není na displeji "0" nebo pokud délka není větší než 9, přidáme číslici
      if (display.textContent.length < 9) {
        display.textContent += digit;
      }
    }
  }
  
  // Navěšení funkce na všechna tlačítka s číslicemi
  const buttons = document.querySelectorAll('.btn-num');
  buttons.forEach(button => {
    button.addEventListener('click', handleDigitClick);
  });
  