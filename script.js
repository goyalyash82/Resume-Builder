const form = document.getElementById("resumeForm");
const display = {
  name: document.getElementById("rName"),
  email: document.getElementById("rEmail"),
  phone: document.getElementById("rPhone"),
  education: document.getElementById("rEducation"),
  experience: document.getElementById("rExperience"),
  skills: document.getElementById("rSkills")
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  display.name.textContent = document.getElementById("name").value;
  display.email.textContent = document.getElementById("email").value;
  display.phone.textContent = document.getElementById("phone").value;
  display.education.textContent = document.getElementById("education").value;
  display.experience.textContent = document.getElementById("experience").value;
  display.skills.textContent = document.getElementById("skills").value;
});
