export function focus(elementOrRef) {
  const element = elementOrRef.current || elementOrRef;
  if (element && element.focus && document.activeElement !== element) {
    element.focus();
  }
}
