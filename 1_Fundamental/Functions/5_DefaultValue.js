function writeCode(language) {
  console.log(`I Love ${language} Programming`);
}

writeCode("JavaScript");
writeCode("Go");
writeCode(); // kalau kosong otomatis undefined

// function with default parameter
function codeDetails(language = "JavaScript", tools = "VS Code") {
  console.log(
    `I'm using ${language} as my programming language and ${tools} for coding.`
  );
}

codeDetails(); // Output: I'm using JavaScript as my programming language and VS Code for coding.
codeDetails("Go"); // Output: I'm using JavaScript as my programming language and VS Code for coding.
codeDetails("PHP", "Notepad++"); // Output: I'm using JavaScript as my programming language and VS Code for coding.

function user(name, role = "guest", status = "active") {
  console.log(`Name: ${name}, Role: ${role}, Status: ${status}`);
}

user("Haikal");
user("Monika", "admin", "active");
