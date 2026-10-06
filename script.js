document.addEventListener('DOMContentLoaded', () => {
  const slovakText = {
    'Послуги': 'Služby',
    'Чому ми': 'Prečo my',
    'Евакуатор': 'Odťahová služba',
    'Де нас знайти': 'Kde nás nájdete',
    'Контакти': 'Kontakt',
    'Вибір мови': 'Výber jazyka',
    'Меню': 'Menu',
    'ЗАПИСАТИСЯ': 'OBJEDNAŤ SA',
    'Дунайська Стреда • Словаччина': 'Dunajská Streda • Slovensko',
    'Професійний автосервіс у Дунайській Стреді': 'Profesionálny autoservis v Dunajskej Strede',
    'Ремонт, діагностика та обслуговування автомобілів усіх марок.': 'Opravy, diagnostika a servis vozidiel všetkých značiek.',
    'ЗАПИСАТИСЯ НА СЕРВІС': 'OBJEDNAŤ SA DO SERVISU',
    'ПОДЗВОНИТИ': 'ZAVOLAŤ',
    'Телефонуйте:': 'Zavolajte:',
    'Усі марки авто • Професійний підхід • Чесні ціни • Надійність': 'Všetky značky vozidiel • Profesionálny prístup • Férové ceny • Spoľahlivosť',
    '24/7 ЕВАКУАТОР': 'ODŤAH 24/7',
    'Переваги сервісу': 'Výhody servisu',
    'Швидка допомога': 'Rýchla pomoc',
    'Евакуація та доставка авто': 'Odťah a preprava vozidla',
    'Діагностика': 'Diagnostika',
    'Сучасні рішення для авто': 'Moderné riešenia pre vozidlá',
    'Працюємо з': 'Servisujeme',
    'Усіма марками': 'Všetky značky',
    'Швидкі послуги': 'Rýchle služby',
    'Сервіс та ремонт': 'Servis a opravy',
    'Шиномонтаж': 'Pneuservis',
    'Кліматизація': 'Klimatizácia',
    'Евакуатор 24/7': 'Odťah 24/7',
    'Чому DS PRO?': 'Prečo DS PRO?',
    'ЧОМУ DS PRO?': 'PREČO DS PRO?',
    'Професійний підхід': 'Profesionálny prístup',
    'Досвідчений автосервіс із акцентом на точність, якісну діагностику та безпечний ремонт автомобіля.': 'Skúsený autoservis zameraný na presnú diagnostiku a bezpečné opravy vozidiel.',
    'Чесні ціни': 'Férové ceny',
    'Прозорий підхід без непотрібних витрат. Ми пояснимо, що саме потрібно і чому.': 'Transparentný prístup bez zbytočných nákladov. Vysvetlíme vám, čo je potrebné a prečo.',
    'Надійність': 'Spoľahlivosť',
    'Якісна робота та уважне ставлення до кожного авто, щоб ви могли спокійно їздити.': 'Kvalitná práca a starostlivý prístup ku každému vozidlu, aby ste mohli jazdiť bez obáv.',
    'Швидка реакція на проблеми з авто — від діагностики до евакуації та ремонту.': 'Rýchlo reagujeme na problémy s vozidlom – od diagnostiky až po odťah a opravu.',
    'Усі марки авто': 'Všetky značky vozidiel',
    'Сервіс і ремонт для широкого спектру моделей і транспортних засобів будь-якої марки.': 'Servis a opravy širokého spektra modelov a vozidiel všetkých značiek.',
    'Наші послуги': 'Naše služby',
    'ПОСЛУГИ АВТОСЕРВІСУ': 'SLUŽBY AUTOSERVISU',
    'Двигун': 'Motor',
    'Комплексна діагностика та ремонт двигуна для будь-яких типів транспортних засобів.': 'Komplexná diagnostika a opravy motorov všetkých typov vozidiel.',
    'Ремонт двигуна': 'Oprava motora',
    'Заміна масла': 'Výmena oleja',
    'Ремені та ланцюги ГРМ': 'Rozvodové remene a reťaze',
    'Чип-тюнінг': 'Čipový tuning',
    'Усунення несправностей': 'Odstraňovanie porúch',
    'Дізнатися більше': 'Zistiť viac',
    'Гальма': 'Brzdy',
    'Безпека та надійність гальмівної системи — основа спокійної їзди.': 'Bezpečná a spoľahlivá brzdová sústava je základom pokojnej jazdy.',
    'Заміна дисків і колодок': 'Výmena kotúčov a doštičiek',
    'Ремонт гальмівної системи': 'Oprava brzdovej sústavy',
    'Обслуговування ABS': 'Servis ABS',
    'Прокачка гальм': 'Odvzdušnenie bŕzd',
    'Підвіска': 'Podvozok',
    'Діагностика та ремонт ходової частини для стабільності і комфорту.': 'Diagnostika a opravy podvozka pre stabilitu a pohodlie.',
    'Діагностика підвіски': 'Diagnostika podvozka',
    'Заміна амортизаторів': 'Výmena tlmičov',
    'Ремонт важелів і сайлентблоків': 'Oprava ramien a silentblokov',
    'Рульове керування': 'Riadenie',
    'Регулювання розвалу-сходження': 'Nastavenie geometrie kolies',
    'Шини': 'Pneumatiky',
    'Монтаж, балансування та вибір комплектів шин під ваш стиль їзди.': 'Montáž, vyváženie a výber pneumatík podľa vášho štýlu jazdy.',
    'Монтаж і балансування': 'Montáž a vyváženie',
    'Сезонна заміна': 'Sezónna výmena',
    'Ремонт шин': 'Oprava pneumatík',
    'Центрування': 'Vycentrovanie',
    'Продаж шин': 'Predaj pneumatík',
    'Діагностика та обслуговування системи кондиціонування для комфорту в дорозі.': 'Diagnostika a servis klimatizácie pre pohodlie na cestách.',
    'Заправка фреоном': 'Plnenie klimatizácie',
    'Пошук витоків': 'Vyhľadávanie únikov',
    'Чистка системи': 'Čistenie systému',
    'Дезінфекція': 'Dezinfekcia',
    'Ремонт кондиціонерів': 'Oprava klimatizácie',
    'Сучасна електронна діагностика авто для швидкого визначення несправності.': 'Moderná elektronická diagnostika vozidiel na rýchle zistenie porúch.',
    "Комп'ютерна діагностика": 'Počítačová diagnostika',
    'Читання та видалення помилок': 'Čítanie a mazanie chybových kódov',
    'Підготовка до STK / EK': 'Príprava na STK / EK',
    'Автоелектроніка': 'Autoelektronika',
    'Пневматична підвіска': 'Vzduchové odpruženie',
    'Ремонт і сервіс систем пневматичної підвіски для стабільної роботи.': 'Opravy a servis vzduchového odpruženia pre spoľahlivú prevádzku.',
    'Ремонт комплектуючих': 'Oprava komponentov',
    'Ущільнення та тиск': 'Tesnenia a tlak',
    'Калібрування': 'Kalibrácia',
    'Ремонт після дрібної аварії': 'Oprava po menšej nehode',
    'Оновлення автомобіля після невеликих пошкоджень із гарантією якості.': 'Oprava vozidla po menšom poškodení so zárukou kvality.',
    'Оцінка пошкоджень': 'Posúdenie poškodenia',
    'Ремонт кузова': 'Oprava karosérie',
    'Відновлення деталей': 'Obnova dielov',
    'Заміна будь-яких рідин': 'Výmena prevádzkových kvapalín',
    'Регулярна заміна масел, антифризу та інших технічних рідин для бездоганної роботи.': 'Pravidelná výmena oleja, chladiacej a ďalších kvapalín pre bezproblémový chod vozidla.',
    'Охолоджувальна рідина': 'Chladiaca kvapalina',
    'Гальмівна рідина': 'Brzdová kvapalina',
    'Гідравлічна рідина': 'Hydraulická kvapalina',
    'Огляд перед покупкою': 'Kontrola pred kúpou',
    'Повна перевірка авто перед покупкою, щоб уникнути непередбачуваних проблем.': 'Dôkladná kontrola vozidla pred kúpou, aby ste sa vyhli nepríjemným prekvapeniam.',
    'Підсумкова перевірка': 'Záverečná kontrola',
    'Оцінка технічного стану': 'Posúdenie technického stavu',
    'Сервісне обслуговування придбаного авто': 'Servis zakúpeného vozidla',
    'Технічне обслуговування, профілактичні перевірки та налаштування після покупки.': 'Údržba, preventívne kontroly a nastavenie vozidla po kúpe.',
    'Обслуговування': 'Servis',
    'Перевірка технічного стану': 'Kontrola technického stavu',
    'Попереднє налаштування': 'Úvodné nastavenie',
    'Швидка допомога': 'Rýchla pomoc',
    'ЕВАКУАТОР 24/7': 'ODŤAH 24/7',
    'Цілодобова допомога на дорозі': 'Nepretržitá pomoc na cestách',
    'Поломка, аварія або транспортний засіб не заводиться? Ми допоможемо доставити авто до сервісу.': 'Porucha, nehoda alebo vozidlo, ktoré nejde naštartovať? Pomôžeme vám dopraviť ho do servisu.',
    'ВИКЛИКАТИ ЕВАКУАТОР': 'ZAVOLAŤ ODŤAHOVÚ SLUŽBU',
    'Авто': 'Vozidlá',
    'ОБСЛУГОВУЄМО ВСІ МАРКИ АВТО': 'SERVISUJEME VOZIDLÁ VŠETKÝCH ZNAČIEK',
    'Марки автомобілів': 'Značky automobilov',
    'Як працюємо': 'Ako pracujeme',
    'ЯК ЦЕ ПРАЦЮЄ': 'AKO TO FUNGUJE',
    "Зв'яжіться з нами": 'Kontaktujte nás',
    'Передзвоніть або напишіть нам. Ми швидко зрозуміємо, що вам потрібно.': 'Zavolajte alebo nám napíšte. Rýchlo zistíme, čo potrebujete.',
    'Перевіряємо авто і визначаємо причину несправності.': 'Skontrolujeme vozidlo a zistíme príčinu poruchy.',
    'Ремонт': 'Oprava',
    'Узгоджуємо обсяг робіт і виконуємо ремонт максимально якісно.': 'Dohodneme rozsah prác a opravu vykonáme kvalitne.',
    'Купуєте вживане авто?': 'Kupujete ojazdené vozidlo?',
    'КУПУЄТЕ ВЖИВАНЕ АВТО?': 'KUPUJETE OJAZDENÉ VOZIDLO?',
    'Перевірте автомобіль перед покупкою': 'Dajte si vozidlo skontrolovať pred kúpou',
    'DS PRO допоможе перевірити авто перед покупкою та виявити можливі технічні проблеми ще до підписання договору.': 'V DS PRO vám pomôžeme skontrolovať vozidlo a odhaliť možné technické problémy ešte pred podpisom zmluvy.',
    'ЗАМОВИТИ ОГЛЯД': 'OBJEDNAŤ KONTROLU',
    'Наша майстерня': 'Náš autoservis',
    'WORKSHOP & GALLERY': 'AUTOSERVIS A GALÉRIA',
    'Slovakia': 'Slovensko',
    'Механік під час ремонту авто': 'Mechanik pri oprave vozidla',
    'Авто на підйомнику': 'Vozidlo na zdviháku',
    'Діагностика авто': 'Diagnostika vozidla',
    'Гальма та сервіс': 'Brzdy a servis',
    'Підвіска та ходова частина': 'Odpruženie a podvozok',
    'Простір автосервісу': 'Priestor autoservisu',
    'Карта місцезнаходження': 'Mapa polohy',
    'DS PRO AUTOSERVIS на карті': 'DS PRO AUTOSERVIS na mape',
    'біля м\'ясного магазину «Орбан»': 'pri mäsiarstve Orbán',
    'Між меблевим центром «Orbán» та рестораном «Pipinko»': 'Medzi predajňou nábytku Orbán a reštauráciou Pipinko',
    'ПОКАЗАТИ МАРШРУТ': 'ZOBRAZIŤ TRASU',
    'Графік роботи': 'Otváracie hodiny',
    'Графік': 'Otváracie hodiny',
    'ГРАФІК РОБОТИ': 'OTVÁRACIE HODINY',
    'ДЕ НАС ЗНАЙТИ': 'KDE NÁS NÁJDETE',
    'ЕВАКУАТОР': 'ODŤAHOVÁ SLUŽBA',
    "ПОНЕДІЛОК — П'ЯТНИЦЯ": 'PONDELOK — PIATOK',
    'СУБОТА': 'SOBOTA',
    'НЕДІЛЯ': 'NEDEĽA',
    'ЗАКРИТО': 'ZATVORENÉ',
    'Важливо: звичайний графік роботи сервісу відрізняється від 24/7 евакуації.': 'Dôležité: bežné otváracie hodiny servisu sa líšia od nonstop odťahovej služby.',
    'ПОТРІБЕН РЕМОНТ АБО ДІАГНОСТИКА?': 'POTREBUJETE OPRAVU ALEBO DIAGNOSTIKU?',
    'Зателефонуйте нам або напишіть у зручному месенджері.': 'Zavolajte nám alebo napíšte cez svoj obľúbený messenger.',
    'НАПИСАТИ В WHATSAPP': 'NAPÍSAŤ NA WHATSAPP',
    'Адреса': 'Adresa',
    'Посилання': 'Odkazy',
    'Про нас': 'O nás',
    'Евакуатор 24/7': 'Odťah 24/7',
    'Пн–Пт 08:00–17:00': 'Po–Pi 08:00–17:00',
    'Сб 08:00–12:00': 'So 08:00–12:00',
    'Мобільні кнопки': 'Rýchle kontakty',
    'Дзвонити': 'Zavolať',
    'Маршрут': 'Trasa',
    '«біля м\'ясного магазину «Орбан»»': 'pri mäsiarstve Orbán',
    'Головна навігація': 'Hlavná navigácia',
    'Dunajská Streda • Slovensko': 'Dunajská Streda • Slovensko'
  };

  const slovakAttributes = {
    'DS PRO AUTOSERVIS | Автосервіс Дунайська Стреда': 'DS PRO AUTOSERVIS | Autoservis Dunajská Streda',
    'DS PRO AUTOSERVIS – професійний автосервіс у Дунайській Стреді. Швидка діагностика, сервіс, ремонт авто, шиномонтаж, кліматизація та 24/7 евакуатор.': 'DS PRO AUTOSERVIS – profesionálny autoservis v Dunajskej Strede. Diagnostika, opravy, pneuservis, klimatizácia a odťahová služba 24/7.',
    'автосервіс Дунайська Стреда, ремонт авто Дунайська Стреда, діагностика авто Дунайська Стреда, евакуатор Дунайська Стреда, шиносервіс Дунайська Стреда, автосервіс DS': 'autoservis Dunajská Streda, oprava vozidiel Dunajská Streda, diagnostika vozidiel, odťahová služba, pneuservis, DS autoservis',
    'Переваги сервісу': 'Výhody servisu',
    'Механік під час ремонту авто': 'Mechanik pri oprave vozidla',
    'Авто на підйомнику': 'Vozidlo na zdviháku',
    'Діагностика авто': 'Diagnostika vozidla',
    'Гальма та сервіс': 'Brzdy a servis',
    'Підвіска та ходова частина': 'Odpruženie a podvozok',
    'Простір автосервісу': 'Priestor autoservisu',
    'Мобільні кнопки': 'Rýchle kontakty',
    'Головна навігація': 'Hlavná navigácia',
    'DS PRO AUTOSERVIS': 'DS PRO AUTOSERVIS'
  };
  const ukrainianText = {
    'WORKSHOP & GALLERY': 'МАЙСТЕРНЯ ТА ГАЛЕРЕЯ',
    'Slovakia': 'Словаччина'
  };

  const defaultLanguage = 'uk';
  const langButtons = document.querySelectorAll('.lang-btn');
  const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.parentElement.closest('script, style')
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT;
    }
  });
  const textNodes = [];
  while (textWalker.nextNode()) textNodes.push(textWalker.currentNode);
  const originalText = new Map(textNodes.map((node) => [node, node.nodeValue]));

  const translatedAttributes = [];
  document.querySelectorAll('[alt], [aria-label], [title]').forEach((element) => {
    ['alt', 'aria-label', 'title'].forEach((attribute) => {
      if (element.hasAttribute(attribute)) {
        translatedAttributes.push({ element, attribute, original: element.getAttribute(attribute) });
      }
    });
  });
  document.querySelectorAll('meta[name="description"], meta[name="keywords"]').forEach((element) => {
    translatedAttributes.push({ element, attribute: 'content', original: element.content });
  });
  translatedAttributes.push({ element: document, attribute: 'title', original: document.title });

  const setLanguage = (language) => {
    const useSlovak = language === 'sk';

    textNodes.forEach((node) => {
      const original = originalText.get(node);
      const trimmed = original.trim();
      if (!trimmed) return;

      const translation = useSlovak ? slovakText[trimmed] : ukrainianText[trimmed];
      if (translation) {
        const leadingWhitespace = original.match(/^\s*/)[0];
        const trailingWhitespace = original.match(/\s*$/)[0];
        node.nodeValue = `${leadingWhitespace}${translation}${trailingWhitespace}`;
      } else {
        node.nodeValue = original;
      }
    });

    translatedAttributes.forEach(({ element, attribute, original }) => {
      const translated = useSlovak ? (slovakAttributes[original] || slovakText[original]) : null;
      const value = translated || original;
      if (element === document) document.title = value;
      else element.setAttribute(attribute, value);
    });

    langButtons.forEach((button) => {
      const isActive = button.dataset.lang === language;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    document.documentElement.lang = useSlovak ? 'sk' : 'uk';
  };

  langButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.lang);
    });
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const siteHeader = document.querySelector('.site-header');

  const closeMenu = () => {
    siteHeader.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = siteHeader.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  setLanguage(defaultLanguage);
});
