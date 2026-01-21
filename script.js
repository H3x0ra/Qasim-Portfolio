new Typed(".typed", {
  strings: [
    "SOC Analyst",
    "Active Directory Security",
    "Incident Response",
    "Ethical Hacking"
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

const certs = [
  "IMAGES/Linux.jpg",
  "IMAGES/LRSA.jpg",
  "IMAGES/LRPA.jpg",
  "IMAGES/CyberX.jpg",
  "IMAGES/PEH.jpg"
];

let i = 0;
setInterval(() => {
  document.getElementById("certImg").src = certs[i];
  i = (i + 1) % certs.length;
}, 4000);
