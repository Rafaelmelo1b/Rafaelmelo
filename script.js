function changeContent() {
  const valorSelecionado = document.getElementById("selector").value
  const contentDiv = document.getElementById("content")

  switch (valorSelecionado) {
    case "opcao1":
      contentDiv.innerHTML = "<p>Você escolheu a Opção 1!</p>"
      break
    case "opcao2":
      contentDiv.innerHTML = "<p>Você escolheu a Opção 2!</p>"
      break
    case "opcao3":
      contentDiv.innerHTML = "<p>Você escolheu a Opção 3!</p>"
      break
    default:
      contentDiv.innerHTML = "<p>Nenhuma opção válida foi selecionada.</p>"
  }
}
