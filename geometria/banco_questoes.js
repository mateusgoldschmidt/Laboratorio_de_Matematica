// ========================================================================
// BANCO DE QUESTÕES DE GEOMETRIA ESPACIAL - ENSINO MÉDIO
// Total: 90 questões categorizadas em 9 tópicos
// Arquivo gerado para integração direta no GitHub Pages
// ========================================================================

const TOPICOS_INFO = {
  "fundamentos": "Fundamentos & Posições Relativas",
  "poliedros": "Poliedros & Teorema de Euler",
  "prismas": "Prismas, Paralelepípedos e Cubos",
  "piramides": "Pirâmides & Tetraedro Regular",
  "cilindros": "Cilindros",
  "cones": "Cones",
  "troncos": "Troncos (Pirâmide e Cone)",
  "esferas": "Esferas e Partes",
  "inscricao_semelhanca": "Inscrição, Circunscrição & Semelhança"
};

const BANCO_QUESTOES = [
  {
    "id": 101,
    "topico": "fundamentos",
    "q": "Quantos pontos não colineares são necessários e suficientes para determinar um único plano no espaço?",
    "options": [
      {
        "type": "text",
        "content": "Apenas dois pontos",
        "label": ""
      },
      {
        "type": "text",
        "content": "Três pontos não colineares",
        "label": ""
      },
      {
        "type": "text",
        "content": "Quatro pontos coplanares",
        "label": ""
      },
      {
        "type": "text",
        "content": "Infinitos pontos",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "Por postulado de Euclides, três pontos não colineares determinam um único plano no espaço."
  },
  {
    "id": 102,
    "topico": "fundamentos",
    "q": "Duas retas distintas contidas no mesmo plano que não possuem ponto em comum são chamadas de:",
    "options": [
      {
        "type": "text",
        "content": "Retas concorrentes",
        "label": ""
      },
      {
        "type": "text",
        "content": "Retas reversas",
        "label": ""
      },
      {
        "type": "text",
        "content": "Retas paralelas",
        "label": ""
      },
      {
        "type": "text",
        "content": "Retas coincidentes",
        "label": ""
      }
    ],
    "ans": 2,
    "explicacao": "Retas coplanares sem interseção são paralelas. Se não fossem coplanares, seriam reversas."
  },
  {
    "id": 103,
    "topico": "fundamentos",
    "q": "Duas retas são chamadas de <strong>reversas</strong> quando:",
    "options": [
      {
        "type": "text",
        "content": "Não pertencem a um mesmo plano (não são coplanares)",
        "label": ""
      },
      {
        "type": "text",
        "content": "Se cruzam formando um ângulo reto",
        "label": ""
      },
      {
        "type": "text",
        "content": "São paralelas e distintas",
        "label": ""
      },
      {
        "type": "text",
        "content": "Possuem infinitos pontos em comum",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "Retas reversas não têm interseção e não existe nenhum plano que contenha ambas simultaneamente."
  },
  {
    "id": 104,
    "topico": "fundamentos",
    "q": "Se uma reta \\(r\\) é perpendicular a duas retas concorrentes de um plano \\(\\alpha\\) no ponto de interseção, então:",
    "options": [
      {
        "type": "text",
        "content": "\\(r\\) é oblíqua a \\(\\alpha\\)",
        "label": ""
      },
      {
        "type": "text",
        "content": "\\(r\\) é paralela a \\(\\alpha\\)",
        "label": ""
      },
      {
        "type": "text",
        "content": "\\(r\\) é perpendicular ao plano \\(\\alpha\\)",
        "label": ""
      },
      {
        "type": "text",
        "content": "\\(r\\) está contida em \\(\\alpha\\)",
        "label": ""
      }
    ],
    "ans": 2,
    "explicacao": "Condição de perpendicularismo reta-plano: ser perpendicular a duas concorrentes do plano garante que a reta é perpendicular a todo o plano."
  },
  {
    "id": 105,
    "topico": "fundamentos",
    "q": "A projeção ortogonal de um segmento de reta não perpendicular sobre um plano é:",
    "options": [
      {
        "type": "text",
        "content": "Um ponto",
        "label": ""
      },
      {
        "type": "text",
        "content": "Um círculo",
        "label": ""
      },
      {
        "type": "text",
        "content": "Um segmento de reta de comprimento menor ou igual",
        "label": ""
      },
      {
        "type": "text",
        "content": "Uma parábola",
        "label": ""
      }
    ],
    "ans": 2,
    "explicacao": "A projeção ortogonal mede L' = L * cos(θ), sendo sempre um segmento de reta menor ou igual ao original."
  },
  {
    "id": 106,
    "topico": "fundamentos",
    "q": "Se dois planos distintos são paralelos a um terceiro plano, então entre si eles são:",
    "options": [
      {
        "type": "text",
        "content": "Paralelos",
        "label": ""
      },
      {
        "type": "text",
        "content": "Secantes",
        "label": ""
      },
      {
        "type": "text",
        "content": "Perpendiculares",
        "label": ""
      },
      {
        "type": "text",
        "content": "Reversos",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "Pela transitividade do paralelismo: se α // γ e β // γ, então α // β."
  },
  {
    "id": 107,
    "topico": "fundamentos",
    "q": "A interseção de dois planos secantes distintos é sempre:",
    "options": [
      {
        "type": "text",
        "content": "Um ponto único",
        "label": ""
      },
      {
        "type": "text",
        "content": "Uma reta",
        "label": ""
      },
      {
        "type": "text",
        "content": "Um segmento de reta finito",
        "label": ""
      },
      {
        "type": "text",
        "content": "Uma curva parabólica",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "Dois planos distintos que têm um ponto em comum compartilham obrigatoriamente uma reta inteira."
  },
  {
    "id": 108,
    "topico": "fundamentos",
    "q": "Qual das seguintes configurações NÃO determina um único plano no espaço?",
    "options": [
      {
        "type": "text",
        "content": "Uma reta e um ponto fora dela",
        "label": ""
      },
      {
        "type": "text",
        "content": "Duas retas concorrentes",
        "label": ""
      },
      {
        "type": "text",
        "content": "Duas retas paralelas distintas",
        "label": ""
      },
      {
        "type": "text",
        "content": "Duas retas reversas",
        "label": ""
      }
    ],
    "ans": 3,
    "explicacao": "Retas reversas não são coplanares por definição, portanto não determinam um plano."
  },
  {
    "id": 109,
    "topico": "fundamentos",
    "q": "Se uma reta \\(r\\) é perpendicular a um plano \\(\\alpha\\), a projeção ortogonal de \\(r\\) sobre \\(\\alpha\\) é:",
    "options": [
      {
        "type": "text",
        "content": "Um único ponto",
        "label": ""
      },
      {
        "type": "text",
        "content": "A própria reta \\(r\\)",
        "label": ""
      },
      {
        "type": "text",
        "content": "Uma reta perpendicular",
        "label": ""
      },
      {
        "type": "text",
        "content": "Um plano",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "Todos os pontos de uma reta perpendicular projetam-se no mesmo ponto de perfuração do plano."
  },
  {
    "id": 110,
    "topico": "fundamentos",
    "q": "Dadas três retas distintas \\(r, s, t\\) no espaço, se \\(r \\perp s\\) e \\(s \\perp t\\), podemos garantir que:",
    "options": [
      {
        "type": "text",
        "content": "\\(r\\) e \\(t\\) são obrigatoriamente paralelas",
        "label": ""
      },
      {
        "type": "text",
        "content": "\\(r\\) e \\(t\\) podem ser concorrentes, paralelas ou reversas",
        "label": ""
      },
      {
        "type": "text",
        "content": "\\(r\\) e \\(t\\) são obrigatoriamente concorrentes",
        "label": ""
      },
      {
        "type": "text",
        "content": "\\(r\\) e \\(t\\) são coincidentes",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "No espaço 3D, duas retas perpendiculares a uma terceira podem assumir qualquer posição relativa (paralelas, concorrentes ou reversas)."
  },
  {
    "id": 201,
    "topico": "poliedros",
    "q": "A Relação de Euler para poliedros convexos com \\(V\\) vértices, \\(A\\) arestas e \\(F\\) faces é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(V + A - F = 2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V - A + F = 2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V + F + A = 2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V - F + A = 2\\)",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "A Relação de Euler é V - A + F = 2 (ou V + F = A + 2)."
  },
  {
    "id": 202,
    "topico": "poliedros",
    "q": "Um poliedro convexo possui 6 vértices e 8 faces. Quantas arestas ele possui?",
    "options": [
      {
        "type": "latex",
        "content": "\\(10\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(12\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(14\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(16\\)",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "V - A + F = 2 => 6 - A + 8 = 2 => 14 - A = 2 => A = 12 arestas (é o octaedro!)."
  },
  {
    "id": 203,
    "topico": "poliedros",
    "q": "A soma dos ângulos de todas as faces de um poliedro convexo com \\(V\\) vértices é dada por:",
    "options": [
      {
        "type": "latex",
        "content": "\\(S = (V - 2) \\cdot 360^\\circ\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(S = (V - 2) \\cdot 180^\\circ\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(S = (A - 2) \\cdot 360^\\circ\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(S = (F - 2) \\cdot 360^\\circ\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "A soma dos ângulos das faces de qualquer poliedro convexo é sempre S = (V - 2) * 360°."
  },
  {
    "id": 204,
    "topico": "poliedros",
    "q": "Quantos são os Poliedros Regulares de Platão na geometria euclidiana?",
    "options": [
      {
        "type": "text",
        "content": "3",
        "label": ""
      },
      {
        "type": "text",
        "content": "4",
        "label": ""
      },
      {
        "type": "text",
        "content": "5",
        "label": ""
      },
      {
        "type": "text",
        "content": "6",
        "label": ""
      }
    ],
    "ans": 2,
    "explicacao": "Existem exatamente 5 poliedros de Platão: Tetraedro, Hexaedro, Octaedro, Dodecaedro e Icosaedro."
  },
  {
    "id": 205,
    "topico": "poliedros",
    "q": "O poliedro regular de Platão cujas faces são 12 pentágonos regulares é o:",
    "options": [
      {
        "type": "text",
        "content": "Octaedro",
        "label": ""
      },
      {
        "type": "text",
        "content": "Dodecaedro",
        "label": ""
      },
      {
        "type": "text",
        "content": "Icosaedro",
        "label": ""
      },
      {
        "type": "text",
        "content": "Tetraedro",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "O Dodecaedro regular possui 12 faces pentagonais, 20 vértices e 30 arestas."
  },
  {
    "id": 206,
    "topico": "poliedros",
    "q": "O poliedro regular que possui 20 faces triangulares equiláteras é o:",
    "options": [
      {
        "type": "text",
        "content": "Icosaedro",
        "label": ""
      },
      {
        "type": "text",
        "content": "Dodecaedro",
        "label": ""
      },
      {
        "type": "text",
        "content": "Octaedro",
        "label": ""
      },
      {
        "type": "text",
        "content": "Hexaedro",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "O Icosaedro possui 20 faces triangulares equiláteras, 12 vértices e 30 arestas."
  },
  {
    "id": 207,
    "topico": "poliedros",
    "q": "Um poliedro convexo tem 6 faces quadrangulares e 8 faces triangulares. Quantas arestas ele possui?",
    "options": [
      {
        "type": "latex",
        "content": "\\(24\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(14\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(48\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(18\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "2A = (6 * 4) + (8 * 3) = 24 + 24 = 48 => A = 24 arestas."
  },
  {
    "id": 208,
    "topico": "poliedros",
    "q": "Em um poliedro com \\(V = 8\\) vértices (como o cubo), a soma dos ângulos de todas as faces vale:",
    "options": [
      {
        "type": "latex",
        "content": "\\(1080^\\circ\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(1440^\\circ\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(2160^\\circ\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(2880^\\circ\\)",
        "label": ""
      }
    ],
    "ans": 2,
    "explicacao": "S = (V - 2) * 360° = (8 - 2) * 360° = 6 * 360° = 2160°."
  },
  {
    "id": 209,
    "topico": "poliedros",
    "q": "Qual poliedro regular de Platão é autodual (o poliedro formado pelos centros de suas faces é semelhante a ele mesmo)?",
    "options": [
      {
        "type": "text",
        "content": "Hexaedro (Cubo)",
        "label": ""
      },
      {
        "type": "text",
        "content": "Tetraedro regular",
        "label": ""
      },
      {
        "type": "text",
        "content": "Octaedro regular",
        "label": ""
      },
      {
        "type": "text",
        "content": "Dodecaedro regular",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "O tetraedro regular possui 4 vértices e 4 faces (V = F = 4), sendo autodual."
  },
  {
    "id": 210,
    "topico": "poliedros",
    "q": "Selecione a figura que representa uma planificação com 6 faces quadradas de um hexaedro regular (cubo).",
    "options": [
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"rgba(99, 102, 241, 0.25)\" stroke=\"#818cf8\" stroke-width=\"2\"><rect x=\"80\" y=\"20\" width=\"35\" height=\"35\"/><rect x=\"45\" y=\"55\" width=\"35\" height=\"35\"/><rect x=\"80\" y=\"55\" width=\"35\" height=\"35\"/><rect x=\"115\" y=\"55\" width=\"35\" height=\"35\"/><rect x=\"150\" y=\"55\" width=\"35\" height=\"35\"/><rect x=\"80\" y=\"90\" width=\"35\" height=\"35\"/></g></svg>",
        "label": "Cruz de 6 quadrados"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"50\" width=\"140\" height=\"70\" fill=\"rgba(59, 130, 246, 0.25)\" stroke=\"#60a5fa\" stroke-width=\"2\"/><circle cx=\"100\" cy=\"28\" r=\"20\" fill=\"rgba(59, 130, 246, 0.4)\" stroke=\"#93c5fd\" stroke-width=\"2\"/><circle cx=\"100\" cy=\"142\" r=\"20\" fill=\"rgba(59, 130, 246, 0.4)\" stroke=\"#93c5fd\" stroke-width=\"2\"/></svg>",
        "label": "Retângulo com círculos"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 140 L30 40 A90 90 0 0 1 170 40 Z\" fill=\"rgba(244, 114, 182, 0.2)\" stroke=\"#f9a8d4\" stroke-width=\"3\" stroke-linejoin=\"round\"/><circle cx=\"100\" cy=\"140\" r=\"4\" fill=\"#facc15\"/></svg>",
        "label": "Setor circular"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"40\" width=\"120\" height=\"100\" rx=\"6\" fill=\"rgba(74, 222, 128, 0.2)\" stroke=\"#86efac\" stroke-width=\"3\"/></svg>",
        "label": "Retângulo isolado"
      }
    ],
    "ans": 0,
    "explicacao": "A planificação do cubo é composta por 6 quadrados unidos nas arestas que formam o sólido ao dobrar."
  },
  {
    "id": 301,
    "topico": "prismas",
    "q": "O volume de um prisma qualquer de área da base \\(A_b\\) e altura \\(h\\) é calculado por:",
    "options": [
      {
        "type": "latex",
        "content": "\\(V = \\frac{1}{3} A_b \\cdot h\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = A_b \\cdot h\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = 2 A_b \\cdot h\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{1}{2} A_b \\cdot h\\)",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "O volume de qualquer prisma é dado pelo produto da área da base pela altura: V = Ab * h."
  },
  {
    "id": 302,
    "topico": "prismas",
    "q": "A diagonal espacial \\(D\\) de um paralelepípedo reto-retângulo de dimensões \\(a, b, c\\) é dada por:",
    "options": [
      {
        "type": "latex",
        "content": "\\(D = a + b + c\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(D = \\sqrt{a^2 + b^2 + c^2}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(D = a^2 + b^2 + c^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(D = \\sqrt{ab + ac + bc}\\)",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "Aplicando Pitágoras sucessivas vezes: D = √(a² + b² + c²)."
  },
  {
    "id": 303,
    "topico": "prismas",
    "q": "Um cubo tem aresta \\(a = 4\\text{ cm}\\). Sua diagonal espacial \\(D\\) e seu volume \\(V\\) são:",
    "options": [
      {
        "type": "latex",
        "content": "\\(D = 4\\sqrt{3}\\text{ cm} \\quad\\text{e}\\quad V = 64\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(D = 4\\sqrt{2}\\text{ cm} \\quad\\text{e}\\quad V = 16\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(D = 12\\text{ cm} \\quad\\text{e}\\quad V = 64\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(D = 4\\sqrt{3}\\text{ cm} \\quad\\text{e}\\quad V = 96\\text{ cm}^3\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "D = a√3 = 4√3 cm e V = a³ = 4³ = 64 cm³."
  },
  {
    "id": 304,
    "topico": "prismas",
    "q": "A área total \\(A_t\\) de um cubo de aresta \\(a\\) é calculada por:",
    "options": [
      {
        "type": "latex",
        "content": "\\(4a^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(6a^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(a^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(12a\\)",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "O cubo possui 6 faces quadradas congruentes de área a², logo At = 6a²."
  },
  {
    "id": 305,
    "topico": "prismas",
    "q": "Selecione a figura que representa um prisma regular de base hexagonal.",
    "options": [
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"80,30 120,30 145,50 130,70 90,70 65,50\" fill=\"rgba(16, 185, 129, 0.4)\" stroke=\"#34d399\" stroke-width=\"2\"/><line x1=\"65\" y1=\"50\" x2=\"65\" y2=\"130\" stroke=\"#10b981\" stroke-width=\"2\"/><line x1=\"90\" y1=\"70\" x2=\"90\" y2=\"150\" stroke=\"#10b981\" stroke-width=\"2\"/><line x1=\"130\" y1=\"70\" x2=\"130\" y2=\"150\" stroke=\"#10b981\" stroke-width=\"2\"/><line x1=\"145\" y1=\"50\" x2=\"145\" y2=\"130\" stroke=\"#10b981\" stroke-width=\"2\"/><polygon points=\"65,130 90,150 130,150 145,130\" fill=\"rgba(16, 185, 129, 0.2)\" stroke=\"#34d399\" stroke-width=\"2\"/></svg>",
        "label": "Prisma Hexagonal"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"50,60 110,60 110,120 50,120\" fill=\"rgba(99, 102, 241, 0.2)\" stroke=\"#818cf8\" stroke-width=\"2\"/><polygon points=\"110,60 150,30 150,90 110,120\" fill=\"rgba(99, 102, 241, 0.35)\" stroke=\"#a5b4fc\" stroke-width=\"2\"/><polygon points=\"50,60 90,30 150,30 110,60\" fill=\"rgba(99, 102, 241, 0.5)\" stroke=\"#c7d2fe\" stroke-width=\"2\"/><line x1=\"50\" y1=\"120\" x2=\"150\" y2=\"30\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"4 3\"/></svg>",
        "label": "Cubo"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"100\" cy=\"140\" rx=\"50\" ry=\"16\" fill=\"rgba(16, 185, 129, 0.2)\" stroke=\"#34d399\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><path d=\"M50 45 L50 140 A50 16 0 0 0 150 140 L150 45 Z\" fill=\"rgba(16, 185, 129, 0.35)\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><ellipse cx=\"100\" cy=\"45\" rx=\"50\" ry=\"16\" fill=\"rgba(16, 185, 129, 0.6)\" stroke=\"#a7f3d0\" stroke-width=\"2\"/></svg>",
        "label": "Cilindro"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,70 120,70 120,130 30,130\" fill=\"rgba(6, 182, 212, 0.2)\" stroke=\"#22d3ee\" stroke-width=\"2\"/><polygon points=\"120,70 170,40 170,100 120,130\" fill=\"rgba(6, 182, 212, 0.35)\" stroke=\"#67e8f9\" stroke-width=\"2\"/><polygon points=\"30,70 80,40 170,40 120,70\" fill=\"rgba(6, 182, 212, 0.5)\" stroke=\"#a5f3fc\" stroke-width=\"2\"/></svg>",
        "label": "Paralelepípedo"
      }
    ],
    "ans": 0,
    "explicacao": "A figura ilustra um prisma regular cujas bases são hexágonos regulares paralelos."
  },
  {
    "id": 306,
    "topico": "prismas",
    "q": "Uma piscina retangular tem dimensões \\(2\\text{ m} \\times 3\\text{ m} \\times 1{,}5\\text{ m}\\). Sua capacidade máxima em litros é:",
    "options": [
      {
        "type": "text",
        "content": "900 litros",
        "label": ""
      },
      {
        "type": "text",
        "content": "9.000 litros",
        "label": ""
      },
      {
        "type": "text",
        "content": "90.000 litros",
        "label": ""
      },
      {
        "type": "text",
        "content": "4.500 litros",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "V = 2 * 3 * 1,5 = 9 m³. Como 1 m³ = 1.000 L, temos 9 * 1.000 = 9.000 litros."
  },
  {
    "id": 307,
    "topico": "prismas",
    "q": "Em um prisma triangular regular, as bases superior e inferior são:",
    "options": [
      {
        "type": "text",
        "content": "Triângulos retângulos",
        "label": ""
      },
      {
        "type": "text",
        "content": "Triângulos equiláteros",
        "label": ""
      },
      {
        "type": "text",
        "content": "Triângulos isósceles quaisquer",
        "label": ""
      },
      {
        "type": "text",
        "content": "Triângulos escalenos",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "Por definição, prisma regular é um prisma reto cujas bases são polígonos regulares (no caso triangular, triângulos equiláteros)."
  },
  {
    "id": 308,
    "topico": "prismas",
    "q": "A diagonal de uma face de um cubo mede \\(6\\sqrt{2}\\text{ cm}\\). O volume desse cubo é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(36\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(72\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(216\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(512\\text{ cm}^3\\)",
        "label": ""
      }
    ],
    "ans": 2,
    "explicacao": "df = a√2 = 6√2 => a = 6 cm. V = a³ = 6³ = 216 cm³."
  },
  {
    "id": 309,
    "topico": "prismas",
    "q": "Se duplicarmos todas as 3 dimensões de um paralelepípedo retângulo, o seu volume ficará multiplicado por:",
    "options": [
      {
        "type": "text",
        "content": "2",
        "label": ""
      },
      {
        "type": "text",
        "content": "4",
        "label": ""
      },
      {
        "type": "text",
        "content": "6",
        "label": ""
      },
      {
        "type": "text",
        "content": "8",
        "label": ""
      }
    ],
    "ans": 3,
    "explicacao": "V' = (2a)(2b)(2c) = 8(abc) = 8V. A razão entre volumes é k³ = 2³ = 8."
  },
  {
    "id": 310,
    "topico": "prismas",
    "q": "Selecione a figura que representa um cubo destacando a sua diagonal interna.",
    "options": [
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"50,60 110,60 110,120 50,120\" fill=\"rgba(99, 102, 241, 0.2)\" stroke=\"#818cf8\" stroke-width=\"2\"/><polygon points=\"110,60 150,30 150,90 110,120\" fill=\"rgba(99, 102, 241, 0.35)\" stroke=\"#a5b4fc\" stroke-width=\"2\"/><polygon points=\"50,60 90,30 150,30 110,60\" fill=\"rgba(99, 102, 241, 0.5)\" stroke=\"#c7d2fe\" stroke-width=\"2\"/><line x1=\"50\" y1=\"120\" x2=\"150\" y2=\"30\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"4 3\"/></svg>",
        "label": "Cubo com diagonal"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,70 120,70 120,130 30,130\" fill=\"rgba(6, 182, 212, 0.2)\" stroke=\"#22d3ee\" stroke-width=\"2\"/><polygon points=\"120,70 170,40 170,100 120,130\" fill=\"rgba(6, 182, 212, 0.35)\" stroke=\"#67e8f9\" stroke-width=\"2\"/><polygon points=\"30,70 80,40 170,40 120,70\" fill=\"rgba(6, 182, 212, 0.5)\" stroke=\"#a5f3fc\" stroke-width=\"2\"/></svg>",
        "label": "Paralelepípedo"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"100,25 35,135 115,150\" fill=\"rgba(236, 72, 153, 0.25)\" stroke=\"#f472b6\" stroke-width=\"2\"/><polygon points=\"100,25 115,150 165,115\" fill=\"rgba(236, 72, 153, 0.45)\" stroke=\"#fbcfe8\" stroke-width=\"2\"/><line x1=\"35\" y1=\"135\" x2=\"165\" y2=\"115\" stroke=\"#ec4899\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/></svg>",
        "label": "Tetraedro"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"80,30 120,30 145,50 130,70 90,70 65,50\" fill=\"rgba(16, 185, 129, 0.4)\" stroke=\"#34d399\" stroke-width=\"2\"/><line x1=\"65\" y1=\"50\" x2=\"65\" y2=\"130\" stroke=\"#10b981\" stroke-width=\"2\"/><line x1=\"90\" y1=\"70\" x2=\"90\" y2=\"150\" stroke=\"#10b981\" stroke-width=\"2\"/><line x1=\"130\" y1=\"70\" x2=\"130\" y2=\"150\" stroke=\"#10b981\" stroke-width=\"2\"/><line x1=\"145\" y1=\"50\" x2=\"145\" y2=\"130\" stroke=\"#10b981\" stroke-width=\"2\"/><polygon points=\"65,130 90,150 130,150 145,130\" fill=\"rgba(16, 185, 129, 0.2)\" stroke=\"#34d399\" stroke-width=\"2\"/></svg>",
        "label": "Prisma hexagonal"
      }
    ],
    "ans": 0,
    "explicacao": "O cubo com o segmento vermelho tracejado ilustra a diagonal interna D = a√3."
  },
  {
    "id": 401,
    "topico": "piramides",
    "q": "O volume de qualquer pirâmide de área da base \\(A_b\\) e altura \\(h\\) é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(V = A_b \\cdot h\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{1}{3} A_b \\cdot h\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{1}{2} A_b \\cdot h\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{2}{3} A_b \\cdot h\\)",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "O volume de qualquer pirâmide é um terço da área da base pela altura: V = (1/3) * Ab * h."
  },
  {
    "id": 402,
    "topico": "piramides",
    "q": "Em uma pirâmide regular, a relação métrica entre a altura \\(h\\), o apótema da base \\(m\\) e o apótema da pirâmide \\(g\\) é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(g^2 = h^2 + m^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(h^2 = g^2 + m^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(m^2 = h^2 + g^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(g = h + m\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "O apótema da pirâmide (g), a altura (h) e o apótema da base (m) formam um triângulo retângulo onde g é a hipotenusa: g² = h² + m²."
  },
  {
    "id": 403,
    "topico": "piramides",
    "q": "Uma pirâmide regular de base quadrada tem aresta da base \\(6\\text{ cm}\\) e altura \\(4\\text{ cm}\\). O apótema da pirâmide mede:",
    "options": [
      {
        "type": "latex",
        "content": "\\(5\\text{ cm}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(6\\text{ cm}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(7\\text{ cm}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(8\\text{ cm}\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "O apótema da base quadrada é m = L/2 = 3 cm. Logo, g² = 4² + 3² = 16 + 9 = 25 => g = 5 cm."
  },
  {
    "id": 404,
    "topico": "piramides",
    "q": "O tetraedro regular de aresta \\(a\\) possui 4 faces triangulares equiláteras. Sua área total \\(A_t\\) é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(a^2\\sqrt{3}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(4a^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(2a^2\\sqrt{3}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(\\frac{a^2\\sqrt{3}}{4}\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "At = 4 * (a²√3 / 4) = a²√3."
  },
  {
    "id": 405,
    "topico": "piramides",
    "q": "A altura \\(h\\) de um tetraedro regular de aresta \\(a\\) é dada por:",
    "options": [
      {
        "type": "latex",
        "content": "\\(h = \\frac{a\\sqrt{6}}{3}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(h = \\frac{a\\sqrt{3}}{2}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(h = \\frac{a\\sqrt{2}}{3}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(h = a\\sqrt{6}\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "Por Pitágoras no tetraedro regular: h = a√6 / 3."
  },
  {
    "id": 406,
    "topico": "piramides",
    "q": "O volume \\(V\\) de um tetraedro regular de aresta \\(a\\) vale:",
    "options": [
      {
        "type": "latex",
        "content": "\\(V = \\frac{a^3\\sqrt{2}}{12}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{a^3\\sqrt{3}}{6}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{a^3\\sqrt{6}}{12}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{a^3}{3}\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "V = (1/3) * (a²√3 / 4) * (a√6 / 3) = a³√18 / 36 = a³√2 / 12."
  },
  {
    "id": 407,
    "topico": "piramides",
    "q": "Uma pirâmide reta de base quadrada tem aresta da base \\(10\\text{ cm}\\) e altura \\(12\\text{ cm}\\). Seu volume vale:",
    "options": [
      {
        "type": "latex",
        "content": "\\(400\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(1200\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(600\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(240\\text{ cm}^3\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "Ab = 10² = 100 cm². V = (1/3) * 100 * 12 = 400 cm³."
  },
  {
    "id": 408,
    "topico": "piramides",
    "q": "Selecione a figura que representa uma pirâmide regular de base quadrangular.",
    "options": [
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"100,20 40,120 120,140\" fill=\"rgba(245, 158, 11, 0.3)\" stroke=\"#fbbf24\" stroke-width=\"2\"/><polygon points=\"100,20 120,140 160,110\" fill=\"rgba(245, 158, 11, 0.45)\" stroke=\"#fde68a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"120\" x2=\"80\" y2=\"90\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><line x1=\"80\" y1=\"90\" x2=\"160\" y2=\"110\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><line x1=\"100\" y1=\"20\" x2=\"80\" y2=\"90\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"115\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"3 3\"/></svg>",
        "label": "Pirâmide Quadrangular"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"100\" cy=\"140\" rx=\"55\" ry=\"18\" fill=\"rgba(59, 130, 246, 0.15)\" stroke=\"#60a5fa\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><path d=\"M100 20 L45 140 A55 18 0 0 0 155 140 Z\" fill=\"rgba(59, 130, 246, 0.4)\" stroke=\"#93c5fd\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#facc15\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/></svg>",
        "label": "Cone Reto"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"100,25 35,135 115,150\" fill=\"rgba(236, 72, 153, 0.25)\" stroke=\"#f472b6\" stroke-width=\"2\"/><polygon points=\"100,25 115,150 165,115\" fill=\"rgba(236, 72, 153, 0.45)\" stroke=\"#fbcfe8\" stroke-width=\"2\"/><line x1=\"35\" y1=\"135\" x2=\"165\" y2=\"115\" stroke=\"#ec4899\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/></svg>",
        "label": "Tetraedro"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"50,60 110,60 110,120 50,120\" fill=\"rgba(99, 102, 241, 0.2)\" stroke=\"#818cf8\" stroke-width=\"2\"/><polygon points=\"110,60 150,30 150,90 110,120\" fill=\"rgba(99, 102, 241, 0.35)\" stroke=\"#a5b4fc\" stroke-width=\"2\"/><polygon points=\"50,60 90,30 150,30 110,60\" fill=\"rgba(99, 102, 241, 0.5)\" stroke=\"#c7d2fe\" stroke-width=\"2\"/><line x1=\"50\" y1=\"120\" x2=\"150\" y2=\"30\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"4 3\"/></svg>",
        "label": "Cubo"
      }
    ],
    "ans": 0,
    "explicacao": "A figura mostra uma pirâmide de base quadrada com suas faces laterais triangulares unidas no vértice superior."
  },
  {
    "id": 409,
    "topico": "piramides",
    "q": "Uma pirâmide e um prisma possuem a mesma base e a mesma altura. A razão entre seus volumes é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(\\frac{1}{2}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(\\frac{1}{3}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(\\frac{1}{4}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(1\\)",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "V_pirâmide / V_prisma = ((1/3) Ab h) / (Ab h) = 1/3."
  },
  {
    "id": 410,
    "topico": "piramides",
    "q": "As faces laterais de qualquer pirâmide regular reta são:",
    "options": [
      {
        "type": "text",
        "content": "Triângulos isósceles congruentes",
        "label": ""
      },
      {
        "type": "text",
        "content": "Triângulos equiláteros sempre",
        "label": ""
      },
      {
        "type": "text",
        "content": "Triângulos retângulos congruentes",
        "label": ""
      },
      {
        "type": "text",
        "content": "Trapézios isósceles",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "As arestas laterais da pirâmide regular têm mesmo comprimento, tornando todas as faces laterais triângulos isósceles congruentes."
  },
  {
    "id": 501,
    "topico": "cilindros",
    "q": "O cilindro circular reto é obtido pela rotação completa de 360° de qual polígono plano?",
    "options": [
      {
        "type": "text",
        "content": "Triângulo retângulo",
        "label": ""
      },
      {
        "type": "text",
        "content": "Retângulo",
        "label": ""
      },
      {
        "type": "text",
        "content": "Semicírculo",
        "label": ""
      },
      {
        "type": "text",
        "content": "Trapézio",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "A rotação de um retângulo em torno de um de seus lados gera o cilindro circular reto."
  },
  {
    "id": 502,
    "topico": "cilindros",
    "q": "O volume \\(V\\) de um cilindro circular reto de raio \\(r\\) e altura \\(h\\) é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(V = \\pi r^2 h\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{1}{3}\\pi r^2 h\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = 2\\pi rh\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{4}{3}\\pi r^3\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "Volume do cilindro é V = Ab * h = π r² h."
  },
  {
    "id": 503,
    "topico": "cilindros",
    "q": "A área lateral \\(A_l\\) de um cilindro circular reto é dada por:",
    "options": [
      {
        "type": "latex",
        "content": "\\(A_l = 2\\pi rh\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(A_l = \\pi r^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(A_l = \\pi rg\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(A_l = 2\\pi r(r + h)\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "A lateral planificada é um retângulo de dimensões 2πr por h, logo Al = 2πrh."
  },
  {
    "id": 504,
    "topico": "cilindros",
    "q": "Em um <strong>cilindro equilátero</strong>, a seção meridiana é um quadrado. Portanto, sua altura \\(h\\) é igual a:",
    "options": [
      {
        "type": "latex",
        "content": "\\(h = r\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(h = 2r\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(h = r\\sqrt{3}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(h = 4r\\)",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "No cilindro equilátero, a altura é igual ao diâmetro da base: h = 2r."
  },
  {
    "id": 505,
    "topico": "cilindros",
    "q": "Se o raio de um cilindro dobra e sua altura cai pela metade, seu novo volume:",
    "options": [
      {
        "type": "text",
        "content": "Permanece o mesmo",
        "label": ""
      },
      {
        "type": "text",
        "content": "Duplica (fica 2 vezes maior)",
        "label": ""
      },
      {
        "type": "text",
        "content": "Quadruplica (fica 4 vezes maior)",
        "label": ""
      },
      {
        "type": "text",
        "content": "Cai pela metade",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "V' = π(2r)²(h/2) = π(4r²)(h/2) = 2(πr²h) = 2V. O volume dobra."
  },
  {
    "id": 506,
    "topico": "cilindros",
    "q": "Um cilindro circular reto tem raio \\(r = 3\\text{ cm}\\) e altura \\(h = 7\\text{ cm}\\). Seu volume é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(63\\pi\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(21\\pi\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(42\\pi\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(147\\pi\\text{ cm}^3\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "V = π r² h = π (3²) (7) = 9 * 7 * π = 63π cm³."
  },
  {
    "id": 507,
    "topico": "cilindros",
    "q": "A planificação completa da superfície de um cilindro circular reto é constituída por:",
    "options": [
      {
        "type": "text",
        "content": "Dois círculos congruentes e um retângulo",
        "label": ""
      },
      {
        "type": "text",
        "content": "Um círculo e um setor circular",
        "label": ""
      },
      {
        "type": "text",
        "content": "Dois círculos e um setor circular",
        "label": ""
      },
      {
        "type": "text",
        "content": "Três retângulos congruentes",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "As duas bases são círculos idênticos e o contorno lateral forma uma região retangular."
  },
  {
    "id": 508,
    "topico": "cilindros",
    "q": "Em um cilindro equilátero de raio \\(r = 5\\text{ cm}\\), a área total \\(A_t\\) é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(150\\pi\\text{ cm}^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(100\\pi\\text{ cm}^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(50\\pi\\text{ cm}^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(200\\pi\\text{ cm}^2\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "h = 2r = 10 cm. At = 2πr(r + h) = 2π(5)(5 + 10) = 10π(15) = 150π cm²."
  },
  {
    "id": 509,
    "topico": "cilindros",
    "q": "Selecione a figura que representa a planificação de um cilindro circular reto.",
    "options": [
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"50\" width=\"140\" height=\"70\" fill=\"rgba(59, 130, 246, 0.25)\" stroke=\"#60a5fa\" stroke-width=\"2\"/><circle cx=\"100\" cy=\"28\" r=\"20\" fill=\"rgba(59, 130, 246, 0.4)\" stroke=\"#93c5fd\" stroke-width=\"2\"/><circle cx=\"100\" cy=\"142\" r=\"20\" fill=\"rgba(59, 130, 246, 0.4)\" stroke=\"#93c5fd\" stroke-width=\"2\"/></svg>",
        "label": "Retângulo com 2 círculos"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"rgba(99, 102, 241, 0.25)\" stroke=\"#818cf8\" stroke-width=\"2\"><rect x=\"80\" y=\"20\" width=\"35\" height=\"35\"/><rect x=\"45\" y=\"55\" width=\"35\" height=\"35\"/><rect x=\"80\" y=\"55\" width=\"35\" height=\"35\"/><rect x=\"115\" y=\"55\" width=\"35\" height=\"35\"/><rect x=\"150\" y=\"55\" width=\"35\" height=\"35\"/><rect x=\"80\" y=\"90\" width=\"35\" height=\"35\"/></g></svg>",
        "label": "Cruz de quadrados"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 140 L30 40 A90 90 0 0 1 170 40 Z\" fill=\"rgba(244, 114, 182, 0.2)\" stroke=\"#f9a8d4\" stroke-width=\"3\" stroke-linejoin=\"round\"/><circle cx=\"100\" cy=\"140\" r=\"4\" fill=\"#facc15\"/></svg>",
        "label": "Setor circular"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"90\" r=\"55\" fill=\"rgba(34, 211, 238, 0.2)\" stroke=\"#67e8f9\" stroke-width=\"3\"/></svg>",
        "label": "Círculo simples"
      }
    ],
    "ans": 0,
    "explicacao": "A figura mostra o retângulo lateral acompanhado dos círculos que formam topo e base do cilindro."
  },
  {
    "id": 510,
    "topico": "cilindros",
    "q": "A seção transversal de um cilindro circular reto feita por um plano paralelo à base é:",
    "options": [
      {
        "type": "text",
        "content": "Um círculo congruente à base",
        "label": ""
      },
      {
        "type": "text",
        "content": "Uma elipse",
        "label": ""
      },
      {
        "type": "text",
        "content": "Um retângulo",
        "label": ""
      },
      {
        "type": "text",
        "content": "Um triângulo",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "Qualquer corte plano paralelo à base de um cilindro circular reto é um círculo de mesmo raio r da base."
  },
  {
    "id": 601,
    "topico": "cones",
    "q": "O sólido obtido pela revolução completa de um triângulo retângulo em torno de um de seus catetos é:",
    "options": [
      {
        "type": "text",
        "content": "Um cilindro reto",
        "label": ""
      },
      {
        "type": "text",
        "content": "Um cone circular reto",
        "label": ""
      },
      {
        "type": "text",
        "content": "Uma esfera",
        "label": ""
      },
      {
        "type": "text",
        "content": "Um tronco de cone",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "A rotação completa de um triângulo retângulo em torno de um cateto gera um cone reto."
  },
  {
    "id": 602,
    "topico": "cones",
    "q": "Em um cone reto de raio \\(r\\), altura \\(h\\) e geratriz \\(g\\), a relação fundamental de Pitágoras é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(g^2 = r^2 + h^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(h^2 = g^2 + r^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(r^2 = g^2 + h^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(g = r + h\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "A geratriz é a hipotenusa do triângulo retângulo formado com o raio e a altura: g² = r² + h²."
  },
  {
    "id": 603,
    "topico": "cones",
    "q": "Se um cone reto tem raio \\(r = 6\\text{ cm}\\) e altura \\(h = 8\\text{ cm}\\), sua geratriz \\(g\\) vale:",
    "options": [
      {
        "type": "latex",
        "content": "\\(10\\text{ cm}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(12\\text{ cm}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(14\\text{ cm}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(15\\text{ cm}\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "g² = 6² + 8² = 36 + 64 = 100 => g = 10 cm."
  },
  {
    "id": 604,
    "topico": "cones",
    "q": "A fórmula do volume \\(V\\) de um cone reto de raio \\(r\\) e altura \\(h\\) é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(V = \\pi r^2 h\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{1}{3}\\pi r^2 h\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{2}{3}\\pi r^2 h\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\pi rg\\)",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "O volume do cone é V = (1/3)π r² h."
  },
  {
    "id": 605,
    "topico": "cones",
    "q": "A planificação da superfície lateral de um cone circular reto corresponde a um:",
    "options": [
      {
        "type": "text",
        "content": "Retângulo",
        "label": ""
      },
      {
        "type": "text",
        "content": "Setor circular de raio igual à geratriz",
        "label": ""
      },
      {
        "type": "text",
        "content": "Triângulo equilátero",
        "label": ""
      },
      {
        "type": "text",
        "content": "Círculo completo",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "A superfície lateral se abre em um setor circular de raio g e arco 2πr."
  },
  {
    "id": 606,
    "topico": "cones",
    "q": "Em um <strong>cone equilátero</strong>, a seção meridiana é um triângulo equilátero. Isso significa que:",
    "options": [
      {
        "type": "latex",
        "content": "\\(g = 2r\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(g = r\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(h = 2r\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(g = h\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "No cone equilátero a geratriz é igual ao diâmetro da base: g = 2r."
  },
  {
    "id": 607,
    "topico": "cones",
    "q": "A área lateral \\(A_l\\) de um cone reto de raio \\(r\\) e geratriz \\(g\\) é expressa por:",
    "options": [
      {
        "type": "latex",
        "content": "\\(A_l = \\pi rg\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(A_l = 2\\pi rg\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(A_l = \\pi r^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(A_l = \\frac{1}{3}\\pi rg\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "Área lateral do cone reto: Al = π r g."
  },
  {
    "id": 608,
    "topico": "cones",
    "q": "Se triplicarmos o raio da base de um cone e mantivermos sua altura, o volume:",
    "options": [
      {
        "type": "text",
        "content": "Triplica",
        "label": ""
      },
      {
        "type": "text",
        "content": "Fica 9 vezes maior",
        "label": ""
      },
      {
        "type": "text",
        "content": "Fica 6 vezes maior",
        "label": ""
      },
      {
        "type": "text",
        "content": "Não muda",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "Como V depende de r², triplicar o raio multiplica o volume por 3² = 9."
  },
  {
    "id": 609,
    "topico": "cones",
    "q": "Selecione a figura que representa a seção meridiana de um cone circular reto.",
    "options": [
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 30 L40 140 L160 140 Z\" fill=\"rgba(250, 204, 21, 0.2)\" stroke=\"#fde047\" stroke-width=\"3\" stroke-linejoin=\"round\"/></svg>",
        "label": "Triângulo Isósceles"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"90\" r=\"55\" fill=\"rgba(34, 211, 238, 0.2)\" stroke=\"#67e8f9\" stroke-width=\"3\"/></svg>",
        "label": "Círculo"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"40\" width=\"120\" height=\"100\" rx=\"6\" fill=\"rgba(74, 222, 128, 0.2)\" stroke=\"#86efac\" stroke-width=\"3\"/></svg>",
        "label": "Retângulo"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 140 L30 40 A90 90 0 0 1 170 40 Z\" fill=\"rgba(244, 114, 182, 0.2)\" stroke=\"#f9a8d4\" stroke-width=\"3\" stroke-linejoin=\"round\"/><circle cx=\"100\" cy=\"140\" r=\"4\" fill=\"#facc15\"/></svg>",
        "label": "Setor circular"
      }
    ],
    "ans": 0,
    "explicacao": "A seção passando pelo vértice e diâmetro da base é um triângulo isósceles de lados g, g e base 2r."
  },
  {
    "id": 610,
    "topico": "cones",
    "q": "O ângulo central \\(\\theta\\) do setor circular que forma a lateral do cone reto vale:",
    "options": [
      {
        "type": "latex",
        "content": "\\(\\theta = 360^\\circ \\cdot \\frac{r}{g}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(\\theta = 360^\\circ \\cdot \\frac{g}{r}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(\\theta = 180^\\circ \\cdot \\frac{r}{g}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(\\theta = 360^\\circ \\cdot \\frac{h}{g}\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "O arco 2πr corresponde a uma fração r/g do círculo completo de 360°."
  },
  {
    "id": 701,
    "topico": "troncos",
    "q": "Um tronco de cone reto de bases paralelas é obtido quando:",
    "options": [
      {
        "type": "text",
        "content": "Giramos um quadrado",
        "label": ""
      },
      {
        "type": "text",
        "content": "Cortamos um cone por um plano paralelo à base e retiramos o topo",
        "label": ""
      },
      {
        "type": "text",
        "content": "Juntamos dois cones idênticos pelas bases",
        "label": ""
      },
      {
        "type": "text",
        "content": "Cortamos um cilindro diagonalmente",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "Seccionando um cone por um plano paralelo à base e removendo o cone menor superior, obtém-se o tronco."
  },
  {
    "id": 702,
    "topico": "troncos",
    "q": "A fórmula do volume do tronco de cone de altura \\(h\\) e raios \\(R\\) e \\(r\\) é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(V = \\frac{1}{3}\\pi h (R^2 + Rr + r^2)\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\pi h (R^2 + r^2)\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{1}{3}\\pi h (R + r)^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{4}{3}\\pi h (R^2 - r^2)\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "Fórmula do volume do tronco de cone: V = (1/3)π h (R² + Rr + r²)."
  },
  {
    "id": 703,
    "topico": "troncos",
    "q": "Qual sólido de revolução é gerado pela rotação de 360° de um trapézio retângulo em torno de sua altura?",
    "options": [
      {
        "type": "text",
        "content": "Cilindro equilátero",
        "label": ""
      },
      {
        "type": "text",
        "content": "Tronco de cone reto",
        "label": ""
      },
      {
        "type": "text",
        "content": "Cone oblíquo",
        "label": ""
      },
      {
        "type": "text",
        "content": "Esfera",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "O trapézio retângulo girando em torno do lado perpendicular às bases gera um tronco de cone circular reto."
  },
  {
    "id": 704,
    "topico": "troncos",
    "q": "A relação métrica entre a geratriz \\(g_t\\), altura \\(h\\) e raios \\(R\\) e \\(r\\) de um tronco de cone é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(g_t^2 = h^2 + (R - r)^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(g_t^2 = h^2 + (R + r)^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(g_t = h + R - r\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(h^2 = g_t^2 + (R - r)^2\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "Pelo triângulo retângulo lateral do trapézio: gt² = h² + (R - r)²."
  },
  {
    "id": 705,
    "topico": "troncos",
    "q": "Selecione a figura que representa um tronco de cone circular reto.",
    "options": [
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"100\" cy=\"140\" rx=\"65\" ry=\"20\" fill=\"rgba(16, 185, 129, 0.15)\" stroke=\"#34d399\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><path d=\"M65 60 L35 140 A65 20 0 0 0 165 140 L135 60 Z\" fill=\"rgba(16, 185, 129, 0.4)\" stroke=\"#6ee7b7\" stroke-width=\"3\" stroke-linejoin=\"round\"/><ellipse cx=\"100\" cy=\"60\" rx=\"35\" ry=\"12\" fill=\"rgba(16, 185, 129, 0.6)\" stroke=\"#6ee7b7\" stroke-width=\"2\"/></svg>",
        "label": "Tronco de Cone"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"120\" cy=\"140\" rx=\"55\" ry=\"18\" fill=\"rgba(168, 85, 247, 0.15)\" stroke=\"#c084fc\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><path d=\"M60 20 L65 140 A55 18 0 0 0 175 140 Z\" fill=\"rgba(168, 85, 247, 0.4)\" stroke=\"#d8b4fe\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"60\" y1=\"20\" x2=\"120\" y2=\"140\" stroke=\"#facc15\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/></svg>",
        "label": "Cone oblíquo"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"100\" cy=\"140\" rx=\"55\" ry=\"18\" fill=\"rgba(59, 130, 246, 0.15)\" stroke=\"#60a5fa\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><path d=\"M100 20 L45 140 A55 18 0 0 0 155 140 Z\" fill=\"rgba(59, 130, 246, 0.4)\" stroke=\"#93c5fd\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#facc15\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/></svg>",
        "label": "Cone reto"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"100\" cy=\"140\" rx=\"50\" ry=\"16\" fill=\"rgba(16, 185, 129, 0.2)\" stroke=\"#34d399\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><path d=\"M50 45 L50 140 A50 16 0 0 0 150 140 L150 45 Z\" fill=\"rgba(16, 185, 129, 0.35)\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><ellipse cx=\"100\" cy=\"45\" rx=\"50\" ry=\"16\" fill=\"rgba(16, 185, 129, 0.6)\" stroke=\"#a7f3d0\" stroke-width=\"2\"/></svg>",
        "label": "Cilindro"
      }
    ],
    "ans": 0,
    "explicacao": "A figura mostra o sólido com duas bases circulares paralelas de raios desiguais."
  },
  {
    "id": 706,
    "topico": "troncos",
    "q": "A expressão do volume do tronco de pirâmide de bases paralelas com áreas \\(A_B\\) e \\(A_b\\) e altura \\(h\\) é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(V = \\frac{h}{3}(A_B + \\sqrt{A_B \\cdot A_b} + A_b)\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{h}{2}(A_B + A_b)\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = h(A_B - A_b)\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{h}{3}(A_B + A_b)\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "Fórmula clássica: V = (h/3) * (AB + √(AB * Ab) + Ab)."
  },
  {
    "id": 707,
    "topico": "troncos",
    "q": "Um tronco de cone tem \\(h = 3\\text{ cm}\\), \\(R = 4\\text{ cm}\\) e \\(r = 1\\text{ cm}\\). Seu volume é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(21\\pi\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(17\\pi\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(63\\pi\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(27\\pi\\text{ cm}^3\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "V = (1/3)π(3)(4² + 4*1 + 1²) = π(16 + 4 + 1) = 21π cm³."
  },
  {
    "id": 708,
    "topico": "troncos",
    "q": "Selecione a figura que representa um tronco de pirâmide de bases regulares.",
    "options": [
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"70,60 130,60 150,75 90,75\" fill=\"rgba(249, 115, 22, 0.5)\" stroke=\"#fb923c\" stroke-width=\"2\"/><polygon points=\"40,130 160,130 185,150 65,150\" fill=\"rgba(249, 115, 22, 0.2)\" stroke=\"#fdba74\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line x1=\"70\" y1=\"60\" x2=\"40\" y2=\"130\" stroke=\"#f97316\" stroke-width=\"2\"/><line x1=\"130\" y1=\"60\" x2=\"160\" y2=\"130\" stroke=\"#f97316\" stroke-width=\"2\"/><line x1=\"150\" y1=\"75\" x2=\"185\" y2=\"150\" stroke=\"#f97316\" stroke-width=\"2\"/><line x1=\"90\" y1=\"75\" x2=\"65\" y2=\"150\" stroke=\"#f97316\" stroke-width=\"2\"/></svg>",
        "label": "Tronco de pirâmide"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"100,20 40,120 120,140\" fill=\"rgba(245, 158, 11, 0.3)\" stroke=\"#fbbf24\" stroke-width=\"2\"/><polygon points=\"100,20 120,140 160,110\" fill=\"rgba(245, 158, 11, 0.45)\" stroke=\"#fde68a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"120\" x2=\"80\" y2=\"90\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><line x1=\"80\" y1=\"90\" x2=\"160\" y2=\"110\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><line x1=\"100\" y1=\"20\" x2=\"80\" y2=\"90\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"115\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"3 3\"/></svg>",
        "label": "Pirâmide com ápice"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"50,60 110,60 110,120 50,120\" fill=\"rgba(99, 102, 241, 0.2)\" stroke=\"#818cf8\" stroke-width=\"2\"/><polygon points=\"110,60 150,30 150,90 110,120\" fill=\"rgba(99, 102, 241, 0.35)\" stroke=\"#a5b4fc\" stroke-width=\"2\"/><polygon points=\"50,60 90,30 150,30 110,60\" fill=\"rgba(99, 102, 241, 0.5)\" stroke=\"#c7d2fe\" stroke-width=\"2\"/><line x1=\"50\" y1=\"120\" x2=\"150\" y2=\"30\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"4 3\"/></svg>",
        "label": "Cubo"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,70 120,70 120,130 30,130\" fill=\"rgba(6, 182, 212, 0.2)\" stroke=\"#22d3ee\" stroke-width=\"2\"/><polygon points=\"120,70 170,40 170,100 120,130\" fill=\"rgba(6, 182, 212, 0.35)\" stroke=\"#67e8f9\" stroke-width=\"2\"/><polygon points=\"30,70 80,40 170,40 120,70\" fill=\"rgba(6, 182, 212, 0.5)\" stroke=\"#a5f3fc\" stroke-width=\"2\"/></svg>",
        "label": "Paralelepípedo"
      }
    ],
    "ans": 0,
    "explicacao": "A figura representa o sólido com base quadrada menor em cima e maior embaixo unidas por trapézios."
  },
  {
    "id": 709,
    "topico": "troncos",
    "q": "As faces laterais de um tronco de pirâmide regular de bases paralelas são:",
    "options": [
      {
        "type": "text",
        "content": "Trapézios isósceles congruentes",
        "label": ""
      },
      {
        "type": "text",
        "content": "Retângulos congruentes",
        "label": ""
      },
      {
        "type": "text",
        "content": "Triângulos isósceles",
        "label": ""
      },
      {
        "type": "text",
        "content": "Paralelogramos quaisquer",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "As faces laterais são sempre trapézios isósceles congruentes."
  },
  {
    "id": 710,
    "topico": "troncos",
    "q": "A área lateral \\(A_l\\) de um tronco de cone circular reto de geratriz \\(g_t\\) e raios \\(R\\) e \\(r\\) é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(A_l = \\pi g_t (R + r)\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(A_l = 2\\pi g_t (R - r)\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(A_l = \\pi g_t (R^2 - r^2)\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(A_l = \\frac{1}{3}\\pi g_t (R + r)\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "A fórmula da área lateral do tronco de cone é Al = π gt (R + r)."
  },
  {
    "id": 801,
    "topico": "esferas",
    "q": "A área da superfície de uma esfera de raio \\(R\\) é calculada por:",
    "options": [
      {
        "type": "latex",
        "content": "\\(A = 4\\pi R^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(A = \\frac{4}{3}\\pi R^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(A = 2\\pi R^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(A = \\pi R^2\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "A área da superfície esférica é 4 vezes a área do círculo máximo: A = 4π R²."
  },
  {
    "id": 802,
    "topico": "esferas",
    "q": "O volume \\(V\\) de uma esfera de raio \\(R\\) é dado por:",
    "options": [
      {
        "type": "latex",
        "content": "\\(V = \\frac{4}{3}\\pi R^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = 4\\pi R^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{1}{3}\\pi R^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{4}{3}\\pi R^2\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "O volume da esfera é V = (4/3)π R³."
  },
  {
    "id": 803,
    "topico": "esferas",
    "q": "Um plano corta uma esfera de raio \\(R = 5\\text{ cm}\\) a uma distância \\(d = 3\\text{ cm}\\) do centro. O raio \\(r\\) da seção circular é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(4\\text{ cm}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(2\\text{ cm}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(\\sqrt{34}\\text{ cm}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(3{,}5\\text{ cm}\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "Relação fundamental: R² = d² + r² => 5² = 3² + r² => r² = 25 - 9 = 16 => r = 4 cm."
  },
  {
    "id": 804,
    "topico": "esferas",
    "q": "Se o raio de uma esfera passa de \\(R\\) para \\(2R\\), o seu volume:",
    "options": [
      {
        "type": "text",
        "content": "Dobra (fica 2 vezes maior)",
        "label": ""
      },
      {
        "type": "text",
        "content": "Quadruplica (fica 4 vezes maior)",
        "label": ""
      },
      {
        "type": "text",
        "content": "Octiplica (fica 8 vezes maior)",
        "label": ""
      },
      {
        "type": "text",
        "content": "Permanece o mesmo",
        "label": ""
      }
    ],
    "ans": 2,
    "explicacao": "V depende de R³. Assim, (2R)³ = 8R³, tornando o volume 8 vezes maior."
  },
  {
    "id": 805,
    "topico": "esferas",
    "q": "Uma esfera tem raio \\(R = 3\\text{ cm}\\). O seu volume vale:",
    "options": [
      {
        "type": "latex",
        "content": "\\(36\\pi\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(27\\pi\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(108\\pi\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(12\\pi\\text{ cm}^3\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "V = (4/3)π(3³) = (4/3)π(27) = 4 * 9π = 36π cm³."
  },
  {
    "id": 806,
    "topico": "esferas",
    "q": "A porção de superfície esférica delimitada por dois semicírculos máximos (como a casca de um gomo) é chamada de:",
    "options": [
      {
        "type": "text",
        "content": "Cunha esférica",
        "label": ""
      },
      {
        "type": "text",
        "content": "Fuso esférico",
        "label": ""
      },
      {
        "type": "text",
        "content": "Calota esférica",
        "label": ""
      },
      {
        "type": "text",
        "content": "Zona esférica",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "Fuso esférico é a casca (área); cunha esférica é o sólido interno (volume)."
  },
  {
    "id": 807,
    "topico": "esferas",
    "q": "O volume de uma cunha esférica de ângulo central \\(\\alpha\\) em graus (numa esfera de raio \\(R\\)) é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(V = \\frac{\\alpha}{360^\\circ} \\cdot \\frac{4}{3}\\pi R^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{\\alpha}{360^\\circ} \\cdot 4\\pi R^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\frac{\\alpha}{180^\\circ} \\cdot \\frac{4}{3}\\pi R^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(V = \\alpha \\cdot \\pi R^3\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "O volume é proporcional à fração α/360° do volume total da esfera."
  },
  {
    "id": 808,
    "topico": "esferas",
    "q": "Selecione a figura que ilustra uma seção plana circular de uma esfera a uma distância do centro.",
    "options": [
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"90\" r=\"65\" fill=\"none\" stroke=\"#c084fc\" stroke-width=\"2\"/><ellipse cx=\"100\" cy=\"55\" rx=\"51\" ry=\"15\" fill=\"rgba(6, 182, 212, 0.3)\" stroke=\"#22d3ee\" stroke-width=\"2\"/><circle cx=\"100\" cy=\"90\" r=\"3\" fill=\"#facc15\"/><circle cx=\"100\" cy=\"55\" r=\"3\" fill=\"#22d3ee\"/><line x1=\"100\" y1=\"90\" x2=\"100\" y2=\"55\" stroke=\"#ef4444\" stroke-width=\"2\"/><line x1=\"100\" y1=\"55\" x2=\"151\" y2=\"55\" stroke=\"#3b82f6\" stroke-width=\"2\"/><line x1=\"100\" y1=\"90\" x2=\"151\" y2=\"55\" stroke=\"#10b981\" stroke-width=\"2\"/></svg>",
        "label": "Esfera seccionada"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"90\" r=\"60\" fill=\"rgba(147, 51, 234, 0.2)\" stroke=\"#c084fc\" stroke-width=\"3\"/><ellipse cx=\"100\" cy=\"90\" rx=\"60\" ry=\"18\" fill=\"none\" stroke=\"#e9d5ff\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"100\" y1=\"90\" x2=\"152\" y2=\"60\" stroke=\"#facc15\" stroke-width=\"2.5\"/><circle cx=\"100\" cy=\"90\" r=\"4\" fill=\"#facc15\"/></svg>",
        "label": "Esfera com raio"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"90\" r=\"55\" fill=\"rgba(34, 211, 238, 0.2)\" stroke=\"#67e8f9\" stroke-width=\"3\"/></svg>",
        "label": "Círculo 2D"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"100\" cy=\"140\" rx=\"50\" ry=\"16\" fill=\"rgba(16, 185, 129, 0.2)\" stroke=\"#34d399\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><path d=\"M50 45 L50 140 A50 16 0 0 0 150 140 L150 45 Z\" fill=\"rgba(16, 185, 129, 0.35)\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><ellipse cx=\"100\" cy=\"45\" rx=\"50\" ry=\"16\" fill=\"rgba(16, 185, 129, 0.6)\" stroke=\"#a7f3d0\" stroke-width=\"2\"/></svg>",
        "label": "Cilindro"
      }
    ],
    "ans": 0,
    "explicacao": "A figura mostra a seção plana circular com o triângulo retângulo R² = d² + r²."
  },
  {
    "id": 809,
    "topico": "esferas",
    "q": "O círculo máximo de uma esfera tem área \\(25\\pi\\text{ cm}^2\\). A área da superfície da esfera é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(50\\pi\\text{ cm}^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(100\\pi\\text{ cm}^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(125\\pi\\text{ cm}^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(200\\pi\\text{ cm}^2\\)",
        "label": ""
      }
    ],
    "ans": 1,
    "explicacao": "A área da superfície esférica é 4 vezes a área do círculo máximo: A = 4 * 25π = 100π cm²."
  },
  {
    "id": 810,
    "topico": "esferas",
    "q": "Selecione a figura que representa uma esfera tridimensional.",
    "options": [
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"90\" r=\"60\" fill=\"rgba(147, 51, 234, 0.2)\" stroke=\"#c084fc\" stroke-width=\"3\"/><ellipse cx=\"100\" cy=\"90\" rx=\"60\" ry=\"18\" fill=\"none\" stroke=\"#e9d5ff\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"100\" y1=\"90\" x2=\"152\" y2=\"60\" stroke=\"#facc15\" stroke-width=\"2.5\"/><circle cx=\"100\" cy=\"90\" r=\"4\" fill=\"#facc15\"/></svg>",
        "label": "Esfera 3D"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"90\" r=\"55\" fill=\"rgba(34, 211, 238, 0.2)\" stroke=\"#67e8f9\" stroke-width=\"3\"/></svg>",
        "label": "Círculo plano"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"100\" cy=\"140\" rx=\"55\" ry=\"18\" fill=\"rgba(59, 130, 246, 0.15)\" stroke=\"#60a5fa\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><path d=\"M100 20 L45 140 A55 18 0 0 0 155 140 Z\" fill=\"rgba(59, 130, 246, 0.4)\" stroke=\"#93c5fd\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#facc15\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/></svg>",
        "label": "Cone"
      },
      {
        "type": "image",
        "content": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"50,60 110,60 110,120 50,120\" fill=\"rgba(99, 102, 241, 0.2)\" stroke=\"#818cf8\" stroke-width=\"2\"/><polygon points=\"110,60 150,30 150,90 110,120\" fill=\"rgba(99, 102, 241, 0.35)\" stroke=\"#a5b4fc\" stroke-width=\"2\"/><polygon points=\"50,60 90,30 150,30 110,60\" fill=\"rgba(99, 102, 241, 0.5)\" stroke=\"#c7d2fe\" stroke-width=\"2\"/><line x1=\"50\" y1=\"120\" x2=\"150\" y2=\"30\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"4 3\"/></svg>",
        "label": "Cubo"
      }
    ],
    "ans": 0,
    "explicacao": "A figura representa uma esfera com linha de equador em perspectiva tridimensional."
  },
  {
    "id": 901,
    "topico": "inscricao_semelhanca",
    "q": "Se dois sólidos geométricos são semelhantes com razão linear \\(k\\), a razão entre seus volumes é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(k\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(k^2\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(k^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(3k\\)",
        "label": ""
      }
    ],
    "ans": 2,
    "explicacao": "Comprimentos variam com k, áreas com k² e volumes com k³."
  },
  {
    "id": 902,
    "topico": "inscricao_semelhanca",
    "q": "Uma esfera está perfeitamente <strong>inscrita</strong> em um cubo de aresta \\(a\\). O raio \\(R\\) da esfera é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(R = \\frac{a}{2}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(R = a\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(R = \\frac{a\\sqrt{3}}{2}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(R = a\\sqrt{2}\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "O diâmetro da esfera é igual à aresta do cubo: 2R = a => R = a/2."
  },
  {
    "id": 903,
    "topico": "inscricao_semelhanca",
    "q": "Uma esfera está <strong>circunscrita</strong> a um cubo de aresta \\(a\\) (passa pelos 8 vértices). Seu raio \\(R\\) é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(R = \\frac{a\\sqrt{3}}{2}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(R = \\frac{a}{2}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(R = a\\sqrt{3}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(R = \\frac{a\\sqrt{2}}{2}\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "O diâmetro da esfera é a diagonal espacial do cubo: 2R = a√3 => R = (a√3)/2."
  },
  {
    "id": 904,
    "topico": "inscricao_semelhanca",
    "q": "Um cone de volume \\(240\\text{ cm}^3\\) e altura \\(H\\) é cortado na metade de sua altura por um plano paralelo à base. O volume do cone menor do topo é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(120\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(60\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(30\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(40\\text{ cm}^3\\)",
        "label": ""
      }
    ],
    "ans": 2,
    "explicacao": "k = 1/2 => k³ = 1/8. V_menor = 240 * (1/8) = 30 cm³."
  },
  {
    "id": 905,
    "topico": "inscricao_semelhanca",
    "q": "No problema anterior (cone de \\(240\\text{ cm}^3\\) cortado à meia altura), qual é o volume do tronco de cone restante?",
    "options": [
      {
        "type": "latex",
        "content": "\\(210\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(120\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(180\\text{ cm}^3\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(150\\text{ cm}^3\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "V_tronco = V_total - V_menor = 240 - 30 = 210 cm³ (ou seja, 7/8 do volume total)."
  },
  {
    "id": 906,
    "topico": "inscricao_semelhanca",
    "q": "Um cilindro equilátero (onde \\(h = 2r\\)) está inscrito em uma esfera de raio \\(R\\). A relação entre \\(R\\) e \\(r\\) é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(R = r\\sqrt{2}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(R = 2r\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(R = r\\sqrt{3}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(R = r\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "A diagonal da seção quadrada é o diâmetro da esfera: (2R)² = (2r)² + (2r)² = 8r² => 2R = 2r√2 => R = r√2."
  },
  {
    "id": 907,
    "topico": "inscricao_semelhanca",
    "q": "Dois vasos cilíndricos semelhantes têm alturas de \\(10\\text{ cm}\\) e \\(20\\text{ cm}\\). Se o menor comporta \\(250\\text{ mL}\\), o maior comporta:",
    "options": [
      {
        "type": "text",
        "content": "500 mL",
        "label": ""
      },
      {
        "type": "text",
        "content": "1.000 mL",
        "label": ""
      },
      {
        "type": "text",
        "content": "2.000 mL (2 litros)",
        "label": ""
      },
      {
        "type": "text",
        "content": "4.000 mL",
        "label": ""
      }
    ],
    "ans": 2,
    "explicacao": "k = 20/10 = 2. A razão dos volumes é k³ = 8. Logo, 250 * 8 = 2.000 mL."
  },
  {
    "id": 908,
    "topico": "inscricao_semelhanca",
    "q": "A razão entre o volume de uma esfera inscrita em um cubo e o volume do cubo é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(\\frac{\\pi}{6}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(\\frac{\\pi}{4}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(\\frac{\\pi}{3}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(\\frac{2\\pi}{3}\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "V_esfera = (4/3)π(a/2)³ = πa³/6. Dividindo por V_cubo = a³, obtemos π/6 ≈ 52,36%."
  },
  {
    "id": 909,
    "topico": "inscricao_semelhanca",
    "q": "Se uma pirâmide é seccionada a uma altura \\(h\\) do vértice com razão linear \\(k = \\frac{1}{3}\\), a razão entre a área da seção e a área da base é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(\\frac{1}{9}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(\\frac{1}{3}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(\\frac{1}{27}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(\\frac{1}{6}\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "A razão das áreas é k² = (1/3)² = 1/9."
  },
  {
    "id": 910,
    "topico": "inscricao_semelhanca",
    "q": "Uma esfera está inscrita em um cilindro equilátero de raio \\(R\\) e altura \\(2R\\). A razão entre o volume da esfera e o do cilindro é:",
    "options": [
      {
        "type": "latex",
        "content": "\\(\\frac{2}{3}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(\\frac{1}{2}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(\\frac{3}{4}\\)",
        "label": ""
      },
      {
        "type": "latex",
        "content": "\\(\\frac{1}{3}\\)",
        "label": ""
      }
    ],
    "ans": 0,
    "explicacao": "Teorema de Arquimedes: V_esfera / V_cilindro = ((4/3)π R³) / (π R² * 2R) = (4/3) / 2 = 2/3."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BANCO_QUESTOES, TOPICOS_INFO };
}
