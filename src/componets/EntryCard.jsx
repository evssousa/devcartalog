export default function EntryCard({ entry }) {
    return (
        <li className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold">{entry.titulo}</h3>
            <p className="text-sm text-gray-600">Tipo: {entry.tipo}</p>
            <p className="text-sm text-gray-600">Status: {entry.status}</p>
            <div className="flex gap-2 mt-2">
                {entry.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded">
                        #{tag}
                    </span>
                ))}
            </div>
        </li>
    )
}
