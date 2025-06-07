import { useParams } from 'react-router-dom'

export default function EditItem() {
    // recebe o id passado na url. localhost:5173/editar/123
    // Editando item ID: 123
    const { id } = useParams()

    return <h2 className="text-2xl">Editando item ID: {id}</h2>
}