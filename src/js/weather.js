console.log("Hello World!")

async function get_weather() {
    const response = await fetch("https://jjwd.info/api/v2/stations/search?pref_ja=東京&address=世田谷", { mode: "no-cors" });
    //const data = await response.status();, { mode: "no-cors" }
    //const data= await response.json();
    console.log(response);
}

async function wea(){
    fetch("https://jjwd.info/api/v2/stations/search?pref_ja=北海道", { mode: "no-cors" })
    .then(response => {
        console.log(response.status);
        return response.json().then(userInfo => {
            console.log(userInfo);
        });
    }).catch(error => {
        console.error(error);
    });
}

get_weather();
//wea();