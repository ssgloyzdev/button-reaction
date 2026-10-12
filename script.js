
window.setupButtonController = function ({ button, setStatus }) {
  let count = 0;

  function handleClick() {
    count++;

    button.textContent = "Berhasil ditekan " + count + " kali";
    setStatus("Script aktif. Klik ke-" + count, "#4ade80");
  }

  button.addEventListener("click", handleClick);

  // Fungsi opsional untuk membersihkan event
  // saat script diganti.
  return {
    destroy() {
      button.removeEventListener("click", handleClick);
    }
  };
};
