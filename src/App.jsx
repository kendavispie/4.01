import { useState } from "react";
import { episodeList } from "./data.js";

export function App() {
  // TODO
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  
  function ShowEpisode() {
    if (!selectedEpisode) {
      return (
        <section  className="episode-select">
          <h2>Select Episode </h2>
        </section>
      );
    }
    return (
      <section className="episode-select">
        <h2>{selectedEpisode.title}</h2>
        <h3> {selectedEpisode.description}</h3>
        <button className="selected-button">Watch</button>
      </section>
    );
   }
  
  
   return(
    <>
    <main className="container">
      <section className="left">
   <header>
<h1 className="web-title">Dark Echoes</h1>
<h2 className="web-subtitle">Episodes</h2>
</header>

      {episodeList.map((episode) => (
        <div key={episode.id}>
          <button className="buttons" onClick={() => setSelectedEpisode(episode)}>
            {episode.title}
            </button>
          </div>
      ))}
      </section>
<section className="right">
<ShowEpisode />
</section>
</main>
  </>
   );
}
export default App;