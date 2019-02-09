import { Target } from "serenity-js/lib/serenity-protractor";
import { by } from "protractor";

export const analysis = {
    Analysisname_Field: Target.the('"analysisname field"').located(by.css("input[name='name']")),
    Analysislocation_Button: Target.the('"analysis location button"').located(by.css("button[class='btn btn-info btn-xs m-l-xs']")),
    Deletelocation_Buton: Target.the('"deletelocation button"').located(by.css("button[ng-click='vm.clearLocation()']")),
    Analysistype_Select: Target.the('"analysistype select"').located(by.css("option[label='Volúmenes simples']")),
    Folder_select: Target.the('"folder select"').located(by.xpath("//span[contains(text(),'{0}')]")),
    Createanalysis_Button: Target.the('"createanalysis button"').located(by.css("button[class='btn btn-primary']"))
}