const data = [
    [
        {
            id: 1,
            name: 'Тетерев',
            species: 'Lyrurus tetrix',
            description:
                'Тетерев – достаточно крупная птица с маленькой головой и коротким клювом. Самцы по размерам больше, чем самки, длина их тела от 49 до 58 см, масса находится в пределах 1-1,4 кг, а самки в длину достигают от 40 до 45 см, а их вес составляет 0,7-1 кг',
            image: 'https://live.staticflickr.com/7479/15878882580_db9aa701fb_k.jpg',
            audio: 'https://www.xeno-canto.org/476061/download',
        },
        {
            id: 2,
            name: 'Рябчик',
            species: 'Tetrastes bonasia',
            description:
                'Длина взрослого рябчика с хвостом составляет от 35 до 37 см, размах крыльев от 48 до 54 см. Масса самцов от 327 до 580 г, для самочек от 305 до 560 г. Масса птиц изменяется в зависимости от времени года, максимальных значений она достигает в ноябре-декабре. В течение зимы рябчики теряют вес и весной становятся гораздо меньше по размерам. Голова у рябчика маленькая, клюв короткий, изогнутый, сильный, длиной около 1 см.',
            image: 'https://live.staticflickr.com/1771/43782490572_0832d7bf7b_h.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/WDMGSYQBRL/XC234610-Default%20Project.mp3',
        },
        {
            id: 3,
            name: 'Перепел',
            species: 'Coturnix coturnix',
            description:
                'Длина тела взрослой перепелки составляет от 16 до 20 см, масса находится в пределах  80 – 145 г. Оперение охристое, голова, спинка, надхвостье и хвост украшены бурыми поперечными полосами и пятнами, на глазах видна рыжая полоса. Самец отличается тёмно-рыжими щеками и зобом. Горло и область подбородка у него черного цвета. У самочки подбородок и горло охристое, а на животике и боках видны темные пестрины.',
            image: 'https://live.staticflickr.com/65535/48469283026_e11c0e6691_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/WDMGSYQBRL/XC234682-Default%20Project.mp3',
        },
        {
            id: 4,
            name: 'Свиязь',
            species: 'Mareca penelope',
            description:
                'Это одна из самых крупных неясытей. Её длина достигает 70 см, размах крыльев около 115 см, длина крыла примерно 35–40 см, хвоста 30 см. Главный отличительный признак вида – длинный, клиновидный, с темными полосами хвост: когда сова сидит на дереве, хвост далеко выступает из-под сложенных крыльев. Общая окраска спинной стороны беловато-охристая с бурым продольным рисунком и слабыми поперечными отметинами на больших перьях.',
            image: 'https://quiz.natureid.no/bird/db_media/eBook/507309d70cf72a5a3f7b17593d5697ae0602bc4f.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC484470-2018-07-26%20Heradsvotn%20-%20Kalbaldur%20180726%20Canard%20siffleur%20femelle.mp3',
        },
        {
            id: 5,
            name: 'Синица',
            species: 'Parus major',
            description:
                'Распространённая птица из семейства синицевых, отряда воробьинообразных. Обитает на всей территории Европы, Ближнего Востока, Центральной и Северной Азии, в некоторых районах Северной Африки. Синица выделяется чёрной головой и шеей, бросающимися в глаза белыми щеками, оливковым верхом и жёлтым низом, с некоторыми вариациями среди многочисленных подвидов. Летом питается преимущественно мелкими насекомыми и другими беспозвоночными. Зимой употребляет в пищу более широкий спектр. ',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Parus_major_m.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC416412-180429_04_11.30h_fluiter_belarus_.mp3',
        },
        {
            id: 6,
            name: 'Чёрный стриж',
            species: 'Apus apus',
            description:
                'Небольшая  птица рода стрижей семейства стрижины. Чёрный стриж достигает в длину 18 см, размах крыльев — 44 см, длина крыла — 17 см и хвоста — 8 см. Хвост вильчатый, оперение тёмно-бурого цвета с зеленоватым металлическим отливом, по форме стриж похож на ласточку. Подбородок и горло украшены округленным белым пятном; глаза тёмно-бурые, клюв чёрный, лапки — светло-бурые. Оперение самцов и самок не отличается, но птенцы немного светлее взрослых стрижей, а их перья имеют грязно-белые каёмки на концах.',
            image: 'https://go29.ru/wp-content/uploads/2020/02/pochemu-lyudi-nahodyat-budto-skleennyh-chernyh-chizhej2.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/VHGHWFPCPT/XC575177-Martinet_noir.mp3',
        },
    ],
    [
        {
            id: 1,
            name: 'Красный ибис',
            species: 'Eudocimus ruber',
            description:
                'Красный ибис распространён на севере Южной Америки, от западной Венесуэлы через Гайану вплоть до устья Амазонки в Бразилии, а также на острове Тринидад. Его можно встретить в более или менее крупных колониях. Его питание состоит из насекомых, моллюсков, крабов и рыб. Своим серповидным согнутым вниз клювом он ковыряется в мягкой тине, отыскивая червей и крабов.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Scarlet_ibis_arp.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC222844-Scarlet%20Ibis%20B%20401.mp3',
        },
        {
            id: 2,
            name: 'Большой тукан токо',
            species: 'Rhamphastos toco',
            description:
                'Крупнейший и один из самых известных видов в семействе туканов. Они обитают в большой части Южной Америки. У большого тукана необыкновенное оперение: тело его черное, воротник, грудь и верхняя часть хвоста белые, а нижняя часть хвоста красная. Вокруг глаза у него тонкая голубая кожа, она окружена оранжевой, более грубой. Но самым выдающимся у него является гигантский желто-оранжевый клюв с красной частью сверху и черным пятном на конце. Язык у этого вида почти такой же длинный, как и клюв, и очень плоский.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Ramphastos_toco_001.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/LNPOUHUARA/XC506061-Toucan%20Toco%203%3ALa%20Leve%CC%81e%3A11-09-19.mp3',
        },
        {
            id: 3,
            name: 'Агами',
            species: 'Agamia agami',
            description:
                'Доколоводная птица из семейства цаплевых. Агами распространены в Центральной и Южной Америке от восточной Мексики до южных границ Амазонии. Обитают на лесных болотах и водно-болотных пространствах в лесистой местности. Ведут скрытный образ жизни, держатся в основном в тени под нависающей над водой сверху растительностью.Птицы гнездятся колониями на покрытиях из ветвей деревьев над водой, при этом рядом могут размещаться до 100 гнёзд. Обычно кладка состоит из двух синих яиц.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Agami_heron_%28Agamia_agami%29_juvenile.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/CDTGHVBGZP/Agami%20Heron2011-4-10-4.mp3',
        },
        {
            id: 4,
            name: 'Большая питанга',
            species: 'Pitangus sulphuratus',
            description:
                'Это певчая птица семейства тиранновые. Большая питанга длиной 22 см и весом 63 г. Верхняя сторона коричневого цвета, голова с чёрно-белыми полосами, на макушке жёлтая полоса, горло белое, нижняя сторона жёлтая. Короткий, толстый клюв окрашен в чёрный цвет. Большая питанга гнездится от южного Техаса и Мексики до Аргентины. В Карибском море встречается на Тринидаде, Бермудах и Тобаго. Птица гнездится на открытой лесистой местности с несколькими высокими деревьями, а также вокруг человеческих поселений.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Bem-Te-Vi.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/KADPGEQPZI/XC507692-03%20Great%20Kiskadee%20audio.mp3',
        },
        {
            id: 5,
            name: 'Гвианская селенидера',
            species: 'Selenidera piperivora',
            description:
                'Птица семейства тукановых, обитающая в Южной Америке. Длина тела составляет от 32 до 35 см, вес — от 129 до 171 г. вианская селенидера обитает на северо-востоке Южной Америки. Область распространения простирается от Гвианы и Французской Гвианы, а также Суринама до юга Венесуэлы и севера Бразилии. Естественная среда обитания — преимущественно низменные леса. В Венесуэле вид встречается на высоте до 900 м, в Суринаме — от 600 до 800 м над уровнем моря. Птицы живут преимущественно в верхней кроне деревьев влажных и дождевых тропических лесов. ',
            image: 'https://animalreader.ru/wp-content/uploads/2015/10/gvianskaja-selenidera-mesta-obitanija-i-obraz-zhizni-chernoj-pticy-animal-reader.-ru.-Deville.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/GKADEITXTH/20101003SELCULcalls.mp3',
        },
        {
            id: 6,
            name: 'Колибри',
            species: 'Trochilidae',
            description:
                ' семейство мелких птиц из отряда стрижеобразных (Apodiformes). Известно более 350 видов, обитающих в Америке от Аляски и Лабрадора до Огненной Земли, многие виды являются эндемиками. Широко распространены в тропических лесах, особенно на среднегорье. Большую часть рациона колибри составляет богатый углеводами сладкий нектар цветковых растений, который они добывают с помощью длинного чувствительного языка. В качестве белковой добавки выступают мелкие членистоногие, которых птицы ловят в воздухе или снимают с листьев и паутины. ',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/En_Garde_%2821310837273%29.jpg/800px-En_Garde_%2821310837273%29.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/RIVNLYTULO/XC172516-BEIJA%20FLOR%20RAJADO%20-%20GUARAQUE%C3%87ABA%20-%2010-01-14.mp3',
        },
    ],

    [
        {
            id: 1,
            name: 'Шлемоносный казуар',
            species: 'Casuarius casuarius',
            description:
                'Шлемоносный казуар достигает высоты 1,5 м и веса около 80 кг. На голове казуар имеет вырост, называемый «шлемом», который у самцов крупнее, чем у самок. Массивные трёхпалые ноги этой новогвинейской птицы вооружены большими когтями, особенно длинным является коготь внутреннего (первого) пальца. Этим оружием казуар способен наносить серьёзные раны, так как, защищаясь, наносит мощные удары ногами. Казуары быстро бегают и хорошо прыгают.',
            image: 'https://live.staticflickr.com/4183/34037884620_19bf190a83_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC132934-cassowary.mp3',
        },
        {
            id: 2,
            name: 'Эму',
            species: 'Dromaius novaehollandiae',
            description:
                'Эму (лат. Dromaius novaehollandiae) — птица отряда казуарообразных, крупнейшая австралийская птица. Это вторая по величине птица после страуса. Ранее эму относили к страусообразным (классификация пересмотрена в 1980-е годы). Эму распространён на большей части материка Австралии, хотя избегает густонаселённых районов, густых лесов и засушливых зон.',
            image: 'https://www.naturepl.com/cache/pcache2/01508621.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC287026-emu-drumming-bowra1.mp3',
        },
        {
            id: 3,
            name: 'Полулапчатый гусь',
            species: 'Anseranas semipalmata',
            description:
                'Полулапчатый гусь - единственный вид семейства Anseranatidae отряда гусеобразных птиц. Иногда его классифицируют как отдельный род в семействе утиных (Anatidae). Однако не менее вероятно, что полулапчатый гусь более близко связан с паламедеями (Anhimidae), так как разделяет с ними некоторые свойства. К ним относятся сравнительно длинные лапы, длинная шея и сильно редуцированные плавательные перепонки. Самцы достигают величины 90 см — самки, как правило, несколько мельче.',
            image: 'https://live.staticflickr.com/8156/7465565964_1190f65056_z.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/BFZLBCXHWQ/XC503277-skatg%C3%A5s.mp3',
        },
        {
            id: 4,
            name: 'Чёрный лебедь',
            species: 'Cygnus atratus',
            description:
                'Взрослые особи достигают роста от 110 до 140 см и являются немного меньшими, чем лебедь-шипун, а их вес составляет от 5 до 8 кг. Шея чёрного лебедя наиболее длинная среди лебедей, благодаря 32 шейным позвонкам он может охотиться под водой в более глубоких водоёмах. В полёте шея составляет больше половины всей длины птицы. Оперение и лапы чёрного цвета, белыми являются лишь отдельные перья, спрятанные в глубине. На краях крыльев у чёрных лебедей кудрявые перья. Клюв светящегося красного цвета и украшен белым кольцом у края. Цвет глаз варьирует между оранжевым и светло-коричневым.',
            image: 'https://live.staticflickr.com/633/23715885321_3f29808094_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/FPDBIILGCX/XC495755-MIXPRE-1275_Black%20Swan_20190811_Winspears.mp3',
        },
        {
            id: 5,
            name: 'Кустарниковый большеног',
            species: 'Alectura lathami lathami',
            description:
                'Кустарниковый большеног длиной от 60 до 75 см, размах крыльев 85 см. Это самый крупный вид большеногов в Австралии. Окраска оперения в основном чёрная, нижняя часть тела с крапинами белого цвета. Ноги длинные. Красная голова бесперая. Жёлтая или сине-серая гортань набухает у самца в брачный период.',
            image: 'https://live.staticflickr.com/65535/48254123137_0b3c0c5fa7_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/OHGEFOWNMD/XC517533-Brushturkey%2006_42_07.mp3',
        },
        {
            id: 6,
            name: 'Глазчатая курица',
            species: 'Leipoa ocellata',
            description:
                'Глазчатая курица длиной примерно 60 см. Самец весит 2 кг, самка — от 1,5 до 2 кг. У птиц сильные ноги и короткий, согнутый клюв. Оперение на голове и шее от коричневого до голубовато-серого. Верхняя часть тела и крылья имеют коричневые и черноватые полосы. Цвет брюха грязно-белый.',
            image: 'https://live.staticflickr.com/65535/47694852182_b300183223_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC407665-Leipoa_ocellata-FL%20Hattah%20NP%2020Oct15%208.04am%20LS117980a.mp3',
        },
    ],
    [
        {
            id: 1,
            name: 'Снежная куропатка',
            species: 'Lerwa lerwa',
            description:
                'У птиц короткие округлые крылья и сильный клюв. У самцов на ногах шпора. Оперение верхней части тела самца и самки, а также головы и шеи полосами чёрно-белого цвета. Нижняя часть тела каштанового цвета. Клюв и ноги кораллового цвета.',
            image: 'https://live.staticflickr.com/7893/47398616552_9a918e0b21_h.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/PWDLINYMKL/XC266751-Snow%20Partridge1BL2015.mp3',
        },
        {
            id: 2,
            name: 'Тибетский улар',
            species: 'Tetraogallus tibetanus',
            description:
                'Голова, шея и участок спины у шеи темно-серые с охристым налётом. Спина покрыта густым чёрным крапом. Брюхо покрыто полосами чёрного и белого цветов, черные полосы уже белых. зоб и грудь беловатого оттенка.  Самка отличается от самца рыжеватым налетом и темными крапинами на голове и шее.',
            image: 'https://live.staticflickr.com/65535/48445413157_23e0355fbb_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/QPDPKRWEEK/XC176140-Tibetan%20Snowcock%201%20130610.mp3',
        },
        {
            id: 3,
            name: 'Жемчужный турач',
            species: 'Francolinus pintadeanus pintadeanus',
            description:
                'Длина тела птицы в среднем составляет 30—34 см, вес — 280—400 г. Самки немного меньше самцов. Жемчужные турачи обитают в Камбодже, Китае, Индии, Лаосе, Мьянме, на Филиппинах, в Таиланде и Вьетнаме. Они интродуцированы на Маврикий, Филиппины, Мадагаскар, в США, Чили и Аргентину[4]. Обитают в субтропических и тропических лесах.',
            image: 'https://live.staticflickr.com/1631/26735662096_e8b5abcabf_h.jpg',
            audio:
                'https://www.xeno-canto.org/sounds/uploaded/DYEJEXGTVP/XC487498-01199%20%E4%B8%AD%E5%8D%8E%E9%B9%A7%E9%B8%AA%20%E6%8C%87%E5%90%8D%E4%BA%9A%E7%A7%8D%20m%20%E6%B7%B1%E5%9C%B3%20%E5%91%A8%E5%93%B2.mp3',
        },
        {
            id: 4,
            name: 'Немой перепел',
            species: 'Coturnix japonica',
            description:
                'Немой перепел, или японский перепел[1] (лат. Coturnix japonica); некоторыми считается подвидом обыкновенного перепела — лат. Coturnix coturnix japonica), — птица подсемейства куропатковых отряда курообразных. Одомашнен человеком и разводится ради мяса и яиц; используется также как модельный организм в научно-исследовательских (лабораторных) целях.',
            image: 'https://live.staticflickr.com/65535/49384418337_c05193e6b6_k.jpg',
            audio:
                'https://www.xeno-canto.org/sounds/uploaded/YNOAMCSSHX/XC448524-%20180419%20%E5%8C%97%E5%85%AB%E6%BB%A7%20%E4%BD%8E%E7%9F%AE%E7%A8%80%E7%96%8F%E8%8A%A6%E8%8B%87%E5%9C%B0SHADOW_0162S12.mp3',
        },
        {
            id: 5,
            name: 'Итагин',
            species: 'Ithaginis cruentus berezowskii',
            description:
                'Самец кровавого фазана достигает длины от 44 до 48 см. Самки несколько меньше и достигают длины от 40 до 42 см. Масса — от 410 до 620 г. Оперение очень мягкое, у птиц обоего пола также имеется хохол, который у самки немного короче. Хвост относительно короткий для фазанов, ступенчатый, состоящий из 14 перьев. Клюв короткий и сильно согнут вниз. Клюв чёрный с красным основанием.',
            image: 'https://live.staticflickr.com/903/26935101897_7642dc11b4_b.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/QPDPKRWEEK/XC175919-Blood%20Pheasant%202%20130612.mp3',
        },
        {
            id: 6,
            name: 'Глазчатый фазан',
            species: 'Tragopan temminckii',
            description:
                'Глазчатый трагопан длиной 60 см — это коренастая птица с коротким хвостом. У самца красное оперение с серыми и чёрно-белыми пятнами. Беспёрое, голубое лицо обрамлено чёрным цветом. Хохолок, шея и грудь оранжевые. У свисающих подобных лацканам мешков гортани узор состоит из оттенков синего и контрастных красных пятен. От похожего трагопана-сатира он отличается, прежде всего, более светлым синим цветом лица и красной верхней стороной. У самки коричневое оперение с белыми пятнами, очень похожа на самок трагопана-сатира.',
            image: 'https://live.staticflickr.com/5569/14739801336_33a0ed4369_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/PWDLINYMKL/XC265943-Temminck%27s%20Tragopan2FP2015.mp3',
        },
    ],
    [
        {
            id: 1,
            name: 'Голубокрылый чирок',
            species: 'Spatula discors',
            description:
                'Длина голубокрылого чирка — 40 см, размах крыльев — около 57 см, вес — около 400 г. У него происходит 2 линьки за год и третья линька на первом году жизни. У взрослого самца серовато-голубая голова с белым серпом на лице, светло-коричневое тело с белым пятном сзади и черный хвост. Взрослая самка пестро-коричневая с беловатой областью у основания носа. У обоих полов голубое зеркало и желтые лапы. В полете они особенно стремительно взмахивают крыльями.',
            image: 'https://live.staticflickr.com/7877/46411970304_5e0080e5a6_h.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/WCNFEBIHCJ/XC139897-BWTE001b.mp3',
        },
        {
            id: 2,
            name: 'Калифорнийский перепел',
            species: 'Callipepla californica',
            description:
                'Калифорнийский  перепел характеризуется длиной от 23 до 25 см. Самец и самка окрашены одинаково, оперение самок, тем не менее, немного бледнее, у самца дополнительно присутствует чёрный надгортанник и рисунок лица. Верхняя часть тела и голова серо-бурого цвета. Перья хохла с белыми вершинами. Шея и грудь голубовато-серые. На боковых сторонах коричневатого цвета имеются тонкие, белые продольные полосы. Брюхо и подхвостье жёлто-коричневатые с чёрным чешуйчатым рисунком.',
            image: 'https://live.staticflickr.com/65535/48400199321_3d59cd5ac4_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/XEIROMUDEB/XC159657-IAC%202012-09-22%20T09-46-30.mp3',
        },
        {
            id: 3,
            name: 'Белошейная гагара',
            species: 'Gavia pacifica',
            description:
                'В среднем несколько меньше чернозобой гагары, хотя размеры частично перекрываются. Длина крыла 291—302 мм. Взрослые самец и самка летом похожи на чернозобую гагару в летнем наряде, но отличаются светлой, беловатой сверху шеей и затылком. Чёрное пятно на горле и нижней стороне шеи имеет не зелёный или фиолетовый, а пурпурный оттенок. Зимой отличается только по более короткому и более тонкому клюву и более толстой шее.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/PacificLoon24.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/CDTGHVBGZP/XC141729-Pacific%20Loon2013-6-12-1.mp3',
        },
        {
            id: 4,
            name: 'Калита',
            species: 'Psittacus monachus',
            description:
                'Птица семейства попугаевых. Длина тела 27—30 см, крыла 14—15 см; вес 100 г. Окраска оперения зелёная, грудь бледно-зеленовато-серая с поперечными полосами зелёного цвета. Шея с нижней стороны и передняя часть головы серого цвета, крылья тёмно-бурые, маховые перья синие. Подхвостье желтовато-зелёное. Клюв толстый, соломенного цвета и сильно загнутый. Радужка коричневая. Хвост ступенчатой формы, длиннее крыла, ноги короткие. ',
            image: 'https://dibird.com/image_taxon/5_4248_34968753406_22881b1c0b_c',
            audio: 'https://dibird.com/media/xeno/369811.mp3',
        },
        {
            id: 5,
            name: 'Американская выпь',
            species: 'Botaurus lentiginosus',
            description:
                'Американская выпь является средней по размеру цаплей с толстым телом и шеей и короткими ногами. Верхняя часть тела коричневого окраса, с мелкими чёрными пятнами, нижняя — чёрно-белая. Шея белого цвета. От выпи европейской её отличают размер и толщина когтей на ногах.',
            image: 'https://live.staticflickr.com/8266/29079238213_2595b35af1_k.jpg',
            audio:
                'https://www.xeno-canto.org/sounds/uploaded/WOKAPEXFUA/XC419704-2018-06-08%20-%20British%20Columbia%20-%20Prince%20George%20-%20MIXPRE-070%20-%20Giscome%20American%20Bittern.mp3',
        },
        {
            id: 6,
            name: 'Большая голубая цапля',
            species: 'Ardea herodias',
            description:
                'Большая голубая цапля является самой крупной цаплей Северной Америки, её полная длина составляет 97—137 см, а вес 2,1—2,5 кг. Средний размах крыльев — 213 см. Крылья длинные, закруглённые. Клюв длинный, на конце имеет коническую форму, окрашен в светло-жёлтый цвет. Хвост короткий. Ноги длинные, зелёные. Шея также длинная. Оперение в верхней части тела серое, на шее имеются белые, чёрные и ржаво-коричневые полосы. У самцов на затылке имеется густой хохолок чёрных перьев. Также самцы несколько крупнее самок.',
            image: 'https://live.staticflickr.com/65535/48349031122_e43167cfe7_4k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/XEIROMUDEB/XC210695-IAC266%20gbhe.MP3',
        },
    ],
    [
        {
            id: 1,
            name: 'Страус',
            species: 'Struthio camelus',
            description:
                'Африканский страус — самая крупная из современных птиц: высотой до 270 см и массой до 156 кг. Страус имеет плотное телосложение, длинную шею и небольшую уплощённую голову. Клюв прямой и плоский, с роговым «когтем» на надклювье, довольно мягкий. Глаза большие, с густыми ресницами на верхнем веке. Страусы — нелетающие птицы. Для них характерно полное отсутствие киля и слаборазвитая грудная мускулатура; скелет не пневматичен, за исключением бедренных костей. Крылья у страусов недоразвитые; два пальца на них заканчиваются когтями, или шпорами. Задние конечности длинные и сильные, всего с двумя пальцами. Один из пальцев заканчивается подобием рогового копыта — на него птица опирается при беге',
            image: 'https://live.staticflickr.com/8651/29081079126_ea2513599c_h.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/DNKBTPCMSQ/Ostrich%20RV%202-10.mp3',
        },
        {
            id: 2,
            name: 'Шилоклювка',
            species: 'Recurvirostra avosetta',
            description:
                'чёрно-белый крупный кулик с изогнутым вверх клювом из семейства шилоклювковых, распространённый на пологих берегах водоёмов с солёной или солоноватой водой в Евразии и Африке. В глаза в первую очередь бросается длинный тонкий клюв, в вершинной половине сильно изогнутый вверх — эта особенность отличает птицу от родственного и сходного по окрасу ходулочника, у которого клюв прямой и более короткий. Шилоклювка к тому же значительно крупнее — её длина составляет 42—46 см, размах крыльев 67—77 см',
            image: 'http://www.ebirds.ru/images/e/142.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/JYPQCEFKAM/XC564882-200520-210701alfaiate.mp3',
        },
        {
            id: 3,
            name: 'Турач коки',
            species: 'Peliperdix coqui coqui',
            description:
                'Выражен половой диморфизм. У самцов красно-коричневая макушка, над глазами и клювом, а также на подбородке, горле, щеках, затылке и по бокам шеи оперение золотистого цвета. Нижняя часть шеи и затылок покрыты полосами чёрно-белого цвета. Верхняя часть тела имеет отчётливый перепелиный рисунок, нижняя часть светло-жёлтая с чёрными полосами. Перья хвоста ржаво-жёлтые. У самок бурая макушка и светло-жёлтое лицо. Пунктирная полоса чёрно-белого цвета тянется от бровей через виски и заканчивается по бокам шеи. Та же самая полоса проходит от уголков клюва вниз. Горло белое, шея, грудь и верхняя часть тела красно-коричневые, стержень перьев белый. Нижняя сторона бледно-жёлтая с чёрными полосами.',
            image: 'https://live.staticflickr.com/4910/45156531754_b72d60dd4b_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC516148-Peliperdix_coqui_nom-FL%20X%20song%20Polokwane%20GameRes%2030Oct19%205.43am%20LS115231a.mp3',
        },
        {
            id: 4,
            name: 'Сенегальская альциона',
            species: 'Halcyon senegalensis',
            description:
                'Птица семейства зимородковых, обитающая в тропической Африке. Сенегальская альциона длиной 23 см. Спина, хвост и крылья ярко синего цвета. Голова, затылок и нижняя сторона белые, а плечи чёрные. Большой клюв красный сверху и чёрный снизу. Ноги красные. Оба пола выглядят похоже, молодые птицы чуть менее красочны. Призывный крик этой птицы — громкая трель.',
            image:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Woodland_Kingfisher_%28Halcyon_senegalensis%29_South_Africa.jpg/800px-Woodland_Kingfisher_%28Halcyon_senegalensis%29_South_Africa.jpg',
            audio:
                'https://www.xeno-canto.org/sounds/uploaded/XVXHTBZRRW/XC392045-Woodland%20Kingfisher%20S%2020170313%200624%20SZ%20Hlane%20National%20Park%20Hlane%20Camp%20TW%20LS_5.mp3',
        },
        {
            id: 5,
            name: 'Розовый голубь',
            species: 'Nesoenas mayeri',
            description:
                'Редкая птица семейства голубиных. Видовое латинское название дано в честь немецкого физиолога Августа Майер. Единственный современный эндемичный вид голубей острова Маврикий.Розовый голубь достигает длины от 36 до 38 см и весит от 320 до 350 г.  Крылья от тёмно-серого до тёмно-коричневого цвета, первостепенные маховые перья несколько темнее. Веерообразный хвост красно-коричневый. Остальное оперение бледно-розового цвета.',
            image: 'https://live.staticflickr.com/554/19140201239_e32d8420ec_b.jpg',
            audio: 'https://www.xeno-canto.org/463454/download',
        },
        {
            id: 6,
            name: 'Африканский пингвин',
            species: 'Spheniscus demersus',
            description:
                'Пингвины в воде могут развивать скорость до 20 км/ч, нырять глубже 100 м. и задерживать дыхание на 2-3 минуты. В течение кормёжки могут проплывать 70—120 км в океане. Африканский пингвин, сбежавший во время наводнения в Тбилиси 2015 года из местного зоопарка, проплыл 60 км. Питаются в основном мелкой рыбой (мальками сельди, анчоусов, сардин и др.). Основные враги — человек, акулы, чайки (для птенцов), морские котики (как конкурент за добычу и как хищник) и одичавшие кошки (для птенцов и яиц в некоторых колониях).',
            image: 'https://live.staticflickr.com/65535/49204518852_9b69c907a4_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC392704-LS106470%20STONE%20POINT%20African%20Penguin%20calls%20A%20juv%20calls%20A.mp3',
        },
    ],
];

export default data;