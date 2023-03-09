import { expect,Page } from "@playwright/test";

export class LoginPage{
    readonly page:Page;

    constructor(page: Page){
        this.page=page
    }


    locators={
        emailTxtBox:()=>"[id='email']",
        passwordField:()=>"[id='password']",
        signInButton:()=>"button[type='submit']"
    }

    async fillEmailPassword(email:string,password:string){
        await this.page.locator(this.locators.emailTxtBox()).fill(email)
        await this.page.locator(this.locators.passwordField()).fill(password)
        await this.page.locator(this.locators.signInButton()).nth(0).click()

    }
}
