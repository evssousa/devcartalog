import Layout from "../componets/Layout"
import EntryCard from "../componets/EntryCard"
import mockData from "../data/mockData"

export default function Home() {
    return (
        <Layout>
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <p>Listagem dos seus cursos e projetos cadastrados.</p>
            <ul className="space-y-4">
                {mockData.map((item) => (
                    <EntryCard key={item.id} entry={item} />
                ))}
            </ul>
        </Layout>
    )
}