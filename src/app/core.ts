export const Fonte =
`
  <div id="fb-comments-settings" blockComments="-1"></div>
  <script src="https://unpkg.com/@popperjs/core@2"></script>
  <script src="https://unpkg.com/tippy.js@6"></script>
  <script src="https://gerador.chegow.com/likes.js"></script>
  <script src="https://gerador.chegow.com/delay.js"></script>
  <script type="module" src="https://cdn.jsdelivr.net/npm/emoji-picker-element@^1/index.js"></script>
  <script src="https://gerador.chegow.com/emoji.js"></script>
  <script src="https://gerador.chegow.com/settings.js"></script>
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  <style>
    .comment-container {
      width: max-content;
      display: inline-flex;
      font-family: 'Roboto', sans-serif;
      position: relative;
      max-width: 98%;
    }

    .comment-row:hover .comment-options {
      display: block;
    }

    .avatar, .response-avatar {
      width: 32px;
      height: 32px;
      border-radius: 100%;
      background-size: cover;
      background-position: center;
    }

    .response-avatar {
      width: 24px !important;
      height: 24px !important;
    }

    .comment-options {
      display: none;
      position: absolute;
      top: 50%;
      transform: translateY(-52%);
      right: -30px;
      font-weight: bold;
      width: 25px;
      height: 25px;
      background: white;
      border-radius: 100%;
      line-height: 18px;
      text-align: center;
      cursor: pointer;
      user-select: none;
    }

    * {
      font-family: 'Roboto', sans-serif;
    }

    .comment-options:active, .comment-options:focus {
      background: #e4e4e4 !important;
    }

    .comment-options:hover {
      background: #f0f2f5;
    }

    .comment-row {
      margin: auto;
    }

    .comment-content {
      width: max-content;
      min-height: 50px;
      height: auto;
      background: rgb(240, 242, 245);
      border-radius: 15px;
      margin-left: 1%;
      max-width: 100vh;
      position: relative;
    }

    .profile-name {
      font-weight: 600;
      font-size: .8125rem;
      margin-top: 10px;
    }

    .profile-name:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    .comment {
      margin-left: 10px;
      width: 98%;
      font-weight: normal;
      font-size: .9375rem;
      position: relative;
    }

    .comment-textarea {
      margin-top: -10px;
      padding-right: 10px;
    }

    .actions>p:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    .actions>p {
      color: #919398;
      font-size: 11px;
      margin-right: 5px;
      margin-left: 5px;
      font-family: 'Roboto', sans-serif;
      font-weight: 600;
    }

    .actions {
      display: inline-flex;
      align-items: center;
      margin-left: 35px;
      margin-top: -15px;
      margin-bottom: 10px;
    }

    .action-divider {
      width: 2px;
      height: 2px;
      background: #919398;
      border-radius: 100%;
    }

    .like-counter {
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%);
      background: white;
      width: max-content;
      border-radius: 15px;
      font-size: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-width: 30px;
      padding: 5px;
      position: absolute;
      bottom: -15px;
      right: 0;
      color: #65676B;
      font-weight: 400;
      cursor: pointer;
    }

    .like-counter > img {
      padding-right: 5px;
    }

    .blue-like {
      color: rgb(32, 120, 244) !important;
    }

    .user-comment-space {
      border-radius: 18px;
      background: #f0f2f5;
      padding: 10px 15px 10px 15px;
      width: 100%;
      position: relative;
    }

    .user-comment-space > textarea {
      overflow: hidden;
      resize: none;
      width: 93%;
      color: #050505;
      border: none;
      outline: none;
      background: transparent;
      font-family: 'Roboto', sans-serif;
      font-weight: 600;
    }

    .emoji-container {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }

    .user-comment-button {
      background: transparent;
      border: none;
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      color: #8f959c;
      font-size: 15px;
    }

    .user-comment-button:hover {
      background: #e4e6e9;
    }

    ::placeholder {
      color: #8f959c;
      font-weight: lighter;
    }

    emoji-picker {
      position: absolute;
      top: -51vh;
      right: 0;
    }

    @media (max-width: 1024px)
    {
      emoji-picker {
        top: -60vh;
      }
    }

    .user-is-commenting {
      display: inline-flex;
      align-items: center;
      font-family: 'Roboto', sans-serif;
      color: #8f8f8f;
      font-weight: 600;
      font-size: 13px;
    }

    .user-is-commenting > img {
      width: 30px;
      margin-right: 10px;
    }

    #closed-comments {
      width: max-content;
      background: #a42a2a;
      padding: 5px;
      border-radius: 6px;
      color: white;
      margin: auto;
      margin-top: 10px;
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      cursor: not-allowed;
    }
  </style>

`;

export const CaixaComentario =
`
  <div id="closed-comments" style="display: none">comentários fechados</div>
  <div id="user-is-commenting" class="user-is-commenting" style="display: none">
    <img src="https://gerador.chegow.com/loading.gif">
    <p><span id="whos-typing"></span> digitando um comentário...</p>
  </div>
  <div class="user-comment-space" id="user-comment-space">
    <textarea id="user-comment-textarea" rows="1" placeholder="Escreva um comentário..."></textarea>
    <div class="emoji-container">
      <emoji-picker id="emoji-picker" class="light" style="display: none"></emoji-picker>
      <button class="user-comment-button" onclick="toggleEmoji(this, 'user-comment-textarea')"><i class="far fa-smile"></i></button>
    </div>
  </div>
`;
export const Codigo =
    Fonte +
`
      <div class="comments" delay="0" style="display: block">
          <div class="comment-row">
              <div class="comment-container">
                  <div class="profile-avatar">
                      <div class="avatar" style="
                          background-image: url('https://tvideo.chegow.com/uploads/1674940088_58-jpg.jpg');
                      "></div>
                  </div>
                  <div class="comment-content" id="comment-content">
                      <div class="comment">
                          <p class="profile-name">Ana Laura Lopes</p>
                          <p class="comment-textarea">A certificação de metodologias que nos auxiliam a lidar com a revolução dos costumes afeta positivamente a correta previsão do orçamento.</p>
                      </div>
                      <div class="like-counter">
                        <img class="" height="16" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" width="16">
                        <span class="like-counter-count" id="like-counter-count-0">3</span>
                      </div>
                  </div>
                  <div class="comment-options">...</div>
              </div>
          </div>
          <div class="actions">
              <p onclick="like('like-counter-count-0', this)">Curtir</p> <div class="action-divider"></div> <p>Responder</p> <div class="action-divider"></div> <p style="font-weight: normal">10 min</p>
          </div>
      </div>

          <div class="comments" delay="1" style="display: block">
              <div class="comment-row">
                  <div class="comment-container" style="
                    width: calc(100% - 45px);
                    margin-left: 45px;
                    margin-top: 10px;
                  ">
                      <div class="profile-avatar">
                          <div class="response-avatar" style="
                              background-image: url('https://tvideo.chegow.com/uploads/1674940319_20-jpg.jpg');
                          "></div>
                      </div>
                      <div class="comment-content" id="comment-content">
                          <div class="comment">
                              <p class="profile-name">Nicolas Cardoso</p>
                              <p class="comment-textarea">Concordo totalmente.</p>
                          </div>
                          <div class="like-counter">
                            <img class="" height="16" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" width="16">
                            <span class="like-counter-count" id="like-counter-count-0-0">1</span>
                          </div>
                      </div>
                      <div class="comment-options">...</div>
                  </div>
              </div>
              <div class="actions" style="margin-left: 80px">
                  <p onclick="like('like-counter-count-0-0', this)">Curtir</p> <div class="action-divider"></div> <p>Responder</p> <div class="action-divider"></div> <p style="font-weight: normal">1 min</p>
              </div>
          </div>

      <div class="comments" delay="0" style="display: block">
          <div class="comment-row">
              <div class="comment-container">
                  <div class="profile-avatar">
                      <div class="avatar" style="
                          background-image: url('https://tvideo.chegow.com/uploads/1674940400_82-jpg.jpg');
                      "></div>
                  </div>
                  <div class="comment-content" id="comment-content">
                      <div class="comment">
                          <p class="profile-name">João Miguel da Costa</p>
                          <p class="comment-textarea">Adorei o produto. Ele cumpre o prometido atendendo totalmente as minhas expectativas. :)</p>
                      </div>
                      <div class="like-counter">
                        <img class="" height="16" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" width="16">
                        <span class="like-counter-count" id="like-counter-count-1">5</span>
                      </div>
                  </div>
                  <div class="comment-options">...</div>
              </div>
          </div>
          <div class="actions">
              <p onclick="like('like-counter-count-1', this)">Curtir</p> <div class="action-divider"></div> <p>Responder</p> <div class="action-divider"></div> <p style="font-weight: normal">8 min</p>
          </div>
      </div>

      <div class="comments" style="display: none">
          <div class="comment-row">
              <div class="comment-container">
                  <div class="profile-avatar">
                      <div class="avatar" style="
                          background-image: url('https://tvideo.chegow.com/uploads/1674940587_1-jpg.jpg');
                      "></div>
                  </div>
                  <div class="comment-content" id="comment-content">
                      <div class="comment">
                          <p class="profile-name">Júlia Neves da Silva</p>
                          <p class="comment-textarea">Top d+!!!! Eu quero!</p>
                      </div>
                      <div class="like-counter">
                        <img class="" height="16" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" width="16">
                        <span class="like-counter-count" id="like-counter-count-2">1</span>
                      </div>
                  </div>
                  <div class="comment-options">...</div>
              </div>
          </div>
          <div class="actions">
              <p onclick="like('like-counter-count-2', this)">Curtir</p> <div class="action-divider"></div> <p>Responder</p> <div class="action-divider"></div> <p style="font-weight: normal">3 min</p>
          </div>
      </div>

` + CaixaComentario;
