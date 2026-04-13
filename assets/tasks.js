/**
 * TASKS DATABASE — Wet Potato
 * Структура: TASKS[lang][mode][difficulty] = [ { q, a } ]
 *
 * lang:        'ru' | 'en'
 * mode:        'answers' | 'actions' | 'mix'
 *   answers  — нужно дать словесный ответ
 *   actions  — нужно выполнить физическое действие
 *   mix      — микс из обоих (выбирается случайно из обоих пулов)
 * difficulty: 'easy' | 'medium' | 'hard'
 */

const TASKS = {

    /* ══════════════════════════════════════
       RUSSIAN
    ══════════════════════════════════════ */
    ru: {

        // ─── ANSWERS (словесные ответы) ─────────────────────
        answers: {
            easy: [
                { q: "Сколько будет 2 + 2?",              a: "4" },
                { q: "Назови свою столицу!",               a: "Москва" },
                { q: "Какого цвета небо?",                 a: "Синее" },
                { q: "Сколько пальцев на одной руке?",     a: "5" },
                { q: "Сколько будет 10 − 5?",             a: "5" },
                { q: "Как делает собака?",                 a: "Гав" },
                { q: "Сколько ушей у человека?",           a: "2" },
                { q: "Три цвета светофора?",               a: "Красный, жёлтый, зелёный" },
                { q: "Сколько будет 5 × 2?",              a: "10" },
                { q: "Назови любое животное!",             a: "любое" },
                { q: "Сколько будет 3 × 3?",              a: "9" },
                { q: "Какого цвета трава?",                a: "Зелёная" },
                { q: "Сколько будет 7 − 3?",              a: "4" },
                { q: "Назови любой фрукт!",               a: "любой" },
                { q: "Имя любого президента!",            a: "любое имя" },
                { q: "Сколько дней в неделе?",            a: "7" },
                { q: "Сколько месяцев в году?",           a: "12" },
                { q: "Назови первый месяц года!",         a: "Январь" },
                { q: "Назови любой цвет!",                a: "любой" },
                { q: "Как зовут мультяшного кота?",       a: "любое имя" },
            ],
            medium: [
                { q: "Реши: 15 + 18?",                    a: "33" },
                { q: "Столица Японии?",                    a: "Токио" },
                { q: "Сколько лап у паука?",               a: "8" },
                { q: "Назови 3 бренда кроссовок!",         a: "Nike, Adidas, Puma" },
                { q: "Сколько будет 7 × 8?",              a: "56" },
                { q: "3 мужских имени на «А»!",           a: "Антон, Александр, Арсений" },
                { q: "Реши: 45 − 17?",                    a: "28" },
                { q: "5 нечётных чисел подряд!",          a: "1 3 5 7 9" },
                { q: "Назови 3 столицы Европы!",           a: "Берлин, Париж, Рим" },
                { q: "Что больше: 1/2 или 0.6?",          a: "0.6" },
                { q: "3 реки в России!",                  a: "Волга, Обь, Лена" },
                { q: "Сколько будет 12 × 12?",            a: "144" },
                { q: "3 автомобильных бренда!",           a: "BMW, Toyota, Ford" },
                { q: "Назови 3 планеты Солнечной системы!", a: "Земля, Марс, Юпитер" },
                { q: "Кто написал «Евгения Онегина»?",    a: "Пушкин" },
                { q: "Назови столицу Германии!",          a: "Берлин" },
                { q: "Сколько будет 64 ÷ 8?",            a: "8" },
                { q: "3 страны Азии!",                    a: "Китай, Япония, Индия" },
                { q: "Что тяжелее: кг железа или кг ваты?", a: "одинаково" },
                { q: "Назови 3 вида спорта!",             a: "футбол, баскетбол, теннис" },
            ],
            hard: [
                { q: "√144 = ?",                           a: "12" },
                { q: "Столица Мадагаскара?",               a: "Антананариву" },
                { q: "Химическая формула воды?",           a: "H₂O" },
                { q: "Назови 5 штатов США!",               a: "Техас, Флорида, Аляска..." },
                { q: "Первый закон Ньютона (кратко)?",     a: "Тело в покое/движении если нет сил" },
                { q: "Сколько элементов у Менделеева?",    a: "118" },
                { q: "Год основания Москвы?",              a: "1147" },
                { q: "В чем измеряется сила тока?",        a: "Ампер" },
                { q: "Кто написал «Войну и мир»?",         a: "Толстой" },
                { q: "Формула площади круга?",             a: "Пи × R²" },
                { q: "Сколько костей у взрослого?",        a: "206" },
                { q: "4 океана Земли!",                    a: "Тихий, Атлантический, Индийский, Северный" },
                { q: "15% от 200?",                        a: "30" },
                { q: "Ближайшая к нам галактика?",         a: "Андромеда" },
                { q: "Скорость света (примерно)?",         a: "300 000 км/с" },
                { q: "Столица Бразилии?",                  a: "Бразилиа" },
                { q: "Кто изобрёл телефон?",              a: "Белл" },
                { q: "Что означает CPU?",                  a: "Центральный процессор" },
                { q: "Год начала Второй мировой?",         a: "1939" },
                { q: "Назови 3 языка программирования!",   a: "Python, Java, C++" },
            ],
        },

        // ─── ACTIONS (физические действия) ──────────────────
        actions: {
            easy: [
                { q: "Скажи «Мяу» вслух!",                a: "Мяу" },
                { q: "Попрыгай на месте 3 раза!",         a: "прыжки" },
                { q: "Помаши рукой всем!",                a: "машет" },
                { q: "Покажи язык!",                      a: "показал" },
                { q: "Хлопни 3 раза в ладоши!",           a: "хлопки" },
                { q: "Встань и сразу сядь!",              a: "встал-сел" },
                { q: "Моргни 5 раз быстро!",              a: "моргает" },
                { q: "Покажи большой палец вверх!",       a: "палец вверх" },
                { q: "Носом нарисуй круг в воздухе!",     a: "рисует" },
                { q: "Сделай смешное лицо!",              a: "гримаса" },
                { q: "Потрогай нос и уши одновременно!",  a: "трогает" },
                { q: "Скажи «Ква-ква» как лягушка!",     a: "Ква-ква" },
                { q: "Покружись на месте!",               a: "кружится" },
                { q: "Изобрази животное (любое)!",        a: "изображает" },
                { q: "Хлопни под коленом!",               a: "хлопнул" },
                { q: "Потри ладони и дай тепло соседу!",  a: "потёр" },
                { q: "Встань на носочки!",                a: "встал на носки" },
                { q: "Быстро помотай головой!",           a: "мотает" },
                { q: "Улыбнись как можно шире!",          a: "улыбается" },
                { q: "Зааплодируй себе!",                 a: "аплодирует" },
            ],
            medium: [
                { q: "Присядь 5 раз!",                    a: "приседает" },
                { q: "Прочитай скороговорку: «Карл у Клары»!", a: "читает" },
                { q: "Изобрази робота 5 секунд!",         a: "робот" },
                { q: "Сделай 3 отжимания!",               a: "отжимается" },
                { q: "Станцуй 5 секунд!",                 a: "танцует" },
                { q: "Пропой первые слова любой песни!",  a: "поёт" },
                { q: "Изобрази пантомиму: «едешь на велосипеде»!", a: "велосипед" },
                { q: "Посчитай вслух от 10 до 1!",        a: "считает" },
                { q: "Назови 3 соседа и пожми руку воображаемому!", a: "жмёт руку" },
                { q: "Изобрази, что несёшь тяжёлый чемодан!", a: "чемодан" },
                { q: "Сделай 5 прыжков на одной ноге!",   a: "прыжки" },
                { q: "Покажи, как ловишь рыбу!",          a: "рыбалка" },
                { q: "Изобрази замедленное движение!",    a: "слоумо" },
                { q: "Скажи скороговорку быстро!",        a: "скороговорка" },
                { q: "Покажи, что ты штангист!",          a: "штангист" },
                { q: "Изобрази пингвина!",                a: "пингвин" },
                { q: "Говори шёпотом следующие 10 секунд!", a: "шёпот" },
                { q: "Покажи, как дирижируешь оркестром!", a: "дирижёр" },
                { q: "Нарисуй пальцем звезду в воздухе!",  a: "рисует" },
                { q: "Повтори движение за следующим игроком!", a: "повторяет" },
            ],
            hard: [
                { q: "Прочитай скороговорку 3 раза без ошибок!", a: "читает" },
                { q: "Изобрази персонажа из фильма без слов!", a: "пантомима" },
                { q: "Сделай 10 берпи!",                  a: "берпи" },
                { q: "Спой куплет любой песни!",          a: "поёт" },
                { q: "Повтори за мной (сложное движение)!", a: "повторяет" },
                { q: "Назови 5 стран без остановок!",     a: "страны" },
                { q: "Встань в позу йоги на 5 сек!",      a: "йога" },
                { q: "Изобрази сцену из известного фильма!", a: "актёр" },
                { q: "Сделай мост (гимнастика) и вернись!", a: "мост" },
                { q: "Покажи 5 разных эмоций за 5 секунд!", a: "эмоции" },
                { q: "Придумай рифму к слову «картошка»!", a: "рифма" },
                { q: "Говори только рифмами следующие 10 сек!", a: "рифмы" },
                { q: "Изобрази звонок телефона и ответь на него!", a: "телефон" },
                { q: "Покажи, что ты в матрице (слоумо)!", a: "матрица" },
                { q: "Встань и поклонись публике!",       a: "поклон" },
                { q: "Сыграй сцену без слов: «Ты опоздал»!", a: "пантомима" },
                { q: "Изобрази 3 разных животных!",       a: "животные" },
                { q: "Расскажи анекдот за 15 секунд!",   a: "анекдот" },
                { q: "Сделай 10 отжиманий!",              a: "отжимания" },
                { q: "Пройди 5 шагов вслепую (закрой глаза)!", a: "вслепую" },
            ],
        },
    },

    /* ══════════════════════════════════════
       ENGLISH
    ══════════════════════════════════════ */
    en: {

        // ─── ANSWERS ────────────────────────────────────────
        answers: {
            easy: [
                { q: "What is 2 + 2?",                     a: "4" },
                { q: "Name the capital of France!",         a: "Paris" },
                { q: "What colour is the sky?",             a: "Blue" },
                { q: "How many fingers on one hand?",       a: "5" },
                { q: "What is 10 − 5?",                    a: "5" },
                { q: "What sound does a dog make?",         a: "Woof" },
                { q: "How many ears does a human have?",   a: "2" },
                { q: "3 colours of a traffic light!",       a: "Red, yellow, green" },
                { q: "What is 5 × 2?",                     a: "10" },
                { q: "Name any animal!",                    a: "any" },
                { q: "What is 3 × 3?",                     a: "9" },
                { q: "What colour is grass?",               a: "Green" },
                { q: "What is 7 − 3?",                     a: "4" },
                { q: "Name any fruit!",                     a: "any" },
                { q: "How many days in a week?",            a: "7" },
                { q: "How many months in a year?",          a: "12" },
                { q: "Name the first month of the year!",  a: "January" },
                { q: "Name any country!",                   a: "any" },
                { q: "What is 6 + 3?",                     a: "9" },
                { q: "Name a colour!",                      a: "any" },
            ],
            medium: [
                { q: "Solve: 15 + 18?",                    a: "33" },
                { q: "Capital of Japan?",                   a: "Tokyo" },
                { q: "How many legs does a spider have?",  a: "8" },
                { q: "Name 3 shoe brands!",                 a: "Nike, Adidas, Puma" },
                { q: "What is 7 × 8?",                     a: "56" },
                { q: "3 male names starting with 'A'!",    a: "Adam, Alex, Arthur" },
                { q: "Solve: 45 − 17?",                    a: "28" },
                { q: "5 odd numbers in a row!",             a: "1 3 5 7 9" },
                { q: "Name 3 capitals of Europe!",          a: "Berlin, Paris, Rome" },
                { q: "Which is bigger: 1/2 or 0.6?",       a: "0.6" },
                { q: "What is 12 × 12?",                   a: "144" },
                { q: "3 car brands!",                       a: "BMW, Toyota, Ford" },
                { q: "Name 3 planets!",                     a: "Earth, Mars, Jupiter" },
                { q: "Who wrote Romeo and Juliet?",         a: "Shakespeare" },
                { q: "Capital of Germany?",                 a: "Berlin" },
                { q: "What is 64 ÷ 8?",                    a: "8" },
                { q: "3 Asian countries!",                  a: "China, Japan, India" },
                { q: "Name 3 sports!",                      a: "Football, basketball, tennis" },
                { q: "What is heavier: 1kg iron or 1kg feathers?", a: "Same weight" },
                { q: "Name the longest river in the world!", a: "Nile (or Amazon)" },
            ],
            hard: [
                { q: "√144 = ?",                            a: "12" },
                { q: "Capital of Madagascar?",              a: "Antananarivo" },
                { q: "Chemical formula for water?",         a: "H₂O" },
                { q: "Name 5 US states!",                   a: "Texas, Florida, Alaska..." },
                { q: "Newton's first law (briefly)?",       a: "Object stays at rest unless force acts" },
                { q: "How many elements in periodic table?", a: "118" },
                { q: "In what unit is electric current measured?", a: "Ampere" },
                { q: "Who wrote War and Peace?",            a: "Tolstoy" },
                { q: "Formula for area of a circle?",       a: "π × r²" },
                { q: "How many bones in adult human body?", a: "206" },
                { q: "Name 4 oceans!",                      a: "Pacific, Atlantic, Indian, Arctic" },
                { q: "What is 15% of 200?",                 a: "30" },
                { q: "Nearest galaxy to Milky Way?",        a: "Andromeda" },
                { q: "Speed of light (approx)?",            a: "300,000 km/s" },
                { q: "Capital of Brazil?",                   a: "Brasília" },
                { q: "Who invented the telephone?",         a: "Bell" },
                { q: "What does CPU stand for?",            a: "Central Processing Unit" },
                { q: "Year World War II started?",          a: "1939" },
                { q: "Name 3 programming languages!",       a: "Python, Java, C++" },
                { q: "Distance from Earth to Moon (approx)?", a: "384,000 km" },
            ],
        },

        // ─── ACTIONS ────────────────────────────────────────
        actions: {
            easy: [
                { q: "Say 'Meow' out loud!",               a: "Meow" },
                { q: "Jump 3 times!",                       a: "jumps" },
                { q: "Wave at everyone!",                   a: "waves" },
                { q: "Stick out your tongue!",              a: "tongue out" },
                { q: "Clap 3 times!",                       a: "claps" },
                { q: "Stand up and sit down!",              a: "stands-sits" },
                { q: "Blink 5 times fast!",                 a: "blinks" },
                { q: "Thumbs up!",                          a: "thumbs up" },
                { q: "Draw a circle in the air with your nose!", a: "draws" },
                { q: "Make a funny face!",                  a: "funny face" },
                { q: "Touch your nose and ears at the same time!", a: "touches" },
                { q: "Say 'Ribbit' like a frog!",          a: "Ribbit" },
                { q: "Spin around once!",                   a: "spins" },
                { q: "Impersonate any animal!",             a: "impersonates" },
                { q: "High five the air!",                  a: "high fives" },
                { q: "Rub your palms together!",           a: "rubs" },
                { q: "Stand on your tiptoes!",              a: "tiptoes" },
                { q: "Shake your head quickly!",           a: "shakes" },
                { q: "Smile as wide as you can!",          a: "smiles" },
                { q: "Give yourself a round of applause!",  a: "claps" },
            ],
            medium: [
                { q: "Do 5 squats!",                        a: "squats" },
                { q: "Say a tongue twister: 'She sells seashells'!", a: "tongue twister" },
                { q: "Act like a robot for 5 seconds!",    a: "robot" },
                { q: "Do 3 push-ups!",                     a: "push-ups" },
                { q: "Dance for 5 seconds!",               a: "dances" },
                { q: "Sing the first line of any song!",   a: "sings" },
                { q: "Mime riding a bicycle!",              a: "bicycle" },
                { q: "Count backwards from 10 out loud!",  a: "counts" },
                { q: "Act like you're carrying heavy luggage!", a: "luggage" },
                { q: "Do 5 hops on one leg!",              a: "hops" },
                { q: "Pretend to fish!",                    a: "fishing" },
                { q: "Do a slow-motion move!",              a: "slow-mo" },
                { q: "Pretend you're a weightlifter!",      a: "weightlifter" },
                { q: "Act like a penguin!",                 a: "penguin" },
                { q: "Whisper for the next 10 seconds!",   a: "whispers" },
                { q: "Conduct an imaginary orchestra!",    a: "conductor" },
                { q: "Draw a star in the air with your finger!", a: "draws" },
                { q: "Mimic the next player's movements!", a: "mimics" },
                { q: "Act like you're in zero gravity!",   a: "zero gravity" },
                { q: "Do your best superhero pose!",       a: "superhero" },
            ],
            hard: [
                { q: "Do a tongue twister 3 times without mistakes!", a: "tongue twister" },
                { q: "Act out a movie character silently!",  a: "mime" },
                { q: "Do 10 burpees!",                     a: "burpees" },
                { q: "Sing a verse of any song!",          a: "sings" },
                { q: "Do a gymnastic bridge and return!",  a: "bridge" },
                { q: "Show 5 different emotions in 5 seconds!", a: "emotions" },
                { q: "Rhyme a word with 'potato'!",        a: "rhyme" },
                { q: "Speak only in rhymes for 10 seconds!", a: "rhymes" },
                { q: "Act out a phone ringing and answer it!", a: "phone" },
                { q: "Do a Matrix slow-mo dodge!",         a: "matrix" },
                { q: "Stand up and take a bow!",           a: "bow" },
                { q: "Mime 'you're late!' without words!",  a: "mime" },
                { q: "Impersonate 3 different animals!",   a: "animals" },
                { q: "Tell a joke in 15 seconds!",         a: "joke" },
                { q: "Do 10 push-ups!",                    a: "push-ups" },
                { q: "Walk 5 steps with eyes closed!",     a: "blind walk" },
                { q: "Speak in an accent for 10 seconds!", a: "accent" },
                { q: "Pretend to defuse a bomb!",         a: "bomb" },
                { q: "Give a 10-second motivational speech!", a: "speech" },
                { q: "Do your best villain laugh!",       a: "laugh" },
            ],
        },
    },
};

/**
 * Вернуть пул задач для режима mix = answers + actions перемешанные
 * Используйте getMixPool(lang, diff) для получения массива
 */
function getMixPool(lang, diff) {
    const a = (TASKS[lang]?.answers?.[diff] || []).map(t => ({...t, type: 'answer'}));
    const b = (TASKS[lang]?.actions?.[diff] || []).map(t => ({...t, type: 'action'}));
    return [...a, ...b].sort(() => Math.random() - 0.5);
}

/**
 * Получить задачи для нужного режима
 * getTaskPool(lang, mode, diff) → Array<{q, a, type}>
 */
function getTaskPool(lang, mode, diff) {
    if (mode === 'mix') return getMixPool(lang, diff);
    const tasks = TASKS[lang]?.[mode]?.[diff] || TASKS['ru']?.['answers']?.['easy'] || [];
    const type = mode === 'answers' ? 'answer' : 'action';
    return tasks.map(t => ({...t, type}));
}
