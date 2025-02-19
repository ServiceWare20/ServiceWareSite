// Animation on scroll

// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);


// Toggle buy menu

        // Open the menu when User clicks on button
        const menu = document.querySelectorAll("#menu");
        const openMenuButton = document.querySelectorAll("#openMenu");
        const menuContainer = document.getElementById("menuContainer");
        const submitButton = document.getElementById("exampleFormControlTextarea1");

        var serviciu, price;
        openMenuButton.forEach((button) =>{
        button.addEventListener("click", (event)=>{
          // Prevent the click event from reaching the document
          event.stopPropagation(); 
          menuContainer.classList.remove("hidden");
          
          serviciu = button.value;
          
          submitButton.value = serviciu;
          
          console.log(serviciu);
          document.getElementById("HtmlServiciu").innerHTML = `Pachet selectat: ${serviciu}`;
          menu.forEach((element) =>{
            element.classList.add("blur");
          });

        });

       });



// Close the menu when the user clicks on the blurred background
menuContainer.addEventListener("click", (event) => {
  // Prevent the click event from reaching the document
  event.stopPropagation(); 
});

       // Close the menu when the user clicks on the blurred background
      
       document.addEventListener("click", (event) => {
        if (!menuContainer.classList.contains("hidden")) {
          if(event.target != menuContainer)
            menuContainer.classList.add("hidden");
            menu.forEach((element) => {
                element.classList.remove("blur");
            });
        }
    });
;



//  For changing the price on the page and the price in the mail
// It changes the value of an element that is going to be sent in the mail 
// For the Level-Up Pack

document.querySelectorAll('div#lvl > .form-check-input').forEach(item => {
  item.addEventListener('change', updatePrice);
});

function updatePrice() {
  let basePrice = 50;
  let price = basePrice;

  let code = 0;

  document.querySelectorAll('div#lvl > .form-check-input:checked').forEach(item => {
    price += parseInt(item.value);
    code += parseInt(item.getAttribute('code'));

    // console.log(code);
  });

  // document.querySelectorAll('.form-check-input:checked').forEach(item => {
  //   code += parseInt(item.code);
  //   // code += parseInt(item.code);
  //   console.log(parseInt(item.code));
  // });

  document.getElementById('price').textContent = 'Pret final: ' + price + ' RON';
  const totalPriceElement = document.getElementById('price');
  // const itemsCode = document.getElementById('');
  totalPriceElement.textContent = 'Pret final: ' + price + ' RON';
  totalPriceElement.setAttribute('value', price); // 0
  totalPriceElement.setAttribute('code', code); // 0


  const emailPrice = document.getElementById('hiddenSendPrice');
  emailPrice.value = price;

  const emailCode = document.getElementById('lvlCodes');
  emailCode.value = code;

  //emailPrice.setAttribute('value', price);
  
  console.log(totalPriceElement.getAttribute('value'));
  console.log(totalPriceElement.getAttribute('code'));
  console.log(emailCode.value);

  // Level-up Pack, add the component to a string using the id
}











  // For the Pixel Purity Pack

document.querySelectorAll('div#pixel > .form-check-input').forEach(item => {
  item.addEventListener('change', updatePricePixel);
});

function updatePricePixel() {
  let basePrice = 0;
  let pixelPrice = basePrice;

  let code = 0;

  document.querySelectorAll('div#pixel > .form-check-input:checked').forEach(pixel => {
    pixelPrice += parseInt(pixel.value);
    code += parseInt(pixel.getAttribute('pixelCode'));

    // console.log(code);
  });

  // document.querySelectorAll('.form-check-input:checked').forEach(item => {
  //   code += parseInt(item.code);
  //   // code += parseInt(item.code);
  //   console.log(parseInt(item.code));
  // });

  document.getElementById('PixelPrice').textContent = 'Pret final: ' + pixelPrice + ' RON';
  const totalPriceElement = document.getElementById('PixelPrice');
  const itemsCode = document.getElementById('');
  totalPriceElement.textContent = 'Pret final: ' + pixelPrice + ' RON';
  totalPriceElement.setAttribute('value', pixelPrice); // 0
  totalPriceElement.setAttribute('code', code); // 0


  const emailPrice = document.getElementById('sendPixelPrice');
  emailPrice.value = pixelPrice;

  const emailCode = document.getElementById('pixelCodes');
  emailCode.value = code;

  //emailPrice.setAttribute('value', price);
  
  console.log(totalPriceElement.getAttribute('value'));
  console.log(totalPriceElement.getAttribute('code'));
  console.log(emailCode.value);

}





