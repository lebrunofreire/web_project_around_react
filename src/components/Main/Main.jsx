import avatar from "../../../images/Avatar.png";

export default function Main() {
  return (
    <main className="page">
      <div className="author">
        <div className="author-avatar-container">
          <img className="author-image" src={avatar} alt="Autor" />
          <button className="author-avatar-edit-button" type="button"></button>
        </div>
        <div className="author-info">
          <div className="author-name-wrapper">
            <h1 id="profileName" className="author-name">
              Jacques Cousteau
            </h1>
            <button id="openModalBtn" className="author-edit"></button>
          </div>
          <p className="author-subtitle" id="profileTitle">
            Explorador
          </p>
        </div>
        <button id="openPlaceModalBtn" className="author-add"></button>
      </div>
      <section className="elements">
        <template id="card-template">
          <div className="element">
            <img className="element-image" src="" alt="" />
            <button className="element-delete-btn"></button>
            <p className="element-image-title">
              <span></span>
              <button className="element-image-like"></button>
            </p>
          </div>
        </template>
      </section>
    </main>
  );
}
