import Link from 'next/link';

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">Arautos da Inovação</h1>
            <p className="mb-8">
                Bem-vindo ao portal dos Arautos da Inovação. Explore nossos projetos, artigos e eventos.
            </p>
            <Link href="/portfolio">
                <a className="text-blue-500 hover:text-blue-700">Veja nosso portfólio</a>
            </Link>
        </div>
    );
}