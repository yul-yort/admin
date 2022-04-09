import { useState } from "react";

/**
 * Отслеживает и возвращает измененный заголовок страницы.
 */
export const useTitle = (): string => {
  const [title, setTitle] = useState<string>(document.title || "");

  const target = document.querySelector("title");

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function () {
      setTitle(document.title);
    });
  });

  const config = {
    childList: true,
  };

  if (target) {
    observer.observe(target, config);
  }

  return title;
};
