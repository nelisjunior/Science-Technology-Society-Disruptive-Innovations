module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['example.com'], // Adicione os domínios permitidos para carregamento de imagens
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ]
    },
}