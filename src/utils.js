// eslint-disable-next-line import/prefer-default-export
export function colorVariant(props) {
  if (props.primary) {
    return props.theme.primaryColor;
  }
  if (props.warning) {
    return props.theme.warningColor;
  }
  if (props.danger) {
    return props.theme.negativeColor;
  }
  if (props.success) {
    return props.theme.positiveColor;
  }
  return props.theme.whiteColor;
}

export function copyToClipboard(text) {
  const { scrollTop } = document.scrollingElement;
  const textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  textarea.value = text;
  textarea.focus();
  textarea.select();
  document.execCommand('copy');
  textarea.remove();

  // Reset the scroll position to the initial value, since appending to the
  // document may change the scroll position.
  window.scrollTo(0, scrollTop);
}

export function download(text, filename) {
  const element = document.createElement('a');
  const content = encodeURIComponent(text);
  element.setAttribute('href', `data:text/plain;charset=utf-8,${content}`);
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
