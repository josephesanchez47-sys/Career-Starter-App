// 1. The Full Question Bank (All 42 from your sheet)
const riasecQuestions = [
    { text: "I like to work on cars", cat: "R" },
    { text: "I like to do puzzles", cat: "I" },
    { text: "I am good at working independently", cat: "A" },
    { text: "I like to work in teams", cat: "S" },
    { text: "I am an ambitious person, I set goals for myself", cat: "E" },
    { text: "I like to organize things (files, desks/offices)", cat: "C" },
    { text: "I like to build things", cat: "R" },
    { text: "I like to read about art and music", cat: "A" },
    { text: "I like to have clear instructions to follow", cat: "C" },
    { text: "I like to try to influence or persuade people", cat: "E" },
    { text: "I like to do experiments", cat: "I" },
    { text: "I like to teach or train people", cat: "S" },
    { text: "I like to help people solve their problems", cat: "S" },
    { text: "I like to take charge, politics or lead a group", cat: "E" },
    { text: "I like to work with numbers or charts", cat: "C" },
    { text: "I like to learn about culture/history", cat: "A" },
    { text: "I like to learn about how things work", cat: "I" },
    { text: "I like to build things with my hands", cat: "R" },
    { text: "I like to use my imagination to write/draw", cat: "A" },
    { text: "I like to analyze data", cat: "I" },
    { text: "I like to work with plants and animals", cat: "R" },
    { text: "I like to help people feel better", cat: "S" },
    { text: "I like to sell things", cat: "E" },
    { text: "I like to follow a routine", cat: "C" },
    { text: "I like to operate machinery/tools", cat: "R" },
    { text: "I like to investigate mysteries", cat: "I" },
    { text: "I like to perform for others", cat: "A" },
    { text: "I like to volunteer for charities", cat: "S" },
    { text: "I like to start my own business", cat: "E" },
    { text: "I like to keep track of details", cat: "C" },
    { text: "I like to work outdoors", cat: "R" },
    { text: "I like to solve math problems", cat: "I" },
    { text: "I like to design new things", cat: "A" },
    { text: "I like to listen to people's stories", cat: "S" },
    { text: "I like to give speeches", cat: "E" },
    { text: "I like to use a computer for data entry", cat: "C" },
    { text: "I like to fix things around the house", cat: "R" },
    { text: "I like to research new topics", cat: "I" },
    { text: "I like to play a musical instrument", cat: "A" },
    { text: "I like to lead a group project", cat: "E" },
    { text: "I like to work with social issues", cat: "S" },
    { text: "I like to file paperwork neatly", cat: "C" }
];

// 2. The Resource Library (Videos and Games)
const resources = {
    R: { title: "Realistic (The Doers)", video: "https://youtube.com", game: "https://steampowered.com" },
    I: { title: "Investigative (The Thinkers)", video: "https://youtube.com", game: "https://google.com" },
    A: { title: "Artistic (The Creators)", video: "https://youtube.com", game: "https://skribbl.io" },
    S: { title: "Social (The Helpers)", video: "https://youtube.com", game: "https://coolmathgames.com" },
    E: { title: "Enterprising (The Persuaders)", video: "https://youtube.com", game: "https://AdVentureCapitalist.com" },
    C: { title: "Conventional (The Organizers)", video: "https://youtube.com", game: "https://apple.com" }
};

let currentQuestion = 0;
let scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

function startQuiz() {
    document.getElementById('content').innerHTML = `
        <div id="question-box"></div>
        <div id="progress"></div>
    `;
    showQuestion();
}

function showQuestion() {
    const q = riasecQuestions[currentQuestion];
    document.getElementById('question-box').innerHTML = `
        <p style="font-size: 1.2rem; margin-bottom: 20px;">${q.text}</p>
        <button onclick="answer(true)">YES</button>
        <button onclick="answer(false)" style="background: #6c757d">NO</button>
    `;
    document.getElementById('progress').innerText = `Question ${currentQuestion + 1} of ${riasecQuestions.length}`;
}

function answer(isYes) {
    if (isYes) {
        const category = riasecQuestions[currentQuestion].cat;
        scores[category]++;
    }
    currentQuestion++;
    if (currentQuestion < riasecQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    // Determine the top category
    const winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const data = resources[winner];

    document.getElementById('content').innerHTML = `
        <h2>Result: ${data.title}</h2>
        <p>Your interests show you are a perfect fit for this category!</p>
        <hr>
        <h3>Career Resource:</h3>
        <iframe width="100%" height="250" src="${data.video}" frameborder="0" allowfullscreen></iframe>
        <p><a href="${data.game}" target="_blank">Try a Career Simulator Game &rarr;</a></p>
        <button onclick="location.reload()">Start Over</button>
    `;
}
