(function(){
    $(document).ready(function(){

        /*
         *  Quiz #2
         *
         *  Instructions:
         *     - debug the script below, so it executes cleanly with no errors in sections 1, 2, and 3
         *     - a clean result will show:
         *         This is section 1!
         *         This is section 2!
         *         This is section 3!
         * 
         */

        'use strict';

        //
        //  Set the HTML content of the three sections
        //
        try{
            $('section1').html('This is section 1!');

            function setSection2(){
                return
                    $('#section-2').html('This is section 2!');
            }

            var setSection3 = function(){
                element = $('#section-3');
                element.html('This is section 3!');
             }();
        }
        catch(ex){
           console.error(ex);
        }


        //
        //  Test to see if the code above passes
        //
        var hasExpectedContent = function(){
            var section1Html = $('#section-1').html(),
                section2Html = $('#section-2').html(),
                section3Html = $('#section-3').html();

            if (section1Html === 'This is section 1!' &&
                    section2Html === 'This is section 2!' &&
                    section3Html === 'This is section 3!'){
                return true;
            }
            return false;
        };

        if (hasExpectedContent()) {
            console.log("TEST PASSED");
            $('#results')
                .addClass('alert alert-success')
                .html('SUCCESS')
                .slideDown();
        } else {
            console.log("TEST FAILED");
            $('#results')
                .addClass('alert alert-danger')
                .html('FAIL')
                .slideDown();
        }

    });
})();
