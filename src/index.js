const flkty = new Flickity('.side-menu', {
  prevNextButtons: false,
  pageDots: false,
  cellAlign: 'left',
  setGallerySize: false,
  initialIndex: 1
});

flkty.on('scroll', (progress) => {
  if(progress.toFixed(4) < 0) {
    flkty.select(0, false, true);
  }
});

overlay.addEventListener('click', (e) => {
  flkty.select(1, false, false);
});

sideMenuBtn.addEventListener('click', (e) => {
  const newIndex = (flkty.selectedIndex + 1) % 2;
  flkty.select(newIndex, false, false);
});
