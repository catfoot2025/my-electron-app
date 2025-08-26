const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const func = async () => {
  const response = await window.versions.ping();
  const text = document.createElement("div");
  text.style.color = "red";
  text.innerText = response;
  information.append(text);
};

setTimeout(() => {
  func();
}, 1000);
