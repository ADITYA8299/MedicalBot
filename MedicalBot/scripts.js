document.addEventListener('DOMContentLoaded', (event) => {
    initializeChat();
    document.getElementById('contactForm').addEventListener('submit', handleContactFormSubmit);
});

let questions = [
    "What is your name?",
    "How old are you?",
    "What type of diabetes do you have (Type 1, Type 2, Gestational)?",
    "When were you diagnosed with diabetes?",
    "What medications are you currently taking?",
    "How often do you check your blood sugar levels?",
    "What was your last HbA1c level?",
    "Do you experience any symptoms such as frequent urination, excessive thirst, or fatigue?",
    "How often do you visit your doctor for diabetes management?",
    "Do you follow a specific diet plan? If yes, please describe."
];

let responses = {
    name: "",
    age: "",
    type: "",
    diagnosisDate: "",
    medications: "",
    checkFrequency: "",
    hbA1c: "",
    symptoms: "",
    doctorVisits: "",
    dietPlan: ""
};

let currentQuestionIndex = 0;

function initializeChat() {
    addBotMessage("Hello! Let's start with some questions.");
    addBotMessage(questions[currentQuestionIndex]);
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message !== "") {
        addUserMessage(message);
        userInput.value = "";
        processUserResponse(message);
    }
}

function addUserMessage(message) {
    const chatLog = document.getElementById('chat-log');
    const userMessageElement = document.createElement('div');
    userMessageElement.className = 'message user-message';
    userMessageElement.textContent = message;
    chatLog.appendChild(userMessageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function addBotMessage(message) {
    const chatLog = document.getElementById('chat-log');
    const botMessageElement = document.createElement('div');
    botMessageElement.className = 'message bot-message';
    botMessageElement.textContent = message;
    chatLog.appendChild(botMessageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function processUserResponse(message) {
    if (currentQuestionIndex === 0) {
        responses.name = message;
    } else if (currentQuestionIndex === 1) {
        responses.age = message;
    } else if (currentQuestionIndex === 2) {
        responses.type = message;
    } else if (currentQuestionIndex === 3) {
        responses.diagnosisDate = message;
    } else if (currentQuestionIndex === 4) {
        responses.medications = message;
    } else if (currentQuestionIndex === 5) {
        responses.checkFrequency = message;
    } else if (currentQuestionIndex === 6) {
        responses.hbA1c = message;
    } else if (currentQuestionIndex === 7) {
        responses.symptoms = message;
    } else if (currentQuestionIndex === 8) {
        responses.doctorVisits = message;
    } else if (currentQuestionIndex === 9) {
        responses.dietPlan = message;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        addBotMessage(questions[currentQuestionIndex]);
    } else {
        addBotMessage(`Thank you ${responses.name}! Here is a summary of the information you provided:
        \nAge: ${responses.age}
        \nType of Diabetes: ${responses.type}
        \nDiagnosis Date: ${responses.diagnosisDate}
        \nMedications: ${responses.medications}
        \nBlood Sugar Check Frequency: ${responses.checkFrequency}
        \nLast HbA1c Level: ${responses.hbA1c}
        \nSymptoms: ${responses.symptoms}
        \nDoctor Visits Frequency: ${responses.doctorVisits}
        \nDiet Plan: ${responses.dietPlan}
        \nPlease consult with your healthcare provider for further assistance.`);
    }
}

function handleContactFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}. We have received your message: "${message}". We will respond to ${email} shortly.`);
    document.getElementById('contactForm').reset();
}
