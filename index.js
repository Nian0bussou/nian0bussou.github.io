"use strict";
let cl = console.log;
var Backgrounds;
(function (Backgrounds) {
    Backgrounds["Ahri"] = "backs/back.jpg";
    Backgrounds["Ahri2"] = "backs/back1.png";
    Backgrounds["NianJudgingYou"] = "backs/backk.jpg";
    Backgrounds["W_Skyline"] = "backs/back-w-city-skyline.jpg";
    Backgrounds["Miko_walking_snow"] = "backs/175ed80795a43a983bb0d5422f6449b2768.jpg";
    Backgrounds["Miko_raining_grayish"] = "backs/_10710cdadd80d8a4f6b42345da1239ec34133.jpg";
    Backgrounds["Miko_hair_windy"] = "backs/_1106aa6c04c2c063d8981f4ba300170c6278.jpg";
    Backgrounds["Miko_needy_fox"] = "backs/_1216dc985c32c3f62891b7d721b5c732397f.jpg";
    Backgrounds["Miko_raiden_running_rain"] = "backs/_12700495167177440d8de59f1071dd6e7c3e.jpg";
    Backgrounds["Miko_raiden_kithing"] = "backs/_1394eb8cdb35ed9d180f984c87d174fed867.jpg";
    Backgrounds["Miko_raiden_bathing"] = "backs/_1691f99fa7901889e160b4cce05caa6e0227.jpg";
    Backgrounds["Miko_sleepy_fox"] = "backs/_6014c8f8ff0776079306f1d244c1bab53782.jpg";
    Backgrounds["Miko_raiden_read_gay_seggs"] = "backs/_6025bf066ca7e756b504abe5936647922263.png";
    Backgrounds["Miko_autumn_feels"] = "backs/_8347ad6fbe8febb758386de93d8015a1c47a.jpg";
})(Backgrounds || (Backgrounds = {}));
var Languages;
(function (Languages) {
    Languages["Japanese"] = "ja";
    Languages["English"] = "en";
})(Languages || (Languages = {}));
const defaultLanguage = Languages.Japanese;
let language = defaultLanguage;
function getLangS(ls) {
    switch (language) {
        case Languages.Japanese:
            return ls[0];
        case Languages.English:
            return ls[1];
    }
}
const defaultBackground = Backgrounds.Miko_autumn_feels;
let background;
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    let backCookie = UC.getCookieWithEnum("background");
    cl(backCookie);
    if (backCookie === null) {
        cl("setCookie to default");
        UC.setCookie("background", defaultBackground);
    }
    background = backCookie;
    let langCookie = UC.getCookieWithEnum("lang");
    cl(langCookie);
    if (langCookie === null) {
        cl("set to default");
        UC.setCookie("lang", defaultLanguage);
    }
    language = langCookie;
    // body.style.background = cookie ?? defaultBackground
    body.style.backgroundImage = `url('${background}')`;
    const title = document.createElement('h1');
    title.innerHTML = getLangS([
        "<ruby>神子<rt>みこ</rt></ruby>の<ruby>洞窟<rt>どうくつ</rt></ruby>",
        "Miko's Cave"
    ]);
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
    imp.innerHTML = getLangS([
        "あたしは「みこ」でカナダ住んでいまして「レズビアン」で「トランスジェンダー」で「プログラミング」と「ゲームをする」ことが好きです。",
        "I'm Miko, live in Canada, a lesbian, and I like to program and play games"
    ]);
    div.appendChild(imp);
    UH.appendList(body, [
        UH.createSelectionBackgrounds(body),
        UH.createSelectionLanguages(),
        UH.get_br(),
        title,
        UH.get_br(),
        div,
        UH.get_br(),
        // collapsible sections
        UH.createCollapsibleAndContent(getLangS(['ソーシャル', 'Socials']), `<ul>
                ${UH.get_li_elem(`Discord/ ashita_nian`)}
                ${UH.get_li_elem(`Github/ ${UH.get_a_elem("https://github.com/Nian0Bussou", "Nian0Bussou")}`)}
                ${UH.get_li_elem(`Twitter/ ${UH.get_a_elem("https://x.com/NianToshi", "NianToshi")}`)}
                ${UH.get_li_elem(`Bluesky/ ${UH.get_a_elem("https://bsky.app/profile/ashita-nian.bsky.social", "ashita-nian")}`)}
            </ul>
            <sub><b><i> ${getLangS(["他に連絡を取る手段がない", "I have no other way of being contacted"])}</i></b></sub>
            `, 0),
        UH.createCollapsibleAndContent(getLangS(['読める言語', 'Languages I speak']), `<ul>
                ${UH.get_li_elem(getLangS(["フランス語", "French"]))}
                ${UH.get_li_elem(getLangS(["英語", "English"]))}
                ${UH.get_li_elem(getLangS(["<s>日本語</s>", "<s>Japanese</s>"]))}
            </ul>`, 1),
        UH.createCollapsibleAndContent(getLangS(['プログラミング言語の経験順にランキング', 'Programming languages ranked by experience']), `<ol>
                ${UH.nameIcon('Go      ', 'go      ')}
                ${UH.nameIcon('C#      ', 'c--4    ')}
                ${UH.nameIcon('HTML    ', 'html    ')}
                ${UH.nameIcon('Unity   ', 'unity   ')}
                ${UH.nameIcon('CSS     ', 'css     ')}
                ${UH.nameIcon('Rust    ', 'rust    ')}
                ${UH.nameIcon('F#      ', 'fsharp  ')}
                ${UH.nameIcon('Haskell ', 'haskell ')}
                ${UH.nameIcon('C++     ', 'c++     ')}
                ${UH.nameIcon('C       ', 'c       ')}
                ${UH.nameIcon('OCamL   ', 'ocaml   ')}
                ${UH.nameIcon('Python  ', 'python  ')}
                ${UH.nameIcon('JS      ', 'js      ')}
            </ol>`, 2),
        UH.createCollapsibleAndContent(getLangS(['好きです', 'Likes']), `<ul>
                ${UH.get_li_elem(getLangS(['アーケイン', 'Arcane']))}
                ${UH.get_li_elem(getLangS(["アークナイツの伝承", "Arknights' lore"]))}
                ${UH.get_li_elem(getLangS(["ウィシャデル", "Wis'adel"]))}
                ${UH.get_li_elem(getLangS(['オーバーウォッチ２', 'Overwatch 2']))}
            </ul>`, 3),
        UH.createCollapsibleAndContent(getLangS(['好きない', 'Dislikes']), `<ul>
                ${UH.get_li_elem(getLangS(['人々', 'People']))}
                ${UH.get_li_elem(getLangS(['リーグ・オブ・レジェンド', 'League of Legends']))}
            </ul>`, 4),
        UH.createCollapsibleAndContent(getLangS(['便利（べんり）連関（れんかん）', 'Useful links']), `<ul>
                ${UH.get_li_elem(`${UH.get_a_elem("https://github.com/Nian0bussou/nian0bussou.github.io", getLangS(['このサイトのリポー', 'The repo of this website']))}`)}
                ${UH.get_li_elem(`${UH.get_a_elem("https://translate.google.com", getLangS(['翻訳する', 'Translate']))}`)}
                ${UH.get_li_elem(`${UH.get_a_elem("https://www.reddit.com", "Reddit")}`)}
                ${UH.get_li_elem(`${UH.get_a_elem("https://jisho.org", getLangS(['辞書', 'jisho']))}`)}
                ${UH.get_li_elem(`${UH.get_a_elem("https://sapling.ai/lang/japanese", "sapling")}`)}
            </ul>`, 3),
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
            }`;
        document.head.appendChild(style);
        const button = document.createElement('button');
        button.className = `collapsible${index} but_tits button_`;
        button.innerHTML = title;
        button.style.marginLeft = "1em";
        button.style.marginBottom = "1em";
        const contentDiv = document.createElement('div');
        contentDiv.className = `content${index} div_`;
        contentDiv.innerHTML = content;
        contentDiv.style.marginLeft = "2em";
        contentDiv.style.marginBottom = "1em";
        button.addEventListener('click', () => { contentDiv.classList.toggle('open'); });
        const div = document.createElement('div');
        UH.appendList(div, [button, contentDiv, UH.get_br()]);
        return div;
    }
    static nameIcon(name, icon) {
        return this.get_li_elem(`${name.trim()} <img class="icon" src="/svgs/${icon.trim()}.svg" alt=" icon" />`);
    }
    static get_li_elem(str) {
        return `<li>${str}</li>`;
    }
    static get_a_elem(link, name) {
        return `<a href="${link}" target="_blank">${name}</a>`;
    }
    static appendList(elem, ls) {
        ls.forEach((value) => elem.appendChild(value));
    }
    static get_br() {
        return document.createElement('br');
    }
    static createSelectionBackgrounds(body) {
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
    static createSelectionLanguages() {
        const select = document.createElement('select');
        Object.entries(Languages).forEach(([key, value]) => {
            const option = document.createElement('option');
            option.value = value; // Set value to the enum's value
            option.textContent = key; // Display the key as the label
            cl(`value : ${value}\nlang  : ${language}`);
            if (value === language) {
                option.selected = true;
            }
            select.appendChild(option);
        });
        select.addEventListener('change', (evt) => {
            const target = evt.target;
            const selectedValue = target.value; // Use value directly
            language = selectedValue;
            this.changeLanguage(language);
        });
        return select;
    }
    static changeBackground(body, bg) {
        body.style.backgroundImage = `url('${String(bg)}')`;
        UC.setCookie("background", bg);
    }
    static changeLanguage(lang) {
        cl(`value : ${lang}`);
        language = lang;
        UC.setCookie("lang", lang);
        window.location.reload();
    }
}
// cookie utils
class UC {
    static setCookie(name, value) {
        const date = new Date();
        date.setTime(date.getTime() + 30000000);
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
    }
    static getCookieWithEnum(name) {
        const cookieArray = document.cookie.split(';');
        for (const cookie of cookieArray) {
            const [key, value] = cookie.trim().split('=');
            if (key === name) {
                const decodedValue = decodeURIComponent(value);
                // Check against the correct enum based on the cookie name
                if (name === "background" && Object.values(Backgrounds).includes(decodedValue)) {
                    return decodedValue;
                }
                if (name === "lang" && Object.values(Languages).includes(decodedValue)) {
                    return decodedValue;
                }
            }
        }
        return null; // Return null if no valid match is found
    }
}
