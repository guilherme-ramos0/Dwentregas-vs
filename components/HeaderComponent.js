class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header>
        <nav class="nav" aria-label="Menu principal">
          <img src="../imagens/DW\ Entregas\ Logo\ Branca.png" alt="Logo DW Entregas" class="logo" >
          <ul class="menu">
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#regioes">Regiões</a></li>
          </ul>
        </nav>
      </header>
    `;
    }
}

customElements.define('dw-header', HeaderComponent);
