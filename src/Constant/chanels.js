const chanels = [
    {
        Name: 'Elzero Web School',
        Img: 'https://yt3.googleusercontent.com/-qCvx3y42iXp9cMNe5Yx3aoR2lL8TFxsrLShyBLuXOE4tY56kt_bPceyvPw95rpUqgKqI8zDBe4=s160-c-k-c0x00ffffff-no-rj',
        payBal: 'https://www.paypal.com/paypalme/OsamaElzero',
        BackGround: 'https://yt3.googleusercontent.com/W2DsPhntDxh9ORVmt8DQL_xtvNd3mQZvnoVKocgoqpvB_Ekdz81COYoLIJN90-5qQw363LNa=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        Link: 'https://www.youtube.com/c/OsamaElzero',
        About: 'Life Is Short, Start Learning',
        Lang: 'ar', id: 'UCSNkfKl4cU-55Nm-ovsvOHQ'
    },
    {
        Name: 'Tarmeez Academy',
        Img: 'https://yt3.googleusercontent.com/ytc/AIdro_n8Vy1_3NGcwf4Wll48OsPsN0GikgcvI7zc9jT_Vxlejg=s160-c-k-c0x00ffffff-no-rj',
        Twitter: 'https://twitter.com/YarHmm',
        BackGround: 'https://yt3.googleusercontent.com/CiA4vXq5Qabx1lqE5WncWS-JyEtBB-FAfhbej_h1mbgV7p8C3X9ePbJBz4nHrPmGQy3JSwPC=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        Link: 'https://www.youtube.com/@tarmeez',
        About: 'أكاديمية ترميز تسعى لتقديم محتوى عربي لتعليم البرمجة بجودة مميزة.',
        Lang: 'ar', id: 'UCjRxQhyzA8wLypJfq6P7opQ'

    },
    {
        Name: 'Hassouna Academy',
        Img: 'https://yt3.googleusercontent.com/ytc/AIdro_kGN8tVcUnIveaO7ke1qdT4ygMM76zocZ-kXsprVKElziI=s176-c-k-c0x00ffffff-no-rj-mo',
        Twitter: 'https://twitter.com/YarHmm',
        BackGround: 'https://yt3.googleusercontent.com/Y8mRqxGp5miDh3LRP6SfB5FfnZr2Slgv8qvjhHnN2vDueguU6wUDt9f8pitoy7WejamZG4vvBw=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        Link: 'https://www.youtube.com/@HassounaAcademy',
        About: 'أكاديمية ترميز تسعى لتقديم محتوى عربي لتعليم البرمجة بجودة مميزة.',
        Lang: 'ar', id: 'UCWKI4ZPrQxiGlN7eiy-pO8Q'

    },
    {
        Name: 'TheNewBaghdad (بغداد الجديدة )',
        Img: 'https://yt3.googleusercontent.com/ytc/AIdro_lt4ChTmZ_3XtmJ1oQhkQYRtrdlRtxR5mBBH2g3Mb5r7x8=s160-c-k-c0x00ffffff-no-rj',
        Twitter: null,
        BackGround: 'https://yt3.googleusercontent.com/-Zn08ofLK2nM7QSVJLxnh2nE8nCltRRtOWMJJlkQu9eQZDwWB01D1khEH5ZDOThJoiUVDZPl=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        Link: 'https://www.youtube.com/c/hussienahmmed',
        About: 'قناة تعليمية متخصصة في تعليم كل مايخص عالم التقنية  من لغات برمجة وامن معلومات بشكل مجاني وعالي الجودة',
        Lang: 'ar', id: 'UCgntwWFdMDPq0eNhaQ0LHIQ'

    },
    {
        Name: 'خالد السعداني - Khalid ESSAADANI',
        Img: 'https://yt3.googleusercontent.com/ytc/AIdro_mF8ohpto-g0Zw-VbgSm8riRpBsVkgpwMjlRAI0RxAtBSs=s160-c-k-c0x00ffffff-no-rj',
        Twitter: null,
        BackGround: 'https://yt3.googleusercontent.com/Eh2sNHCpK7AaTR6s6zM9Mm5Q3sPmjUCCQFP4bRZvd4w5VNuTlhFyJcQzhA6eoxtNvRLEbwcJTA=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        Link: 'https://www.youtube.com/@EssaadaniTV',
        About: 'قناة خالد السعداني لتعليم لغات البرمجة وتقنيات التطوير بأسلوب ميسر وبلغة عربية متواضعة.إذا استفدت شيئا من القناة فأكرمنا بدعوة طيبة في ظهر الغيب، وإن لم تستفد فاستغفر لنا.',
        Lang: 'ar', id: 'UCjKpb_hadZ3BQkHcTy81MRA'

    },
    {
        Name: ' الدسوقى ( El Desouki )',
        Img: 'https://yt3.googleusercontent.com/ytc/AIdro_ku9zBi6Y8-rZaRo3udRMt8zSvLrL_JAED1mz2S9ELaOA=s160-c-k-c0x00ffffff-no-rj',
        Twitter: null,
        BackGround: 'https://yt3.googleusercontent.com/5cbFjMkizs2cyyms0ORLGm-KVfBsPk7j_Ps9Ocg1-BKD-cAb0Nb9w0xwqwsUbl98JAEJEHKx=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        Link: 'https://www.youtube.com/@DesoukiEgypt',
        About: 'تعلم علوم الحاسب باللغة العربية - لغات البرمجة و أوراكل -  و أدرس مقررات قواعد البيانات الجامعية .',
        Lang: 'ar', id: 'UCWX_0VvMxl0_XosvYOZ7O0g'

    },
    {
        Name: 'Adel Nasim',
        Img: 'https://yt3.googleusercontent.com/ytc/AIdro_nr_aRzEglAcixlHjgUwlMCRQLXjS4sISgC65CXJOJ-JbY=s160-c-k-c0x00ffffff-no-rj',
        Twitter: null,
        BackGround: 'https://yt3.googleusercontent.com/aUREVvTHKIBZpQeuhvuVAyJpUpGk5zXOtqxgeDrFL92NPNR3RNkbTcfJ9K9GXcRr1WM9Zf3I1g=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        Link: 'https://www.youtube.com/@AdelNasim',
        About: 'تم انشاء القناة لزيادة الوعي البرمجي لدى المشاهد العربي بتعلم لغات البرمجة المطلوبة بأسلوب سلس وشامل.',
        Lang: 'ar', id: 'UCa--uYErOqjm8qT576P1hMQ'

    },
    {
        Name: 'Computer Science Lessons',
        Img: 'https://yt3.googleusercontent.com/ONU8ReL9iT_aJB_iwKB75HtJXfGGZLBwWgpaisxk44FmzsMHkT7CEXgf9voIFB8NZ1Go6Tb0yvU=s160-c-k-c0x00ffffff-no-rj',
        Twitter: null,
        BackGround: 'https://yt3.googleusercontent.com/j-Q4wca0anqZdL9E9kx6ebFt5psWl8lRzl1TlDoRl6lYnnQel9RoYA7bJxMOq2C5pQe93d5Pym4=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        Link: 'https://www.youtube.com/@ComputerScienceLessons',
        About: 'Are you pursuing a BSc. (Hons) in Computer Science or a related qualification? Computer Science Lessons is designed for both students and professionals eager to enhance their skills. This platform offers a wide range of video content on topics like hardware architecture, database design, web technologies, and cryptography.',
        Lang: 'ar', id: 'UCSX3MR0gnKDxyXAyljWzm0Q'

    },
    {
        Name: 'Software ArchTalks for Arabs',
        Img: 'https://yt3.googleusercontent.com/J-NvTRfriMEeU4PR9vW_8nRaLija4cWfMxsnZlx03BNHcLEWkDYWvz8TUcMbgbP6W-LGSiurPLA=s160-c-k-c0x00ffffff-no-rj',
        Twitter: null,
        BackGround: 'https://yt3.googleusercontent.com/DBSB8Etfc2Oq--kVGgq5leeD3qYtRd9kdbIGpOsHA-msnue-JNIrAjVQFAqnb-V_3897kzRKvg=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        Link: 'https://www.youtube.com/@ArabSoftwareArchTalks',
        About: 'هذه القناه الهدف منها نشر محتوى هندسه البرمجيات للمجتمع العربي و علوم الحاسب؛ نادرا بالانجليزيه مع الاعتبار ان يظل المصطلحات بالانجليزيه , نأمل تقديم محتوى عربي جيد للمواضيع قليلة النشر و بصوره مجانيه و تحت شعار علم ينتفع به',
        Lang: 'ar', id: 'UCO6pkv5y1IDMunRehJlWx2w'

    },
    {
        Name: 'AbdurRahman ElGammal',
        Img: 'https://yt3.googleusercontent.com/ytc/AIdro_kkgah2HvbOzMuPllq0T36Wnqdl021SyZa7eLJeEhFsjmCv=s160-c-k-c0x00ffffff-no-rj',
        Twitter: null,
        BackGround: 'https://yt3.googleusercontent.com/rNowdxlmFwsZL--OBMST-kVaUphBRhlX4bRIpoM6VkPJBfTv5VIpchZZohW7VBe6p6qV4jgBWw=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        Link: 'https://www.youtube.com/@AbdurRahmanElGammal',
        About: 'My TED TalkWhat if I am the one who control the world? | Abdulrahman El-Gammal | TEDxSHA',
        Lang: 'ar', id: 'UCZiV7heCuc_307kI9Ze_7Mw'

    },
    {
        Name: 'JavaScript Mastery',
        Img: 'https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s160-c-k-c0x00ffffff-no-rj',
        Twitter: null,
        BackGround: 'https://yt3.googleusercontent.com/NiKxd72T-t6VnKdokB84uT8dDn_bE5QNxIMuzd4pFHBsNuu2OMfqiN_wgtuNzjUQOA5zOlyO=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        Link: 'https://www.youtube.com/@javascriptmastery',
        About: 'Master modern web development with a project-based approach',
        Lang: 'en',
        id: 'UCmXmlB4-HJytD7wek0Uo97A'

    }, {
        Name: 'freeCodeCamp.org',
        Img: 'https://yt3.googleusercontent.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s160-c-k-c0x00ffffff-no-rj', Twitter: '',
        BackGround: 'https://yt3.googleusercontent.com/YENZNQNejlcYytisl7SbdB76TRQa_qs3felodPY9EPvY1l7ZXdbZV4jtSfBITDPE54_1nK5osg=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        Link: 'https://www.youtube.com/@freecodecamp',
        About: '',
        Lang: 'en',
        id: 'UC8butISFwT-Wl7EV0hUK0BQ'

    },
    {
        Name: 'Traversy Media',
        Img: 'https://yt3.googleusercontent.com/ytc/AIdro_mLysKc36lc_FVk2j777olWvLOjgDz6NCNGdiQBnAKRENM=s160-c-k-c0x00ffffff-no-rj',
        Twitter: '',
        BackGround: 'https://yt3.googleusercontent.com/FGxGbXEEUNf5GWcraGa-f4PLGdDGIgOf4C6LH0PKH3ug-W8PR0tXkUq8eKPAbz8kCFKhVck7tA=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        Link: 'https://www.youtube.com/@traversymedia',
        About: '',
        Lang: 'en',
        id: 'UC29ju8bIPH5as8OGnQzwJyA'

    },
    {
        Name: 'Net Ninja',
        Img: 'https://yt3.googleusercontent.com/ytc/AIdro_mk2Ex-8sW03SBlBX7D1EC5skH0kv9rS3rU9IXq2I-q2Zg=s160-c-k-c0x00ffffff-no-rj',
        Twitter: '',
        BackGround: 'https://yt3.googleusercontent.com/m_WGEq8pBawVi71mEKiFbnOjbkvzyWguNpcAbss54NenWDivjpbbqREAlyoRNONKNBk6QlS87A=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        Link: 'https://www.youtube.com/@NetNinja',
        About: 'Black-belt your web development skills. Over 2000 free programming tutorial videos ',
        Lang: 'en', id: 'UCW5YeuERMmlnqo4oq8vwUpg'

    },
    {
        Name: 'Derek Banas',
        Img: 'https://yt3.googleusercontent.com/ytc/AIdro_naavCy-rkR4iU851a1vMh7LrBa_Hbxf3qpnRiMqK9IEZc=s160-c-k-c0x00ffffff-no-rj',
        Twitter: '',
        BackGround: 'https://yt3.googleusercontent.com/BKS8Jhw5PZvAZh1_E4Rf2Vld2NcCvck6g3YcjNYMGyMflbusP8ahbDqpoe9GY9kTi5aPQZP57iI=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        Link: 'https://www.youtube.com/@derekbanas',
        About: '',
        Lang: 'en', id: 'UCwRXb5dUK4cvsHbx-rGzSgw'

    },
    {
        Name: 'ProgrammingKnowledge',
        Img: 'https://yt3.googleusercontent.com/Po_5Mn4ydEJURACnKoZXt4Pnao3SuAkPwZmMI1EElERKGNaBK5gzuhaxlQVCj8Jk_65ghkmtCg=s160-c-k-c0x00ffffff-no-rj',
        Twitter: 'Hi Guys, I have Always been asked to share my code which I use in my video',
        BackGround: 'https://yt3.googleusercontent.com/wyNzzW90NYKDT46ykTUDhbSmzqnlhjdDfjWQTOOeRF_P98XxWluDoZn_OCBuRxtGh7cZTB5Ri48=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        Link: 'https://www.youtube.com/@ProgrammingKnowledge',
        About: '',
        Lang: 'en', id: 'UCs6nmQViDpUw0nuIx9c_WvA'

    },
    {
        Name: 'CS Dojo',
        Img: 'https://yt3.googleusercontent.com/ytc/AIdro_mxJvgrBjcgK94ZJQwDphl0UFkCKRL8AOa7UvmR__MIyg=s160-c-k-c0x00ffffff-no-rj',
        Twitter: '',
        BackGround: 'https://yt3.googleusercontent.com/ytc/AIdro_mxJvgrBjcgK94ZJQwDphl0UFkCKRL8AOa7UvmR__MIyg=s160-c-k-c0x00ffffff-no-rj',
        Link: 'https://www.youtube.com/@CSDojo',
        About: 'Hello! My name is YK, and I usually make videos about programming and computer science here :)',
        Lang: 'en', id: 'UCxX9wt5FWQUAAz4UrysqK9A'

    },
    {
        Name: 'LearnCode.academy',
        Img: 'https://yt3.googleusercontent.com/ytc/AIdro_kHwJ7t29TcNfW5Owu6qxxqDDzKWUSSO7mQTmiHFFZf8w=s160-c-k-c0x00ffffff-no-rj',
        Twitter: '',
        BackGround: 'https://yt3.googleusercontent.com/z_g0qD_Js9TzLl24y-M_9bG_cJ5VTei_hEZH48ZpgDU2Jkn3ilTuKppd-rs4yj5tJJYL1CGxFw=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        Link: 'https://www.youtube.com/@learncodeacademy',
        About: '100% FREE Web Development tutorials, web site design tutorials and more.Including, but not limited to:HTML, CSS, JavaScript, CSS Layouts, Responsive Design, React.js, Node.js, Angular.js, Docker, Dev Ops, Server Administration, Deployment Strategies.',
        Lang: 'en', id: 'UCVTlvUkGslCV_h-nSAId8Sw'

    },
    {
        Name: 'thenewboston',
        Img: 'https://yt3.googleusercontent.com/ytc/AIdro_luVhNF6yTdaq1SHoMmVoBAYcvUZkOBsXfEnuwcGf-G4y8=s160-c-k-c0x00ffffff-no-rj',
        Twitter: '',
        BackGround: 'https://yt3.googleusercontent.com/9DKy95AxTFOd98MqP1P6JzG1JayMWonpB3UkQLu5noWEcyy0hdMJr94auTgNrHY8APrxdSRQKd0=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', About: 'Tons of sweet computer related tutorials and some other awesome videos too!',
        Lang: 'en', id: 'UCJbPGzawDH1njbqV-D5HqKw',
        Link: 'https://www.youtube.com/@thenewboston',


    },

];
export { chanels };
// {
//     Name: ' ',
//     Img: '',
//     Twitter: '',
//     BackGround: '',
//     Link: ' ',
//     About: '',
//     Lang:'ar',id: ''

// },