/*
Demo: не меняй код.
Объясни разницу поведения в обычном и strict-режиме.
*/

console.log("=== Task 02 Demo ===");

function sloppyMode() {
  accidentalGlobal = 10;
  return this === globalThis;
}

function strictMode() {
  "use strict";
  try {
    strictLeak = 20;
  } catch (error) {
    console.log("strict error:", error.name);
  }
  return this === undefined;
}

console.log("sloppy this is global:", sloppyMode());
console.log("global value after sloppy:", accidentalGlobal);
console.log("strict this is undefined:", strictMode());
