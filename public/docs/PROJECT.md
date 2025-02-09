# Projeto: Arautos da Inovação

## Diretrizes Estratégicas

### 1. Identidade Visual como Reflexo da Missão
- **Tema**: Incorporar elementos que representem "Ser Arautos da Inovação" — como ícones de farol (símbolo de guia) ou engrenagens estilizadas (tecnologia em movimento).
- **Cores**: Usar tons de azul (confiança, tecnologia) e verde (crescimento, sustentabilidade), com detalhes em laranja ou amarelo (criatividade, disrupção).
- **Homenagens**: Criar uma seção dedicada aos mentores (ex.: "Nossas Referências") com fotos, biografias resumidas e citações inspiradoras.

### 2. Conteúdo com Propósito Educativo e Inspiracional
- **Portfólio Interativo**: Mostrar projetos da equipe com cases de estudo, links para repositórios GitHub e demonstrações em vídeo.
- **Blog com Artigos Técnicos**: Abordar temas como TRIZTOMING, inovação governamental e negócios tecnológicos, sempre vinculados às disciplinas do curso de CeT.
- **Calendário de Eventos**: Divulgar workshops, palestras de mentores (ex.: Prof. Glaucio Brandão) e competições de inovação.

### 3. Comunidade e Engajamento
- **Newsletter**: Captar e-mails para compartilhar novidades e oportunidades na área de inovação.
- **Espaço Colaborativo**: Incluir um fórum ou seção de comentários moderados para discussões entre alunos, egressos e visitantes.

## Sugestões Técnicas

### 1. Arquitetura Escalável e de Baixo Custo
- **Front-end**:
    - **Framework**: Next.js (React) para gerar páginas estáticas (SSG) ou renderizadas no servidor (SSR), ideal para SEO e desempenho.
    - **CMS Headless**: Hygraph ou Strapi (gratuitos para pequenos projetos) para gerenciar artigos, eventos e perfis da equipe.
    - **Hospedagem**: GitHub Pages (para versão estática) ou Cloudflare Pages (com suporte a SSR e integração contínua).

- **Back-end (Futuro)**:
    - **API**: Inicialmente, usar funções serverless (Cloudflare Workers ou Vercel Edge Functions) para funcionalidades dinâmicas (ex.: envio de formulários).
    - **Escalabilidade**: Se o tráfego crescer, migrar para Firebase ou Supabase (banco de dados em tempo real e autenticação).

### 2. Funcionalidades Prioritárias
- **Seção "Quem Somos"**:
    - Cards interativos com perfis de estudantes e egressos, filtrados por área de atuação (ex.: Negócios Tecnológicos, Pesquisa).
    - Linha do tempo mostrando a evolução da equipe e marcos alcançados.

- **Integração com GitHub**:
    - Widgets automáticos que exibem repositórios públicos da equipe, usando a API do GitHub.
    - Badges de habilidades técnicas (ex.: React, Spring Boot) baseadas em projetos publicados.

- **Acessibilidade e SEO**:
    - Schema markup para artigos e perfis, melhorando a visibilidade em buscas.
    - Navegação por teclado e contraste de cores ajustável para compliance com WCAG.

### 3. Sustentabilidade do Projeto
- **Documentação**:
    - Manual de identidade visual (cores, fonts, tom de voz) para garantir consistência em atualizações futuras.
    - Guia de contribuição no GitHub para novos membros da equipe.

- **Automatização**:
    - CI/CD via GitHub Actions ou Cloudflare Pages para deploy automático após push no repositório.
    - Testes E2E com Cypress para garantir que novas features não quebrem funcionalidades existentes.

- **Monitoramento**:
    - Ferramentas gratuitas como Google Search Console e Lighthouse para auditorias periódicas de desempenho e SEO.

## Exemplo de Estrutura de Páginas
1. **Home**: Carrossel com destaques (eventos, artigos recentes) + Chamada para ação (ex.: "Junte-se à Inovação").
2. **Portfólio**: Grid de projetos filtrados por categoria (ex.: Apps, Pesquisa Acadêmica).
3. **Blog**: Artigos com tags relacionadas à TRIZTOMING e inovação disruptiva.
4. **Referências**: Galeria de mentores com links para suas contribuições (ex.: publicações, palestras no YouTube).
5. **Contato**: Formulário para colaborações e inscrição na newsletter.

## Tecnologias Recomendadas
| **Função**               | **Ferramentas**                                                                 |
|--------------------------|---------------------------------------------------------------------------------|
| Front-end                | Next.js, Tailwind CSS, Framer Motion (para animações sutis)                    |
| CMS                      | Strapi (auto-hospedado) ou Hygraph (cloud)                                      |
| Hospedagem Front-end     | Cloudflare Pages (SSR gratuito) ou GitHub Pages (para estáticos)               |
| Banco de Dados           | SQLite (inicial) → PostgreSQL (se escalar)                                      |
| Autenticação             | NextAuth.js (para futuras funcionalidades de login)                            |
| Análise de Dados         | Plausible Analytics (alternativa leve e privada ao Google Analytics)           |

## Considerações Finais
O site deve equilibrar **simplicidade** (para facilitar a manutenção por estudantes) e **profissionalismo** (para atrair parceiros e inspirar a comunidade). A escolha por ferramentas como Next.js e Strapi permite que a equipe gerencie conteúdo sem depender de conhecimentos avançados em back-end, enquanto a hospedagem gratuita no Cloudflare ou GitHub reduz custos iniciais.

Incluir um **roadmap público** (ex.: página "Nosso Futuro") com features planejadas (ex.: fórum, integração com API do LinkedIn) pode engajar a comunidade e atrair colaboradores. Por fim, vincular o projeto a iniciativas da UFRN (ex.: Semana de Ciência e Tecnologia) fortalecerá sua relevância institucional.