let soundLink = $("#sound-link")[0];

    $(".workspace div").mouseenter(function () {
        soundLink.play();
        document.getElementById("theImage").style.visibility = "visible";
    });
    $(".workspace div").mouseleave(function () {
        soundLink.pause();
        document.getElementById("theImage").style.visibility = "hidden";
    });