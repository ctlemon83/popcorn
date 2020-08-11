function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    console.log(array);
    return array;
  }
  var alphabet=[{
        pic:"https://wh-wf-content.s3.amazonaws.com/c188642d-0e92-420c-9f44-3e60af7cbb08.jpg",
        name:"Abby L.",
        url:"https://p1013.org/abbyl",
        rank:"Arrow of Light"
      },
      {
        pic:"https://www.trails-end.com/assets/images/SCOUTS.png",
        name:"Alex A.",
        url:"https://p1013.org/alexa",
        rank:"Arrow of Light"
      },
      {
        pic:"https://www.trails-end.com/assets/images/SCOUTS.png",
        name:"Annie Y.",
        url:"https://p1013.org/anniey",
        rank:"Arrow of Light"
      },
      {
        pic:"https://wh-wf-content.s3.amazonaws.com/50a81f23-7e3d-4525-af9c-ff24121696e6.jpg",
        name:"Bryson V.",
        url:"https://p1013.org/brysonv",
        rank:"Arrow of Light"
      },
      {
        pic:"https://wh-wf-content.s3.amazonaws.com/dc6b0a4b-0441-4d8c-ad12-ccbc8159a4d2.jpg",
        name:"Charleigh G.",
        url:"https://p1013.org/charleighg",
        rank:"Arrow of Light"
      },
      {
        pic:"https://wh-wf-content.s3.amazonaws.com/364fe040-e250-4713-b877-8d32ed2a9aa5.jpg",
        name:"Conner C.",
        url:"https://p1013.org/connerc",
        rank:"Arrow of Light"
      },
      {
        pic:"https://www.trails-end.com/assets/images/SCOUTS.png",
        name:"Emma A.",
        url:"https://p1013.org/emmaa",
        rank:"Arrow of Light"
      },
      {
        pic:"https://wh-wf-content.s3.amazonaws.com/c033197a-6349-f19c-74be-6589f80e2a0c.png",
        name:"Erik L.",
        url:"https://p1013.org/erikl",
        rank:"Arrow of Light"
      },
      {
        pic:"https://www.trails-end.com/assets/images/SCOUTS.png",
        name:"Evalynn H.",
        url:"https://p1013.org/evalynnh",
        rank:"Arrow of Light"
      },
      {
        pic:"https://www.trails-end.com/assets/images/SCOUTS.png",
        name:"Hunter C.",
        url:"https://p1013.org/hunterc",
        rank:"Arrow of Light"
      },
      {
        pic:"https://wh-wf-content.s3.amazonaws.com/b6d2ee38-507b-2ed5-5c4b-d8fbcdb6f859.png",
        name:"Jack H.",
        url:"https://p1013.org/jackh",
        rank:"Arrow of Light"
      },
      {
        pic:"https://www.trails-end.com/assets/images/SCOUTS.png",
        name:"Jaden V.",
        url:"https://p1013.org/jadenv",
        rank:"Arrow of Light"
      },
      {
        pic:"https://www.trails-end.com/assets/images/SCOUTS.png",
        name:"Justin C.",
        url:"https://p1013.org/justinc",
        rank:"Arrow of Light"
      },
      {
        pic:"https://wh-wf-content.s3.amazonaws.com/3031539e-30c8-40f9-bb99-2925b6e76692.jpg",
        name:"Kayleigh H.",
        url:"https://p1013.org/kayleighh",
        rank:"Arrow of Light"
      },
      {
        pic:"https://www.trails-end.com/assets/images/SCOUTS.png",
        name:"Philip E.",
        url:"https://p1013.org/philipe",
        rank:"Arrow of Light"
      },
      {
        pic:"https://wh-wf-content.s3.amazonaws.com/546c2bfd-9e1a-4af5-b587-3467cf645d1c.jpg",
        name:"Raina D.",
        url:"https://p1013.org/rainad",
        rank:"Arrow of Light"
      },
      {
        pic:"https://www.trails-end.com/assets/images/SCOUTS.png",
        name:"Ryder H.",
        url:"https://p1013.org/ryderh",
        rank:"Arrow of Light"
      },
      {
        pic:"https://wh-wf-content.s3.amazonaws.com/9ed55ded-506e-4b45-85ec-88362f37c8f7.jpg",
        name:"Townes W.",
        url:"https://p1013.org/townesw",
        rank:"Arrow of Light"
      },
      {
        pic:"https://www.trails-end.com/assets/images/SCOUTS.png",
        name:"Trinity M.",
        url:"https://p1013.org/trinitym",
        rank:"Arrow of Light"
      },
      {
        pic:"https://www.trails-end.com/assets/images/SCOUTS.png",
        name:"Walt G.",
        url:"https://p1013.org/waltg",
        rank:"Arrow of Light"
      },
      {
        pic:"https://www.trails-end.com/assets/images/SCOUTS.png",
        name:"Zareen K.",
        url:"https://p1013.org/zareenk",
        rank:"Arrow of Light"
      },
      {
        pic:"https://www.trails-end.com/assets/images/SCOUTS.png",
        name:"Zarif K.",
        url:"https://p1013.org/zarifk",
        rank:"Arrow of Light"
      }
    ];


  
  randomArrayShuffle(alphabet);
  document.getElementById("highlight-pic").src = alphabet[0].pic;
  document.getElementById("highlight-name").innerHTML = `Click Here to Support ${alphabet[0].name}`;
  document.getElementById("highlight-link").href = alphabet[0].url;

  document.getElementById("scout2").innerHTML = `Support ${alphabet[1].name}`;
  document.getElementById("scout2").href = alphabet[1].url;
  document.getElementById("scout3").innerHTML = `Support ${alphabet[2].name}`;
  document.getElementById("scout3").href = alphabet[2].url;
  document.getElementById("scout4").innerHTML = `Support ${alphabet[3].name}`;
  document.getElementById("scout4").href = alphabet[3].url;
  document.getElementById("scout5").innerHTML = `Support ${alphabet[4].name}`;
  document.getElementById("scout5").href = alphabet[4].url;
  document.getElementById("scout6").innerHTML = `Support ${alphabet[5].name}`;
  document.getElementById("scout6").href = alphabet[5].url;
  document.getElementById("scout7").innerHTML = `Support ${alphabet[6].name}`;
  document.getElementById("scout7").href = alphabet[6].url;
  document.getElementById("scout8").innerHTML = `Support ${alphabet[7].name}`;
  document.getElementById("scout8").href = alphabet[7].url;
  document.getElementById("scout9").innerHTML = `Support ${alphabet[8].name}`;
  document.getElementById("scout9").href = alphabet[8].url;
  document.getElementById("scout10").innerHTML = `Support ${alphabet[9].name}`;
  document.getElementById("scout10").href = alphabet[9].url;
  document.getElementById("scout11").innerHTML = `Support ${alphabet[10].name}`;
  document.getElementById("scout11").href = alphabet[10].url;
  document.getElementById("scout12").innerHTML = `Support ${alphabet[11].name}`;
  document.getElementById("scout12").href = alphabet[11].url;
  document.getElementById("scout13").innerHTML = `Support ${alphabet[12].name}`;
  document.getElementById("scout13").href = alphabet[12].url;
  document.getElementById("scout14").innerHTML = `Support ${alphabet[13].name}`;
  document.getElementById("scout14").href = alphabet[13].url;
  document.getElementById("scout15").innerHTML = `Support ${alphabet[14].name}`;
  document.getElementById("scout15").href = alphabet[14].url;
  document.getElementById("scout16").innerHTML = `Support ${alphabet[15].name}`;
  document.getElementById("scout16").href = alphabet[15].url;
  document.getElementById("scout17").innerHTML = `Support ${alphabet[16].name}`;
  document.getElementById("scout17").href = alphabet[16].url;
  document.getElementById("scout18").innerHTML = `Support ${alphabet[17].name}`;
  document.getElementById("scout18").href = alphabet[17].url;
  document.getElementById("scout19").innerHTML = `Support ${alphabet[18].name}`;
  document.getElementById("scout19").href = alphabet[18].url;
  document.getElementById("scout20").innerHTML = `Support ${alphabet[19].name}`;
  document.getElementById("scout20").href = alphabet[19].url;
  document.getElementById("scout21").innerHTML = `Support ${alphabet[20].name}`;
  document.getElementById("scout21").href = alphabet[20].url;
  document.getElementById("scout22").innerHTML = `Support ${alphabet[21].name}`;
  document.getElementById("scout22").href = alphabet[21].url;