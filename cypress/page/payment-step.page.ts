class PaymentStepPage{
    private buton: string;
    private summary: string;
    public text: string;

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
}

export { PaymentStepPage }
