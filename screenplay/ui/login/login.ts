import { Target } from "serenity-js/lib/serenity-protractor";
import { by } from "protractor";


export const login = {
    Username_Field: Target.the('"Username field"').located(by.css("input#email")),
    Pass_Field: Target.the('"Pass field"').located(by.css("input#password")),
    SignIn_Button: Target.the('"Sign button"').located(by.css("span.ladda-label"))
}