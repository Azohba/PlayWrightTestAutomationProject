import { expect,Page } from "@playwright/test";

export class CompleteAccountPage{
    readonly page:Page;

    constructor(page: Page){
        this.page=page
    }

    async checkSignInIsTrue(name:string){
        await expect(this.page.locator("text="+name)).toBeVisible()
    }
}
