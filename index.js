// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "Carlos Baptista";

// 1.2 Print "The driver's name is XXXX"
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "Google Chrome";

// 1.4 Print "The navigator's name is YYYY"
console.log(`The navigator's name is ${hacker2}`);




// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }




// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let separatedCapitalHacker1 = ''; // Need to use the quote marks without any space/character, otherwise "undefined" will be added to the beggining of the string.

for (let i = 0; i < hacker1.length; i++) {
  separatedCapitalHacker1 += hacker1[i].toUpperCase() + ' ';
}

console.log(separatedCapitalHacker1);

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let reverseHacker2 = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseHacker2 += hacker2[i];
}

console.log(reverseHacker2)




/* 3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name? */

if (hacker1.localeCompare(hacker2) === -1) {
    console.log ("The driver's name goes first.");
  } else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first, definitely.");
  } else if (hacker1.localeCompare(hacker2) === 0) {
    console.log("What?! You both have the same name?");
  }
  



// Bonus Time!
/* Bonus 1:
Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText. */
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida blandit eros, nec mattis lacus ornare nec. Aliquam dolor libero, pharetra sed finibus vitae, pretium quis risus. Donec mollis neque id ex ultricies, sed porta quam imperdiet. Sed accumsan imperdiet dui, quis venenatis massa euismod quis. Nam vestibulum pharetra urna vitae pharetra. Morbi blandit ultricies neque a vehicula. Nullam tristique mi faucibus, posuere mauris a, euismod arcu.

Suspendisse ut imperdiet est. Nulla tortor sem, elementum sit amet maximus nec, faucibus a urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique tempor vestibulum. Cras tempor malesuada velit, eu maximus ligula malesuada in. Sed feugiat pellentesque dolor ut aliquet. Duis nec porttitor lectus. Mauris malesuada, ipsum sed consectetur lobortis, nulla leo hendrerit lorem, eget rutrum augue metus non augue. Aliquam dignissim lacus a libero pulvinar, non ullamcorper orci posuere. Maecenas quis nisl nec ex accumsan maximus. Donec est dolor, tempus ut suscipit at, congue sed tellus.

Vivamus placerat rhoncus dui, id pretium sapien tempus et. Praesent convallis metus nec bibendum dictum. In non leo metus. Nulla tincidunt libero rutrum felis pellentesque, in luctus velit maximus. Nam id justo eget erat vestibulum accumsan. Aliquam maximus vel diam eu mattis. Cras ac lectus ac felis finibus convallis at varius purus.`