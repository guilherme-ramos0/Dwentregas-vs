class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer id="contato" class="site-footer" role="contentinfo">
            <div class="footer-container">
                <div class="footer-section">
                    <h3>DW Entregas</h3>
                    <p>Endereço: Av. Exemplo, 123 – Belo Horizonte, MG</p>
                    <p>Telefone: <a href="#">+55 (31) 99999-9999</a></p>
                    <p>Email: <a href="#">contato@dwentregas.com.br</a></p>
                </div>

                <div class="footer-section" aria-label="Redes sociais">
                    <h3>Siga-nos</h3>
                    <ul class="social-list">
                    <li><a href="#" aria-label="Facebook DW Entregas">Facebook</a></li>
                    <li><a href="#" aria-label="Instagram DW Entregas">Instagram</a></li>
                    <li><a href="#" aria-label="LinkedIn DW Entregas">LinkedIn</a></li>
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
