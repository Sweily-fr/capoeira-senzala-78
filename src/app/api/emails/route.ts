import { NextResponse } from "next/server";
import { ImapFlow } from "imapflow";
import { simpleParser } from "mailparser";

export interface EmailData {
  id: string;
  from: string;
  fromEmail: string;
  subject: string;
  preview: string;
  content: string;
  htmlContent: string;
  timestamp: string;
  read: boolean;
}

async function fetchEmails(): Promise<EmailData[]> {
  const client = new ImapFlow({
    host: process.env.IMAP_HOST || "",
    port: parseInt(process.env.IMAP_PORT || "993"),
    secure: true,
    auth: {
      user: process.env.IMAP_USER || "",
      pass: process.env.IMAP_PASSWORD || "",
    },
    logger: false,
  });

  const emails: EmailData[] = [];
  const fetchCount = parseInt(process.env.IMAP_FETCH_COUNT || "7");

  try {
    await client.connect();

    // Ouvrir la boîte de réception
    const mailbox = await client.mailboxOpen("INBOX");

    if (!mailbox.exists || mailbox.exists === 0) {
      await client.logout();
      return [];
    }

    // Calculer la plage des derniers emails
    const totalMessages = mailbox.exists;
    const startSeq = Math.max(1, totalMessages - fetchCount + 1);
    const range = `${startSeq}:${totalMessages}`;

    // Récupérer les emails
    for await (const message of client.fetch(range, {
      envelope: true,
      source: true,
      flags: true,
    })) {
      const envelope = message.envelope;
      const fromAddress = envelope.from?.[0];

      let content = "";
      let htmlContent = "";
      let preview = "";

      if (message.source) {
        // Utiliser mailparser pour parser correctement le contenu MIME
        const parsed = await simpleParser(message.source);

        // Contenu HTML (pour l'affichage riche)
        htmlContent = parsed.html || "";

        // Contenu texte (pour le preview et le fallback)
        content = parsed.text || "";

        // Créer un aperçu à partir du texte brut
        preview = content.substring(0, 150).replace(/\s+/g, " ").trim();
        if (content.length > 150) preview += "...";
      }

      const isRead = message.flags?.has("\\Seen") || false;

      emails.push({
        id: message.uid.toString(),
        from: fromAddress?.name || fromAddress?.address || "Inconnu",
        fromEmail: fromAddress?.address || "",
        subject: envelope.subject || "(Sans sujet)",
        preview,
        content,
        htmlContent,
        timestamp: envelope.date?.toISOString() || new Date().toISOString(),
        read: isRead,
      });
    }

    await client.logout();
  } catch (error) {
    console.error("Erreur IMAP:", error);
    throw error;
  }

  // Retourner les emails du plus récent au plus ancien
  return emails.reverse();
}

export async function GET() {
  // Vérifier que les variables d'environnement sont configurées
  if (!process.env.IMAP_HOST || !process.env.IMAP_USER || !process.env.IMAP_PASSWORD) {
    return NextResponse.json(
      { error: "Configuration IMAP manquante", emails: [] },
      { status: 500 }
    );
  }

  try {
    const emails = await fetchEmails();
    return NextResponse.json({ emails });
  } catch (error) {
    console.error("Erreur lors de la récupération des emails:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des emails", emails: [] },
      { status: 500 }
    );
  }
}
