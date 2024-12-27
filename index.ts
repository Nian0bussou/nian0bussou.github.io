let cl = console.log

enum Backgrounds {
    Ahri = "back.jpg",
    Ahri2 = "back1.png",
    NianJudgingYou = "backk.jpg",
    W_Skyline = "back-w-city-skyline.jpg",
    Miko_autumn_feels = "8347ad6fbe8febb758386de93d8015a1c47a.jpg",
    Miko_hair_windy = "1106aa6c04c2c063d8981f4ba300170c6278.jpg",
    Miko_needy_fox = "1216dc985c32c3f62891b7d721b5c732397f.jpg",
    Miko_raiden_bathing = "1691f99fa7901889e160b4cce05caa6e0227.jpg",
    Miko_raiden_kithing = "1394eb8cdb35ed9d180f984c87d174fed867.jpg",
    Miko_raiden_read_gay_seggs = "6025bf066ca7e756b504abe5936647922263.png",
    Miko_raiden_running_rain = "12700495167177440d8de59f1071dd6e7c3e.jpg",
    Miko_raining_grayish = "10710cdadd80d8a4f6b42345da1239ec34133.jpg",
    Miko_sleepy_fox = "6014c8f8ff0776079306f1d244c1bab53782.jpg",
    Miko_walking_snow = "175ed80795a43a983bb0d5422f6449b2768.jpg",
}

enum Languages {
    Japanese = "ja",
    English = "en",
}

const defaultLanguage = Languages.Japanese
let language: Languages = defaultLanguage

function getLangS(ls: string[]): string {
    switch (language) {
        case Languages.Japanese:
            return ls[0];
        case Languages.English:
            return ls[1];
    }
}

const defaultBackground = Backgrounds.Miko_autumn_feels
let background: Backgrounds

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body

    let backCookie = UC.getCookieWithEnum("background")
    cl(backCookie)
    if (backCookie === null) {
        cl("setCookie to default")
        UC.setCookie("background", defaultBackground)
    }
    background = backCookie as Backgrounds

    let langCookie = UC.getCookieWithEnum("lang")
    cl(langCookie)
    if (langCookie === null) {
        cl("set to default")
        UC.setCookie("lang", defaultLanguage)
    }
    language = langCookie as Languages



    // body.style.background = cookie ?? defaultBackground
    body.style.backgroundImage = `url('${background}')`;

    const title = document.createElement('h1')
    title.innerHTML = getLangS([
        "<ruby>神子<rt>みこ</rt></ruby>の<ruby>洞窟<rt>どうくつ</rt></ruby>",
        "Miko's Cave"
    ])
    title.style.backdropFilter = "blur(10px)";
    title.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    title.style.borderRadius = "10px";
    title.style.color = "rgb(221, 206, 255)";
    title.style.marginBottom = "1em"
    title.style.marginLeft = "auto"
    title.style.marginRight = "auto"
    title.style.padding = "30px";
    title.style.width = "max-content";

    // Create the div with paragraph
    const div = document.createElement('div')
    div.className = 'div_'
    div.style.width = "35%";
    div.style.marginLeft = "1em"
    div.style.marginBottom = "1em"
    const imp = document.createElement('p')
    imp.innerHTML = getLangS(
        [
            "あたしは「みこ」でカナダ住んでいまして「レズビアン」で「トランスジェンダー」で「プログラミング」と「ゲームをする」ことが好きです。",
            "I'm Miko, live in Canada, a lesbian, and I like to program and play games"
        ])
    div.appendChild(imp)


    UH.appendList(body, [
        UH.createSelectionBackgrounds(body),
        UH.createSelectionLanguages(),
        UH.get_br(),
        title,
        UH.get_br(),
        div,
        UH.get_br(),
        // collapsible sections
        UH.createCollapsibleAndContent(getLangS(['ソーシャル', 'Socials']),
            [
                `Discord/ ashita_nian`,
                `Github/ ${UH.get_a_elem("https://github.com/Nian0Bussou", "Nian0Bussou")}`,
                `Twitter/ ${UH.get_a_elem("https://x.com/NianToshi", "NianToshi")}`,
                `Bluesky/ ${UH.get_a_elem("https://bsky.app/profile/ashita-nian.bsky.social", "ashita-nian")}`,
                `<sub><b><i> ${getLangS(["他に連絡を取る手段がない", "I have no other way of being contacted"])}</i></b></sub>`
            ], 0, false
        ),
        UH.createCollapsibleAndContent(getLangS(['読める言語', 'Languages I speak']),
            [
                getLangS(["フランス語", "French"]),
                getLangS(["英語", "English"]),
                getLangS(["<s>日本語</s>", "<s>Japanese</s>"])
            ], 1, false
        ),
        UH.createCollapsibleAndContent(getLangS(['プログラミング言語の経験順にランキング', 'Programming languages ranked by experience']),
            [
                UH.nameIcon('Go      ', 'go      '),
                UH.nameIcon('C#      ', 'c--4    '),
                UH.nameIcon('HTML    ', 'html    '),
                UH.nameIcon('Unity   ', 'unity   '),
                UH.nameIcon('CSS     ', 'css     '),
                UH.nameIcon('Rust    ', 'rust    '),
                UH.nameIcon('F#      ', 'fsharp  '),
                UH.nameIcon('Haskell ', 'haskell '),
                UH.nameIcon('C++     ', 'c++     '),
                UH.nameIcon('C       ', 'c       '),
                UH.nameIcon('OCamL   ', 'ocaml   '),
                UH.nameIcon('Python  ', 'python  '),
                UH.nameIcon('JS      ', 'js      ')
            ], 2, true
        ),
        UH.createCollapsibleAndContent(getLangS(['好きです', 'Likes']),
            [
                getLangS(['アーケイン', 'Arcane']),
                getLangS(["アークナイツの伝承", "Arknights' lore"]),
                getLangS(["ウィシャデル", "Wis'adel"]),
                getLangS(['オーバーウォッチ２', 'Overwatch 2']),
            ], 3, false
        ),
        UH.createCollapsibleAndContent(getLangS(['好きない', 'Dislikes']),
            [
                getLangS(['人々', 'People']),
                getLangS(['リーグ・オブ・レジェンド', 'League of Legends'])
            ], 4, false
        ),
        UH.createCollapsibleAndContent(
            getLangS(['便利（べんり）連関（れんかん）', 'Useful links']),
            [
                `${UH.get_a_elem("https://github.com/Nian0bussou/nian0bussou.github.io", getLangS(['このサイトのリポー', 'The repo of this website']))}`,
                `${UH.get_a_elem("https://translate.google.com", getLangS(['翻訳する', 'Translate']))}`,
                `${UH.get_a_elem("https://www.reddit.com", "Reddit")}`,
                `${UH.get_a_elem("https://jisho.org", getLangS(['辞書', 'jisho']))}`,
                `${UH.get_a_elem("https://sapling.ai/lang/japanese", "sapling")}`,
            ], 3, false
        ),
    ])
    UH.appendList(body, UH.get_50br())
})

// HTML utils
class UH {
    static createCollapsibleAndContent(title: string, contents: string[], index: number, orderedornot: boolean): HTMLElement {
        const style = document.createElement('style')
        style.textContent = `
            .content${index} {
                display: none; /* Start hidden */
            }
            .content${index}.open {
                display: block; /* Show when open */
            }`
        document.head.appendChild(style)

        const button = document.createElement('button')
        button.className = `collapsible${index} but_tits button_`
        button.innerHTML = title
        button.style.marginLeft = "1em";
        button.style.marginBottom = "1em";

        const contentDiv = document.createElement('div')
        contentDiv.className = `content${index} div_`
        contentDiv.style.marginLeft = "2em"
        contentDiv.style.marginBottom = "1em"


        const list = document.createElement('ul')

        for (let i = 0; i < contents.length; i++) {
            const li = UH.get_li_elem(contents[i])
            list.appendChild(li)
        }

        contentDiv.appendChild(list)

        button.addEventListener('click', () => { contentDiv.classList.toggle('open') })
        const div = document.createElement('div')
        UH.appendList(div, [button, contentDiv, UH.get_br()])

        return div

    }
    static nameIcon(name: string, icon: string): string {
        return `${name.trim()} <img class="icon" src="/svgs/${icon.trim()}.svg" alt=" icon" />`

    }
    static get_li_elem(str: string): HTMLLIElement {
        const li = document.createElement("li")
        li.innerHTML = str
        return li
    }
    static get_a_elem(link: string, name: string): string {
        return `<a href="${link}" target="_blank">${name}</a>`
    }
    static appendList(elem: HTMLElement, ls: HTMLElement[]) {
        ls.forEach((value) => elem.appendChild(value))
    }
    static get_br(): HTMLBRElement {
        return document.createElement('br')
    }
    static get_50br(): HTMLBRElement[] {
        let ls: HTMLBRElement[] = []
        for (let i = 0; i < 50; i++) {
            ls[i] = document.createElement('br')
        }
        return ls
    }
    static createSelectionBackgrounds(body: HTMLElement): HTMLSelectElement {
        const select = document.createElement('select');
        Object.entries(Backgrounds).forEach(([key, value]) => {
            const option = document.createElement('option');
            option.value = value; // Set value to the enum's value
            option.textContent = key; // Display the key as the label

            cl(`value : ${value}\nback  : ${background}`)

            if (value === background) {
                option.selected = true
            }

            select.appendChild(option);
        });

        select.addEventListener('change', (evt) => {
            const target = evt.target as HTMLSelectElement;
            const selectedValue = target.value as Backgrounds; // Use value directly
            background = selectedValue;
            this.changeBackground(body, background);
        });

        return select;
    }
    static createSelectionLanguages(): HTMLSelectElement {
        const select = document.createElement('select');
        Object.entries(Languages).forEach(([key, value]) => {
            const option = document.createElement('option');
            option.value = value; // Set value to the enum's value
            option.textContent = key; // Display the key as the label
            cl(`value : ${value}\nlang  : ${language}`)
            if (value === language) {
                option.selected = true
            }
            select.appendChild(option);
        });

        select.addEventListener('change', (evt) => {
            const target = evt.target as HTMLSelectElement;
            const selectedValue = target.value as Languages; // Use value directly
            language = selectedValue;
            this.changeLanguage(language);
        });

        return select;
    }
    static changeBackground(body: HTMLElement, bg: Backgrounds): void {
        body.style.backgroundImage = `url('${String(bg)}')`;
        UC.setCookie("background", bg);
    }
    static changeLanguage(lang: Languages): void {
        cl(`value : ${lang}`);
        language = lang;
        UC.setCookie("lang", lang);
        window.location.reload()
    }
}

// cookie utils
class UC {
    static setCookie(name: string, value: Languages | Backgrounds): void {
        const date = new Date();
        date.setTime(date.getTime() + 30000000);
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
    }

    static getCookieWithEnum(name: string): Backgrounds | Languages | null {
        const cookieArray = document.cookie.split(';');
        for (const cookie of cookieArray) {
            const [key, value] = cookie.trim().split('=');
            if (key === name) {
                const decodedValue = decodeURIComponent(value);
                // Check against the correct enum based on the cookie name
                if (name === "background" && Object.values(Backgrounds).includes(decodedValue as Backgrounds)) {
                    return decodedValue as Backgrounds;
                }
                if (name === "lang" && Object.values(Languages).includes(decodedValue as Languages)) {
                    return decodedValue as Languages;
                }
            }
        }
        return null; // Return null if no valid match is found
    }
}
