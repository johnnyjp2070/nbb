var total = 0;
var limit = 10;
for (var i=0; i < limit; i++) {
    total += i;
}
console.log(total);
/* Working Mechanism
0 = 0+0
0 = 0+1
1 = 1+2
3 = 3+3
6 = 6+4
10 = 10 + 5
15 = 15 + 6
21 = 21+ 7
28 = 28+ 8
36 = 36 + 9
*/