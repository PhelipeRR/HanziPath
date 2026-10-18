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
- Adaptador migrado de SQLite para Neon PostgreSQL com Drizzle.
- Schema PostgreSQL criado automaticamente na primeira chamada da API.
- Dashboard alimentado pela API e progresso real do banco.
- Fila de revisão por data, intervalos, ease, histórico e domínio após quatro acertos.
- Configurações persistentes e backup JSON com validação de versão.

## Pendente

- Build de produção validado com `npm run build`.
- Ainda falta cobertura automatizada de testes.
- Migrations versionadas e seed completo do banco.
- Algoritmo FSRS/SM-2 completo; atualmente há repetição espaçada persistente com ajuste de ease.
- PWA/offline, segmentação lexical completa, 50 caracteres e dez leituras.
- Suíte Vitest/Playwright e autenticação/proteção para exposição externa.

## Próximo passo recomendado

Próximos focos: migrations versionadas, seed completo, conteúdo didático e testes automatizados.
