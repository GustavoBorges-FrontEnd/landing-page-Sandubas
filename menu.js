// JavaScript para controlar o menu mobile e a navegação
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuMobile = document.querySelector('.menu-mobile');
  const menuLinks = document.querySelectorAll('.menu-mobile a, .menu-desktop a');
  
  // Função para alternar o menu
  function toggleMenu() {
      menuMobile.classList.toggle('active');
  }
  
  // Adiciona evento de clique ao botão do menu
  menuToggle.addEventListener('click', toggleMenu);
  
  // Fecha o menu quando um link é clicado e ajusta o scroll
  menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          // Fecha o menu mobile se estiver aberto
          if (menuMobile.classList.contains('active')) {
              toggleMenu();
          }
          
          // Obtém o ID da seção alvo
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          
          if (targetSection) {
              // Previne o comportamento padrão do link
              e.preventDefault();
              
              // Calcula a posição de rolagem (com um pequeno offset para o menu fixo)
              const navHeight = document.querySelector('.navbar').offsetHeight;
              const targetPosition = targetSection.offsetTop - navHeight;
              
              // Rola até a seção
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
              });
              
              // Atualiza a URL com o hash
              history.pushState(null, null, targetId);
          }
      });
  });
});