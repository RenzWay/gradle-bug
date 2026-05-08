import React, { useState } from 'react';
import { BUG_DATA } from '../../data/data';
import MaterialIcons from './materialIcons';

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <main className="container">
      <header className="header">
        <h1>🐛 Android Gradle Bug Reference</h1>
        <p>Solusi untuk Kotlin Parcelize Configuration</p>
      </header>

      <div className="content">
        <div className="cards-grid">
          {BUG_DATA.map((item) => (
            <div key={item.id} className="card">
              <div className="card-header">
                <h2>{item.title}</h2>
              </div>
              <figure className="card-image" onClick={() => setSelectedImg(item)}>
                <img src={item.image} alt={item.title} />
              </figure>
              <div className="card-body">
                <h3>{item.subTitle}</h3>
                <div className="code-block">
                  <pre><code>{item.code}</code></pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Render bersyarat kalau ada image yang dipilih */}
      {selectedImg && (
        <div className="modal active" onClick={() => setSelectedImg(null)}>
          <div className="modal-overlay"></div>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImg(null)}>&times;</button>
            <img src={selectedImg.image} alt="Preview" className="modal-image" />
          </div>
        </div>
      )}
      <br />
      <MaterialIcons/>
    </main>
  );
};

export default App;