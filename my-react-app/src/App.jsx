import BlogCard from "./components/BlogCard";

export default function App() {
  return (
    <main>
      <BlogCard
        image="/public/assets/images/Blog Image.png"
        category="node.js & React"
        title="Практична робота №9"
        description="Мета практичної роботи полягає в тому, щоб реалізувати картку блогу в середовищі React, застосувавши набуті знання."
        author="Софія Волинець"
      />
    </main>
  );
}
