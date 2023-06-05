/* day - night */
var Body = {
    setColor: function(color){
        $("body").css("color", color);
    },
    setBackgroundColor: function(color){
        $("body").css("background-color", color);
    }
  }
  
  var Links = {
    setColor: function(color){
        $("a").css("color", color);
    }
}
  
  
  function nightDayHandler(self){
    if(self.value == 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');   
      Links.setColor('rgb(131, 251, 255)')   
      self.value = 'day';
    } else {
      Body.setBackgroundColor('white')
      Body.setColor('black');   
      Links.setColor('blue');
      self.value = 'night';  
    } 
  }


    
function Messier(){
    alert('이해를 위한 동영상을 연결합니다.');
    window.location.href = "https://youtu.be/dH2v54GoQMs";
}

