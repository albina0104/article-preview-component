const shareBtn = document.querySelector('.author-block__share-btn');
const shareBtnImg = shareBtn.querySelector('img');
const sharePanel = document.querySelector('.share-panel');
const previewCardContent = document.querySelector('.preview-card__content');

shareBtn.addEventListener('click', () => {
  if (sharePanel.classList.contains('flex')) {
    sharePanel.classList.remove('flex');
    previewCardContent.classList.remove('padding-reduce');
    shareBtnImg.setAttribute('src', './images/icon-share-1.svg');
  } else {
    sharePanel.classList.add('flex');
    previewCardContent.classList.add('padding-reduce');
    shareBtnImg.setAttribute('src', './images/icon-share-2.svg');
  }
});
