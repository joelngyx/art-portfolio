function openModal (elementId) {
  var el = document.getElementById(elementId);
  document.body.classList.add("stop-scrolling");

  el.showModal();
}

function closeModal (elementId) {
  var el = document.getElementById(elementId);
  document.body.classList.remove("stop-scrolling");
    
  el.close();
}

function preloadImage() {
  for (let i = 1; i < 38; i++) {
      var img = new Image();
      img.src = `assets/asset-artwork-${i}.jpg`;
      console.log(`loading ${img.src}`)
  }
}

preloadImage();
