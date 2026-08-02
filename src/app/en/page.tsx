import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <main style={{ padding: "2rem 1rem" }}>
      <header style={{ textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>Bottoli Young Star Club</h1>
        <p style={{ marginTop: 8 }}>A community and sports organisation (founded 2012)</p>
      </header>

      <section style={{ maxWidth: 900, margin: "1.5rem auto", lineHeight: 1.7 }}>
        <h2>About</h2>
        <p>
          Bottoli Young Star Club is an independent, non-political volunteer organisation established in 2012 to
          promote sports, cultural activities and community welfare in the Bottoli area. The club focuses on youth
          development, leadership, and social service.
        </p>

        <h2>Mission & Activities</h2>
        <ul>
          <li>Develop drug-free youth and promote healthy lifestyles.</li>
          <li>Support education through libraries and financial aid for needy students.</li>
          <li>Organise football and cricket teams and host tournaments.</li>
          <li>Run cultural events and community welfare programmes (relief distribution, tree planting, etc.).</li>
          <li>Provide free computer training to members via a local training centre.</li>
        </ul>

        <h2>Read the Constitution</h2>
        <p>
          The full constitution (Bangla) is available here: <Link href="/bn">বাংলা গঠনতন্ত্র</Link>.
        </p>

        <h2>Get Involved</h2>
        <p>
          To join or learn more, contact the club organisers. The club is run by an elected executive committee with
          defined roles for president, general secretary, treasurer, sports &amp; IT officers, and an advisory board.
        </p>
      </section>
    </main>
  );
}
