u = [
{
week: 0,
date: "November 5th",
'This class period I began work on this website. That includes the text for the #about section, setting up the navigation bar and #typeset page. I later finished the updates page at home. I decided to make this site a one page design, using URL fragments for navigation. This uses JavaScript to pipe HTML to the content div, based on the current URL fragment. This allows for a more fluid and smooth experience, as well as less data being retrieved on navigation. Using fragments retains the use of back and forward buttons in Chrome, whereas using a variable to keep track of the current page does not (this is what I was using before). My goal is to finish the site design by then end of this month, so I'm already on the right track to do that. As of writing this, the docs section is still entirely incomplete and the typeset & updates sections need work. I also plan to buy a domain and host this site by then end of November. I will update this page every week, so that one can see my steps and how long they took. The final code and assets will be posted in #code."
},
{
week: 1,
date: "November 26th",
body: "This class and the week before (fall break) I worked largely on the website. You can see that here by clicking around. Besides formatting the website to work with mobile devices, most of my work was done on the #typeset page. I included the WebUSB library so now clicking 'disconnected' will prompt to connect. Once connected you can now use the print button and input box to send serial data the the Arduino device. Late this will be parsed by the sketch on the txtprint device and sent to the thermal printer. Other minor animations and bug fixes were also made. For a full list of every code change check the <a href='https://github.com/jeremyjacob/txtprint' target='_blank' >github</a>."
},
{
week: 2,
date: "December 3rd",
body: "My plan until the next checkpoint is to continue improving the website to be more responsive, and work better on mobile devices. This class period I added the ability to attach files as seen in this post. EDIT: this is broken so in the future I'll just direct link the media. I also made some slight design improvements in JS and CSS to make the website more clear and easier to use. An example can be seen by scrolling down on this page, and watching the navigation bar, a shadow should appear. This is to show that the bar is above the rest of the page, and to seperate it from the body of a blog post, which is the same color. A full log of my changes can be seen on the history tab of the Github. User experience is an important part of any website or product, which is why I'm trying to get that as good as I can for this project."
},
{
week: 3,
date: "December 10th",
body: "In class today I was not as productive as previous weeks, and no major features were added. It was a sort of catch up week for all the bugs and formatting errors the site had. I also researched better ways to accomplish some of the more complicated tasks of the webste on the <a href='https://developer.mozilla.org/en-US/' target='_blank' >MDN docs</a>. It's a great resource for everything HTML, CSS, and JavaScript."
},
{
week: 4,
date: "December 17th",
body: "This week I made some more final changes to the website, as well as adding an FAQ and code section that I will fill in later with additional info about the project and instructions for re-creating it. I spent way too much time trying to make an animated vector connection icon, but in the end it made the typeset page feel too clutered and it has been removed. The Github repo now has a 'sketch' folder where a priliminary Arduino sketch is located. Right now using that sketch one can use 16 colors to control an LED strip from the typeset page. I'll bring a board with this sketch flashed to demo in class. At this point in the project I am going to be transitioning to the hardware side of it, as the website is largely comepleted. This means ordering a thermal printer, making a 3D model for the housing, and writing code for the printer."
}, 
{
week: 5,
date: "January 7th",
body: "In class I added an important addition to the code page. I made preformatted CSS classes to easily write and updates the code section. They include a big title, subtitle, paragraph, and code formatting. This will allow me to update this section easily as I write the C code to run on the arduino."  
},
{
week: 6,
date": "January 14th",
body: "While I’m waiting for the printer piece to arrive, I have been updating the theme and visual assets on txtprint.us and researching how I will make the housing. Instead of simply 3D printing it as I originally planned, I’m thinking about using a service such as <a href='https://www.sculpteo.com/en/' target='_blank' >Sculpteo</a>. This will allow me to make the casing out of a material such as acrylic which is easier to work with, cheaper, and looks better."
},
{
week: 7,
date: "January 21st",
body: "This week I got the printer, and wrote some code to allow it to work with the website. It still has some kinks to work out, but it generally works. The code can, as usual, be found on this GitHub. It supports styles, as you can see here:<a href='https://lh3.googleusercontent.com/3F4JDZ2YJTMqw9EcWaodfi9IrE2GN5J-IpM6K_dUhoqdOH8x3eeGmlRQgPsU9BmloNevzjYD5ovmf-cbzopKZTUqnWca9XOcakzXkEXMRRKvi1fDY_IMwrjbQOmO6VY5mca_OZvUz2tGoSci2FDbqUKgCYM74f6wttTsCKTANl9tQeBOYSnl2-B4Eou0JxYL1UcIOt9nn2p_BWMbQTr2ER_8yloXuLPuFMq-limg377991m-896jXAUImC1AXybfTc4OL12MMOrAMUfsGvQHUHHlmeMzACH7fXhuZm_RBfwez2j_ydhIEASaRWv3KjriIzPfiOjEVYBVSXiqG14akCVFqUEWIr_IVSC9l1YwNt8XhY6AFkWatFZgVrMYSQ_FkIzHst2ymhysYfUCPlKRZ4w1sCT3Cn8-6Fg0nkxd_CrOAYvHH_JUxgLU9OFfExC6O-BlGK9LBvOSFytrKQKihFTdWZx8Mb3bMZUtOecoWIzSVfk3HwSxMdDDd6cMQRtFPY2rY1grjzXDW379bg3V1-w0VN9oWv2vaJGb2JWrFanfML7Ap3ccXdJ_Wzs92pP3ABLxVTJwImw00XGPinNETRA58KMXrVkQjZdEvhUZi-JOhWp7wfdA9tOKS2LR0eHmhpFwpGO1e_Ldv6g1m9D4s2ptJQ=w1195-h1592-no' target='_blank' >printer printing paper</a>. The formatting styles can be viewed with the 'formatting' button. The Arduino code goes through a series of if statements to determine whether to apply styles to the print or not."
},
{
week: 8,
date: "January 29st",
body: "There were numerous small changes to the website as usual, including now when you type anything it automatically opens the text box. I also layed out the plan and started building a more interactive about page, as I feel that needs to be a strong point of txtprint. I also had the idea to build the first version in a book, as I think it'd be nice symbolism and an eye catching design."
}
]
