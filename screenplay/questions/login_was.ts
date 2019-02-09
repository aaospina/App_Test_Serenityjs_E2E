import { Task, See } from "serenity-js/lib/screenplay";
import { Wait, Is, Text } from "serenity-js/lib/serenity-protractor";
import { Assertions } from "../ui/assertions/assertions";
import { include } from "../../expect";

export const LoginWasSuccessful = () => Task.where('#actor should see the homepage',
    Wait.until(Assertions.Successful_Login, Is.visible()),
    See.if(Text.of(Assertions.Successful_Login),include("Aforos"))
)