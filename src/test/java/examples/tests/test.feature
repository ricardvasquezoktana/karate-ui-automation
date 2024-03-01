@debug
Feature: test3

Background:
  * configure driver = {type: "chrome"}
  Scenario: Test1
    # Given configure driver = {type: "chrome"}
    # Given configure driver = {type: "geckodriver", executable: "/Users/ricardo.vasquez/Documents/geckodriver"}
    # Given configure driver = {type: "safaridriver"}
    Given driver urlTest
    * maximize()
    Then delay(3000)
    # Then input("#APjFqb", "Karate github")
    # Then input("//textarea[@title='Buscar']", "Karate Github")
    Then input("textarea[title=Buscar]", "Karate Github")
    Then input("#APjFqb", Key.ENTER)
    Then delay(3000)