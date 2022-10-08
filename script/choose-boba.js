let breakfast = document.querySelector("#boba1-opt");
let lunch = document.querySelector("#boba2-opt");
let dinner = document.querySelector("#boba3-opt");
let beverage = document.querySelector("#boba4-opt");
let desserts = document.querySelector("#boba5-opt");
let fruit = document.querySelector("#boba6-opt");


breakfast.addEventListener('mouseover', function () {
    // console.log("hehre");
    let item6 = document.querySelector("#boba6");
    let item5 = document.querySelector("#boba5");
    let item4 = document.querySelector("#boba1");
    let item3 = document.querySelector("#boba2");
    let item2 = document.querySelector("#boba3");
    let item = document.querySelector("#boba4");
    item6.style.display = "none";
    item5.style.display = "none";
    item4.style.display = "none";
    item3.style.display = "none";
    item2.style.display = "none";
    item.style.display = "block";
  });
  
  lunch.addEventListener('mouseover', function () {
    let item6 = document.querySelector("#boba6");
    let item5 = document.querySelector("#boba5");
    let item4 = document.querySelector("#boba1");
    let item3 = document.querySelector("#boba2");
    let item2 = document.querySelector("#boba3");
    let item = document.querySelector("#boba4");
    item6.style.display = "none";
    item5.style.display = "none";
    item4.style.display = "none";
    item3.style.display = "none";
    item2.style.display = "block";
    item.style.display = "none";
  });
  
  dinner.addEventListener('mouseover', function () {
    let item6 = document.querySelector("#boba6");
    let item5 = document.querySelector("#boba5");
    let item4 = document.querySelector("#boba1");
    let item3 = document.querySelector("#boba2");
    let item2 = document.querySelector("#boba3");
    let item = document.querySelector("#boba4");
    item6.style.display = "none";
    item5.style.display = "none";
    item4.style.display = "none";
    item3.style.display = "block";
    item2.style.display = "none";
    item.style.display = "none";
  });
  
  beverage.addEventListener('mouseover', function () {
    let item6 = document.querySelector("#boba6");
    let item5 = document.querySelector("#boba5");
    let item4 = document.querySelector("#boba1");
    let item3 = document.querySelector("#boba2");
    let item2 = document.querySelector("#boba3");
    let item = document.querySelector("#boba4");
    item6.style.display = "none";
    item5.style.display = "none";
    item4.style.display = "block";
    item3.style.display = "none";
    item2.style.display = "none";
    item.style.display = "none";
  });

  desserts.addEventListener('mouseover', function () {
    let item6 = document.querySelector("#boba6");
    let item5 = document.querySelector("#boba5");
    let item4 = document.querySelector("#boba1");
    let item3 = document.querySelector("#boba2");
    let item2 = document.querySelector("#boba3");
    let item = document.querySelector("#boba4");
    item6.style.display = "none";
    item5.style.display = "block";
    item4.style.display = "none";
    item3.style.display = "none";
    item2.style.display = "none";
    item.style.display = "none";
  });

  fruit.addEventListener('mouseover', function () {
    let item6 = document.querySelector("#boba6");
    let item5 = document.querySelector("#boba5");
    let item4 = document.querySelector("#boba1");
    let item3 = document.querySelector("#boba2");
    let item2 = document.querySelector("#boba3");
    let item = document.querySelector("#boba4");
    item6.style.display = "block";
    item5.style.display = "none";
    item4.style.display = "none";
    item3.style.display = "none";
    item2.style.display = "none";
    item.style.display = "none";
  });