"use strict";
let cl = console.log;
var Backgrounds;
(function (Backgrounds) {
    Backgrounds["Back1"] = "back-w-city-skyline.jpg";
    Backgrounds["Back2"] = "back.jpg";
    Backgrounds["Back3"] = "back1.png";
    Backgrounds["Back4"] = "backk.jpg";
})(Backgrounds || (Backgrounds = {}));
const defaultBackground = Backgrounds.Back1;
let background;
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    let cookie = UC.getCookieWithEnum();
    cl(cookie);
    if (cookie === null) {
        cl("setCookie to default");
        UC.setCookie(defaultBackground);
    }
    background = cookie !== null && cookie !== void 0 ? cookie : defaultBackground;
    // body.style.background = cookie ?? defaultBackground
    body.style.backgroundImage = `url('${background}')`;
    const title = document.createElement('h1');
    title.innerHTML = "ニェンの<ruby>洞窟<rt>どうくつ</rt></ruby>";
    title.style.backdropFilter = "blur(10px)";
    title.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    title.style.borderRadius = "10px";
    title.style.color = "beige";
    title.style.color = "rgb(221, 206, 255)";
    title.style.marginBottom = "1em";
    title.style.marginLeft = "auto";
    title.style.marginRight = "auto";
    title.style.padding = "30px";
    title.style.width = "max-content";
    // Create the div with paragraph
    const div = document.createElement('div');
    div.className = 'div_';
    div.style.width = "35%";
    div.style.marginLeft = "1em";
    div.style.marginBottom = "1em";
    const imp = document.createElement('p');
    imp.innerHTML = `
    我はニェン、そしてカナダに住んでいます。レズビアンです。プログラミングとゲームをすることが好きです。
  `;
    div.appendChild(imp);
    UH.appendList(body, [
        UH.createBR(),
        title,
        UH.createBR(),
        div,
        UH.createBR(),
        // collapsible sections
        UH.createCollapsibleAndContent('ソーシャル<br>Socials', `<ul>
        ${UH.li_GetListElement(`Discord/ ashita_nian`)},
        ${UH.li_GetListElement(`Github/ ${UH.a_GetAElement("https://github.com/Nian0Bussou", "Nian0Bussou")}`)}
        ${UH.li_GetListElement(`Twitter/ ${UH.a_GetAElement("https://x.com/NianToshi", "NianToshi")}`)}
        ${UH.li_GetListElement(`Bluesky/ ${UH.a_GetAElement("https://bsky.app/profile/ashita-nian.bsky.social", "ashita-nian")}`)}
      </ul>
      <sub><b><i> I have no other way of being contacted</i></b></sub>
      `, 0),
        UH.createCollapsibleAndContent('読める言語<br>Languages I speak', `<ul>
        ${UH.li_GetListElement("フランス語<br>French")}
        ${UH.li_GetListElement("英語<br>English")}
        ${UH.li_GetListElement("<stike>日本語<br>Japanese</strike>")}
      </ul>`, 1),
        UH.createCollapsibleAndContent('プログラミング言語の経験順にランキング<br>Programming languages ranked by experience', `<ol>
        ${UH.nameIcon('Go        ', 'go')}
        ${UH.nameIcon('C#        ', 'c--4')}
        ${UH.nameIcon('HTML      ', 'html')}
        ${UH.nameIcon('Unity     ', 'unity')}
        ${UH.nameIcon('CSS       ', 'css')}
        ${UH.nameIcon('Rust      ', 'rust')}
        ${UH.nameIcon('F#        ', 'fsharp')}
        ${UH.nameIcon('Haskell   ', 'haskell')}
        ${UH.nameIcon('C++       ', 'c++')}
        ${UH.nameIcon('C         ', 'c')}
        ${UH.nameIcon('OCamL     ', 'ocaml')}
        ${UH.nameIcon('Python    ', 'python')}
        ${UH.nameIcon('Ecmascript', 'js')}
      </ol>`, 2),
        UH.createCollapsibleAndContent('好きです<br>Likes', `<ul>
        ${UH.li_GetListElement('Arcane')}
        ${UH.li_GetListElement("Arknights' lore")}
        ${UH.li_GetListElement("Wis'adel")}
        ${UH.li_GetListElement('Overwatch 2')}
      </ul>`, 3),
        UH.createCollapsibleAndContent('好きない<br>Dislikes', `<ul>
        ${UH.li_GetListElement('人')}
        ${UH.li_GetListElement('LoL')}
      </ul>`, 4),
        UH.createCollapsibleAndContent('便利（べんり）連関（れんかん）<br>Useful links', `<ul>
        ${UH.li_GetListElement(`${UH.a_GetAElement("https://github.com/Nian0bussou/nian0bussou.github.io", "The repo of this website")}`)}
        ${UH.li_GetListElement(`${UH.a_GetAElement("https://translate.google.com", "translate")}`)}
        ${UH.li_GetListElement(`${UH.a_GetAElement("https://www.reddit.com", "Reddit")}`)}
        ${UH.li_GetListElement(`${UH.a_GetAElement("https://jisho.org", "辞書")}`)}
        ${UH.li_GetListElement(`${UH.a_GetAElement("https://sapling.ai/lang/japanese", "sapling")}`)}
      </ul>`, 3),
        UH.createSelection(body)
    ]);
});
// HTML utils
class UH {
    static createCollapsibleAndContent(title, content, index) {
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
        const contentDiv = document.createElement('div');
        contentDiv.className = `content${index} div_`;
        contentDiv.innerHTML = content;
        contentDiv.style.marginLeft = "2em";
        contentDiv.style.marginBottom = "1em";
        button.addEventListener('click', () => { contentDiv.classList.toggle('open'); });
        const div = document.createElement('div');
        UH.appendList(div, [button, contentDiv, UH.createBR()]);
        return div;
    }
    static nameIcon(name, icon) {
        return this.li_GetListElement(`${name} <img class="icon" src="/svgs/${icon}.svg" alt=" icon" />`);
    }
    static li_GetListElement(str) {
        return `<li>${str}</li>`;
    }
    static a_GetAElement(link, name) {
        return `<a href="${link}" target="_blank">${name}</a>`;
    }
    static appendList(elem, ls) {
        ls.forEach((value) => elem.appendChild(value));
    }
    static createBR() {
        return document.createElement('br');
    }
    static createSelection(body) {
        const select = document.createElement('select');
        Object.entries(Backgrounds).forEach(([key, value]) => {
            const option = document.createElement('option');
            option.value = value; // Set value to the enum's value
            option.textContent = key; // Display the key as the label
            cl(`value : ${value}\nback  : ${background}`);
            if (value === background) {
                option.selected = true;
            }
            select.appendChild(option);
        });
        select.addEventListener('change', (evt) => {
            const target = evt.target;
            const selectedValue = target.value; // Use value directly
            background = selectedValue;
            this.changeBackground(body, background);
        });
        return select;
    }
    static changeBackground(body, bg) {
        body.style.backgroundImage = `url('${String(bg)}')`;
        UC.setCookie(bg);
    }
}
// cookie utils
class UC {
    static setCookie(value) {
        const name = "background";
        const date = new Date();
        date.setTime(date.getTime() + 30000000);
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
    }
    static getCookieWithEnum() {
        const name = "background";
        const cookieArray = document.cookie.split(';');
        for (const cookie of cookieArray) {
            const [key, value] = cookie.trim().split('=');
            if (key === name) {
                const decodedValue = decodeURIComponent(value);
                if (Object.values(Backgrounds).includes(decodedValue)) {
                    return decodedValue;
                }
            }
        }
        return null;
    }
}
