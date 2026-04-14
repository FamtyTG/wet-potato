/**
 * TASKS DATABASE — Wet Potato (ULTIMATE MEGA PACK + ORIGINAL + STORY)
 * Структура: TASKS[lang][mode][difficulty] = [ { q, a, answers: [], is18Plus: boolean, time: number } ]
 */

const TASKS = {
    /* ══════════════════════════════════════
       RUSSIAN
    ══════════════════════════════════════ */
    ru: {
        // ─── ANSWERS (словесные ответы) ─────────────────────
        answers: {
            easy: [
                // Твои оригинальные:
                { q: "Сколько будет 2 + 2?", a: "4", answers: ["4", "четыре"], is18Plus: false, time: 5 },
                { q: "Назови свою столицу!", a: "Москва", answers: ["москва", "астана", "киев", "минск"], is18Plus: false, time: 5 },
                { q: "Какого цвета небо?", a: "Синее", answers: ["синее", "голубое"], is18Plus: false, time: 5 },
                { q: "Сколько пальцев на одной руке?", a: "5", answers: ["5", "пять"], is18Plus: false, time: 4 },
                { q: "Сколько будет 10 − 5?", a: "5", answers: ["5", "пять"], is18Plus: false, time: 5 },
                { q: "Как делает собака?", a: "Гав", answers: ["гав", "гаф", "ррр"], is18Plus: false, time: 4 },
                { q: "Сколько ушей у человека?", a: "2", answers: ["2", "два"], is18Plus: false, time: 4 },
                { q: "Три цвета светофора?", a: "Красный, жёлтый, зелёный", answers: ["красный", "желтый", "зеленый"], is18Plus: false, time: 7 },
                { q: "Сколько будет 5 × 2?", a: "10", answers: ["10", "десять"], is18Plus: false, time: 5 },
                { q: "Назови любое животное!", a: "любое", answers: ["любо", "any"], is18Plus: false, time: 6 },
                { q: "Сколько будет 3 × 3?", a: "9", answers: ["9", "девять"], is18Plus: false, time: 5 },
                { q: "Какого цвета трава?", a: "Зелёная", answers: ["зеленая", "зелёная", "зеленый"], is18Plus: false, time: 4 },
                { q: "Сколько будет 7 − 3?", a: "4", answers: ["4", "четыре"], is18Plus: false, time: 5 },
                { q: "Назови любой фрукт!", a: "любой", answers: ["любо", "any"], is18Plus: false, time: 6 },
                { q: "Имя любого президента!", a: "любое имя", answers: ["любо", "any", "путин", "байден", "трамп"], is18Plus: false, time: 7 },
                { q: "Сколько дней в неделе?", a: "7", answers: ["7", "семь"], is18Plus: false, time: 5 },
                { q: "Сколько месяцев в году?", a: "12", answers: ["12", "двенадцать"], is18Plus: false, time: 5 },
                { q: "Назови первый месяц года!", a: "Январь", answers: ["январь"], is18Plus: false, time: 5 },
                { q: "Назови любой цвет!", a: "любой", answers: ["любо", "any"], is18Plus: false, time: 5 },
                { q: "Как зовут мультяшного кота?", a: "любое имя", answers: ["гарфилд", "том", "леопольд", "матроскин", "салем", "любо"], is18Plus: false, time: 7 },
                
                // Новые 18+:
                { q: "Назови любое матерное слово!", a: "Блять", answers: ["блять", "сука", "хуй", "пиздец", "ебать", "бля", "пидор", "шлюха"], is18Plus: true, time: 6 },
                { q: "Матерный синоним слова 'Конец'?", a: "Пиздец", answers: ["пиздец"], is18Plus: true, time: 6 },
                { q: "Сленговое название женской груди?", a: "Сиськи", answers: ["сиськи", "буфера", "бидоны", "титьки"], is18Plus: true, time: 6 },
                { q: "Сленговое название ягодиц?", a: "Жопа", answers: ["жопа", "пердак", "булки", "задница", "бампер"], is18Plus: true, time: 6 },
                { q: "Что надевают, чтобы не залететь?", a: "Презерватив", answers: ["презерватив", "гандон", "кондом", "резинка"], is18Plus: true, time: 6 },
                { q: "Самый известный сайт для взрослых на 'P'?", a: "Pornhub", answers: ["порнхаб", "pornhub", "пх"], is18Plus: true, time: 5 },
                { q: "Легкий наркотик на букву 'Т'?", a: "Травка", answers: ["травка", "weed", "марихуана", "гашиш"], is18Plus: true, time: 6 },
            ],
            medium: [
                // Твои оригинальные:
                { q: "Реши: 15 + 18?", a: "33", answers: ["33"], is18Plus: false, time: 8 },
                { q: "Столица Японии?", a: "Токио", answers: ["токио"], is18Plus: false, time: 6 },
                { q: "Сколько лап у паука?", a: "8", answers: ["8", "восемь"], is18Plus: false, time: 6 },
                { q: "Назови 3 бренда кроссовок!", a: "Nike, Adidas, Puma", answers: ["nike", "adidas", "puma", "reebok", "найк", "адидас", "пума"], is18Plus: false, time: 10 },
                { q: "Сколько будет 7 × 8?", a: "56", answers: ["56"], is18Plus: false, time: 7 },
                { q: "3 мужских имени на «А»!", a: "Антон, Александр, Арсений", answers: ["антон", "александр", "артем", "андрей", "алексей", "арсений", "анатолий"], is18Plus: false, time: 10 },
                { q: "Реши: 45 − 17?", a: "28", answers: ["28"], is18Plus: false, time: 8 },
                { q: "5 нечётных чисел подряд!", a: "1 3 5 7 9", answers: ["1 3 5 7 9", "1, 3, 5, 7, 9", "13579"], is18Plus: false, time: 10 },
                { q: "Назови 3 столицы Европы!", a: "Берлин, Париж, Рим", answers: ["берлин", "париж", "рим", "лондон", "москва", "мадрид"], is18Plus: false, time: 10 },
                { q: "Что больше: 1/2 или 0.6?", a: "0.6", answers: ["0.6", "ноль шесть"], is18Plus: false, time: 7 },
                { q: "3 реки в России!", a: "Волга, Обь, Лена", answers: ["волга", "обь", "лена", "енисей", "амур", "дон"], is18Plus: false, time: 10 },
                { q: "Сколько будет 12 × 12?", a: "144", answers: ["144"], is18Plus: false, time: 7 },
                { q: "3 автомобильных бренда!", a: "BMW, Toyota, Ford", answers: ["bmw", "toyota", "ford", "бмв", "тойота", "форд", "ауди", "лада", "мерседес"], is18Plus: false, time: 9 },
                { q: "Назови 3 планеты Солнечной системы!", a: "Земля, Марс, Юпитер", answers: ["земля", "марс", "юпитер", "венера", "сатурн", "уран", "нептун", "меркурий"], is18Plus: false, time: 9 },
                { q: "Кто написал «Евгения Онегина»?", a: "Пушкин", answers: ["пушкин", "александр пушкин"], is18Plus: false, time: 7 },
                { q: "Назови столицу Германии!", a: "Берлин", answers: ["берлин"], is18Plus: false, time: 6 },
                { q: "Сколько будет 64 ÷ 8?", a: "8", answers: ["8", "восемь"], is18Plus: false, time: 6 },
                { q: "3 страны Азии!", a: "Китай, Япония, Индия", answers: ["китай", "япония", "индия", "корея", "вьетнам", "тайланд", "казахстан"], is18Plus: false, time: 9 },
                { q: "Что тяжелее: кг железа или кг ваты?", a: "одинаково", answers: ["одинаково", "равно", "равны"], is18Plus: false, time: 6 },
                { q: "Назови 3 вида спорта!", a: "футбол, баскетбол, теннис", answers: ["футбол", "баскетбол", "волейбол", "теннис", "хоккей", "плавание"], is18Plus: false, time: 9 },

                // Новые 18+:
                { q: "Назови любую секс-игрушку!", a: "Вибратор", answers: ["вибратор", "дилдо", "страпон", "анальная пробка", "вагина", "наручники"], is18Plus: true, time: 8 },
                { q: "Как называется поза 'по-собачьи' одним словом?", a: "Догги", answers: ["догги", "раком", "доги"], is18Plus: true, time: 6 },
                { q: "Сайт, где продают интимные фото по подписке?", a: "OnlyFans", answers: ["онлифанс", "onlyfans", "оф", "бусти"], is18Plus: true, time: 7 },
                { q: "Крепкий алкоголь на букву 'В'?", a: "Водка", answers: ["водка", "виски", "вино", "вермут"], is18Plus: true, time: 6 },
                { q: "Что означает аббревиатура MILF (по-русски)?", a: "Мамочка", answers: ["мамочка", "мамаша", "милфа"], is18Plus: true, time: 7 },
                { q: "Как матом назвать 'женский орган'?", a: "Пизда", answers: ["пизда", "манда", "щелка", "вареник"], is18Plus: true, time: 6 },
                { q: "Где танцуют на шесте?", a: "Стриптиз-клуб", answers: ["стриптиз", "клуб", "стрипуха"], is18Plus: true, time: 7 },
            ],
            hard: [
                // Твои оригинальные:
                { q: "√144 = ?", a: "12", answers: ["12"], is18Plus: false, time: 10 },
                { q: "Столица Мадагаскара?", a: "Антананариву", answers: ["антананариву"], is18Plus: false, time: 12 },
                { q: "Химическая формула воды?", a: "H₂O", answers: ["h2o", "h20", "аш два о"], is18Plus: false, time: 8 },
                { q: "Назови 5 штатов США!", a: "Техас, Флорида, Аляска...", answers: ["техас", "флорида", "аляска", "калифорния", "нью-йорк", "гавайи"], is18Plus: false, time: 15 },
                { q: "Первый закон Ньютона (кратко)?", a: "Тело в покое/движении если нет сил", answers: ["покой", "движение", "инерция", "сохраняет"], is18Plus: false, time: 15 },
                { q: "Сколько элементов у Менделеева?", a: "118", answers: ["118"], is18Plus: false, time: 9 },
                { q: "Год основания Москвы?", a: "1147", answers: ["1147"], is18Plus: false, time: 10 },
                { q: "В чем измеряется сила тока?", a: "Ампер", answers: ["ампер", "амперы"], is18Plus: false, time: 8 },
                { q: "Кто написал «Войну и мир»?", a: "Толстой", answers: ["толстой", "лев толстой"], is18Plus: false, time: 8 },
                { q: "Формула площади круга?", a: "Пи × R²", answers: ["пи", "r", "r2", "квадрат"], is18Plus: false, time: 10 },
                { q: "Сколько костей у взрослого?", a: "206", answers: ["206"], is18Plus: false, time: 10 },
                { q: "4 океана Земли!", a: "Тихий, Атлантический, Индийский, Северный", answers: ["тихий", "атлантический", "индийский", "северный ледовитый"], is18Plus: false, time: 15 },
                { q: "15% от 200?", a: "30", answers: ["30"], is18Plus: false, time: 9 },
                { q: "Ближайшая к нам галактика?", a: "Андромеда", answers: ["андромеда"], is18Plus: false, time: 10 },
                { q: "Скорость света (примерно)?", a: "300 000 км/с", answers: ["300000", "300 000"], is18Plus: false, time: 9 },
                { q: "Столица Бразилии?", a: "Бразилиа", answers: ["бразилиа", "бразилия"], is18Plus: false, time: 10 },
                { q: "Кто изобрёл телефон?", a: "Белл", answers: ["белл", "александр белл"], is18Plus: false, time: 10 },
                { q: "Что означает CPU?", a: "Центральный процессор", answers: ["процессор", "центральный процессор"], is18Plus: false, time: 8 },
                { q: "Год начала Второй мировой?", a: "1939", answers: ["1939"], is18Plus: false, time: 8 },
                { q: "Назови 3 языка программирования!", a: "Python, Java, C++", answers: ["python", "java", "c++", "js", "javascript", "php", "c#", "ruby"], is18Plus: false, time: 10 },
                
                // Новые 18+:
                { q: "Самый известный лысый порноактер (имя/фамилия)?", a: "Джонни Синс", answers: ["джонни синс", "синс", "johnny sins", "лысый из браззерс"], is18Plus: true, time: 10 },
                { q: "Средняя глубина влагалища в спокойном состоянии (см)?", a: "10", answers: ["8", "9", "10", "11", "12"], is18Plus: true, time: 12 },
                { q: "Как называется сексуальный фетиш на ступни?", a: "Футфетиш", answers: ["футфетиш", "фут-фетиш", "фут фетиш"], is18Plus: true, time: 9 },
                { q: "Расшифруй букву 'С' в аббревиатуре БДСМ", a: "Садизм", answers: ["садизм", "садомазохизм"], is18Plus: true, time: 10 },
                { q: "Как называется практика связывания веревками в БДСМ?", a: "Шибари", answers: ["шибари", "бондаж", "бандаж"], is18Plus: true, time: 12 },
            ],
            story: [
                // === 0+ ИСТОРИИ (Рассказ вслух) ===
                { q: "Расскажи о своем самом стыдном провале в школе/универе. У тебя минута!", a: "Расскажи вслух", answers: ["ок"], is18Plus: false, time: 60 },
                { q: "Какая твоя самая большая ложь, о которой никто здесь не знает?", a: "Признайся вслух", answers: ["ок"], is18Plus: false, time: 60 },
                { q: "Вспомни момент, когда тебе было максимально страшно. Что произошло?", a: "Расскажи вслух", answers: ["ок"], is18Plus: false, time: 60 },
                { q: "Расскажи про свое самое ужасное свидание или встречу с человеком.", a: "Расскажи вслух", answers: ["ок"], is18Plus: false, time: 60 },
                { q: "Кем ты реально хотел(а) стать в детстве и почему передумал(а)?", a: "Расскажи вслух", answers: ["ок"], is18Plus: false, time: 60 },
                { q: "Расскажи про самый странный сон, который ты когда-либо видел(а).", a: "Расскажи вслух", answers: ["ок"], is18Plus: false, time: 60 },
                
                // === 18+ ИСТОРИИ (Рассказ вслух) ===
                { q: "Расскажи о своем самом необычном или странном сексуальном опыте.", a: "Расскажи вслух", answers: ["ок"], is18Plus: true, time: 60 },
                { q: "Какую самую грязную или пошлую вещь ты делал(а) втайне от всех?", a: "Расскажи вслух", answers: ["ок"], is18Plus: true, time: 60 },
                { q: "Какая у тебя самая жесткая фантазия, которую ты еще не реализовал(а)?", a: "Расскажи вслух", answers: ["ок"], is18Plus: true, time: 60 },
                { q: "Самое странное или экстремальное место, где у тебя был секс?", a: "Расскажи вслух", answers: ["ок"], is18Plus: true, time: 60 },
                { q: "Палился ли ты когда-нибудь во время секса или мастурбации? Как это было?", a: "Расскажи вслух", answers: ["ок"], is18Plus: true, time: 60 },
                { q: "Признайся, кого из присутствующих ты считаешь самым привлекательным и почему?", a: "Ответь вслух", answers: ["ок"], is18Plus: true, time: 60 },
            ]
        },

        // ─── ACTIONS (физические действия) ──────────────────
        actions: {
            easy: [
                // Твои оригинальные:
                { q: "Скажи «Мяу» вслух!", a: "Мяу", answers: ["ок"], is18Plus: false, time: 5 },
                { q: "Попрыгай на месте 3 раза!", a: "прыжки", answers: ["ок"], is18Plus: false, time: 6 },
                { q: "Помаши рукой всем!", a: "машет", answers: ["ок"], is18Plus: false, time: 5 },
                { q: "Покажи язык!", a: "показал", answers: ["ок"], is18Plus: false, time: 4 },
                { q: "Хлопни 3 раза в ладоши!", a: "хлопки", answers: ["ок"], is18Plus: false, time: 5 },
                { q: "Встань и сразу сядь!", a: "встал-сел", answers: ["ок"], is18Plus: false, time: 5 },
                { q: "Моргни 5 раз быстро!", a: "моргает", answers: ["ок"], is18Plus: false, time: 5 },
                { q: "Покажи большой палец вверх!", a: "палец вверх", answers: ["ок"], is18Plus: false, time: 4 },
                { q: "Носом нарисуй круг в воздухе!", a: "рисует", answers: ["ок"], is18Plus: false, time: 6 },
                { q: "Сделай смешное лицо!", a: "гримаса", answers: ["ок"], is18Plus: false, time: 5 },
                { q: "Потрогай нос и уши одновременно!", a: "трогает", answers: ["ок"], is18Plus: false, time: 5 },
                { q: "Скажи «Ква-ква» как лягушка!", a: "Ква-ква", answers: ["ок"], is18Plus: false, time: 5 },
                { q: "Покружись на месте!", a: "кружится", answers: ["ок"], is18Plus: false, time: 6 },
                { q: "Изобрази животное (любое)!", a: "изображает", answers: ["ок"], is18Plus: false, time: 6 },
                { q: "Хлопни под коленом!", a: "хлопнул", answers: ["ок"], is18Plus: false, time: 5 },
                { q: "Потри ладони и дай тепло соседу!", a: "потёр", answers: ["ок"], is18Plus: false, time: 6 },
                { q: "Встань на носочки!", a: "встал на носки", answers: ["ок"], is18Plus: false, time: 5 },
                { q: "Быстро помотай головой!", a: "мотает", answers: ["ок"], is18Plus: false, time: 5 },
                { q: "Улыбнись как можно шире!", a: "улыбается", answers: ["ок"], is18Plus: false, time: 5 },
                { q: "Зааплодируй себе!", a: "аплодирует", answers: ["ок"], is18Plus: false, time: 5 },

                // Новые 18+:
                { q: "Изобрази громкий стон удовольствия (3 сек)!", a: "Стон", answers: ["ок"], is18Plus: true, time: 6 },
                { q: "Покажи средний палец экрану с дерзким лицом!", a: "Фак", answers: ["ок"], is18Plus: true, time: 5 },
                { q: "Звонко шлепни себя по попе!", a: "Шлепок", answers: ["ок"], is18Plus: true, time: 5 },
                { q: "Оближи свои губы максимально сексуально!", a: "Губы", answers: ["ок"], is18Plus: true, time: 6 },
                { q: "Скажи 'О да, папочка/мамочка' стонущим голосом!", a: "Голос", answers: ["ок"], is18Plus: true, time: 6 },
            ],
            medium: [
                // Твои оригинальные:
                { q: "Присядь 5 раз!", a: "приседает", answers: ["ок"], is18Plus: false, time: 10 },
                { q: "Прочитай скороговорку: «Карл у Клары»!", a: "читает", answers: ["ок"], is18Plus: false, time: 10 },
                { q: "Изобрази робота 5 секунд!", a: "робот", answers: ["ок"], is18Plus: false, time: 7 },
                { q: "Сделай 3 отжимания!", a: "отжимается", answers: ["ок"], is18Plus: false, time: 10 },
                { q: "Станцуй 5 секунд!", a: "танцует", answers: ["ок"], is18Plus: false, time: 7 },
                { q: "Пропой первые слова любой песни!", a: "поёт", answers: ["ок"], is18Plus: false, time: 8 },
                { q: "Изобрази пантомиму: «едешь на велосипеде»!", a: "велосипед", answers: ["ок"], is18Plus: false, time: 8 },
                { q: "Посчитай вслух от 10 до 1!", a: "считает", answers: ["ок"], is18Plus: false, time: 8 },
                { q: "Назови 3 соседа и пожми руку воображаемому!", a: "жмёт руку", answers: ["ок"], is18Plus: false, time: 9 },
                { q: "Изобрази, что несёшь тяжёлый чемодан!", a: "чемодан", answers: ["ок"], is18Plus: false, time: 8 },
                { q: "Сделай 5 прыжков на одной ноге!", a: "прыжки", answers: ["ок"], is18Plus: false, time: 8 },
                { q: "Покажи, как ловишь рыбу!", a: "рыбалка", answers: ["ок"], is18Plus: false, time: 8 },
                { q: "Изобрази замедленное движение!", a: "слоумо", answers: ["ок"], is18Plus: false, time: 8 },
                { q: "Скажи скороговорку быстро!", a: "скороговорка", answers: ["ок"], is18Plus: false, time: 8 },
                { q: "Покажи, что ты штангист!", a: "штангист", answers: ["ок"], is18Plus: false, time: 8 },
                { q: "Изобрази пингвина!", a: "пингвин", answers: ["ок"], is18Plus: false, time: 8 },
                { q: "Говори шёпотом следующие 10 секунд!", a: "шёпот", answers: ["ок"], is18Plus: false, time: 10 },
                { q: "Покажи, как дирижируешь оркестром!", a: "дирижёр", answers: ["ок"], is18Plus: false, time: 8 },
                { q: "Нарисуй пальцем звезду в воздухе!", a: "рисует", answers: ["ок"], is18Plus: false, time: 6 },
                { q: "Повтори движение за следующим игроком!", a: "повторяет", answers: ["ок"], is18Plus: false, time: 8 },

                // Новые 18+:
                { q: "Сымитируй движения тазом (вперед-назад) 5 секунд!", a: "Движения", answers: ["ок"], is18Plus: true, time: 8 },
                { q: "Поцелуй соседа в щеку или шею!", a: "Поцелуй", answers: ["ок"], is18Plus: true, time: 7 },
                { q: "Расстегни одну пуговицу или молнию на себе!", a: "Стриптиз", answers: ["ок"], is18Plus: true, time: 6 },
                { q: "Прошепчи матерное слово на ухо соседу страстным голосом!", a: "Шепот", answers: ["ок"], is18Plus: true, time: 8 },
                { q: "Сделай соседу легкий массаж плеч (5 сек)!", a: "Массаж", answers: ["ок"], is18Plus: true, time: 9 },
            ],
            hard: [
                // Твои оригинальные:
                { q: "Прочитай скороговорку 3 раза без ошибок!", a: "читает", answers: ["ок"], is18Plus: false, time: 15 },
                { q: "Изобрази персонажа из фильма без слов!", a: "пантомима", answers: ["ок"], is18Plus: false, time: 12 },
                { q: "Сделай 10 берпи!", a: "берпи", answers: ["ок"], is18Plus: false, time: 15 },
                { q: "Спой куплет любой песни!", a: "поёт", answers: ["ок"], is18Plus: false, time: 12 },
                { q: "Повтори за мной (сложное движение)!", a: "повторяет", answers: ["ок"], is18Plus: false, time: 10 },
                { q: "Назови 5 стран без остановок!", a: "страны", answers: ["ок"], is18Plus: false, time: 10 },
                { q: "Встань в позу йоги на 5 сек!", a: "йога", answers: ["ок"], is18Plus: false, time: 10 },
                { q: "Изобрази сцену из известного фильма!", a: "актёр", answers: ["ок"], is18Plus: false, time: 12 },
                { q: "Сделай мост (гимнастика) и вернись!", a: "мост", answers: ["ок"], is18Plus: false, time: 12 },
                { q: "Покажи 5 разных эмоций за 5 секунд!", a: "эмоции", answers: ["ок"], is18Plus: false, time: 10 },
                { q: "Придумай рифму к слову «картошка»!", a: "рифма", answers: ["ок"], is18Plus: false, time: 8 },
                { q: "Говори только рифмами следующие 10 сек!", a: "рифмы", answers: ["ок"], is18Plus: false, time: 12 },
                { q: "Изобрази звонок телефона и ответь на него!", a: "телефон", answers: ["ок"], is18Plus: false, time: 10 },
                { q: "Покажи, что ты в матрице (слоумо)!", a: "матрица", answers: ["ок"], is18Plus: false, time: 10 },
                { q: "Встань и поклонись публике!", a: "поклон", answers: ["ок"], is18Plus: false, time: 8 },
                { q: "Сыграй сцену без слов: «Ты опоздал»!", a: "пантомима", answers: ["ок"], is18Plus: false, time: 12 },
                { q: "Изобрази 3 разных животных!", a: "животные", answers: ["ок"], is18Plus: false, time: 12 },
                { q: "Расскажи анекдот за 15 секунд!", a: "анекдот", answers: ["ок"], is18Plus: false, time: 15 },
                { q: "Сделай 10 отжиманий!", a: "отжимания", answers: ["ок"], is18Plus: false, time: 15 },
                { q: "Пройди 5 шагов вслепую (закрой глаза)!", a: "вслепую", answers: ["ок"], is18Plus: false, time: 10 },

                // Новые 18+:
                { q: "Изобрази танец у шеста для стриптиза (10 сек)!", a: "Стриптиз", answers: ["ок"], is18Plus: true, time: 15 },
                { q: "Соблазнительно погладь коленку соседа (5 сек)!", a: "Колено", answers: ["ок"], is18Plus: true, time: 10 },
                { q: "Смотри прямо в глаза соседу и скажи 'Я хочу тебя прямо сейчас'!", a: "Соблазн", answers: ["ок"], is18Plus: true, time: 10 },
                { q: "Встань на четвереньки и виляй задом (5 сек)!", a: "Догги-стайл", answers: ["ок"], is18Plus: true, time: 12 },
            ],
            story: [
                // === 0+ ЗВОНКИ И ПРАНКИ ===
                { q: "ПРАНК: Позвони случайному контакту и 1 мин убеждай его, что купил живого слона.", a: "Позвони", answers: ["ок"], is18Plus: false, time: 60 },
                { q: "ПРАНК: Позвони в любую пиццерию и расспрашивай, есть ли у них пицца с борщом.", a: "Позвони", answers: ["ок"], is18Plus: false, time: 60 },
                { q: "ПРАНК: Позвони маме/папе и серьезно скажи, что уходишь из школы/универа в шаманы.", a: "Позвони", answers: ["ок"], is18Plus: false, time: 60 },
                { q: "ПРАНК: Набери любой неизвестный номер и 1 минуту жалуйся на погоду.", a: "Позвони", answers: ["ок"], is18Plus: false, time: 60 },
                { q: "ПРАНК: Напиши 3 случайным контактам из телефона 'Я всё знаю'.", a: "Напиши", answers: ["ок"], is18Plus: false, time: 60 },
                
                // === 18+ ЗВОНКИ И ПРАНКИ ===
                { q: "ПРАНК 18+: Позвони бывшему/бывшей (или другу) и скажи, что все еще носишь его/ее трусы.", a: "Позвони", answers: ["ок"], is18Plus: true, time: 60 },
                { q: "ПРАНК 18+: Позвони в местный секс-шоп и расспрашивай про размеры кожаных плетей.", a: "Позвони", answers: ["ок"], is18Plus: true, time: 60 },
                { q: "ПРАНК 18+: Позвони случайному контакту и начни тяжело дышать и стонать в трубку.", a: "Позвони", answers: ["ок"], is18Plus: true, time: 60 },
                { q: "ПРАНК 18+: Отправь другу/подруге смс: 'Я сейчас без трусов. Что будем делать?'", a: "Напиши", answers: ["ок"], is18Plus: true, time: 60 },
                { q: "ПРАНК 18+: Позвони в аптеку и спроси, есть ли у них презервативы со вкусом чеснока.", a: "Позвони", answers: ["ок"], is18Plus: true, time: 60 },
            ]
        },
    },

    /* ══════════════════════════════════════
       ENGLISH
    ══════════════════════════════════════ */
    en: {
        answers: {
            easy: [
                { q: "What is 2 + 2?", a: "4", answers: ["4", "four"], is18Plus: false, time: 5 },
                { q: "Name the capital of France!", a: "Paris", answers: ["paris"], is18Plus: false, time: 6 },
                { q: "What colour is the sky?", a: "Blue", answers: ["blue"], is18Plus: false, time: 5 },
                { q: "How many fingers on one hand?", a: "5", answers: ["5", "five"], is18Plus: false, time: 4 },
                { q: "What is 10 − 5?", a: "5", answers: ["5", "five"], is18Plus: false, time: 5 },
                { q: "What sound does a dog make?", a: "Woof", answers: ["woof", "bark"], is18Plus: false, time: 4 },
                { q: "How many ears does a human have?", a: "2", answers: ["2", "two"], is18Plus: false, time: 4 },
                { q: "3 colours of a traffic light!", a: "Red, yellow, green", answers: ["red", "yellow", "green"], is18Plus: false, time: 7 },
                { q: "What is 5 × 2?", a: "10", answers: ["10", "ten"], is18Plus: false, time: 5 },
                { q: "Name any animal!", a: "any", answers: ["any"], is18Plus: false, time: 6 },
                { q: "What is 3 × 3?", a: "9", answers: ["9", "nine"], is18Plus: false, time: 5 },
                { q: "What colour is grass?", a: "Green", answers: ["green"], is18Plus: false, time: 4 },
                { q: "What is 7 − 3?", a: "4", answers: ["4", "four"], is18Plus: false, time: 5 },
                { q: "Name any fruit!", a: "any", answers: ["any"], is18Plus: false, time: 6 },
                { q: "How many days in a week?", a: "7", answers: ["7", "seven"], is18Plus: false, time: 5 },
                { q: "How many months in a year?", a: "12", answers: ["12", "twelve"], is18Plus: false, time: 5 },
                { q: "Name the first month of the year!", a: "January", answers: ["january"], is18Plus: false, time: 5 },
                { q: "Name any country!", a: "any", answers: ["any"], is18Plus: false, time: 6 },
                { q: "What is 6 + 3?", a: "9", answers: ["9", "nine"], is18Plus: false, time: 5 },
                { q: "Name a colour!", a: "any", answers: ["any"], is18Plus: false, time: 5 },
                
                { q: "Name any swear word!", a: "Fuck", answers: ["fuck", "shit", "bitch", "cunt", "asshole", "dick"], is18Plus: true, time: 7 },
                { q: "Slang for Breasts?", a: "Boobs", answers: ["boobs", "tits", "titties", "jugs"], is18Plus: true, time: 7 },
                { q: "Slang for buttocks?", a: "Ass", answers: ["ass", "booty", "butt"], is18Plus: true, time: 6 },
            ],
            medium: [
                { q: "Solve: 15 + 18?", a: "33", answers: ["33"], is18Plus: false, time: 8 },
                { q: "Capital of Japan?", a: "Tokyo", answers: ["tokyo"], is18Plus: false, time: 6 },
                { q: "How many legs does a spider have?", a: "8", answers: ["8", "eight"], is18Plus: false, time: 6 },
                { q: "Name 3 shoe brands!", a: "Nike, Adidas, Puma", answers: ["nike", "adidas", "puma", "reebok"], is18Plus: false, time: 10 },
                { q: "What is 7 × 8?", a: "56", answers: ["56"], is18Plus: false, time: 7 },
                { q: "3 male names starting with 'A'!", a: "Adam, Alex, Arthur", answers: ["adam", "alex", "arthur", "aaron", "andrew"], is18Plus: false, time: 10 },
                { q: "Solve: 45 − 17?", a: "28", answers: ["28"], is18Plus: false, time: 8 },
                { q: "5 odd numbers in a row!", a: "1 3 5 7 9", answers: ["1 3 5 7 9", "1, 3, 5, 7, 9", "13579"], is18Plus: false, time: 10 },
                { q: "Name 3 capitals of Europe!", a: "Berlin, Paris, Rome", answers: ["berlin", "paris", "rome", "london", "madrid"], is18Plus: false, time: 10 },
                { q: "Which is bigger: 1/2 or 0.6?", a: "0.6", answers: ["0.6", "zero point six"], is18Plus: false, time: 7 },
                { q: "What is 12 × 12?", a: "144", answers: ["144"], is18Plus: false, time: 7 },
                { q: "3 car brands!", a: "BMW, Toyota, Ford", answers: ["bmw", "toyota", "ford", "audi", "mercedes"], is18Plus: false, time: 9 },
                { q: "Name 3 planets!", a: "Earth, Mars, Jupiter", answers: ["earth", "mars", "jupiter", "venus", "saturn", "uranus", "neptune", "mercury"], is18Plus: false, time: 9 },
                { q: "Who wrote Romeo and Juliet?", a: "Shakespeare", answers: ["shakespeare", "william shakespeare"], is18Plus: false, time: 7 },
                { q: "Capital of Germany?", a: "Berlin", answers: ["berlin"], is18Plus: false, time: 6 },
                { q: "What is 64 ÷ 8?", a: "8", answers: ["8", "eight"], is18Plus: false, time: 6 },
                { q: "3 Asian countries!", a: "China, Japan, India", answers: ["china", "japan", "india", "korea", "vietnam", "thailand"], is18Plus: false, time: 9 },
                { q: "Name 3 sports!", a: "Football, basketball, tennis", answers: ["football", "basketball", "tennis", "soccer", "baseball", "hockey"], is18Plus: false, time: 9 },
                { q: "What is heavier: 1kg iron or 1kg feathers?", a: "Same weight", answers: ["same weight", "same", "equal"], is18Plus: false, time: 6 },
                { q: "Name the longest river in the world!", a: "Nile (or Amazon)", answers: ["nile", "amazon"], is18Plus: false, time: 7 },
                
                { q: "Favorite sex position?", a: "Doggy", answers: ["doggy", "missionary", "cowgirl", "69"], is18Plus: true, time: 8 },
                { q: "Adult website?", a: "Pornhub", answers: ["pornhub", "onlyfans", "brazzers", "xvideos"], is18Plus: true, time: 7 },
                { q: "What does MILF stand for?", a: "Mother I'd Like to F...", answers: ["mother", "mom", "milf"], is18Plus: true, time: 8 },
            ],
            hard: [
                { q: "√144 = ?", a: "12", answers: ["12"], is18Plus: false, time: 10 },
                { q: "Capital of Madagascar?", a: "Antananarivo", answers: ["antananarivo"], is18Plus: false, time: 12 },
                { q: "Chemical formula for water?", a: "H₂O", answers: ["h2o"], is18Plus: false, time: 8 },
                { q: "Name 5 US states!", a: "Texas, Florida, Alaska...", answers: ["texas", "florida", "alaska", "california", "new york", "hawaii"], is18Plus: false, time: 15 },
                { q: "Newton's first law (briefly)?", a: "Object stays at rest unless force acts", answers: ["rest", "motion", "inertia", "force"], is18Plus: false, time: 15 },
                { q: "How many elements in periodic table?", a: "118", answers: ["118"], is18Plus: false, time: 9 },
                { q: "In what unit is electric current measured?", a: "Ampere", answers: ["ampere", "amps"], is18Plus: false, time: 8 },
                { q: "Who wrote War and Peace?", a: "Tolstoy", answers: ["tolstoy", "leo tolstoy"], is18Plus: false, time: 8 },
                { q: "Formula for area of a circle?", a: "π × r²", answers: ["pi", "r", "r2", "square"], is18Plus: false, time: 10 },
                { q: "How many bones in adult human body?", a: "206", answers: ["206"], is18Plus: false, time: 10 },
                { q: "Name 4 oceans!", a: "Pacific, Atlantic, Indian, Arctic", answers: ["pacific", "atlantic", "indian", "arctic"], is18Plus: false, time: 15 },
                { q: "What is 15% of 200?", a: "30", answers: ["30"], is18Plus: false, time: 9 },
                { q: "Nearest galaxy to Milky Way?", a: "Andromeda", answers: ["andromeda"], is18Plus: false, time: 10 },
                { q: "Speed of light (approx)?", a: "300,000 km/s", answers: ["300000", "300,000"], is18Plus: false, time: 9 },
                { q: "Capital of Brazil?", a: "Brasília", answers: ["brasilia", "brazil"], is18Plus: false, time: 10 },
                { q: "Who invented the telephone?", a: "Bell", answers: ["bell", "alexander graham bell"], is18Plus: false, time: 10 },
                { q: "What does CPU stand for?", a: "Central Processing Unit", answers: ["central processing unit", "processor"], is18Plus: false, time: 8 },
                { q: "Year World War II started?", a: "1939", answers: ["1939"], is18Plus: false, time: 8 },
                { q: "Name 3 programming languages!", a: "Python, Java, C++", answers: ["python", "java", "c++", "javascript", "ruby", "c#"], is18Plus: false, time: 10 },
                { q: "Distance from Earth to Moon (approx)?", a: "384,000 km", answers: ["384000", "384,000"], is18Plus: false, time: 12 },
                
                { q: "Average male size (cm)?", a: "15", answers: ["14", "15", "16"], is18Plus: true, time: 9 },
                { q: "Most famous bald porn actor?", a: "Johnny Sins", answers: ["johnny sins", "sins"], is18Plus: true, time: 10 },
            ],
            story: [
                { q: "Tell us about your most embarrassing date. You have 1 minute!", a: "Speak out loud", answers: ["ok"], type: "action", is18Plus: false, time: 60 },
                { q: "What is your biggest lie that nobody knows about?", a: "Speak out loud", answers: ["ok"], type: "action", is18Plus: false, time: 60 },
                { q: "Tell us about your weirdest sexual experience.", a: "Speak out loud", answers: ["ok"], type: "action", is18Plus: true, time: 60 },
                { q: "What is your dirtiest secret kink?", a: "Speak out loud", answers: ["ok"], type: "action", is18Plus: true, time: 60 },
            ]
        },
        actions: {
            easy: [
                { q: "Say 'Meow' out loud!", a: "Meow", answers: ["ok"], is18Plus: false, time: 5 },
                { q: "Jump 3 times!", a: "jumps", answers: ["ok"], is18Plus: false, time: 6 },
                { q: "Wave at everyone!", a: "waves", answers: ["ok"], is18Plus: false, time: 5 },
                { q: "Stick out your tongue!", a: "tongue out", answers: ["ok"], is18Plus: false, time: 4 },
                { q: "Clap 3 times!", a: "claps", answers: ["ok"], is18Plus: false, time: 5 },
                { q: "Stand up and sit down!", a: "stands-sits", answers: ["ok"], is18Plus: false, time: 5 },
                { q: "Blink 5 times fast!", a: "blinks", answers: ["ok"], is18Plus: false, time: 5 },
                { q: "Thumbs up!", a: "thumbs up", answers: ["ok"], is18Plus: false, time: 4 },
                { q: "Draw a circle in the air with your nose!", a: "draws", answers: ["ok"], is18Plus: false, time: 6 },
                { q: "Make a funny face!", a: "funny face", answers: ["ok"], is18Plus: false, time: 5 },
                { q: "Touch your nose and ears at the same time!", a: "touches", answers: ["ok"], is18Plus: false, time: 5 },
                { q: "Say 'Ribbit' like a frog!", a: "Ribbit", answers: ["ok"], is18Plus: false, time: 5 },
                { q: "Spin around once!", a: "spins", answers: ["ok"], is18Plus: false, time: 6 },
                { q: "Impersonate any animal!", a: "impersonates", answers: ["ok"], is18Plus: false, time: 6 },
                { q: "High five the air!", a: "high fives", answers: ["ok"], is18Plus: false, time: 5 },
                { q: "Rub your palms together!", a: "rubs", answers: ["ok"], is18Plus: false, time: 6 },
                { q: "Stand on your tiptoes!", a: "tiptoes", answers: ["ok"], is18Plus: false, time: 5 },
                { q: "Shake your head quickly!", a: "shakes", answers: ["ok"], is18Plus: false, time: 5 },
                { q: "Smile as wide as you can!", a: "smiles", answers: ["ok"], is18Plus: false, time: 5 },
                { q: "Give yourself a round of applause!", a: "claps", answers: ["ok"], is18Plus: false, time: 5 },

                { q: "Fake a moan of pleasure!", a: "Moan", answers: ["ok"], is18Plus: true, time: 6 },
                { q: "Spank yourself!", a: "Spank", answers: ["ok"], is18Plus: true, time: 5 },
            ],
            medium: [
                { q: "Do 5 squats!", a: "squats", answers: ["ok"], is18Plus: false, time: 10 },
                { q: "Say a tongue twister: 'She sells seashells'!", a: "tongue twister", answers: ["ok"], is18Plus: false, time: 10 },
                { q: "Act like a robot for 5 seconds!", a: "robot", answers: ["ok"], is18Plus: false, time: 7 },
                { q: "Do 3 push-ups!", a: "push-ups", answers: ["ok"], is18Plus: false, time: 10 },
                { q: "Dance for 5 seconds!", a: "dances", answers: ["ok"], is18Plus: false, time: 7 },
                { q: "Sing the first line of any song!", a: "sings", answers: ["ok"], is18Plus: false, time: 8 },
                { q: "Mime riding a bicycle!", a: "bicycle", answers: ["ok"], is18Plus: false, time: 8 },
                { q: "Count backwards from 10 out loud!", a: "counts", answers: ["ok"], is18Plus: false, time: 8 },
                { q: "Act like you're carrying heavy luggage!", a: "luggage", answers: ["ok"], is18Plus: false, time: 8 },
                { q: "Do 5 hops on one leg!", a: "hops", answers: ["ok"], is18Plus: false, time: 8 },
                { q: "Pretend to fish!", a: "fishing", answers: ["ok"], is18Plus: false, time: 8 },
                { q: "Do a slow-motion move!", a: "slow-mo", answers: ["ok"], is18Plus: false, time: 8 },
                { q: "Pretend you're a weightlifter!", a: "weightlifter", answers: ["ok"], is18Plus: false, time: 8 },
                { q: "Act like a penguin!", a: "penguin", answers: ["ok"], is18Plus: false, time: 8 },
                { q: "Whisper for the next 10 seconds!", a: "whispers", answers: ["ok"], is18Plus: false, time: 10 },
                { q: "Conduct an imaginary orchestra!", a: "conductor", answers: ["ok"], is18Plus: false, time: 8 },
                { q: "Draw a star in the air with your finger!", a: "draws", answers: ["ok"], is18Plus: false, time: 6 },
                { q: "Mimic the next player's movements!", a: "mimics", answers: ["ok"], is18Plus: false, time: 8 },
                { q: "Act like you're in zero gravity!", a: "zero gravity", answers: ["ok"], is18Plus: false, time: 10 },
                { q: "Do your best superhero pose!", a: "superhero", answers: ["ok"], is18Plus: false, time: 8 },

                { q: "Thrust your hips back and forth!", a: "Thrust", answers: ["ok"], is18Plus: true, time: 8 },
                { q: "Whisper a dirty word in your neighbor's ear!", a: "Whisper", answers: ["ok"], is18Plus: true, time: 8 },
            ],
            hard: [
                { q: "Do a tongue twister 3 times without mistakes!", a: "tongue twister", answers: ["ok"], is18Plus: false, time: 15 },
                { q: "Act out a movie character silently!", a: "mime", answers: ["ok"], is18Plus: false, time: 12 },
                { q: "Do 10 burpees!", a: "burpees", answers: ["ok"], is18Plus: false, time: 15 },
                { q: "Sing a verse of any song!", a: "sings", answers: ["ok"], is18Plus: false, time: 12 },
                { q: "Do a gymnastic bridge and return!", a: "bridge", answers: ["ok"], is18Plus: false, time: 12 },
                { q: "Show 5 different emotions in 5 seconds!", a: "emotions", answers: ["ok"], is18Plus: false, time: 10 },
                { q: "Rhyme a word with 'potato'!", a: "rhyme", answers: ["ok"], is18Plus: false, time: 8 },
                { q: "Speak only in rhymes for 10 seconds!", a: "rhymes", answers: ["ok"], is18Plus: false, time: 12 },
                { q: "Act out a phone ringing and answer it!", a: "phone", answers: ["ok"], is18Plus: false, time: 10 },
                { q: "Do a Matrix slow-mo dodge!", a: "matrix", answers: ["ok"], is18Plus: false, time: 10 },
                { q: "Stand up and take a bow!", a: "bow", answers: ["ok"], is18Plus: false, time: 8 },
                { q: "Mime 'you're late!' without words!", a: "mime", answers: ["ok"], is18Plus: false, time: 12 },
                { q: "Impersonate 3 different animals!", a: "animals", answers: ["ok"], is18Plus: false, time: 12 },
                { q: "Tell a joke in 15 seconds!", a: "joke", answers: ["ok"], is18Plus: false, time: 15 },
                { q: "Do 10 push-ups!", a: "push-ups", answers: ["ok"], is18Plus: false, time: 15 },
                { q: "Walk 5 steps with eyes closed!", a: "blind walk", answers: ["ok"], is18Plus: false, time: 10 },
                { q: "Speak in an accent for 10 seconds!", a: "accent", answers: ["ok"], is18Plus: false, time: 12 },
                { q: "Pretend to defuse a bomb!", a: "bomb", answers: ["ok"], is18Plus: false, time: 10 },
                { q: "Give a 10-second motivational speech!", a: "speech", answers: ["ok"], is18Plus: false, time: 15 },
                { q: "Do your best villain laugh!", a: "laugh", answers: ["ok"], is18Plus: false, time: 8 },

                { q: "Show a striptease pole move!", a: "Strip", answers: ["ok"], is18Plus: true, time: 10 },
                { q: "Sensually massage your neighbor's leg!", a: "Massage", answers: ["ok"], is18Plus: true, time: 10 },
            ],
            story: [
                { q: "PRANK CALL: Call a pizza place and ask if they sell pineapple soup.", a: "Call", answers: ["ok"], is18Plus: false, time: 60 },
                { q: "PRANK CALL: Call an ex and tell them you still wear their shirt.", a: "Call", answers: ["ok"], is18Plus: true, time: 60 },
                { q: "PRANK CALL: Call a sex shop and ask for the biggest handcuffs.", a: "Call", answers: ["ok"], is18Plus: true, time: 60 },
            ]
        },
    },
};

/**
 * ВАЖНЫЕ ФУНКЦИИ-ПОМОЩНИКИ ДЛЯ INDEX.HTML
 * (Эти функции нужны, чтобы правильно мешать и выдавать задания)
 */

function getMixPool(lang, diff) {
    const a = (TASKS[lang]?.answers?.[diff] || []).map(t => ({...t, type: 'answer'}));
    const b = (TASKS[lang]?.actions?.[diff] || []).map(t => ({...t, type: 'action'}));
    // Для story режима мы берем стори из answers (истории) и actions (звонки)
    if (diff === 'story') {
        const c = (TASKS[lang]?.answers?.['story'] || []).map(t => ({...t, type: 'action'}));
        const d = (TASKS[lang]?.actions?.['story'] || []).map(t => ({...t, type: 'action'}));
        return [...c, ...d].sort(() => Math.random() - 0.5);
    }
    return [...a, ...b].sort(() => Math.random() - 0.5);
}

function getTaskPool(lang, mode, diff) {
    if (typeof TASKS === 'undefined') return [{ q: "Ошибка базы!", a: "ок", type: "answer", is18Plus: false, time: 10 }];
    
    let pool = [];
    if (mode === 'mix') {
        pool = getMixPool(lang, diff);
    } else {
        const arr = TASKS[lang]?.[mode]?.[diff] || [];
        // Режим story — это всегда action (чтобы не вылезала клавиатура)
        const type = (mode === 'answers' && diff !== 'story') ? 'answer' : 'action';
        pool = arr.map(t => ({...t, type}));
    }

    // Подгоняем формат, добавляя allAnswers для умной валидации
    let formattedPool = pool.map(t => ({
        q: t.q,
        a: Array.isArray(t.answers) ? t.answers[0] : (t.a || "ок"),
        allAnswers: t.answers || [t.a],
        type: t.type,
        is18Plus: t.is18Plus === true,
        time: t.time || 10
    }));

    // Эпичный фильтр 18+ (берем глобальную переменную isAdultMode из index.html, если она есть)
    const wantsAdult = typeof isAdultMode !== 'undefined' ? isAdultMode : false;
    let filtered = formattedPool.filter(t => wantsAdult ? t.is18Plus : !t.is18Plus);
    
    // Fallback: если вопросов нет, возвращаем всё, что есть
    if (filtered.length === 0) {
        filtered = formattedPool.filter(t => wantsAdult ? true : !t.is18Plus); 
    }
    if (filtered.length === 0) filtered = formattedPool;

    return filtered;
}
