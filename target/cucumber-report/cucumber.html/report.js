$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("visaconfirmation.feature");
formatter.feature({
  "line": 2,
  "name": ": Home office visa check",
  "description": "As user I want to test Home office visa check functionality",
  "id": ":-home-office-visa-check",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4529755200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify that an australian coming to uK for tourism.",
  "description": "",
  "id": ":-home-office-visa-check;verify-that-an-australian-coming-to-uk-for-tourism.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am in homepage of homeoffice website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Click on start button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Select a Nationality \"Australia\" australia",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Click on Continue button for australia",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select reason \u0027Tourism\u0027 tourism",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Click on Continue button for toursim",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify result \u0027You will not need a visa to come to the UK\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationSteps.iAmInHomepageOfHomeofficeWebsite()"
});
formatter.result({
  "duration": 78015400,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnStartButton()"
});
formatter.result({
  "duration": 293639800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 24
    }
  ],
  "location": "VisaConfirmationSteps.iSelectANationalityAustralia(String)"
});
formatter.result({
  "duration": 131659200,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButtonForAustralia()"
});
formatter.result({
  "duration": 327879800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iSelectReasonTourismTourism()"
});
formatter.result({
  "duration": 85262100,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButtonForToursim()"
});
formatter.result({
  "duration": 391257100,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iVerifyResultYouWillNotNeedAVisaToComeToTheUK()"
});
formatter.result({
  "duration": 100333000,
  "status": "passed"
});
formatter.after({
  "duration": 737342600,
  "status": "passed"
});
formatter.before({
  "duration": 2184039800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify that a chilean Coming To The UK For Work And Plans On Staying For Longer Than Six Months",
  "description": "",
  "id": ":-home-office-visa-check;verify-that-a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-six-months",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am in homepage of homeoffice website",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I Click on start button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I select a nationality chile \"Chile\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Continue button for Chile",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select reason wavb \u0027Work, academic visit or business\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Continue button for Work, academic visit or business",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select  intendent to stay for \u0027longer than six months\u0027 six month",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Continue button for longer than 6 months",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select have planning to work for \u0027Health and care professional\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Continue button for Health and care professional",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify result \u0027You need a visa to work in health and care\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationSteps.iAmInHomepageOfHomeofficeWebsite()"
});
formatter.result({
  "duration": 43900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnStartButton()"
});
formatter.result({
  "duration": 263742600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chile",
      "offset": 30
    }
  ],
  "location": "VisaConfirmationSteps.iSelectANationalityChile(String)"
});
formatter.result({
  "duration": 126708800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButtonForChile()"
});
formatter.result({
  "duration": 325135800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iSelectReasonWavbWorkAcademicVisitOrBusiness()"
});
formatter.result({
  "duration": 80687200,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButtonForWorkAcademicVisitOrBusiness()"
});
formatter.result({
  "duration": 340888300,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iSelectIntendentToStayForLongerThanSixMonthsSixMonth()"
});
formatter.result({
  "duration": 102753200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 43
    }
  ],
  "location": "VisaConfirmationSteps.iClickOnContinueButtonForLongerThanMonths()"
});
formatter.result({
  "duration": 637400,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027gov.uk.check.visa.steps.VisaConfirmationSteps.iClickOnContinueButtonForLongerThanMonths() in file:/C:/Users/nakra/IdeaProjects/week-15-cucumber/homework_week_15_extra_project_2/target/test-classes/\u0027 with pattern [^I click on Continue button for longer than (\\d+) months$] is declared with 0 parameters. However, the gherkin step has 1 arguments [6]. \nStep: And I click on Continue button for longer than 6 months\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iSelectHavePlanningToWorkForHealthAndCareProfessional()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButtonForHealthAndCareProfessional()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VisaConfirmationSteps.iVerifyResultYouNeedAVisaToWorkInHealthAndCare()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 954613000,
  "status": "passed"
});
formatter.before({
  "duration": 2465436600,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify a columbian national coming to the uk to join a partner for a long stay they do have an article 10Or20 Card",
  "description": "",
  "id": ":-home-office-visa-check;verify-a-columbian-national-coming-to-the-uk-to-join-a-partner-for-a-long-stay-they-do-have-an-article-10or20-card",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am in homepage of homeoffice website",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I Click on start button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I Select a Nationality colombia \"Colombia\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Click on Continue button for Colombia",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Select reason jpf\u0027Join partner or family for a long stay\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Click on Continue button for Join partner or family for a long stay",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Select state My partner of family member have uk immigration status \"yes\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Click on Continue button for immigration status",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify result \u0027You\u0027ll need a visa to join your family or partner in the Uk\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationSteps.iAmInHomepageOfHomeofficeWebsite()"
});
formatter.result({
  "duration": 24500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnStartButton()"
});
formatter.result({
  "duration": 686263600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Colombia",
      "offset": 33
    }
  ],
  "location": "VisaConfirmationSteps.iSelectANationalityColombia(String)"
});
formatter.result({
  "duration": 116931500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButtonForColombia()"
});
formatter.result({
  "duration": 598589600,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iSelectReasonJpfJoinPartnerOrFamilyForALongStay()"
});
formatter.result({
  "duration": 159791300,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButtonForJoinPartnerOrFamilyForALongStay()"
});
formatter.result({
  "duration": 367618000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yes",
      "offset": 71
    }
  ],
  "location": "VisaConfirmationSteps.iSelectStateMyPartnerOfFamilyMemberHaveUkImmigrationStatus(String)"
});
formatter.result({
  "duration": 5778600,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButtonForImmigrationStatus()"
});
formatter.result({
  "duration": 327105900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iVerifyResultYouLlNeedAVisaToJoinYourFamilyOrPartnerInTheUk()"
});
formatter.result({
  "duration": 40106026800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027result-info\u0027]//div[2]/h2\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-09BGILIP\u0027, ip: \u0027192.168.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4b09252614d2ca27d26805080dc286de, findElement {using\u003dxpath, value\u003d//div[@id\u003d\u0027result-info\u0027]//div[2]/h2}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\nakra\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57441}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:57441/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4b09252614d2ca27d26805080dc286de\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat gov.uk.check.visa.utility.Utility.getTextFromElement(Utility.java:73)\r\n\tat gov.uk.check.visa.pages.ResultPage.getResultMessage(ResultPage.java:22)\r\n\tat gov.uk.check.visa.pages.ResultPage.confirmResultMessage(ResultPage.java:26)\r\n\tat gov.uk.check.visa.steps.VisaConfirmationSteps.iVerifyResultYouLlNeedAVisaToJoinYourFamilyOrPartnerInTheUk(VisaConfirmationSteps.java:123)\r\n\tat ✽.Then I verify result \u0027You\u0027ll need a visa to join your family or partner in the Uk\u0027(visaconfirmation.feature:36)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 924613000,
  "status": "passed"
});
});