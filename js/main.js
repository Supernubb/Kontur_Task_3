let soundLink = $("#sound-link")[0];

    $(".workspace div").mouseenter(function () {
        soundLink.play();
        document.getElementById("theImage").style.visibility = "visible";
    });
    $(".workspace div").mouseleave(function () {
        soundLink.pause();
        document.getElementById("theImage").style.visibility = "hidden";
    });

    // popup

    let popup = document.getElementById('mypopup'),
        popupClose = document.querySelector('.close');

        window.onload = function() {
            popup.style.display = 'block';
        }

        popupClose.onclick = function() {
            popup.style.display = 'none';
        }

    // popup close