import avatar from '../../images/Avatar.png';

export default function Author () {
    return(
              <div class="author">
        <div class="author-avatar-container">
          <img class="author-image" src={avatar} alt="Autor" />
          <button class="author-avatar-edit-button" type="button"></button>
        </div>
        <div class="author-info">
          <div class="author-name-wrapper">
            <h1 id="profileName" class="author-name">Jacques Cousteau</h1>
            <button id="openModalBtn" class="author-edit"></button>
          </div>
          <p class="author-subtitle" id="profileTitle">Explorador</p>
        </div>
        <button id="openPlaceModalBtn" class="author-add"></button>
      </div>
    );
    }