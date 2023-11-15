
const fromText = document.querySelector(".from-text");
toText = document.querySelector(".to-text"),
tags = document.querySelectorAll("select"),
translation = document.querySelector("button");

tags.forEach((tag, id) => {
    for(const country_code in countries){
        // console.log(countries[country_code]);

        let selected;
        if(id==0 && country_code == "en-GB"){
            selected = "selected";
        }
        else if(id==1 && country_code== "hi-IN"){
            selected = "selected";
        }
    
        let option = `<option value = "${country_code}" ${selected}>${countries[country_code]}</option>`;  
        tag.insertAdjacentHTML("beforeend", option);   
    }
});

translation.addEventListener("click", () => {
    let text = fromText.value;
    translateFrom = tags[0].value;
    translateTo = tags[1].value;
    // console.log(text, translateFrom, translateTo);

    //apiUrl variable storing the url 
    //also creating a template literal
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}!&langpair=${translateFrom}|${translateTo}`;

    //fetch being used to make the http request 
    //it takes url as an argument and returns a promise that resolve to the response to that request
    //res is the response fromthe request
    // res.json is used to parse the response body as json
    //second then is used to handle the parsed json data
    fetch(apiUrl).then(res => res.json()).then(data => {
        console.log(data);
        toText.value = data.responseData.translatedText;
    })


});



