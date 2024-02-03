function firstWord(s) {
  // your code here
	s=s.trim();
	let i=0;
	while(i<s.length && s[i]!=' ') i++;
	return s.slice(0,i);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
