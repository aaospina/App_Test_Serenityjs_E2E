import { Target } from "serenity-js/lib/serenity-protractor";
import { by } from "protractor";

export const countBadDetections = {
    Video: Target.the('"the video"').located(by.xpath("//video")),
    Erase_Button: Target.the('"the erase button"').located(by.css("button[ng-click='vm.doDelete()']")),
    Confirm_Delected: Target.the('"the confirm deleted button"').located(by.xpath("//button[contains(text(),'Sí, borrar')]")),
    Cancel_Delected: Target.the('"the confirm deleted button"').located(by.xpath("//button[contains(text(),'No')]")),
    Save_Button: Target.the('"the save button"').located(by.css("button[ng-click='vm.doSave()']")),
    View_Results: Target.the('"the view results button"').located(by.xpath("//button[contains(text(),'Ver resultados')]")),
    Acept_Button: Target.the('"the acept button "').located(by.xpath("//button[contains(text(),'Aceptar')]")),
    Controls_Tab: Target.the('"the controls tab"').located(by.xpath("//a[contains(text(),'Controles')]")),
    Class_Tab: Target.the('"the class tab"').located(by.xpath("//a[contains(text(),'Clases')]"))
}