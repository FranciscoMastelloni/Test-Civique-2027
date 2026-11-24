
const PASS_SCORE = 18;

const container = document.getElementById("questions");
const form = document.getElementById("exam-form");
const result = document.getElementById("result");
const progress = document.getElementById("progress");

let currentCategory = "";
let part = 0;

// Generación de la hoja de examen
questions.forEach((q) => {

    if (q.category !== currentCategory) {
        currentCategory = q.category;
        part++;

        const title = document.createElement("h2");
        title.className = "part-title";
        title.textContent = `PARTIE ${part} — ${q.category}`;
        container.appendChild(title);
    }

    const block = document.createElement("div");
    block.className = "question";

    const header = document.createElement("div");
    header.className = "question-header";

    const statement = document.createElement("strong");
    statement.textContent = `Question ${q.id}. ${q.question}`;

    const points = document.createElement("span");
    points.className = "points";
    points.textContent = "1 pt";

    header.append(statement, points);
    block.appendChild(header);

    if (q.type === "text") {
        const input = document.createElement("input");

        input.type = "text";
        input.name = `q${q.id}`;
        input.placeholder = "Écrivez votre réponse...";
        input.setAttribute("aria-label", q.question);

        block.appendChild(input);

    } else {
        if (q.type === "multiple") {
            const instruction = document.createElement("p");
            instruction.textContent = "Plusieurs réponses possibles.";
            block.appendChild(instruction);
        }

        q.options.forEach((option) => {

            const label = document.createElement("label");
            label.className = "option";

            const input = document.createElement("input");

            input.type = q.type === "multiple"
                ? "checkbox"
                : "radio";

            input.name = `q${q.id}`;
            input.value = option;

            label.append(input, option);
            block.appendChild(label);
        });
    }

    container.appendChild(block);
});


// Compteur de questions répondues
function updateProgress() {

    const data = new FormData(form);

    const answered = questions.filter(q =>
        data.getAll(`q${q.id}`).some(
            value => value.trim() !== ""
        )
    ).length;

    progress.textContent =
        `${answered} / ${questions.length} questions répondues`;
}

form.addEventListener("input", updateProgress);

updateProgress();


// Normalisation des réponses écrites
function normalize(text) {
    return text
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}


// Correction de l'examen
form.addEventListener("submit", (event) => {

    event.preventDefault();

    if (!confirm("Voulez-vous remettre votre copie ?")) {
        return;
    }

    const data = new FormData(form);

    let score = 0;
    let unanswered = 0;

    const corrections = [];
    const categories = {};

    questions.forEach((q) => {

        const responses = data.getAll(`q${q.id}`)
            .filter(value => value.trim() !== "");

        let correct = false;

        if (responses.length === 0) {
            unanswered++;
        }

        // Correction des réponses multiples
        if (q.type === "multiple") {

            correct =
                responses.length === q.answer.length &&
                q.answer.every(a => responses.includes(a));

        } else {

            const response = responses[0] || "";

            correct =
                normalize(response) === normalize(q.answer);
        }

        if (correct) {
            score++;
        }

        // Statistiques par catégorie
        if (!categories[q.category]) {
            categories[q.category] = {
                score: 0,
                total: 0
            };
        }

        categories[q.category].total++;

        if (correct) {
            categories[q.category].score++;
        }

        // Enregistrement de la correction
        corrections.push({
            question: q,
            responses: responses,
            correct: correct
        });
    });

    const passed = score >= PASS_SCORE;

    const percentage = Math.round(
        score / questions.length * 100
    );

    const errors = questions.length - score - unanswered;

    // Affichage du résultat général
    result.innerHTML = `
        <h2>RÉSULTAT DE L'ÉPREUVE</h2>

        <div class="final-score">
            ${score} / ${questions.length}
        </div>

        <h2 class="${passed ? "passed" : "failed"}">
            ${passed
                ? "EXAMEN RÉUSSI"
                : "EXAMEN NON RÉUSSI"}
        </h2>

        <p>Seuil de réussite : ${PASS_SCORE}/20</p>

        <div class="statistics">
            <div>
                <strong>${score}</strong>
                <span>Bonnes réponses</span>
            </div>

            <div>
                <strong>${errors}</strong>
                <span>Erreurs</span>
            </div>

            <div>
                <strong>${unanswered}</strong>
                <span>Sans réponse</span>
            </div>

            <div>
                <strong>${percentage} %</strong>
                <span>Réussite</span>
            </div>
        </div>

        <h2>Résultats par catégorie</h2>

        <div id="category-results"></div>

        <h2>Correction détaillée</h2>

        <div id="correction-list"></div>

        <p class="disclaimer">
            Simulation pédagogique indépendante.
            Ce résultat ne détermine pas le droit de vote.
        </p>

        <button onclick="location.reload()">
            Recommencer l'examen
        </button>
    `;

    // Résultats par catégorie
    const categoryContainer =
        document.getElementById("category-results");

    Object.entries(categories).forEach(([name, stats]) => {

        const percent =
            stats.score / stats.total * 100;

        const block = document.createElement("div");

        block.className = "category-result";

        block.innerHTML = `
            <div class="category-header">
                <span>${name}</span>
                <strong>
                    ${stats.score}/${stats.total}
                </strong>
            </div>

            <div class="progress-bar">
                <div class="progress-fill"
                     style="width: ${percent}%">
                </div>
            </div>
        `;

        categoryContainer.appendChild(block);
    });

    // Correction détaillée des questions
    const correctionContainer =
        document.getElementById("correction-list");

    corrections.forEach(item => {

        const q = item.question;

        const block = document.createElement("div");

        block.className = item.correct
            ? "correction correct"
            : "correction incorrect";

        const title = document.createElement("h3");

        title.textContent =
            `Question ${q.id} — ${item.correct ? "1/1" : "0/1"}`;

        const statement = document.createElement("p");
        statement.textContent = q.question;

        const userAnswer = document.createElement("p");

        userAnswer.textContent =
            "Votre réponse : " +
            (item.responses.join(", ") || "Sans réponse");

        const correctAnswer = document.createElement("p");

        correctAnswer.textContent =
            "Bonne réponse : " +
            (Array.isArray(q.answer)
                ? q.answer.join(", ")
                : q.answer);

        const explanation = document.createElement("p");

        explanation.className = "explanation";
        explanation.textContent = q.explanation || "";

        block.append(
            title,
            statement,
            userAnswer,
            correctAnswer,
            explanation
        );

        correctionContainer.appendChild(block);
    });

    // Verrouillage de la copie
    form.querySelectorAll("input, button").forEach(element => {
        element.disabled = true;
    });

    result.hidden = false;

    result.scrollIntoView({
        behavior: "smooth"
    });
});
