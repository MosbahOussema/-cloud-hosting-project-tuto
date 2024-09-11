import ArticleItem from "@/components/articles/ArticleItem";
import { Articles } from "@/utils/types";
import Link from "next/link";
import React from "react";

const ArticlesPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles: Articles[] = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  return (
    <section className="container m-auto px-5">
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articles.map((item) => (
          <ArticleItem article={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default ArticlesPage;
