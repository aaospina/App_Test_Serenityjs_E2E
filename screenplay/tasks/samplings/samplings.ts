import { Task } from "serenity-js/lib/screenplay";
import { Click } from "serenity-js/lib/serenity-protractor";
import { samplingslist } from "../../ui/samplings/samplings_list";

export const ClickOnResults = (analysisName: string) => Task.where('#actor click on downloads results button',
    Click.on(samplingslist.Results.of(analysisName))
);

export const ClickOnGetLinkResults = (analysisMovement: string) => Task.where('#actor click on get link button',
    Click.on(samplingslist.Get_Download_Link_Button.of(analysisMovement))
);

export const ClickOnCountBadDetections = (analysisMovement: string) => Task.where('#actor click on count bad detections button',
    Click.on(samplingslist.Count_Bad_Detections_Button.of(analysisMovement))
);

export const ClickOnViewResults = (analysisMovement: string) => Task.where('#actor click on view results button',
    Click.on(samplingslist.View_Results_Button.of(analysisMovement))
);

export const DownloadResults = (analysisName: string, analysisMovement: string) => Task.where('#actor downloads results',
    ClickOnResults(analysisName),
    ClickOnGetLinkResults(analysisMovement)
);

export const CountBadDetections = (analysisName: string, analysisMovement: string) => Task.where('#actor count bad detections',
    ClickOnResults(analysisName),
    ClickOnCountBadDetections(analysisMovement)
);

export const ViewResults = (analysisName: string, analysisMovement: string) => Task.where('#actor views results',
    ClickOnResults(analysisName),
    ClickOnViewResults(analysisMovement)
);