import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, SetMarkdown] = useState("## markdown Preview");
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => SetMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
