export const perguntas = [
    {
        enunciado: "Qual é a organela celular responsável pela respiração celular e produção de energia (ATP)?",
        alternativas: [
            {
                texto: "Mitocôndria",
                afirmacao: [
                    "Correto!",
                    "As mitocôndrias são conhecidas como as 'usinas de energia' da célula."
                ],
                proxima: 1,
            },
            {
                texto: "Ribossomo",
                afirmacao: [
                    "Incorreto.",
                    "Os ribossomos são responsáveis pela síntese de proteínas, não pela produção de energia."
                ],
                proxima: 1,
            }
        ]
    },
    {
        enunciado: "Qual processo as plantas usam para converter luz solar em energia química (glicose)?",
        alternativas: [
            {
                texto: "Fotossíntese",
                afirmacao: [
                    "Excelente!",
                    "A fotossíntese é fundamental para a vida na Terra, pois produz oxigênio e a base da maioria das cadeias alimentares."
                ],
                proxima: 2,
            },
            {
                texto: "Respiração",
                afirmacao: [
                    "Não é bem isso.",
                    "As plantas também respiram, mas a fotossíntese é o processo de conversão de luz em energia."
                ],
                proxima: 2,
            }
        ]
    },
    {
        enunciado: "O que é o DNA?",
        alternativas: [
            {
                texto: "Uma proteína que transporta oxigênio.",
                afirmacao: [
                    "Resposta errada.",
                    "A molécula que transporta oxigênio é a hemoglobina. O DNA carrega informações genéticas."
                ],
                proxima: 3,
            },
            {
                texto: "A molécula que carrega as instruções genéticas dos seres vivos.",
                afirmacao: [
                    "Isso mesmo!",
                    "O DNA (Ácido Desoxirribonucleico) contém todas as informações para o desenvolvimento e funcionamento de um organismo."
                ],
                proxima: 3,
            }
        ]
    },
    {
        enunciado: "Qual dos reinos a seguir é composto por organismos procariontes (sem núcleo celular definido)?",
        alternativas: [
            {
                texto: "Reino Monera",
                afirmacao: [
                    "Perfeito!",
                    "O Reino Monera inclui as bactérias e cianobactérias, que são exemplos clássicos de seres procariontes."
                ],
                proxima: 4,
            },
            {
                texto: "Reino Fungi",
                afirmacao: [
                    "Incorreto.",
                    "Os fungos, como cogumelos e leveduras, são eucariontes, ou seja, suas células possuem um núcleo definido."
                ],
                proxima: 4,
            }
        ]
    },
    {
        enunciado: "Como é chamado o processo de divisão celular que resulta em duas células-filhas geneticamente idênticas?",
        alternativas: [
            {
                texto: "Meiose",
                afirmacao: [
                    "Quase lá!",
                    "A meiose é o processo que produz gametas (células sexuais) com metade do material genético."
                ],
                // A última pergunta não precisa da propriedade "proxima"
            },
            {
                texto: "Mitose",
                afirmacao: [
                    "Exato!",
                    "A mitose é crucial para o crescimento, reparo de tecidos e reprodução assexuada."
                ],
                 // A última pergunta não precisa da propriedade "proxima"
            }
        ]
    }
];