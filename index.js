const fileInput = document.getElementById("fileInput"); 
const fileContent = document.getElementById("fileContent"); 

fileInput.addEventListener("change", (e) => {
    const selectedFile = e.target.file[0]; 
    
    if (selectedFile) {
        const reader = FileReader(); 

        reader.onload = function (e) {
            const content = e.target.result; 
            fileContent.textContent = content; 
        }
        reader.readAsText(selectedFile); 
    } else {
        fileContent.textContent = "Aucun fichier selectionné"
    }
})