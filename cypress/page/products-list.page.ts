class ProductsListPage{
    private menuAddToCart: string;
    private menuCheckout: string;

    constructor(){
        this.menuAddToCart = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.menuCheckout = "[style*='display: block;'] .button-container > a";
    }

    public addToCart(): void {
        cy.get(this.menuAddToCart).click();
    }

    public proceedToCheckOut(): void {
        cy.get(this.menuCheckout).click();
    }
}

export { ProductsListPage }
