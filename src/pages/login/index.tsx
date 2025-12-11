import { useState } from "react"
import { Input } from "../../components/inputs"

export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        
        if (email === '' || password === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }
    }

    return (
        <div className="flex flex-col w-full h-screen justify-center items-center">

            <h1 className="text-white text-4xl font-bold mb-6">
                Fut
                <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                    Feed
                </span>
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
                <Input 
                    placeholder="Digite seu email..." 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input 
                    placeholder="Digite sua senha..." 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button 
                    type="submit" 
                    className="bg-blue-600 text-white p-2 rounded shadow hover:bg-blue-700 transition"
                >
                    acessar
                </button>
            </form>

        </div>
    )
}
