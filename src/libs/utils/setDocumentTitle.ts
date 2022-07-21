export const setDocumentTitle = (title?: string): void => {
  if (title) {
    document.title = title;
  }
};
