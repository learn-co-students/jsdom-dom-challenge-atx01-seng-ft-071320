    const counter = document.getElementById("counter")
    var i = 0

    const minus = document.getElementById("minus")
    const plus = document.getElementById("plus")
    const heart = document.getElementById("heart")
    const pause = document.getElementById("pause")
    const commentForm = document.getElementById("comment-form")
    const commentInput = document.getElementById("comment-input")
    const submit = document.getElementById("submit")
    const interval = setInterval(function() {
        counter.innerText = i;
        i+=1;
    }, 1000); 

document.addEventListener("DOMContentLoaded", (event) => {
    interval;
    //User can see the timer increment every second

    minus.addEventListener("click", function(e) {
        i-=1;
    });
    //User can decrement counter manually
    
    plus.addEventListener("click", function(e) {
        i+=1;
    });
    //User can increment counter manually
    
    heart.addEventListener("click", function(e) {
        const likes = document.getElementById("likes")
        const li = document.createElement("li")
        //create <li></li>
        li.innerText = counter.innerText
        //<li>counter.innerText</li>
        likes.appendChild(li)
    });
    //User can add the time on the list by clicking heart button

    pause.addEventListener("click", function(e) {
        if (pause.innerHTML == "pause"){
            clearInterval(interval)
            pause.innerHTML = "resume"
            minus.disabled = true
            plus.disabled = true
            heart.disabled = true
            submit.disabled = true
        } else {

            pause.innerHTML = "pause"
            minus.disabled = false
            plus.disabled = false
            heart.disabled = false
            submit.disabled = false  
        }
    });
    //User can pause timer

    commentForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const commentList = document.getElementById("list")
        const p = document.createElement("p")
        p.innerText = commentInput.value
        list.appendChild(p)
    });
    //User can comment
});
