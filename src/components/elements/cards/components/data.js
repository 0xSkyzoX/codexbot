import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShare, faCode,faStar, faCodeBranch, faPeopleCarry, faMoon, faPlusCircle, faFire, faPenSquare, faQuestionCircle} from "@fortawesome/fontawesome-free-solid"
import { faTeamspeak } from '@fortawesome/free-brands-svg-icons'

const data = [
     {
          icon: faCode,
          title: "Coding Team",
          desc: "• Enjoy and code with your team!",
          items: ["Coding Activity", "Code Night", "Start Own Team", "Coding Challenge"],
          footTitle: "Special Code",
          icons: [faStar, faMoon, faPlusCircle, faFire],
          id: "first"
     },
     {
          icon: faCodeBranch,
          title: "Project Code",
          desc: "• Start and Manage your Project!",
          items: ["Share Project", "Add Teamwork", "Manage Easily", "Get Support"],
          footTitle: "CodeX Bot",
          icons: [faShare, faPlusCircle, faPenSquare, faQuestionCircle],
          id: "two"
     }
]
export default data