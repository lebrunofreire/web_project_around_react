import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main class="page">
      <header class="page-header">
        <img src="../images/Vector.png" alt="logo" class="page-logo" />
      </header>
      <div class="author">
        <div class="author-avatar-container">
          <img class="author-image" src="../images/Avatar.png" alt="Autor" />
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
      <section class="elements">
        <template id="card-template">
          <div class="element">
            <img class="element-image" src="" alt="" />
            <button class="element-delete-btn"></button>
            <p class="element-image-title">
              <span></span>
              <button class="element-image-like"></button>
            </p>
          </div>
        </template>
      </section>
      <footer class="footer">&copy; 2025 Around The U.S.</footer>
      </main>
    </>
  )
}

export default App
