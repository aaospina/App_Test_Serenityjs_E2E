import { Task } from "serenity-js/lib/screenplay";
import { Enter, Click } from "serenity-js/lib/serenity-protractor";
import { analysis } from "../../ui/analysis/analysis";
import { Pause } from "../../interactions/Pause";

export const EnterName = (name:string) => Task.where('#actor enters de analysis name',
    Enter.theValue(name).into(analysis.Analysisname_Field)
    
);

export const SelectType = () => Task.where('#actor select on simple analysis',
    Click.on(analysis.Analysistype_Select)    
);

export const SelectFolder = (foldelName:string) => Task.where('#actor select the folder',
    Click.on(analysis.Folder_select.of(foldelName))
);

export const ClickCreateAnalysis = () => Task.where('#actor clicks on create button',
    Click.on(analysis.Createanalysis_Button)
);

export const AnalysisData = (analysisName:string, foldelName:string) => Task.where('#actor enter the analysis data',
    
    EnterName(analysisName),
    SelectType(),
    SelectFolder(foldelName),
    ClickCreateAnalysis(),
    Pause.for(2000)
)