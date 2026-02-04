export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string; // Emoji usually, or we can use generic icons
  category: 'Frontend' | 'Backend' | 'Mobile' | 'DevOps' | 'Fundamentals';
}

export const modules: Module[] = [
  { id: 'html', title: 'HTML5', description: 'Estruturação semântica da web moderna.', icon: '🌐', category: 'Frontend' },
  { id: 'css', title: 'CSS3', description: 'Estilização avançada, Flexbox, Grid e animações.', icon: '🎨', category: 'Frontend' },
  { id: 'js', title: 'JavaScript', description: 'Lógica ne client-side e manipulação do DOM.', icon: '⚡', category: 'Frontend' },
  { id: 'ts', title: 'TypeScript', description: 'Tipagem estática para projetos robustos.', icon: '📘', category: 'Frontend' },
  { id: 'react', title: 'React Native', description: 'Apps nativos com JS e React.', icon: '📱', category: 'Mobile' },
  { id: 'expo', title: 'Expo', description: 'Desenvolvimento mobile acelerado.', icon: '🚀', category: 'Mobile' },
  { id: 'flutter', title: 'Flutter', description: 'Apps multiplataforma com Dart.', icon: '🐦', category: 'Mobile' },
  { id: 'csharp', title: 'C#', description: 'Desenvolvimento robusto com .NET.', icon: '#️⃣', category: 'Backend' },
  { id: 'python', title: 'Python', description: 'Data science, automação e backend.', icon: '🐍', category: 'Backend' },
  { id: 'php', title: 'PHP', description: 'O gigante da web dinâmica.', icon: '🐘', category: 'Backend' },
  { id: 'terminal', title: 'Terminal', description: 'Comandos essenciais e shell script.', icon: '💻', category: 'Fundamentals' },
  { id: 'git', title: 'Git & Versionamento', description: 'Controle de versão colaborativo.', icon: '🌳', category: 'DevOps' },
  { id: 'linux', title: 'Linux', description: 'O sistema operacional dos servidores.', icon: '🐧', category: 'DevOps' },
];

export const curiosities = [
  "O primeiro bug de computador foi literalmente um inseto (mariposa) preso em um relé do Mark II em 1947.",
  "O código-fonte do Apollo 11 que levou o homem à lua tinha menos linhas que um app simples de hoje.",
  "JavaScript foi criado em apenas 10 dias por Brendan Eich.",
  "A primeira webcam foi criada em Cambridge apenas para vigiar uma cafeteira.",
  "Quase 90% da moeda mundial existe apenas digitalmente nos computadores.",
];

export const forumTopics = [
  { id: 1, author: "DevMaster", title: "Qual a melhor stack para 2026?", replies: 42, views: 1205 },
  { id: 2, author: "CodeNinja", title: "Dúvida: useEffect rodando duas vezes?", replies: 15, views: 340 },
  { id: 3, author: "Neo", title: "Como sair do Vim? (Urgente)", replies: 999, views: 50000 },
  { id: 4, author: "Pythonista", title: "Django vs FastAPI para microsserviços", replies: 28, views: 890 },
];
