export const testArticle = `
React testing library is one of, if not, the most popular testing libraries there is for React. With over 7 million weekly downloads, and the quick, easy setup and usage, it's no wonder it's popularity has boomed. With this boom comes the question, "Can we automate accessibility tests with it?". The answer is yes, and let's find out how!

## Accessibility Automation Setup

When setting up component test cases for accessibility there are essentially two main ways to do it. Using Jest, the most commonly used testing framework with React, we can dive a bit more into them.

The first way to structure it is by including it as part of the entire components test cases (or single 'describe'). This would be grouping the tests all together so that accessibility is just a part of the normal test cases for UI

\`\`\`javascript
describe('Footer Component', () => {

  test("Functionality - Component has loaded", () => {});

  test("Functionality - List number", () => {});

  test("Accessibility check",async () => {});

});
\`\`\`

The second way is to treat the accessibility tests as a separate set of tests. This would mean making accessibility as its own "describe" group and putting all the automated tests and regression tests for accessibility underneath it.

\`\`\`javascript
describe('Functional - Footer Component', () => {

  test("Functionality - Component has loaded", () => {});

  test("Functionality - List number", () => {});

});

describe('Accessibility - Footer Component', () => {

  test("Axe scan",async () => {});

  test("Expand/collapse ARIA", () => {});

});
\`\`\`

## Accessibility Testing with Axe

The quick and most effective way to bring accessibility testing into your React tests using RTL is to use the open source library axe-core.

Axe-core checks for around 1/3 of accessibility issues, and widely used within the industry. Setup is quick and relatively painless to get going.

First download the latest axe-core integration

\`\`\`shell
npm i axe-core@latest
\`\`\`

Next in your project bring in the axe-core library

\`\`\`javascript
import * as axe from 'axe-core';
\`\`\`

Now in your test spec, a test and call it "Accessibility check" like so:

\`\`\`javascript
test("Accessibility check",async () => {});
\`\`\`

Once the test case is made, lets make use of React Testing Libraries functionality. Since Axe-core requires HTML content to scan against we MUST give it pure HTML. We can do this is RTL by using the \`render()\` function and the \`{container}\` object.

\`\`\`javascript
const {container} = render(<Footer />);
\`\`\`

Finally, we create a results object that runs axe-core against the container, and we create an assertion that takes the results object and looks to see if there are any issues in the violations array.

\`\`\`javascript
test("Accessibility check", async () => {
    const {container} = render(<Footer/>);
    const results = await axe.run(container)
    expect(results.violations.length).toBe(0);
});
\`\`\`

Now we have a quick axe scan of our component up and running!

**Note**: React Testing Library will not render full on CSS, so color contrast will not be tested with the library.

## Accessibility Regression Tests

On top of using axe-core we can go beyond just checking generically and write specific regression tests that ensure the accessible functionality of the component or page we created.

An example of this would be the pressed state of a toggle button being properly set. Let's say I have a button that toggles its state, and it uses aria-pressed attribute. We could write a regression test to check that functionality and ensure it is being properly set in the component.

There many other types of regression that that can be done to ensure accessible functionality. For more information on this please view
[Automated Accessibility part 3: Regression Tests](https://dev.to/steady5063/react-testing-library-accessibility-4fom#:~:text=There%20many%20other%20types%20of%20regression%20that%20that%20can%20be%20done%20to%20ensure%20accessible%20functionality.%20For%20more%20information%20on%20this%20please%20view%20Automated%20Accessibility%20part%203%3A%20Regression%20Tests)

## Conclusion

React Testing Library is wonderful for creating simple and effective automated tests for your React components. Ensuring accessibility is a part of those tests only helps to:

* Enforce accessible coding practices
* Help build the importance of a11y on your dev team
* Build a culture of accessibility learning
* Shape definition of done for a11y

The only question now is, when will you start adding accessibility test cases?!
`
