import { quizQuestion } from './quiz';

const NetworkQUIZ: quizQuestion[] = [
    {
        question: "Networking is: ",
        id: 1,
        options: 
        [
            {
                optionText: "The exchange of information and ideas from one person to another",
                isCorrect: true
            },
            {
                optionText: "The protocols that a printer employs",
                isCorrect: false
            },
            {
                optionText: "The various methods we use to encrypt our data",
                isCorrect: false
            },
            {
                optionText: "How a hacker gets access to your personal information",
                isCorrect: false
            }
        ]
    },
    {
        question: "What is a packet?",
        id: 2,
        options: 
        [
            {
                optionText: "The entire message that is being transmitted over the Internet",
                isCorrect: false
            },
            {
                optionText: "The physical connection between different hosts",
                isCorrect: false
            },
            {
                optionText: "A piece of a larger message to be transmitted over the Internet",
                isCorrect: true
            },
            {
                optionText: "Something that you put your groceries inside",
                isCorrect: false
            }
        ]
    },
    {
        question: "Which of these is NOT a layer in the OSI model?",
        id: 3,
        options: 
        [
            {
                optionText: "Network Layer",
                isCorrect: false
            },
            {
                optionText: "Cloud Layer",
                isCorrect: true
            },
            {
                optionText: "Physical Layer",
                isCorrect: false
            },
            {
                optionText: "Data Link Layer",
                isCorrect: false
            }
        ]
    },
    {
        question: "What is the purpose of a MAC address?",
        id: 4,
        options: 
        [
            {
                optionText: "Tell you where to go to fix your iPhone",
                isCorrect: false
            },
            {
                optionText: "Group multiple hosts under one address for later reference",
                isCorrect: false
            },
            {
                optionText: "Provide a protocol for the Transport Layer",
                isCorrect: false
            },
            {
                optionText: "Provide a unique identifier for each host when local area networks (a part of Network Core) are directing internal communication",
                isCorrect: true
            }
        ]
    }
]

const SocialQUIZ: quizQuestion[] = [
    {
        question: "Social Engineering is: ",
        id:1,
        options: 
        [
            {
                optionText: "Techniques to get you more followers on Instagram",
                isCorrect: false
            },
            {
                optionText: "Methods an attacker uses to get information from a user",
                isCorrect: true
            },
            {
                optionText: "The current up-to-date encryption method for social services",
                isCorrect: false
            },
            {
                optionText: "The final layer of the OSI layer model",
                isCorrect: false
            }
        ]
    },
    {
        question: "Computers and their software are the easiest target for attackers",
        id:2,
        options: 
        [
            {
                optionText: "True",
                isCorrect: false
            },
            {
                optionText: "False",
                isCorrect: true
            }
        ]
    },
    {
        question: "'There are only 3 million dollar prizes left! Click this link to claim one!' is an example of what type of social engineering?",
        id: 3,
        options: 
        [
            {
                optionText: "Authority Tactic",
                isCorrect: false
            },
            {
                optionText: "Familiarity Tactic",
                isCorrect: false
            },
            {
                optionText: "Intimidation Tactic",
                isCorrect: false
            },
            {
                optionText: "Urgency Tactic",
                isCorrect: true
            }
        ]
    },
    {
        question: "Which of these is NOT an effective way to avoid social engineering attacks?",
        id: 4,
        options: 
        [
            {
                optionText: "Delete any suspicious emails from unknown senders",
                isCorrect: false
            },
            {
                optionText: "Checking that the content of the email makes sense for whom it's coming from",
                isCorrect: false
            },
            {
                optionText: "Opening emails from unknown senders and clicking links they provide",
                isCorrect: true
            },
            {
                optionText: "Checking a verified source (official website) for information before trusting an unverified source (website from email)",
                isCorrect: false
            }
        ]
    }
]

const MalwareQUIZ: quizQuestion[] = [
    {
        question: "Which of these is NOT a goal of malware?",
        id: 1,
        options: 
        [
            {
                optionText: "Ensure your system security settings are up to date",
                isCorrect: true
            },
            {
                optionText: "Disrupt the availability of your system",
                isCorrect: false
            },
            {
                optionText: "Gain access to root authorization/privilidges on your system",
                isCorrect: false
            },
            {
                optionText: "Search through your files for sensitive information",
                isCorrect: false
            }
        ]
    },
    {
        question: "What is a payload?",
        id: 2,
        options: 
        [
            {
                optionText: "The money malware transfers into your bank account",
                isCorrect: false
            },
            {
                optionText: "What the virus/worm does when it is triggered/executed",
                isCorrect: true
            },
            {
                optionText: "The event that causes the virus/worm to execute",
                isCorrect: false
            },
            {
                optionText: "How a worm propagates from system to system",
                isCorrect: false
            }
        ]
    },
    {
        question: "When a virus/worm is waiting for a certain event to occur, it is in what phase: ",
        id: 3,
        options: 
        [
            {
                optionText: "Execution phase",
                isCorrect: false
            },
            {
                optionText: "Propagation phase",
                isCorrect: false
            },
            {
                optionText: "Triggering phase",
                isCorrect: false
            },
            {
                optionText: "Dormant phase",
                isCorrect: true
            }
        ]
    },
    {
        question: "If a virus/worm is able to install a rootkit on your system, you can get rid of the rootkit by simply restarting your computer",
        id: 4,
        options: 
        [
            {
                optionText: "True",
                isCorrect: false
            },
            {
                optionText: "False",
                isCorrect: true
            }
        ]
    }
]

const CryptoQUIZ: quizQuestion[] = [
    {
        question: "Cryptography is: ",
        id: 1,
        options: 
        [
            {
                optionText: "The methods we use to communicate with one another in a secure fashion",
                isCorrect: true
            },
            {
                optionText: "Uncovering a secret organization known as the 'Illumninati', who is plotting to kill the Pope",
                isCorrect: false
            },
            {
                optionText: "A protocol used on the Internet",
                isCorrect: false
            },
            {
                optionText: "A type of social engineering attack",
                isCorrect: false
            }
        ]
    },
    {
        question: "The main difference between symmetric and asymmetric encryption is the length of the key used",
        id: 2,
        options: 
        [
            {
                optionText: "True",
                isCorrect: false
            },
            {
                optionText: "False",
                isCorrect: true
            }
        ]
    },
    {
        question: "The downfall of symmetric encryption is",
        id: 3,
        options: 
        [
            {
                optionText: "Limit on size of message we are encrypting",
                isCorrect: false
            },
            {
                optionText: "Keeping the shared secret key secret",
                isCorrect: true
            },
            {
                optionText: "The complexity of encrypting and decrypting a message",
                isCorrect: false
            },
            {
                optionText: "Eve can decrypt an encrypted message with or without the secret key",
                isCorrect: false
            }
        ]
    },
    {
        question: "Which of these details a general format of the asymmetric key encryption and decryption process",
        id: 4,
        options: 
        [
            {
                optionText: "Alice encrypts her message with Bob's public key, and sends the encrypted message to Eve. Eve then decrypts the message using Bob's public key",
                isCorrect: false
            },
            {
                optionText: "Alice encrypts a message with Bob's private key, and sends the encrypted message to Bob. Bob then decrypts thius message using his public key",
                isCorrect: false
            },
            {
                optionText: "Bob encrypts a message with his private key, and sends the encrypted message to Alice. Alice then decrypts this message using Bob's public key",
                isCorrect: false
            },
            {
                optionText: "Alice encrypts a message with Bob's public key, and sends the encrypted message to Bob. Bob then decrypts this message using his private key",
                isCorrect: true
            }
        ]
    }
]

export const QUIZZES: quizQuestion[][] = [
    NetworkQUIZ,
    CryptoQUIZ,
    MalwareQUIZ,
    SocialQUIZ
]