//#2: JavaScript Runtime Architecture
/**                
┌─────────────────────────────────────────────────────┐
│                JAVASCRIPT RUNTIME                   │
│  (Browser / Node.js)                                 │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ┌──────────────┐          ┌──────────────────┐    │
│  │  CALL STACK  │          │     WEB APIs     │    │
│  │ (Execution)  │          │  - setTimeout    │    │
│  │              │          │  - fetch         │    │
│  │              │          │  - DOM events    │    │
│  └──────┬───────┘          └────────┬─────────┘    │
│         │                           │               │
│         │                           ▼               │
│         │                  ┌──────────────────┐    │
│         │                  │  CALLBACK QUEUE  │    │
│         │                  │   [task1, task2] │    │
│         │                  └────────┬─────────┘    │
│         │                           │               │
│         └──────────← EVENT LOOP ←───┘               │
│                                                      │
└─────────────────────────────────────────────────────┘          
 * 
 *
 * Call Stack =:jaha code line by line execute hota hai(LIFO.
 * 
 * Web APIs =:browser-provided features (timer,AJAX,etc.) jo background me kaam krte hai.
 * 
 * Callback Queue =:completed tasks ke callbacks yahan line lagate hai.
 * 
 * Event Loop =:continuously check krta hai- agar stack empty ho to queue se
 * callback lekar stack me daal do.
 */


