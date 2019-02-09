Feature: user is able to navigate through the most important functions

  In order to focus on things that matter
  Abraham would like to navigate through the most important functions
  to validate it is working as expected

@SmokeTest
Scenario: Succesful login

Given that Abraham opens the login page
When he enters a valid credentials
Then he should enter to the Deodata application

@SmokeTest
Scenario: Succesful analysis creation

Given that Abraham opens the analysis creation form
When he enters all the analysis basic data
Then he should create a new analysis

@SmokeTest
Scenario: Succesful movement addition

Given that Abraham opens the movement creation form
When he enters all the movement data
Then he should create a new movement

@SmokeTest
Scenario: Succesful analysis processing

Given that Abraham has all the analysis information created
When he starts processing
Then he should see the analysis creation form
And he should see the analysis in progress