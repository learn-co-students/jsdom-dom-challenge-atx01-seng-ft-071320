// document.addEventListener('DOMContentLoaded', () => {
//     pauseButton.addEventListener('click', stopTimer)
// })

const intervalId = window.setInterval(incrementTimer, 1000)
const counter = document.querySelector('#counter')
const pauseButton = document.querySelector('#pause')
const plusButton = document.querySelector('#plus')
const minusButton = document.querySelector('#minus')
const likeNumButton = document.querySelector('#heart')
const submitButton = document.querySelector('#submit')
const list = document.querySelector('.likes')
const commentForm = document.querySelector('#comment-form')
const commentList = document.querySelector('#list')


//functions
function incrementTimer() {
    counter.innerHTML = parseInt(counter.innerHTML) + 1
}

function stopTimer() {
    if (pauseButton.innerText == "pause") {
        clearInterval(intervalId);
        pauseButton.innerText = "resume";
        disableButtons();
    } else {
        window.setInterval(incrementTimer, 1000);// doesn't work correctly 
        pauseButton.innerText = "pause";
        enableButtons();
    }
}

function addSecond() {
    counter.innerHTML = parseInt(counter.innerHTML) + 1
}

function subtractSecond() {
    counter.innerHTML = parseInt(counter.innerHTML) - 1
}

function likeNumber() {

    like = document.createElement('li')
    like.innerHTML = `${counter.innerHTML} has been liked x time`
    list.append(like)
}

function submitComment(e) {
    e.preventDefault()
    const comment = document.createElement('p')
    comment.innerHTML = e.target.comment.value
    commentList.append(comment)
}

function disableButtons() {
    plusButton.disabled = true;
    minusButton.disabled = true;
    likeNumButton.disabled = true;
    submitButton.disabled = true;
}
function enableButtons() {
    plusButton.disabled = false;
    minusButton.disabled = false;
    likeNumButton.disabled = false;
    submitButton.disabled = false;
}

//Event listeners
pauseButton.addEventListener('click', stopTimer)

plusButton.addEventListener('click', addSecond)

minusButton.addEventListener('click', subtractSecond)

likeNumButton.addEventListener('click', likeNumber)

document.addEventListener('submit', submitComment)


//Good proportion of functionality solved, couldn't get pause/resume to work correctly
//like functionality is solved completely