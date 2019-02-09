import { Task } from "serenity-js/lib/screenplay";
import { Click, Enter, Clear } from "serenity-js/lib/serenity-protractor";
import { clients } from "../../ui/clients/clients";

export const EditClientOption = (client: string) => Task.where('#actor clicks on edit client option',
    Click.on(clients.Edit_Client)
);

export const EnterPricePerHour = (price: number) => Task.where('#actor enters the price value',
    Enter.theValue(price).into(clients.Price_Per_Hour)
);

export const EnterOtherPricePerHour = (newPrice: number) => Task.where('#actor enters the price value',
    Clear.theValueOf(clients.Price_Per_Hour),
    Enter.theValue(newPrice).into(clients.Price_Per_Hour)
);

export const ClickOnSave = () => Task.where('#actor clicks on save edition',
    Click.on(clients.Save_Edition)
);

export const ClickOnCancel = () => Task.where('#actor clicks on cancel edition',
    Click.on(clients.Cancel_Edition)
);

export const ClickOnEditingConfirmation = () => Task.where('#actor click on editing confirmation button',
    Click.on(clients.Editing_Confirmation)
)

export const ConfigureClientPrice = (client: string, price: number) => Task.where('#actor configure the client price',
    EditClientOption(client),
    EnterPricePerHour(price),
    ClickOnSave(),
    ClickOnEditingConfirmation()
)