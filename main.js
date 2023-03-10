import './style.css'


document.querySelector('#app').innerHTML = `

 <div class="mention">
    <div>or-yam</div>
    <div class="links">
      <a href="https://codepen.io/oryamne" target="_blank">
        <div class="link-logo codepen"></div>
      </a>
      <a href="https://github.com/or-yam" target="_blank">
        <div class="link-logo github"></div>
      </a>
      <a href="https://dev.to/oryam" target="_blank">
        <div class="link-logo dev"></div>
      </a>
      <a href="https://www.linkedin.com/in/oryamne/" target="_blank">
        <div class="link-logo linkedin"></div>
      </a>
    </div>
  </div>

  <div class="logo">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png"
      height="100%"
      alt="logo"
    />
  </div>

  <div class="search-container">

    
    <input type="text" placeholder="Pokemon" id="pokeName" name="pokeName">    

    <div onclick="fetchPokemon()" id="search-btn" class="ball-container">
      <div class="upper-half-ball"></div>
      <div class="bottom-half-ball"></div>
      <div class="center-ball"></div>
      <div class="center-line"></div>
    </div>
  </div>

  <div id="pokedex" >
    <!-- Left Panel -->
    <div id="left-panel">
      <!-- Top lights -->
      <div class="left-top-container">
        <svg height="100" width="225" class="left-svg">
          <polyline
            points="0,75 70,75 90,38 225,38"
            style="fill: none; stroke: black; stroke-width: 1"
          />
        </svg>
        <div class="lights-container">
          <div class="big-light-boarder">
            <div class="big-light blue">
              <div class="big-dot light-blue"></div>
            </div>
          </div>
          <div class="small-lights-container">
            <div class="small-light red">
              <div class="dot light-red"></div>
            </div>
            <div class="small-light yellow">
              <div class="dot light-yellow"></div>
            </div>
            <div class="small-light green">
              <div class="dot light-green"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Center Screen -->
      <div class="screen-container">
        <div class="screen">
          <div class="top-screen-lights">
            <div class="mini-light blue"></div>
            <div class="mini-light red"></div>
          </div>
          <div id="main-screen">
          
          <img src="./assets/img/pokemon1.png" alt="Pokemon" class="img"  id="pokeImg" width="150px">

          </div>
          <div class="bottom-screen-lights">
            <div class="small-light red">
              <div class="dot light-red"></div>
            </div>
            <div class="burger">
              <div class=""></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Bottom Buttons -->
      <div class="buttons-container">
        <div class="upper-buttons-container">
          <div class="big-button"></div>
          <div class="long-buttons-container">
            <div class="long-button light-blue"></div>
            <div class="long-button red"></div>
          </div>
        </div>
        <div class="nav-buttons-container">
          <div class="dots-container">
            <div>.</div>
            <div>.</div>
          </div>
          <div class="green-screen">
            <span id="species"></span>
          </div>
          <div class="right-nav-container">
            <div class="nav-button">
              <div class="nav-center-circle"></div>
              <div class="nav-button-vertical"></div>
              <div class="nav-button-horizontal">
                <div class="border-top"></div>
                <div class="border-bottom"></div>
              </div>
            </div>
            <div class="bottom-right-nav-container">
              <div class="small-light red">
                <div class="dot light-red"></div>
              </div>
              <div class="dots-container">
                <div class="black-dot">.</div>
                <div class="black-dot">.</div>
                <div class="black-dot">.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Left panel -->

    <!-- Right-panel -->
    <div id="right-panel">
      <!-- Blank container -->
      <div class="empty-container">
        <svg height="100%" width="100%">
          <polyline
            points="0,0 0,40 138,40 158,75 250,75 250,0 0,0"
            style="fill:#f2f2f200; stroke: none; stroke-width: 3"
          />
          <polyline
          points="0,38 138,38 160,0  "
            style="fill: none; stroke: black; stroke-width: 1"
          />
        </svg>
      </div>
      <!-- Top screen -->
      <div class="top-screen-container">
        <div id="abilities" class="right-panel-screen">
        </div>
      </div>
      <!-- Blue Buttons -->
      <div class="square-buttons-container">
        <div class="blue-squares-container">
          <div class="blue-square"></div>
          <div class="blue-square"></div>
          <div class="blue-square"></div>
          <div class="blue-square"></div>
          <div class="blue-square"></div>
          <div class="blue-square"></div>
          <div class="blue-square"></div>
          <div class="blue-square"></div>
          <div class="blue-square"></div>
          <div class="blue-square"></div>
        </div>
      </div>
      <!-- Center Buttons -->
      <div class="center-buttons-container">
        <div class="center-left-container">
          <div class="small-reds-container">
            <div class="small-light red">
              <div class="dot light-red"></div>
            </div>
            <div class="small-light red">
              <div class="dot light-red"></div>
            </div>
          </div>
          <div class="white-squares-container">
            <div class="white-square"></div>
            <div class="white-square"></div>
          </div>
        </div>
        <div class="center-right-container">
          <div class="thin-buttons-container">
            <div class="thin-button"></div>
            <div class="thin-button"></div>
          </div>
          <div class="yellow-button yellow">
            <div class="big-dot light-yellow"></div>
          </div>
        </div>
      </div>
      <!-- Bottom screens -->
      <div class="bottom-screens-container">
        <div id="types" class="right-panel-screen"></div>
        
        <div class="bottom-screens-containers">
           <div id="id-screen" class="right-panel-screen">0</div>
        </div>
      </div>
    </div>
  </div>
  
`
