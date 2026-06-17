'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Search, MapPin, Filter, Dumbbell, Coffee, Droplets, Baby, LocateFixed, Sparkles } from 'lucide-react';

// 仮のテスト用店舗データ（83店舗のシミュレーションとして10店舗をダミー配置）
const testStores = [
  { id: 1, name: '松山中央店', area: '松山市', tags: ['gym', 'cafe', 'spa'], address: '愛媛県松山市中央1-2-3', lat: 33.8416, lng: 132.7661 },
  { id: 2, name: '道後湯之町店', area: '松山市', tags: ['gym', 'spa'], address: '愛媛県松山市道後湯之町4-5', lat: 33.8522, lng: 132.7876 },
  { id: 3, name: '今治インター店', area: '今治市', tags: ['gym', 'cafe', 'kids'], address: '愛媛県今治市矢田6-7', lat: 34.0416, lng: 132.9818 },
  { id: 4, name: '新居浜店', area: '新居浜市', tags: ['gym', 'esthe'], address: '愛媛県新居浜市繁本町1', lat: 33.9602, lng: 133.2833 },
  { id: 5, name: '西条店', area: '西条市', tags: ['gym', 'cafe', 'golf'], address: '愛媛県西条市大町2', lat: 33.9186, lng: 133.1805 },
  { id: 6, name: '四国中央店', area: '四国中央市', tags: ['gym', 'spa'], address: '愛媛県四国中央市三島3', lat: 33.9806, lng: 133.5486 },
  { id: 7, name: '宇和島店', area: '宇和島市', tags: ['gym', 'kids'], address: '愛媛県宇和島市丸之内4', lat: 33.2232, lng: 132.5604 },
  { id: 8, name: '大洲店', area: '大洲市', tags: ['gym', 'cafe'], address: '愛媛県大洲市大洲5', lat: 33.5042, lng: 132.5441 },
  { id: 9, name: '松前店', area: '松前町', tags: ['gym', 'cafe', 'spa', 'kids'], address: '愛媛県伊予郡松前町筒井', lat: 33.7946, lng: 132.7118 },
  { id: 10, name: '砥部店', area: '砥部町', tags: ['gym'], address: '愛媛県伊予郡砥部町宮内', lat: 33.7483, lng: 132.7936 },
];

const allAreas = ['すべて', '松山市', '今治市', '新居浜市', '西条市', '四国中央市', '宇和島市', '大洲市', '松前町', '砥部町'];
const serviceFilters = [
  { id: 'gym', label: '24hジム', icon: Dumbbell },
  { id: 'cafe', label: 'カフェ', icon: Coffee },
  { id: 'spa', label: 'サウナ', icon: Droplets },
  { id: 'kids', label: 'キッズ', icon: Baby },
  { id: 'golf', label: 'ゴルフ', icon: LocateFixed },
  { id: 'esthe', label: 'エステ', icon: Sparkles },
];

export default function StoresTestPage() {
  const [selectedArea, setSelectedArea] = useState('すべて');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [hoveredStore, setHoveredStore] = useState<number | null>(null);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const filteredStores = testStores.filter(store => {
    const matchArea = selectedArea === 'すべて' || store.area === selectedArea;
    const matchServices = selectedServices.every(service => store.tags.includes(service));
    return matchArea && matchServices;
  });

  return (
    <div className="min-h-screen bg-slate-50 pt-[100px]">
      {/* Header Area (Mock for back button) */}
      <div className="bg-white border-b border-slate-200 z-30 shadow-sm relative">
        <div className="max-w-screen-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center text-sm font-bold text-slate-500">
            <Link href="/" className="hover:text-brand-navy flex items-center transition-colors">
              <Home size={16} className="mr-1" /> トップ
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-navy">店舗一覧（テスト）</span>
          </div>
          <div className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-bold flex items-center">
            <span className="w-2 h-2 rounded-full bg-amber-500 mr-2 animate-pulse"></span>
            検証用プロトタイプ
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-[calc(100vh-140px)]">
        {/* Left Sidebar: Filters & List */}
        <div className="w-full md:w-[400px] lg:w-[480px] bg-white flex flex-col border-r border-slate-200 shadow-2xl z-20 overflow-hidden shrink-0">
          
          {/* Filters Area */}
          <div className="p-4 md:p-6 border-b border-slate-100 bg-slate-50/80">
            <h1 className="text-xl md:text-2xl font-black text-slate-800 mb-6 flex items-center">
              <Search className="mr-2 text-brand-navy" />
              お近くの店舗を探す
            </h1>
            
            <div className="mb-5">
              <label className="block text-xs font-bold text-slate-500 mb-2">エリアを選択</label>
              <div className="relative">
                <select 
                  className="w-full bg-white border border-slate-300 rounded-lg pl-4 pr-10 py-2.5 text-sm font-bold text-slate-700 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-navy/30 cursor-pointer shadow-sm transition-shadow"
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                >
                  {allAreas.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  ▼
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 mb-2">利用したい設備（複数選択可）</label>
              <div className="flex flex-wrap gap-2">
                {serviceFilters.map(service => {
                  const isActive = selectedServices.includes(service.id);
                  const Icon = service.icon;
                  return (
                    <button
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`flex items-center px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 border ${
                        isActive 
                          ? 'bg-brand-navy text-white border-brand-navy shadow-md scale-105' 
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <Icon size={14} className="mr-1.5" />
                      {service.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results List Area */}
          <div className="flex-1 overflow-y-auto bg-slate-50/50 p-4 hide-scrollbar">
            <div className="text-sm font-bold text-slate-500 mb-4 px-2 flex justify-between items-center">
              <span>該当店舗: <span className="text-brand-navy text-xl">{filteredStores.length}</span> 件</span>
              {selectedServices.length > 0 && (
                <button onClick={() => setSelectedServices([])} className="text-xs text-brand-orange hover:underline">
                  条件をクリア
                </button>
              )}
            </div>
            
            <div className="space-y-4 pb-20">
              {filteredStores.map(store => (
                <div 
                  key={store.id}
                  onMouseEnter={() => setHoveredStore(store.id)}
                  onMouseLeave={() => setHoveredStore(null)}
                  className={`bg-white p-5 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl ${
                    hoveredStore === store.id ? 'border-brand-navy ring-1 ring-brand-navy/30 -translate-y-1' : 'border-slate-100'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-black text-slate-800">{store.name}</h3>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded font-bold">
                      {store.area}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mb-4 flex items-start leading-tight">
                    <MapPin size={14} className="mr-1.5 mt-0.5 shrink-0 text-brand-orange" />
                    {store.address}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {store.tags.map(tag => {
                      const filter = serviceFilters.find(f => f.id === tag);
                      if (!filter) return null;
                      const TagIcon = filter.icon;
                      return (
                        <span key={tag} className="inline-flex items-center bg-sky-50 text-[#3587c6] text-[10px] font-bold px-2 py-1 rounded">
                          <TagIcon size={10} className="mr-1" />
                          {filter.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
              
              {filteredStores.length === 0 && (
                <div className="text-center py-16 text-slate-400">
                  <Filter size={48} className="mx-auto mb-4 opacity-30" />
                  <p className="font-bold text-lg text-slate-600">店舗が見つかりません</p>
                  <p className="text-sm mt-2">検索条件を変更してください</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Map Area (Mock) */}
        <div className="flex-1 bg-slate-200 relative hidden md:block overflow-hidden">
          {/* Embedding an OpenStreetMap iframe as a mockup map, centered loosely around Ehime */}
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            src="https://www.openstreetmap.org/export/embed.html?bbox=132.33856201171878%2C33.16886118485292%2C133.65642089843753%2C34.22091494883444&amp;layer=mapnik" 
            style={{ filter: 'grayscale(0.2) contrast(1.1) opacity(0.7)' }}
          ></iframe>
          
          {/* Overlay Mock Pins */}
          {filteredStores.map(store => {
            // Rough mapping of lat/lng to percentage positioning over the iframe bounds
            const minLon = 132.338; const maxLon = 133.656;
            const minLat = 33.168; const maxLat = 34.220;
            const leftPct = ((store.lng - minLon) / (maxLon - minLon)) * 100;
            const topPct = 100 - (((store.lat - minLat) / (maxLat - minLat)) * 100);

            if(leftPct < 0 || leftPct > 100 || topPct < 0 || topPct > 100) return null;

            return (
              <div 
                key={store.id}
                className={`absolute w-8 h-8 -ml-4 -mt-8 flex items-center justify-center transition-all duration-300 z-10 ${
                  hoveredStore === store.id ? 'scale-150 z-20' : 'scale-100 hover:scale-125'
                }`}
                style={{ left: `${leftPct}%`, top: `${topPct}%` }}
                onMouseEnter={() => setHoveredStore(store.id)}
                onMouseLeave={() => setHoveredStore(null)}
              >
                <div className={`relative flex items-center justify-center ${hoveredStore === store.id ? 'text-brand-orange' : 'text-brand-navy'} drop-shadow-xl cursor-pointer transition-colors`}>
                  <MapPin size={32} fill={hoveredStore === store.id ? '#fff7ed' : 'white'} />
                  {/* Inner dot */}
                  <div className={`absolute w-2 h-2 rounded-full -mt-2 ${hoveredStore === store.id ? 'bg-brand-orange animate-ping' : 'bg-brand-navy'}`}></div>
                  <div className={`absolute w-2 h-2 rounded-full -mt-2 ${hoveredStore === store.id ? 'bg-brand-orange' : 'bg-brand-navy'}`}></div>
                </div>
                
                {/* Tooltip */}
                {hoveredStore === store.id && (
                  <div className="absolute top-full mt-2 bg-slate-800 text-white px-3 py-1.5 rounded-lg shadow-2xl text-xs font-bold whitespace-nowrap border border-slate-700 animate-in fade-in slide-in-from-top-1">
                    {store.name}
                    {/* Small arrow */}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                  </div>
                )}
              </div>
            );
          })}
          
          {/* "Interactive Map" Label for Mockup */}
          <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg font-bold text-sm text-slate-700 flex flex-col border border-white pointer-events-none">
            <span className="flex items-center text-brand-navy mb-1">
              <LocateFixed className="mr-2" size={16} />
              モックアップマップ
            </span>
            <span className="text-xs font-normal text-slate-500">
              ※本番ではGoogle Maps等を利用し、<br/>現在地からのルート案内などを実装します
            </span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
