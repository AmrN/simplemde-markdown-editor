var simplemde = new SimpleMDE({ element: document.getElementById("root") });

var scrollContainer = document.querySelector(".mde-wrapper");
var codeMirrorEl = document.querySelector(".CodeMirror");
// var focusArea = document.querySelector(".focus-area");

var cm = simplemde.codemirror;


cm.on("scrollCursorIntoView", (inst, ev) => {
  const currentPos = inst.getCursor();
  const hitSide = cm.findPosV(currentPos,3,'line',).hitSide;

  if (hitSide) {  
    console.log('hit');
    // scrollContainer.scrollTop = scrollContainer.scrollHeight;
  }

  // console.log('caret:', getCaretCoordinates());
  // console.log('container:', scrollContainer.getBoundingClientRect());
  scrollToCaret();
});

// 

function reachedEnd() {
  const currentPos = cm.getCursor();
  const hitSide = cm.findPosV(currentPos,3,'line',).hitSide;

  if (hitSide) {  
    console.log('hit');
    return true;
  }
  return false;
}

function scrollToCaret() {
  const cmCaret = cm.cursorCoords(true, 'window');
  const caretPosY = cmCaret.bottom;
  // const caretHeight = cmCaret.bottom - cmCaret.top;
  const scrollContainerPosY = scrollContainer.getBoundingClientRect().y;
  const scrollContainerHeight = scrollContainer.clientHeight;
  let posDiff = 0;

  if (cmCaret.top < scrollContainerPosY) {
    console.log('minus');
     posDiff = cmCaret.top - (scrollContainerPosY);

  } else if (cmCaret.bottom > scrollContainerPosY + scrollContainerHeight) {
     posDiff = cmCaret.bottom - (scrollContainerPosY + scrollContainerHeight);
     console.log('positive:', posDiff);
    } else {
      console.log('inside');
    }
    scrollContainer.scrollTop += posDiff;

    if (reachedEnd()) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
}

// focusArea.addEventListener('click', (ev) => {
//   if (ev.target === focusArea) {
//     // set cursor to end of document
//     cm.setCursor(1000000);
//     cm.focus();
//   }
// })
