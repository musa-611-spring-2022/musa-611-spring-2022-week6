# MUSA 611, Week 6

## Review

You can review the concepts raised from last class in [review.md](review.md).

## Agenda

* Review
  * Accessing DOM elements
  * CSS selectors
* A possible implementation of School Explorer
  * Selecting elements on the page
  * Setting breakpoints
    1.  Form a mental model of what should be happening
    2.  Make a hypothesis about where the first breakpoint should be set
* GeoJSON
* Fetching geospatial data, and using APIs
  * Mapbox -- Routing, Geocoding, Isochromes

## Exercises

When completing this week's exercises, ensure that you have a local webserver
running or the `fetch` statements will not work!

### Submitting your code

When you submit your pull request, your code will be linted and tested automatically. If all of the tests pass you will see green check marks on the pull request. If any of the tests fail, you should see red X's. You can see what tests fail by clicking on the failed tasks and reading the logs. Edit your copy of the code until all the tests show green checks (_you do not have to re-submit a new PR to get the tests to re-run; as soon as you change your code on GitHub the tests will run_).

> **NOTE:** You can **run the tests on your computer** before submitting a pull request, or even before committing your code. You will have to install [Node.js](https://nodejs.org/en/) version 16 or later first. After you do, you can run the following in your terminal, working from the week folder:
> ```bash
> # Install test dependencies (this only has to be done once)
> npm install
>
> # Run the linter
> npx eslint exercise
>
> # Run the web server; this is needed for the tests
> npx http-server --port 8000
>
> # Open a new terminal and run the tests
> npx jest
> ```
