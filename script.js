const input = document.getElementById("nameInput");
const whatsappLink = document.getElementById("whatsappLink");

input.addEventListener("input", () => {
  const name = input.value.trim();
  const message = `🙏 *राम नवमी की ढेरों शुभकामनाएँ!* 🙏\n\nआपको और आपके परिवार को राम नवमी की हार्दिक शुभकामनाएं।\n\n🌸 जय श्री राम 🌸\n\nशुभकामनाएं: *${name}*`;

  const encodedMsg = encodeURIComponent(message);
  whatsappLink.href = `https://wa.me/?text=${encodedMsg}`;
});
