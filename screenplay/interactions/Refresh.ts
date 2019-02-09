import { Interaction, UsesAbilities } from "serenity-js/lib/screenplay";
import { protractor } from "protractor/built/ptor";

export class Refresh implements Interaction{

    static Page(){
        return new Refresh;
    }

    performAs(actor: UsesAbilities){
        return protractor.browser.refresh();
    }
}