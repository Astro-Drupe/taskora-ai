const demoForm = document.querySelector("#demo-form");

demoForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!demoForm.reportValidity()) return;

  const values = new FormData(demoForm);
  const name = String(values.get("name") ?? "").trim();
  const email = String(values.get("email") ?? "").trim();
  const company = String(values.get("company") ?? "").trim();
  const message = String(values.get("message") ?? "").trim();

  const body = [
    `Nom : ${name}`,
    `E-mail : ${email}`,
    `Entreprise : ${company || "Non renseignée"}`,
    "",
    "Message :",
    message,
  ].join("\n");

  const subject = `Demande de démonstration Taskora AI — ${name}`;
  const mailto = `mailto:antoine.cadet.pro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
});
