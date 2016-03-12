var wordStore = [
  {"你好": "你好啊"},
  {"天气": "天气确实不错"},
  {"身体": "最近好多了"},
  {"hello": "hi"},
  {"hi": "hello"},
  {"不": "为什么呢"},
  {"你是": "我是你的好朋友小正"},
  {"唉": "一切都会好起来的"},
  {"哎": "一切都会好起来的"},
  {"哈": "哈哈"},
];
var asker = document.getElementById("asker");
var answer = document.getElementById("answer");
asker.onkeyup = function () {
  var txt = asker.value;
  if (txt) {
    for (var i = 0; i < wordStore.length; i++) {
      for (var attr in wordStore[i]) {/*attr是属性，wordStore[0][attr]获取属性值*/
        var result = txt.match(attr);
        /*if (!result ) {
          {
            answer.innerHTML = "啊，我现在还是只蠢萌的兔子。真是不好意思，我们聊聊别的吧，嗯？";
          }
        }*/
        if (result) {
          answer.innerHTML = wordStore[i][attr];
        }
      }
    }
  } else {
    answer.innerHTML = "";
  }
}
