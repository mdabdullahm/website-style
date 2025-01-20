const buttons = {
    dogsBtn: "dogs",
    catsBtn: "cats",
    rabbitsBtn: "rabbits",
    birdsBtn: "birds"
  };

  const hideAll = () => {
    document.querySelectorAll(".imgstyles").forEach(div => {
      div.style.display = "none";
    });
  };

  for (let buttonId in buttons) {
    document.getElementById(buttonId).addEventListener("click", () => {
      hideAll();
      document.getElementById(buttons[buttonId]).style.display = "flex";
    });
  }


  window.onload = function() {
      const showImage = 
      JSON.parse(localStorage.getItem('showImage')) || [];
      const likedContainer = 
      document.getElementById("liked-container");

      likedImages.forEach(function(imageSrc){
          const newImage = 
          document.createElement("img");
          newImage.src = imageSrc;
          newImage.style.maxWidth = 
          '150px';
          newImage.style.objectFit = 
          'cover';
          likedContainer.appendChild(newImage);
      });
  };

  function showImage(imageSrc) {
      const likedContainer = 
      document.getElementById("liked-container");
      const newImage = 
      document.createElement("img");
      newImage.src = imageSrc;
      newImage.style.maxWidth = 
      '150px';
      newImage.style.maxHeight = 
      '150px';
      newImage.style.objectFit = 
      'cover'
      likedContainer.appendChild(newImage);
      let showImage = 
      JSON.parse(localStorage.getItem('liked-images')) || [];
      likedImages.push(imageSrc);
      localStorage.setItem('showImage'),
      JSON.stringify(likedImages);
  }