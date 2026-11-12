// AI CLUE MASTER - GAME DATABASE

const questions = [
    {difficulty:"easy",category:"Technology",clue:"I have keys but no locks. You use me to type.",options:["Keyboard","Mouse","Monitor","Printer"],answer:"Keyboard",fact:"A keyboard is an input device."},
    {difficulty:"easy",category:"Technology",clue:"I have a screen and help you browse the internet.",options:["Monitor","Speaker","Scanner","Microphone"],answer:"Monitor",fact:"A monitor is an output device."},
    {difficulty:"easy",category:"Nature",clue:"I shine during the day and give us light.",options:["Moon","Sun","Star","Cloud"],answer:"Sun",fact:"The Sun is a star."},
    {difficulty:"easy",category:"Nature",clue:"I have four legs and bark.",options:["Cat","Cow","Dog","Horse"],answer:"Dog",fact:"Dogs have an excellent sense of smell."},
    {difficulty:"easy",category:"Food",clue:"I am yellow and monkeys love me.",options:["Apple","Banana","Grapes","Orange"],answer:"Banana",fact:"Bananas are rich in potassium."},
    {difficulty:"easy",category:"Technology",clue:"I help you make calls and send messages.",options:["Television","Smartphone","Radio","Printer"],answer:"Smartphone",fact:"Smartphones combine many computer functions."},
    {difficulty:"easy",category:"Nature",clue:"I fall from clouds and make the ground wet.",options:["Snow","Rain","Dust","Wind"],answer:"Rain",fact:"Rain is part of the water cycle."},
    {difficulty:"easy",category:"Animals",clue:"I am called the king of the jungle.",options:["Tiger","Elephant","Lion","Deer"],answer:"Lion",fact:"A lion is a member of the cat family."},
    {difficulty:"easy",category:"Food",clue:"I am white and come from cows.",options:["Juice","Milk","Tea","Coffee"],answer:"Milk",fact:"Milk contains calcium."},
    {difficulty:"easy",category:"Nature",clue:"I have petals and usually smell beautiful.",options:["Stone","Flower","Leaf","Root"],answer:"Flower",fact:"Flowers help plants reproduce."},

    {difficulty:"easy",category:"Technology",clue:"I move a pointer on your computer screen.",options:["Mouse","Keyboard","CPU","Speaker"],answer:"Mouse",fact:"A computer mouse is a pointing device."},
    {difficulty:"easy",category:"Animals",clue:"I have a long neck and eat leaves from tall trees.",options:["Zebra","Giraffe","Camel","Deer"],answer:"Giraffe",fact:"Giraffes are the tallest land animals."},
    {difficulty:"easy",category:"Space",clue:"I am Earth's natural satellite.",options:["Mars","Moon","Sun","Venus"],answer:"Moon",fact:"The Moon takes about 27.3 days to orbit Earth."},
    {difficulty:"easy",category:"Food",clue:"I am a round fruit and can be red or green.",options:["Apple","Mango","Banana","Papaya"],answer:"Apple",fact:"Apples contain dietary fibre."},
    {difficulty:"easy",category:"Animals",clue:"I live in water and breathe through gills.",options:["Dog","Fish","Cat","Rabbit"],answer:"Fish",fact:"Fish use gills to extract oxygen from water."},

    {difficulty:"medium",category:"Technology",clue:"I am known as the brain of a computer.",options:["RAM","CPU","Keyboard","Hard Disk"],answer:"CPU",fact:"CPU stands for Central Processing Unit."},
    {difficulty:"medium",category:"Technology",clue:"I store data temporarily while programs are running.",options:["ROM","RAM","DVD","Hard Disk"],answer:"RAM",fact:"RAM is volatile memory."},
    {difficulty:"medium",category:"Science",clue:"I am the chemical formula for water.",options:["CO2","O2","H2O","NaCl"],answer:"H2O",fact:"A water molecule contains two hydrogen atoms and one oxygen atom."},
    {difficulty:"medium",category:"Science",clue:"I am the process by which plants make food using sunlight.",options:["Respiration","Photosynthesis","Digestion","Evaporation"],answer:"Photosynthesis",fact:"Plants use chlorophyll to absorb light."},
    {difficulty:"medium",category:"Space",clue:"I am known as the Red Planet.",options:["Venus","Jupiter","Mars","Saturn"],answer:"Mars",fact:"Mars has two small moons."},
    {difficulty:"medium",category:"Technology",clue:"I connect computers and devices around the world.",options:["Internet","Printer","Bluetooth","Scanner"],answer:"Internet",fact:"The internet connects billions of devices."},
    {difficulty:"medium",category:"Science",clue:"I measure temperature.",options:["Barometer","Thermometer","Speedometer","Compass"],answer:"Thermometer",fact:"Thermometers can use different measurement scales."},
    {difficulty:"medium",category:"Science",clue:"I am the force that pulls objects towards Earth.",options:["Friction","Gravity","Magnetism","Pressure"],answer:"Gravity",fact:"Gravity keeps planets in orbit around the Sun."},
    {difficulty:"medium",category:"Technology",clue:"I am a language used to structure web pages.",options:["HTML","Python","SQL","C++"],answer:"HTML",fact:"HTML stands for HyperText Markup Language."},
    {difficulty:"medium",category:"Science",clue:"I am the largest organ of the human body.",options:["Heart","Brain","Skin","Liver"],answer:"Skin",fact:"Skin protects the body and helps regulate temperature."},

    {difficulty:"medium",category:"Technology",clue:"I am a language commonly used for AI and data science.",options:["Python","HTML","CSS","XML"],answer:"Python",fact:"Python is popular because of its readable syntax and libraries."},
    {difficulty:"medium",category:"Science",clue:"I am the basic structural and functional unit of life.",options:["Atom","Cell","Tissue","Organ"],answer:"Cell",fact:"All living organisms are made of one or more cells."},
    {difficulty:"medium",category:"Space",clue:"I am the largest planet in our solar system.",options:["Earth","Mars","Jupiter","Neptune"],answer:"Jupiter",fact:"Jupiter is a gas giant."},
    {difficulty:"medium",category:"Technology",clue:"I protect a computer network by filtering traffic.",options:["Firewall","Browser","Compiler","Keyboard"],answer:"Firewall",fact:"Firewalls help block unauthorized network access."},
    {difficulty:"medium",category:"Science",clue:"I am the gas humans need to breathe.",options:["Nitrogen","Oxygen","Carbon dioxide","Helium"],answer:"Oxygen",fact:"Oxygen makes up about 21% of Earth's atmosphere."},

    {difficulty:"hard",category:"Technology",clue:"I am a machine learning technique inspired by the human brain.",options:["Neural Network","Spreadsheet","Database","Compiler"],answer:"Neural Network",fact:"Neural networks consist of interconnected artificial neurons."},
    {difficulty:"hard",category:"Technology",clue:"I convert source code into machine code before execution.",options:["Interpreter","Compiler","Browser","Debugger"],answer:"Compiler",fact:"A compiler commonly translates a whole program before execution."},
    {difficulty:"hard",category:"Science",clue:"I am the powerhouse of the cell.",options:["Nucleus","Mitochondria","Ribosome","Chloroplast"],answer:"Mitochondria",fact:"Mitochondria help produce ATP, the cell's energy currency."},
    {difficulty:"hard",category:"Technology",clue:"I am a system that learns patterns from data without explicit programming for every task.",options:["Machine Learning","Word Processing","File Storage","Networking"],answer:"Machine Learning",fact:"Machine learning is a branch of artificial intelligence."},
    {difficulty:"hard",category:"Science",clue:"I am the speed of light in a vacuum, approximately.",options:["300 km/s","300,000 km/s","30,000 km/s","3,000 km/s"],answer:"300,000 km/s",fact:"Light travels at approximately 299,792 kilometres per second in a vacuum."},
    {difficulty:"hard",category:"Technology",clue:"I allow multiple processes to share a processor by switching between them.",options:["Multitasking","Formatting","Encryption","Compilation"],answer:"Multitasking",fact:"Operating systems use scheduling to manage processes."},
    {difficulty:"hard",category:"Science",clue:"I am the pH value of a neutral solution at room temperature.",options:["0","7","10","14"],answer:"7",fact:"A neutral solution has equal hydrogen and hydroxide ion concentrations."},
    {difficulty:"hard",category:"Technology",clue:"I am a database language used to manage and query relational data.",options:["SQL","CSS","HTML","Photoshop"],answer:"SQL",fact:"SQL stands for Structured Query Language."},
    {difficulty:"hard",category:"Science",clue:"I describe the change in frequency of a wave due to relative motion.",options:["Doppler Effect","Photoelectric Effect","Greenhouse Effect","Tyndall Effect"],answer:"Doppler Effect",fact:"The Doppler effect explains changes in the pitch of a moving siren."},
    {difficulty:"hard",category:"Technology",clue:"I am a security method that converts readable data into coded information.",options:["Encryption","Compression","Formatting","Rendering"],answer:"Encryption",fact:"Encryption helps protect information from unauthorized access."},

    {difficulty:"hard",category:"Technology",clue:"I am an AI model architecture based on attention mechanisms.",options:["Transformer","Decision Tree","Linear Regression","Database"],answer:"Transformer",fact:"Transformers are widely used in modern language models."},
    {difficulty:"hard",category:"Science",clue:"I am the study of earthquakes.",options:["Meteorology","Seismology","Ecology","Astronomy"],answer:"Seismology",fact:"Seismologists study seismic waves."},
    {difficulty:"hard",category:"Technology",clue:"I am a data structure that follows Last In, First Out.",options:["Queue","Stack","Tree","Graph"],answer:"Stack",fact:"Stacks are used in function calls and undo operations."},
    {difficulty:"hard",category:"Science",clue:"I am the smallest unit of an element that retains its properties.",options:["Molecule","Atom","Cell","Compound"],answer:"Atom",fact:"Atoms contain protons, neutrons and electrons."},
    {difficulty:"hard",category:"Technology",clue:"I am a version control system widely used by developers.",options:["Git","Excel","Linux","MySQL"],answer:"Git",fact:"Git tracks changes in source code."},

    {difficulty:"medium",category:"Nature",clue:"I am the natural home of a living organism.",options:["Habitat","Machine","Factory","Vehicle"],answer:"Habitat",fact:"Habitats provide organisms with food, water and shelter."},
    {difficulty:"easy",category:"Animals",clue:"I carry my home on my back and move slowly.",options:["Turtle","Rabbit","Horse","Monkey"],answer:"Turtle",fact:"Many turtles have hard protective shells."},
    {difficulty:"medium",category:"Space",clue:"I am the galaxy that contains our solar system.",options:["Andromeda","Milky Way","Whirlpool","Sombrero"],answer:"Milky Way",fact:"Our solar system lies in the Milky Way galaxy."},
    {difficulty:"hard",category:"Technology",clue:"I am the process of finding and fixing errors in a program.",options:["Debugging","Browsing","Uploading","Compiling"],answer:"Debugging",fact:"Debugging is an important part of software development."},
    {difficulty:"easy",category:"Food",clue:"I am made from cocoa and often taste sweet.",options:["Chocolate","Bread","Rice","Cheese"],answer:"Chocolate",fact:"Chocolate is made from cacao beans."}
];

// GAME SETTINGS

const settings = {
    easy: {time:30,lives:3,points:10},
    medium: {time:20,lives:3,points:20},
    hard: {time:10,lives:2,points:30},
    endless: {time:20,lives:3,points:15}
};

let mode = "easy";
let score = 0;
let lives = 3;
let timeLeft = 30;
let timer = null;
let currentQuestion = null;
let questionList = [];
let questionIndex = 0;
let paused = false;
let musicOn = true;
let soundOn = true;
let answered = false;
let audioContext = null;
let musicInterval = null;
let musicStep = 0;

let bestScore = Number(localStorage.getItem("aiClueBestScore")) || 0;

document.getElementById("best-score").textContent = bestScore;
// START GAME

window.startGame = function(selectedMode) {

    getAudio();

    mode = selectedMode;
    score = 0;
    questionIndex = 0;
    paused = false;
    answered = false;

    lives = settings[mode].lives;
    timeLeft = settings[mode].time;

    const matching = questions.filter(
        q => q.difficulty === mode
    );

    const others = questions.filter(
        q => q.difficulty !== mode
    );

    questionList = mode === "endless"
        ? shuffle(questions)
        : [...shuffle(matching), ...shuffle(others)];

    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");

    updateStats();
    startMusic();
    loadQuestion();
};
// AUDIO SYSTEM

function getAudio() {
    if (!audioContext) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) audioContext = new AudioContextClass();
    }
    if (audioContext && audioContext.state === "suspended") {
        audioContext.resume();
    }
    return audioContext;
}

function playTone(frequency, duration, type = "sine", volume = 0.08) {
    if (!soundOn) return;

    const ctx = getAudio();
    if (!ctx) return;

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
        0.001,
        ctx.currentTime + duration
    );

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start();
    oscillator.stop(ctx.currentTime + duration);
}

function correctSound() {
    playTone(600, 0.15);
    setTimeout(() => playTone(850, 0.2), 120);
}

function wrongSound() {
    playTone(180, 0.3, "sawtooth");
}

function startMusic() {
    if (!musicOn || musicInterval) return;

    const notes = [261.63,329.63,392,329.63,293.66,349.23,440,349.23];

    musicInterval = setInterval(() => {
        if (!musicOn || paused || !audioContext) return;

        const ctx = getAudio();
        if (!ctx) return;

        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();

        oscillator.type = "sine";
        oscillator.frequency.value = notes[musicStep % notes.length];
        gain.gain.value = 0.018;

        oscillator.connect(gain);
        gain.connect(ctx.destination);

        oscillator.start();
        oscillator.stop(ctx.currentTime + 0.18);

        musicStep++;
    }, 280);
}

function stopMusic() {
    clearInterval(musicInterval);
    musicInterval = null;
}

function toggleMusic() {
    musicOn = !musicOn;

    document.getElementById("music-btn").textContent =
        musicOn ? "🎵 Music: ON" : "🎵 Music: OFF";

    if (musicOn) startMusic();
    else stopMusic();
}

function toggleSound() {
    soundOn = !soundOn;

    document.getElementById("sound-btn").textContent =
        soundOn ? "🔊 Sound: ON" : "🔇 Sound: OFF";
}

// START GAME

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function startGame(selectedMode) {
    getAudio();

    mode = selectedMode;
    score = 0;
    questionIndex = 0;
    paused = false;
    answered = false;

    lives = settings[mode].lives;
    timeLeft = settings[mode].time;

    const matching = questions.filter(q => q.difficulty === mode);
    const others = questions.filter(q => q.difficulty !== mode);

    questionList = mode === "endless"
        ? shuffle(questions)
        : [...shuffle(matching), ...shuffle(others)];

    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");

    updateStats();
    startMusic();
    loadQuestion();
}

// LOAD QUESTION

function loadQuestion() {
    clearInterval(timer);
    paused = false;
    answered = false;

    if (lives <= 0) {
        endGame(false);
        return;
    }

    if (questionIndex >= questionList.length) {
        if (mode === "endless") {
            questionList = shuffle(questions);
            questionIndex = 0;
        } else {
            endGame(true);
            return;
        }
    }

    currentQuestion = questionList[questionIndex];

    document.getElementById("question-number").textContent =
        `Question ${questionIndex + 1} / ${mode === "endless" ? "∞" : questionList.length}`;

    document.getElementById("clue").textContent = currentQuestion.clue;
    document.getElementById("feedback").textContent = "";
    document.getElementById("fun-fact").textContent = "";

    const optionsBox = document.getElementById("options");
    optionsBox.innerHTML = "";

    shuffle(currentQuestion.options).forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option, button);
        optionsBox.appendChild(button);
    });

    document.getElementById("progress-bar").style.width =
        (questionIndex / questionList.length * 100) + "%";

    timeLeft = settings[mode].time;
    updateStats();
    startTimer();
}

// TIMER

function startTimer() {
    clearInterval(timer);

    timer = setInterval(() => {
        if (paused || answered) return;

        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            answered = true;
            disableOptions();

            lives--;
            wrongSound();

            document.getElementById("feedback").textContent =
                "⏰ Time's up! You lost one life.";

            document.getElementById("fun-fact").textContent =
                "💡 " + currentQuestion.fact;

            updateStats();

            setTimeout(() => {
                questionIndex++;
                loadQuestion();
            }, 1800);
        }
    }, 1000);
}

// CHECK ANSWER

function checkAnswer(selected, button) {
    if (answered || paused) return;

    answered = true;
    clearInterval(timer);
    disableOptions();

    const feedback = document.getElementById("feedback");
    const fact = document.getElementById("fun-fact");

    if (selected === currentQuestion.answer) {
        score += settings[mode].points;

        button.classList.add("correct");
        feedback.textContent = "🎉 Correct Answer! Well Done!";
        feedback.style.color = "#48ffac";

        correctSound();
    } else {
        lives--;

        button.classList.add("wrong");
        feedback.textContent =
            "❌ Incorrect! Correct answer: " + currentQuestion.answer;

        feedback.style.color = "#ff758c";

        wrongSound();

        document.querySelectorAll(".options button").forEach(btn => {
            if (btn.textContent === currentQuestion.answer) {
                btn.classList.add("correct");
            }
        });
    }

    fact.textContent = "💡 Fun Fact: " + currentQuestion.fact;

    updateStats();

    setTimeout(() => {
        questionIndex++;
        loadQuestion();
    }, 2200);
}

function disableOptions() {
    document.querySelectorAll(".options button").forEach(button => {
        button.disabled = true;
    });
}

// UPDATE STATS

function updateStats() {
    document.getElementById("score").textContent = score;
    document.getElementById("lives").textContent = lives;
    document.getElementById("timer").textContent = timeLeft;
}

// PAUSE AND RESUME

function pauseGame() {
    if (answered) return;

    paused = !paused;

    document.getElementById("pause-btn").textContent =
        paused ? "▶ Resume" : "⏸ Pause";

    if (paused) {
        stopMusic();
    } else {
        startMusic();
    }
}

// END GAME

function endGame(completed) {
    clearInterval(timer);
    stopMusic();

    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem("aiClueBestScore", bestScore);
    }

    document.getElementById("game-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");

    document.getElementById("result-title").textContent =
        completed ? "🏆 Congratulations!" : "💔 Game Over!";

    document.getElementById("result-message").textContent =
        completed
            ? "You completed all the questions!"
            : "You ran out of lives. Better luck next time!";

    document.getElementById("final-score").textContent = score;
    document.getElementById("final-best").textContent = bestScore;
    document.getElementById("best-score").textContent = bestScore;
}

// RETURN HOME

function backToHome() {
    clearInterval(timer);
    stopMusic();

    paused = false;

    document.getElementById("game-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
}
    console.log("AI Clue Master JavaScript Loaded!");
