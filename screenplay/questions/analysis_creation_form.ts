import { Task, See } from "serenity-js/lib/screenplay";
import { Wait, Is, Text } from "serenity-js/lib/serenity-protractor";
import { Assertions } from "../ui/assertions/assertions";
import { include } from "../../expect";

export const AnalysisCreationForm = () => Task.where('"#actor in analysis creation form"',
    Wait.until(Assertions.Analysis_Creation_Form, Is.visible()),
    See.if(Text.of(Assertions.Analysis_Creation_Form), include('Crear aforo'))
)