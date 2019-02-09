import { Target } from "serenity-js/lib/serenity-protractor";
import { by } from "protractor";

export const Assertions = {
    Successful_Login: Target.the('Successful login').located(by.css("h2")),
    Successful_Analysis_Creation: Target.the('Successful analysis creation').located(by.xpath("//h2[contains(text(),'Movimientos')]")),
    Successful_Movement_Creation: Target.the('Successful movement creation').located(by.xpath("//div[@class='panel-body']/h4[contains(text(),'{0}')]")),
    Analysis_Creation_Form: Target.the('Analysis creation form').located(by.css("h2")),
    Analysis_In_Analysis_List: Target.the('analysis in analysis list').located(by.xpath("//span[contains(text(),'{0}')]")),
    Analysis_Status: Target.the('analysis status').located(by.xpath("//span[contains(text(),'{0}')]/../../td[4]/span")),

}