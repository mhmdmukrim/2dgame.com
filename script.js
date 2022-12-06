function key(event) {

    if (event.which == 13) {

        if (rw == 0) {

            fid = f();

            rw = setInterval(run, 100);
            rs.play();

            bw = setInterval(b, 100);

            sw = setInterval(updateScore, 100);

            fw = setInterval(move, 100);

        }

    }

    if (event.which == 231) {

        if (jw == 0) {
            clearInterval(rw);
            rs.play();

            jw = setInterval(jump, 100)
            rs.play();

        }
    }
}


var rs = new Audio("run.mp3");
rs.loop = true;

var js = new Audio("jump.mp3");

var ds = new Audio("dead.mp3");

var fid = 0;

var u = 1000;

function f() {

    for (var y = 0; y < 10; y++) {

        var a = document.createElement("img");

        a.src = "flame.gif";

        a.className = "f";

        a.style.marginLeft = u + "px";

        if (y <= 5) {
            u = u + 700;
        }

        if (y >= 6) {
            u = u + 500;
        }


        a.id = "d" + y;

        document.getElementById("b").appendChild(a);

    }
}

var rw = 0;

var r = 1;

function run() {

    var rimg = document.getElementById("boy");

    r = r + 1;

    if (r == 9) {
        r = 1;
    }

    rimg.src = "Run (" + r + ").png";
}

var bw = 0;

var p = 0;

function b() {

    p = p - 20;

    document.getElementById("b").style.backgroundPositionX = p + "px";

}


var sw = 0;

var a = 0;

function updateScore() {

    a = a + 1;

    document.getElementById("score").innerHTML = a;
}

var fw = 0;

function move() {

    for (var y = 0; y < 10; y++) {

        var z = getComputedStyle(document.getElementById("d" + y));

        var p = parseInt(z.marginLeft);

        p = p - 20;

        document.getElementById("d" + y).style.marginLeft = p + "px";

        //60 160

        if (p >= 70 & p <= 150) {

            if (t > 370) {

                clearInterval(rw);
                rs.pause();

                clearInterval(jw);
                jw = -1;

                clearInterval(sw);

                clearInterval(bw);

                clearInterval(fw);

                dw = setInterval(dead, 100);
                ds.play();

            }
        }
    }
}

var jw = 0;

var j = 1;

var t = 440;

function jump() {

    var jimg = document.getElementById("boy");

    if (j <= 6) {

        t = t - 40;

    }

    if (j >= 7) {

        t = t + 40;

    }

    jimg.style.marginTop = t + "px";

    j = j + 1;

    if (j == 13) {
        j = 1;

        clearInterval(jw);

        jw = 0;

        rw = setInterval(run, 100);
        rs.play();

        if (fid == 0) {
            fid = f();
        }

        if (bw == 0) {
            bw = setInterval(b, 100);
        }

        if (sw == 0) {
            sw = setInterval(updateScore, 100);
        }

        if (fw == 0) {
            fw = setInterval(move, 100);
        }

    }

    jimg.src = "jump (" + j + ").png";
}

var dw = 0;

var d = 1;

function dead() {

    var dimg = document.getElementById("boy");

    d = d + 1;

    if (d == 11) {
        d = 10;

        dimg.style.marginTop = "440px";

        document.getElementById("end").style.visibility = "visible";

        document.getElementById("endscore").innerHTML = a;
    }

    dimg.src = "Dead (" + d + ").png";
}

function re() {
    location.reload();
}
