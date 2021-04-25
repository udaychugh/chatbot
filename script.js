var know = {
    "Hi": "Hello, I'm ChatBot develop by Mr. Uday Chugh.",
    "hi": "Hello, I'm ChatBot develop by Mr. Uday Chugh.",
    "hello": "Hi, I'm ChatBot develop by Mr. Uday Chugh.",
    "Hello": "Hi, I'm ChatBot develop by Mr. Uday Chugh.",
    "lodu": "tu lodu bsdk",
    "Lodu": "tu lodu bsdk",
    "gandu": "tu gandu bsdk",
    "Gandu": "tu gandu bsdk",
    "bhenchod": "jyada gand na phulayo",
    "Bhenchod": "jyada gand na phulayo",
    "madarchod": "tu madarchod bsdk",
    "Madarchod": "tu madarchod bsdk",
    "How are you": "I'm fine, wbu?",
    "how are you": "I'm fine, wbu?",
    "how are you?": "I'm fine, wbu?",
    "How are you?": "I'm fine, wbu?",
    "i am also fine": "thats great",
    "fine": "thats great",
    "i am fine": "thats great",
    "uday": "uday is best",
    "Uday": "uday is great",
    "Uday Chugh": "He develop me, uday chugh is best",
    "uday chugh": "he develop me, uday chugh is great",
    "ok": "okay",
    "Ok": "okay",
    "okay": "okay",
    "Okay": "okay",
    "Bye": "okay niklo fir",
    "bye": "okay niklo fir",
    "or batao": "or sb bdiya tum sunao",
    "shivam bansal" : "kaun vo jo pubg chhod ke ab anime chodta hai",
    "Shivam bansal" : "kaun vo jo pubg chhod ke ab anime chodta hai"
};


function talk() {
    if (event.keyCode === 13) {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        var element = document.getElementById("userSide");
        element.classList.remove("hidden");
        var user = document.getElementById("userBox").value;
        document.getElementById("userLog").innerHTML = user;
        document.getElementById("userBox").value = "";
        document.getElementById("chatLog").innerHTML = user + "<br>";
        document.getElementById("time1").innerHTML = time;
        document.getElementById("time2").innerHTML = time;
        if (user in know) {
            document.getElementById("chatLog").innerHTML = know[user] + "<br>";
        } else {
            document.getElementById("chatLog").innerHTML = "sorry, I don't know about that, I'm still learning" + "<br>";
        }
    } // if ends here
}

function talkwithbutton() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    var element2 = document.getElementById("userSide");
    element2.classList.remove("hidden");
    var user2 = document.getElementById("userBox").value;
    document.getElementById("userLog").innerHTML = user2;
    document.getElementById("chatLog").innerHTML = user2 + "<br>";
    document.getElementById("userBox").value = "";
    document.getElementById("time1").innerHTML = time;
    document.getElementById("time2").innerHTML = time;
    if (user2 in know) {
        document.getElementById("chatLog").innerHTML = know[user2] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML = "sorry, I don't know about that" + "<br>";
    }
}
