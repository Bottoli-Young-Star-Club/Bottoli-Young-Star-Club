import React from "react";

// Minimal markdown renderer for headings, paragraphs and lists.
// Server-safe, no external deps.
export default function MarkdownRenderer({ md }: { md: string }) {
  const lines = md.split(/\r?\n/);
  const elements: React.ReactNode[] = [];
  let listBuffer: string[] | null = null;

  function flushList() {
    if (!listBuffer) return;
    elements.push(
      React.createElement(
        "ul",
        { key: `list-${elements.length}`, style: { marginLeft: 0, paddingLeft: "1.25rem" } },
        listBuffer.map((li, i) => React.createElement("li", { key: i }, li))
      )
    );
    listBuffer = null;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) {
      flushList();
      continue;
    }
    if (line.startsWith("# ")) {
      flushList();
      elements.push(React.createElement("h1", { key: i }, line.replace(/^#\s+/, "").trim()));
      continue;
    }
    if (line.startsWith("## ")) {
      flushList();
      elements.push(React.createElement("h2", { key: i }, line.replace(/^##\s+/, "").trim()));
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      elements.push(React.createElement("h3", { key: i }, line.replace(/^###\s+/, "").trim()));
      continue;
    }
    if (/^[*+-]\s+/.test(line) || /^\+\s+/.test(line) || /^-\s+/.test(line)) {
      const item = line.replace(/^([*+-])\s+/, "").trim();
      if (!listBuffer) listBuffer = [];
      listBuffer.push(item);
      continue;
    }
    // fallback paragraph
    flushList();
    elements.push(React.createElement("p", { key: i, style: { textAlign: "justify", lineHeight: 1.7, margin: "0.5rem 0" } }, line));
  }
  flushList();

  return React.createElement("article", { style: { maxWidth: 900, margin: "0 auto", padding: "1rem" } }, elements);
}
