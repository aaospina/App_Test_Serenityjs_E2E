import { Target } from "serenity-js/lib/serenity-protractor";
import { by } from "protractor";

export const analysisconsult = {
    Download_Results: Target.the('"download results button"').located(by.xpath("//a[contains(text(),'{0}')]/../../td[6]//button")),
    Cancel_Button: Target.the('"cancel button"').located(by.xpath("//span[contains(text(),'{0}')]/../../td[6]//button")),
    Cancel_Confirmation_Button: Target.the('"cancel confirmation button"').located(by.xpath("//button[contains(text(),'Sí, cancelar')]")),
    Cancel_Confirmation_Cancel_Button: Target.the('"cancel confirmation button"').located(by.xpath("//button[contains(text(),'No')]")),
    Edit_Analysis: Target.the("{0}").located(by.xpath("//span[contains(text(),'{0}')]/../../td[6]//button")),
    Go_To_Page: Target.the('"numeration footer"').located(by.xpath("//li/a[contains(text(),'{0}')]")),
    Go_To_Previous_Page: Target.the('"numeration footer"').located(by.xpath("//li/a[contains(text(),'«')]")),
    Go_To_Next_Page: Target.the('"numeration footer"').located(by.xpath("//li/a[contains(text(),'»')]")),
    
}
