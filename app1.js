// for loop syntax below:
//   for(var i = initial_value; i < end_value; i_incremental_value); {
//          console.log(i);  
//   }
 // 3 EXAMPLES OF FOR LOOP

for (i = 10; i > 0; i--)  {
    console.log(i);
}   

for (i = 100; i > 0; i--) {
    console.log(i);
}

const list = ['John', 'Sally', 'Jaime']
for (var i = 0; i < list.length; i++) {
      console.log(list[i] + ' Hello there' )
}



// NOTES----------------------
//FOR LOOP = The for loop has three parts:
//1. variable declaration - The first part of the loop which initializes the variable at the beginning of the loop to some value. This value is the starting point of the loop.
// 2. condition - The second part of the loop, and it is the part that decides whether the loop will continue running or not. While the condition in the loop is true, it will continue running. Once the condition becomes false, the loop will stop.
// 3. increment statement - The increment statement is the third part of the loop. It is the part of the loop that changes the value of the variable created in the variable declaration part of the loop. The increment statement is the part of the loop which will eventually stop the loop from running.
