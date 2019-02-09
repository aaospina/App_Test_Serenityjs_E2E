import { by } from "protractor";
import { Target } from "serenity-js/lib/serenity-protractor";

export const menu = { 
    Analysis_Section: Target.the('"client configuration section"').located(by.xpath("//span[contains(text(),'Aforos')]")),
    Consult_Analysis: Target.the('"search analysis option"').located(by.css("a[href='#!/analyses/']")),
    Create_Analysis: Target.the('"create analysis option"').located(by.css("a[href='#!/analyses/create']")),
    Samplings: Target.the('"samplings option"').located(by.css("a[href='#!/analysis-samples/']")),
    Client_Configuration_Section: Target.the('"client configuration section"').located(by.xpath("//span[contains(text(),'Configuración de Clientes')]")),
    Clients: Target.the('"clients option"').located(by.css("a[href='#!/clients/']")),
    OptionUsers: Target.the('"bottom options user"').located(by.css("i[class='pe-7s-user']")),
    ChangePassword: Target.the('"change the password"').located(by.xpath("//li[1]/a[2]")),
    Logout: Target.the('"logout"').located(by.xpath("//li/ul/li[2]/a"))
}