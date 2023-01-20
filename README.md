Home Field Example - St. Louis JUG 1/19/2023
==
This repository contains the code written during the January 19, 2023 
meeting of the St. Louis JUG, as well as a PDF of the slides presented.
(Note, the slides will be minimally helpful, as there was more talking
through the slides than info presented on the slides.)

Note that some of the code has been scrubbed to remove Lambda ARNs 
specific to the original Alexa skill. As such, you will not be able 
to deploy and run this code as-is.

The recommended approach to running this code is to:

 1. [Install the ASK CLI](https://developer.amazon.com/en-US/docs/alexa/smapi/quick-start-alexa-skills-kit-command-line-interface.html)
 2. Create a new skill using `ask new`
 3. Copy the `lambda` folder from this repository over the same 
    folder in the new Alexa project.
 4. Copy the `skill-package/interactionModels/custom/en-US.json` 
    file from this repository over the same file in the new project.
 5. In the new project, commit the changes and push. This will trigger a CI
    build that will pick up the code and interaction model to build and
    deploy them.
 6. Using an actual Alexa device connected to your Amazon developer account,
    the developer console, or `ask dialog`, test the skill.
 7. From within the `lambda` directory, run `npm test` to run the 
    automated tests.

If you have any trouble, open an issue on this project and provide a detailed
description of what's going on. I'll try to help.

Be sure to pick up a copy of Build Talking Apps for Alexa for more details
on developing voice experiences for Alexa:
[Amazon](http://www.amazon.com/gp/product/1680507257/?tag=habumacom-20)
[PragProg](https://pragprog.com/titles/cwalexa/build-talking-apps-for-alexa/)

And if you enjoyed the presentation, be sure to give me a shout out on
Twitter (@habuma) and/or Mastodon (@habuma@fosstodon.org).
