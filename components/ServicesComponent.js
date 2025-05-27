class ServicesComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <section class="services" aria-labelledby="services-title">
        <h2 id="services-title">Conheça nossos <span class="highlight">serviços</span></h2>
        <div class="services-grid">
          <article class="card" tabindex="0">
            <h3>Envios Flex</h3>
            <p>O Envios Flex é o serviço que permite que você faça envios no mesmo dia na sua cidade, usando seus próprios veículos ou o serviço de entrega da sua escolha.</p>
          </article>
          <article class="card" tabindex="0">
            <h3>Envios Flex em Belo Horizonte e região</h3>
            <p>Serviço de entregas flexíveis, com opções personalizadas de horários e destinos, atendendo Belo Horizonte e áreas próximas, ideal para demandas específicas.</p>
          </article>
          <article class="card" tabindex="0">
            <h3>Serviços de entrega no mesmo dia</h3>
            <p>Entrega realizada no mesmo dia do pedido, garantindo rapidez para itens urgentes, com foco em agilidade e eficiência.</p>
          </article>
          <article class="card" tabindex="0">
            <h3>Serviços de entrega no próximo dia</h3>
            <p>Entrega programada para o dia seguinte ao pedido, oferecendo custo‑benefício e confiabilidade para envios menos urgentes.</p>
          </article>
        </div>
      </section>
    `;
    }
}

customElements.define('dw-services', ServicesComponent);
