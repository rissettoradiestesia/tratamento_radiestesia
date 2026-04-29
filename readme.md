# 📘 Sistema de Acompanhamento de Tratamentos

Este sistema permite cadastrar usuários (pacientes) e acompanhar seus tratamentos em formato de timeline interativa.

---

## 📂 Estrutura do Projeto

- `index.html` → Interface do sistema (login + visualização)
- `usuarios.js` → Base de dados dos usuários e tratamentos

---

## 👤 Como cadastrar um novo usuário

No arquivo `usuarios.js`, adicione um novo objeto dentro do array `usuarios`.

### 📌 Estrutura básica

```js
{
  user: 'LOGIN_DO_USUARIO',
  senha: 'SENHA_DO_USUARIO',
  tipo: 'fluxo',

  tituloFluxo: 'Acompanhamento dos Tratamentos',
  descricaoFluxo: 'Descrição exibida no sistema',

  contato: contatoPadrao,

  tratamentos: [ ... ]
}
```

---

## 🔐 Campos obrigatórios do usuário

| Campo | Descrição |
|------|--------|
| `user` | Login do usuário (ex: CPF ou email) |
| `senha` | Senha de acesso |
| `tipo` | Sempre usar `"fluxo"` para pacientes |
| `tituloFluxo` | Título exibido na tela |
| `descricaoFluxo` | Texto abaixo do título |
| `contato` | Pode usar `contatoPadrao` |

---

## 💊 Como cadastrar tratamentos

Cada usuário pode ter vários tratamentos:

```js
tratamentos: [
  {
    nome: 'Nome do Tratamento',
    Relatório: 'LINK_DO_PDF_OPCIONAL',
    inicio: 'DD/MM/AAAA',
    fim: 'DD/MM/AAAA',
    status: 'Em Andamento',
    itens: [ ... ]
  }
]
```

---

## 📌 Campos do tratamento

| Campo | Obrigatório | Descrição |
|------|----------|----------|
| `nome` | ✅ | Nome do tratamento |
| `Relatório` | ❌ | Link do laudo (GitHub) |
| `inicio` | ❌ | Data inicial |
| `fim` | ❌ | Data final |
| `status` | ✅ | Status geral |
| `itens` | ❌ | Lista de etapas |

---

## 📄 Sobre o campo Relatório

Você deve colocar o link do GitHub:

```js
Relatório: 'https://github.com/.../blob/main/...pdf'
```

O sistema automaticamente converte para link de download:

```
https://raw.githubusercontent.com/...
```

---

## 📅 Como cadastrar os itens (timeline)

Cada tratamento possui uma lista de itens:

```js
itens: [
  {
    item: 'item_01',
    data: '29/04/2026',
    observacao: 'Descrição da etapa',
    status: 'Pendente'
  }
]
```

---

## 📌 Campos dos itens

| Campo | Obrigatório | Descrição |
|------|----------|----------|
| `item` | ❌ | Identificador |
| `data` | ✅ | Data da etapa |
| `observacao` | ✅ | Descrição |
| `status` | ✅ | Status |
| `Horário` | ❌ | Horário da sessão |
| `meet` | ❌ | Link do Google Meet |

---

## ⚙️ Status disponíveis

```
concluida
concluido
pendente
em andamento
em_desenvolvimento
nao_iniciado
finalizado
```

---

## 🤖 Automação importante

Se a data do item for menor que hoje, o sistema automaticamente muda o status para **Concluído**.

---

## 📞 Contato padrão

Configurado no `usuarios.js`:

```js
const contatoPadrao = {
  whatsappNumero: '5515988237737',
  whatsappTexto: 'Mensagem padrão',
  instagramUrl: 'https://instagram.com/...'
};
```

---

## 🎯 Comportamento do sistema

- Login valida usuário
- Tipo `admin` → acesso administrativo
- Tipo `fluxo` → exibe tratamentos
- Tratamentos são expansíveis
- Timeline organizada por data
- Status automático por data

---

## 🚀 Boas práticas

✔ Use datas no formato `DD/MM/AAAA`  
✔ Sempre preencha `status` como "Pendente" inicialmente  
✔ Use `Relatório` para laudos PDF  
✔ Mantenha padrão (`item_01`, `item_02`, etc.)

---

## 🧠 Resumo

Você controla tudo pelo `usuarios.js`:

- Usuários
- Tratamentos
- Etapas
- Laudos
- Status

O `index.html` apenas renderiza automaticamente.
