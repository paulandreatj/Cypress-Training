class PaymentStepPage{
    private buton: string;
    private summary: string;
    public text: string;

    constructor(){
        this.buton = ".bankwire";
        this.summary = ".cart_navigation .button";
        this.text = ".cheque-indent .dark";
    }

    public payByBankWire(): void {
        cy.get(this.buton).click();
    }

    public confirmOrder(): void {
        cy.get(this.summary).click();
    }

    public verifyText(){
        return cy.get(this.text);
    }
}

export { PaymentStepPage }
