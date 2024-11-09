const playButton = document.querySelector('.video__play-button');

const playButtonClickHandler = () => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('height', '100%');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('loading', 'lazy');

  const videoFrame = document.querySelector('.video__video-iframe');
  videoFrame.innerHTML = '';
  videoFrame.appendChild(iframe);
  videoFrame.classList.add('video__video-iframe--playing');

  const thumbnail = document.querySelector('.video__preview-wrapper');
  thumbnail.classList.add('video__preview-wrapper--playing');

  playButton.classList.add('video__play-button--playing');
};

export const LazyLoadVideo = () => {
  if (playButton) {
    playButton.addEventListener('click', playButtonClickHandler);
  }
};
