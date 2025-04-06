const input = document.getElementById("nameInput");
const whatsappLink = document.getElementById("whatsappLink");

input.addEventListener("input", () => {
  const name = input.value.trim();
  const imageUrl = "https://drive.google.com/file/d/1Jn9E50OxHfhQHn9DGeP3Jsyel08cTsgp/view?usp=sharing";

  const message = `🙏 *राम नवमी की शुभकामनाएँ!* 🙏\n\nआपको और आपके परिवार को राम नवमी की हार्दिक शुभकामनाएं।\n\n🌸 जय श्री राम 🌸\n\nशुभकामनाएं: *${name}*\n\n📸 ${imageUrl}`;

  const encodedMsg = encodeURIComponent(message);
  whatsappLink.href = `https://wa.me/?text=${encodedMsg}`;
});
