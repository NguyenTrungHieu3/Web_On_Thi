class Question {
    constructor(content, answer, correctAnswer) {
        this.content = content;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(answer) {
        return answer === this.correctAnswer;
    }
}

// TODO answer là một đối tượng.as

let q1 = new Question(
    "Câu hỏi: Almost every settled society that possesses the techniques for building produces …………",
    [
        "A. nature",
        "B. architecture",
        "C. struggle"
    ],
    "B. architecture"
);

let q2 = new Question(
    "Câu hỏi: Architecture is necessary in all but the simplest ………….",
    [
        "A. theories",
        "B. works",
        "C. cultures"
    ],
    "C. cultures"
);

let q3 = new Question(
    "Câu hỏi: Architecture is a prerequisite for the development of civilized ………",
    [
        "A. importance",
        "B. institutions",
        "C. symbols"
    ],
    "B. institutions"
);

let q4 = new Question(
    "Câu hỏi: The stability and permanence of the work’s construction is a/an …….",
    [
        "A. idea",
        "B. form",
        "C. constant"
    ],
    "C. constant"
);

let q5 = new Question(
    "Câu hỏi: If the function is chiefly utilitarian, communication is of less ……",
    [
        "A. importance",
        "B. condition",
        "C. benefit"
    ],
    "A. importance"
);

let q6 = new Question(
    "Câu hỏi: In a monumental tomb, utility is a minor …………",
    [
        "A. market",
        "B. concern",
        "C. city hall"
    ],
    "B. concern"
);

let q7 = new Question(
    "Câu hỏi: Architecture should fulfill the practical and expressive requirements of ……people.",
    [
        "A. primitive",
        "B. civilized",
        "C. common"
    ],
    "B. civilized"
);

let q8 = new Question(
    "Câu hỏi: There are some characteristics that distinguish a work of architecture ……. other man-made structures.",
    [
        "A. from",
        "B. behind",
        "C. with"
    ],
    "A. from"
);

let q9 = new Question(
    "Câu hỏi: All these conditions must be met ……architecture.",
    [
        "A. at",
        "B. in",
        "C. on"
    ],
    "B. in"
);

let q10 = new Question(
    "Câu hỏi: The placement and form of the buildings in relation to their……..is one of the fundamental elements in the aesthetics of architecture.",
    [
        "A. square",
        "B. comfort",
        "C. sites"
    ],
    "C. sites"
);

let q11 = new Question(
    "Câu hỏi: The arrangement of the ……… of buildings and their parts controls the effects of sun, wind, and rainfall.",
    [
        "A. rooms",
        "B. axes",
        "C. spaces"
    ],
    "C. spaces"
);
let q12 = new Question(
    "Câu hỏi: The characteristics of the immediate ………… also influence orientation.",
    [
        "A. environment",
        "B. territory",
        "C. building"
    ],
    "A. environment"
);

let q13 = new Question(
    "Câu hỏi: Bodies of water produce ………… and reflect the sun.",
    [
        "A. shade",
        "B. moisture",
        "C. wind"
    ],
    "A. shade"
);

let q14 = new Question(
    "Câu hỏi: Color has a practical ………… and expressive quality.",
    [
        "A. choice",
        "B. feature",
        "C. function"
    ],
    "C. function"
);

let q15 = new Question(
    "Câu hỏi: The architect should balance the weather resistance of glass and …….. metals against their high thermal conductivity.",
    [
        "A. bright",
        "B. light",
        "C. solar"
    ],
    "B. light"
);

let q16 = new Question(
    "Câu hỏi: Planning for use is concerned with convenience of ………… and rest.",
    [
        "A. movement",
        "B. parts",
        "C. requirements"
    ],
    "A. movement"
);

let q17 = new Question(
    "Câu hỏi: A ………… house has separate areas for cooking, eating, sleeping, storage, and recreation.",
    [
        "A. ancient",
        "B. primitive",
        "C. modern"
    ],
    "C. modern"
);

let q18 = new Question(
    "Câu hỏi: Major expenses in building are for ………… , materials, and labor.",
    [
        "A. habits",
        "B. land",
        "C. phrase"
    ],
    "B. land"
);

let q19 = new Question(
    "Câu hỏi: To make buildings ………… and comfortable, the architect must control the effects of natural environment.",
    [
        "A. habitual",
        "B. habitable",
        "C. hospitable"
    ],
    "B. habitable"
);
let q20 = new Question(
    "Câu hỏi: Architecture should fulfill requirements of primitive people.",
    [
        "A. True",
        "B. False"
    ],
    "B. False"
);

let q21 = new Question(
    "Câu hỏi: Without architecture, man is confined to a primitive struggle with the elements.",
    [
        "A. True",
        "B. False"
    ],
    "A. True"
);

let q22 = new Question(
    "Câu hỏi: Structures should be built according to aesthetic and functional criteria.",
    [
        "A. True",
        "B. False"
    ],
    "A. True"
);

let q23 = new Question(
    "Câu hỏi: There is no difference between a work of architecture and other man-made structures.",
    [
        "A. True",
        "B. False"
    ],
    "B. False"
);

let q24 = new Question(
    "Câu hỏi: The stability and permanence of the work’s construction is constant for all types of buildings.",
    [
        "A. True",
        "B. False"
    ],
    "A. True"
);

let q25 = new Question(
    "Câu hỏi: In a factory, utility and communication are of equal importance.",
    [
        "A. True",
        "B. False"
    ],
    "A. True"
);
let q26 = new Question(
    "Câu hỏi: The Acropolis means ………..",
    [
        "A. upper town.",
        "B. a platform.",
        "C. front elevation"
    ],
    "A. upper town."
);

let q27 = new Question(
    "Câu hỏi: The Acropolis is the gem of ……. architecture.",
    [
        "A. European",
        "B. contemporary",
        "C. world"
    ],
    "C. world"
);

let q28 = new Question(
    "Câu hỏi: The Parthenon was built by ………..",
    [
        "A. an anonymous architect.",
        "B. Imhotep.",
        "C. Ictinus and Callicrates."
    ],
    "C. Ictinus and Callicrates."
);

let q29 = new Question(
    "Câu hỏi: The Parthenon was a display place for a great statue of ……..",
    [
        "A. Hera.",
        "B. Athena.",
        "C. Alexander the Great."
    ],
    "B. Athena."
);

let q30 = new Question(
    "Câu hỏi: The temple was designed to serve as a/an ………, imposing architectural frame for the statue of Athena.",
    [
        "A. exquisite",
        "B. rocky",
        "C. deep"
    ],
    "A. exquisite"
);

let q31 = new Question(
    "Câu hỏi: The Erechtheum was built by a/an ……… architect.",
    [
        "A. famous",
        "B. talented",
        "C. anonymous"
    ],
    "C. anonymous"
);

let q32 = new Question(
    "Câu hỏi: The Erechtheum was designed to serve different ……..",
    [
        "A. cults.",
        "B. architects.",
        "C. cities."
    ],
    "A. cults."
);

let q33 = new Question(
    "Câu hỏi: The porch of the Erechtheum has figures of ……… for columns.",
    [
        "A. Atlases",
        "B. Caryatids",
        "C. Sphixes"
    ],
    "B. Caryatids"
);

let q34 = new Question(
    "Câu hỏi: Its caryatid porch features an old ……… motif.",
    [
        "A. Oriental",
        "B. monumental",
        "C. world"
    ],
    "A. Oriental"
);

let q35 = new Question(
    "Câu hỏi: In the Propylaea the rigid conventions of colonnade construction was adapted to a steeply rising …………",
    [
        "A. floor.",
        "B. building.",
        "C. site."
    ],
    "C. site."
);

let q36 = new Question(
    "Câu hỏi: The Propylaea was ……… to the Acropolis.",
    [
        "A. a temple",
        "B. the monumental gateway",
        "C. staircase"
    ],
    "B. the monumental gateway"
);
let q37 = new Question(
    "Câu hỏi: The Parthenon is a stately building with six-column façade.",
    [
        "A. True",
        "B. False"
    ],
    "B. False"
);

let q38 = new Question(
    "Câu hỏi: The Parthenon was designed to serve as an imposing architectural frame for a gold and ivory statue of Athena.",
    [
        "A. True",
        "B. False"
    ],
    "A. True"
);

let q39 = new Question(
    "Câu hỏi: The statue of Athena is not existent.",
    [
        "A. True",
        "B. False"
    ],
    "A. True"
);

let q40 = new Question(
    "Câu hỏi: The Erechtheum is a Corinthian temple.",
    [
        "A. True",
        "B. False"
    ],
    "B. False"
);

let q41 = new Question(
    "Câu hỏi: The architect of the Erechtheum had to design a building with three different floor levels.",
    [
        "A. True",
        "B. False"
    ],
    "A. True"
);

let q42 = new Question(
    "Câu hỏi: The Propylaea was built by Callierates.",
    [
        "A. True",
        "B. False"
    ],
    "B. False"
);

let q43 = new Question(
    "Câu hỏi: The most impressive examples of Greek architecture are the buildings constructed for Athenian Acropolis.",
    [
        "A. True",
        "B. False"
    ],
    "A. True"
);
let q44 = new Question(
    "Câu hỏi: Pervasive Roman predilection was for ……..",
    [
        "A. construction materials",
        "B. spatial composition",
        "C. chronological organization"
    ],
    "B. spatial composition"
);

let q45 = new Question(
    "Câu hỏi: The organization of lines, surfaces, ……… is preference in spatial composition of Roman architecture.",
    [
        "A. masses and volumes",
        "B. and patterns",
        "C. and rooms"
    ],
    "A. masses and volumes"
);

let q46 = new Question(
    "Câu hỏi: The domus consisted of suites of rooms grouped around a central hall, or ………….",
    [
        "A. fireplace",
        "B. atrium",
        "C. patio"
    ],
    "B. atrium"
);

let q47 = new Question(
    "Câu hỏi: Domus means ……..",
    [
        "A. forum",
        "B. town-house",
        "C. basilica"
    ],
    "B. town-house"
);

let q48 = new Question(
    "Câu hỏi: Villa means an estate, complete with house, grounds and ……… buildings.",
    [
        "A. high-rising",
        "B. wooded",
        "C. subsidiary"
    ],
    "C. subsidiary"
);

let q49 = new Question(
    "Câu hỏi: Blocks of flats are …..",
    [
        "A. insulae",
        "B. order",
        "C. porticos"
    ],
    "A. insulae"
);

let q50 = new Question(
    "Câu hỏi: The Romans were great builders and engineers famous for their factories, roads, aqueducts and bridges, grand ……… and amphitheatres, theatres, and temples.",
    [
        "A. stadiums",
        "B. circuses",
        "C. thermos"
    ],
    "B. circuses"
);

let q51 = new Question(
    "Câu hỏi: The largest and most important ……… of Rome was the Colosseum, built by the emperor Vespasian, Titus, and Domitian in about AD 70/75-82.",
    [
        "A. temple",
        "B. palace",
        "C. amphitheatre"
    ],
    "C. amphitheatre"
);
let q52 = new Question(
    "Câu hỏi: The Roman Architecture preferred ………..",
    [
        "A. the borrowing of styles from other civilization.",
        "B. spatial composition.",
        "C. construction techniques of earlier civilizations."
    ],
    "B. spatial composition."
);

let q53 = new Question(
    "Câu hỏi: The domus consisted of ………",
    [
        "A. three or four floors.",
        "B. suits of rooms grouped around a central hall.",
        "C. two or three rooms with few windows."
    ],
    "B. suits of rooms grouped around a central hall."
);

let q54 = new Question(
    "Câu hỏi: Insulae were planned …..",
    [
        "A. to impress by their grandeur.",
        "B. around a colonnaded court.",
        "C. with strict regard to economy of space."
    ],
    "C. with strict regard to economy of space."
);

let q55 = new Question(
    "Câu hỏi: The Colosseum was the most important …….",
    [
        "A. temple of antiquity.",
        "B. theatre of ancient Greece.",
        "C. amphitheatre of ancient Rome."
    ],
    "C. amphitheatre of ancient Rome."
);
let q56 = new Question(
    "Câu hỏi: The half-timber house reached its most ……….. form in England in the latter part of the sixteenth century.",
    [
        "A. traditional",
        "B. modern",
        "C. elaborate"
    ],
    "C. elaborate"
);

let q57 = new Question(
    "Câu hỏi: Half-timber construction consists of large wooden ……… for structural components, with plaster or masonry.",
    [
        "A. metal columns and beams",
        "B. concrete columns and beams",
        "C. wooden columns and beams"
    ],
    "C. wooden columns and beams"
);

let q58 = new Question(
    "Câu hỏi: The Half-timber House construction usually has ……… and small-paned windows.",
    [
        "A. sharp gables",
        "B. first-storey overhang",
        "C. metal frame"
    ],
    "B. first-storey overhang"
);

let q59 = new Question(
    "Câu hỏi: The Elizabethan Manor House has …………",
    [
        "A. metal construction",
        "B. stone and brick construction",
        "C. glass construction"
    ],
    "B. stone and brick construction"
);

let q60 = new Question(
    "Câu hỏi: The Elizabethan Manor House is usually characterized by gables crowned with balustrades and ……..",
    [
        "A. no windows",
        "B. large-paned windows",
        "C. bay windows with small, leaded panes."
    ],
    "C. bay windows with small, leaded panes."
);

let q61 = new Question(
    "Câu hỏi: There are ……… in the Elizabethan Manor House.",
    [
        "A. chimneys",
        "B. parking garages",
        "C. lakes"
    ],
    "A. chimneys"
);
let q62 = new Question(
    "Câu hỏi: A house should fulfill its intended ………..: to satisfy the needs of the people for which it is designed.",
    [
        "A. dream",
        "B. beauty",
        "C. function"
    ],
    "C. function"
);

let q63 = new Question(
    "Câu hỏi: Members of a household should ask themselves numerous questions concerning their ……….",
    [
        "A. jobs",
        "B. life-style",
        "C. children"
    ],
    "B. life-style"
);

let q64 = new Question(
    "Câu hỏi: If the prospective home owner is planning to build, many factors are to be considered before the building ……… is purchased.",
    [
        "A. cost",
        "B. material",
        "C. site"
    ],
    "C. site"
);

let q65 = new Question(
    "Câu hỏi: The ……….. of a good architect are invaluable, but if the buyer cannot afford one, he or she may want to select a good stock plan that an architect has designed.",
    [
        "A. qualifications",
        "B. services",
        "C. roles"
    ],
    "B. services"
);

let q66 = new Question(
    "Câu hỏi: The owner should study costs on paper and should look carefully at his or her resources, abilities, time, and energies.",
    [
        "A. How much money he spends.",
        "B. How much money he earns.",
        "C. How long he intends to live in a house."
    ],
    "A. How much money he spends."
);

let q67 = new Question(
    "Câu hỏi: Most houses are based on one of six ………: the rectangle, and the H, U, T, L, and E. Of these plans, the rectangle, the L and the U are the most common.",
    [
        "A. letters",
        "B. symbols",
        "C. plans"
    ],
    "A. letters"
);

let q68 = new Question(
    "Câu hỏi: ……… is the key to a well-designed home.",
    [
        "A. Complexity",
        "B. Simplicity",
        "C. Modernity"
    ],
    "B. Simplicity"
);

let q69 = new Question(
    "Câu hỏi: ……… has been described as that quality which pleases the senses and lifts the spirits.",
    [
        "A. Function",
        "B. Economy",
        "C. Beauty"
    ],
    "C. Beauty"
);

let q70 = new Question(
    "Câu hỏi: Authorities in the interior design field generally agree that beauty in any object is achieved through the application of the ……… and a skillful use of the elements, unified by a basic theme.",
    [
        "A. construction material",
        "B. principles of design",
        "C. construction techniques"
    ],
    "B. principles of design"
);

let q71 = new Question(
    "Câu hỏi: ……… develops slowly and naturally with the personality of the household.",
    [
        "A. Individuality",
        "B. Economy",
        "C. Beauty"
    ],
    "A. Individuality"
);
let q72 = new Question(
    "Câu hỏi: Balance is that quality in a room which gives a sense of …………………...",
    [
        "A. disorder and disturbance",
        "B. disorganization and noise",
        "C. equilibrium and repose"
    ],
    "C. equilibrium and repose"
);

let q73 = new Question(
    "Câu hỏi: The similar arrangement of the same objects on each side of an imaginary line creates ……… balance.",
    [
        "A. asymmetrical",
        "B. bisymmetrical",
        "C. radial"
    ],
    "B. bisymmetrical"
);

let q74 = new Question(
    "Câu hỏi: An example of ……… balance is that two small objects may balance one large object.",
    [
        "A. asymmetrical",
        "B. bisymmetrical",
        "C. radial"
    ],
    "A. asymmetrical"
);

let q75 = new Question(
    "Câu hỏi: The arrangement of chairs surrounding a round dining table or coffee table is an example of ……… balance.",
    [
        "A. asymmetrical",
        "B. bisymmetrical",
        "C. radial"
    ],
    "C. radial"
);

let q76 = new Question(
    "Câu hỏi: The architectural background, which includes doors, windows, paneling, and fireplaces, should be arranged so that the room has a feeling of equilibrium.",
    [
        "A. space",
        "B. plan",
        "C. design"
    ],
    "C. design"
);

let q77 = new Question(
    "Câu hỏi: ……… can be achieved through repetition, gradation, opposition, transition, and radiation.",
    [
        "A. Emphasis",
        "B. Balance",
        "C. Rhythm"
    ],
    "C. Rhythm"
);

let q78 = new Question(
    "Câu hỏi: The same color of chairs and a table is an example of ……… in rhythm.",
    [
        "A. gradation",
        "B. repetition",
        "C. radiation"
    ],
    "B. repetition"
);

let q79 = new Question(
    "Câu hỏi: ……… is rhythm found in a curved line that carries the eye easily over an architectural element.",
    [
        "A. Gradation",
        "B. Repetition",
        "C. Transition"
    ],
    "C. Transition"
);

let q80 = new Question(
    "Câu hỏi: The placement of a fireplace in the center of a room expresses ……….",
    [
        "A. balance",
        "B. emphasis",
        "C. rhythm"
    ],
    "A. balance"
);

let q81 = new Question(
    "Câu hỏi: Emphasis in a room can be achieved through the appropriate use and arrangement of colors, furniture, lighting, and accessories.",
    [
        "A. ornaments",
        "B. ceilings",
        "C. floors"
    ],
    "A. ornaments"
);

let questions = [
    q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20,
    q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31, q32, q33, q34, q35, q36, q37, q38, q39,
    q40, q41, q42, q43, q44, q45, q46, q47, q48, q49, q50, q51, q52, q53, q54, q55, q56, q57, q58, q59, q60,
    q61, q62, q63, q64, q65, q66, q67, q68, q69, q70, q71, q72, q73, q74, q75, q76, q77, q78, q79, q80,
    q81,
];
const getQuestion = document.getElementById("questions");
showQuestions(questions[0]);

let countQuestions = 1;  // Biến này sẽ theo dõi số câu hỏi đã trả lời

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Hoán đổi các phần tử
    }
}

function showQuestions(question) {
    let result = "";
    result += `<label for="answer" style="font-weight: bold">${question.content}</label><br><br>`;

    // Xáo trộn các đáp án
    shuffleArray(question.answer);

    for (let i = 0; i < 4; i++) {
        result += `<button type="button" class="answer" onclick="checkAnswer('${question.answer[i]}', this, ${i})">${question.answer[i]}</button><br>`;
    }
    result += `<div id="feedback" style="font-weight: bold;"></div>`;  // Thêm phần hiển thị phản hồi
    result += '<button type="button" id="nextButton" style="display:none;" onclick="nextQuestion()">Tiếp tục</button>';  // Nút "Tiếp tục"
    getQuestion.innerHTML = result;
}

let index = 0;
let count = 0;
let isAnswerSelected = false;  // Biến để kiểm tra xem đã chọn đáp án hay chưa

function checkAnswer(answer, button, selectedIndex) {
    if (isAnswerSelected) return; // Nếu đã chọn đáp án thì không cho chọn lại

    isAnswerSelected = true;
    // Cập nhật số câu đã trả lời lên màn hình
    document.getElementById('answeredCount').innerHTML = `Câu đã trả lời: ${countQuestions}`;

    const feedback = document.getElementById('feedback');
    const nextButton = document.getElementById('nextButton');

    const correctAnswerIndex = questions[index].answer.indexOf(questions[index].correctAnswer);

    // Kiểm tra đáp án và thay đổi màu sắc của các nút
    if (answer === questions[index].correctAnswer) {
        musicCorrect.play();
        feedback.innerHTML = "Bạn trả lời đúng!";
        feedback.style.color = "green";
        count++;
        button.style.backgroundColor = "green";  // Đáp án đúng màu xanh lá cây
    } else {
        musicFail.play();
        feedback.innerHTML = "Bạn trả lời sai!";
        feedback.style.color = "red";
        button.style.backgroundColor = "red";  // Đáp án sai màu đỏ
    }

    // Tô màu xanh lá cây cho đáp án đúng
    const answerButtons = document.querySelectorAll('.answer');
    answerButtons.forEach((btn, idx) => {
        if (idx === correctAnswerIndex) {
            btn.style.backgroundColor = "green";  // Tô màu xanh lá cây cho đáp án đúng
        } else if (btn !== button) {
            btn.style.backgroundColor = "gray";  // Các đáp án còn lại màu xám
            btn.disabled = true;  // Vô hiệu hóa các nút khác
        }
    });

    nextButton.style.display = "inline-block";  // Hiển thị nút "Tiếp tục"
}

function nextQuestion() {
    isAnswerSelected = false;  // Reset để có thể chọn đáp án tiếp theo

    // Xóa feedback và nút "Tiếp tục" cho câu hỏi tiếp theo
    document.getElementById('feedback').innerHTML = "";
    document.getElementById('nextButton').style.display = "none";

    countQuestions++;  // Tăng số câu hỏi đã trả lời

    questions.splice(index, 1);  // Xóa câu hỏi đã trả lời
    index = randomQuestion();

    if (index < questions.length) {
        showQuestions(questions[index]);
    } else {
        renderToManHinhKet();
    }
}

function endGame() {
    // Chức năng khi nhấn nút "Kết thúc trò chơi"
    Swal.fire({
        title: "Bạn chắc chắn muốn kết thúc?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Có, kết thúc',
        cancelButtonText: 'Không, tiếp tục chơi'
    }).then((result) => {
        if (result.isConfirmed) {
            renderToManHinhKet();  // Kết thúc trò chơi
        }
    });
}

function renderToManHinhKet() {
    fireworkSound.play();
    window.location.href = `Man_Hinh_Ket.html?correct=${count}`;
}

function randomQuestion() {
    return Math.floor(Math.random() * questions.length);
}

let musicBackground;
let musicCorrect;
let musicFail;
let fireworkSound;

function initMusic() {
    musicBackground = new Audio("../sound/background.mp3");
    musicCorrect = new Audio("../sound/correct.mp3");
    musicFail = new Audio("../sound/fail.mp3");
    fireworkSound = new Audio("../sound/firework_sound.mp3");
    musicBackground.loop = true;
    musicBackground.volume = 0.5;
}

window.onload = function () {
    initMusic();
    musicBackground.play();
}

