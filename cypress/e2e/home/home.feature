Feature: Home page

        As a user who want to open the home page
        He should see correct text on the hero section
        And being able to navigate to the course page that he wants

    Scenario: Header of hero section should contains the correct text
        Given User visits the website
        Then The h1 contains the correct text

    Scenario: Features on the homepage should be correct
        Given User visits the website
        Then The features on the homepage are correct

    Scenario: Clicking on <courseId> from the courses section should navigate the user to the correct path
        Given User visits the website
        When User clicks on Get Started link for "<courseId>"
        Then User should be redirected to "<coursePath>"

        Examples:
            | courseId | coursePath                      |
            | course-0 | /testing-your-first-application |
            | course-1 | /testing-foundations            |
            | course-2 | /cypress-fundamentals           |

