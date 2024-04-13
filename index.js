const modeOptions = document.getElementById('modeOptions')
const colorPicker = document.getElementById('colorPicker')

document.querySelector('button').addEventListener('click', function(){
    const chosenMode = modeOptions.options[modeOptions.selectedIndex].value
    const chosenColor = colorPicker.value.substring(1)
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${chosenColor}&mode=${chosenMode}&count=5`)
     .then(res => res.json())
     .then(data => {
        let html = ""
        for (let i = 0; i < data.colors.length; i++) {
            let hexValue = data.colors[i].hex.value  
            
            html += `
                <div class="hexColor" style="background-color: ${hexValue}">
                    <div class="hexCopy">${hexValue}</div>
                </div>          
            ` 
        }        
         document.getElementById("scheme-container").innerHTML = html
     
      })
})