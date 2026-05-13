let page = 1;
let max_page = 8;

const left = document.getElementById('left_btn');
const right = document.getElementById('right_btn');

const page_text = document.getElementById('page_text');
const center = [...document.getElementById('center').children];
const title = document.getElementById('title');

const official = document.getElementById('official_btn');
const register = document.getElementById('register_btn');
const Fofficial = document.getElementById('Fofficial_btn');
const Fregister = document.getElementById('Fregister_btn');
const Fabout = document.getElementById('Fabout_btn');

const chen = document.getElementById('chen');
const yvonne = document.getElementById('yvonne');
const gilberta = document.getElementById('gilberta');
const tangtang = document.getElementById('tangtang');
const rossi = document.getElementById('rossi');
const zhuangfy = document.getElementById('zhuangfy');

const T_chen = document.getElementById('T_chen');
const T_yvonne = document.getElementById('T_yvonne');
const T_gilberta = document.getElementById('T_gilberta');
const T_tangtang = document.getElementById('T_tangtang');
const T_rossi = document.getElementById('T_rossi');
const T_zhuangfy = document.getElementById('T_zhuangfy');

document.addEventListener('DOMContentLoaded', () => {
    left.classList.add('hide');

    chen.classList.remove('show');
    yvonne.classList.remove('show');
    gilberta.classList.remove('show');
    tangtang.classList.remove('show');
    rossi.classList.remove('show');
    zhuangfy.classList.remove('show');

    T_chen.classList.remove('show');
    T_yvonne.classList.remove('show');
    T_gilberta.classList.remove('show');
    T_tangtang.classList.remove('show');
    T_rossi.classList.remove('show');
    T_zhuangfy.classList.remove('show');

    page_move()

    right.addEventListener('click', () => {
        if (page == max_page) {
            page = max_page;
        } else {
            page++;
        }

        page_move();
    });

    left.addEventListener('click', () => {
        if (page == 1) {
            page = 1;
        } else {
            page--;
        }

        page_move();
    });

    official.addEventListener('click', () => window.open('https://endfield.gryphline.com/ja-jp', '_blank'));
    Fofficial.addEventListener('click', () => window.open('https://endfield.gryphline.com/ja-jp', '_blank'));
    register.addEventListener('click', () => window.location.href = 'contact.html');
    Fregister.addEventListener('click', () => window.location.href = 'contact.html');
    Fabout.addEventListener('click', () => window.location.href = 'index.html');
});

function page_move() {
    page_text.textContent = `${page} / ${max_page} ページ`;

    if (page == max_page) {
        right.classList.add('hide');
    } else {
        right.classList.remove('hide');
    }

    if (page == 1) {
        left.classList.add('hide');
    } else {
        left.classList.remove('hide');
    }

    center.forEach(div => {
        const div_page = Number(div.dataset.page);

        if (div_page == page) {
            div.classList.remove('hide');
        } else {
            div.classList.add('hide');
        }

        switch (page) {
            case 3:
                chen.classList.add('show');
                yvonne.classList.add('show');
                gilberta.classList.add('show');
                T_chen.classList.add('show');
                T_yvonne.classList.add('show');
                T_gilberta.classList.add('show');
                break;

            case 4:
                tangtang.classList.add('show');
                rossi.classList.add('show');
                zhuangfy.classList.add('show');
                T_tangtang.classList.add('show');
                T_rossi.classList.add('show');
                T_zhuangfy.classList.add('show');
                break;

            default:
                chen.classList.remove('show');
                yvonne.classList.remove('show');
                gilberta.classList.remove('show');
                tangtang.classList.remove('show');
                rossi.classList.remove('show');
                zhuangfy.classList.remove('show');

                T_chen.classList.remove('show');
                T_yvonne.classList.remove('show');
                T_gilberta.classList.remove('show');
                T_tangtang.classList.remove('show');
                T_rossi.classList.remove('show');
                T_zhuangfy.classList.remove('show');
        }

        switch (page) {
            case 1:
                title.textContent = 'ゲーム紹介';
                break;

            case 2:
                title.textContent = 'プレイ動画';
                break;

            case 3:
                title.textContent = 'キャラクター紹介　～四号谷地～';
                break;

            case 4:
                title.textContent = 'キャラクター紹介　～武陵～';
                break;

            case 5:
                title.textContent = 'ゲームがリリースされるまで';
                break;

            case 6:
                title.textContent = 'ゲームの詳細データ';
                break;

            case 7:
                title.textContent = 'ゲーム要素について';
                break;

            case 8:
                title.textContent = '各種ページへ';
                break;
        }
    });
}
