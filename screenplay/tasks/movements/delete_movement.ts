import { Task } from "serenity-js/lib/screenplay";
import { Click } from "serenity-js/lib/serenity-protractor";
import { movements } from "../../ui/movements/movements";
import { Pause } from "../../interactions/Pause";

export const ClickOnDeleteMov = (movementName: string) => Task.where('#actor clicks on Eliminar button',
    Click.on(movements.Deletemovement_Button.of(movementName))
);

export const ClickOnAskForDeleting = () => Task.where('#actor confirm the elimination',
    Click.on(movements.AskForDeleting_Button)
);

export const ClickOnConfirmation = () => Task.where('#actor confirm the elimination',
    Click.on(movements.confirmDeleting_Button)
)

export const DeleteMovement = (movementName: string) => Task.where('#actor delete a movement',
    ClickOnDeleteMov(movementName),
    ClickOnAskForDeleting(),
    ClickOnConfirmation(),
    Pause.for(1000),
)