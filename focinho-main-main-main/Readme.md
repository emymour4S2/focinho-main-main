# PiagetManagement Site

Site de apresentação do software PiagetManagement, desenvolvido para a Universidade Piaget.

## Estrutura
- `index.html`: Página inicial.
- `sobre.html`: Informações sobre o projeto.
- `serviços.html`: Descrição das funcionalidades.
- `contato.html`: Formulário de contato.
- `css/styles.css`: Estilos personalizados.
- `js/scripts.js`: Funcionalidades JavaScript.



# **Guia para Desenvolvimento do Projeto**

**Objetivo Geral**: Aplicar os conceitos de **gestão de riscos, análise custo-benefício, impactos socioeconômicos e aspectos práticos** ao desenvolvimento do software**.**

Com entrega final de um **site no Git-Pages com: Home, Sobre, Serviços, Contato.**

## **Etapas do Projeto (Passo a Passo)**

## **1. Formação da Equipe e Planejamento Inicial**

| Tarefa | Responsável | Ferramenta |
| --- | --- | --- |
| Formar grupos de alunos | Todos | Presencial |
| Definir papéis: Gerente de Projeto, Desenvolvedor Front-end, Analista de Riscos, Analista Financeiro | Gerente | Git-Readme |

## **2. Identificação e Gestão de Riscos**

### **Passo 2.1 – Identificar Riscos**

**Exemplo de Riscos (alunos devem personalizar):**

| Risco | Tipo | Probabilidade | Impacto | Prioridade |
| --- | --- | --- | --- | --- |
| Falha na integração com sistema de matrículas | Negativo | Média | Grave | Alta |
| Atraso na entrega da interface | Negativo | Alta | Moderado | Alta |
| API de autenticação mais eficiente que o esperado | Positivo | Baixa | Moderado | Média |

### **Passo 2.2 – Avaliar e Mitigar**

1. Detalhe os risco como:
    - Descrição
    - Probabilidade e Impacto
    - Estratégia de mitigação
    - Plano de contingência
2. Use a **Matriz de Risco** (anexe imagem ou tabela).

**Exemplo de Mitigação:**

> Risco: Falha na integração

> **Mitigação**: Testes unitários + ambiente de staging
> **Contingência**: Contratar consultor externo
 

## **3. Análise Custo-Benefício e Impactos**

### **Passo 3.1 – Análise Custo-Benefício (ACB)**

1. Na documentação, adicione:
    - Custos: Desenvolvimento, Manutenção, Treinamento

### **Passo 3.2 – Impactos Socioeconômicos e Ambientais**

1. Liste os “Impactos do Projeto”:
- **impactos socioeconômicos**
- **impacto ambiental** (ex: consumo de energia em nuvem)
- **ação de mitigação/maximização** para cada

**Exemplo:**

| Impacto | Tipo | Ação |
| --- | --- | --- |
| Capacitação de 200 professores | Socioeconômico | Oferecer workshops gratuitos |
| Consumo de energia em servidores | Ambiental | Escolher AWS com energia renovável |

## **4. Desenvolvimento do Site de Apresentação**

### **Passo 4.1 – Configurar Repositório GitHub**


# 1. Configurar Git
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# 2. Criar e clonar repositório
git clone <https://github.com/SeuUsuario/PiagetManagement-Site.git>
cd PiagetManagement-Site


### **Passo 4.2 – Criar Estrutura do Site**

1. Crie as pastas: `css/`, `js/`, `assets/`
2. Copie os arquivos do modelo fornecido:
    - `index.html`, `about.html`, `services.html`, `contact.html`
    - `css/styles.css`
    - `js/scripts.js`

### **Passo 4.3 – Personalizar o Conteúdo**

| Página | O que personalizar |
| --- | --- |
| **Home** | Título, descrição, botão CTA |
| **Sobre** | Missão, ciclo de vida, equipe |
| **Serviços** | 3 funcionalidades principais do Projeto |
| **Contato** | Formulário ou api google map, telefone e email |

### **Passo 4.4 – Versionamento com Git**
git add .
git commit -m "feat: adiciona página inicial e navbar"
git push origin main


### **5. Deploy no GitHub Pages**

### **Passo 5.1 – Habilitar GitHub Pages**

1. Acesse o repositório no GitHub
2. Vá em **Settings > Pages**
3. Em **Source**: Selecione `main` → `/ (root)`
4. Salve → Aguarde o link: `https://SeuUsuario.github.io/PiagetManagement-Site`

## **7. Documentação Final**

Crie um **relatório final** (PDF) com:

1. **Capa**: Nome do grupo e disciplina
2. **Introdução**: Objetivo do Projeto
3. **Gestão de Riscos**: Matriz + mitigação
4. **Análise Financeira**:
5. **Impactos**: Tabela de impactos + ações
6. **Site**: Link do GitHub Pages + capturas de tela
7. **Conclusão**: Lições aprendidas

## **8. Apresentação Final**

| Conteúdo |
| --- |
| Apresentar o Projeto |
| Mostrar gestão de riscos |
| Análise financeira |
| Demonstração do site (navegação ao vivo) |
| Conclusão e link do GitHub Pages |

## **Entregáveis Finais (Obrigatórios)**

| Item | Formato | Onde Entregar |
| --- | --- | --- |
| Repositório GitHub | Link | Google Classroom |
| Site publicado (GitHub Pages) | URL funcional | Apresentação e Google Classroom |
| Relatório final (PDF) | 5-8 páginas | Google Classroom |

## **Recursos e Links Úteis**

- **GitHub**: [github.com](https://github.com/)
- **GitHub Pages**: [docs.github.com/en/pages](https://docs.github.com/en/pages)
- **Bootstrap**: [getbootstrap.com](https://getbootstrap.com/)
- **Figma (mockups)**: [figma.com](https://figma.com/)