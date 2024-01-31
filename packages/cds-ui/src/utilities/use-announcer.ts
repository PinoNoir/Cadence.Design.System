export function useAnnouncer(textCount, maxCount) {
  const lastTen = maxCount - 10;
  if (textCount >= lastTen) {
    return `${maxCount - textCount} characters left.`;
  }
}
