@debug
Feature: test3
  Scenario: Test1
    Given configure driver = {type: "chrome"}
    # Given configure driver = {type: "geckodriver", executable: "/Users/ricardo.vasquez/Documents/geckodriver"}
    # Given configure driver = {type: "safaridriver"}
    Given driver urlTest
    # * maximize()
    Then delay(8000)