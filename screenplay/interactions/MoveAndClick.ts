import { Interaction } from "serenity-js/lib/screenplay";
import { element, by, browser } from "protractor";
import { setmovement } from "../ui/movements/set_movement";

export const MoveAndClick = {
    point: (x: number, y:number) => Interaction.where('#actor pause', actor => {
        const canvas = element(by.xpath("//div[1]/div/analysis-movement-canvas/div/canvas"));
        return browser.actions()
            .mouseMove(canvas, {x,y}).click()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            .perform(); 
    })
}
