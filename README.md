# HanziPath · 汉字之路

Aplicação pessoal para aprender mandarim com currículo progressivo, dicionário de caracteres, aulas, revisão espaçada e leitor graduado.

## Executar localmente

Requisitos: Node.js 20+.

```bash
npm install
npm run dev
```

Depois acesse `http://localhost:3000`. O conteúdo inicial está em `data/content.ts` e pode ser expandido sem alterar as telas.

## Deploy no Vercel

O projeto inclui `vercel.json` e pode ser importado diretamente pelo painel do Vercel usando o repositório GitHub. Também é possível executar `npx vercel` localmente após autenticar com `npx vercel login`.

O projeto usa Neon PostgreSQL em produção por meio de `DATABASE_URL`. O schema mínimo é criado automaticamente na primeira chamada da API. Para evoluções maiores, as próximas etapas devem substituir essa inicialização por migrations versionadas e seed completo.

## Estado atual

A primeira entrega inclui dashboard responsivo, navegação desktop/mobile, quatro aulas iniciais com conteúdo real, dicionário pesquisável com 20 caracteres, aula interativa, revisão com quatro avaliações, leitor graduado com áudio e configurações. A persistência de progresso e o banco SQLite estão preparados para a próxima camada de implementação; o estado da sessão atual é local à interface.

## Próximos passos

Adicionar Drizzle migrations/seed SQLite, API Nitro para progresso, FSRS/SM-2 persistido, segmentação lexical por token, PWA offline, testes Vitest/Playwright e conteúdo completo dos 180 dias.
