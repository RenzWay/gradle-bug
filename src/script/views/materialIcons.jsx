import { ICONS_DATA } from "../../data/data";
import { Card } from "../components/card";
import { useState } from "react";

export default function MaterialIcons() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <section>
      <header className="header">
        <h1>💎 Material Icons</h1>
        <h4>Build gradle</h4>
      </header>

      <div className="content">
        <div className="cards-grid">
          {ICONS_DATA.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              subTitle={item.subTitle}
              code={item.code}
              onImageClick={() => setSelectedImg(item)}></Card>
          ))}

          {selectedImg && (
            <div className="modal active" onClick={() => setSelectedImg(null)}>
              <div className="modal-overlay"></div>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}>
                <button
                  className="modal-close"
                  onClick={() => setSelectedImg(null)}>
                  &times;
                </button>
                <img
                  src={selectedImg.image}
                  alt="Preview"
                  className="modal-image"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
