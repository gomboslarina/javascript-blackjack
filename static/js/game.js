function popup() {
    return `<div class="bet_popup" style="
                                    width: 20%;
                                    text-align: center;
                                    position: absolute;
                                    top:40px; 
                                    margin: 0;
                                    position: absolute;
                                    top: 50%;
                                    left: 50%;
                                    -ms-transform: translate(-50%, -50%);
                                    transform: translate(-50%, -50%);
                                    border: 1px solid #ddd;
                                    border-radius: 6px;
                                    background-color: #fff;
                                    box-shadow: 1px 2px 3px 0 rgba(0,0,0,.10);
                                    padding: 10px;
                                    animation-name: example;
                                    animation-duration: 5s;">` +
        `<h2>Make your bet</h2>`+
        `<input type='number' id="bet"><br>` +
        `<button id="cancel" style="
                                    background-color:#79bbff;
	                                border-radius:6px;
	                                border:1px solid #84bbf3;
	                                display:inline-block;
	                                cursor:pointer;
	                                color:#ffffff;
	                                font-family:Arial;
	                                font-size:15px;
	                                font-weight:bold;
	                                padding:6px 24px;
	                                text-decoration:none;
	                                text-shadow:0px 1px 0px #528ecc;
	                                margin-top:10px;
	                                margin-right:50px;">
	    Cancel</button>`+
        `<button id="add_bet" style="   background-color:#79bbff;
	                                    border-radius:6px;
	                                    border:1px solid #84bbf3;
	                                    display:inline-block;
	                                    cursor:pointer;
	                                    color:#ffffff;
	                                    font-family:Arial;
	                                    font-size:15px;
	                                    font-weight:bold;
	                                    padding:6px 24px;
	                                    text-decoration:none;
	                                    text-shadow:0px 1px 0px #528ecc;">
	    Bet</button>`+
        `</div>`;
}
function main() {
    let play = document.getElementById("play");
    play.addEventListener("click", ()=>{
        document.getElementById("asd").innerHTML=popup();
        let bet = document.getElementById("add_bet");
        bet.addEventListener("click", () =>{
            let bet_number = document.getElementById("bet").value;
        });
        let cancel = document.getElementById("cancel");
        cancel.addEventListener("click", () =>{
            location.reload();
        });
    });


}
main();