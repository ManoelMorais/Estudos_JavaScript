let toastBox = document.getElementById("toastBox");
let successMsg = 'Successfully submitted!';
let invalidMsg = 'Invalid submitted!';
let errorMsg = 'Error submitted!';


function showToast(msg) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes(successMsg)) {
        toast.classList.add("success");
        toast.style.backgroundColor = "#4caf50";
        toast.style.color = "white";
    } else if(msg.includes(invalidMsg)) {
        toast.classList.add("error");
        toast.style.backgroundColor = "#ff9800";
        toast.style.color = "white";
    } else if(msg.includes(errorMsg)) {
        toast.classList.add("error");
        toast.style.backgroundColor = "#f44336";
        toast.style.color = "white";
    }

    setTimeout(() => {
        toast.remove()
    },6000);
}
