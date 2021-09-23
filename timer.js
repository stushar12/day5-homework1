

var text=document.getElementsByClassName("para")
var button=document.getElementsByClassName("button1")


var timer=11;

var countdown=function countdown()
{
button[0].disabled=true;
    setTimeout(function()
    {
        text[0].innerHTML=--timer
        setTimeout(function()
        {
            text[0].innerHTML=--timer
            setTimeout(function () 
            {
                text[0].innerHTML=--timer
                setTimeout(function () 
                {
                    text[0].innerHTML=--timer  
                    setTimeout(function()
                    {
                        text[0].innerHTML=--timer
                        setTimeout(function()
                        {
                            text[0].innerHTML=--timer
                            setTimeout(function()
                            {
                                text[0].innerHTML=--timer
                                setTimeout(function()
                                {
                                    text[0].innerHTML=--timer
                                    setTimeout(function()
                                    {
                                        text[0].innerHTML=--timer
                                        setTimeout(function()
                                        {
                                            text[0].innerHTML=--timer
                                            setTimeout(function()
                                            {
                                                hb();
                                                button[0].disabled=false;
                                                timer=11;
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000) 
                },1000)
            },1000)
        },1000)
    },1000)

}



function hb()
{
    text[0].innerHTML="Happy Birthday!!!"
}
