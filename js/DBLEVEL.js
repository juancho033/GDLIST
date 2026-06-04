const DB_LEVELS = [
    {
        name: 'Thinking Space II',
        video: 'https://www.youtube.com/watch?v=CELNmHwln_c',
        thumb: 'https://i.ytimg.com/vi/CELNmHwln_c/mqdefault.jpg',
        author: 'CairoX',
        verifier: '[67] Zoink',
        id: '119544028'
    },
    {
        name: 'Flamewall',
        video: 'https://www.youtube.com/watch?v=x4Io4zkWVRw',
        thumb: 'https://i.ytimg.com/vi/x4Io4zkWVRw/mqdefault.jpg',
        author: 'Narwall',
        verifier: '[400] CuatrocientosYT',
        id: '126242564'
    },
    {
        name: 'Amethyst',
        video: 'https://www.youtube.com/watch?v=4lfkzz1VCbA',
        thumb: 'https://i.ytimg.com/vi/4lfkzz1VCbA/mqdefault.jpg',
        author: 'iMist',
        verifier: '[WBT] wPopoff',
        id: '119550490'
    },
    {
        name: 'Tidal Wave',
        video: 'https://www.youtube.com/watch?v=9fsZ014qB3s',
        thumb: 'https://i.ytimg.com/vi/9fsZ014qB3s/mqdefault.jpg',
        author: 'OniLink',
        verifier: '[67] Zoink',
        id: '86407629'
    },
    {
        name: 'ORBIT',
        video: 'https://www.youtube.com/watch?v=QKcv8DkNPd0',
        thumb: 'https://i.ytimg.com/vi/QKcv8DkNPd0/mqdefault.jpg',
        author: 'MindCap',
        verifier: '[67] Zoink',
        id: '133175713'
    },
    {
        name: 'Nullscapes',
        video: 'https://www.youtube.com/watch?v=EztneTPp5CU',
        thumb: 'https://i.ytimg.com/vi/EztneTPp5CU/mqdefault.jpg',
        author: 'Kiba',
        verifier: '[67] Zoink',
        id: '109780665'
    },
    {
        name: 'Quanteuse processing',
        video: 'https://www.youtube.com/watch?v=j5NC0u1Q91Q',
        thumb: 'https://i.ytimg.com/vi/j5NC0u1Q91Q/mqdefault.jpg',
        author: 'Renn241',
        verifier: '[67] Zoink',
        id: '117692518'
    },
    {
        name: 'BOOBAWAMBA',
        video: 'https://www.youtube.com/watch?v=20fYiqLAo_E',
        thumb: 'https://i.ytimg.com/vi/20fYiqLAo_E/mqdefault.jpg',
        author: 'Akunakunn',
        verifier: 'eastshark',
        id: '110816181'
    },
    {
        name: 'Every End',
        video: 'https://www.youtube.com/watch?v=AO--mVVFtKI',
        thumb: 'https://i.ytimg.com/vi/AO--mVVFtKI/mqdefault.jpg',
        author: 'MindCap',
        verifier: '[FOWL] Hqmy',
        id: '116174063'
    },
    {
        name: 'Penumbral',
        video: 'https://www.youtube.com/watch?v=nVHPFf13M-I',
        thumb: 'https://i.ytimg.com/vi/nVHPFf13M-I/mqdefault.jpg',
        author: 'cherryteam',
        verifier: '[UFA] w3rty',
        id: '134942736'
    },
    {
        name: 'Silent clubstep',
        video: 'https://www.youtube.com/watch?v=GR4OMkS3SN8',
        thumb: 'https://i.ytimg.com/vi/GR4OMkS3SN8/mqdefault.jpg',
        author: 'TheRealSailent',
        verifier: '[DL] zoe',
        id: '4125776'
    },
    {
        name: 'Ashley Wave Trials',
        video: 'https://www.youtube.com/watch?v=aTxt76U3e2Q',
        thumb: 'https://i.ytimg.com/vi/aTxt76U3e2Q/mqdefault.jpg',
        author: 'oddmod',
        verifier: '[67] Zoink',
        id: '62912799'
    },
    {
        name: 'andromeda',
        video: 'https://www.youtube.com/watch?v=mk3TDemdkC0',
        thumb: 'https://i.ytimg.com/vi/mk3TDemdkC0/mqdefault.jpg',
        author: 'Insxne97',
        verifier: '[WBT] Taiago',
        id: '114283297'
    },
    {
        name: 'Subsuming Vortex',
        video: 'https://www.youtube.com/watch?v=0eYG1ogJpIQ',
        thumb: 'https://i.ytimg.com/vi/0eYG1ogJpIQ/mqdefault.jpg',
        author: '[TCD] Cursed',
        verifier: '[TCD] Cursed',
        id: '127997391'
    },
    {
        name: 'Anathema',
        video: 'https://www.youtube.com/watch?v=_uKwmjHmySI',
        thumb: 'https://i.ytimg.com/vi/_uKwmjHmySI/mqdefault.jpg',
        author: 'nikroplays',
        verifier: '[IQB7] Whizkid05',
        id: '112313819'
    },
    {
        name: 'Avernus',
        video: 'https://www.youtube.com/watch?v=16Zh8jssanc',
        thumb: 'https://i.ytimg.com/vi/16Zh8jssanc/mqdefault.jpg',
        author: 'PockeWindfish',
        verifier: '[67] Zoink',
        id: '89496627'
    },
    {
        name: 'Acheron',
        video: 'https://www.youtube.com/watch?v=sBKR6aUorzA',
        thumb: 'https://i.ytimg.com/vi/RMRBhZJrgkw/mqdefault.jpg',
        author: 'ryamu',
        verifier: '[67] Zoink',
        id: '73667628'
    },
    {
        name: 'Spectre',
        video: 'https://www.youtube.com/watch?v=MzsSLKJrLSI',
        thumb: 'https://i.ytimg.com/vi/MzsSLKJrLSI/mqdefault.jpg',
        author: 'xander',
        verifier: 'PersonHuman42',
        id: '110815379'
    },
    {
        name: 'Menace',
        video: 'https://www.youtube.com/watch?v=nnkgghxxsEE',
        thumb: 'https://i.ytimg.com/vi/nnkgghxxsEE/mqdefault.jpg',
        author: 'Arraegen',
        verifier: '[IQB7] Whizkid05',
        id: '107805281'
    },
    {
        name: 'Abyss of Darkness',
        video: 'https://www.youtube.com/watch?v=ejJkpqcMMCY',
        thumb: 'https://i.ytimg.com/vi/ejJkpqcMMCY/mqdefault.jpg',
        author: 'Exen',
        verifier: '[TCD] Cursed',
        id: '49896559'
    },
    {
        name: 'Defeated Circles',
        video: 'https://www.youtube.com/watch?v=nU5AQPzd2YA',
        thumb: 'https://i.ytimg.com/vi/nU5AQPzd2YA/mqdefault.jpg',
        author: 'GXQ',
        verifier: '[67] Zoink',
        id: '120012581'
    },
    {
        name: 'Tunnel of Despair',
        video: 'https://www.youtube.com/watch?v=LpS4JREhW98',
        thumb: 'https://i.ytimg.com/vi/LpS4JREhW98/mqdefault.jpg',
        author: 'Exen',
        verifier: '[67] Zoink',
        id: '91351939'
    },
    {
        name: 'Kyouki',
        video: 'https://www.youtube.com/watch?v=KDa5c0CJTHs',
        thumb: 'https://i.ytimg.com/vi/KDa5c0CJTHs/mqdefault.jpg',
        author: '｛出見塩｝',
        verifier: '｛出見塩｝',
        id: '86018142'
    },
    {
        name: 'Based After Based',
        video: 'https://www.youtube.com/watch?v=yQBFyUvB3lY',
        thumb: 'https://i.ytimg.com/vi/yQBFyUvB3lY/mqdefault.jpg',
        author: 'Akunakunn',
        verifier: 'DiamondSplash',
        id: '110534288'
    },
    {
        name: 'Subterminal Point',
        video: 'https://www.youtube.com/watch?v=h2wmRMgACH4',
        thumb: 'https://i.ytimg.com/vi/h2wmRMgACH4/mqdefault.jpg',
        author: 'SyQual',
        verifier: 'PoCle',
        id: '113599729'
    },
    {
        name: 'Slaughterhouse',
        video: 'https://www.youtube.com/watch?v=kpcF1-QAHQc',
        thumb: 'https://i.ytimg.com/vi/X2uKSNUJPWI/mqdefault.jpg',
        author: 'icedcave',
        verifier: '[TCD] Doggie',
        id: '27690100'
    },
    {
        name: 'KOCMOC',
        video: 'https://www.youtube.com/watch?v=2CxE-UWCIG4',
        thumb: 'https://i.ytimg.com/vi/2CxE-UWCIG4/mqdefault.jpg',
        author: 'cherryteam',
        verifier: '[67] Zoink',
        id: '87665224'
    },
    {
        name: 'The Lightning Rod',
        video: 'https://www.youtube.com/watch?v=nQDTi077O6M',
        thumb: 'https://i.ytimg.com/vi/nQDTi077O6M/mqdefault.jpg',
        author: 'Lavatrex',
        verifier: 'Lavatrex',
        id: '93917076'
    },
    {
        name: 'CHIL',
        video: 'https://www.youtube.com/watch?v=DROMiCc2ZRM',
        thumb: 'https://i.ytimg.com/vi/DROMiCc2ZRM/mqdefault.jpg',
        author: 'McCoco',
        verifier: 'McCoco',
        id: '114281093'
    },
    {
        name: 'zorin',
        video: 'https://www.youtube.com/watch?v=U19vmpenb9g',
        thumb: 'https://i.ytimg.com/vi/U19vmpenb9g/mqdefault.jpg',
        author: 'SnowEye',
        verifier: '[미소노 미카] 구아이',
        id: '134541844'
    },
    {
        name: 'Sakupen Circles',
        video: 'https://www.youtube.com/watch?v=ofG2mJi9kEA',
        thumb: 'https://i.ytimg.com/vi/ofG2mJi9kEA/mqdefault.jpg',
        author: '[TCD] Diamond',
        verifier: '[TCD] Diamond',
        id: '76962930'
    },
    {
        name: 'Deimos',
        video: 'https://www.youtube.com/watch?v=b2yHaIk5zio',
        thumb: 'https://i.ytimg.com/vi/421xfxmjSn0/mqdefault.jpg',
        author: 'ItsHybrid',
        verifier: '[TCD] Doggie',
        id: '93091893'
    },
    {
        name: 'Eyes in the Water',
        video: 'https://www.youtube.com/watch?v=yvLwiOy3KEA',
        thumb: 'https://i.ytimg.com/vi/yvLwiOy3KEA/mqdefault.jpg',
        author: 'hawkyre',
        verifier: '[DL] LordVadercraft',
        id: '95851008'
    },
    {
        name: 'Voltage',
        video: 'https://www.youtube.com/watch?v=wBRvBN9tmlc',
        thumb: 'https://i.ytimg.com/vi/wBRvBN9tmlc/mqdefault.jpg',
        author: 'ThePurgatory',
        verifier: '[OG B] maybee',
        id: '131599104'
    },
    {
        name: 'KOSETSU',
        video: 'https://www.youtube.com/watch?v=hZ8vFX8z_BU',
        thumb: 'https://i.ytimg.com/vi/hZ8vFX8z_BU/mqdefault.jpg',
        author: 'fwe',
        verifier: '[WBT] Taiago',
        id: '109439644'
    },
    {
        name: 'Through The Gates',
        video: 'https://www.youtube.com/watch?v=4yHA6jux5UI',
        thumb: 'https://i.ytimg.com/vi/4yHA6jux5UI/mqdefault.jpg',
        author: 'TeamTheDashers',
        verifier: '[67] Zoink',
        id: '49072489'
    },
    {
        name: 'Firework',
        video: 'https://www.youtube.com/watch?v=QBe5x2o9v2w',
        thumb: 'https://i.ytimg.com/vi/QBe5x2o9v2w/mqdefault.jpg',
        author: '[TCD] Trick',
        verifier: '[TCD] Trick',
        id: '75206202'
    },
    {
        name: 'Silentlocked',
        video: 'https://www.youtube.com/watch?v=O-IQeUdEGvI',
        thumb: 'https://i.ytimg.com/vi/O-IQeUdEGvI/mqdefault.jpg',
        author: 'GDSkele',
        verifier: 'TFIBB',
        id: '113959291'
    },
    {
        name: 'NOMAD',
        video: 'https://www.youtube.com/watch?v=H2TkHbEX__A',
        thumb: 'https://i.ytimg.com/vi/H2TkHbEX__A/mqdefault.jpg',
        author: 'ReeseVT',
        verifier: 'Laniakea',
        id: '115077305'
    },
    {
        name: 'poocubed',
        video: 'https://www.youtube.com/watch?v=fzL31vai1ms',
        thumb: 'https://i.ytimg.com/vi/fzL31vai1ms/mqdefault.jpg',
        author: 'Liisp',
        verifier: 'Kyasshukodo',
        id: '85133223'
    },
    {
        name: 'Snowbound',
        video: 'https://www.youtube.com/watch?v=cjHwgbtAkXU',
        thumb: 'https://i.ytimg.com/vi/cjHwgbtAkXU/mqdefault.jpg',
        author: '[JUICE] Amplitron',
        verifier: '[JUICE] Amplitron',
        id: '120289520'
    },
    {
        name: 'The Salt Factory',
        video: 'https://www.youtube.com/watch?v=lQ7M-Sgov24',
        thumb: 'https://i.ytimg.com/vi/lQ7M-Sgov24/mqdefault.jpg',
        author: '[UFA] Nickname09',
        verifier: '[UFA] Nickname09',
        id: '113045735'
    },
    {
        name: 'CONVULSION',
        video: 'https://www.youtube.com/watch?v=qeRKuyU3eGI',
        thumb: 'https://i.ytimg.com/vi/qeRKuyU3eGI/mqdefault.jpg',
        author: 'stellar',
        verifier: '[IQB7] Whizkid05',
        id: '113322063'
    },
    {
        name: 'BEING HOME',
        video: 'https://www.youtube.com/watch?v=kt7FnUzK8CY',
        thumb: 'https://i.ytimg.com/vi/kt7FnUzK8CY/mqdefault.jpg',
        author: 'Turtl123',
        verifier: '[FC] goobs',
        id: '130327668'
    },
    {
        name: 'Calibrate',
        video: 'https://www.youtube.com/watch?v=6WYnZryX_mg',
        thumb: 'https://i.ytimg.com/vi/6WYnZryX_mg/mqdefault.jpg',
        author: '[SARK] Bamvie',
        verifier: '[DLNW] Blebae',
        id: '136981369'
    },
    {
        name: 'MINUSdry',
        video: 'https://www.youtube.com/watch?v=YvA8ehhzz0Q',
        thumb: 'https://i.ytimg.com/vi/YvA8ehhzz0Q/mqdefault.jpg',
        author: 'CDMusic',
        verifier: 'Varium',
        id: '89414220'
    },
    {
        name: 'Saul Goodman',
        video: 'https://www.youtube.com/watch?v=hjs5PjUaw9k',
        thumb: 'https://i.ytimg.com/vi/hjs5PjUaw9k/mqdefault.jpg',
        author: 'Renn241',
        verifier: 'bloom',
        id: '90477539'
    },
    {
        name: 'Apocalyptic Trilogy',
        video: 'https://www.youtube.com/watch?v=RUBbpsTR5eU',
        thumb: 'https://i.ytimg.com/vi/RUBbpsTR5eU/mqdefault.jpg',
        author: 'APTeamOfficial',
        verifier: 'Polterghast',
        id: '113443235'
    },
    {
        name: 'Sevvend Clubstep',
        video: 'https://www.youtube.com/watch?v=TvA8EJTJFCc',
        thumb: 'https://i.ytimg.com/vi/TvA8EJTJFCc/mqdefault.jpg',
        author: 'cherryteam',
        verifier: '[UFA] Vorten',
        id: '120255728'
    },
    {
        name: 'The Hallucination',
        video: 'https://www.youtube.com/watch?v=tYbXsNkO9HE',
        thumb: 'https://i.ytimg.com/vi/tYbXsNkO9HE/mqdefault.jpg',
        author: 'SyQual',
        verifier: 'VoTcHi',
        id: '81139702'
    },
    {
        name: 'COMBUSTION',
        video: 'https://www.youtube.com/watch?v=3cTR4XUcA28',
        thumb: 'https://i.ytimg.com/vi/3cTR4XUcA28/mqdefault.jpg',
        author: '[SKWAD] Cersia',
        verifier: '[SKWAD] Slithium',
        id: '94359172'
    },
    {
        name: 'Deadlier Clubstep',
        video: 'https://www.youtube.com/watch?v=eRhgaF0r5Q0',
        thumb: 'https://i.ytimg.com/vi/eRhgaF0r5Q0/mqdefault.jpg',
        author: 'HeroZombie80',
        verifier: 'Jenath',
        id: '96314787'
    },
    {
        name: 'Stellar Night',
        video: 'https://www.youtube.com/watch?v=XpBY-eMYZTE',
        thumb: 'https://i.ytimg.com/vi/XpBY-eMYZTE/mqdefault.jpg',
        author: 'icedcave',
        verifier: 'Tuggy',
        id: '83244159'
    },
    {
        name: 'Edge of Destiny',
        video: 'https://www.youtube.com/watch?v=rUphe3H59yU',
        thumb: 'https://i.ytimg.com/vi/rUphe3H59yU/mqdefault.jpg',
        author: 'CDMusic',
        verifier: 'Polterghast',
        id: '89187968'
    },
    {
        name: 'Solar Flare',
        video: 'https://www.youtube.com/watch?v=eHQNgty8ypY',
        thumb: 'https://i.ytimg.com/vi/eHQNgty8ypY/mqdefault.jpg',
        author: 'Linear',
        verifier: '[1319] swiborg',
        id: '90390075'
    },
    {
        name: 'The Catacombs',
        video: 'https://www.youtube.com/watch?v=T9-75lfKVQg',
        thumb: 'https://i.ytimg.com/vi/T9-75lfKVQg/mqdefault.jpg',
        author: '[SKWAD] Cersia',
        verifier: '[SKWAD] Slithium',
        id: '104232191'
    },
    {
        name: 'LIMBO',
        video: 'https://www.youtube.com/watch?v=kXYMbaMVOZg',
        thumb: 'https://i.ytimg.com/vi/kXYMbaMVOZg/mqdefault.jpg',
        author: 'MindCap',
        verifier: '[1319] BUNNYGRAM',
        id: '86084399'
    },
    {
        name: 'Gaggatrondra',
        video: 'https://www.youtube.com/watch?v=A4G41vw6Cf0',
        thumb: 'https://i.ytimg.com/vi/A4G41vw6Cf0/mqdefault.jpg',
        author: 'JCMoon',
        verifier: 'Zeronium',
        id: '114990369'
    },
    {
        name: 'Belladonna',
        video: 'https://www.youtube.com/watch?v=saHSgoU1JQQ',
        thumb: 'https://i.ytimg.com/vi/saHSgoU1JQQ/mqdefault.jpg',
        author: 'cherryteam',
        verifier: '[PRIME] exsii',
        id: '94969889'
    },
    {
        name: 'Codependence',
        video: 'https://www.youtube.com/watch?v=IKGk41hSnDo',
        thumb: 'https://i.ytimg.com/vi/IKGk41hSnDo/mqdefault.jpg',
        author: 'TCTeam',
        verifier: '[IH82P] Pukklez',
        id: '62556400'
    },
    {
        name: 'Collapse',
        video: 'https://www.youtube.com/watch?v=RCFpXyf6bn0',
        thumb: 'https://i.ytimg.com/vi/RCFpXyf6bn0/mqdefault.jpg',
        author: '[COMET] Nexel',
        verifier: '[COMET] Nexel',
        id: '113256247'
    },
    {
        name: 'Mayhem',
        video: 'https://www.youtube.com/watch?v=U6e6DD32noM',
        thumb: 'https://i.ytimg.com/vi/U6e6DD32noM/mqdefault.jpg',
        author: '[DL] LordVadercraft',
        verifier: '[DL] LordVadercraft',
        id: '82544060'
    },
    {
        name: 'CHROMACAVE',
        video: 'https://www.youtube.com/watch?v=tfpsMZI6z-o',
        thumb: 'https://i.ytimg.com/vi/tfpsMZI6z-o/mqdefault.jpg',
        author: 'HappyMoby',
        verifier: '[FOWL] geodom',
        id: '131497860'
    },
    {
        name: 'The Plunge',
        video: 'https://www.youtube.com/watch?v=8gW1-_u1K0Y',
        thumb: 'https://i.ytimg.com/vi/8gW1-_u1K0Y/mqdefault.jpg',
        author: 'Dolabill',
        verifier: 'Gokill',
        id: '113220284'
    },
    {
        name: 'Fracture',
        video: 'https://www.youtube.com/watch?v=R_-chk3SRFI',
        thumb: 'https://i.ytimg.com/vi/R_-chk3SRFI/mqdefault.jpg',
        author: 'Arrow',
        verifier: 'Dezstro',
        id: '99703915'
    },
    {
        name: 'walter white',
        video: 'https://www.youtube.com/watch?v=KzK62PkWOJ0',
        thumb: 'https://i.ytimg.com/vi/KzK62PkWOJ0/mqdefault.jpg',
        author: 'Renn241',
        verifier: '[OG B] Laysah',
        id: '81011195'
    },
    {
        name: 'Infinite Chaos',
        video: 'https://www.youtube.com/watch?v=wOMVERxU5IA',
        thumb: 'https://i.ytimg.com/vi/wOMVERxU5IA/mqdefault.jpg',
        author: 'CairoX',
        verifier: 'Victurkey',
        id: '119689515'
    },
    {
        name: 'BRITNEY NO SCLEARS',
        video: 'https://www.youtube.com/watch?v=ff_mQSXwjhU',
        thumb: 'https://i.ytimg.com/vi/ff_mQSXwjhU/mqdefault.jpg',
        author: 'wabas',
        verifier: '[TMG] Scotchtape',
        id: '125317359'
    },
    {
        name: 'Operation Evolution',
        video: 'https://www.youtube.com/watch?v=WsVF-ayipvY',
        thumb: 'https://i.ytimg.com/vi/WsVF-ayipvY/mqdefault.jpg',
        author: 'Halzion',
        verifier: 'cobrablitz',
        id: '114999625'
    },
    {
        name: 'Damascus',
        video: 'https://www.youtube.com/watch?v=MWQyCUGt76Y',
        thumb: 'https://i.ytimg.com/vi/MWQyCUGt76Y/mqdefault.jpg',
        author: 'Dzeser',
        verifier: 'Timo',
        id: '93339534'
    },
    {
        name: 'Decks Dark',
        video: 'https://www.youtube.com/watch?v=l52ApE4HWkY',
        thumb: 'https://i.ytimg.com/vi/l52ApE4HWkY/mqdefault.jpg',
        author: '[SKG] Madison Yuko',
        verifier: '[IQB7] Whizkid05',
        id: '95719795'
    },
    {
        name: 'SARYYX NEVER CLEAR',
        video: 'https://www.youtube.com/watch?v=rRlyvmjcz_4',
        thumb: 'https://i.ytimg.com/vi/rRlyvmjcz_4/mqdefault.jpg',
        author: 'artos',
        verifier: 'skzyl',
        id: '95998005'
    },
    {
        name: 'The Yangire',
        video: 'https://www.youtube.com/watch?v=V3FjIorIfWg',
        thumb: 'https://i.ytimg.com/vi/V3FjIorIfWg/mqdefault.jpg',
        author: 'Dorami',
        verifier: 'Dorami',
        id: '110500920'
    },
    {
        name: 'Climax',
        video: 'https://www.youtube.com/watch?v=E4ppq2WeAAs',
        thumb: 'https://i.ytimg.com/vi/E4ppq2WeAAs/mqdefault.jpg',
        author: 'HushLC',
        verifier: 'Wain',
        id: '95049815'
    },
    {
        name: 'ORDINARY',
        video: 'https://www.youtube.com/watch?v=4QiHP3jpGnk',
        thumb: 'https://i.ytimg.com/vi/4QiHP3jpGnk/mqdefault.jpg',
        author: 'vit12',
        verifier: '[WBT] wPopoff',
        id: '105593215'
    },
];

