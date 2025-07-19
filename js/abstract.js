const form = document.getElementById("abstractForm");
const formStatus = document.getElementById("formStatus");

const openDate = new Date("2025-07-16T00:00:00+07:00");
const closeDate = new Date("2025-11-28T23:59:00+07:00");
const now = new Date();

if (now < openDate) {
  // ยังไม่ถึงเวลาเปิดฟอร์ม
  form.style.display = "none";
  formStatus.classList.add("alert-warning");
  formStatus.innerHTML = `<b>The abstract submission form will open on <u>16 October 2025 at 00:00 AM</b></u>.`;
} else if (now > closeDate) {
  // หมดเขตส่งฟอร์ม
  form.style.display = "none";
  formStatus.classList.add("alert-danger");
  formStatus.innerHTML = `<b>The abstract submission period has ended.</b><br>For late submission, please contact <a href="mailto:mapsgroup.floor13@gmail.com" class="text-decoration-none">meeting coordinators</a>.`;
} else {
  // อยู่ในช่วงเวลาส่ง
  form.style.display = "block";
  formStatus.classList.add("alert-success");
  formStatus.innerHTML = `<b>The abstract submission is now open.</b><br>You can submit your abstract until <u><b>28 November 2025, 11:59 PM</b></u>.`;
}
