class ProductsListPage{
    private menuAddToCart: string;
    private menuCheckout: string;

    constructor(){
        this.menuAddToCart = ".button-container [title='Add to cart']";
        this.menuCheckout = ".button-container [title='Proceed to checkout']";
    }

    public addToCart(): void {
        cy.get(this.menuAddToCart).click();
    }

    public proceedToCheckOut(): void {
        cy.get(this.menuCheckout).click();
    }
}

export { ProductsListPage }
