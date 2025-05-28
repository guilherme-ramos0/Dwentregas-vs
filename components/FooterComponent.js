class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="site-footer" role="contentinfo">
            <div class="footer-container">
                <div class="footer-section">
                    <h3>DW Entregas</h3>
                    <p>Endereço: Av. Exemplo, 123 – Belo Horizonte, MG</p>
                    <p>Telefone: +55 (31) 99999-9999</p>
                    <p>Email: contato@dwentregas.com.br</p>
                </div>

                <div class="footer-section" aria-label="Redes sociais">
                    <h3>Siga-nos</h3>
                    <ul class="social-list">
                    <li aria-label="Facebook DW Entregas">Facebook</li>
                    <li aria-label="Instagram DW Entregas">Instagram</li>
                    <li aria-label="LinkedIn DW Entregas">LinkedIn</li>
                    </ul>
                </div>
                </div>
                <div class="footer-copyright">
                <p>&copy; ${new Date().getFullYear()} DW Entregas. Todos os direitos reservados.</p>
            </div>
        </footer>
    `;
    }
}

customElements.define('dw-footer', FooterComponent);
