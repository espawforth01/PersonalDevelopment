// Define flashcards data
const flashcards = [
    // Basic Questions
    { question: "What is digital forensics?", answer: "Digital forensics is the process of collecting, preserving, analyzing, and presenting electronic data in a manner that is legally acceptable." },
    { question: "What are the main goals of digital forensics?", answer: "The main goals are to identify, preserve, recover, and analyze data from digital devices to support investigations and legal proceedings." },
    { question: "What types of devices can be examined in digital forensics?", answer: "Devices include computers, smartphones, tablets, servers, and any other electronic devices that store data." },
    { question: "What is the importance of chain of custody in digital forensics?", answer: "Chain of custody is crucial to ensure that evidence is preserved and can be verified as authentic and unaltered throughout the investigation." },
    { question: "What is a forensic image?", answer: "A forensic image is a bit-by-bit copy of a digital storage device, capturing all data, including deleted files and unallocated space." },
    { question: "What tools are commonly used in digital forensics?", answer: "Common tools include EnCase, FTK (Forensic Toolkit), Autopsy, and Sleuth Kit." },
    { question: "What is the difference between volatile and non-volatile data?", answer: "Volatile data is temporary and lost when a device is powered off (e.g., RAM), while non-volatile data is persistent and remains even after power loss (e.g., hard drives)." },
    { question: "What is the role of a digital forensics expert?", answer: "A digital forensics expert analyzes digital evidence, provides expert testimony in court, and assists law enforcement in investigations." },
    { question: "What is data recovery in the context of digital forensics?", answer: "Data recovery involves retrieving lost, deleted, or corrupted data from digital devices for analysis." },
    { question: "What legal considerations must be taken into account in digital forensics?", answer: "Legal considerations include ensuring compliance with laws regarding privacy, data protection, and obtaining proper warrants for searches." },
    // Intermediate Questions
    { question: "What is the process of acquiring digital evidence?", answer: "The process involves creating a forensic image of the device, ensuring that the original data is not altered during the acquisition." },
    { question: "How does encryption affect digital forensics investigations?", answer: "Encryption can hinder access to data, requiring forensic experts to use specialized tools or techniques to decrypt the information for analysis." },
    { question: "What are the different types of digital evidence?", answer: "Types include file systems, email communications, internet browsing history, logs, and metadata." },
    { question: "What is the significance of metadata in digital forensics?", answer: "Metadata provides information about the data, such as creation dates, modification dates, and file access history, which can be crucial in investigations." },
    { question: "What challenges do forensic analysts face with cloud storage?", answer: "Challenges include jurisdiction issues, data ownership, access rights, and the ephemeral nature of cloud data." },
    { question: "What is a hash value, and why is it important in digital forensics?", answer: "A hash value is a unique identifier generated from data; it is used to verify the integrity of the data and ensure that it has not been altered." },
    { question: "How can deleted files be recovered in digital forensics?", answer: "Deleted files can often be recovered by analyzing the file system for remnants of the files or using data recovery tools that scan for unallocated space." },
    { question: "What are the implications of using open-source tools in digital forensics?", answer: "Open-source tools can be cost-effective and customizable, but they may lack the support and validation of commercial tools, raising concerns about reliability." },
    { question: "What is the role of a digital forensics investigator during a legal proceeding?", answer: "The investigator provides expert testimony, explains the methods used to analyze evidence, and ensures that the evidence is presented in a clear and understandable manner." },
    { question: "What is the significance of live data acquisition?", answer: "Live data acquisition allows forensic analysts to capture volatile data that would be lost if the device is powered down, such as RAM contents and active network connections." },
    { question: "What ethical considerations must be taken into account in digital forensics?", answer: "Ethical considerations include maintaining confidentiality, avoiding conflicts of interest, and ensuring that investigations are conducted lawfully and without bias." },
    { question: "How can digital forensics support incident response efforts?", answer: "Digital forensics can help identify the source of a security breach, determine the extent of the damage, and provide evidence for remediation and future prevention strategies." },
    // Hard Questions
    { question: "What are the key differences between static and dynamic analysis in digital forensics?", answer: "Static analysis involves examining the data without executing the code, while dynamic analysis involves executing the code in a controlled environment to observe its behavior." },
    { question: "How does the concept of 'dead box' forensics differ from 'live' forensics?", answer: "Dead box forensics refers to analyzing a powered-off device, whereas live forensics involves analyzing a device that is still powered on, capturing volatile data." },
    { question: "What is the role of a digital forensics laboratory in the investigation process?", answer: "A digital forensics laboratory conducts in-depth analysis of digital evidence, maintains the integrity of evidence, and provides expert testimony while adhering to strict protocols and standards." },
    { question: "Explain the significance of the FBI's Computer Analysis Response Team (CART) in digital forensics.", answer: "CART provides specialized support for digital investigations, including evidence recovery, analysis, and expert testimony, often in high-profile cases." },
    { question: "What are the challenges associated with analyzing mobile devices in digital forensics?", answer: "Challenges include diverse operating systems, encryption, data fragmentation, and the need for specialized tools to bypass security measures." },
    { question: "How do file system structures impact data recovery efforts in digital forensics?", answer: "Different file systems (e.g., NTFS, FAT32, ext4) have unique structures and recovery mechanisms, affecting how data is stored, indexed, and retrieved, including handling of deleted files." },
    { question: "What is the importance of using write blockers during evidence acquisition?", answer: "Write blockers prevent any modification to the original data during acquisition, ensuring the integrity of the evidence and maintaining the chain of custody." },
    { question: "Describe the process and importance of hashing in digital forensics.", answer: "Hashing generates a unique digital fingerprint of data; it is used to verify data integrity, ensuring that the evidence has not been altered during collection and analysis." },
    { question: "What advanced techniques can be used to recover data from damaged or corrupted storage devices?", answer: "Techniques include physical repairs, using specialized data recovery software, and forensic imaging to recover fragments of data from damaged sectors." },
    { question: "How do anti-forensics techniques hinder digital investigations?", answer: "Anti-forensics techniques can include data obfuscation, encryption, and the use of software to alter timestamps or metadata, complicating the analysis and interpretation of evidence." },
    { question: "What is the significance of the Digital Forensics Research Workshop (DFRWS) in the field?", answer: "DFRWS fosters collaboration and innovation in digital forensics research, providing a platform for sharing findings, tools, and methodologies among professionals and academics." },
    { question: "Explain the concept of 'steganography' and its implications for digital forensics.", answer: "Steganography is the practice of hiding data within other non-secret data (e.g., images, audio files); it poses challenges for detection and analysis in forensic investigations." },
    { question: "What legal frameworks govern digital forensics practices, and how do they vary by jurisdiction?", answer: "Legal frameworks include laws on privacy, data protection, and digital evidence admissibility; they vary significantly by jurisdiction, impacting how investigations are conducted." },
    { question: "Discuss the challenges of conducting digital forensics on cloud environments.", answer: "Challenges include data ownership issues, jurisdictional complexities, the transient nature of cloud data, and the need for cooperation with third-party service providers." },
    { question: "How can machine learning and artificial intelligence be applied in digital forensics?", answer: "Machine learning and AI can enhance data analysis, automate pattern recognition, and assist in identifying anomalies or suspicious behavior in large datasets during investigations." },
    // Exam Style Questions
    { question: "Machine learning and AI can enhance data analysis, automate pattern recognition, and assist in identifying anomalies or suspicious behavior in large datasets during investigations.", answer: "The process of acquiring digital evidence from a computer system involves several key steps: 1) Preparation: Gather necessary tools and ensure a controlled environment for the acquisition. 2) Documentation: Record the state of the device, including time, date, and any visible data. 3) Use of Write Blockers: Connect a write blocker to the storage device to prevent any modifications to the original data during acquisition. 4) Creating a Forensic Image: Use forensic imaging software to create a bit-by-bit copy of the storage device, capturing all data, including deleted files and unallocated space. 5) Verification: Generate a hash value of both the original and the forensic image to ensure integrity and verify that the image is an exact copy. 6) Chain of Custody: Maintain a detailed log of all actions taken, including who handled the evidence, when, and how, to ensure that the evidence can be verified as authentic and unaltered throughout the investigation." },
    { question: "Explain the significance of metadata in digital forensics investigations and provide examples of how it can be used to support legal cases.", answer: "Metadata is crucial in digital forensics as it provides contextual information about digital files, such as creation dates, modification dates, access history, and file size. It can reveal the timeline of events related to the file's usage and can help establish ownership or authorship. For example: 1) In a case involving document forgery, metadata can show when a document was created or altered, helping to determine if it was modified after a certain date. 2) In email investigations, metadata can provide information about the sender, recipient, and timestamps, which can be used to establish communication patterns or confirm the timeline of events. 3) Metadata can also assist in identifying deleted files, as remnants of metadata may remain even after the file is no longer visible in the file system." },
    { question: "Discuss the challenges faced by forensic analysts when dealing with encrypted data during investigations. What techniques can be employed to overcome these challenges?", answer: "Forensic analysts face several challenges when dealing with encrypted data, including: 1) Access Restrictions: Encryption can prevent analysts from accessing the data without the appropriate decryption keys or passwords. 2) Time-Consuming Decryption Processes: Decrypting data can be resource-intensive and may require significant time and computational power. 3) Legal and Ethical Implications: There may be legal considerations regarding privacy and data protection when attempting to decrypt data. To overcome these challenges, analysts can employ several techniques: 1) Seeking Legal Authorization: Obtain search warrants or legal permissions to compel individuals to provide decryption keys or passwords. 2) Using Specialized Tools: Utilize forensic tools designed to bypass or crack encryption, such as brute-force or dictionary attacks, though these may not always be successful. 3) Analyzing Volatile Data: Capture live data from a powered-on device to access unencrypted data in RAM before it is lost. 4) Collaboration with Experts: Work with cryptography experts who may have advanced knowledge or tools to assist in decrypting the data." },
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