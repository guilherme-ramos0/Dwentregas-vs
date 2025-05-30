class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header class="site-header" id="site-header">
        <nav class="nav" aria-label="Menu principal">
          <img src="../imagens/DW-Entregas-Logo-Branca.png" alt="Logo DW Entregas" class="logo" >

            <button class="nav-toggle" aria-label="Abrir menu">
              <span class="hamburger"></span>
              <span class="hamburger"></span>
              <span class="hamburger"></span>
            </button>

          <ul class="menu">
            <li><a  href="#inicio">Inicio</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#regioes">Regiões</a></li>
          <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>
    `;
    }
}
// Seleciona elementos
const toggleBtn = this.querySelector('.nav-toggle');
const menuEl = this.querySelector('.menu');
const links = this.querySelectorAll('.menu a');

// Verifica se elementos existem antes de adicionar eventos
if (toggleBtn && menuEl) {
    // Abre/fecha sidebar ao clicar no botão
    toggleBtn.addEventListener('click', () => {
        menuEl.classList.toggle('open');
    });

    // Fecha sidebar ao clicar em um item de menu
    links.forEach((link) => {
        link.addEventListener('click', () => {
            menuEl.classList.remove('open');
        });
    });
} else {
    console.warn('HeaderComponent: nav-toggle ou .menu não encontrado.');
}

customElements.define('dw-header', HeaderComponent);
