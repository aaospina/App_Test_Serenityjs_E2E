import { Navigate } from "../../screenplay/tasks/navigate/navigate";
import { EnterCredentials } from "../../screenplay/tasks/login/enter_credentials";
import { LoginWasSuccessful } from "../../screenplay/questions/login_was";
import { ClickOnOptCreate, ClickOnOptSearch } from "../../screenplay/tasks/menu/click_on_option";
import { AnalysisData } from "../../screenplay/tasks/analysis/analysis_data";
import { AnalysisCreationWas } from "../../screenplay/questions/analysis_creation_was";
import { AddMovementButton, NewMovement } from "../../screenplay/tasks/movements/new_movement";
import { MovementCreationWas } from "../../screenplay/questions/movement_creation_was";
import { CLickOnProcessAnalysis } from "../../screenplay/tasks/movements/process_analysis";
import { AnalysisCreationForm } from "../../screenplay/questions/analysis_creation_form";
import { UseAngular } from "serenity-js/lib/serenity-protractor";
import { ProcessingStarts } from "../../screenplay/questions/processing_start";
const config = require("config");

export = function smoketestSteps(){

    var analysisName

    this.Given(/^that Abraham opens the login page$/, function () {
        return this.stage.theActorCalled('Abraham').attemptsTo(
            Navigate.toDeodata()
        )
    });

    this.When(/^he enters a valid credentials$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            EnterCredentials(config.get('user.client.userName'), config.get('user.client.password'))
        )
    });

    this.Then(/^he should enter to the Deodata application$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            LoginWasSuccessful()
        )
    });

    this.Given(/^that Abraham opens the analysis creation form$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            ClickOnOptCreate()
        )
    });

    var normalize = (date: number) => {
        if (date < 9) {
            var norm = '0'+date  
        } else {
            norm = date.toString()
        }
        return norm
    } 

    this.When(/^he enters all the analysis basic data$/, function () {
        var today = new Date();
        var date = normalize(today.getFullYear()) + normalize(today.getMonth()+1) + normalize(today.getDate());
        var time = normalize(today.getHours()) + normalize(today.getMinutes()) + normalize(today.getSeconds())
        var dateTime = date+time;
        analysisName = 'Aforo_'+dateTime
        return this.stage.theActorInTheSpotlight().attemptsTo(
            AnalysisData(analysisName, 'Estacion_1')
        )
    });

    this.Then(/^he should create a new analysis$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            AnalysisCreationWas()
        )
    });

    this.Given(/^that Abraham opens the movement creation form$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            AddMovementButton()
        )
        
    });

    this.When(/^he enters all the movement data$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            NewMovement('uno',90,227,110,300,143,213,160,250)
        )
    });

    this.Then(/^he should create a new movement$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            MovementCreationWas('uno')
        )
    });

    this.Given(/^that Abraham has all the analysis information created$/, function () {
        
    });

    this.When(/^he starts processing$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            CLickOnProcessAnalysis()
        )
    });

    this.Then(/^he should see the analysis creation form$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            AnalysisCreationForm(),
        )
    });

    this.Then(/^he should see the analysis in progress$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            ClickOnOptSearch(),
            UseAngular.disableSynchronisation(),
            ProcessingStarts(analysisName)
            
        )
    });


}