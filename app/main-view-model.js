var Observable = require("data/observable").Observable;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.theme = "theme-dark";
    viewModel.message = getMessage(viewModel.counter);


    viewModel.onTap = function() {
        this.counter--;
        this.set("message", getMessage(this.counter));
    }
    viewModel.onTap2 = function() {
        this.counter++;
        this.set("message", getMessage(this.counter));
    }

    viewModel.onFirstChecked = function() {
        
        if (viewModel.theme === "theme-dark") {
            this.set("theme", "theme-light");
        } else {
            this.set("theme", "theme-dark");

        }

    }

    return viewModel;
}

exports.createViewModel = createViewModel;