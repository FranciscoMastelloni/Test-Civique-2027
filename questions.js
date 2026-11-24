

const questions = [

    // PARTIE I — INSTITUTIONS

    {
        id: 1,
        category: "Institutions de la République",
        type: "text",
        question: "Quelle est la durée du mandat du président de la République française, en années ? (Réponse en chiffres.)",
        answer: "5",
        explanation: "Le mandat présidentiel dure cinq ans, selon l'article 6 de la Constitution."
    },
    {
        id: 2,
        category: "Institutions de la République",
        type: "multiple",
        question: "Quelles institutions composent le Parlement français ?",
        options: [
            "L'Assemblée nationale",
            "Le Conseil constitutionnel",
            "Le Sénat",
            "Le Conseil d'État"
        ],
        answer: [
            "L'Assemblée nationale",
            "Le Sénat"
        ],
        explanation: "Le Parlement français est composé de deux chambres : l'Assemblée nationale et le Sénat."
    },
    {
        id: 3,
        category: "Institutions de la République",
        type: "single",
        question: "Qui nomme le Premier ministre ?",
        options: [
            "Le président du Sénat",
            "Le président de la République",
            "Le Conseil constitutionnel",
            "L'Assemblée nationale"
        ],
        answer: "Le président de la République",
        explanation: "Le président de la République nomme le Premier ministre conformément à l'article 8 de la Constitution."
    },
    {
        id: 4,
        category: "Institutions de la République",
        type: "single",
        question: "Quelle institution peut renverser le Gouvernement en adoptant une motion de censure ?",
        options: [
            "Le Sénat",
            "Le Conseil d'État",
            "Le Conseil constitutionnel",
            "L'Assemblée nationale"
        ],
        answer: "L'Assemblée nationale",
        explanation: "Les articles 49 et 50 de la Constitution prévoient la responsabilité du Gouvernement devant l'Assemblée nationale."
    },
    {
        id: 5,
        category: "Institutions de la République",
        type: "single",
        question: "Quelle institution peut contrôler la conformité d'une loi à la Constitution dans le cadre d'une QPC ?",
        options: [
            "La Cour des comptes",
            "Le Conseil constitutionnel",
            "Le Sénat",
            "Le Conseil des ministres"
        ],
        answer: "Le Conseil constitutionnel",
        explanation: "Le Conseil constitutionnel peut examiner une disposition législative dans le cadre d'une question prioritaire de constitutionnalité."
    },


    // PARTIE II — ECONOMIE

    {
        id: 6,
        category: "Économie et finances publiques",
        type: "single",
        question: "Que mesure principalement le produit intérieur brut (PIB) ?",
        options: [
            "Le patrimoine total des ménages",
            "Le montant des recettes fiscales",
            "La richesse produite sur un territoire pendant une période donnée",
            "Le montant total de la dette publique"
        ],
        answer: "La richesse produite sur un territoire pendant une période donnée",
        explanation: "Le PIB mesure la production économique réalisée par les unités productrices résidentes."
    },
    {
        id: 7,
        category: "Économie et finances publiques",
        type: "boolean",
        question: "Si le taux d'inflation passe de 6 % à 2 %, cela signifie que le niveau général des prix diminue.",
        options: ["Vrai", "Faux"],
        answer: "Faux",
        explanation: "Une inflation positive plus faible signifie que les prix augmentent moins rapidement, et non qu'ils diminuent."
    },
    {
        id: 8,
        category: "Économie et finances publiques",
        type: "single",
        question: "Dans une représentation simplifiée des finances publiques, quand parle-t-on de déficit public ?",
        options: [
            "Lorsque les dépenses publiques dépassent les recettes publiques",
            "Lorsque les recettes publiques dépassent les dépenses publiques",
            "Lorsque la dette publique diminue",
            "Lorsque les exportations dépassent les importations"
        ],
        answer: "Lorsque les dépenses publiques dépassent les recettes publiques",
        explanation: "Le déficit correspond à un besoin de financement des administrations publiques sur une période donnée."
    },
    {
        id: 9,
        category: "Économie et finances publiques",
        type: "single",
        question: "Quelle est la différence principale entre la dette publique et le déficit public ?",
        options: [
            "Les deux désignent exactement la même chose",
            "La dette est un flux et le déficit est un stock",
            "La dette concerne uniquement les entreprises privées",
            "La dette est un stock et le déficit est un flux"
        ],
        answer: "La dette est un stock et le déficit est un flux",
        explanation: "La dette est mesurée à une date donnée, tandis que le déficit est mesuré sur une période."
    },


    // PARTIE III — HISTOIRE

    {
        id: 10,
        category: "Histoire politique française",
        type: "text",
        question: "En quelle année la Constitution de la Ve République a-t-elle été adoptée ?",
        answer: "1958",
        explanation: "La Constitution de la Ve République a été approuvée par référendum et promulguée en 1958."
    },
    {
        id: 11,
        category: "Histoire politique française",
        type: "text",
        question: "En quelle année les femmes ont-elles obtenu le droit de vote en France ?",
        answer: "1944",
        explanation: "Le droit de vote des femmes a été reconnu par l'ordonnance du 21 avril 1944. Elles ont voté pour la première fois en 1945."
    },
    {
        id: 12,
        category: "Histoire politique française",
        type: "single",
        question: "En quelle année la Déclaration des droits de l'homme et du citoyen a-t-elle été adoptée ?",
        options: [
            "1792",
            "1789",
            "1848",
            "1799"
        ],
        answer: "1789",
        explanation: "La Déclaration des droits de l'homme et du citoyen a été adoptée le 26 août 1789."
    },


    // PARTIE IV — UNION EUROPEENNE

    {
        id: 13,
        category: "Union européenne et géopolitique",
        type: "single",
        question: "Quelle institution conduit la politique monétaire de la zone euro avec les banques centrales nationales de cette zone ?",
        options: [
            "La Commission européenne",
            "Le Parlement européen",
            "La Banque centrale européenne",
            "Le Conseil européen"
        ],
        answer: "La Banque centrale européenne",
        explanation: "La BCE et les banques centrales nationales de la zone euro constituent l'Eurosystème."
    },
    {
        id: 14,
        category: "Union européenne et géopolitique",
        type: "single",
        question: "Quelle institution de l'Union européenne est directement élue par les citoyens européens ?",
        options: [
            "La Commission européenne",
            "Le Conseil européen",
            "Le Conseil de l'Union européenne",
            "Le Parlement européen"
        ],
        answer: "Le Parlement européen",
        explanation: "Les députés européens sont élus directement par les citoyens de l'Union européenne."
    },
    {
        id: 15,
        category: "Union européenne et géopolitique",
        type: "boolean",
        question: "La France est membre permanent du Conseil de sécurité de l'ONU.",
        options: ["Vrai", "Faux"],
        answer: "Vrai",
        explanation: "La France fait partie des cinq membres permanents du Conseil de sécurité des Nations unies."
    },


    // PARTIE V — DROITS ET DEVOIRS

    {
        id: 16,
        category: "Droits et devoirs des citoyens",
        type: "multiple",
        question: "Selon l'article 3 de la Constitution, quelles sont les caractéristiques du suffrage ?",
        options: [
            "Universel",
            "Égal",
            "Obligatoire",
            "Secret"
        ],
        answer: [
            "Universel",
            "Égal",
            "Secret"
        ],
        explanation: "La Constitution prévoit que le suffrage est toujours universel, égal et secret."
    },
    {
        id: 17,
        category: "Droits et devoirs des citoyens",
        type: "boolean",
        question: "Le vote à l'élection présidentielle française est juridiquement obligatoire.",
        options: ["Vrai", "Faux"],
        answer: "Faux",
        explanation: "Le vote à l'élection présidentielle est un droit. L'abstention n'est pas sanctionnée."
    },
    {
        id: 18,
        category: "Droits et devoirs des citoyens",
        type: "boolean",
        question: "Lors de l'élection présidentielle française, les votes blancs sont comptabilisés parmi les suffrages exprimés.",
        options: ["Vrai", "Faux"],
        answer: "Faux",
        explanation: "Les votes blancs sont décomptés séparément, mais ne sont pas inclus dans les suffrages exprimés."
    },


    // PARTIE VI — RAISONNEMENT

    {
        id: 19,
        category: "Raisonnement et analyse",
        type: "single",
        question: "Un salaire augmente de 2 %, alors que les prix augmentent de 5 %. Comment évolue le pouvoir d'achat de ce salaire ?",
        options: [
            "Il augmente",
            "Il diminue",
            "Il reste identique",
            "Il double"
        ],
        answer: "Il diminue",
        explanation: "Le salaire augmente moins rapidement que les prix. Il permet donc d'acheter moins de biens et services."
    },
    {
        id: 20,
        category: "Raisonnement et analyse",
        type: "single",
        question: "Le taux de chômage passe de 10 % à 8 %. Quelle affirmation est mathématiquement correcte ?",
        options: [
            "Il diminue de 2 % en valeur relative",
            "Il diminue de 8 points de pourcentage",
            "Il diminue de 20 points de pourcentage",
            "Il diminue de 2 points de pourcentage"
        ],
        answer: "Il diminue de 2 points de pourcentage",
        explanation: "La différence est de 10 - 8 = 2 points de pourcentage, soit une baisse relative de 20 %."
    }

];
