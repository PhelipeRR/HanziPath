# HanziPath — status da implementação

## Concluído

- Fundação Nuxt 4 + TypeScript + Tailwind module + Pinia module.
- Identidade visual responsiva, sidebar desktop e navegação inferior mobile.
- Dashboard inicial com meta diária, sequência, progresso e atividade semanal.
- Currículo inicial com quatro aulas e fluxo introdução → caracteres → exercício.
- Conteúdo real para 20 caracteres básicos, com pinyin tonal, significado e radical.
- Busca no dicionário por hanzi, pinyin e português.
- Revisão interativa com avaliações Errei/Difícil/Bom/Fácil.
- Leitor graduado com alternância de pinyin e SpeechSynthesis.
- Configurações iniciais e documentação.
- SQLite local com tabelas de progresso, conclusões e revisões.
- Endpoints Nitro com validação Zod para progresso, aulas concluídas e avaliações.
- Conclusão de aula e revisão agora persistem no banco.

## Pendente

- Build de produção validado com `npm run build`.
- Ainda falta cobertura automatizada de testes.
- Persistência SQLite/Drizzle e migrations.
- FSRS/SM-2 persistido, APIs Nitro e histórico de sessões.
- PWA/offline, segmentação lexical completa, 50 caracteres e dez leituras.
- Suíte Vitest/Playwright e autenticação/proteção para exposição externa.

## Próximo passo recomendado

Executar `npm install`, depois `npm run build`. Em seguida implementar a camada Nitro + SQLite antes de expandir o conteúdo para evitar que o progresso inicial fique apenas no estado da interface.
