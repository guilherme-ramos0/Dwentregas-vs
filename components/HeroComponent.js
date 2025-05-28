class HeroComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <section class="hero" role="banner">
        <div class="hero-text">
          <h1><span class="texto-laranja">Entregas ágeis</span> e
                            <br />
                            seguras para o <br />
                            seu eu e-commerce.</h1>
            <p class="sub"><span class="texto-laranja"
                                >Entregamos em menos de 24 Horas</span
                            >
                            <br />
                            Pediu, Piscou, Chegou!</p>
          <a href=#" class="cta-button" role="button">Comece a usar!</a>
        </div>
          <img src="imagens/DW-Entregas-Logo-Laranja.png" alt="Logo DW Entregas"  class="logo-hero">
      </section>
    `;
    }
}

customElements.define('dw-hero', HeroComponent);
