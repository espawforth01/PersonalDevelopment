// Define flashcards data
const flashcards = [
    // Basic Questions
    { question: "What is ethical hacking?", answer: "Ethical hacking is the practice of intentionally probing computer systems and networks for vulnerabilities and security weaknesses, with the permission of the owner, to improve security." },
    { question: "What are the main types of hackers?", answer: "The main types of hackers are white hat (ethical hackers), black hat (malicious hackers), and gray hat (hackers who may violate ethical standards but without malicious intent)." },
    { question: "What is the difference between penetration testing and vulnerability assessment?", answer: "Penetration testing simulates an attack on a system to identify and exploit vulnerabilities, while vulnerability assessment involves identifying and ranking vulnerabilities without exploiting them." },
    { question: "What is a firewall, and how does it work?", answer: "A firewall is a security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules, acting as a barrier between trusted and untrusted networks." },
    { question: "What is social engineering in the context of cybersecurity?", answer: "Social engineering is a manipulation technique that exploits human psychology to gain confidential information, often by tricking individuals into revealing sensitive data." },
    { question: "What is a zero-day vulnerability?", answer: "A zero-day vulnerability is a security flaw that is unknown to the software vendor and has not been patched, making it particularly dangerous as attackers can exploit it before a fix is available." },
    { question: "What tools are commonly used in ethical hacking?", answer: "Common tools include Nmap (network scanning), Metasploit (penetration testing), Wireshark (network analysis), and Burp Suite (web application security testing)." },
    { question: "What is the purpose of encryption in cybersecurity?", answer: "Encryption is used to convert data into a coded format to prevent unauthorized access, ensuring that only authorized users can read or manipulate the data." },
    { question: "What are the legal implications of ethical hacking?", answer: "Ethical hacking must be conducted with proper authorization to avoid legal consequences, as unauthorized access to systems can lead to criminal charges." },
    { question: "What is the importance of a security policy in an organization?", answer: "A security policy outlines the organization's approach to protecting its information assets, establishes guidelines for acceptable use, and defines the responsibilities of employees regarding security practices." },
    // Intermediate Questions
    { question: "What is the role of an ethical hacker in an organization?", answer: "An ethical hacker assesses the security of systems and networks by simulating attacks, identifying vulnerabilities, and providing recommendations to improve security posture." },
    { question: "Explain the concept of 'white box' testing versus 'black box' testing.", answer: "White box testing involves testing with full knowledge of the system's internals, while black box testing is conducted without any knowledge of the system's inner workings." },
    { question: "What is a penetration testing methodology, and why is it important?", answer: "A penetration testing methodology is a structured approach to conducting penetration tests, ensuring thoroughness and consistency in identifying vulnerabilities and assessing security. It is important for producing reliable and repeatable results." },
    { question: "What are some common types of attacks that ethical hackers simulate?", answer: "Common attacks include SQL injection, cross-site scripting (XSS), phishing, denial-of-service (DoS), and man-in-the-middle (MitM) attacks." },
    { question: "How do ethical hackers ensure they do not cause harm during testing?", answer: "Ethical hackers conduct tests within the scope defined by a contract, use controlled environments, and follow best practices to minimize the risk of disruption or damage." },
    { question: "What is the significance of obtaining written permission before conducting penetration testing?", answer: "Obtaining written permission is crucial to ensure legal compliance and to define the scope of the testing, protecting both the ethical hacker and the organization from potential legal issues." },
    { question: "What is the difference between a vulnerability scan and a penetration test?", answer: "A vulnerability scan identifies potential vulnerabilities in systems without exploiting them, while a penetration test actively attempts to exploit those vulnerabilities to assess their impact." },
    { question: "Describe what a risk assessment involves in the context of ethical hacking.", answer: "A risk assessment involves identifying, analyzing, and evaluating risks to an organization's information assets, helping prioritize security measures based on potential impact and likelihood." },
    { question: "What are some common reporting practices after conducting a penetration test?", answer: "Common practices include providing a detailed report of findings, including vulnerabilities, evidence of exploitation, risk ratings, and actionable recommendations for remediation." },
    { question: "How can ethical hackers contribute to security awareness training within an organization?", answer: "Ethical hackers can share insights from their testing experiences to educate employees about security risks, social engineering tactics, and best practices for protecting sensitive information." },
    { question: "What is the importance of keeping up with the latest cybersecurity threats and vulnerabilities?", answer: "Staying informed about the latest threats and vulnerabilities allows ethical hackers to adapt their testing strategies, ensuring they effectively identify and mitigate current risks." },
    { question: "Explain the concept of 'red teaming' and its significance in cybersecurity.", answer: "Red teaming involves simulating real-world attacks to test an organization's defenses, providing a comprehensive assessment of security measures and helping improve incident response capabilities." },
    // Hard Questions
    { question: "What is the difference between active and passive reconnaissance in ethical hacking?", answer: "Active reconnaissance involves directly interacting with the target system to gather information (e.g., pinging, port scanning), while passive reconnaissance involves gathering information without direct interaction (e.g., using public records, social media)." },
    { question: "How can ethical hackers use the MITRE ATT&CK framework in their assessments?", answer: "The MITRE ATT&CK framework provides a comprehensive knowledge base of adversary tactics and techniques based on real-world observations, allowing ethical hackers to map their testing scenarios to known attack patterns and improve their assessments." },
    { question: "What is a man-in-the-middle (MitM) attack, and how can it be mitigated?", answer: "A MitM attack occurs when an attacker intercepts and potentially alters the communication between two parties without their knowledge. Mitigation strategies include using encryption (e.g., HTTPS, VPNs), implementing strong authentication methods, and employing network segmentation." },
    { question: "Explain the concept of 'pivoting' in penetration testing.", answer: "Pivoting is the technique used by ethical hackers to gain access to additional systems within a network after initially compromising one system, allowing them to explore and exploit further vulnerabilities." },
    { question: "What are the OWASP Top Ten, and why are they significant for web application security?", answer: "The OWASP Top Ten is a list of the most critical security risks to web applications, including issues like SQL injection, cross-site scripting (XSS), and security misconfiguration. It is significant because it helps developers and security professionals prioritize security measures." },
    { question: "Describe the process of exploiting a buffer overflow vulnerability.", answer: "Exploiting a buffer overflow vulnerability involves sending more data to a buffer than it can handle, overwriting adjacent memory locations, which can allow an attacker to execute arbitrary code or crash the application. This typically involves crafting a payload and using techniques like NOP sleds." },
    { question: "What is the purpose of a reverse shell, and how is it established?", answer: "A reverse shell allows an attacker to gain command-line access to a target system by having the compromised system initiate a connection back to the attacker's machine. It is established by executing a payload that opens a network connection to the attacker's listening service." },
    { question: "How can ethical hackers utilize social engineering tactics during penetration testing?", answer: "Ethical hackers can simulate social engineering attacks (e.g., phishing, pretexting) to assess an organization's susceptibility to human manipulation and to identify weaknesses in security awareness and training programs." },
    { question: "What is the significance of a 'clean-up' phase after penetration testing?", answer: "The clean-up phase is crucial to ensure that any changes made during testing (e.g., created accounts, exploited vulnerabilities) are reverted, preventing any potential security risks that could arise from the testing activities." },
    { question: "Explain the role of threat modeling in the ethical hacking process.", answer: "Threat modeling involves identifying potential threats, vulnerabilities, and attack vectors in a system or application, allowing ethical hackers to prioritize their testing efforts and focus on the most critical areas of concern." },
    { question: "What are the legal and ethical considerations that ethical hackers must keep in mind during their work?", answer: "Ethical hackers must obtain proper authorization, adhere to defined scopes, respect privacy, and avoid causing harm to systems or data. They must also be aware of relevant laws and regulations governing cybersecurity practices." },
    { question: "How can ethical hackers assess the security of APIs?", answer: "Ethical hackers can assess APIs by testing for common vulnerabilities (e.g., authentication flaws, data exposure), analyzing input validation, and using tools to inspect API endpoints for security weaknesses." },
    { question: "What is the difference between a security incident and a security breach?", answer: "A security incident refers to any event that compromises the integrity, confidentiality, or availability of information, while a security breach specifically involves unauthorized access to data or systems, resulting in potential data loss or exposure." },
    { question: "Discuss the implications of using automated tools in penetration testing.", answer: "While automated tools can increase efficiency and help identify vulnerabilities quickly, they may also produce false positives or negatives. Ethical hackers must complement automation with manual testing to ensure thoroughness and accuracy." },
    { question: "What is the importance of maintaining a chain of custody during a security investigation?", answer: "Maintaining a chain of custody is essential to ensure that evidence collected during a security investigation is preserved, documented, and protected from tampering, thereby enhancing its credibility in legal proceedings or compliance audits." },
    // Exam Style Questions
    { question: "Describe the process of conducting a penetration test. Include the key phases involved and the significance of each phase in ensuring a thorough assessment of the target system's security.", answer: "The process of conducting a penetration test typically involves the following key phases: 1) Planning and Preparation: This phase includes defining the scope, objectives, and rules of engagement for the test. It is crucial for ensuring that all parties are aware of what will be tested and the limitations. 2) Reconnaissance: In this phase, the ethical hacker gathers information about the target system, which can include passive and active reconnaissance techniques to identify potential vulnerabilities. 3) Exploitation: This phase involves attempting to exploit identified vulnerabilities to gain unauthorized access or perform actions on the target system. The goal is to demonstrate the potential impact of the vulnerabilities. 4) Post-Exploitation: After gaining access, the ethical hacker assesses the extent of the compromise, including lateral movement within the network and data exfiltration. 5) Reporting: The final phase involves documenting the findings, including vulnerabilities discovered, evidence of exploitation, and recommendations for remediation. This report is essential for the organization to understand its security posture and take corrective actions." },
    { question: "Explain the concept of social engineering in the context of ethical hacking. Provide examples of common social engineering techniques and discuss how ethical hackers can use these techniques to improve an organization’s security awareness.", answer: "Social engineering is a manipulation technique that exploits human psychology to gain confidential information or access to systems. Common social engineering techniques include: 1) Phishing: Sending fraudulent emails that appear to be from legitimate sources to trick users into revealing sensitive information. 2) Pretexting: Creating a fabricated scenario to obtain information from individuals, such as impersonating a trusted authority. 3) Baiting: Offering something enticing to lure individuals into providing information or downloading malware. Ethical hackers can use these techniques during penetration testing to assess an organization's vulnerability to human manipulation. By simulating social engineering attacks, ethical hackers can identify weaknesses in security awareness and training programs, helping organizations to educate employees on recognizing and responding to such threats." },
    { question: "Discuss the importance of legal and ethical considerations in ethical hacking. What measures should ethical hackers take to ensure compliance with laws and regulations while conducting their assessments?", answer: "Legal and ethical considerations are crucial in ethical hacking to ensure that testing is conducted responsibly and within the boundaries of the law. Ethical hackers must: 1) Obtain Proper Authorization: Always secure written consent from the organization before conducting any testing to avoid legal repercussions. 2) Define the Scope: Clearly outline the scope of the testing in the agreement, including which systems will be tested and the methods that will be used. 3) Respect Privacy: Ensure that any personal data encountered during testing is handled according to relevant data protection laws and regulations (e.g., GDPR). 4) Avoid Causing Harm: Conduct tests in a controlled manner to minimize the risk of disruption or damage to the organization’s systems. 5) Report Findings Responsibly: Provide a detailed report of vulnerabilities discovered, along with recommendations for remediation, while ensuring that sensitive information is protected. By adhering to these measures, ethical hackers can conduct their assessments in a manner that is both legally compliant and ethically sound." },
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