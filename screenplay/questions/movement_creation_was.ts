import { Task, See } from "serenity-js/lib/screenplay";
import { Wait, Is, Text } from "serenity-js/lib/serenity-protractor";
import { Assertions } from "../ui/assertions/assertions";
import { include } from "../../expect";

export const MovementCreationWas = (movementName: string) => Task.where('the movement creation was',
    Wait.until(Assertions.Successful_Movement_Creation.of(movementName), Is.visible()),
    See.if(Text.of(Assertions.Successful_Movement_Creation.of(movementName)), include(movementName))
)