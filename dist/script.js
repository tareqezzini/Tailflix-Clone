const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
     btn.addEventListener('click' , ()=> 
     {
          if(document.querySelector(btn.dataset.id).classList.contains('active'))
          {
               document.querySelector(btn.dataset.id).style.height = "0";     
               document.querySelector(btn.dataset.id).style.padding = "0";
               document.querySelector(btn.dataset.id).classList.remove("active");
               btn.firstElementChild.style.transform = 'rotate(0)';
          }else
          {
               if(document.querySelector('.active'))
               {
                    document.querySelector('.active').style.height = "0";     
                    document.querySelector('.active').style.padding = "0";
                    document.querySelector('.active').classList.remove("active");
                    btns.forEach(btn => {
                         btn.firstElementChild.style.transform = 'rotate(0)';
                    })
               }
               document.querySelector(btn.dataset.id).classList.add("active");
               document.querySelector('.active').style.padding = "1rem";
               document.querySelector('.active').style.height = "100%";
               btn.firstElementChild.style.transform = 'rotate(45deg)';
          }
          
     })
})