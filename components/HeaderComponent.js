class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header class="site-header" id="site-header">
        <nav class="nav" aria-label="Menu principal">
          <img src="../imagens/DW-Entregas-Logo-Branca.png" alt="Logo DW Entregas" class="logo" >
          

          <button class="nav-toggle" aria-label="Abrir menu" aria-expanded="false">
            <span id="burguer" class="material-symbols-outlined">menu</span>
          </button>
          
          <ul class="menu">
            <li class="menu-close-container">
              <button class="menu-close" aria-label="Fechar menu">
                <span class="material-symbols-outlined">close</span>
              </button>
            </li>

            <li><a  href="#inicio">Inicio</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#regioes">Regiões</a></li>
          <li><a href="#contato">Contato</a></li>
          </ul>

          <div class="nav-overlay"></div>
        </nav>
      </header>
    `;
        const toggleBtn = this.querySelector('.nav-toggle');
        const menuEl = this.querySelector('.menu');
        const overlay = this.querySelector('.nav-overlay');
        const iconEl = toggleBtn.querySelector('span');
        const closeBtn = this.querySelector('.menu-close');

        function closeMenu() {
            menuEl.classList.remove('open');
            overlay.classList.remove('open');
            toggleBtn.setAttribute('aria-expanded', 'false');
            iconEl.textContent = 'menu';
        }

        if (toggleBtn && menuEl && overlay && iconEl) {
            toggleBtn.addEventListener('click', () => {
                const isOpen = menuEl.classList.toggle('open');
                overlay.classList.toggle('open', isOpen);
                toggleBtn.setAttribute('aria-expanded', String(isOpen));
                iconEl.textContent = isOpen ? 'close' : 'menu';
            });

            // Ao clicar no botão interno de fechar, fecha
            closeBtn.addEventListener('click', closeMenu);

            // Fecha ao clicar num link
            this.querySelectorAll('.menu a').forEach((link) =>
                link.addEventListener('click', closeMenu)
            );

            // Fecha ao clicar no overlay (fora da sidebar)
            overlay.addEventListener('click', closeMenu);
        }
    }
}

customElements.define('dw-header', HeaderComponent);
