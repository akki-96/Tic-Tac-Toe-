let count = 1;
function fill(control){
    if(count<=9){
    if(count%2!=0){
       document.getElementById(control.id).innerHTML="X"
      }
    else{
        document.getElementById(control.id).innerHTML="O"
      }
      count++;
      if(winner())
      {
         alert("Congratulations! Player1 wins!!!");
      }
     
    }
    else{
         alert("Match has been DRAWN!!!")
         reset();
    }   
}

function reset()
{
    for(let i=1;i<=9;i++)
    {
      document.getElementById('div'+i).innerHTML=""; 
    }
    count=1;
}

function winner()
{
    if(getData('div1')!="" && getData('div2')!="" && getData('div3')!="" && getData('div1')==getData('div2') &&  getData('div2')==getData('div3'))
     {
         return true;
     }

    else if(getData('div4')!="" && getData('div5')!="" && getData('div6')!="" && getData('div4')==getData('div5') &&  getData('div5')==getData('div6'))
     {
         return true;
     }

    else if(getData('div7')!="" && getData('div8')!="" && getData('div9')!="" && getData('div7')==getData('div8') &&  getData('div8')==getData('div9'))
    {
        return true;
    }
    
    else if(getData('div1')!="" && getData('div4')!="" && getData('div7')!="" && getData('div1')==getData('div4') &&  getData('div4')==getData('div7'))
    {
        return true;
    }

    else if(getData('div2')!="" && getData('div5')!="" && getData('div8')!="" && getData('div2')==getData('div5') &&  getData('div5')==getData('div8'))
    {
        return true;
    }

    else if(getData('div3')!="" && getData('div6')!="" && getData('div9')!="" && getData('div3')==getData('div6') &&  getData('div6')==getData('div9'))
    {
        return true;
    }
    
    else if(getData('div1')!="" && getData('div5')!="" && getData('div9')!="" && getData('div1')==getData('div5') &&  getData('div5')==getData('div9'))
    {
        return true;
    }

    else if(getData('div3')!="" && getData('div5')!="" && getData('div7')!="" && getData('div3')==getData('div5') &&  getData('div5')==getData('div7'))
    {
        return true;
    }
}

function getData(div){
   return document.getElementById(div).innerHTML;
}

function restartGame(){
    for(let i=1;i<=9;i++)
    {
        document.getElementById('div'+i).innerHTML=""; 
    }
    document.getElementById("displayResult").innerHTML=""
}