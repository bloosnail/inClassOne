function myFunction(form_id) {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById(form_id).value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
		Remove(form_id);
        text = "Input OK";
    }
    document.getElementById(form_id).innerHTML = text;
}

function Remove(form_id) {
    if (window.confirm('Remove this form?')) {
        var f = document.getElementById(form_id);
        f.parentNode.removeChild(f);
    }
}