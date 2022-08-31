class ShippingStepPage{
    private checkbox: string;
    private summary: string;

    constructor(){
        this.checkbox = "#cgv";
        this.summary = ".cart_navigation span";
    }

    public agreeTerms(): void {
        cy.get(this.checkbox).click();
    }

    public proceedToCheckout(): void{
        cy.get(this.summary).click();
    }
}

export { ShippingStepPage }
