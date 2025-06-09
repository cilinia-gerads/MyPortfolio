import campcrag from './campcrag.png'
import ToDoList from './ToDoList.png'
import calculator from './calculator.png'
import Pomodoro from './Pomodoro.png'
import DrumMachine from './Drum Machine.png'
import RandomQuoteMachine from './Random Quote Machine.png'

const all_project = [
    {
        no: 1,
        name: "CampCrag",
        description: "This is an E-commerce project I built for learning and practicing front-end development.",
        img: campcrag,
        saucecode: "https://github.com/cilinia-gerads/CampCrag.git",
        livedemo: "https://campcrag.netlify.app/",
        language: [ "React", "DaisyUI", "Tailwind", "React Lucide", "React Slick", "React-toastity"]
    },
    // {
    //     no: 2,
    //     name: "ToDo List",
    //     description: "a to-do list, I built to practice my JavaScript skills. Uses localStorage to save data, so your tasks won't disappear when you refresh the page.",
    //     img: ToDoList,
    //     saucecode: "https://github.com/cilinia-gerads/ToDo-List",
    //     livedemo: "https://todolistjavascriptbasic.netlify.app/",
    //     language: [ "HTML", "CSS", "JavaScript" ]
    // },
    {
        no: 3,
        name: "JavaScript Calculator",
        description: "A basic calculator project from FreeCodeCamp, built with JavaScript using OOP. Supports chained operations, decimals and basic arithmetic",
        img: calculator,
        saucecode: "https://github.com/cilinia-gerads/FCC-JavaScript-Calculator?tab=readme-ov-file",
        livedemo: "https://freecodecampjavascriptcalculator.netlify.app/",
        language: [ "HTML", "CSS", "JavaScript"]
    },
    {
        no: 4,
        name: "Pomodoro Clock",
        description: "Pomodoro Clock project from FreeCodeCamp. Built with React. Supports custom session/break lengths, start, pause, and reset.",
        img: Pomodoro,
        saucecode: "https://github.com/cilinia-gerads/FCC-twentyfive-plus-five-clock?tab=readme-ov-file",
        livedemo: "https://freecodecampatwentyfiveplusfiveclock.netlify.app/",
        language: [ "HTML", "CSS", "JavaScript", "React" ]
    },
    {
        no: 5,
        name: "Drum Machine",
        description: "Drum Machine project from FreeCodeCamp. Built with React. Users can play drum sounds by clicking buttons or using keyboard keys.",
        img: DrumMachine,
        saucecode: "https://github.com/cilinia-gerads/FCC-Drum-Machine",
        livedemo: "https://freecodecampdrummachine.netlify.app/",
        language: [ "HTML", "CSS", "JavaScript", "React" ]
    },
    {
        no: 6,
        name: "Random Quote Machine",
        description: "Random Quote Machine project from FreeCodeCamp. Built with React. Displays a random quote with author and allows sharing on Twitter.",
        img: RandomQuoteMachine,
        saucecode: "https://github.com/cilinia-gerads/FCC-RandomQuote-Machine",
        livedemo: "https://freecodecamprandomquotemachineproject.netlify.app/",
        language: [ "HTML", "CSS", "JavaScript", "React" ]
    }
]

export default all_project
