function calculate(){
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var mon = document.getElementById("mon")
    var answer = document.getElementById("answer")
    function leap(year){
       if(year % 4==0){
        return true;
       }
       else{
        return false;
       }
    }
    if(date=="" || month =="" || year ==""){
        alert("please enter a date,month,year")
    }
    else{
        if(month >12){
            window.alert("please enter a valid month")
        }
        else{
            if(((month==4 || month==6 || month==9 || mon==11) && (date<=30)) || ((month ==1 || month ==3 || month==5 || month==7 || month==8 || month==10|| mon==12) && (date<=31)) || ((month ==2) &&  leap(year)==true && date<=29) || ((month==2) && (leap(year)==false) && (date<=28)) ){
                const d = new Date();
                let currdate = d.getDate();
                let currmon = d.getMonth();
                let curryear = d.getFullYear();
                let ans = curryear - year;
                console.log(ans)
                answer.innerText += ans;
            }
            else {
                alert("Invalid date")
            }
           
        }
    }
    
}