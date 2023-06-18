const shareBtn = document.querySelector('.author-block__share-btn');
const shareBtnImg = shareBtn.querySelector('img');
const sharePanel = document.querySelector('.share-panel');
const closeSharePanel = document.querySelector('.close-share-panel');
const previewCardContent = document.querySelector('.preview-card__content');

shareBtn.addEventListener('click', () => {
  sharePanel.classList.add('flex');
  previewCardContent.classList.add('padding-reduce');
  shareBtnImg.setAttribute('src', './images/icon-share-2.svg');
  closeSharePanel.classList.add('block');
});

closeSharePanel.addEventListener('click', () => {
  sharePanel.classList.remove('flex');
  previewCardContent.classList.remove('padding-reduce');
  shareBtnImg.setAttribute('src', './images/icon-share-1.svg');
  closeSharePanel.classList.remove('block');
});
