function init() {
  console.log('Funktion init funktioniert'); // ich teste, ob die Funktion init() funktionert

  let burgerRef = document.getElementById('burgerCards'); // ich hole mir den Container, wo die Menüs abgelegt werden soll und speicher mir das in einer Variablen
  console.log(burgerRef); // ich kontrolliere, was ich mir geholt habe.

  let singleBurger = burgers[0]; // ich hole mir einen Burger aus dem array und zwar den ersten!
  console.log(singleBurger); // ich überprüfe, was ich mir geholt habe

  console.log(singleBurger.name); // ich schaue welche namen der Erste Burger aus dem array hat

  burgerRef.innerHTML += `
    <h3>${singleBurger.name}</h3>
  `; // wie füge ich in das DOM den Burger Namen ein!
}
