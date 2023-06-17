const shareBtn = document.getElementById('author-block__share-btn');
const sharePanel = document.querySelector('.share-panel');
const previewCardContent = document.querySelector('.preview-card__content');

shareBtn.addEventListener('click', () => {
  if (sharePanel.classList.contains('flex')) {
    sharePanel.classList.remove('flex');
    previewCardContent.classList.remove('padding-reduce');
  } else {
    sharePanel.classList.add('flex');
    previewCardContent.classList.add('padding-reduce');
  }
});
