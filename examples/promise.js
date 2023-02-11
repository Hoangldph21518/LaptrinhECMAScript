function loadScript(src){
    return new Promise ((resolve, reject) =>{
        const script = document.createElement("script"); //<script>
        script.src = src;
        script.onload = function() {
            resolve(script);
        };
        script.onerror = function() {
            reject(new Error("lỗi"));
        };
        document.head.append(script);
    });
} 

loadScript("https://github.com")
    .then((data) => console.log(data))
    .catch((error) => console.log(error));