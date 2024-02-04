const allBoxes = document.querySelectorAll('.box')
const body = document.querySelector('body')
console.log(allBoxes);
console.log("Hello World");
allBoxes.forEach((box)=>{
    // console.log(box);
    box.addEventListener('click', (e)=>{
        // console.log(e);
        // console.log(e.target.id);
        switch(e.target.id)
        {
            case "box-1":
                body.style.backgroundColor = 'yellow';
                break;
            case "box-2":
                    body.style.backgroundColor = 'green';
                    break;
            case "box-3":
                    body.style.backgroundColor = 'red';
                    break;
            case "box-4":
                    body.style.backgroundColor = 'blue';
                    break;
            case "reset":
                body.style.backgroundColor = '#bbb8b8';
                break;
        }

    })
})