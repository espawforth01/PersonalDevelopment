// Define flashcards data
const flashcards = [
    // Basic Questions
    { question: "What is the purpose of a firewall?", answer: "A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules." },
    { question: "What is phishing?", answer: "Phishing is a type of cyber attack that attempts to deceive individuals into providing sensitive information, such as usernames, passwords, or credit card details, by pretending to be a trustworthy entity in electronic communications." },
    { question: "What does VPN stand for and what is its purpose?", answer: "VPN stands for Virtual Private Network. It is used to create a secure connection over a less secure network, such as the Internet, allowing users to send and receive data as if their devices were directly connected to a private network." },
    { question: "What is two-factor authentication (2FA)?", answer: "Two-factor authentication (2FA) is a security process that requires two different forms of identification to access an account or system, enhancing security by adding an additional layer of protection." },
    { question: "What is malware?", answer: "Malware, short for malicious software, is any software intentionally designed to cause damage to a computer, server, client, or computer network, including viruses, worms, and ransomware." },
    { question: "What is a DDoS attack?", answer: "A Distributed Denial of Service (DDoS) attack is an attempt to make a machine or network resource unavailable by overwhelming it with a flood of traffic from multiple sources." },
    { question: "What is encryption?", answer: "Encryption is the process of converting information or data into a code, especially to prevent unauthorized access, ensuring that only authorized parties can read the information." },
    { question: "What is social engineering in cybersecurity?", answer: "Social engineering is a tactic used by cybercriminals to manipulate individuals into divulging confidential or personal information that may be used for fraudulent purposes." },
    { question: "What is a security breach?", answer: "A security breach is an incident that results in unauthorized access to data, applications, or networks, compromising the confidentiality, integrity, or availability of information." },
    { question: "What is the principle of least privilege?", answer: "The principle of least privilege is a security concept that restricts users' access rights to the bare minimum permissions they need to perform their job functions, reducing the risk of accidental or malicious misuse of sensitive information." },
    // Intermediate Questions
    { question: "What is the difference between symmetric and asymmetric encryption?", answer: "Symmetric encryption uses the same key for both encryption and decryption, while asymmetric encryption uses a pair of keys: a public key for encryption and a private key for decryption." },
    { question: "What is a Man-in-the-Middle (MitM) attack?", answer: "A Man-in-the-Middle (MitM) attack is a type of cyber attack where an attacker intercepts and alters communication between two parties, often to steal sensitive information or inject malware." },
    { question: "What is the purpose of a intrusion detection system (IDS)?", answer: "An intrusion detection system (IDS) is a network security system that monitors and analyzes network traffic for signs of unauthorized access or malicious activity." },
    { question: "What is the difference between a vulnerability and an exploit?", answer: "A vulnerability is a weakness or flaw in a system or software that can be exploited, while an exploit is a piece of code or technique that takes advantage of a vulnerability to gain unauthorized access or control." },
    { question: "What is a secure socket layer (SSL) certificate?", answer: "A secure socket layer (SSL) certificate is a digital certificate that verifies the identity of a website or server and enables encrypted communication between the website and its visitors." },
    { question: "What is a denial of service (DoS) attack?", answer: "A denial of service (DoS) attack is a type of cyber attack that attempts to make a machine or network resource unavailable by overwhelming it with traffic or requests." },
    { question: "What is the principle of segregation of duties?", answer: "The principle of segregation of duties is a security concept that divides tasks and responsibilities among multiple individuals or systems to prevent a single point of failure or unauthorized access." },
    { question: "What is a honeypot?", answer: "A honeypot is a decoy system or resource that is designed to attract and detect malicious activity, often to distract attackers from more valuable targets." },
    { question: "What is the difference between a threat and a risk?", answer: "A threat is a potential occurrence that could compromise the security of a system or data, while a risk is the likelihood and potential impact of a threat." },
    { question: "What is a security information and event management (SIEM) system?", answer: "A security information and event management (SIEM) system is a software solution that collects, monitors, and analyzes security-related data from various sources to detect and respond to security threats." },
    { question: "What is a penetration test?", answer: "A penetration test is a simulated cyber attack against a computer system, network, or web application to test its defenses and identify vulnerabilities." },
    { question: "What is the principle of defense in depth?", answer: "The principle of defense in depth is a security concept that involves implementing multiple layers of defense mechanisms to protect against various types of attacks and threats." },
    // Hard Questions
    { question: "What is a zero-day vulnerability?", answer: "A zero-day vulnerability is a security flaw that is unknown to the software vendor and for which no patch or fix has been released, making it particularly dangerous because attackers can exploit it before it is discovered and mitigated." },
    { question: "Explain the concept of a security token.", answer: "A security token is a physical or digital device that is used to gain access to a network or system, providing an additional layer of security by requiring the user to possess the token in addition to their username and password." },
    { question: "What is the difference between a white hat hacker and a black hat hacker?", answer: "A white hat hacker is an ethical hacker who uses their skills to improve security by finding vulnerabilities and helping organizations fix them, while a black hat hacker exploits vulnerabilities for malicious purposes, such as stealing data or causing damage." },
    { question: "What is the purpose of a digital signature?", answer: "A digital signature is a cryptographic mechanism that verifies the authenticity and integrity of a message or document, ensuring that it was created by a specific sender and has not been altered in transit." },
    { question: "What is the role of a public key infrastructure (PKI)?", answer: "A public key infrastructure (PKI) is a framework that manages digital certificates and public-key encryption, providing secure communication and authentication over networks by enabling users to exchange information securely." },
    { question: "What is a buffer overflow attack?", answer: "A buffer overflow attack occurs when a program writes more data to a buffer than it can hold, causing adjacent memory to be overwritten, which can lead to arbitrary code execution or system crashes." },
    { question: "Describe the concept of threat modeling.", answer: "Threat modeling is a structured approach to identifying and assessing potential security threats to a system or application, allowing developers to prioritize risks and implement appropriate security measures during the design phase." },
    { question: "What is the function of a web application firewall (WAF)?", answer: "A web application firewall (WAF) is a security solution that monitors and filters HTTP traffic to and from a web application, protecting it from attacks such as SQL injection, cross-site scripting (XSS), and other application-layer threats." },
    { question: "What is the purpose of a security audit?", answer: "A security audit is a systematic evaluation of an organization's information system to assess its security posture, compliance with policies and regulations, and effectiveness of security controls." },
    { question: "What is a rootkit?", answer: "A rootkit is a type of malicious software that is designed to gain unauthorized access to a computer system while remaining hidden from detection, allowing attackers to maintain control over the system without the user's knowledge." },
    { question: "Explain the concept of ransomware.", answer: "Ransomware is a type of malware that encrypts the victim's files or locks them out of their system, demanding a ransom payment in exchange for the decryption key or restoring access." },
    { question: "What is the difference between a virus and a worm?", answer: "A virus is a type of malware that attaches itself to a legitimate program or file and requires user action to spread, while a worm is a standalone malware that replicates itself and spreads across networks without user intervention." },
    { question: "What is the principle of least privilege and why is it important?", answer: "The principle of least privilege is a security concept that restricts users' access rights to the minimum necessary to perform their job functions, reducing the risk of accidental or malicious misuse of sensitive data and systems." },
    { question: "What is an Advanced Persistent Threat (APT)?", answer: "An Advanced Persistent Threat (APT) is a prolonged and targeted cyber attack in which an intruder gains access to a network and remains undetected for an extended period, often with the goal of stealing sensitive data or compromising systems." },
    { question: "What is the difference between data at rest, data in transit, and data in use?", answer: "Data at rest refers to inactive data stored physically in any digital form (e.g., databases, file systems); data in transit is active data that is being transferred over a network; and data in use refers to data that is currently being processed by an application or user." },
    // Exam Style Questions
    { question: "Discuss the implications of a zero-day vulnerability in a software application. How can organizations mitigate the risks associated with such vulnerabilities?", answer: "A zero-day vulnerability is a security flaw that is unknown to the software vendor, meaning there is no patch or fix available at the time of discovery. The implications of such vulnerabilities can be severe, as attackers can exploit them to gain unauthorized access, steal sensitive data, or disrupt services before the vendor has a chance to respond. Organizations can mitigate risks associated with zero-day vulnerabilities by implementing a robust security posture that includes: 1) Regularly updating and patching software as soon as fixes are available. 2) Utilizing intrusion detection and prevention systems (IDPS) to monitor for unusual activity. 3) Employing application whitelisting to limit the execution of unapproved software. 4) Conducting regular security audits and penetration testing to identify potential weaknesses. 5) Training employees to recognize potential threats and practice good cybersecurity hygiene." },
    { question: "Explain the concept of defense in depth and provide examples of how it can be implemented in an organization's cybersecurity strategy.", answer: "Defense in depth is a cybersecurity strategy that involves implementing multiple layers of security controls throughout an organization's IT infrastructure to protect against various types of threats. The idea is that if one layer fails, additional layers will still provide protection. Examples of how defense in depth can be implemented include: 1) Physical Security: Using locked doors, security guards, and surveillance cameras to protect physical assets. 2) Network Security: Deploying firewalls, intrusion detection systems (IDS), and virtual private networks (VPNs) to secure network traffic. 3) Endpoint Security: Installing antivirus software and endpoint detection and response (EDR) solutions on devices to protect against malware. 4) Application Security: Implementing secure coding practices, regular code reviews, and web application firewalls (WAFs) to protect applications from attacks. 5) User Education and Awareness: Training employees on phishing attacks, social engineering, and safe browsing practices to reduce human error. " },
    { question: "Analyze the role of social engineering in cybersecurity breaches. What measures can organizations take to prevent social engineering attacks?", answer: "Social engineering is a tactic used by cybercriminals to manipulate individuals into divulging confidential or personal information, often by exploiting human psychology rather than technical vulnerabilities. Social engineering can lead to significant cybersecurity breaches, as attackers may gain access to sensitive information, systems, or networks through deception. Examples include phishing emails, pretexting, baiting, and tailgating. To prevent social engineering attacks, organizations can take the following measures: 1) Employee Training: Regularly train employees to recognize social engineering tactics and encourage skepticism regarding unsolicited requests for information. 2) Verification Procedures: Establish protocols for verifying the identity of individuals requesting sensitive information, such as requiring multiple forms of identification. 3) Access Controls: Implement strict access controls to limit the information available to employees based on their roles and responsibilities. 4) Incident Reporting: Encourage a culture of reporting suspicious activities and potential social engineering attempts to the appropriate security personnel. 5) Simulated Attacks: Conduct regular simulated social engineering attacks (e.g., phishing tests) to assess employee awareness and improve training programs." },
    // Blank Template
    { question: "BLANK", answer: "BLANK" },
    // Add more flashcards here...
];

// Initialize variables
let currentCardIndex = 0;
let correctAnswers = 0;

// Get HTML elements
const flashcard = document.querySelector(".flashcard");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const flipButton = document.getElementById("flip-button");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");

// Function to display current flashcard
function displayCurrentCard() {
    questionElement.textContent = flashcards[currentCardIndex].question;
    answerElement.textContent = flashcards[currentCardIndex].answer;
}

// Function to flip the flashcard
function flipCard() {
    flashcard.classList.toggle("flip");
}

// Function to check if answer is correct
function checkAnswer() {
    // Assuming the user has answered correctly for this example
    correctAnswers++;
    resultElement.textContent = `Correct! You have answered ${correctAnswers} out of ${flashcards.length} correctly.`;
}

// Function to go to the next flashcard
function nextCard() {
    currentCardIndex++;
    if (currentCardIndex >= flashcards.length) {
        currentCardIndex = 0;
    }
    displayCurrentCard();
    flashcard.classList.remove("flip");
}

// Event listeners
flipButton .addEventListener("click", flipCard);
nextButton.addEventListener("click", nextCard);

// Display the first flashcard
displayCurrentCard();