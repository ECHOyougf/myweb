var wordStore = [
  {"你好": "你好啊"},
  {"天气": "天气确实不错"},
  {"身体": "最近好多了"},
  {"hello": "hi"},
  {"hi": "hello"},
  {"不": "为什么呢"},
  {"你是": "我是你的好朋友小正"},
];
var asker = document.getElementById("asker");
var answer = document.getElementById("answer");
asker.onkeyup = function () {
  var txt = asker.value;
  if (txt) {
    for (var i = 0; i < wordStore.length; i++) {
      for (var attr in wordStore[i]) {/*attr是属性，wordStore[0][attr]获取属性值*/
        var result = txt.match(attr);
        if (result) {
          answer.innerHTML = wordStore[i][attr];
        }/*else {
          answer.innerHTML = "啊你说的太深奥了，我只是一只蠢萌的兔子o(╯□╰)o";
        }*/
      }
    }
  } else {
    answer.innerHTML = "";
  }
}
