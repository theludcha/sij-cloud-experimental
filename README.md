# SIJ Cloud — Experimental

Protótipo independente de gestão institucional para cidades RP.

## Segurança e isolamento
- Nenhuma integração com HC-SIJ Heaven City.
- Nenhuma variável de ambiente ou base de dados de produção.
- Cidades fictícias e dados demonstrativos.
- **Não utilizar com dados de cidadãos ou clientes:** autenticação, RLS e persistência ainda não foram implementadas.

## Desenvolvimento
```bash
npm install
npm run dev
```

## Próximas etapas
1. Provisionar Supabase em projeto separado após selecionar a organização.
2. Implementar autenticação por organização e isolamento no banco com testes automatizados.
3. Liberar apenas após auditoria de autorização e políticas RLS.

Este repositório contém somente dados sintéticos e código de demonstração.
