export const MOCK_DATA = [
  {
    "intro": {
      "json": {
        "data": {},
        "content": [
          {
            "data": {},
            "content": [
              {
                "data": {},
                "marks": [],
                "value": "Welcome to the Tech Skills Assessment! ",
                "nodeType": "text"
              }
            ],
            "nodeType": "heading-1"
          },
          {
            "data": {},
            "content": [
              {
                "data": {},
                "marks": [],
                "value": "\nThis assessment is designed to evaluate your proficiency in various areas of software development. You'll be answering questions about programming languages, frameworks, version control, and development practices. The assessment consists of three pages, each containing three questions. Take your time to read each question carefully and provide honest answers. Your responses will help us understand your technical background and expertise. Good luck!",
                "nodeType": "text"
              }
            ],
            "nodeType": "paragraph"
          },
          {
            "data": {},
            "content": [
              {
                "data": {},
                "marks": [],
                "value": "",
                "nodeType": "text"
              }
            ],
            "nodeType": "paragraph"
          }
        ],
        "nodeType": "document"
      }
    },
    "resultsIntro": {
      "json": {
        "data": {},
        "content": [
          {
            "data": {},
            "content": [
              {
                "data": {},
                "marks": [],
                "value": "Thank you for completing the Tech Skills Assessment! \n\nYour responses have been recorded and will be analyzed to provide insights into your technical proficiency and experience. Based on your answers, we'll be able to understand your programming language preferences, familiarity with web frameworks, experience with version control and databases, involvement in remote work, and contributions to open-source projects. This information will help us tailor any future discussions or opportunities to your specific skills and interests. If you have any questions about the assessment or would like to provide additional information, please don't hesitate to reach out.",
                "nodeType": "text"
              }
            ],
            "nodeType": "paragraph"
          },
          {
            "data": {},
            "content": [
              {
                "data": {},
                "marks": [],
                "value": "",
                "nodeType": "text"
              }
            ],
            "nodeType": "paragraph"
          }
        ],
        "nodeType": "document"
      }
    },
    "name": "Tech Skills Assessment",
    "slug": "tech-skills-assessment",
    "questions": {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "radiogroup",
              "name": "preferredLanguage",
              "title": "What is your preferred programming language?",
              "choices": [
                "JavaScript",
                "Python",
                "Java",
                "C++",
                "Ruby"
              ]
            },
            {
              "type": "checkbox",
              "name": "familiarFrameworks",
              "title": "Which of the following web frameworks are you familiar with?",
              "choices": [
                "React",
                "Angular",
                "Vue.js",
                "Express.js",
                "Django",
                "Ruby on Rails"
              ]
            },
            {
              "type": "text",
              "name": "gitExperience",
              "title": "Briefly describe your experience with Git version control.",
              "isRequired": true
            }
          ]
        },
        {
          "name": "page2",
          "elements": [
            {
              "type": "boolean",
              "name": "remoteWorkExperience",
              "title": "Do you have experience working in a remote development team?",
              "labelTrue": "Yes",
              "labelFalse": "No"
            },
            {
              "type": "radiogroup",
              "name": "preferredOS",
              "title": "Which operating system do you prefer for development?",
              "choices": [
                "Windows",
                "macOS",
                "Linux (Ubuntu)",
                "Linux (Other distro)",
                "Chrome OS"
              ]
            },
            {
              "type": "text",
              "name": "databaseExperience",
              "title": "Briefly describe your experience with databases.",
              "isRequired": true
            }
          ]
        },
        {
          "name": "page3",
          "elements": [
            {
              "type": "checkbox",
              "name": "cloudPlatforms",
              "title": "Which cloud platforms have you worked with?",
              "choices": [
                "AWS",
                "Google Cloud",
                "Microsoft Azure",
                "DigitalOcean",
                "Heroku"
              ]
            },
            {
              "type": "boolean",
              "name": "contributeOpenSource",
              "title": "Have you contributed to any open-source projects?",
              "labelTrue": "Yes",
              "labelFalse": "No"
            },
            {
              "type": "text",
              "name": "recentTechLearning",
              "title": "What's the most recent technology or concept you've learned?",
              "isRequired": true
            }
          ]
        }
      ]
    }
  }
]
