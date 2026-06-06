'use client';

import React, { useState, useEffect } from 'react';
import { getNews, deleteNews, toggleNewsStatus, addNews, updateNews } from './actions';
import { Plus, Trash2, Eye, EyeOff, Edit2 } from 'lucide-react';

export default function NewsAdminDashboard() {
  const [news, setNews] = useState<any[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    date: '',
    category: 'お知らせ',
    title: '',
    image: '/image/zimu1.jpg',
    period: ''
  });

  const loadNews = async () => {
    const data = await getNews();
    setNews(data);
  };

  useEffect(() => {
    loadNews();
  }, []);

  const handleToggle = async (id: number) => {
    await toggleNewsStatus(id);
    await loadNews();
  };

  const handleDelete = async (id: number) => {
    if (confirm('本当に削除しますか？')) {
      await deleteNews(id);
      await loadNews();
    }
  };

  const handleEdit = (item: any) => {
    setFormData({
      date: item.date,
      category: item.category,
      title: item.title,
      image: item.image,
      period: item.period
    });
    setEditingId(item.id);
    setIsAdding(true);
  };

  const resetForm = () => {
    setFormData({
      date: '',
      category: 'お知らせ',
      title: '',
      image: '/image/zimu1.jpg',
      period: ''
    });
    setIsAdding(false);
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      await updateNews(editingId, formData);
    } else {
      await addNews(formData);
    }
    resetForm();
    await loadNews();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">新着お知らせ管理ダッシュボード</h1>
          {!isAdding && (
            <button 
              onClick={() => setIsAdding(true)}
              className="flex items-center px-4 py-2 bg-brand-navy text-white rounded hover:bg-slate-800 transition-colors"
            >
              <Plus size={18} className="mr-2" />
              新規追加
            </button>
          )}
        </div>

        {isAdding && (
          <div className="bg-white p-6 rounded-xl shadow-md mb-8 border border-slate-200">
            <h2 className="text-xl font-bold mb-4">{editingId ? 'お知らせの編集' : '新規お知らせ追加'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">日付 (例: 2026.06.01)</label>
                  <input required type="text" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full border border-slate-300 rounded p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">カテゴリー</label>
                  <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full border border-slate-300 rounded p-2">
                    <option value="お知らせ">お知らせ</option>
                    <option value="キャンペーン">キャンペーン</option>
                    <option value="イベント">イベント</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">タイトル</label>
                  <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full border border-slate-300 rounded p-2" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">期間・補足テキスト</label>
                  <input type="text" value={formData.period} onChange={e => setFormData({...formData, period: e.target.value})} className="w-full border border-slate-300 rounded p-2" placeholder="例: 開催期間：2026年6月1日〜" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">画像パス (デフォルト: /image/zimu1.jpg)</label>
                  <input type="text" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full border border-slate-300 rounded p-2" />
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button type="button" onClick={resetForm} className="px-4 py-2 border border-slate-300 text-slate-700 rounded hover:bg-slate-50">キャンセル</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">{editingId ? '更新する' : '保存する'}</button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">状態</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">日付</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">カテゴリー</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">タイトル</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {news.map((item) => (
                <tr key={item.id} className={item.status === 'draft' ? 'bg-slate-50 opacity-60' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-slate-200 text-slate-800'}`}>
                      {item.status === 'published' ? '公開中' : '非公開'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{item.category}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900 max-w-xs truncate" title={item.title}>{item.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      onClick={() => handleToggle(item.id)}
                      className={`mr-4 ${item.status === 'published' ? 'text-amber-600 hover:text-amber-900' : 'text-green-600 hover:text-green-900'}`}
                      title={item.status === 'published' ? '非公開にする' : '公開する'}
                    >
                      {item.status === 'published' ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                    <button 
                      onClick={() => handleEdit(item)}
                      className="mr-4 text-blue-600 hover:text-blue-900"
                      title="編集"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-900"
                      title="削除"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {news.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                    お知らせがありません。
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
