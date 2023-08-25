const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const naviMobile = document.getElementById("nav-mobile");
const darkOverlay = document.getElementById("dark-overlay");
const cartLastInput = document.getElementById("cart-last-input");

menuBtn.addEventListener("click",()=>{
    naviMobile.classList.toggle("active");
    darkOverlay.classList.toggle("active");
})

closeBtn.addEventListener("click",()=>{
    naviMobile.classList.toggle("active");
    darkOverlay.classList.toggle("active");
})

const imageOne = document.getElementById("image-1");
const imageTwo = document.getElementById("image-2");
const imageThree = document.getElementById("image-3");
const imageFour = document.getElementById("image-4");
const previousButton = document.getElementById("button-lelf");
const nextButton = document.getElementById("button-right");

let slider = 0;

if(slider > 1){
    slider = slider-1;
} else if(slider < 0 ){
    slider = slider+1;
}

nextButton.addEventListener("click", ()=>{
    if(slider < 3){
        slider++ 
    }

    if(slider == 1){
    imageOne.style.display = 'none';
    imageTwo.style.display = 'block';  
    }else if(slider == 2){
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'block';          
    }else if(slider == 3){
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
    imageFour.style.display = 'block';          
    }
})
previousButton.addEventListener("click", ()=>{
    slider = slider-1
    if(slider < 0){
        slider++
    }
    if(slider == 0){
    imageOne.style.display = 'block';
    imageTwo.style.display = 'none';
    }else if(slider == 1){
    imageOne.style.display = 'none';
    imageTwo.style.display = 'block';
    imageThree.style.display = 'none';          
    }else if(slider == 2){
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageFour.style.display = 'none';  
    imageThree.style.display = 'block';        
    }
})

const plusButton = document.getElementById("plus-btn");
const minusButton = document.getElementById("minus-btn");
const numberOutput = document.getElementById("output-p");

let output = 0;

plusButton.addEventListener("click",()=>{
    output = output + 1;
    numberOutput.textContent = output;
})

minusButton.addEventListener("click",()=>{
    if(output > 0){
        output = output - 1;
        numberOutput.textContent = output;  
    }
})

const cartButton = document.getElementById("cart");
const cartItem = document.getElementById("cart-item");

cartButton.addEventListener("click",()=>{
    cartItem.classList.toggle("active");
})

const deleteButton = document.getElementById("delete");
const cartInside1 = document.getElementById("cart-text");
const cartInside2 = document.getElementById("cart-but");
const cartInside3 = document.getElementById("cart-div");
const outputCartOne = document.getElementById("output-cart-1");
const outputCartTwo = document.getElementById("output-cart-2");
const CartInputButton = document.getElementById("cart-button");

function CartInput(){

    const maybeInput = outputCartOne.textContent;

    if(output == 0){
        return false;
    }else if(maybeInput == ""){
        outputCartOne.textContent = output;
        const output2 = Number(output) * 125;
        cartLastInput.classList.add("blockact");
        cartLastInput.textContent = output;
        outputCartTwo.textContent = "$"+output2+".00";
        output = 0
        numberOutput.textContent = 0;
        cartInside1.classList.add("noneact");
        cartInside2.classList.add("blockact");
        cartInside3.classList.add("blockact");
    }else{
        outputCartOne.textContent = output;
        const output3 = Number(maybeInput) + Number(output)
        cartLastInput.classList.add("blockact");
        cartLastInput.textContent = output3;
        const output2 = Number(output3) * 125;
        outputCartOne.textContent = output3;
        outputCartTwo.textContent = "$"+output2+".00";
        output = 0
        numberOutput.textContent = 0;
        cartInside1.classList.add("noneact");
        cartInside2.classList.add("blockact");
        cartInside3.classList.add("blockact");
    }
}

CartInputButton.addEventListener("click",()=>{

    CartInput();
 
})

deleteButton.addEventListener("click",()=>{
    cartInside1.classList.remove("noneact");
    cartInside2.classList.remove("blockact");
    cartInside3.classList.remove("blockact");
    cartLastInput.classList.remove("blockact");
    cartLastInput.textContent = "";
    outputCartOne.textContent = "";
    outputCartTwo.textContent = "";
})

const previewOne = document.getElementById("preview-1");
const previewTwo = document.getElementById("preview-2");
const previewThree = document.getElementById("preview-3");
const previewFour = document.getElementById("preview-4");


const previewLast = document.getElementById("preview-last");
const previewClose = document.getElementById("pre-close");

let slider2 = 0;

previewOne.addEventListener("click",()=>{
    previewOne.classList.add("preview-orange");
    previewTwo.classList.remove("preview-orange");
    previewThree.classList.remove("preview-orange");
    previewFour.classList.remove("preview-orange");
    previewLast.classList.toggle("active");

    previewOne11.classList.remove("noneact");
    previewTwo22.classList.remove("blockact");
    previewThree33.classList.remove("blockact");
    previewFour44.classList.remove("blockact");
    previewOne1.classList.add("preview-orange");

    darkOverlay.classList.toggle("active");
    slider2=0;
})

previewTwo.addEventListener("click",()=>{
    previewOne.classList.remove("preview-orange");
    previewTwo.classList.add("preview-orange");
    previewThree.classList.remove("preview-orange");
    previewFour.classList.remove("preview-orange");
    previewLast.classList.toggle("active");

    previewOne1.classList.remove("preview-orange");
    previewTwo2.classList.add("preview-orange");
    previewThree3.classList.remove("preview-orange");
    previewFour4.classList.remove("preview-orange");

    previewOne11.classList.add("noneact");
    previewTwo22.classList.add("blockact");
    previewThree33.classList.remove("blockact");
    previewFour44.classList.remove("blockact");


    darkOverlay.classList.toggle("active");
    slider2=1;

})
previewThree.addEventListener("click",()=>{
    previewOne.classList.remove("preview-orange");
    previewTwo.classList.remove("preview-orange");
    previewThree.classList.add("preview-orange");
    previewFour.classList.remove("preview-orange");
    previewLast.classList.toggle("active");

    previewOne1.classList.remove("preview-orange");
    previewTwo2.classList.remove("preview-orange");
    previewThree3.classList.add("preview-orange");
    previewFour4.classList.remove("preview-orange");

    previewOne11.classList.add("noneact");
    previewTwo22.classList.remove("blockact");
    previewThree33.classList.add("blockact");
    previewFour44.classList.remove("blockact");

    darkOverlay.classList.toggle("active");
    slider2=2;
})
previewFour.addEventListener("click",()=>{
    previewOne.classList.remove("preview-orange");
    previewTwo.classList.remove("preview-orange");
    previewThree.classList.remove("preview-orange");
    previewFour.classList.add("preview-orange");
    previewLast.classList.toggle("active");

    previewOne1.classList.remove("preview-orange");
    previewTwo2.classList.remove("preview-orange");
    previewThree3.classList.remove("preview-orange");
    previewFour4.classList.add("preview-orange");

    previewOne11.classList.add("noneact");
    previewTwo22.classList.remove("blockact");
    previewThree33.classList.remove("blockact");
    previewFour44.classList.add("blockact");

    darkOverlay.classList.toggle("active");
    slider2=3;
})



previewClose.addEventListener("click",()=>{
    previewLast.classList.toggle("active");
    darkOverlay.classList.toggle("active");
    previewOne1.classList.remove("preview-orange");
    previewTwo2.classList.remove("preview-orange");
    previewThree3.classList.remove("preview-orange");
    previewFour4.classList.remove("preview-orange");
})

const previewOne1 = document.getElementById("pre-image11");
const previewTwo2 = document.getElementById("pre-image22");
const previewThree3 = document.getElementById("pre-image33");
const previewFour4 = document.getElementById("pre-image44");

const previewOne11 = document.getElementById("pre-image1");
const previewTwo22 = document.getElementById("pre-image2");
const previewThree33 = document.getElementById("pre-image3");
const previewFour44 = document.getElementById("pre-image4");

previewOne1.addEventListener("click",()=>{
    previewOne1.classList.add("preview-orange");
    previewTwo2.classList.remove("preview-orange");
    previewThree3.classList.remove("preview-orange");
    previewFour4.classList.remove("preview-orange");

    previewOne11.classList.remove("noneact");
    previewTwo22.classList.remove("blockact");
    previewThree33.classList.remove("blockact");
    previewFour44.classList.remove("blockact");

    slider2=0;
})

previewTwo2.addEventListener("click",()=>{
    previewOne1.classList.remove("preview-orange");
    previewTwo2.classList.add("preview-orange");
    previewThree3.classList.remove("preview-orange");
    previewFour4.classList.remove("preview-orange");

    previewOne11.classList.add("noneact");
    previewTwo22.classList.add("blockact");
    previewThree33.classList.remove("blockact");
    previewFour44.classList.remove("blockact");
    slider2=1;
})
previewThree3.addEventListener("click",()=>{
    previewOne1.classList.remove("preview-orange");
    previewTwo2.classList.remove("preview-orange");
    previewThree3.classList.add("preview-orange");
    previewFour4.classList.remove("preview-orange");

    previewOne11.classList.add("noneact");
    previewTwo22.classList.remove("blockact");
    previewThree33.classList.add("blockact");
    previewFour44.classList.remove("blockact");
    slider2=2;
})
previewFour4.addEventListener("click",()=>{
    previewOne1.classList.remove("preview-orange");
    previewTwo2.classList.remove("preview-orange");
    previewThree3.classList.remove("preview-orange");
    previewFour4.classList.add("preview-orange");

    previewOne11.classList.add("noneact");
    previewTwo22.classList.remove("blockact");
    previewThree33.classList.remove("blockact");
    previewFour44.classList.add("blockact");
    slider2=3;

})

const previousButton2 = document.getElementById("button-lelf-1");
const nextButton2 = document.getElementById("button-right-1");




nextButton2.addEventListener("click", ()=>{
    if(slider2 < 3){
        slider2++ 
    }
    if(slider2==0){
    previewOne11.classList.remove("noneact");
    previewTwo22.classList.remove("blockact");
    previewThree33.classList.remove("blockact");
    previewFour44.classList.remove("blockact");

    previewOne1.classList.add("preview-orange");
    previewTwo2.classList.remove("preview-orange");
    previewThree3.classList.remove("preview-orange");
    previewFour4.classList.remove("preview-orange");
    }else if(slider2 == 1){
    previewOne11.classList.add("noneact");
    previewTwo22.classList.add("blockact");
    previewThree33.classList.remove("blockact");
    previewFour44.classList.remove("blockact");

    previewOne1.classList.remove("preview-orange");
    previewTwo2.classList.add("preview-orange");
    previewThree3.classList.remove("preview-orange");
    previewFour4.classList.remove("preview-orange");
    }else if(slider2 == 2){
    previewOne11.classList.add("noneact");
    previewTwo22.classList.remove("blockact");
    previewThree33.classList.add("blockact");
    previewFour44.classList.remove("blockact"); 

    previewOne1.classList.remove("preview-orange");
    previewTwo2.classList.remove("preview-orange");
    previewThree3.classList.add("preview-orange");
    previewFour4.classList.remove("preview-orange");
           
    }else if(slider2 == 3){
    previewOne11.classList.add("noneact");
    previewTwo22.classList.remove("blockact");
    previewThree33.classList.remove("blockact");
    previewFour44.classList.add("blockact");   

    previewOne1.classList.remove("preview-orange");
    previewTwo2.classList.remove("preview-orange");
    previewThree3.classList.remove("preview-orange");
    previewFour4.classList.add("preview-orange");
    }
})
previousButton2.addEventListener("click", ()=>{
    slider2 = slider2-1
    if(slider2 < 0){
        slider2++
    }
    if(slider2==0){
        previewOne11.classList.remove("noneact");
        previewTwo22.classList.remove("blockact");
        previewThree33.classList.remove("blockact");
        previewFour44.classList.remove("blockact");
    
        previewOne1.classList.add("preview-orange");
        previewTwo2.classList.remove("preview-orange");
        previewThree3.classList.remove("preview-orange");
        previewFour4.classList.remove("preview-orange");
        }else if(slider2 == 1){
        previewOne11.classList.add("noneact");
        previewTwo22.classList.add("blockact");
        previewThree33.classList.remove("blockact");
        previewFour44.classList.remove("blockact");
    
        previewOne1.classList.remove("preview-orange");
        previewTwo2.classList.add("preview-orange");
        previewThree3.classList.remove("preview-orange");
        previewFour4.classList.remove("preview-orange");
        }else if(slider2 == 2){
        previewOne11.classList.add("noneact");
        previewTwo22.classList.remove("blockact");
        previewThree33.classList.add("blockact");
        previewFour44.classList.remove("blockact"); 
    
        previewOne1.classList.remove("preview-orange");
        previewTwo2.classList.remove("preview-orange");
        previewThree3.classList.add("preview-orange");
        previewFour4.classList.remove("preview-orange");
               
        }else if(slider2 == 3){
        previewOne11.classList.add("noneact");
        previewTwo22.classList.remove("blockact");
        previewThree33.classList.remove("blockact");
        previewFour44.classList.add("blockact");   
    
        previewOne1.classList.remove("preview-orange");
        previewTwo2.classList.remove("preview-orange");
        previewThree3.classList.remove("preview-orange");
        previewFour4.classList.add("preview-orange");
        }
})


