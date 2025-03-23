import { marked } from "marked";

export function extractExcerpt(markdown: string) {
    // Remove headers
    const noHeaders = markdown.replace(/^#+\s+.*$/gm, "");
    
    // Convert markdown to plain text
    const plainText = marked.parse(noHeaders).toString()
      .replace(/<[^>]+>/g, "") // Remove HTML tags
      .replace(/\s+/g, " ") // Normalize whitespace
      .trim();
    
    // Get the first 30 words
    return plainText.split(" ").slice(0, 35).join(" ");
}
