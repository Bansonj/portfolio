var x = document.getElementById("resNav");
                x.addEventListener('click',function(){
                    if(x.className === "res-nav"){
                        x.className += " responsive";
                    }
                    else{
                        x.className = "res-nav";
                    }
                });