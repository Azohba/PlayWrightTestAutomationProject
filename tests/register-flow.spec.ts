import {test,expect, type Page} from "@playwright/test";
import{faker} from "@faker-js/faker";
import { RegisterPage } from "../pages/register-page";
import { LoginPage } from "../pages/login-page";
import { CompleteAccountPage } from "../pages/complete_account-page";


test.beforeEach(async ({page})=> {
    await page.goto('/')
})

test.describe("Sign-up with new user",()=>{
    const firstName:string = faker.name.firstName()
    const lastName:string = faker.name.lastName()
    const password:string = faker.random.alphaNumeric(8) + "."
    const email:string = firstName+"-"+lastName+"@seenonsdemo.test"
    
    test("Sign up with new user happy path",async ({page}) => {
        const registerPage = new RegisterPage(page)
        const loginPage = new LoginPage(page)
        const completeAccountPage = new CompleteAccountPage(page)
        await registerPage.goToSignUpPage()
        await registerPage.fillEmailField(email)
        await registerPage.checkTheAgreementCheckbox()
        await registerPage.clickNextButton()
        await registerPage.fillPasswordFields(password)
        await registerPage.clickNextButton()
        await registerPage.fillNames(firstName,lastName)
        await registerPage.clickRegisterButton()
        await registerPage.verifySignUpIsCompleted()
        await registerPage.clickSignInBtn()
        await loginPage.fillEmailPassword(email,password)
        await completeAccountPage.checkSignInIsTrue(firstName+" "+lastName)
       
    })


    
})