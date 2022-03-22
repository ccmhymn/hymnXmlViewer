var hymnArrays = [{ title: '1장 만복의 근원 하나님', category: '송영', number: '001'},
{ title: '2장 찬양 성부 성자 성령', category: '송영', number: '002'},
{ title: '3장 성부 성자와 성령', category: '송영', number: '003'},
{ title: '4장 성부 성자와 성령', category: '송영', number: '004'},
{ title: '5장 이 천지간 만물들아', category: '송영', number: '005'},
{ title: '6장 목소리 높여서', category: '송영', number: '006'},
{ title: '7장 성부 성자 성령', category: '송영', number: '007'},
{ title: '8장 거룩 거룩 거룩', category: '경배', number: '008'},
{ title: '9장 하늘에 가득 찬 영광의 하나님', category: '경배', number: '009'},
{ title: '10장 전능왕 오셔서', category: '경배', number: '010'},
{ title: '11장 홀로 한 분 하나님께', category: '경배', number: '011'},
{ title: '12장 다 함께 주를 경배하세', category: '경배', number: '012'},
{ title: '13장 영원한 하늘나라', category: '경배', number: '013'},
{ title: '14장 주 우리 하나님', category: '경배', number: '014'},
{ title: '15장 하나님의 크신 사랑', category: '경배', number: '015'},
{ title: '16장 은혜로신 하나님 우리 주 하나님', category: '경배', number: '016'},
{ title: '17장 사랑의 하나님', category: '경배', number: '017'},
{ title: '18장 성도들아 찬양하자', category: '찬양', number: '018'},
{ title: '19장 찬송하는 소리 있어', category: '찬양', number: '019'},
{ title: '20장 큰 영광 중에 계신 주', category: '찬양', number: '020'},
{ title: '21장 다 찬양하여라', category: '찬양', number: '021'},
{ title: '22장 만유의 주 앞에', category: '찬양', number: '022'},
{ title: '23장 만 입이 내게 있으면', category: '찬양', number: '023'},
{ title: '24장 왕 되신 주', category: '찬양', number: '024'},
{ title: '25장 면류관 벗어서', category: '찬양', number: '025'},
{ title: '26장 구세주를 아는 이들', category: '찬양', number: '026'},
{ title: '27장 빛나고 높은 보좌와', category: '찬양', number: '027'},
{ title: '28장 복의 근원 강림 하사', category: '찬양', number: '028'},
{ title: '29장 성도여 다 함께', category: '찬양', number: '029'},
{ title: '30장 전능하고 놀라우신', category: '찬양', number: '030'},
{ title: '31장 찬양하라 복되신 구세주 예수', category: '찬양', number: '031'},
{ title: '32장 만유의 주재', category: '찬양', number: '032'},
{ title: '33장 영광스런 주를 조라', category: '찬양', number: '033'},
{ title: '34장 참 놀랍도다 주 크신 이름', category: '찬양', number: '034'},
{ title: '35장 큰 영화로신 주', category: '찬양', number: '035'},
{ title: '36장 주 예수 이름 높이어', category: '찬양', number: '036'},
{ title: '37장 주 예수 이름 높이어', category: '찬양', number: '037'},
{ title: '38장 예수 우리 왕이여', category: '찬양', number: '038'},
{ title: '39장 주 은혜를 받으려', category: '찬양', number: '039'},
{ title: '40장 찬송으로 보답할 수 없는', category: '찬양', number: '040'},
{ title: '41장 내 영혼아 주 찬양하여라', category: '찬양', number: '041'},
{ title: '42장 거룩한 주님께', category: '주일', number: '042'},
{ title: '43장 즐겁게 안식할 날', category: '주일', number: '043'},
{ title: '44장 지난 이레 동안에', category: '주일', number: '044'},
{ title: '45장 거룩한 주의 날', category: '주일', number: '045'},
{ title: '46장 이 날은 주님 정하신', category: '주일', number: '046'},
{ title: '47장 하늘이 푸르고', category: '주일', number: '047'},
{ title: '48장 거룩하신 주 하나님', category: '주일', number: '048'},
{ title: '49장 하나님이 언약하신 그대로', category: '봉헌', number: '049'},
{ title: '50장 내게 있는 모든 것을', category: '봉헌', number: '050'},
{ title: '51장 주님 주신 거룩한 날', category: '봉헌', number: '051'},
{ title: '52장 거룩하신 나의 하나님', category: '봉헌', number: '052'},
{ title: '53장 성전을 떠나가기 전', category: '예배마침', number: '053'},
{ title: '54장 주여 복을 구하오니', category: '예배마침', number: '054'},
{ title: '55장 주 이름으로 모였던', category: '예배마침', number: '055'},
{ title: '56장 우리의 주여', category: '예배마침', number: '056'},
{ title: '57장 오늘 주신 말씀에', category: '예배마침', number: '057'},
{ title: '58장 지난밤에 보호하사', category: '아침과저녁', number: '058'},
{ title: '59장 하나님 아버지 어둔 밤이 지나', category: '아침과저녁', number: '059'},
{ title: '60장 영혼의 햇빛 예수님', category: '아침과저녁', number: '060'},
{ title: '61장 우리가 기다리던', category: '아침과저녁', number: '061'},
{ title: '62장 고요히 머리 숙여', category: '아침과저녁', number: '062'},
{ title: '63장 주가 세상을 다스리니', category: '창조주', number: '063'},
{ title: '64장 기뻐하며 경배하세', category: '창조주', number: '064'},
{ title: '65장 내 영혼아 찬양하라', category: '창조주', number: '065'},
{ title: '66장 다 감사드리세', category: '창조주', number: '066'},
{ title: '67장 영광의 왕께 다 경배하며', category: '창조주', number: '067'},
{ title: '68장 오 하나님 우리의 창조주시니', category: '창조주', number: '068'},
{ title: '69장 온 천하 만물 우러러', category: '창조주', number: '069'},
{ title: '70장 피난처 있으니', category: '창조주', number: '070'},
{ title: '71장 예부터 도움 되시고', category: '창조주', number: '071'},
{ title: '72장 만왕의 왕 앞에 나오라', category: '창조주', number: '072'},
{ title: '73장 내 눈을 들어 두루 살피니', category: '창조주', number: '073'},
{ title: '74장 오 만세 반석이신', category: '창조주', number: '074'},
{ title: '75장 주여 우리 무리를', category: '창조주', number: '075'},
{ title: '76장 창조의 주 아버지께', category: '창조주', number: '076'},
{ title: '77장 거룩하신 하나님', category: '창조주', number: '077'},
{ title: '78장 저 높고 푸른 하늘과', category: '섭리', number: '078'},
{ title: '79장 주 하나님 지으신 모든 세계', category: '섭리', number: '079'},
{ title: '80장 천지에 있는 이름 중', category: '예수그리스도', number: '080'},
{ title: '81장 주는 귀한 보배', category: '예수그리스도', number: '081'},
{ title: '82장 성부의 어린 양이', category: '예수그리스도', number: '082'},
{ title: '83장 나의 맘에 근심 구름', category: '예수그리스도', number: '083'},
{ title: '84장 온 세상이 캄캄하여서', category: '예수그리스도', number: '084'},
{ title: '85장 구주를 생각만 해도', category: '예수그리스도', number: '085'},
{ title: '86장 내가 늘 의지하는 예수', category: '예수그리스도', number: '086'},
{ title: '87장 내 주님 입으신 그 옷은', category: '예수그리스도', number: '087'},
{ title: '88장 내 진정 사모하는', category: '예수그리스도', number: '088'},
{ title: '89장 샤론의 꽃 예수', category: '예수그리스도', number: '089'},
{ title: '90장 주 예수 내가 알기 전', category: '예수그리스도', number: '090'},
{ title: '91장 슬픈 마음 있는 사람', category: '예수그리스도', number: '091'},
{ title: '92장 위에 계신 나의 친구', category: '예수그리스도', number: '092'},
{ title: '93장 예수는 나의 힘이요', category: '예수그리스도', number: '093'},
{ title: '94장 주 예수보다 더 귀한 것은 없네', category: '예수그리스도', number: '094'},
{ title: '95장 나의 기쁨 나의 소망되시며', category: '예수그리스도', number: '095'},
{ title: '96장 예수님은 누구신가', category: '예수그리스도', number: '096'},
{ title: '97장 정혼한 처녀에게', category: '구주강림', number: '097'},
{ title: '98장 예수님 오소서', category: '구주강림', number: '098'},
{ title: '99장 주님 앞에 떨며 서서', category: '구주강림', number: '099'},
{ title: '100장 미리암과 같은 여인들이', category: '구주강림', number: '100'},
{ title: '101장 이새의 뿌리에서', category: '구주강림', number: '101'},
{ title: '102장 영원한 문아 열려라', category: '구주강림', number: '102'},
{ title: '103장 우리 주님 예수께', category: '구주강림', number: '103'},
{ title: '104장 곧 오소서 임마누엘', category: '구주강림', number: '104'},
{ title: '105장 오랫동안 기다리던', category: '강림', number: '105'},
{ title: '106장 아기 예수 나셨네', category: '성탄', number: '106'},
{ title: '107장 거룩한 밤 복된 이 밤', category: '성탄', number: '107'},
{ title: '108장 그 어린 주 예수', category: '성탄', number: '108'},
{ title: '109장 고요한 밤 거룩한 밤', category: '성탄', number: '109'},
{ title: '110장 고요하고 거룩한 밤', category: '성탄', number: '110'},
{ title: '111장 귀중한 보배합을', category: '성탄', number: '111'},
{ title: '112장 그 맑고 환한 밤중에', category: '성탄', number: '112'},
{ title: '113장 그 아기 잠들었네', category: '성탄', number: '113'},
{ title: '114장 그 어린 주 예수', category: '성탄', number: '114'},
{ title: '115장 기쁘다 구주오셨네', category: '성탄', number: '115'},
{ title: '116장 동방에서 박사들', category: '성탄', number: '116'},
{ title: '117장 만백성 기뻐하여라', category: '성탄', number: '117'},
{ title: '118장 영광나라 천사들아', category: '성탄', number: '118'},
{ title: '119장 옛날 임금 다윗 성에', category: '성탄', number: '119'},
{ title: '120장 오 베들레헴 작은 골', category: '성탄', number: '120'},
{ title: '121장 우리 구주 나신 날', category: '성탄', number: '121'},
{ title: '122장 참 반가운 성도여', category: '성탄', number: '122'},
{ title: '123장 저 들 밖에 한밤중에', category: '성탄', number: '123'},
{ title: '124장 양 지키는 목자여', category: '성탄', number: '124'},
{ title: '125장 천사들의 노래가', category: '성탄', number: '125'},
{ title: '126장 천사 찬송하기를', category: '성탄', number: '126'},
{ title: '127장 그 고요한 쓸쓸한', category: '성탄', number: '127'},
{ title: '128장 거룩하신 우리 주님', category: '성탄', number: '128'},
{ title: '129장 마리아는 아기를', category: '성탄', number: '129'},
{ title: '130장 찬란한 주의 영광은', category: '주현', number: '130'},
{ title: '131장 다 나와 찬송 부르세', category: '주현', number: '131'},
{ title: '132장 주의 영광 빛나니', category: '주현', number: '132'},
{ title: '133장 하나님의 말씀으로', category: '주현', number: '133'},
{ title: '134장 나 어느 날 꿈속을 헤메며', category: '생애', number: '134'},
{ title: '135장 어저께나 오늘이나', category: '생애', number: '135'},
{ title: '136장 가나의 혼인 잔치', category: '생애', number: '136'},
{ title: '137장 하나님의 아들이', category: '생애', number: '137'},
{ title: '138장 햇빛을 받는 곳마다', category: '생애', number: '138'},
{ title: '139장 오 영원한 내 주 예수', category: '종려주일', number: '139'},
{ title: '140장 왕되신 우리 주께', category: '종려주일', number: '140'},
{ title: '141장 호산나 호산나', category: '종려주일', number: '141'},
{ title: '142장 시온에 오시는 주', category: '종려주일', number: '142'},
{ title: '143장 웬말인가 날 위하여', category: '고난', number: '143'},
{ title: '144장 예수 나를 위하여', category: '고난', number: '144'},
{ title: '145장 오 거룩하신 주님', category: '고난', number: '145'},
{ title: '146장 저 멀리 푸른 언덕에', category: '고난', number: '146'},
{ title: '147장 거기 너 있었는가', category: '고난', number: '147'},
{ title: '148장 영화로운 주 예수의', category: '고난', number: '148'},
{ title: '149장 주 달려 죽은 십자가', category: '고난', number: '149'},
{ title: '150장 갈보리 산 위에', category: '고난', number: '150'},
{ title: '151장 만왕의 왕 내 주께서', category: '고난', number: '151'},
{ title: '152장 귀하신 예수', category: '고난', number: '152'},
{ title: '153장 가시 면류관', category: '고난', number: '153'},
{ title: '154장 생명의 주여 면류관', category: '고난', number: '154'},
{ title: '155장 십자가 지고', category: '고난', number: '155'},
{ title: '156장 머리에 가시관 붉은 피 흐르는', category: '고난', number: '156'},
{ title: '157장 겟세마네 동산에서 최후 기도', category: '고난', number: '157'},
{ title: '158장 서쪽 하늘 붉은 노을', category: '고난', number: '158'},
{ title: '159장 기뻐 찬송하세', category: '부활', number: '159'},
{ title: '160장 무덤에 머물러', category: '부활', number: '160'},
{ title: '161장 할렐루야 우리 예수', category: '부활', number: '161'},
{ title: '162장 부활하신 구세주', category: '부활', number: '162'},
{ title: '163장 할렐루야 할렐루야', category: '부활', number: '163'},
{ title: '164장 예수 부활했으니', category: '부활', number: '164'},
{ title: '165장 주님께 영광', category: '부활', number: '165'},
{ title: '166장 싸움은 모두 끝나고', category: '부활', number: '166'},
{ title: '167장 즐겁도다 이 날', category: '부활', number: '167'},
{ title: '168장 하늘에 찬송이 들리던 그 날', category: '부활', number: '168'},
{ title: '169장 사망의 권세가', category: '부활', number: '169'},
{ title: '170장 내 주님은 살아 계셔', category: '부활', number: '170'},
{ title: '171장 하나님의 독생자', category: '부활', number: '171'},
{ title: '172장 사망을 이긴 주', category: '부활', number: '172'},
{ title: '173장 다 함께 찬송 부르자', category: '부활', number: '173'},
{ title: '174장 대속하신 구주께서', category: '재림', number: '174'},
{ title: '175장 신랑되신 예수께서', category: '재림', number: '175'},
{ title: '176장 주 어느 때 다시 오실는지', category: '재림', number: '176'},
{ title: '177장 오랫동안 고대하던', category: '재림', number: '177'},
{ title: '178장 주 예수 믿는 자여', category: '재림', number: '178'},
{ title: '179장 주 예수의 강림이', category: '재림', number: '179'},
{ title: '180장 하나님의 나팔 소리', category: '재림', number: '180'},
{ title: '181장 부활 승천하신 주께서', category: '재림', number: '181'},
{ title: '182장 강물같이 흐르는 기쁨', category: '성령강림', number: '182'},
{ title: '183장 빈 들에 마른 풀같이', category: '성령강림', number: '183'},
{ title: '184장 불길같은 주 성령', category: '성령강림', number: '184'},
{ title: '185장 이 기쁜 소식을', category: '성령강림', number: '185'},
{ title: '186장 영화로신 주 성령', category: '성령강림', number: '186'},
{ title: '187장 비둘기같이 온유한', category: '성령강림', number: '187'},
{ title: '188장 무한하신 주 성령', category: '성령강림', number: '188'},
{ title: '189장 진실하신 주 성령', category: '성령강림', number: '189'},
{ title: '190장 성령이여 강림하사', category: '성령강림', number: '190'},
{ title: '191장 내가 매일 기쁘게', category: '성령강림', number: '191'},
{ title: '192장 임하소서 임하소서', category: '성령강림', number: '192'},
{ title: '193장 성령의 봄바람 불어오니', category: '성령강림', number: '193'},
{ title: '194장 저 하늘 거룩하신 주여', category: '성령강림', number: '194'},
{ title: '195장 성령이여 우리 찬송 부를 때', category: '성령강림', number: '195'},
{ title: '196장 성령의 은사를', category: '은사', number: '196'},
{ title: '197장 은혜가 풍성한 하나님은', category: '은사', number: '197'},
{ title: '198장 주 예수 해변서', category: '성경', number: '198'},
{ title: '199장 나의 사랑하는 책', category: '성경', number: '199'},
{ title: '200장 달고 오묘한 그 말씀', category: '성경', number: '200'},
{ title: '201장 참 사람 되신 말씀', category: '성경', number: '201'},
{ title: '202장 하나님 아버지 주신 책은', category: '성경', number: '202'},
{ title: '203장 하나님의 말씀은', category: '성경', number: '203'},
{ title: '204장 주의 말씀 듣고서', category: '성경', number: '204'},
{ title: '205장 주 예수 크신 사랑', category: '성경', number: '205'},
{ title: '206장 주님의 귀한 말씀은', category: '성경', number: '206'},
{ title: '207장 귀하신 주님 계신 곳', category: '하나님나라', number: '207'},
{ title: '208장 내 주의 나라와', category: '하나님나라', number: '208'},
{ title: '209장 이 세상 풍파 심하고', category: '하나님나라', number: '209'},
{ title: '210장 시온성과 같은 교회', category: '하나님나라', number: '210'},
{ title: '211장 값비싼 향유를 주께 드린', category: '헌신과봉사', number: '211'},
{ title: '212장 겸손히 주를 섬길 때', category: '헌신과봉사', number: '212'},
{ title: '213장 나의 생명 드리니', category: '헌신과봉사', number: '213'},
{ title: '214장 나 주의 도움 받고자', category: '헌신과봉사', number: '214'},
{ title: '215장 내 죄 속해 주신 주께', category: '헌신과봉사', number: '215'},
{ title: '216장 성자의 귀한 몸', category: '헌신과봉사', number: '216'},
{ title: '217장 하나님이 말씀 하시기를', category: '헌신과봉사', number: '217'},
{ title: '218장 네 맘과 정성을 다하여서', category: '헌신과봉사', number: '218'},
{ title: '219장 주 하나님의 사랑은', category: '성도의교제', number: '219'},
{ title: '220장 사랑하는 주님 앞에', category: '성도의교제', number: '220'},
{ title: '221장 주 믿는 형제들', category: '성도의교제', number: '221'},
{ title: '222장 우리 다시 만날 때까지', category: '성도의교제', number: '222'},
{ title: '223장 하나님은 우리들의', category: '성도의교제', number: '223'},
{ title: '224장 정한 물로 우리 죄를', category: '세례침례', number: '224'},
{ title: '225장 실로암 샘물가에 핀', category: '세례침례', number: '225'},
{ title: '226장 성령으로 세례 받아', category: '세례침례', number: '226'},
{ title: '227장 주 앞에 성찬받기 위하여', category: '성찬', number: '227'},
{ title: '228장 오 나의 주님 친히 뵈오니', category: '성찬', number: '228'},
{ title: '229장 아무 흠도 없고', category: '성찬', number: '229'},
{ title: '230장 우리의 참되신 구주시니', category: '성찬', number: '230'},
{ title: '231장 우리 다 같이 무릎 꿇고서', category: '성찬', number: '231'},
{ title: '232장 유월절 때가 이르러', category: '성찬', number: '232'},
{ title: '233장 자비로 그 몸을 찢기시고', category: '성찬', number: '233'},
{ title: '234장 구주 예수 그리스도', category: '천국', number: '234'},
{ title: '235장 보아라 즐거운 우리 집', category: '천국', number: '235'},
{ title: '236장 우리 모든 수고 끝나', category: '천국', number: '236'},
{ title: '237장 저 건너편 강 언덕에', category: '천국', number: '237'},
{ title: '238장 해 지는 저편', category: '천국', number: '238'},
{ title: '239장 저 뵈는 본향 집', category: '천국', number: '239'},
{ title: '240장 주가 맡긴 모든 역사', category: '천국', number: '240'},
{ title: '241장 아름다운 본향', category: '천국', number: '241'},
{ title: '242장 황무지가 장미꽃같이', category: '천국', number: '242'},
{ title: '243장 저 요단강 건너편에', category: '천국', number: '243'},
{ title: '244장 구원 받은 천국의 성도들', category: '천국', number: '244'},
{ title: '245장 저 좋은 낙원 이르니', category: '천국', number: '245'},
{ title: '246장 나 가나안 땅 귀한 성에', category: '천국', number: '246'},
{ title: '247장 보아라 저 하늘에', category: '천국', number: '247'},
{ title: '248장 언약의 주 하나님', category: '천국', number: '248'},
{ title: '249장 주 사랑하는 자 다 찬송할 때에', category: '천국', number: '249'},
{ title: '250장 구주의 십자가 보혈로', category: '회개와용서', number: '250'},
{ title: '251장 놀랍다 주님의 큰 은혜', category: '회개와용서', number: '251'},
{ title: '252장 나의 죄를 씻기는', category: '회개와용서', number: '252'},
{ title: '253장 그 자비하신 주님', category: '회개와용서', number: '253'},
{ title: '254장 내 주의 보혈은', category: '회개와용서', number: '254'},
{ title: '255장 너희 죄 흉악하나', category: '회개와용서', number: '255'},
{ title: '256장 나의 죄 모두 지신 주님', category: '회개와용서', number: '256'},
{ title: '257장 마음에 가득한 의심을 깨치고', category: '회개와용서', number: '257'},
{ title: '258장 샘물과 같은 보혈은', category: '회개와용서', number: '258'},
{ title: '259장 예수 십자가에 흘린 피로써', category: '회개와용서', number: '259'},
{ title: '260장 우리를 죄에서 구하시려', category: '회개와용서', number: '260'},
{ title: '261장 이 세상의 모든 죄를', category: '회개와용서', number: '261'},
{ title: '262장 날 구원하신 예수님', category: '회개와용서', number: '262'},
{ title: '263장 이 세상 험하고', category: '회개와용서', number: '263'},
{ title: '264장 정결하게 하는 샘이', category: '회개와용서', number: '264'},
{ title: '265장 주 십자가를 지심으로', category: '회개와용서', number: '265'},
{ title: '266장 주의 피로 이룬 샘물', category: '회개와용서', number: '266'},
{ title: '267장 주의 확실한 약속의 말씀 듣고', category: '회개와용서', number: '267'},
{ title: '268장 죄에서 자유를 얻게 함은', category: '회개와용서', number: '268'},
{ title: '269장 그 참혹한 십자가에', category: '회개와용서', number: '269'},
{ title: '270장 변찮는 주님의 사랑과', category: '회개와용서', number: '270'},
{ title: '271장 나와 같은 죄인 위해', category: '회개와용서', number: '271'},
{ title: '272장 고통의 멍에 벗으려고', category: '회개와용서', number: '272'},
{ title: '273장 나 주를 멀리 떠났다', category: '회개와사죄', number: '273'},
{ title: '274장 나 행한 것 죄뿐이니', category: '회개와용서', number: '274'},
{ title: '275장 날마다 주와 멀어져', category: '회개와용서', number: '275'},
{ title: '276장 아버지여 이 죄인을', category: '회개와용서', number: '276'},
{ title: '277장 양떼를 떠나서', category: '회개와용서', number: '277'},
{ title: '278장 여러 해 동안 주 떠나', category: '회개와용서', number: '278'},
{ title: '279장 인애하신 구세주여', category: '회개와용서', number: '279'},
{ title: '280장 천부여 의지 없어서', category: '회개와용서', number: '280'},
{ title: '281장 요나처럼 순종않고', category: '회개와용서', number: '281'},
{ title: '282장 큰 죄에 빠진 날 위해', category: '회개와용서', number: '282'},
{ title: '283장 나 속죄함을 받은 후', category: '거듭남', number: '283'},
{ title: '284장 오랫동안 모든 죄 가운데 빠져', category: '거듭남', number: '284'},
{ title: '285장 주의 말씀 받은 그 날', category: '거듭남', number: '285'},
{ title: '286장 주 예수님 내 맘에 오사', category: '거룩한생활', number: '286'},
{ title: '287장 예수 앞에 나오면', category: '거룩한생활', number: '287'},
{ title: '288장 예수를 나의 구주삼고', category: '거룩한생활', number: '288'},
{ title: '289장 주 예수 내 맘에 들어와', category: '거룩한생활', number: '289'},
{ title: '290장 우리는 주님을 늘 배반하나', category: '은혜와사랑', number: '290'},
{ title: '291장 외롭게 사는 이 그 누군가', category: '은혜와사랑', number: '291'},
{ title: '292장 주 없이 살 수 없네', category: '은혜와사랑', number: '292'},
{ title: '293장 주의 사랑 비칠 때에', category: '은혜와사랑', number: '293'},
{ title: '294장 하나님은 외아들을', category: '은혜와사랑', number: '294'},
{ title: '295장 큰 죄에 빠진 나를', category: '은혜와사랑', number: '295'},
{ title: '296장 죄인 구원하시려고', category: '은혜와사랑', number: '296'},
{ title: '297장 양 아흔아홉 마리는', category: '은혜와사랑', number: '297'},
{ title: '298장 속죄하신 구세주를', category: '은혜와사랑', number: '298'},
{ title: '299장 하나님 사랑은', category: '은혜와사랑', number: '299'},
{ title: '300장 내 맘이 낙심되며', category: '은혜와사랑', number: '300'},
{ title: '301장 지금까지 지내온 것', category: '인도와보호', number: '301'},
{ title: '302장 내 주 하나님 넓고 큰 은혜는', category: '은혜와사랑', number: '302'},
{ title: '303장 날 위하여 십자가의', category: '은혜와사랑', number: '303'},
{ title: '304장 그 크신 하나님의 사랑', category: '은혜와사랑', number: '304'},
{ title: '305장 나 같은 죄인 살리신', category: '은혜와사랑', number: '305'},
{ title: '306장 죽을 죄인 살려주신', category: '은혜와사랑', number: '306'},
{ title: '307장 소리없이 보슬보슬', category: '은혜와사랑', number: '307'},
{ title: '308장 내 평생 살아온 길', category: '은혜와사랑', number: '308'},
{ title: '309장 목마른 내 영혼', category: '은혜와사랑', number: '309'},
{ title: '310장 아 하나님의 은혜로', category: '은혜와사랑', number: '310'},
{ title: '311장 내 너를 위하여', category: '소명과충성', number: '311'},
{ title: '312장 너 하나님께 이끌리어', category: '소명과충성', number: '312'},
{ title: '313장 내 임금 예수 내 주여', category: '소명과충성', number: '313'},
{ title: '314장 내 구주 예수를 더욱 사랑', category: '소명과충성', number: '314'},
{ title: '315장 내 주 되신 주를 참 사랑하고', category: '소명과충성', number: '315'},
{ title: '316장 주여 나의 생명', category: '소명과충성', number: '316'},
{ title: '317장 내 주 예수 주신 은혜', category: '소명과충성', number: '317'},
{ title: '318장 순교자의 흘린 피가', category: '소명과충성', number: '318'},
{ title: '319장 말씀으로 이 세상을', category: '소명과충성', number: '319'},
{ title: '320장 나의 죄를 정케하사', category: '소명과충성', number: '320'},
{ title: '321장 날 대속하신 예수께', category: '소명과충성', number: '321'},
{ title: '322장 세상의 헛된 신을 버리고', category: '소명과충성', number: '322'},
{ title: '323장 부름받아 나선 이 몸', category: '소명과충성', number: '323'},
{ title: '324장 예수 나를 오라 하네', category: '소명과충성', number: '324'},
{ title: '325장 예수가 함께 계시니', category: '소명과충성', number: '325'},
{ title: '326장 내 죄를 회개하고', category: '소명과충성', number: '326'},
{ title: '327장 주님 주실 화평', category: '소명과충성', number: '327'},
{ title: '328장 너 주의 사람아', category: '소명과충성', number: '328'},
{ title: '329장 주 날 불러 이르소서', category: '소명과충성', number: '329'},
{ title: '330장 어둔 밤 쉬 되리니', category: '소명과충성', number: '330'},
{ title: '331장 영광을 받으신 만유의 주여', category: '소명과충성', number: '331'},
{ title: '332장 우리는 부지런한', category: '소명과충성', number: '332'},
{ title: '333장 충성하라 죽도록', category: '소명과충성', number: '333'},
{ title: '334장 위대하신 주를', category: '소명과충성', number: '334'},
{ title: '335장 크고 놀라운 평화가', category: '소명과충성', number: '335'},
{ title: '336장 환난과 핍박 중에도', category: '시련과극복', number: '336'},
{ title: '337장 내 모든 시험 무거운 짐을', category: '시련과극복', number: '337'},
{ title: '338장 내 주를 가까이 하게 함은', category: '시련과극복', number: '338'},
{ title: '339장 내 주님 지신 십자가', category: '시련과극복', number: '339'},
{ title: '340장 어지러운 세상 중에', category: '시련과극복', number: '340'},
{ title: '341장 십자가를 내가 지고', category: '시련과극복', number: '341'},
{ title: '342장 너 시험을 당해', category: '시련과극복', number: '342'},
{ title: '343장 시험 받을 때에', category: '시련과극복', number: '343'},
{ title: '344장 믿음으로 가리라', category: '시련과극복', number: '344'},
{ title: '345장 캄캄한 밤 사나운 바람 불 때', category: '시련과극복', number: '345'},
{ title: '346장 주 예수 우리 구하려', category: '분투와승리', number: '346'},
{ title: '347장 허락하신 새 땅에', category: '분투와승리', number: '347'},
{ title: '348장 마귀들과 싸울지라', category: '분투와승리', number: '348'},
{ title: '349장 나는 예수 따라가는', category: '분투와승리', number: '349'},
{ title: '350장 우리들이 싸울 것은', category: '분투와승리', number: '350'},
{ title: '351장 믿는 사람들은 주의 군사니', category: '분투와승리', number: '351'},
{ title: '352장 십자가 군병들아', category: '분투와승리', number: '352'},
{ title: '353장 십자가 군병되어서', category: '분투와승리', number: '353'},
{ title: '354장 주를 앙모하는 자', category: '분투와승리', number: '354'},
{ title: '355장 다 같이 일어나', category: '분투와승리', number: '355'},
{ title: '356장 주 예수 이름 소리 높여', category: '분투와승리', number: '356'},
{ title: '357장 주 믿는 사람 일어나', category: '분투와승리', number: '357'},
{ title: '358장 주의 진리 위해 십자가 군기', category: '분투와승리', number: '358'},
{ title: '359장 천성을 향해 가는 성도들아', category: '분투와승리', number: '359'},
{ title: '360장 행군 나팔 소리에', category: '분투와승리', number: '360'},
{ title: '361장 기도하는 이 시간', category: '기도와간구', number: '361'},
{ title: '362장 주여 복을 주시기를', category: '기도와간구', number: '362'},
{ title: '363장 내가 깊은 곳에서', category: '기도와간구', number: '363'},
{ title: '364장 내 기도하는 그 시간', category: '기도와간구', number: '364'},
{ title: '365장 마음 속에 근심 있는 사람', category: '기도와간구', number: '365'},
{ title: '366장 어두운 내 눈 밝히사', category: '미래와소망', number: '366'},
{ title: '367장 인내하게 하소서 주여 우리를', category: '기도와간구', number: '367'},
{ title: '368장 주 예수여 은혜를', category: '기도와간구', number: '368'},
{ title: '369장 죄짐맡은 우리 구주', category: '기도와간구', number: '369'},
{ title: '370장 주 안에 있는 나에게', category: '인도와보호', number: '370'},
{ title: '371장 구주여 광풍이 불어', category: '인도와보호', number: '371'},
{ title: '372장 그 누가 나의 괴롬 알며', category: '인도와보호', number: '372'},
{ title: '373장 고요한 바다로', category: '인도와보호', number: '373'},
{ title: '374장 나의 믿음 약할 때', category: '인도와보호', number: '374'},
{ title: '375장 나는 갈 길 모르니', category: '인도와보호', number: '375'},
{ title: '376장 나그네와 같은 내가', category: '인도와보호', number: '376'},
{ title: '377장 전능하신 주 하나님', category: '인도와보호', number: '377'},
{ title: '378장 내 선한 목자', category: '인도와보호', number: '378'},
{ title: '379장 내 갈 길 멀고 밤은 깊은데', category: '인도와보호', number: '379'},
{ title: '380장 나의 생명되신 주', category: '인도와보호', number: '380'},
{ title: '381장 나 캄캄한 밤 죄의 길에', category: '인도와보호', number: '381'},
{ title: '382장 너 근심 걱정 말아라', category: '인도와보호', number: '382'},
{ title: '383장 눈을 들어 산을 보니', category: '인도와보호', number: '383'},
{ title: '384장 나의 갈 길 다 가도록', category: '인도와보호', number: '384'},
{ title: '385장 못 박혀 죽으신', category: '인도와보호', number: '385'},
{ title: '386장 만세반석 열린 곳에', category: '인도와보호', number: '386'},
{ title: '387장 멀리멀리 갔더니', category: '인도와보호', number: '387'},
{ title: '388장 비바람이 칠 때와', category: '인도와보호', number: '388'},
{ title: '389장 내게로 오라 하신 주님의', category: '인도와보호', number: '389'},
{ title: '390장 예수가 거느리시니', category: '인도와보호', number: '390'},
{ title: '391장 오 놀라운 구세주', category: '인도와보호', number: '391'},
{ title: '392장 주여 어린 사슴이', category: '인도와보호', number: '392'},
{ title: '393장 오 신실하신 주', category: '인도와보호', number: '393'},
{ title: '394장 이 세상의 친구들', category: '인도와보호', number: '394'},
{ title: '395장 자비하신 예수여', category: '인도와보호', number: '395'},
{ title: '396장 우리 주님 밤새워', category: '인도와보호', number: '396'},
{ title: '397장 주 사랑 안에 살면', category: '인도와보호', number: '397'},
{ title: '398장 어둠의 권세에서', category: '인도와보호', number: '398'},
{ title: '399장 어린 양들아 두려워 말아라', category: '인도와보호', number: '399'},
{ title: '400장 험한 시험 물 속에서', category: '인도와보호', number: '400'},
{ title: '401장 주의 곁에 있을 때', category: '인도와보호', number: '401'},
{ title: '402장 나의 반석 나의 방패', category: '인도와보호', number: '402'},
{ title: '403장 영원하신 주님의', category: '인도와보호', number: '403'},
{ title: '404장 바다에 놀이 일 때에', category: '평안과위로', number: '404'},
{ title: '405장 주의 친절한 팔에 안기세', category: '평안과위로', number: '405'},
{ title: '406장 곤한 내 영혼 편히 쉴 곳과', category: '평안과위로', number: '406'},
{ title: '407장 구주와 함께 나 죽었으니', category: '평안과위로', number: '407'},
{ title: '408장 나 어느 곳에 있든지', category: '평안과위로', number: '408'},
{ title: '409장 나의 기쁨은 사랑의 주님께', category: '평안과위로', number: '409'},
{ title: '410장 내 맘에 한 노래있어', category: '평안과위로', number: '410'},
{ title: '411장 아 내 맘속에', category: '평안과위로', number: '411'},
{ title: '412장 내 영혼의 그윽히 깊은 데서', category: '평안과위로', number: '412'},
{ title: '413장 내 평생에 가는 길', category: '평안과위로', number: '413'},
{ title: '414장 이 세상은 요란하나', category: '평안과위로', number: '414'},
{ title: '415장 십자가 그늘 아래', category: '평안과위로', number: '415'},
{ title: '416장 너희 근심 걱정을', category: '평안과위로', number: '416'},
{ title: '417장 주 예수 넓은 품에', category: '평안과위로', number: '417'},
{ title: '418장 기쁠 때나 슬플 때나', category: '평안과위로', number: '418'},
{ title: '419장 주 날개 밑 내가 편안히 쉬네', category: '평안과위로', number: '419'},
{ title: '420장 너 성결키 위해', category: '성결한생활', number: '420'},
{ title: '421장 내가 예수 믿고서', category: '성결한생활', number: '421'},
{ title: '422장 거룩하게 하소서', category: '성결한생활', number: '422'},
{ title: '423장 먹보다도 더 검은', category: '성결한생활', number: '423'},
{ title: '424장 아버지여 나의 맘을', category: '성결한생활', number: '424'},
{ title: '425장 주님의 뜻을 이루소서', category: '성결한생활', number: '425'},
{ title: '426장 이 죄인을 완전케 하시옵고', category: '성결한생활', number: '426'},
{ title: '427장 맘 가난한 사람', category: '감사의생활', number: '427'},
{ title: '428장 내 영혼에 햇빛 비치니', category: '미래와소망', number: '428'},
{ title: '429장 세상 모든 풍파 너를 흔들어', category: '감사의생활', number: '429'},
{ title: '430장 주와 같이 길 가는 것', category: '주와동행', number: '430'},
{ title: '431장 주 안에 기쁨 있네', category: '주와동행', number: '431'},
{ title: '432장 큰 물결이 설레는 어둔 바다', category: '주와동행', number: '432'},
{ title: '433장 귀하신 주여 날 붙드사', category: '주와동행', number: '433'},
{ title: '434장 귀하신 친구 내게 계시니', category: '주와동행', number: '434'},
{ title: '435장 나의 영원하신 기업', category: '주와동행', number: '435'},
{ title: '436장 나 이제 주님의 새 생명 얻은 몸', category: '주와동행', number: '436'},
{ title: '437장 하늘 보좌 떠나서', category: '주와동행', number: '437'},
{ title: '438장 내 영혼이 은총 입어', category: '주와동행', number: '438'},
{ title: '439장 십자가로 가까이', category: '주와동행', number: '439'},
{ title: '440장 어디든지 예수 나를 이끌면', category: '주와동행', number: '440'},
{ title: '441장 은혜 구한 내게 은혜의 주님', category: '주와동행', number: '441'},
{ title: '442장 저 장미꽃 위에 이슬', category: '주와동행', number: '442'},
{ title: '443장 아침 햇살 비칠 때', category: '주와동행', number: '443'},
{ title: '444장 겟세마네 동산에서', category: '주와동행', number: '444'},
{ title: '445장 태산을 넘어 험곡에 가도', category: '주와동행', number: '445'},
{ title: '446장 주 음성 외에는', category: '주와동행', number: '446'},
{ title: '447장 이 세상 끝날까지', category: '주와동행', number: '447'},
{ title: '448장 주님 가신 길을 따라', category: '제자의도리', number: '448'},
{ title: '449장 예수 따라가며', category: '제자의도리', number: '449'},
{ title: '450장 내 평생 소원 이것뿐', category: '제자의도리', number: '450'},
{ title: '451장 예수 영광 버리사', category: '제자의도리', number: '451'},
{ title: '452장 내 모든 소원 기도의 제목', category: '제자의도리', number: '452'},
{ title: '453장 예수 더 알기 원하네', category: '제자의도리', number: '453'},
{ title: '454장 주와 같이 되기를', category: '제자의도리', number: '454'},
{ title: '455장 주님의 마음을 본받는 자', category: '제자의도리', number: '455'},
{ title: '456장 거친 세상에서 실패하거든', category: '제자의도리', number: '456'},
{ title: '457장 겟세마네 동산의', category: '제자의도리', number: '457'},
{ title: '458장 너희 마음에 슬픔이 가득할 때', category: '제자의도리', number: '458'},
{ title: '459장 누가 주를 따라', category: '제자의도리', number: '459'},
{ title: '460장 뜻 없이 무릎 꿇는', category: '제자의도리', number: '460'},
{ title: '461장 십자가를 질 수 있나', category: '제자의도리', number: '461'},
{ title: '462장 생명 진리 은혜 되신', category: '제자의도리', number: '462'},
{ title: '463장 신자 되기 원합니다', category: '제자의도리', number: '463'},
{ title: '464장 믿음의 새 빛을', category: '제자의도리', number: '464'},
{ title: '465장 주 믿는 나 남 위해', category: '제자의도리', number: '465'},
{ title: '466장 죽기까지 사랑하신 주', category: '제자의도리', number: '466'},
{ title: '467장 높으신 주께서 낮아지심은', category: '제자의도리', number: '467'},
{ title: '468장 큰 사랑의 새 계명을', category: '제자의도리', number: '468'},
{ title: '469장 내 주 하나님', category: '제자의도리', number: '469'},
{ title: '470장 나의 몸이 상하여', category: '신유의권능', number: '470'},
{ title: '471장 주여 나의 병든 몸을', category: '신유의권능', number: '471'},
{ title: '472장 네 병든 손 내밀라고', category: '신유의권능', number: '472'},
{ title: '473장 괴로움과 고통을', category: '신유의권능', number: '473'},
{ title: '474장 의원되신 예수님의', category: '신유의권능', number: '474'},
{ title: '475장 인류는 하나 되게', category: '화해와평화', number: '475'},
{ title: '476장 꽃이 피고 새가 우는', category: '자연과환경', number: '476'},
{ title: '477장 하나님이 창조하신', category: '자연과환경', number: '477'},
{ title: '478장 참 아름다워라', category: '자연과환경', number: '478'},
{ title: '479장 괴로운 인생길 가는 몸이', category: '미래와소망', number: '479'},
{ title: '480장 천국에서 만나보자', category: '미래와소망', number: '480'},
{ title: '481장 때 저물어서 날이 어두니', category: '미래와소망', number: '481'},
{ title: '482장 참 즐거운 노래를', category: '미래와소망', number: '482'},
{ title: '483장 구름같은 이 세상', category: '미래와소망', number: '483'},
{ title: '484장 내 맘의 주여 소망되소서', category: '미래와소망', number: '484'},
{ title: '485장 세월이 흘러가는데', category: '미래와소망', number: '485'},
{ title: '486장 이 세상에 근심된 일이 많고', category: '미래와소망', number: '486'},
{ title: '487장 어두움 후에 빛이 오며', category: '미래와소망', number: '487'},
{ title: '488장 이 몸의 소망 무언가', category: '미래와소망', number: '488'},
{ title: '489장 저 요단강 건너편에 찬란하게', category: '미래와소망', number: '489'},
{ title: '490장 주여 지난밤 내 꿈에', category: '미래와소망', number: '490'},
{ title: '491장 저 높은 곳을 향하여', category: '미래와소망', number: '491'},
{ title: '492장 잠시 세상에 내가 살면서', category: '미래와소망', number: '492'},
{ title: '493장 하늘가는 밝은 길이', category: '미래와소망', number: '493'},
{ title: '494장 만세 반석 열리니', category: '미래와소망', number: '494'},
{ title: '495장 익은 곡식 거둘 자가', category: '전도', number: '495'},
{ title: '496장 새벽부터 우리', category: '전도', number: '496'},
{ title: '497장 주 예수 넓은 사랑', category: '전도', number: '497'},
{ title: '498장 저 죽어가는 자 다 구원하고', category: '전도', number: '498'},
{ title: '499장 흑암에 사는 백성들을 보라', category: '전도', number: '499'},
{ title: '500장 물 위에 생명줄 던지어라', category: '전도', number: '500'},
{ title: '501장 너 시온아 이 소식 전파하라', category: '전도', number: '501'},
{ title: '502장 빛의 사자들이여', category: '세계선교', number: '502'},
{ title: '503장 세상 모두 사랑 없어', category: '세계선교', number: '503'},
{ title: '504장 주님의 명령 전할 사자여', category: '세계선교', number: '504'},
{ title: '505장 온 세상 위하여', category: '세계선교', number: '505'},
{ title: '506장 땅 끝까지 복음을', category: '세계선교', number: '506'},
{ title: '507장 저 북방 얼음 산과', category: '세계선교', number: '507'},
{ title: '508장 우리가 지금은 나그네 되어도', category: '세계선교', number: '508'},
{ title: '509장 기쁜 일이 있어 천국 종치네', category: '세계선교', number: '509'},
{ title: '510장 하나님의 진리 등대', category: '세계선교', number: '510'},
{ title: '511장 예수 말씀 하시기를', category: '세계선교', number: '511'},
{ title: '512장 천성 길을 버리고', category: '세계선교', number: '512'},
{ title: '513장 헛된 욕망 길을 가며', category: '전도와교훈', number: '513'},
{ title: '514장 먼동 튼다 일어나라', category: '전도와교훈', number: '514'},
{ title: '515장 눈을 들어 하늘 보라', category: '전도와교훈', number: '515'},
{ title: '516장 옳은 길 따르라 의의 길을', category: '전도와교훈', number: '516'},
{ title: '517장 가난한 자 돌봐주며', category: '전도와교훈', number: '517'},
{ title: '518장 기쁜 소리 들리니', category: '전도와교훈', number: '518'},
{ title: '519장 구주께서 부르되', category: '부르심과영접', number: '519'},
{ title: '520장 듣는 사람마다 복음 전하여', category: '부르심과영접', number: '520'},
{ title: '521장 구원으로 인도하는', category: '부르심과영접', number: '521'},
{ title: '522장 웬일인가 내 형제여', category: '부르심과영접', number: '522'},
{ title: '523장 어둔 죄악 길에서', category: '부르심과영접', number: '523'},
{ title: '524장 갈 길을 밝히 보이시니', category: '부르심과영접', number: '524'},
{ title: '525장 돌아와 돌아와', category: '부르심과영접', number: '525'},
{ title: '526장 목마른 자들아', category: '부르심과영접', number: '526'},
{ title: '527장 어서 돌아오오', category: '부르심과영접', number: '527'},
{ title: '528장 예수가 우리를 부르는 소리', category: '부르심과영접', number: '528'},
{ title: '529장 온유한 주님의 음성', category: '부르심과영접', number: '529'},
{ title: '530장 주께서 문에 오셔서', category: '부르심과영접', number: '530'},
{ title: '531장 자비한 주께서 부르시네', category: '부르심과영접', number: '531'},
{ title: '532장 주께로 한 걸음씩', category: '부르심과영접', number: '532'},
{ title: '533장 우리 주 십자가', category: '부르심과영접', number: '533'},
{ title: '534장 주님 찾아 오셨네', category: '부르심과영접', number: '534'},
{ title: '535장 주 예수 대문 밖에', category: '부르심과영접', number: '535'},
{ title: '536장 죄짐에 눌린 사람은', category: '부르심과영접', number: '536'},
{ title: '537장 형제여 지체말라', category: '부르심과영접', number: '537'},
{ title: '538장 죄짐을 지고서 곤하거든', category: '부르심과영접', number: '538'},
{ title: '539장 너 예수께 조용히 나가', category: '부르심과영접', number: '539'},
{ title: '540장 주의 음성을 내가 들으니', category: '믿음과확신', number: '540'},
{ title: '541장 꽃이 피는 봄날에만', category: '믿음과확신', number: '541'},
{ title: '542장 구주 예수 의지함이', category: '믿음과확신', number: '542'},
{ title: '543장 어려운 일 당할 때', category: '믿음과확신', number: '543'},
{ title: '544장 울어도 못하네', category: '믿음과확신', number: '544'},
{ title: '545장 이 눈에 아무 증거 아니 뵈어도', category: '믿음과확신', number: '545'},
{ title: '546장 주님 약속 하신 말씀 위에 서', category: '믿음과확신', number: '546'},
{ title: '547장 나 같은 죄인까지도', category: '믿음과확신', number: '547'},
{ title: '548장 날 구속하신', category: '믿음과확신', number: '548'},
{ title: '549장 내 주여 뜻대로', category: '믿음과확신', number: '549'},
{ title: '550장 시온의 영광이 빛나는 아침', category: '새해송구영신', number: '550'},
{ title: '551장 오늘까지 복과 은혜', category: '새해송구영신', number: '551'},
{ title: '552장 아침 해가 돋을 때', category: '새해송구영신', number: '552'},
{ title: '553장 새해 아침 환히 밝았네', category: '새해송구영신', number: '553'},
{ title: '554장 종소리 크게 울려라', category: '새해송구영신', number: '554'},
{ title: '555장 우리 주님 모신 가정', category: '가정', number: '555'},
{ title: '556장 날마다 주님을 의지하는', category: '가정', number: '556'},
{ title: '557장 에덴의 동산처럼', category: '가정', number: '557'},
{ title: '558장 미더워라 주의 가정', category: '가정', number: '558'},
{ title: '559장 사철에 봄바람 불어 잇고', category: '가정', number: '559'},
{ title: '560장 주의 발자취를 따름이', category: '어린이', number: '560'},
{ title: '561장 예수님의 사랑은', category: '어린이', number: '561'},
{ title: '562장 예루살렘 아이들', category: '어린이', number: '562'},
{ title: '563장 예수 사랑하심을', category: '어린이', number: '563'},
{ title: '564장 예수께서 오실 때에', category: '어린이', number: '564'},
{ title: '565장 예수께로 가면', category: '어린이', number: '565'},
{ title: '566장 사랑의 하나님 귀하신 이름은', category: '어린이', number: '566'},
{ title: '567장 다정하신 목자 예수', category: '어린이', number: '567'},
{ title: '568장 하나님은 나의 목자시니', category: '어린이', number: '568'},
{ title: '569장 선한 목자 되신 우리 주', category: '어린이', number: '569'},
{ title: '570장 주는 나를 기르시는 목자', category: '어린이', number: '570'},
{ title: '571장 역사 속에 보냄 받아', category: '청년', number: '571'},
{ title: '572장 바다같이 넓은 은혜', category: '청년', number: '572'},
{ title: '573장 말씀에 순종하여', category: '청년', number: '573'},
{ title: '574장 가슴마다 파도친다', category: '청년', number: '574'},
{ title: '575장 주님께 귀한 것 드려', category: '청년', number: '575'},
{ title: '576장 하나님의 뜻을 따라', category: '어버이', number: '576'},
{ title: '577장 낳으시고 길러주신', category: '어버이', number: '577'},
{ title: '578장 언제나 바라봐도', category: '어버이', number: '578'},
{ title: '579장 어머니의 넓은 사랑', category: '어버이', number: '579'},
{ title: '580장 삼천리 반도 금수강산', category: '나라사랑', number: '580'},
{ title: '581장 주 하나님 이 나라를 지켜주시고', category: '나라사랑', number: '581'},
{ title: '582장 어둔 밤 마음에 잠겨', category: '나라사랑', number: '582'},
{ title: '583장 이 민족에 복음을', category: '나라사랑', number: '583'},
{ title: '584장 우리나라 지켜주신', category: '나라사랑', number: '584'},
{ title: '585장 내 주는 강한 성이요', category: '종교개혁기념일', number: '585'},
{ title: '586장 어느 민족 누구게나', category: '종교개혁기념일', number: '586'},
{ title: '587장 감사하는 성도여', category: '감사절', number: '587'},
{ title: '588장 공중 나는 새를 보라', category: '감사절', number: '588'},
{ title: '589장 넓은 들에 익은 곡식', category: '감사절', number: '589'},
{ title: '590장 논밭에 오곡백과', category: '감사절', number: '590'},
{ title: '591장 저 밭에 농부 나가', category: '감사절', number: '591'},
{ title: '592장 산마다 불이 탄다 고운 단풍에', category: '감사절', number: '592'},
{ title: '593장 아름다운 하늘과', category: '감사절', number: '593'},
{ title: '594장 감사하세 찬양하세', category: '감사절', number: '594'},
{ title: '595장 나 맡은 본분은', category: '임직', number: '595'},
{ title: '596장 영광은 주님 홀로', category: '임직', number: '596'},
{ title: '597장 이전에 주님을 내가 몰라', category: '임직', number: '597'},
{ title: '598장 천지 주관하는 주님', category: '헌당', number: '598'},
{ title: '599장 우리의 기도 들어주시옵소서', category: '헌당', number: '599'},
{ title: '600장 교회의 참된 터는', category: '헌당', number: '600'},
{ title: '601장 하나님이 정하시고', category: '혼례', number: '601'},
{ title: '602장 성부님께 빕니다', category: '혼례', number: '602'},
{ title: '603장 태초에 하나님이', category: '혼례', number: '603'},
{ title: '604장 완전한 사랑', category: '혼례', number: '604'},
{ title: '605장 오늘 모여 찬송함은', category: '혼례', number: '605'},
{ title: '606장 해보다 더 밝은 천국', category: '장례', number: '606'},
{ title: '607장 내 본향 가는 길', category: '장례', number: '607'},
{ title: '608장 후일에 생명 그칠 때', category: '장례', number: '608'},
{ title: '609장 이 세상 살 때에', category: '장례', number: '609'},
{ title: '610장 고생과 수고가 다 지난 후', category: '장례', number: '610'},
{ title: '611장 주님 오라 부르시어', category: '추모', number: '611'},
{ title: '612장 이 땅에서 주를 위해', category: '추모', number: '612'},
{ title: '613장 사랑의 주 하나님', category: '추모', number: '613'},
{ title: '614장 얼마나 아프셨나', category: '경배와찬양', number: '614'},
{ title: '615장 그 큰 일을 행하신', category: '경배와찬양', number: '615'},
{ title: '616장 주를 경배하리', category: '경배와찬양', number: '616'},
{ title: '617장 주님을 찬양합니다', category: '경배와찬양', number: '617'},
{ title: '618장 나 주님을 사랑합니다', category: '경배와찬양', number: '618'},
{ title: '619장 놀라운 그 이름', category: '경배와찬양', number: '619'},
{ title: '620장 여기에 모인 우리', category: '경배와찬양', number: '620'},
{ title: '621장 찬양하라 내 영혼아', category: '경배와찬양', number: '621'},
{ title: '622장 거룩한 밤', category: '경배와찬양', number: '622'},
{ title: '623장 주님의 시간에', category: '경배와찬양', number: '623'},
{ title: '624장 우리 모두 찬양해', category: '경배와찬양', number: '624'},
{ title: '625장 거룩 거룩 거룩한 하나님', category: '경배와찬양', number: '625'},
{ title: '626장 만민들아 다 경배하라', category: '입례송', number: '626'},
{ title: '627장 할렐루야 할렐루야 다 함께', category: '입례송', number: '627'},
{ title: '628장 아멘 아멘 아멘 영광과 존귀를', category: '입례송', number: '628'},
{ title: '629장 거룩 거룩 거룩', category: '입례송', number: '629'},
{ title: '630장 진리와 생명 되신 주', category: '기도송', number: '630'},
{ title: '631장 우리 기도를', category: '기도송', number: '631'},
{ title: '632장 주여 주여 우리를', category: '기도송', number: '632'},
{ title: '633장 나의 하나님 받으소서', category: '헌금응답송', number: '633'},
{ title: '634장 모든 것이 주께로부터', category: '헌금응답송', number: '634'},
{ title: '635장 하늘에 계신 아버지', category: '주기도송', number: '635'},
{ title: '636장 하늘에 계신 우리 아버지여', category: '기도송', number: '636'},
{ title: '637장 주님 우리 마음을 여시어', category: '말씀응답송', number: '637'},
{ title: '638장 주 너를 지키시고', category: '축도송', number: '638'},
{ title: '639장 주 함께하소서', category: '축도송', number: '639'},
{ title: '640장 아멘', category: '아멘송', number: '640'},
{ title: '641장 아멘', category: '아멘송', number: '641'},
{ title: '642장 아멘', category: '아멘송', number: '642'},
{ title: '643장 아멘', category: '아멘송', number: '643'},
{ title: '644장 아멘', category: '아멘송', number: '644'},
{ title: '645장 아멘', category: '아멘송', number: '645'}]