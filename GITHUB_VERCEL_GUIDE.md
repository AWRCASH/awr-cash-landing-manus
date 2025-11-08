# 🚀 Guia Completo: Publicar Landing Page no GitHub e Vercel

Este guia passo a passo te ajudará a publicar a landing page da AWR Cash usando GitHub e Vercel.

---

## 📋 Pré-requisitos

Antes de começar, você precisará de:

1. **Conta no GitHub** (gratuita em https://github.com)
2. **Conta na Vercel** (gratuita em https://vercel.com)
3. **Git instalado** no seu computador (https://git-scm.com)
4. **Node.js e npm/pnpm** instalados (https://nodejs.org)

---

## 🔧 PARTE 1: Preparar o Projeto Localmente

### **Passo 1: Clonar ou Copiar o Projeto**

Se você está usando a plataforma Manus, você pode:

**Opção A: Fazer download dos arquivos**
1. Acesse o painel de gerenciamento do projeto
2. Clique em "Code" (Código)
3. Clique em "Download all files" para baixar o projeto completo
4. Extraia o arquivo ZIP em uma pasta no seu computador

**Opção B: Se já tem o projeto localmente**
- Navegue até a pasta do projeto no terminal

### **Passo 2: Instalar Dependências**

Abra o terminal na pasta do projeto e execute:

```bash
# Se usar pnpm (recomendado)
pnpm install

# Ou se usar npm
npm install

# Ou se usar yarn
yarn install
```

### **Passo 3: Testar Localmente (Opcional)**

Para verificar se tudo está funcionando:

```bash
# Inicie o servidor de desenvolvimento
pnpm dev

# Ou com npm
npm run dev
```

O site abrirá em `http://localhost:5173` (ou outra porta indicada)

---

## 📤 PARTE 2: Criar Repositório no GitHub

### **Passo 1: Criar um Novo Repositório**

1. Acesse https://github.com/new
2. Preencha os dados:
   - **Repository name**: `awr-cash-landing` (ou outro nome que preferir)
   - **Description**: "Landing page profissional para AWR Cash"
   - **Visibility**: Escolha `Public` (para que a Vercel possa acessar)
   - **Initialize this repository with**: Deixe em branco (vamos fazer isso localmente)
3. Clique em **"Create repository"**

### **Passo 2: Conectar Repositório Local ao GitHub**

Copie e execute os comandos que o GitHub fornece. Geralmente são:

```bash
# Inicializar git (se ainda não fez)
git init

# Adicionar arquivo remoto
git remote add origin https://github.com/SEU_USUARIO/awr-cash-landing.git

# Renomear branch para main (se necessário)
git branch -M main

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit: AWR Cash landing page"

# Enviar para GitHub
git push -u origin main
```

**Substitua `SEU_USUARIO` pelo seu nome de usuário no GitHub**

### **Passo 3: Verificar no GitHub**

Acesse https://github.com/SEU_USUARIO/awr-cash-landing e verifique se todos os arquivos foram enviados.

---

## 🌐 PARTE 3: Publicar na Vercel

### **Passo 1: Conectar Vercel ao GitHub**

1. Acesse https://vercel.com/dashboard
2. Clique em **"New Project"** (Novo Projeto)
3. Clique em **"Import Git Repository"** (Importar Repositório Git)
4. Procure por `awr-cash-landing` (seu repositório)
5. Clique em **"Import"** (Importar)

### **Passo 2: Configurar Projeto na Vercel**

A Vercel detectará automaticamente que é um projeto Vite/React. Configure:

1. **Project Name**: `awr-cash-landing` (ou outro nome)
2. **Framework**: Vite (deve ser detectado automaticamente)
3. **Root Directory**: `./` (deixe como está)
4. **Build Command**: `pnpm build` (ou `npm run build`)
5. **Output Directory**: `dist` (deve ser detectado automaticamente)
6. **Environment Variables**: Deixe em branco (não há variáveis necessárias)

Clique em **"Deploy"** (Implantar)

### **Passo 3: Aguardar Deploy**

- A Vercel começará a construir e implantar o projeto
- Você verá uma barra de progresso
- Quando terminar, você receberá uma URL como: `https://awr-cash-landing-abc123.vercel.app`

### **Passo 4: Testar o Site**

Acesse a URL fornecida e verifique se tudo está funcionando corretamente:
- ✅ Logo visível no topo
- ✅ Navegação funcionando
- ✅ Botões de contato ativos
- ✅ Footer visível

---

## 🎯 PARTE 4: Configurar Domínio Personalizado (www.awrcash.com.br)

### **Opção A: Usar Domínio na Vercel**

1. No dashboard da Vercel, clique no seu projeto
2. Vá para **"Settings"** (Configurações)
3. Clique em **"Domains"** (Domínios)
4. Clique em **"Add"** (Adicionar)
5. Digite seu domínio: `www.awrcash.com.br`
6. Escolha uma das opções:

#### **Opção A1: Nameservers da Vercel (Recomendado)**
- Copie os nameservers fornecidos
- Acesse seu provedor de domínio (registro.br, GoDaddy, etc.)
- Atualize os nameservers para os da Vercel
- Aguarde 24-48 horas para propagação

#### **Opção A2: Registros CNAME**
- Copie o registro CNAME fornecido
- Acesse seu provedor de domínio
- Crie um registro CNAME apontando para a Vercel
- Aguarde propagação

### **Opção B: Usar Domínio em Outro Provedor**

Se seu domínio está em outro provedor (não é Vercel):

1. Acesse o painel de controle do seu provedor de domínio
2. Procure por "DNS Records" ou "Registros DNS"
3. Crie um registro **CNAME** ou **A** apontando para:
   - CNAME: `cname.vercel-dns.com`
   - Ou use o endereço IP fornecido pela Vercel
4. Configure o domínio na Vercel conforme descrito acima

---

## 🔄 PARTE 5: Fazer Atualizações no Futuro

Sempre que precisar fazer alterações no site:

### **Passo 1: Fazer Alterações Localmente**

```bash
# Edite os arquivos conforme necessário
# Por exemplo: client/src/pages/Home.tsx
```

### **Passo 2: Enviar para GitHub**

```bash
# Adicionar alterações
git add .

# Fazer commit
git commit -m "Descrição das alterações"

# Enviar para GitHub
git push
```

### **Passo 3: Vercel Fará Deploy Automaticamente**

- A Vercel detectará as mudanças no GitHub
- Fará build automaticamente
- Publicará a nova versão em alguns minutos
- Você verá o progresso no dashboard da Vercel

---

## 🐛 Solução de Problemas

### **Problema: Build falha na Vercel**

**Solução:**
1. Verifique se há erros no terminal local: `pnpm build`
2. Corrija os erros
3. Faça commit e push novamente
4. A Vercel tentará fazer build novamente

### **Problema: Domínio não funciona**

**Solução:**
1. Verifique se os registros DNS foram atualizados corretamente
2. Use ferramentas como https://mxtoolbox.com para verificar DNS
3. Aguarde até 48 horas para propagação completa
4. Limpe o cache do navegador (Ctrl+Shift+Delete)

### **Problema: Imagens não aparecem**

**Solução:**
1. Verifique se as URLs das imagens estão corretas
2. Se usar imagens locais, coloque-as em `client/public/`
3. Referencie com caminho absoluto: `/nome-da-imagem.png`

### **Problema: Estilos CSS não aparecem**

**Solução:**
1. Limpe o cache: `pnpm clean` ou `npm clean`
2. Reinstale dependências: `pnpm install`
3. Faça novo build: `pnpm build`
4. Envie para GitHub e deixe Vercel fazer deploy

---

## 📊 Monitorar Seu Site

### **Dashboard da Vercel**

Acesse https://vercel.com/dashboard para:
- Ver histórico de deploys
- Monitorar performance
- Verificar logs de erro
- Configurar domínios
- Gerenciar variáveis de ambiente

### **Estatísticas do Site**

Para adicionar analytics (rastreamento de visitantes):

1. Integre Google Analytics (https://analytics.google.com)
2. Ou use Vercel Analytics (https://vercel.com/analytics)
3. Adicione o código de rastreamento ao seu site

---

## ✅ Checklist Final

Antes de considerar o projeto completo:

- [ ] Repositório criado no GitHub
- [ ] Todos os arquivos enviados para GitHub
- [ ] Projeto importado na Vercel
- [ ] Deploy bem-sucedido
- [ ] Site acessível via URL da Vercel
- [ ] Domínio personalizado configurado
- [ ] DNS propagado (24-48 horas)
- [ ] Site funciona com domínio personalizado
- [ ] Logo visível no topo e rodapé
- [ ] Botões de contato funcionam
- [ ] Formulário Zoho acessível
- [ ] WhatsApp link funciona
- [ ] Site responsivo em mobile

---

## 🎓 Próximos Passos

Após publicar o site:

1. **Adicione Google Analytics** para rastrear visitantes
2. **Configure Google Search Console** para SEO
3. **Crie backups** do repositório GitHub
4. **Configure emails** para receber submissões do formulário
5. **Monitore performance** regularmente
6. **Atualize conteúdo** conforme necessário

---

## 📞 Suporte

Se encontrar problemas:

1. **GitHub Help**: https://docs.github.com
2. **Vercel Documentation**: https://vercel.com/docs
3. **Vite Documentation**: https://vitejs.dev
4. **React Documentation**: https://react.dev

---

## 🎉 Parabéns!

Seu site AWR Cash está publicado e acessível na internet! 🚀

Para qualquer dúvida ou ajuste, você pode:
- Editar os arquivos localmente
- Fazer commit e push para GitHub
- A Vercel fará deploy automaticamente

Boa sorte com sua landing page! 💪
