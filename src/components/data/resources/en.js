import {faShare, faCode,faStar, faCodeBranch, faMoon, faPlusCircle, faFire, faPenSquare, faQuestionCircle} from "@fortawesome/fontawesome-free-solid"
import commands from "./commands-en.json"

const en = {
     indexPage: {
          indexTitle: ["Let's start a", "Coding server", "With CodeX bot"],
          indexDescription: "Make your coding experience with your own Community server, Code Debuging, Posting, Share Projects...",
          indexGetstarted: "Get Started",
          indexTitleFeatures: "See our Special Features",
          indexDescriptionMobile: ["Make your coding experience with your own Community"," server, Code Debuging, Posting, Share Projects..."],
          indexItemTitleFeatures: [
               "Special Code Support",
               "Coding Community",
               "CodeX Discord Bot"
          ],
          indexItemDescriptionFeatures: [
               "CodeX by Special Code, se we support all special code features, like posting code, and projects, ext... and you can link your special code account and customize your code content... learn more about special code!",
               "CodeX Support Server, This is a Discord server helps you to communicate and talking about programming, design, ai... anything about Technology! and you can share your project there and make your experience with coding bot features!",
               "Easy to use! CodeX is linked with discord bot that's mean you can customize and use this bot whatever you want in you own server, and the best you can share your projects and posts will be shown in this website!"
          ]
     },
     navbar: {
          title: "CodeX",
          items: [
               "Commands",
               "Support Server",
               "Features",
               "Home"
          ],
          button: "Login"
     },
     footer: {
          title: "CodeX",
          footerElementsTitles: [
               "Explore Features",
               "CodeX Bot",
               "Overview",
               "About CodeX",
               "Community",
               "Special Code"
          ],
          footerElement1: [
               "Code Projects",
               "Customize server",
               "our Discord Server",
               "Coding is Special"
          ],
          footerElement2: [
               "Start your Project",
               "Share your Code",
               "Explore More Projects",
               "Start Team Work"
          ],
          footerElement3: [
               "About",
               "Contact",
               "Learn CodeX",
               "Terms of Use",
               "Privicy Policy"
          ],
          footerElement4: [
               "What's CodeX bot?",
               "Learn About Coding Team...",
               "How to start a Project?",
               "Discord Server, Community..."
          ],
          footerElement5: [
               "TeamX Community",
               "Work Together",
               "Share your Code",
               "Add Project Friends",
               "General Discord Chat",
               "Open Your own team"
          ],
          footerElement6: [
               "About Special Code",
               "Discord Server",
               "Official Website",
               "How to start your Business?",
               "How to share Projects?",
               "Future of Programming",
               "Special Code Projects",
               "Learn More Features"
          ]
     },
     featuresPage: {
          title: ["Start your Coding", " Experience with", "our Features"],
          description: ["Best try with our features, learn, enjoy and code while you", " using our features will be the best, Try our features here!"],
          data:[{
               "name": "Coding Team",
               "describe": "• Enjoy and code with your team!",
               "items": ["Coding Activity", "Code Night", "Start own Team", "Coding Challenge"],
               "sponsor": "Special Code",
               "icons": [faStar, faMoon, faPlusCircle, faFire],
               "id": "first",
               "icon": faCode
          },{
               "name": "Project Code",
               "describe": "• Start and Manage your Project",
               "items": ["Share Project", "Add Teamwork", "Manage Easily", "Get Support"],
               "sponsor": "CodeX",
               "id": "two",
               "icons": [faShare, faPlusCircle, faPenSquare, faQuestionCircle],
               "icon": faCodeBranch
          }

          ]
          
     },
     commandsPage: commands
}
export default en