/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         * -- DONE
         */
        it('url is defined and not empty', function(){
            //1. loop through the object and check if the url is defined or not empty
            //2. user expect and some isEmpty jasmine function ?
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         * -- DONE
         */
        it('name is defined and not empty', function(){
            //1. loop through the object and check if the url is defined or not empty
            //2. user expect and some isEmpty jasmine function ?
            for(let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            }
        });

    });


    /* TODO: Write a new test suite named "The menu" -- DONE */                
    describe('The menu', function() {        

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         *  -- DONE
         */
        it('menu is hidden by default', function(){
            let body = document.querySelector('body');

            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        it('show/hide on click', function(){
            let body = document.querySelector('body');
            let menu = document.querySelector('.menu-icon-link');
                      
            // function firstClick(){
            //     expect(body.classList.contains('menu-hidden')).toBe(false);
            // }

            // menu.addEventListener('click', firstClick);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);

            // function secondClick(){
            //     expect(body.classList.contains('menu-hidden')).toBe(true);
            // }

            // menu.addEventListener('click', secondClick);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
            
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" --DONE*/

        /* TODO: Write a test that ensures when the loadFeed --DONE
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        describe('Initial Entries', function(){

            let entry;
    
            beforeEach(function(done){
                loadFeed(0, function(){
                    entry = document.querySelector('.feed .entry');
                    done();
                });
            });
    
            it('there is an entry in .feed container', function(done){
                debugger;
                expect(entry.innerText).toBeDefined();
                done();
            });
        });

    
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        describe('New Feed Selection', function(){
            //Preserving the html contents of .feed container
            let feedContainer = document.querySelector('.feed');
            feedContainerHTML = feedContainer.innerHTML;

            beforeEach(function(done) {
                loadFeed(0, function() {
                    done();    
                });
            });
            it('content actually changes', function(done) {                
               // Comparing the html inside .feed container before and after the load
                expect(feedContainerHTML).not.toEqual(feedContainer.innerHTML)
                // console.log('before: ' + feedContainerHTML);
                // console.log('after: ' + feedContainer.innerHTML);
                done(); 
            });
        });

}());
