import { useState } from 'react'
import Layout from "../componets/Layout";

export default function NewItem() {
    const [form, setForm] = useState({
        // titulo: 'Curso de MongoDB',
        // tipo: 'curso',
        // status: 'em andamento',
        // link: 'https://www.mongodb.com/',
        // tags: '',
        // createdAt: new Date().toISOString(),

        titulo: '',
        tipo: '',
        status: '',
        link: '',
        tags: '',
        createdAt: new Date().toISOString(),
    })

    // atualização dos campos
    function handleChange(e) {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    // envio dos dados
    function handleSubmit(e) {
        e.preventDefault()

        // validação simples
        if (!form.titulo.trim()) {
            alert('O campo título é obrigatório!')
            return
        }

        // simulação de envio de dados
        const data = {
            ...form,
            tags: form.tags.split(',').map(tag => tag.trim()).filter(Boolean),
            createdAt: new Date().toISOString()
        }

        console.log('Nova entrada:', data)
        alert('Entrada simulada no console!')

        // reset do formulário
        setForm({
            titulo: '',
            tipo: '',
            status: '',
            link: '',
            tags: '',
            createdAt: new Date().toISOString(),
        })
    }

    return (
        <Layout>
            <h2 className="text-2xl font-semibold mb-4">Nova entrada</h2>
            <p className='mb-4'>Formulário para adicionar curso ou projeto.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className='block font-medium'>Título*</label>
                    <input type="text" name='titulo' value={form.titulo} onChange={handleChange} required className='w-full p-2 border rounded' placeholder='Curso de React Native' />
                </div>

                <div>
                    <label className='block font-medium'>Tipo</label>
                    <select name="tipo" value={form.tipo} onChange={handleChange} className='w-full p-2 border rounded'>
                        <option value="curso">Curso</option>
                        <option value="projeto">Projeto</option>
                    </select>
                </div>

                <div>
                    <label className='block font-medium'>Status</label>
                    <select name="status" value={form.status} onChange={handleChange} className='w-full p-2 border rounded'>
                        <option value="planejado">Planejado</option>
                        <option value="em andamento">Em andamento</option>
                        <option value="concluído">Concluído</option>
                        <option value="pausado">Pausado</option>
                    </select>
                </div>

                <div>
                    <label className='block font-medium'>Link (opcional)</label>
                    <input type="text" name='link' value={form.link} onChange={handleChange} className='w-full p-2 border rounded' placeholder='https://reactnative.com' />
                </div>

                <div>
                    <label className='block font-medium'>Tags (separadas por vírgula)</label>
                    <input type="text" name='tags' value={form.tags} onChange={handleChange} className='w-full p-2 border rounded' placeholder='react, reactnative, mobile' />
                </div>

                <p className='block font-medium'>Criado em: {form.createdAt}</p>

                <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer'>Salvar (Simulação)</button>
            </form>
        </Layout>
    )
}