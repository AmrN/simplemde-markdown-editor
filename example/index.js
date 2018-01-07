var simplemde = new SimpleMDE({ 
  element: document.getElementById("root"),
  mergeStatusAndToolbar: true,
 });

// var scrollContainer = document.querySelector(".mde-wrapper");
// var codeMirrorEl = document.querySelector(".CodeMirror");
// var focusArea = document.querySelector(".focus-area");

// var cm = simplemde.codemirror;


// cm.on("scrollCursorIntoView", (inst, ev) => {
//   scrollToCaret();
// });

// 

// function reachedEnd() {
//   const currentPos = cm.getCursor();
//   const hitSide = cm.findPosV(currentPos, 3, 'line',).hitSide;

//   if (hitSide) {  
//     return true;
//   }
//   return false;
// }

// function scrollToCaret() {
//   const cmCaret = cm.cursorCoords(true, 'window');
//   const caretPosY = cmCaret.bottom;
//   // const caretHeight = cmCaret.bottom - cmCaret.top;
//   const scrollContainerPosY = scrollContainer.getBoundingClientRect().y;
//   const scrollContainerHeight = scrollContainer.clientHeight;
//   let posDiff = 0;

//   if (cm.somethingSelected()) {
//     return;
//   }

//   if (cmCaret.top < scrollContainerPosY) {
//     console.log('minus');
//      posDiff = cmCaret.top - (scrollContainerPosY);

//   } else if (cmCaret.bottom > scrollContainerPosY + scrollContainerHeight) {
//      posDiff = cmCaret.bottom - (scrollContainerPosY + scrollContainerHeight);
//      console.log('positive:', posDiff);
//     } else {
//       console.log('inside');
//     }
//     scrollContainer.scrollTop += posDiff;

//     if (reachedEnd()) {
//       scrollContainer.scrollTop = scrollContainer.scrollHeight;
//     }
// }