import { Target } from "serenity-js/lib/serenity-protractor";
import { by } from "protractor";

export const movements = {
    Addmovement_Button: Target.the('"addmovement button"').located(by.css('button[ng-click="vm.createMovement()"]')),
    Return_Button: Target.the('"return button"').located(by.css('button[ng-click="vm.goBack()"]')),
    Editmovement_Button: Target.the('"editmovement button"').located(by.xpath("//h4[contains(text(),'{0}')]/../../div[2]/button[2]")),
    Deletemovement_Button: Target.the('"deletemovement button"').located(by.xpath("//h4[contains(text(),'{0}')]/../../div[2]/button[1]")),
    AskForDeleting_Button: Target.the('"aks for deleting action option Eliminar"').located(by.xpath("//button[contains(text(),'Eliminar')]")),
    AskForDeletingCancel_Button: Target.the('"aks for deleting action option Cancelar"').located(by.xpath("//button[contains(text(),'Cancelar')]")),
    confirmDeleting_Button: Target.the('"confirm deleting"').located(by.xpath("//button[contains(text(),'Continuar')]"))
}