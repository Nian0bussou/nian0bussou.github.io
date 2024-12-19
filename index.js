"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    body.appendChild(document.createElement('br'));
    body.appendChild(document.createElement('br'));
    // Create the div with paragraph
    const div = document.createElement('div');
    div.className = 'div_';
    const imp = document.createElement('p');
    imp.innerHTML = `
    我はニアン、カナダ出身です<br>
    レズビアンです<br>
    プログラミングとゲームをすることがすきです
  `;
    imp.style.marginLeft = "1em";
    imp.style.marginBottom = "1em";
    div.appendChild(imp);
    body.appendChild(div);
    body.appendChild(document.createElement('br'));
    // Create collapsible sections
    createCollapsible(body, 'ソーシャル', `
      <ul>
        <li>
          Discord/ ashita_nian
        </li>
        <li>
          Github/ <a href="https://github.com/Nian0Bussou" target="_blank">Nian0Bussou</a>
        </li>
        <li>
          Twitter/ <a href="https://x.com/NianToshi" target="_blank">NianToshi</a>
        </li>
        <li>
          Bluesky/ <a href="https://bsky.app/profile/ashita-nian.bsky.social" target="_blank">ashita-nian</a>
        </li>
      </ul>
      <sub><b><i> I have no other way of being contacted</i></b></sub>
    `, 0);
    createCollapsible(body, '読める言語', `<ul>
      <li>フランス語 (native)</li>
      <li>英語</li>
      <li>日本語</li>
    </ul>`, 1);
    createCollapsible(body, 'プログラミング言語の経験順にランキング', `<ol>
    ${nameIcon('Go        ', 'go')}
    ${nameIcon('C#        ', 'c--4')}
    ${nameIcon('HTML      ', 'html')}
    ${nameIcon('Unity     ', 'unity')}
    ${nameIcon('CSS       ', 'css')}
    ${nameIcon('Rust      ', 'rust')}
    ${nameIcon('F#        ', 'fsharp')}
    ${nameIcon('Haskell   ', 'haskell')}
    ${nameIcon('C++       ', 'c++')}
    ${nameIcon('C         ', 'c')}
    ${nameIcon('OCamL     ', 'ocaml')}
    ${nameIcon('Python    ', 'python')}
    ${nameIcon('Ecmascript', 'js')}
    </ol>`, 2);
    createCollapsible(body, '好きです', `<ul>
    ${li_GetListElement('Arcane')}
    ${li_GetListElement("Arknights' lore")}
    ${li_GetListElement("Wis'adel")}
    ${li_GetListElement('Overwatch 2')}
    </ul>`, 3);
    createCollapsible(body, '好きない', `<ul>
    ${li_GetListElement('人')}
    ${li_GetListElement('LoL')}
    </ul>`, 4);
});
function createCollapsible(body, title, content, index) {
    const style = document.createElement('style');
    style.textContent = `
                        .content${index} {
                            display: none; /* Start hidden */
                        }
                        .content${index}.open {
                            display: block; /* Show when open */
                        }
                        `;
    document.head.appendChild(style);
    const button = document.createElement('button');
    button.className = `collapsible${index} but_tits button_`;
    button.style.marginLeft = "1em";
    button.style.marginBottom = "1em";
    button.textContent = title;
    body.appendChild(button);
    const contentDiv = document.createElement('div');
    contentDiv.className = `content${index} div_`;
    contentDiv.innerHTML = content;
    contentDiv.style.marginLeft = "2em";
    contentDiv.style.marginBottom = "1em";
    body.appendChild(contentDiv);
    button.addEventListener('click', () => { contentDiv.classList.toggle('open'); });
    body.appendChild(document.createElement('br'));
}
function nameIcon(name, icon) {
    return li_GetListElement(`${name} <img class="icon" src="/svgs/${icon}.svg" alt=" icon" />`);
}
function li_GetListElement(str) {
    return `<li>${str}</li>`;
}
