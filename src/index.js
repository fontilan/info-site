import ReactDOM from "react-dom";
import React from "react";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src="logo192.png" alt="react logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <h1 className="bold">Reasons I'm excited to learn React</h1>
      <ol>
        <li>It's a popular framework, so I will fit in with the cool kids</li>
        <li>
          I will be more likely to find a job as a web developer knowing my way
          around React
        </li>
        <li>
          It actually looks like it can make building websites more managable
          and easier to compatmentalize
        </li>
        <li>It's a new and exciting environment</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>© 2022 Gmuzdek development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.querySelector("#root"));
