import { Target } from "serenity-js/lib/serenity-protractor";
import { by } from "protractor";

export const processanalysis = {
    Processanalysis_Button: Target.the('"processanalysis button"').located(by.css("button[ng-click='vm.processAnalysis()']")),
    Confirm_Button: Target.the('"confirm button"').located(by.xpath("//button[contains(text(),'Continuar')]"))
}