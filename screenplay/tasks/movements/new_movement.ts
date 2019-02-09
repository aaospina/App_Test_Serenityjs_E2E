import { Task } from "serenity-js/lib/screenplay";
import { Enter, Click } from "serenity-js/lib/serenity-protractor";
import { setmovement } from "../../ui/movements/set_movement";
import { ProtractorBrowser } from "protractor";
import { browser, by, element, protractor } from 'protractor';
import { MoveAndClick } from "../../interactions/MoveAndClick";
import { Pause } from "../../interactions/Pause";
import { movements } from "../../ui/movements/movements";

export const AddMovementButton = () => Task.where('#actor clicks on add movement button',
    Click.on(movements.Addmovement_Button)
);

export const EnterMovementName = (movementName:string) => Task.where('#actor enters the username',
    Enter.theValue(movementName).into(setmovement.Movementname_Field)
);

export const SelectCamera = () => Task.where('#actor selects a camera folder',
    Click.on(setmovement.Camera_select)
);

export const ClickEntryLine = () => Task.where('#actor clicks on entry line button',
    Click.on(setmovement.Entryline_Button)
);

export const ClickExitLine = () => Task.where('#actor clicks on exit line button',
    Click.on(setmovement.Exitline_Button)
);

export const ClickOnCanvas = (x:number, y:number) => Task.where('#actor clicks on a point of the image',
    MoveAndClick.point(x,y),
    Pause.for(1000)
);

export const ClickOnSaveMov = () => Task.where('#actor clicks on save button',
    Click.on(setmovement.Save_Button)
);

export const ClickOnConfirmation = () => Task.where('#actor clicks on confirmation button',
    Click.on(setmovement.Confirmation_Button)
);

export const NewMovement = (
    movementname:string, 
    l1x1:number, l1y1:number, l1x2:number, l1y2:number, 
    l2x1:number, l2y1:number, l2x2:number, l2y2:number) => Task.where('#actor enters the movement data',
    EnterMovementName(movementname),
    SelectCamera(),
    ClickOnCanvas(l1x1,l1y1),
    ClickOnCanvas(l1x2,l1y2),
    ClickExitLine(),
    ClickOnCanvas(l2x1,l2y1),
    ClickOnCanvas(l2x2,l2y2),
    ClickOnSaveMov(),
    ClickOnConfirmation(),
    Pause.for(1000)
)