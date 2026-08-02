import fs from "fs";
import path from "path";
import React from "react";
import MarkdownRenderer from "../../components/MarkdownRenderer";

export default function Page() {
  const file = path.join(process.cwd(), "content/legal/Constitution.md");
  let md = "";
  try {
    md = fs.readFileSync(file, "utf8");
  } catch (e) {
    md = "Constitution file not found.";
  }

  return (
    <main>
      <header style={{ textAlign: "center", padding: "2rem 1rem 0" }}>
        <h1 style={{ margin: 0 }}>বটতলী ইয়াং স্টার ক্লাব</h1>
        <p style={{ marginTop: 8 }}>গঠন, লক্ষ্য ও নিয়মনীতিসমূহ</p>
      </header>
      <section style={{ padding: "1rem 1rem 3rem" }}>
        <MarkdownRenderer md={md} />
      </section>
    </main>
  );
}
