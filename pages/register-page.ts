import { expect, Page } from "@playwright/test";

export class RegisterPage{
    readonly page: Page;

    constructor(page: Page){
        this.page=page
    }

locators = {
    emailField:()=> "[placeholder='Enter your e-mail']",
    signUpBtn:()=>"text=Sign-up here!",
    signUpPageTitle:()=> "text=Create your account",
    choosePasswordTitle:()=> "Choose a password",
    signInButton:()=> "text=Sign in"
    
}

async goToSignUpPage(){
    await this.page.locator(this.locators.signUpBtn()).click()
    await expect(this.page.locator(this.locators.signUpPageTitle())).toBeVisible()
}


async fillEmailField(email:string){
    await this.page.locator(this.locators.emailField()).fill(email)
}

async checkTheAgreementCheckbox(){
    await this.page.getByRole('checkbox').check()

}

async fillPasswordFields(password:string){
    await expect(this.page.getByText(this.locators.choosePasswordTitle())).toBeVisible()
    await this.page.getByPlaceholder("Enter your password").nth(0).fill(password)
    await this.page.getByPlaceholder("Enter your password").nth(1).fill(password)
}

async fillNames(firstName:string,lastName:string){
    await this.page.getByPlaceholder("Enter your first name").fill(firstName)
    await this.page.getByPlaceholder("Enter your last name").fill(lastName)
}

async clickNextButton(){
    await this.page.getByText("Next").click()
}

async clickRegisterButton(){
    await this.page.getByText("Register").click()
}

async verifySignUpIsCompleted(){
    await expect(this.page.getByText("Thanks for signing up!")).toBeVisible();
    await expect(this.page.getByText("A confirmation e-mail is on its way!")).toBeVisible();
}

async clickSignInBtn(){
    await this.page.locator(this.locators.signInButton()).click()
}








}