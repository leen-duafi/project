let reviews = [];

function review(name, place) {

    this.name = name;
    this.place = place;
    this.reviews.push(this);

}

///////////function for the text area

function getText() {

    // https://www.encodedna.com/javascript/how-to-get-all-textarea-in-a-form-using-javascript.htm
    let text = document.getElementsByTagName("textarea");

    for (let i = 0; i <= text.length - 1; i++) {
        if (text[i].value != '')
            console.log(text[i].value);
        else {
            alert('Enter some value.');
            text[i].focus();
            return false;
        }
    }

}

// getText();

//////////function for format to appear

review.prototype.render = function () {

    let parent = document.getElementById("reveiewShowSection");
    let divElement = document.createElement('div');
    parent.appendChild(divElement);
}

////////////////function for the event 

let format = document.getElementById('adventureFormat')

adventureFormat.addEventListener('sumbit', submitting)

function submitting(event) {
    event.preventDefault();
    let name=event.target.name.value;
    let place=event.target.place.value;
    getText();
    let newReveiw = new review(name, place)
    newReveiw.render();
}
