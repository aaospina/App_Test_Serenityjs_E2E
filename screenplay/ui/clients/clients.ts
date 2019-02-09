import { Target } from "serenity-js/lib/serenity-protractor";
import { by } from "protractor";

export const clients = {
    Edit_Client: Target.the('"edit client option"').located(by.xpath("//td[contains(text(),'{0}')]/../td[4]/button")),
    Price_Per_Hour: Target.the('"edit the price per hour"').located(by.xpath("//td[contains(text(),'{0}')]/../td[2]")),
    Save_Edition: Target.the('"save the edition"').located(by.xpath("//td[contains(text(),'{0}')]/../td[4]/button[1]")),
    Cancel_Edition: Target.the('"cancel the edition"').located(by.xpath("//td[contains(text(),'{0}')]/../td[4]/button[2]")),
    Editing_Confirmation: Target.the('"the editing confirmation button"').located(by.xpath("//button[contains(text(),'Continuar')]"))
}