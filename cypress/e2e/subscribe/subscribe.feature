Feature: Newsletter Subscribe Form

        As a user visit the website link
        He should be able to subsribe at the very first time by email
        And should not be able to subscribe with invalid email or resubsgibe again

    Scenario: User subscribes to the email list with a valid email
        Given User visits the website
        When User wrote his email "tom@aol.com" and click the subscribe button
        Then A success message should appear including the entered email "tom@aol.com"


    Scenario: User tries to subscribe with an invalid email address
        Given User visits the website
        When User subscribed by an invalid email "tom"
        Then The success message should not appear


    Scenario: User tries to resubscribe with an already subscribed email address
        Given User visits the website
        When User subscribed by an already subscribed email "john@example.com"
        Then The success message should not appear
        And An error message should appear showing that this email is already exists