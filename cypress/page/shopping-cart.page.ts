class ShoppingCartPage{
    private summary: string;

    constructor(){
        this.summary = ".cart_navigation span";
    }

    public proceedToCheckout(): void {
        cy.get(this.summary).click();
    }
}

export { ShoppingCartPage }
