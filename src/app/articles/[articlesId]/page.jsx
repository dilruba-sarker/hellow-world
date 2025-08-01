import Link from 'next/link';
import React from 'react';

export default function NewsArticles({ params, searchParams }) {
  const { articlesId } = params;
  const lang = searchParams?.lang || 'en'; // ✅ Don't await

  return (
    <div>
      <h1>News Article ID: {articlesId}</h1>
      <p>Reading Language: {lang}</p>

      <div>
        <Link href={`/articles/${articlesId}?lang=en`}>English</Link> |{' '}
        <Link href={`/articles/${articlesId}?lang=es`}>Spanish</Link> |{' '}
        <Link href={`/articles/${articlesId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
