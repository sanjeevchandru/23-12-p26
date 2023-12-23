document.write("26.Find a pair of elements from an specified array whose sum equals a specific target number"+"<br>");
document.write("the original array [10,20,10,40,50,60,70]"+"<br>");

function test26(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if((arr[i]+arr[j])==50){
                return i+","+j;
            }
        }
    }
}
document.write(test26([10,20,10,40,50,60,70])+"<br><br>");