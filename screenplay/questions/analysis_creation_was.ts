import { Task, See } from "serenity-js/lib/screenplay";
import { Wait, Is, Text } from "serenity-js/lib/serenity-protractor";
import { Assertions } from "../ui/assertions/assertions";
import { include } from "../../expect";

export const AnalysisCreationWas = () => Task.where('"#actor sholud see the movement creation section"',
    Wait.until(Assertions.Successful_Analysis_Creation, Is.visible()),
    See.if(Text.of(Assertions.Successful_Analysis_Creation),include("Movimientos"))
)