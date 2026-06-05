import { Dumbbell, Coffee, Mic2, LocateFixed, Droplets, Baby, Sparkles } from 'lucide-react';

export const services = [
  {
    id: 'gym',
    title: '24時間ジム',
    description: '本格的なマシンを完備。いつでも好きな時間にトレーニングが可能です。',
    icon: Dumbbell,
    color: 'text-brand-navy',
    bg: 'bg-blue-50',
    image: '/image/zimu2.jpg',
  },
  {
    id: 'cafe',
    title: '無人カフェ',
    description: 'ワークスペースとしても利用可能なカフェスペース。Wi-Fi・電源完備。',
    icon: Coffee,
    color: 'text-amber-700',
    bg: 'bg-amber-50',
    image: '/image/zimu3.jpg',
  },
  {
    id: 'karaoke',
    title: 'カラオケ',
    description: '完全個室で周りを気にせず歌い放題。ストレス発散に最適です。',
    icon: Mic2,
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    image: '/image/zimu4.jpg',
  },
  {
    id: 'golf',
    title: 'シミュレーションゴルフ',
    description: '最新のシミュレーターで、天候を気にせず本格的なラウンド体験を。',
    icon: LocateFixed,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    image: '/image/golf/golf1.jpg',
  },
  {
    id: 'spa',
    title: '温泉・サウナ',
    description: 'トレーニング後の疲労回復や、サウナだけでの利用も大歓迎。',
    icon: Droplets,
    color: 'text-brand-mint',
    bg: 'bg-teal-50',
    image: '/image/zimu6.jpg',
  },
  {
    id: 'kids',
    title: 'キッズパーク',
    description: 'お子様連れでも安心。広々とした遊び場で思い切り楽しめます。',
    icon: Baby,
    color: 'text-orange-400',
    bg: 'bg-orange-50',
    image: '/image/zimu7.jpg',
  },
  {
    id: 'esthe',
    title: 'セルフエステ',
    description: 'プロ仕様のマシンを定額で。気になる部分を徹底ケアできます。',
    icon: Sparkles,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    image: '/image/zimu8.jpg',
  }
];

export const serviceTabs = [
  {
    id: 'exercise',
    title: '運動する',
    image: '/image/zimu2.jpg',
    services: [
      { name: '24時間ジム', desc: '低価格なのに充実のラインナップ。\n愛媛県内と北海道1店舗の全店舗が利用可能。', image: '/image/zimu1.jpg' },
      { name: 'シミュレーションゴルフ', desc: '月額内で利用可能。\n導入店舗も続々拡大中。', image: '/image/golf/golf2.jpg' },
      { name: 'パーソナルトレーニング', desc: 'プロのトレーナーがマンツーマンでサポート。', image: '/image/パーソナル/pt1.jpg' },
      { name: 'バイオサーキット', desc: 'AIがあなたに最適な負荷を自動設定。', image: '/image/bio/bio.jpg' },
      { name: 'P・YOGA', desc: '心と身体のバランスを整えるヨガスタジオ。', image: '/image/p-yoga/yoga1.jpg' },
      { name: 'P・STUDIO', desc: '多彩なスタジオプログラムを毎日開催。', image: '/image/p-studio/studio1.jpg' },
      { name: 'マシンピラティス', desc: '専用マシンでインナーマッスルを効果的に鍛える。', image: '/image/マシンピラティス/pira1.JPG' },
      { name: 'ボルダリング', desc: '初心者から上級者まで楽しめる本格ウォール。', image: '/image/ボルダリング/boru1.jpg' },
    ]
  },
  {
    id: 'work',
    title: '学ぶ・集中する',
    image: '/image/study.jpg',
    services: [
      { name: 'STUDY ROOM', desc: '24時間利用可能な学習空間。\n学生から社会人まで利用できます。', image: '/image/study/study5.jpg' },
      { name: 'Study+', desc: 'さらに集中を高めるプレミアムな自習スペース。', image: '/image/study/studyplus.jpg' },
      { name: 'WEB個室ブース', desc: 'オンライン会議や面接にも対応した専用空間。', image: '/image/study/webkaigi1.JPG' },
      { name: 'WORKS（コワーキング）', desc: '住所利用・登記も可能なコワーキングスペース。', image: '/image/works/works4.jpg' },
      { name: 'レンタルルーム', desc: '打ち合わせやセミナーに便利な貸し会議室。', image: '/image/works/Event.jpg' },
    ]
  },
  {
    id: 'condition',
    title: '整える',
    image: '/image/整える/sauna2.jpg',
    services: [
      { name: 'P・SPO SAUNA', desc: '愛媛初の24時間個室サウナ。', image: '/image/整える/sauna6.jpg' },
      { name: 'SPA P・SPO', desc: '天然温泉で心身の疲れを癒やすリラクゼーション。', image: '/image/整える/sauna1.jpg' },
      { name: '酸素カプセル', desc: '月会費内で利用可能。\nコンディショニングや疲労回復に。', image: '/image/整える/sanso3.webp' },
      { name: 'セルフエステ', desc: '業務用エステマシンを会員価格で利用可能。', image: '/image/整える/selfeste.jpg' },
      { name: '脱毛', desc: 'プロ仕様の脱毛マシンを導入。完全個室で気軽にセルフケアが可能です。', image: '/image/整える/datumou1.jpg' },
      { name: 'P・STRETCH', desc: '専門スタッフによるパーソナルストレッチ。', image: '/image/整える/stretch1.jpg' },
      { name: 'あしカラダ', desc: '本格的なリラクゼーションマッサージ。P・SPO会員様は全メニュー500円OFF！', image: '/image/あしカラダ/ashikarada2.jpeg' },
    ]
  },
  {
    id: 'relax',
    title: '遊ぶ・くつろぐ',
    image: '/image/cafe/cafe1.jpg',
    services: [
      { name: 'P・SPO CAFE', desc: '会員様はいつでも利用可能。\nフリードリンク付き。', image: '/image/cafe/cafe4.JPG' },
      { name: 'カラオケ', desc: '防音個室で思い切り歌ってストレス発散。', image: '/image/karaoke/karaoke1.jpg' },
      { name: '食堂', desc: '低価格・高品質にこだわったセルフ食堂。トレーニング後の食事にも最適です。', image: '/image/sakaba/udon.webp' },
      { name: '酒場', desc: '会員限定。\nドリンクを相場の半額程度で楽しめる。', image: '/image/sakaba/sakaba.webp' },
      { name: 'キッズパーク', desc: '子どもの発育をテーマにした遊び場。', image: '/image/北条店/kidpark1.webp' },
      { name: '古着SHOP', desc: '厳選された古着をお得な価格で販売。', image: '/image/古着/hurugi.webp' },
      { name: 'ギャラリー', desc: '地元アーティストの作品を展示・販売。', image: '/image/gallery.webp' },
      { name: 'ビリヤード・ダーツ', desc: '仕事終わりやトレーニング後に、仲間と楽しく遊べるアミューズメント空間。', image: '/image/ビリヤードダーツ/biri1.webp' },
    ]
  }
];

export const news = [
  {
    id: 1,
    date: '2026.05.20',
    category: 'キャンペーン',
    title: '夏の入会キャンペーン開始！初期費用0円＆初月半額',
    image: '/image/zimu1.jpg',
    period: '開催期間：2026年6月1日（月）〜 7月31日（金）',
  },
  {
    id: 2,
    date: '2026.05.15',
    category: 'お知らせ',
    title: '新店舗「道後湯之町店」が6月1日にグランドオープン',
    image: '/image/zimu2.jpg',
    period: '開催期間：2026年6月1日（月）〜',
  },
  {
    id: 3,
    date: '2026.05.10',
    category: 'イベント',
    title: 'シミュレーションゴルフコンペ開催！豪華賞品あり',
    image: '/image/golf/golf3.jpeg',
    period: '開催期間：2026年7月10日（金）〜 7月12日（日）',
  },
  {
    id: 4,
    date: '2026.05.01',
    category: 'キャンペーン',
    title: 'お友達紹介キャンペーン！紹介者にも特典あり',
    image: '/image/zimu4.jpg',
    period: '開催期間：2026年5月1日（金）〜 6月30日（火）',
  },
  {
    id: 5,
    date: '2026.04.20',
    category: 'お知らせ',
    title: 'カフェメニューに新しいプロテインドリンクを追加',
    image: '/image/zimu5.jpg',
    period: '提供開始：2026年5月1日（金）〜',
  }
];

export const pricingPlans = [
  {
    id: 'basic',
    name: 'BASIC PLAN',
    price: '4,980',
    priceTax: '5,478',
    features: ['24時間ジム利用', '無人カフェ利用', 'カラオケ利用', 'シミュレーションゴルフ'],
    recommended: false,
    theme: 'navy'
  },
  {
    id: 'spa',
    name: 'SPA P・SPO PLAN',
    price: '5,980',
    priceTax: '6,578',
    features: ['BASIC PLANの全サービス', '天然温泉利用', '本格サウナ利用', 'タオルセット貸出'],
    recommended: true,
    theme: 'mint'
  }
];

export const initialFees = [
  { name: '入会金', price: '0円 (キャンペーン中)' },
  { name: '事務手数料', price: '3,300円' },
  { name: '登録料', price: '1,100円' },
];

export const options = [
  { name: 'らくらくプラン（タオル・ウェア貸出）', price: '1,100円/月' },
  { name: '契約ロッカー', price: '1,100円/月' },
  { name: 'プロテイン飲み放題', price: '1,650円/月' },
  { name: '水素水飲み放題', price: '1,100円/月' },
];

export const features = [
  {
    title: '24時間いつでも使える',
    description: '早朝でも深夜でも、あなたのライフスタイルに合わせて利用できます。'
  },
  {
    title: '手ぶらでOK！顔認証システム',
    description: '全店舗で顔認証での入退館を導入。スマホやQRコード、会員証すら持たずに完全に手ぶらで利用開始できます。'
  },
  {
    title: '複数サービスが使い放題',
    description: 'ジムだけじゃない。カフェもサウナもゴルフも、月額定額でシームレスに利用可能。'
  },
  {
    title: '家族でも使いやすい',
    description: 'キッズパーク完備で、親御さんがトレーニング中もお子様は楽しく遊べます。'
  },
  {
    title: '無人だからこその気軽さ',
    description: 'スタッフの目を気にせず、自分のペースでサービスを満喫できます。'
  },
  {
    title: '圧倒的なコストパフォーマンス',
    description: 'これだけの設備が使えてこの価格。他にはない充実の複合施設です。'
  }
];

export const faqs = [
  {
    question: '24時間いつでも利用できますか？',
    answer: 'はい、ジムエリアや一部のサービスは24時間365日ご利用いただけます。（温泉・サウナ等、一部サービスは清掃のため利用できない時間帯がございます）'
  },
  {
    question: '入会したらどの店舗も使えますか？',
    answer: '基本プランで全店舗の相互利用が可能です。店舗によって併設されているサービス（カフェ、サウナ等）が異なります。'
  },
  {
    question: '温泉やサウナだけを利用することはできますか？',
    answer: '「SPA P・SPO PLAN」にご加入いただければ、温泉やサウナも追加料金なしで毎日ご利用いただけます。'
  },
  {
    question: '入会手続きはスマホで完結しますか？',
    answer: 'はい、WEBからの入会手続きで全て完結します。店舗での書類記入等は不要で、登録完了後すぐにご利用開始いただけます。'
  },
  {
    question: '退会や休会は簡単にできますか？',
    answer: 'マイページからいつでもオンラインで手続きが可能です。退会・休会をご希望の月の前月10日までにお手続きください。'
  }
];

export const stores = [
  {
    id: 'matsuyama',
    name: '松山中央店',
    area: '松山市',
    tags: ['gym', 'cafe', 'spa', 'golf'],
    address: '愛媛県松山市〇〇1-2-3'
  },
  {
    id: 'dogo',
    name: '道後湯之町店',
    area: '松山市',
    tags: ['gym', 'spa'],
    address: '愛媛県松山市道後〇〇4-5'
  },
  {
    id: 'imabari',
    name: '今治インター店',
    area: '今治市',
    tags: ['gym', 'cafe', 'karaoke', 'kids'],
    address: '愛媛県今治市〇〇6-7'
  }
];

export const enjoyColumns = [
  {
    id: 1,
    title: '会員限定のシークレット特典',
    description: 'P・SPO会員なら、提携する地域の飲食店や美容室で特別割引が受けられます。',
    image: '/image/zimu4.jpg',
  },
  {
    id: 2,
    title: '提携温泉施設のご案内',
    description: 'トレーニングの後は、広々とした温泉でリフレッシュ。県内の提携施設をご紹介します。',
    image: '/image/zimu6.jpg',
  },
  {
    id: 3,
    title: 'おすすめウォーキングコース',
    description: 'ジムのマシンだけでなく、外の空気を感じながら歩ける店舗周辺のコースをご紹介。',
    image: '/image/zimu1.jpg',
  },
  {
    id: 4,
    title: '初心者向けマシンの使い方',
    description: '初めてのジムでも安心。効果的なマシンの使い方を動画付きで解説します。',
    image: '/image/zimu2.jpg',
  }
];
