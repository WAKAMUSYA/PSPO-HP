'use server';

import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';

const filePath = path.join(process.cwd(), 'src', 'data', 'news.json');

export async function getNews() {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Failed to read news.json', error);
    return [];
  }
}

export async function saveNews(newsData: any[]) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(newsData, null, 2), 'utf8');
    revalidatePath('/');
    revalidatePath('/admin/news');
    return { success: true };
  } catch (error) {
    console.error('Failed to write news.json', error);
    return { success: false, error: 'Failed to save data' };
  }
}

export async function toggleNewsStatus(id: number) {
  const news = await getNews();
  const index = news.findIndex((n: any) => n.id === id);
  if (index !== -1) {
    news[index].status = news[index].status === 'published' ? 'draft' : 'published';
    await saveNews(news);
  }
}

export async function deleteNews(id: number) {
  const news = await getNews();
  const filtered = news.filter((n: any) => n.id !== id);
  await saveNews(filtered);
}

export async function addNews(data: any) {
  const news = await getNews();
  const newId = news.length > 0 ? Math.max(...news.map((n: any) => n.id)) + 1 : 1;
  const newItem = {
    id: newId,
    ...data,
    status: 'published'
  };
  news.unshift(newItem); // Add to beginning
  await saveNews(news);
}

export async function updateNews(id: number, data: any) {
  const news = await getNews();
  const index = news.findIndex((n: any) => n.id === id);
  if (index !== -1) {
    news[index] = { ...news[index], ...data };
    await saveNews(news);
  }
}
