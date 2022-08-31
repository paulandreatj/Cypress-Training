class LoginPage{
    private email: string;
    private passwd: string;
    private examplemail: string;
    private examplepasswd: string;
    private submitButton: string;

    constructor(){
        this.email = "#email";
        this.passwd = "#passwd";
        this.examplemail = "aperdomobo@gmail.com";
        this.examplepasswd = "WorkshopProtractor";
        this.submitButton = "#SubmitLogin";
    }

    public signIn(e:string, p:string): void {
        cy.get(this.email).type(e);
        cy.get(this.passwd).type(p);
        cy.get(this.submitButton).click();
    }
}

export { LoginPage }
