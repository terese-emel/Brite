# Brite

## QA Engineer Challenge

Please create a git repository and send a link to it as part of your solution.
Your checklist is the following one:

1. Using Cypress as automation framework, implement the following automated tests:
- Go to IMDb.com, search for Nicolas Cage and access his profile; then unfold the
Upcoming tab in the Credits section, and click on the first movie with a Completed
tag. We want to make sure that this scenario is working on Chrome and Firefox.
- Go to IMDb.com, unfold the Menu and navigate to the Top Box Office section; then
click on the 2nd item on the Top box office list; then click on the IMDb Rating button,
click on the Rate button, and set a 5 stars Rating and click on the Rate button in the
modal.
- Go to IMDb.com, unfold the Menu button, and navigate to the Top 250 TV Shows
section; then click on Breaking Bad, go to the Photos, display only Danny Trejo's
photos, and then click on the 2nd photo in the list.
- Go to IMDb.com, unfold the Menu button and navigate to the Born today section;
delete default search, then unfold Birthday and search for Celebrities born yesterday.
Click on the 3rd name in the list and take a screenshot.
- Go to IMDb.com, unfold the Menu button and navigate to the Born today section;
delete default search, then unfold Birth date and search for Celebrities born the same
day as today but exactly 40 years ago, using the date picker for the “from” option and
the string field for the “to” option. Now on the 1st result in the list, click on the 1st link
you can find on the description (if any) and take a screenshot.
2. Using Cypress as automation framework, implement the following API automated
tests:

The API under scope is https://pokeapi.co/

- Make sure we can call https://pokeapi.co/api/v2/berry/{id or
name}/ using a valid id, and we get expected response
- Check error is appearing when calling with invalid id
- Make sure we can call https://pokeapi.co/api/v2/berry/{id or
name}/ using a valid name, and we get expected response
- Check error is appearing when calling with invalid name
- Make sure we can call
https://pokeapi.co/api/v2/berry-flavor/{id or name}/ using
a valid name, and we get the expected response.
- Then, pick up all the berries with “spicy” flavour, check the name of the
one with more “potency”, and call
https://pokeapi.co/api/v2/berry/{id or name}/ using
that info, making sure we get the expected responses.

3. Implement the following manual test:
- Given the following form:
<label for="tentacles">Number of tentacles (10-100):</label>
<input type="number" id="tentacles" name="tentacles"
min="10" max="100">
<button>Send</button>
Write all necessary test cases using Gherkin language to make sure the input field is
working as expected; valid values will lead to a "Success" message, and invalid to an "Error"
message.

4. Write the following bug report:
While performing the 2nd test on point 1 (Top Box Office test) you found each time you try to
rate a movie with 10 stars, the Rate button is not enabled, so you cannot submit the data.
Write a bug to report this issue.
