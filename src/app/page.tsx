export default function Home() {
  return (
    <main className="page-shell">
      <p className="eyebrow">Established 2012</p>
      <h1>Bottoli Young Star Club</h1>
      <p className="intro">
        A volunteer-based social and sports organization serving our community
        through teamwork, activities, and positive change.
      </p>
      <div className="actions">
        <a href="#about">Learn more</a>
        <a className="secondary" href="mailto:info@bottoliyoungstarclub.org">
          Contact the club
        </a>
      </div>
      <section id="about" className="card">
        <p className="eyebrow">Our mission</p>
        <p>
          We bring young people together through sport, service, and shared
          responsibility.
        </p>
      </section>
    </main>
  );
}
