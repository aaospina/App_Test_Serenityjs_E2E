import { Target } from "serenity-js/lib/serenity-protractor";
import { by } from "protractor";

export const location = {
    Map_Select: Target.the('"map select"').located(by.css("ng-map")),
    Establishlocation_Button: Target.the('"establishlocation button"').located(by.css("button[ng-click='vm.setLatLng()']")),
    Cancellocation_Button: Target.the('"cancellocation button"').located(by.css("button[class='btn btn-default']")),
    Close_Button: Target.the('"close button"').located(by.css("button[class='close']"))
}