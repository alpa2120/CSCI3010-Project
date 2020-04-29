import { LearnTab } from './learn-tab';

const NetworkTABS: LearnTab[] = [
    {
        title: "What is Networking?",
        info: ["In general, networking is the exchange of information and ideas from one person to another. If you know something that can help someone else, you can share that information with them over what we call a network.", "A network is an abstract term, but more or less describes how certain people are connected to one another, maybe by the US postal system, a connection to the internet, or even a cup-string phone line!", "Whoever is connected to this network has quick and easy access to the information being provided by others on the same network. The need to share information effectively and efficiently has been essential to our world as it develops, and is the underlying reason for the creation and evolution of what we call the Internet.", "But what is the Internet? In the short, the Internet is a culmination of what we just defined, networks! Imagine a network of networks, but this network of networks is then included with other networks of networks, that’s the Internet - a “network of networks”.", "This fundamental structure is essential to the various processes that allow you to send an email from your office to someone on the other side of the world, or to play an online game with other people simultaneously. Amidst this structure are the underlying ‘layers’, defined by the OSI layer model, that allow the Internet to function, what we will be covering in the next slides."]
    },
    {
        title: "Networking Terms:",
        info: ["Host: A host is the term we give to devices/systems that are connected to the Internet. This can include anything from a laptop to your smart fridge, it’s the thing that we interact with to get information from the Internet.", "Protocol: A protocol simply defines how communication is going to happen. We, as humans, have protocols that we use everyday; if someone says ‘hello’ to you, you usually respond with a ‘hello’ back. Similarly, the Internet has protocols of its own - how your laptop communicates with your home router and how that router communicates with a server somewhere - that can be viewed as ‘conversations’ between different entities on the Internet.", "Packet: A packet is a piece of a message that is sent over the data link layer. The transport layer splits up messages between hosts into packets and transmits the message to the destination address one packet at a time."]
    },
    {
        title: "Layer 1: Physical Layer",
        info: ["This layer relies on the physical infrastructure layed out so the Internet can function. Telephone lines, fiber optic cables, and even satellites are all examples of what this layer uses to send information from location to another, we call them physical links.", "Telephone lines and fiber optic cables would fall into the category of ‘guided’ links, while satellites transmitting radio signals would fall into the category of ‘unguided’ links.", "These physical links lie in between transmitters and receivers, a transmitter sends something across the link to a receiver.", "The main focus of this layer is reliability, ensuring that the information gets to a location unchanged and in a timely manner."]
    },
    {
        title: "Layer 2: Data Link Layer",
        info: ["This layer focuses on how we distribute/direct the information we are sending across the physical links.", "A host has a Media Access Control address (MAC address) property associated with it which serves as its ‘physical’ address on the Internet. The physical address of a host on the Internet is not the same as the physical address of your home, rather a host’s MAC address is more like your social security number, it gives a device a unique identifier that can be used to locate it on the Internet.", "These MAC addresses are used by the “Network Core”, a mesh of interconnected routers, to provide the logic that governs how information is sent from network to network."]
    },
    {
        title: "Layer 3: Network Layer",
        info: ["The network layer is responsible for sending information destined for another host.", "On this layer we have an extremely important protocol called IP, or the Internet Protocol. You may have realized that if we only had the MAC address of a device, it would be near impossible to figure out how to get information to that device - there are billions of devices in the world so checking every device address for a match wouldn’t work! We will see how IP comes into play soon.", "End systems (hosts) connect to the Internet via access ISPs (Internet Service Provider). These access ISPs must be interconnected so that we can communicate with one another, it wouldn’t be very useful if people with xFinity couldn’t share information to people with CenturyLink. We then connect these access ISPs (local to you) to global transit ISPs.", "The IP protocol gives a virtual address (IP address) to a host/router that is under the umbrella of an ISP. An access ISP will save all the IP addresses of the devices that are connected to the Internet through it, and is able to share these addresses via the interconnected mesh of access/global ISPs.", "If Alice sends a message to Bob, Alice’s access ISP needs to find the IP address of Bob (so the message can be sent to Bob) so it communicates (protocols!) with other ISPs to find that information."]
    },
    {
        title: "Layer 4: Transport Layer",
        info: ["The network layer allowed for logical communication between hosts.", "Similarly, the transport layer allows for logical communication between application processes running on different hosts. This layer builds upon the IP protocol by including another protocol inside of it, TCP.", "TCP stands for Transmission Control Protocol, and is rooted with the IP protocol. While IP provides the destination and source addresses (IP address), TCP dictates how the conversation between two hosts is carried out. Using the TCP protocol, the transport layer provides a reliable data connection between two devices. It divides the data in packets, acknowledges the packets that it has received from the other device, and makes sure that the other device acknowledges the packets it receives."]
    },
    {
        title: "Layer 5: Application Layer",
        info: ["The application layer is quite simple. Any application that uses either the TCP or UDP (not covered in layer 4) protocol to communicate is in the application layer.", "Typically, this layer consists of what a user actually interacts with, whether it be skype, email, or an online game.", "The layers underneath the application layer handle all of the nitty gritty details needed to communicate, leaving the simple job of taking user input and providing a message to the layers below."]
    }
]

const CryptoTABS: LearnTab[] = [
    {
        title: "What is Cryptography?",
        info: ["Cryptography looks at the various techniques that we can use in-order to communicate with one another in a secure fashion. Some form of cryptography can be observed in nearly any interaction between two people, regardless of the interaction being virtual or in person.", "For example, say Alice is in a crowded room and needs to tell Bob a secret. It probably wouldn’t be a good idea for Alice to shout her secret across the room so Bob can hear it, it wouldn’t be a secret anymore. Instead, Alice walks over to Bob and whispers the secret so only Bob can hear it.", "These types of interactions and many more can be reflected over to the online world; where instead of being in a crowded room, Alice finds herself communicating over the Internet."]
    },
    {
        title: "Cryptography Terms:",
        info: ["Messages/plaintext: What we are trying to send securely between two parties. It could be a password to a website or even your credit card information.", "Key: What is being used to encrypt and decrypt the messages we are sending. Very similar to a real-life key, we can use a key to either lock up our house (encrypt a message) or to unlock our house (decrypt a message).", "Alice, Bob, and Eve: Names used in examples to simplify the interactions between different parties. We consider Alice and Bob to be the ‘good’ guys, while Eve is considered to be the ‘bad’ guy - she is trying to intercept the messages Alice and Bob send to each other."]
    },
    {
        title: "Cybersecurity and Cryptography:",
        info: ["There are three main types of cryptography when in the realm of cybersecurity: symmetric key encryption, asymmetric key encryption, and one way encryption (hashing).", "We will cover symmetric and asymmetric key encryption, including the basics, pros/cons, and an example of each."]
    },
    {
        title: "Symmetric Key Encryption:",
        info: ["Symmetric key encryption is when the two parties communicating use the same key to encrypt/decrypt the messages they send to each other.", "The trick is that when you use the key to encrypt a message, applying the same key again will output the original message.", "As long as the two parties, and only the two parties, share the same key, they will be able to communicate securely to one another."]
    },
    {
        title: "Symmetric Key Encryption:",
        info: ["The biggest benefit to symmetric key encryption is the speed/efficiency of encrypting and decrypting data/messages.", "Bob doesn’t have to apply a complicated algorithm to decrypt the message that Alice sends, rather he just decrypts the message in a single step using the secret key he shares with Alice."]
    },
    {
        title: "Symmetric Key Encryption:",
        info: ["The downside to symmetric key encryption is distributing the key to someone you want to communicate with and ensuring that after distribution, the key remains secret.", "This creates a “Catch-22” situation; if Alice is able to securely send Bob the key, then she may as well just send the message in the same secure fashion. If she can’t securely send Bob the key, then Alice and Bob won’t be able to communicate. Assume Alice sends Bob the key securely. It is now up to both Alice and Bob to keep that key secret because if anyone gets their hands on the key, they can read the messages that Alice and Bob send to each other"]
    },
    {
        title: "Symmetric Key Encryption:",
        info: ["Example: Symmetric key encryption has been used well before the first computer was created. The Caesar Cipher, named after Julius Caesar, was used to encrypt and decrypt hand-written messages being sent around the Roman Empire.", "It works like this: We assign every letter in the alphabet a number: A = 1, B = 2, C = 3,…, Z = 26", "The two parties communicating then decide on a random number that they both have (the symmetric key).", "Sticking with the Roman names here, Augustus has a message he wants to send to Brutus, and they have decided their number is 4. Augustus’ message is this: HELLO BRUTUS", "Before sending this message off to Brutus, Augustus encrypts the message by adding the value of the key to every letter in the message, remember every letter in the original message has been assigned a value 1 to 26.", "For example, H has the value of 8, so we add 4 to it and get the value 12, so H is written as L (12 corresponds to L) Augustus’ encrypted message is now this: LIPPS FVYXVW.", "When Brutus gets the encrypted message, he does the opposite of what Augustus has done by subtracting the value of the key from every letter in the message.", "For example, L has the value 12, so we subtract 4 from it and get the value 8, so L is written as H. Brutus’ decrypted message is now this: HELLO BRUTUS"]
    },
    {
        title: "Asymmetric Key Encryption:",
        info: ["Asymmetric key encryption is when the two parties communicating use different keys to encrypt/decrypt the messages they send to each other.", "Crucial to asymmetric encryption is the concept of a public/private key pair. We generate these pairs together, so that encrypting and decrypting a message is unique to each pair - the public key is used to encrypt a message, while the private key is used to decrypt a message.", "Importantly, the private key only decrypts a message if the message was encrypted using its public key. That being said, a private key cannot decrypt any message that was encrypted with any arbitrary public key, only messages encrypted using its public key counterpart."]
    },
    {
        title: "Asymmetric Key Encryption:",
        info: ["The benefit of asymmetric key encryption lies in the distribution of the public/private key pair.", "If someone creates a key pair, nobody else has access to the private key created, eliminating the need of finding a way to securely send a key to someone.", "Another benefit includes that if Eve wants to decrypt a message being sent to Bob, she needs Bob’s private key. Assuming Bob keeps his private key private, Eve can only hope that there is some algorithm that can ‘reconstruct’ Bob’s private key - a process that is considered impossible using classical computers."]
    },
    {
        title: "Asymmetric Key Encryption:",
        info: ["The main disadvantage of asymmetric key encryption is that it requires the key to be “cryptographically secure”, in layman's terms this means the key needs to be really, really long.", "Since Eve will never get her hands on Bob’s private key, she would need to use an algorithm that finds Bob’s private key (using the private key). In order to stop Eve from doing this, the public/private key needs much longer than a symmetric key needs to be- increasing the overall time needed to create the pair."]
    },
    {
        title: "Asymmetric Key Encryption:",
        info: ["In order for a public/private key system to be effective, we need to satisfy the following:", "Computationally easy to create the key pair.", "computationally easy for the sender, knowing the public key, to encrypt a message.", "Computationally easy for receiver, knowing the private key, to decrypt a message.", "Computationally infeasible for attacker to find the private key.", "Computationally infeasible for attacker to guess the message.", "In the real world, the public/private key system isn’t enough to guarantee secure communication. If Alice encrypts a message with Bob’s public key, Alice can be sure that only Bob can decrypt and read it, but can Bob be sure that the message he got is from Alice?", "If Alice’s message is “Hi Bob, it’s Alice”, she encrypts and sends it to Bob. There is nothing stopping Eve from writing a message “Hi Bob, it’s Alice”, then encrypting and sending it to Bob. Eve can’t read what Alice writes, but she can do better - impersonate Alice when talking to Bob to get what she wants. This impersonation is what we call a ‘Man in the Middle’ attack. "]
    }
]

const MalwareTABS: LearnTab[] = [
    {
        title: "What is Malware?",
        info: ["Malware is a program inserted into a system with the intention of compromising the confidentiality, integrity, and availability of the victim’s data, applications, operating system, or otherwise disrupting the victim."]
    },
    {
        title: "Malware Terms:",
        info: ["Advanced Persistent Threat: When the virus/worm is designed to have a minimal execution signature so that it can continue to execute for as long as possible.", "Payload: The thing that the attacker wants the virus to do once it executes.", "Trigger: A condition that causes the virus to execute. This is usually a logical check - is it 12:37pm yet?"]
    },
    {
        title: "Types of Malware",
        info: ["The two types of malware are viruses and worms, and they each follow the same four phases."]
    },
    {
        title: "Viruses",
        info: ["A virus tries to replicate itself into other programs or script code located on the machine. If the program/code is run, the virus is also run."]
    },
    {
        title: "Worms:",
        info: ["A worm is a program that can run independently from a computer’s programs/code - it doesn’t need to wait to be executed - and can propagate a complete working version of itself onto other computers on a network."]
    },
    {
        title: "Four Phases:",
        info: ["Dormant: The virus/worm doesn’t try to execute itself or infect other components. A virus/worm can leave the dormant phase if a certain condition is met, say at a certain time of the day.", "Propagation: The virus/worm actively tries to infect/duplicate itself onto other components/new computers.", "Triggering: The virus/worm has a triggering condition similar to the dormant phase. If a certain condition is met (time of day), then the virus/worm will execute its payload.", "Execution: The virus/worm is currently executing what it was meant to do. This could mean the worm is checking files for usernames/passwords, watching incoming/outgoing network traffic, etc."]
    },
    {
        title: "Virus Example:",
        info: ["Rootkit: Virus will operate as a ‘root’ or admin of a system. This will allow the virus to hide itself from detection - any searches for a virus will be done under the root - and perform its payload (key logging, backdoors).", "The system needs to be wiped clean in order to get rid of the virus."]
    }
]

const SocialTABS: LearnTab[] = [
    {
        title: "What is Social Engineering?",
        info: ["As the saying goes, “a team is only as strong as the weakest link”. In the world of cybersecurity, the weakest link of the team is you, the user.", "The computers and protocols that we use have had their flaws and errors whittled down to the point that it’s nearly impossible for an attacker to exploit them. Instead, attackers target a user and try to get information out of them as it’s much easier.", "Of all the security breaches that go on in the world today, an alarmingly high percentage are a result of an attacker exploiting an unsuspecting user.", "Social engineering covers the methods that attackers use to get information out of a user - how they can trick you into giving away details like a password or credit card number.", "We will cover the various tactics that attackers use to get information out of an unsuspecting victim, and how to avoid them."]
    },
    {
        title: "Authority Tactic:",
        info: ["You may receive an email that is from “The Chief of Police” in your local area. Here, the attacker is using the concept of authority to trick you into giving them information.", "For example, this “chief of police” might say he needs your credit card information so that he can pay off the debt that you owe."]
    },
    {
        title: "Urgency Tactic",
        info: ["This tactic banks on the hope that we get careless with our information when we are under the pressure of time.", "You might get a message reading “Please go to this link ASAP so we can continue…”."]
    },
    {
        title: "Familiarity",
        info: ["This tactic makes use of the trust that we place in people we know.", "If the attacker acts like someone you have already contacted, you might be more likely to give them the information they want."]
    },
    {
        title: "Overall Takeaway",
        info: ["The big takeaway from social engineering is that humans can be stupid sometimes. Most social engineering attempts are blatantly obvious, like the “click here free $100” type of emails - nobody just gives out free money via email…", "But there are some that are a little more tricky to catch. An example of this might be a link included in an email which takes you to a spoofed website, one that looks like the real one but isn’t, where you willingly type in your information.", "A good way to avoid being a victim of social engineering is to always be on your toes. If you get an email from a suspicious address, it’s probably a good idea to just delete it right away. If you get an email from someone whom you’ve contacted before, make sure what they are asking for makes sense! If my plumber emailed me saying he needs my social security number so he can fix my sink, it’s probably a scam!", "Recognizing that the biggest vulnerability in security systems isn’t the systems themselves, but rather those who use the systems is the first step in avoiding social engineering attacks - be aware that not everybody on the Internet wants to be friends!"]
    }
] 

export const TABS: LearnTab[][] = [
    NetworkTABS,
    CryptoTABS,
    MalwareTABS,
    SocialTABS
]