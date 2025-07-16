const form = document.getElementById("posterForm");
const formStatus = document.getElementById("formStatus");

const openDate = new Date("2025-12-01T00:00:00+07:00");
const closeDate = new Date("2025-12-07T17:00:00+07:00");
const now = new Date();

if (now < openDate) {
  // ยังไม่ถึงเวลาเปิดฟอร์ม
  form.style.display = "none";
  formStatus.classList.add("alert-warning");
  formStatus.innerHTML = `<b>The poster submission form will open on <u>1 December 2025 at 00:00 AM</b></u>.`;
} else if (now > closeDate) {
  // หมดเขตส่งฟอร์ม
  form.style.display = "none";
  formStatus.classList.add("alert-danger");
  formStatus.innerHTML = `<b>The poster submission period has ended.</b><br>For late submission, please contact <a href="mailto:mapsgroup.floor13@gmail.com" class="text-decoration-none">meeting coordinators</a>.`;
} else {
  // อยู่ในช่วงเวลาส่ง
  form.style.display = "block";
  formStatus.classList.add("alert-success");
  formStatus.innerHTML = `<b>The poster submission is now open.</b><br>You can submit your poster until <u><b>7 December 2025, 5:00 PM</b></u>.`;
}
