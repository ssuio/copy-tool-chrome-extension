let config = {
    fields: [
        {
            btnId: "address-btn",
            textId: "address",
            value: "1821 244th Ave SE"
        },
        {
            btnId: "phone-btn",
            textId: "phone",
            value: "+1(206)929-6367"
        },
        {
            btnId: "phone-clear-btn",
            textId: "phone-clear",
            value: "12069296367"
        },
        {
            btnId: "linkedin-btn",
            textId: "linkedin",
            value: "https://www.linkedin.com/in/noah-chou-544878b6/"
        }
    ]
}

console.log(config);

document.addEventListener('DOMContentLoaded', function() {
    let mainFrame = document.getElementById('main-frame');
    for (let obj of config.fields){
        // Put btn in mainframe
        let btn = document.createElement('button');
        btn.setAttribute("id", obj.btnId);
        btn.textContent = obj.btnId;
        mainFrame.appendChild(btn);

        // Put input box in mainframe
        let input = document.createElement('input');
        input.setAttribute("id", obj.textId);
        input.value = obj.value;
        mainFrame.appendChild(input);


        let d = document.getElementById(obj.btnId);
        let f = copyInputFunc(obj.textId, navigator);
        d.addEventListener('click', f);
    }

});

let copyInputFunc = (textId, navigator) => {
    return async () => {
        let copyText = document.getElementById(textId);
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        await navigator.clipboard.writeText(copyText.value);
        // alert(copyText.value);
    }
}