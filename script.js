// 1ST UPPER CASE

upper.addEventListener("click", () => {
  console.log("Transforming to Upper Case ");
  inptext.value = inptext.value.toUpperCase();
});

// 2ND LOWER CASE

lower.addEventListener("click", () => {
  console.log("Transforming to lower Case");
  inptext.value = inptext.value.toLowerCase();
});

inptext.addEventListener("input", () => {
  console.log("Changed");
  charcount.innerText = inptext.value.length;
  wordcount.innerText = inptext.value.trim().split(" ").length;
});

// 3RD Removing spaces form the textarea

removespacs.addEventListener("click", () => {
  console.log("Removeing Extraspaces");
  //   while performing opration on input you sholud take .value
  inptext.value = inptext.value.replace(/\s+/g, " ").trim();
});

// 4TH removeing new lines form the textarea

removextranewline.addEventListener("click", () => {
  console.log("Removeing Extralines form text area ");
  //   while performing opration on input you sholud take .value
  inptext.value = inptext.value.replace(/\n+/g, "\n").trim();
});
