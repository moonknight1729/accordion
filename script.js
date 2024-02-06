let btns = document.querySelectorAll(".btn");

btns.forEach(function myFunc(item) {
  const icon_img = item.querySelector(".icon");
  const ans_class = item.classList[1];
  const answer = document.getElementById(ans_class);

  item.addEventListener("click", function () {
    if (icon_img.classList[1] == "plus") {
      icon_img.src = "assets/images/icon-minus.svg";
      answer.classList.remove('hidden');
      answer.classList.add('unhidden');
      icon_img.classList.remove("plus");
      icon_img.classList.add("minus");
    } 
    
    else {
      icon_img.src = "assets/images/icon-plus.svg";
      answer.classList.remove('unhidden');
      answer.classList.add('hidden');
      icon_img.classList.remove("minus");
      icon_img.classList.add("plus");
    }
  });
});
