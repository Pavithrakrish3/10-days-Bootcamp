const con = document.getElementById('container')
const arr=["./assets/bat3.jpg",
    "./assets/bat1.jpg",
    "./assets/bat2.webp",
]
    let i=1;
    let changeimg=()=>{
        if(i==3)
        {
            i=0;
        }
        con.style.backgroundImage=`url('${arr[i]}')`;
        i++;
    }