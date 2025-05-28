class MapComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="map-section" aria-label="Localização da DW Entregas">
            <div class="regions-header">
                <h2 class="regions-title">Regiões</h2>
            </div>
        
            <div class="regions-content">
                <div id="map" class="map-container" role="application" aria-label="Mapa de regiões atendidas"></div>

                <div class="regions-text">
                <p>
                Aqui você vê as regiões em que atuamos, com um mapa interativo e lista de cidades atendidas,
                como Belo Horizonte e arredores. Confira os serviços disponíveis, incluindo
                <strong>Envios Flex</strong>, <strong>Entrega no Mesmo Dia</strong> e
                <strong>Entrega no Próximo Dia</strong>.
                </p>
                
                <img src="imagens/DW-Entregas-Logo-Branca.png" alt="Logo DW Entregas" class="regions-logo" />
                </div>
            </div>
                </div>
        </section>
    `;

        this.setupMap();
    }

    setupMap() {
        const interval = setInterval(() => {
            if (window.L) {
                clearInterval(interval);
                this.initMap();
            }
        }, 100);
    }

    initMap() {
        const center = [-19.9191, -43.9386]; // Centro aproximado de BH
        const map = L.map(this.querySelector('#map')).setView(
            [-19.9191, -43.9386],
            10
        ); // Região de BH
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        L.marker([-19.9191, -43.9386])
            .addTo(map)
            .bindPopup('Belo Horizonte')
            .openPopup();

        const bairros = [
            { nome: 'Pampulha', lat: -19.8302, lng: -43.9707 },
            { nome: 'Venda Nova', lat: -19.8128, lng: -43.9476 },
            { nome: 'Barreiro', lat: -19.944, lng: -44.0607 },
            { nome: 'Contagem', lat: -19.9317, lng: -44.0533 },
            { nome: 'Nova Lima', lat: -19.9854, lng: -43.8509 },
            { nome: 'Santa Luzia', lat: -19.7841, lng: -43.8591 },
            { nome: 'Sabará', lat: -19.8765, lng: -43.8321 },
        ];

        bairros.forEach((bairro) => {
            L.marker([bairro.lat, bairro.lng])
                .addTo(map)
                .bindPopup(`<strong>${bairro.nome}</strong>`);
        });
    }
}

customElements.define('dw-map', MapComponent);
