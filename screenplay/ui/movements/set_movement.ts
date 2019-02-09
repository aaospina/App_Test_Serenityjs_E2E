import { Target } from "serenity-js/lib/serenity-protractor";
import { by } from "protractor";

export const setmovement = {
    Movementname_Field: Target.the('"movementname field"').located(by.css("input[name='name']")),
    Camera_select: Target.the('"camera select"').located(by.xpath("//div/select/option[2]")),
    Entryline_Button: Target.the('"entryline button"').located(by.css("label[ng-click='vm.activateEntryLine()']")),
    Exitline_Button: Target.the('"exitline button"').located(by.css("label[ng-click='vm.activateExitLine()']")),
    //Canvas_Select: Target.the('"canvas select"').located(by.xpath("//div[1]/div/analysis-movement-canvas/div/canvas")),
    Canvas_Select: Target.the('"canvas select"').located(by.css("div > canvas")),
    Cancel_Button: Target.the('"cancel button"').located(by.xpath("//button[contains(text(),'Cancelar')]")),
    Save_Button: Target.the('"save button"').located(by.xpath("//button[contains(text(),'Guardar Movimiento')]")),
    Confirmation_Button: Target.the('"confirmation button"').located(by.xpath("//button[contains(text(),'Continuar')]"))
}