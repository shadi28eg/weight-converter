document.getElementById("lbsInput").addEventListener("input", function(e){
  let lbs = e.target.value;
    document.getElementById("gramsOutput").innerHTML = (lbs/0.0022046).toFixed(2);
    document.getElementById("kg").innerHTML = (lbs/2.2046).toFixed(2);
    document.getElementById("ozOutput").innerHTML = (lbs*16).toFixed(2);
                                                     
});