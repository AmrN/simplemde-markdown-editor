var simplemde = new SimpleMDE({ element: document.getElementById("root") });

var scrollContainer = document.querySelector(".mde-wrapper");
var codeMirrorEl = document.querySelector(".CodeMirror");
var focusArea = document.querySelector(".focus-area");

var cm = simplemde.codemirror;


cm.on("scrollCursorIntoView", (inst, ev) => {
  // console.log("scrollCursorIntoView");
  const currentLine = inst.getCursor().line;
  const linesCount = inst.lineCount();

  if (linesCount - currentLine < 3) {
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  }
  // console.log('totalLines:', lineCount)
  // console.log(cursor);
});

focusArea.addEventListener('click', (ev) => {
  if (ev.target === focusArea) {
    // set cursor to end of document
    cm.setCursor(1000000);
    cm.focus();
  }
})
