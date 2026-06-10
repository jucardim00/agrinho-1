// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", function() {
    
    const botaoSaibaMais = document.getElementById("btnConhecer");
    const secaoPilares = document.getElementById("pilares");

    // Adiciona evento de clique ao botão
    botaoSaibaMais.addEventListener("click", function() {
        // Faz a tela rolar suavemente até a seção de pilares
        secaoPilares.scrollIntoView({ behavior: "smooth" });
    });
    
});