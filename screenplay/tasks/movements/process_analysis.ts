import { Task } from "serenity-js/lib/screenplay";
import { Click } from "serenity-js/lib/serenity-protractor";
import { processanalysis } from "../../ui/movements/process_analysis";
import { Pause } from "../../interactions/Pause";
import { menu } from "../../ui/menu/menu";

export const CLickOnProcessAnalysis = () => Task.where('#actor clicks on process analysis button',
    Click.on(processanalysis.Processanalysis_Button),
    //Pause.for(1000),
    Click.on(processanalysis.Confirm_Button),
    //Pause.for(1000)
)