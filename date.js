
    exports.getDate = function () {
       const today = new Date();
       // const day = days[today.getDay()];
       const options = {
           weekday : "long",
           day: "numeric",
           month:"long"
       };
        return today.toLocaleDateString("en-PK", options);
   }
    exports.getDay =function () {
       const today = new Date();
       // const day = days[today.getDay()];
       const options = {
           weekday : "long"
       };
        return  today.toLocaleDateString("en-PK", options);

   }