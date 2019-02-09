import { Task } from "serenity-js/lib/screenplay";
import { Click } from "serenity-js/lib/serenity-protractor";
import { analysisconsult } from "../../ui/analysis/analysis_consult"
import { Pause } from "../../interactions/Pause";


export const ClickOnDownloadResults = (analysisName: string) => Task.where('#actor clicks on download results button',
    Click.on(analysisconsult.Download_Results.of(analysisName))
);

export const ClickOnCancelAnalysis = (analysisName: string) => Task.where('#actor clicks on cancel analysis',
    Click.on(analysisconsult.Cancel_Button.of(analysisName))
);

export const ClickOnCancelConfirmation = () => Task.where('#actor clicks on confirmation cancel analysis',
    Click.on(analysisconsult.Cancel_Confirmation_Button)
);

export const CancelAnalysis = (analysisName: string) => Task.where('#actor enter the analysis data',
    ClickOnCancelAnalysis(analysisName),
    ClickOnCancelConfirmation()
);

export const EditAnalysis = (analysisName: string) => Task.where('#actor enter the anaysis edit button',
    Click.on(analysisconsult.Edit_Analysis.of(analysisName)),
    Pause.for(5000)
);
    