let greetUser = function (name) {
  name = prompt("Please enter your name.", "Name Here");
  name = name.toLowerCase();
  let words = name.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  words = words.join(" ");

  //   firstLetter = name.charAt(0);
  //   firstLetter = firstLetter.toUpperCase();

  //   fullName = firstLetter + name.slice(1);
  alert(`Hello ${words}!`);
};
