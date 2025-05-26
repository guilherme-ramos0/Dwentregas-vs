class TrackingComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <section id="sobre" class="tracking-hero" aria-label="Acompanhe seu pedido em tempo real">
        <div class="tracking-hero__content">
            <h1 class="tracking-hero__text">
              Com a DW Entregas você acompanha em tempo real todas as etapas do seu pedido, desde a coleta até a entrega.
            </h1>
          </div>
          <div class="tracking-hero__media">
            <img
              src="imagens/Entregador-com-celular-na-mão.png"
              alt="Entregador da DW Entregas segurando um pacote e mostrando a tela de um celular"
              class="tracking-hero__image"
            />
        </div>
      </section>
`;
    }
}

customElements.define('dw-tracking', TrackingComponent);
