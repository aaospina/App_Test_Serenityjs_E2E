import { Task, See } from "serenity-js/lib/screenplay";
import { Wait, Is, Text } from "serenity-js/lib/serenity-protractor";
import { Assertions } from "../ui/assertions/assertions";
import { include } from "../../expect";

export const ProcessingStarts = (analysisName: string) => Task.where('"#actor processing starts"',
    Wait.until(Assertions.Analysis_In_Analysis_List.of(analysisName), Is.visible()),
    See.if(Text.of(Assertions.Analysis_Status.of(analysisName)), include('En proceso'))
)