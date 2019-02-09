import { Task, PerformsTasks } from "serenity-js/lib/screenplay";
import { Open, UseAngular } from "serenity-js/lib/serenity-protractor";
import { browser } from "protractor";
const config = require("config");

export class Navigate implements Task
{

    static toDeodata(){
        browser.driver.manage().window().maximize();
        return new Navigate();  
    }    

    performAs(actor: PerformsTasks){
        return actor.attemptsTo(
            //UseAngular.disableSynchronisation(),
            Open.browserOn(config.get('environment.url'))
        )
    }
}