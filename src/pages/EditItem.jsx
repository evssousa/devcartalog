import { useParams } from 'react-router-dom'
import Layout from '../componets/Layout'

export default function EditItem() {
    // recebe o id passado na url. localhost:5173/editar/123
    // Editando item ID: 123
    const { id } = useParams()

    return (
        <Layout>
            <h2 className="text-2xl font-semibold mb-4">Editando item ID: {id}</h2>
            <p>Aqui ficará o formulário de edição.</p>
        </Layout>
    )
}