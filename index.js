num=prompt("enter a number")
sum=0;
res=""
for(i=0;i<Number.length;i++){
if(i==Number.length){
res=sum+num[i]+" = "
}
else{
    sum=sum+num[i]
}
console.log(sum+res)
}

 