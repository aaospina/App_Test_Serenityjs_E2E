import { Task } from "serenity-js/lib/screenplay";
import { Click } from "serenity-js/lib/serenity-protractor";
import { menu } from "../../ui/menu/menu";
import { Pause } from "../../interactions/Pause";

export const ClickOnOptCreate = () => Task.where('#actor clicks on create option',
    Click.on(menu.Create_Analysis),
    Pause.for(2000)
);

export const ClickOnOptSearch = () => Task.where('#actor clicks on Search option',
    Click.on(menu.Consult_Analysis)
);

export const ClickOnOptSamplings = () => Task.where('#actor clicks on samplings option',
    Click.on(menu.Samplings)
);

export const ClickOnOptLogout = () => Task.where('#actor clicks on logout button',
    Click.on(menu.Logout)
);

export const ClickOnClientConfigurationSection = () => Task.where('#actor clicks on the client configuration section',
);

