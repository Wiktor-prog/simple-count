let count = 0

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
 
btns.forEach(function (btn) {
  btn.addEventListener("click", function (check) {
    const styles = check.currentTarget.classList;
    if(styles.contains('increase')){
      count++; 
      value.style.textColor = "red";
    }
    else if (styles.contains('decrease')){
      count--;
    }
    else {
      count = 0
    }
    value.textContent = count
  });
});

