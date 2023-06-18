const shareBtn = document.querySelector('.author-block__share-btn');
const shareBtnImg = shareBtn.querySelector('img');
const sharePanel = document.querySelector('.share-panel');
const sharePanelClose = document.querySelector('.share-panel-close');
const previewCardContent = document.querySelector('.preview-card__content');

shareBtn.addEventListener('click', () => {
  if (sharePanel.classList.contains('flex')) {
    closeSharePanel();
  } else {
    openSharePanel();
  }
});

sharePanelClose.addEventListener('click', closeSharePanel);

function closeSharePanel() {
  sharePanel.classList.remove('flex');
  previewCardContent.classList.remove('padding-reduce');
  shareBtnImg.setAttribute('src', './images/icon-share-1.svg');
  sharePanelClose.classList.remove('block');
}

function openSharePanel() {
  sharePanel.classList.add('flex');
  previewCardContent.classList.add('padding-reduce');
  shareBtnImg.setAttribute('src', './images/icon-share-2.svg');
  sharePanelClose.classList.add('block');
}
