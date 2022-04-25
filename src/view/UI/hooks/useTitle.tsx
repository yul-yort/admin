import { useState } from "react";
import { setDocumentTitle } from "src/libs/utils";

interface IUseTitleReturn {
  title: string;
  setTitle: (title: string) => void;
}

// TODO вынести эту логику в AppVM или AppVM не должен знать о браузере ничего?
/**
 * Отслеживает и возвращает измененный заголовок страницы.
 */
export const useTitle = (): IUseTitleReturn => {
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

  return { title, setTitle: setDocumentTitle };
};
