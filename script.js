// $(':radio').change(function() {
//     console.log('New star rating: ' + this.value);
//   });

let reviews = [];

function review(name, place) {

    this.name = name;
    this.place = place;
    this.description = description
    reviews.push(this);

}

// ///////////function for the text area

function getText() {

    // https://www.encodedna.com/javascript/how-to-get-all-textarea-in-a-form-using-javascript.htm
    let text = document.getElementsByTagName("textarea");

    for (let i = 0; i <= text.length - 1; i++) {
        if (text[i].value != '') {
            console.log(text[i].value);
            description = text[i].value;
        }
        else {
            alert('Enter some value.');
            text[i].focus();
            return false;
        }
    }
}

// //////////function for format to appear

// review.prototype.render = function () {

//     let parent = document.getElementById("reveiewShowSection");
//     let figureElement = document.createElement('figure')
//     parent.appendChild('figureElement');
//     // let imgElement=document.createElement('img')
//     // figureElement.appendChild('imgElement')
//     // // imgElement.textContent=;
//     let figCaption=document.createElement('figcaption');
//     figureElement.append('figCaption')
//     figCaption.textContent=addNewReview;


// }

////////////////function for the event 


let forms = document.getElementById('adventureFormat')
forms.addEventListener('submit', submitting);

function submitting(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    getText();
    let name = event.target.name.value;
    let place = event.target.place.value
    let addNewReview = new review(name, place)
    // addNewReview.render();
    console.log(addNewReview);

}

