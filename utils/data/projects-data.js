import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'SIEM Technology',
        info:'Cloud project using MicrosoftAzure',
        description: "Used custom PowerShell script to extract metadata from Windows Event Viewer to be forwarded to third-party API in order to derive geolocation data. Configured Log Analytics Workspace in Azure to ingest custom logs containing geographic information latitude, longitude, state/province, and country) Configured Custom Fields in Log Analytics Workspace with the intent of mapping geo data in Azure Sentinel Configured Azure Sentinel (Microsoft's cloud SIEM) workbook to display global attack data (RDP brute force) on world map according to physical location and magnitude of attacks.",
        tools: [],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'OSINT integration',
        info:'Forensic Project',
        description: 'Created a website that that includes OSINT tools in one place. Got The API from the Diffrent websites and integrated with the website. The website is created by Using HTML ,JAVA ,CSS, and Typescript. Implemented user authentication and authorization to ensure secure access to OSINT tools on the website. Optimized the website for performance and responsiveness, ensuring a seamless user experience across different devices and browsers.',
        tools: ['HTML', 'CSS', "JAVA", "TypeScript"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Beyond Alexa/Google Assistent',
        info: 'Voice Command Control',
        description: 'Personalised & AI based Voice commanded control system that actslike keyboard and mouse.That has more fetures then alexa and Google assistent on controlingthe system .The code is completly written in pythonUsed python libreries likespeech_recognition,spacy,pyautogui,cv2,pytesseract,ImageGrab,numpy,time,webbrowser,pyttsx3,os to create a project.',
        tools: [],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Phishing Link Detection',
        info: 'Analyse and report the malicious links',
        description: "An extension that detects Every liink the is entered into the websiteand analyse it .If it is a malicious link then the extention has a feture that blocks itsdomain and send s report to the Domain providers.The extention is a AI trained module",
        tools: [],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'Cyber Kalike',
        info:'A platform for local peaples',
        description: "This project is a personal startup. The local peaples are unaware of so many cyber scams, so in order toeducate them we are gonna provide a courses and internship projects in local language. As the students increse there intrest in cybersecurity they will persuetheir future",
        tools: [],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },