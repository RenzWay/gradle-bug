export function Card({ title, image, subTitle, code, onImageClick }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <figure className="card-image" onClick={onImageClick}>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h3>{subTitle}</h3>
        <div className="code-block">
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
