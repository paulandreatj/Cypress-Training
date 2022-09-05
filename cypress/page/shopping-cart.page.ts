class ShoppingCartPage{
    private summary: string;

    constructor(){
        this.summary = ".cart_navigation [title='Proceed to checkout']";
    }

    public proceedToCheckOut(): void {
        cy.get(this.summary).click();
    }
}

export { ShoppingCartPage }
