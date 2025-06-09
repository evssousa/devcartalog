const mockData = [
    {
        id: '1',
        titulo: 'Curso de React',
        tipo: 'curso',
        status: 'em andamento',
        link: 'https://react.com.br/curso',
        tags: ['react', 'hooks'],
        createdAt: new Date().toISOString(),
    },
    {
        id: '2',
        titulo: 'Projeto Portfólio',
        tipo: 'projeto',
        status: 'concluído',
        link: 'https://github.com/evssousa',
        tags: ['frontend', 'portfolio'],
        createdAt: new Date().toISOString(),
    },
    {
        id: '3',
        titulo: 'Curso de Node.js',
        tipo: 'curso',
        status: 'planejado',
        link: 'https://cursonodejs.com/cursonode',
        tags: ['node', 'backend'],
        createdAt: new Date().toISOString(),
    },
]

export default mockData