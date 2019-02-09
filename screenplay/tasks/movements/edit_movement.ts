import { Task } from "serenity-js/lib/screenplay";
import { Click, Enter, Clear } from "serenity-js/lib/serenity-protractor";
import { movements } from "../../ui/movements/movements";
import { setmovement } from "../../ui/movements/set_movement";
import { RightClick } from "../../interactions/RightClick";
import { ClickOnCanvas, ClickExitLine, ClickOnSaveMov, ClickOnConfirmation } from "./new_movement";
import { Pause } from "../../interactions/Pause";

export const EditMovementButton = (movementName: string) => Task.where("#actor clicks on edit movement button",
    Click.on(movements.Editmovement_Button.of(movementName))
);

export const EditMovementName = (movementName:string) => Task.where("#actor clicks on edit movement button",
    Clear.theValueOf(setmovement.Movementname_Field),
    Enter.theValue(movementName).into(setmovement.Movementname_Field)
);

export const EditLine = (x:number,y:number) => Task.where("#actor does right click on canvas",
    RightClick.point(x,y)
);

export const EditMovement = (movementname:string, 
    l1x1:number, l1y1:number, l1x2:number, l1y2:number, 
    l2x1:number, l2y1:number, l2x2:number, l2y2:number) => Task.where("#actor edit the movement",
    EditMovementName(movementname),
    EditLine(10,10),
    EditLine(10,10),
    ClickOnCanvas(l1x1,l1y1),
    ClickOnCanvas(l1x2,l1y2),
    ClickExitLine(),
    EditLine(10,10),
    EditLine(10,10),
    ClickOnCanvas(l2x1,l2y1),
    ClickOnCanvas(l2x2,l2y2),
    ClickOnSaveMov(),
    ClickOnConfirmation(),
    Pause.for(1000)

)



