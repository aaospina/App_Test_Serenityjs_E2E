import { Task, PerformsTasks } from "serenity-js/lib/screenplay";
import { Enter, Click } from "serenity-js/lib/serenity-protractor";
import { login } from "../../ui/login/login";
import { Refresh } from "../../../screenplay/interactions/Refresh";
import { Pause } from "../../../screenplay/interactions/Pause";

/*export class EnterPass implements Task{

    performAs(actor: PerformsTasks){
        return actor.attemptsTo(
            Enter.theValue(this.pass).into(login.Pass_Field)
        )
    }

    constructor(private pass:string){}
    
}

export class EnterUsername implements Task{

    performAs(actor: PerformsTasks){
        return actor.attemptsTo(
            Enter.theValue(this.username).into(login.Username_Field)
        )
    }

    constructor(private username:string){}
    
}

export class ClickSignIn implements Task{

    performAs(actor: PerformsTasks){
        return actor.attemptsTo(
            Click.on(login.SignIn_Button)
        )
    }

    constructor(){}
    
}

export class EnterCredentials implements Task{

    static as(username: string, pass: string){
        return new EnterCredentials(username, pass)
        
    }

    performAs(actor:PerformsTasks){
        return actor.attemptsTo(
            new EnterUsername(this.username),
            new EnterPass(this.pass),
            new ClickSignIn()
        )
    }

    constructor(private username:string, private pass:string){}
}*/

export const EnterPass = (pass:string) => Task.where('#actor enters the pass',
    Enter.theValue(pass).into(login.Pass_Field)
);

export const EnterUsername = (userName:string) => Task.where('#actor enters the username',
    Enter.theValue(userName).into(login.Username_Field)
);

export const ClickSignIn = () => Task.where('#actor clicks on enter button',
    Click.on(login.SignIn_Button)
);

export const EnterCredentials = (userName:string, pass:string) => Task.where('#actor enters its credentials and clicks on enter button',
    EnterUsername(userName),
    EnterPass(pass),
    ClickSignIn(),
    Pause.for(1000)
)