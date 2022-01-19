document.addEventListener('DOMContentLoaded', (event) => {
    const thumbnailElement = document.getElementById('smart_thumbnail')
    if (thumbnailElement) {
      thumbnailElement.addEventListener('click', () => {
        if (thumbnailElement.className == "small") {
          thumbnailElement.className = "big";
          alert("Big image");
        } else {
          thumbnailElement.className = "small";
          alert("small image");
        }
      })
    }
  });