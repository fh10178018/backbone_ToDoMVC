Object.defineProperty(window,"localStorage",{
  configurable: true,
  enumerable: true,
  value:new Proxy(localStorage,{
    set:function (ls,key,value) {
      ls[key] = value;
      return true
    },
    get:function(ls,prop){
      if (prop !== 'setItem') {
        if (typeof ls[prop] === "function") {
          return ls[prop].bind(ls);
        } else {
          return ls[prop];
        }
      }
      return function (key,val) {
        if(ls[key]!==val){
          var setItemEvent = new Event("setItemEvent");
          setItemEvent.key = key;
          setItemEvent.newVal = val;
          setItemEvent.oldVal = ls[key];
          window.dispatchEvent(setItemEvent);
          ls[key] = val;
        }       
      }
    }
  })
})

window.addEventListener("setItemEvent",function (e) {
  console.log(e)
})