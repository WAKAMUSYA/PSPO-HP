import { Hero } from '@/components/sections/Hero';
import { StickyNav } from '@/components/layout/StickyNav';
import { News } from '@/components/sections/News';
import { Concept } from '@/components/sections/Concept';
import { Services } from '@/components/sections/Services';
import { Features } from '@/components/sections/Features';
import { Pricing } from '@/components/sections/Pricing';
import { Stores } from '@/components/sections/Stores';
import { JoinFlow } from '@/components/sections/JoinFlow';
import { FAQ } from '@/components/sections/FAQ';
import { Enjoy } from '@/components/sections/Enjoy';
import { getNews } from '@/app/admin/news/actions';

export default async function Home() {
  const allNews = await getNews();
  const publishedNews = allNews.filter((n: any) => n.status === 'published');

  return (
    <main>
      {/* ①ファーストビュー */}
      <Hero />
      
      {/* スクロール追従メニュー */}
      <StickyNav />
      
      {/* 固定背景（zimu1.jpg）グループ */}
      <div 
        className="relative bg-fixed bg-cover bg-center" 
        style={{ backgroundImage: "url('/image/zimu1.jpg')" }}
      >
        {/* ②新着・キャンペーン */}
        <News initialNews={publishedNews} />
        
        {/* ③コンセプト（THIS IS P・SPO） */}
        <Concept />
      </div>
      
      {/* ④P・SPOでできること */}
      <Services />
      
      {/* ⑤選ばれる理由 */}
      <Features />
      
      {/* ⑤料金 (Pricing & Options) */}
      <Pricing />


      
      {/* ⑥店舗を探す */}
      <Stores />
      
      {/* ⑦入会の流れ */}
      <JoinFlow />
      
      {/* ⑧FAQ */}
      <FAQ />

      {/* もっと楽しむ */}
      <Enjoy />
      
      {/* ⑨フッターは layout.tsx で全ページ共通として配置されています */}
    </main>
  );
}
