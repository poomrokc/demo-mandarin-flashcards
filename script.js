$( document ).ready(function() {
    // hardcode settings for now
    let dataset = database["menu"];
    let len = dataset.length;
    let auto_pinyin = false;
    let index = 0;

    $("#pinyinbutton").click((event) => {
      $("#pinyin").css("visibility", "visible");
      $("#pinyinbutton").css("visibility", "hidden");
    });

    // $("#soundbutton").click((event) => {
    //   let audioElement = document.createElement("audio");
    //   audioElement.setAttribute("src", `database/audio/${dataset}_${index}.mp3`);

    //   audioElement.addEventListener("canplay",function(){
    //     audioElement.play();
    //   });

    //   audioElement.addEventListener('ended', function() {
    //     audioElement.remove();
    //   }, false);
    // });

    $("#answerbutton").click((event) => {
      $("#answer").css("visibility", "visible");
      $("#answerbutton").css("visibility", "hidden");
    });

    $("#nextbutton").click((event) => {
      // Reset buttons
      if(auto_pinyin) {
        $("#pinyin").css("visibility", "visible");
        $("#pinyinbutton").css("visibility", "hidden");
      } else {
        $("#pinyin").css("visibility", "hidden");
        $("#pinyinbutton").css("visibility", "visible");
      }

      $("#answer").css("visibility", "hidden");
      $("#answerbutton").css("visibility", "visible");

      // Random words and change values
      index = Math.floor(Math.random() * len);
      let data = dataset[index];
      $("#pinyin").text(data["pinyin"]);
      $("#answer").text(data["english"]);
      $("#question").text(data["chinese"]);
    });
});