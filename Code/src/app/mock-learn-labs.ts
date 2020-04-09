import { LearnTab } from './learn-tab';

const NetworkTABS: LearnTab[] = [
    {
        title: "Net 1",
        info: "Net info 1"
    },
    {
        title: "Net 2",
        info: "Net info 2"
    },
    {
        title: "Net 3",
        info: "Net info 3"
    }
]

const CryptoTABS: LearnTab[] = [
    {
        title: "What is Cryptography?",
        info: "Cryptography \nlooks at the various techniques that we can use in-order to communicate with one another in a secure fashion. Some form of cryptography can be observed in nearly any interaction between two people, regardless of the interaction being virtual or in person. For example, say Alice is in a crowded room and needs to tell Bob a secret. It probably wouldn’t be a good idea for Alice to shout her secret across the room so Bob can hear it, it wouldn’t be a secret anymore. Instead, Alice walks over to Bob and whispers the secret so only Bob can hear it. These types of interactions and many more can be reflected over to the online world; where instead of being in a crowded room, Alice finds herself communicating over the Internet."
    },
    {
        title: "Cryptography Terms:",
        info: "Messages/plaintext are what we are trying to send securely between two parties. It could be a password to a website or even your credit card information.The term key describes what is being used to encrypt and decrypt the messages we are sending. Very similar to a real-life key, we can use a key to either lock up our house (encrypt a message) or to unlock our house (decrypt a message).Alice, Bob, and Eve are names used in examples to simplify the interactions between different parties. We consider Alice and Bob to be the ‘good’ guys, while Eve is considered to be the ‘bad’ guy - she is trying to intercept the messages Alice and Bob send to each other."
    },
    {
        title: "Cybersecurity and Cryptography:",
        info: "There are three main types of cryptography when in the realm of cybersecurity: Symmetric key encryption Asymmetric key encryption One way encryption (hashing) We will cover symmetric and asymmetric key encryption, including the basics, pros and cons, and an example of each."
    },
    {
        title: "Symmetric Key Encryption:",
        info: "Symmetric key encryption is when the two parties communicating use the same key to encrypt/decrypt the messages they send to each other. The trick is that when you use the key to encrypt a message, applying the same key again will output the original message. As long as the two parties, and only the two parties, share the same key, they will be able to communicate securely to one another."
    },
    {
        title: "Symmetric Key Encryption:",
        info: "Pros: The biggest benefit to symmetric key encryption is the speed/efficiency of encrypting and decrypting data/messages. Bob doesn’t have to apply a complicated algorithm to decrypt the message that Alice sends, rather he just decrypts the message in a single step using the secret key he shares with Alice."
    },
    {
        title: "Symmetric Key Encryption:",
        info: "Cons: The downside to symmetric key encryption is distributing the key to someone you want to communicate with and ensuring that after distribution, the key remains secret. This creates a “Catch-22” situation; if Alice is able to securely send Bob the key, then she may as well just send the message in the same secure fashion. If she can’t securely send Bob the key, then Alice and Bob won’t be able to communicate. Assume Alice sends Bob the key securely. It is now up to both Alice and Bob to keep that key secret because if anyone gets their hands on the key, they can read the messages that Alice and Bob send to each other"
    },
    {
        title: "Symmetric Key Encryption:",
        info: "Example: Symmetric key encryption has been used well before the first computer was created. The Caesar Cipher, named after Julius Caesar, was used to encrypt and decrypt hand-written messages being sent around the Roman Empire. It works like this: We assign every letter in the alphabet a number:A = 1 B = 2 C = 3 …. Z = 26 The two parties communicating then decide on a random number that they both have (the symmetric key). Sticking with the Roman names here, Augustus has a message he wants to send to Brutus, and they have decided their number is 4. Augustus’ message is this: HELLO BRUTUS Before sending this message off to Brutus, Augustus encrypts the message by adding the value of the key to every letter in the message, remember every letter in the original message has been assigned a value 1 to 26. For example, H has the value of 8, so we add 4 to it and get the value 12, so H is written as L (12 corresponds to L) Augustus’ encrypted message is now this: LIPPS FVYXVW When Brutus gets the encrypted message, he does the opposite of what Augustus has done by subtracting the value of the key from every letter in the message. For example, L has the value 12, so we subtract 4 from it and get the value 8, so L is written as H. Brutus’ decrypted message is now this: HELLO BRUTUS"
    },
    {
        title: "Asymmetric Key Encryption:",
        info: "Asymmetric key encryption is when the two parties communicating use different keys to encrypt/decrypt the messages they send to each other. Crucial to asymmetric encryption is the concept of a public/private key pair. We generate these pairs together, so that encrypting and decrypting a message is unique to each pair - the public key is used to encrypt a message, while the private key is used to decrypt a message. Importantly, the private key only decrypts a message if the message was encrypted using its public key. That being said, a private key cannot decrypt any message that was encrypted with any arbitrary public key, only messages encrypted using its public key counterpart."
    },
    {
        title: "Asymmetric Key Encryption:",
        info: "Pros: The benefit of asymmetric key encryption lies in the distribution of the public/private key pair. If someone creates a key pair, nobody else has access to the private key created, eliminating the need of finding a way to securely send a key to someone. Another benefit includes that if Eve wants to decrypt a message being sent to Bob, she needs Bob’s private key. Assuming Bob keeps his private key private, Eve can only hope that there is some algorithm that can ‘reconstruct’ Bob’s private key - a process that is considered impossible using classical computers."
    },
    {
        title: "Asymmetric Key Encryption:",
        info: "Cons: The main disadvantage of asymmetric key encryption is that it requires the key to be “cryptographically secure”, in layman's terms this means the key needs to be really, really long. Since Eve will never get her hands on Bob’s private key, she would need to use an algorithm that finds Bob’s private key (using the private key). In order to stop Eve from doing this, the public/private key needs much longer than a symmetric key needs to be- increasing the overall time needed to create the pair."
    },
    {
        title: "Asymmetric Key Encryption:",
        info: "Example: There is no simple and easy example like the Caesar Cipher for symmetric encryption, so instead we’ll provide some more information on the nature of asymmetric encryption and how it is used in our world. In order for a public/private key system to be effective, we need to satisfy the following: Computationally easy to create the key pair Computationally easy for sender, knowing the public key, to encrypt a message Computationally easy for receiver, knowing the private key, to decrypt a message Computationally infeasible for attacker to find the private key Computationally infeasible for attacker to guess the message In the real world, the public/private key system isn’t enough to guarantee secure communication. If Alice encrypts a message with Bob’s public key, Alice can be sure that only Bob can decrypt and read it, but can Bob be sure that the message he got is from Alice? If Alice’s message is “Hi Bob, it’s Alice”, she encrypts and sends it to Bob. There is nothing stopping Eve from writing a message “Hi Bob, it’s Alice”, then encrypting and sending it to Bob. Eve can’t read what Alice writes, but she can do better - impersonate Alice when talking to Bob to get what she wants. This impersonation is what we call a ‘Man in the Middle’ attack. "
    }
]

const MalwareTABS: LearnTab[] = [
    {
        title: "What is Malware?",
        info: "Malware is a program inserted into a system with the intention of compromising the confidentiality, integrity, and availability of the victim’s data, applications, operating system, or otherwise disrupting the victim."
    },
    {
        title: "Malware Terms:",
        info: "Advanced Persistent Threat is when the virus/worm is designed to have a minimal execution signature so that it can continue to execute for as long as possible. Payload: The thing that the attacker wants the virus to do once it executes. Trigger: A condition that causes the virus to execute. This is usually a logical check - is it 12:37pm yet?"
    },
    {
        title: "Types of Malware",
        info: "The two types of malware are viruses and worms, and they each follow the same four phases."
    },
    {
        title: "Viruses",
        info: "A virus tries to replicate itself into other programs or script code located on the machine. If the program/code is run, the virus is also run."
    },
    {
        title: "Worms:",
        info: "A worm is a program that can run independently from a computer’s programs/code - it doesn’t need to wait to be executed - and can propagate a complete working version of itself onto other computers on a network."
    },
    {
        title: "Four Phases:",
        info: "Dormant: The virus/worm doesn’t try to execute itself or infect other components. A virus/worm can leave the dormant phase if a certain condition is met, say at a certain time of the day.Propagation: The virus/worm actively tries to infect/duplicate itself onto other components/new computers.Triggering: The virus/worm has a triggering condition similar to the dormant phase. If a certain condition is met (time of day), then the virus/worm will execute its payload.Execution: The virus/worm is currently executing what it was meant to do. This could mean the worm is checking files for usernames/passwords, watching incoming/outgoing network traffic, etc."
    },
    {
        title: "Virus Example:",
        info: "Rootkit: Virus will operate as a ‘root’ or admin of a system. This will allow the virus to hide itself from detection - any searches for a virus will be done under the root - and perform its payload (key logging, backdoors). The system needs to be wiped clean in order to get rid of the virus."
    }
]

const QuantumTABS: LearnTab[] = [
    {
        title: "Quantam 1",
        info: "Quantam info 1"
    },
    {
        title: "Quantam 2",
        info: "Quantam info 2"
    },
    {
        title: "Quantam 3",
        info: "Quantam info 3"
    }
]

export const TABS: LearnTab[][] = [
    NetworkTABS,
    CryptoTABS,
    MalwareTABS,
    QuantumTABS
]