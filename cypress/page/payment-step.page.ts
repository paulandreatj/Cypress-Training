class PaymentStepPage{
    private buton: string;
    private summary: string;
    private text: string;

    constructor(){
        this.buton = ".bankwire";
        this.summary = ".cart_navigation span";
        this.text = "#center_column > div > p > strong";
    }

    public payByBankWire(): void {
        cy.get(this.buton).click();
    }

    public confirmOrder(): void {
        cy.get(this.summary).click();
    }

    public verifyText(): void {
        cy.get(this.text).should("have.text",
        "Your order on My Store is complete.");
    }
}

export { PaymentStepPage }
