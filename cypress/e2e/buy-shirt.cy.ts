import {MenuContentPage} from "../page/index";
import {ProductsListPage} from "../page/products-list.page";
import {ShoppingCartPage} from "../page/shopping-cart.page";
import {LoginPage} from "../page/login.page";
import {AddressStepPage} from "../page/address-step.page";
import {ShippingStepPage} from "../page/shipping-step.page";
import {PaymentStepPage} from "../page/payment-step.page";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productsListPage.addToCart();
    productsListPage.proceedToCheckOut();

    shoppingCartPage.proceedToCheckOut();

    loginPage.signIn("aperdomobo@gmail.com", "WorkshopProtractor");

    addressStepPage.proceedToCheckout();

    shippingStepPage.agreeTerms();
    shippingStepPage.proceedToCheckOut();

    paymentStepPage.payByBankWire();
    paymentStepPage.confirmOrder();
    cy.get(paymentStepPage.text).should("have.text",
        "Your order on My Store is complete.");
  });
});
