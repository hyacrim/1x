function calculer() {
    // Récupération du montant
    var montant = document.getElementById("montant").value;
    var coupon = document.getElementById("coupon").value;
    var simple = document.getElementById("simple").value;
    
    // Calculs
    var mont = (montant / 2) * 2;
    var a = montant / 5;
    var reel = montant - a;
    var b = reel / 2;
    var ra = coupon * a;   
    var rb = simple * b;
    var ga = ra - montant;
    var gb = rb - montant;
    var gc = (rb * 2) - montant;
    var sa = mont + ga;
    var sb = mont + gb;
    var sc = mont + gc;
    message1 = " cas 1 : " + ga;
    message2 = " cas 2 : " + gb;
    message3 = " cas 3 : " + gc;

    // Affichage des résultats
    document.getElementById("a").value = a;
    document.getElementById("b").value = b;
    document.getElementById("c").value = b;
    document.getElementById("ra").value = ra;
    document.getElementById("rb").value = rb;
    document.getElementById("rc").value = rb;
    document.getElementById("ga").value = ga;
    document.getElementById("gb").value = gb;
    document.getElementById("gc").value = gb;
    document.getElementById("sa").value = sa;
    document.getElementById("sb").value = sb;
    document.getElementById("sc").value = sc;

    

    document.getElementById("cas1").textContent = message1;
    document.getElementById("cas2").textContent = message2;
    document.getElementById("cas3").textContent = message3;
};

function reset(){
    
    message1 = " cas 1 : " ;
    message2 = " cas 2 : " ;
    message3 = " cas 3 : " ;
 
    document.getElementById("a").value = null;
    document.getElementById("b").value = null;
    document.getElementById("c").value = null;
    document.getElementById("ra").value =  null;
    document.getElementById("rb").value =  null;
    document.getElementById("rc").value =  null;
    document.getElementById("ga").value =  null;
    document.getElementById("gb").value =  null;
    document.getElementById("gc").value =  null;
    document.getElementById("montant").value =  null;
    document.getElementById("sa").value = null;
    document.getElementById("sb").value = null;
    document.getElementById("sc").value = null;

    

    document.getElementById("cas1").textContent = message1;
    document.getElementById("cas2").textContent = message2;
    document.getElementById("cas3").textContent = message3;
};



