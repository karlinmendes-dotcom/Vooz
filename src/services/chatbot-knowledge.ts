// Base de conhecimento do chatbot Vooz
// Este arquivo define tudo que o chatbot sabe sobre a empresa

export const CHATBOT_NAME = "Vooz";

export const SYSTEM_PROMPT = `
Você é o assistente virtual da Vooz, uma empresa de tecnologia especializada em criar soluções digitais para pequenos negócios que trabalham com agendamento.

REGRAS OBRIGATÓRIAS:
1. Você SÓ fala sobre a Vooz e seus serviços. Nunca responda sobre outros assuntos.
2. Seja simpático, profissional e direto.
3. Responda em português brasileiro.
4. Nunca invente informações. Se não souber, diga que vai encaminhar para o time.
5. Sempre tente guiar o cliente para contratar um plano ou falar com o time pelo WhatsApp.
6. Não fale de tecnologia, programação, frameworks ou coisas técnicas.
7. Fale como se estivesse conversando com o dono de um negócio local.

SOBRE A VOZZ:
- Somos uma empresa que ajuda pequenos negócios a organizar seus atendimentos
- Focamos em barbearias, salões de beleza, clínicas de estética, studios, nail designers, lash designers, tatuadores e profissionais autônomos
- Nossa solução inclui: agendamento online, CRM, lembretes, painel administrativo e automações

PLANOS:
1. ESSENCIAL - R$97/mês + R$447 de implementação (pagamento único)
   - Sistema de agendamento online
   - Página profissional
   - Cadastro de serviços e horários
   - Gestão de clientes
   - Painel administrativo básico
   - Suporte básico
   - 30 dias grátis

2. PROFISSIONAL - R$147/mês + R$747 de implementação (pagamento único)
   - Tudo do Essencial
   - CRM completo
   - Histórico de clientes
   - Automação de confirmações
   - Lembretes por WhatsApp
   - Relatórios básicos
   - Suporte prioritário

3. PREMIUM - R$197/mês + R$997 de implementação (pagamento único)
   - Tudo do Profissional
   - CRM completo e avançado
   - Integração completa com WhatsApp
   - IA configurada para o negócio
   - Automações avançadas
   - Relatórios e indicadores
   - Suporte prioritário

PROCESSO:
1. Cliente entra em contato
2. Entendemos o negócio
3. Configuramos tudo (identidade visual, serviços, horários)
4. Cliente começa a receber agendamentos
5. Suporte contínuo

CONTATO:
- WhatsApp: (27) 99804-1197
- Site: vooz.vercel.app
`;

export const WELCOME_MESSAGE = `Olá! 👋 Sou o assistente da Vooz.

Posso te ajudar a entender como funciona nosso sistema de agendamento para o seu negócio.

O que você gostaria de saber?`;

export const FALLBACK_RESPONSE = `Desculpa, não tenho essa informação. Mas posso te ajudar com tudo sobre nossos planos e serviços.

Quer saber nossos preços ou como funciona? Ou prefere falar direto com nossa equipe pelo WhatsApp?`;

// Função para gerar resposta baseada na pergunta
export function generateResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  // Saudações
  if (message.match(/^(oi|olá|ola|bom dia|boa tarde|boa noite|hello|hi)/)) {
    return `Olá! 👋 Bem-vindo à Vooz! 

Posso te ajudar a entender como nosso sistema de agendamento pode transformar seu negócio. 

O que você gostaria de saber?`;
  }

  // Preços
  if (message.includes("preço") || message.includes("preco") || message.includes("quanto") || message.includes("valor") || message.includes("plano") || message.includes("mensal")) {
    return `Temos 3 planos:

🟢 **Essencial** - R$97/mês + R$447 implementação
   → Agendamento online, gestão de clientes, painel básico

🔵 **Profissional** - R$147/mês + R$747 implementação
   → Tudo do Essencial + CRM, lembretes WhatsApp, relatórios

🟣 **Premium** - R$197/mês + R$997 implementação
   → Tudo + IA, automações avançadas, WhatsApp integrado

Todos têm 30 dias grátis no plano Essencial! 

Quer saber mais sobre algum plano específico?`;
  }

  // Como funciona
  if (message.includes("como funciona") || message.includes("funciona") || message.includes("processo")) {
    return `É muito simples:

1️⃣ Você fala com a gente
2️⃣ Configuramos tudo para seu negócio
3️⃣ Seus clientes começam a agendar pelo celular
4️⃣ Você gerencia tudo em um painel fácil

Sem complicação, sem programação. A gente faz tudo para você! 🚀`;
  }

  // Para quem é
  if (message.includes("para quem") || message.includes("quem") || message.includes("barbearia") || message.includes("salão") || message.includes("salo") || message.includes("clínica") || message.includes("clinica") || message.includes("studio")) {
    return `O Vooz é perfeito para:

✂️ Barbearias
💇 Salões de beleza
💅 Nail designers
👁️ Lash designers
💆 Clínicas de estética
🖌️ Tatuadores
🏋️ Studios
🐶 Pet shops
...e qualquer profissional que trabalha com agendamento!

Seu negócio se encaixa? Me conta mais! 😊`;
  }

  // WhatsApp
  if (message.includes("whatsapp") || message.includes("contato") || message.includes("falar") || message.includes("conversar")) {
    return `Claro! Você pode falar diretamente com nossa equipe:

📱 WhatsApp: (27) 99804-1197

Eles vão te ajudar com tudo que precisar! 😊`;
  }

  // Cancelamento
  if (message.includes("cancelar") || message.includes("cancela") || message.includes("triar")) {
    return `Sim, pode cancelar quando quiser! 

Sem multa, sem taxa. Seus dados ficam disponíveis por 30 dias após o cancelamento.

Mas espero que não precise cancelar! 😊`;
  }

  // Demonstração / teste grátis
  if (message.includes("teste") || message.includes("grátis") || message.includes("gratis") || message.includes("demonstração") || message.includes("demonstracao") || message.includes("testar")) {
    return `Ótimo! O plano Essencial tem 30 dias grátis!

Você pode testar sem compromisso, sem cartão de crédito.

Quer comece agora? Fala com a gente pelo WhatsApp: (27) 99804-1197 🚀`;
  }

  // Obrigado
  if (message.includes("obrigad") || message.includes("valeu") || message.includes("thanks")) {
    return `De nada! 😊 Estou aqui se precisar de mais alguma coisa.

Bons negócios! 🚀`;
  }

  // Tchau
  if (message.includes("tchau") || message.includes("até") || message.includes("adeus")) {
    return `Tchau! 👋 Foi bom conversar com você!

Qualquer coisa, é só chamar. Bons negócios! 🚀`;
  }

  // Fallback
  return FALLBACK_RESPONSE;
}