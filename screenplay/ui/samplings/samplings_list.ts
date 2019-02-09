import { Target } from "serenity-js/lib/serenity-protractor";
import { by } from "protractor";

export const samplingslist = {
    Results: Target.the('"the result button"').located(by.xpath("//td[contains(text(),'{0}')]/../td[5]/button")),
    Get_Download_Link_Button: Target.the('"get download link button"').located(by.css("//td[contains(text(),'{0}')]/../td/button[1]")), //the argument must be as follow <analysis name>+"-"+<movement name>
    Count_Bad_Detections_Button: Target.the('"count bad detections button"').located(by.css("//td[contains(text(),'{0}')]/../td/button[2]")), //the argument must be as follow <analysis name>+"-"+<movement name>
    View_Results_Button: Target.the('"see results button"').located(by.css("//td[contains(text(),'{0}')]/../td/button[3]")), //the argument must be as follow <analysis name>+"-"+<movement name>
    Close_Sampling_Results: Target.the('"close sampling results option"').located(by.css("button[class='close']")),
    Go_To_Page: Target.the('"numeration footer"').located(by.xpath("//li/a[contains(text(),'{0}')]")),
    Go_To_Previous_Page: Target.the('"numeration footer"').located(by.xpath("//li/a[contains(text(),'«')]")),
    Go_To_Next_Page: Target.the('"numeration footer"').located(by.xpath("//li/a[contains(text(),'»')]"))
}