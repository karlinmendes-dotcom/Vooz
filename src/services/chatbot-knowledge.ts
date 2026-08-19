const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export const SYSTEM_PROMPT = `
Você é o assistente da Vooz. Fale como uma pessoa real, simpática e direta.

REGRAS:
- Respostas curtas (máximo 3-4 frases)
- Fale como se fosse um amigo explicando
- Use linguagem simples, sem formalidade excessiva
- Emojis com moderação (1-2 por mensagem)
- Nunca fale de tecnologia, programação ou coisas técnicas
- Seja empático, entenda a dor do cliente
- Sempre ofereça ajuda concreta
- Se não souber algo, encaminhe para o WhatsApp

SOBRE A VOZZ:
Ajudamos barbearias, salões, clínicas, studios a organizar agendamentos e clientes. O cliente não perde mais tempo respondendo WhatsApp, o sistema faz tudo.

PLANOS (preços exatos):
- Essencial: R$97/mês + R$447 implementação (30 dias grátis)
- Profissional: R$147/mês + R$747 implementação
- Premium: R$197/mês + R$997 implementação

CONTATO: WhatsApp (27) 99804-1197
`;

export const WELCOME_MESSAGE = `Oi! 👋 Tudo bem?

Sou da Vooz. Me conta, o que você precisa?`;

export async function sendMessageToAI(userMessage: string, conversationHistory: Array<{role: string; content: string}>): Promise<string> {
  if (!GROQ_API_KEY) {
    return generateLocalResponse(userMessage);
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...conversationHistory.slice(-10),
          { role: "user", content: userMessage },
        ],
        temperature: 0.7,
        max_tokens: 200,
      }),
    });

    if (!response.ok) {
      return generateLocalResponse(userMessage);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || generateLocalResponse(userMessage);
  } catch {
    return generateLocalResponse(userMessage);
  }
}

function generateLocalResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase();

  if (msg.match(/^(oi|olá|ola|bom dia|boa tarde|boa noite|hello|hi)/)) {
    return `Oi! 👋 Tudo bem?

Me conta, o que você precisa?`;
  }

  if (msg.includes("preço") || msg.includes("preco") || msg.includes("quanto") || msg.includes("valor") || msg.includes("plano") || msg.includes("mensal")) {
    return `Temos 3 opções:

🟢 Essencial — R$97/mês + R$447 pra começar
🔵 Profissional — R$147/mês + R$747
🟣 Premium — R$197/mês + R$997

O Essencial tem 30 dias grátis! Quer saber mais de algum?`;
  }

  if (msg.includes("como funciona") || msg.includes("funciona") || msg.includes("processo")) {
    return `Bem simples:

A gente configura tudo pra você. Seus clientes agendam pelo celular e você gerencia tudo num painel fácil.

Sem complicação, sem programação. 😊`;
  }

  if (msg.includes("para quem") || msg.includes("quem") || msg.includes("barbearia") || msg.includes("salão") || msg.includes("salo") || msg.includes("clínica") || msg.includes("clinica") || msg.includes("studio") || msg.includes("tatuador")) {
    return `É pra barbearias, salões, clínicas, studios, tatuadores...

Qualquer negócio que trabalha com agendamento. 😊

Seu negócio se encaixa?`;
  }

  if (msg.includes("whatsapp") || msg.includes("contato") || msg.includes("falar") || msg.includes("conversar")) {
    return `Chama no WhatsApp: (27) 99804-1197

A gente te ajuda! 📱`;
  }

  if (msg.includes("cancelar") || msg.includes("cancela")) {
    return `Pode cancelar quando quiser, sem multa. 😊`;
  }

  if (msg.includes("teste") || msg.includes("grátis") || msg.includes("gratis") || msg.includes("testar")) {
    return `O Essencial tem 30 dias grátis! Sem cartão.

Quer testar? Chama no WhatsApp: (27) 99804-1197 🚀`;
  }

  if (msg.includes("obrigad") || msg.includes("valeu")) {
    return `De nada! 😊 Tô aqui se precisar.`;
  }

  if (msg.includes("tchau") || msg.includes("até")) {
    return `Tchau! 👋 Bons negócios!`;
  }

  return `Hmm, não tenho essa info. Mas posso te ajudar com preços, planos ou como funciona.

Ou me chama no WhatsApp: (27) 99804-1197 😊`;
}