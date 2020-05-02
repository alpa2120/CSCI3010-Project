import { resourceItem } from './resource';

const NetworkRESOURCE: resourceItem[] = [
    {
        article_description: "OSI Model Presented by GeeksForGeeks",
        article_link: "https://www.geeksforgeeks.org/layers-of-osi-model/",
        video_description: "What is the Internet?",
        video_link: "https://www.youtube.com/watch?v=Dxcc6ycZ73M",
        id: 1
    },
]

const SocialRESOURCE: resourceItem[] = [
    {
        article_description: "General Social Engineering Information:",
        article_link: "https://www.webroot.com/us/en/resources/tips-articles/what-is-social-engineering",
        video_description: "What is Social Engineering?",
        video_link: "https://www.youtube.com/watch?v=Vo1urF6S4u0",
        id: 1
    },
]

const MalwareRESOURCE: resourceItem[] = [
    {
        article_description: "Malware Presented by MalwareBytes",
        article_link: "https://www.malwarebytes.com/malware/",
        video_description: "Viruses vs Wormes vs Trojans",
        video_link: "https://www.youtube.com/watch?v=n8mbzU0X2nQ",
        id: 1
    },
]

const CryptoRESOURCE: resourceItem[] = [
    {
        article_description: "Cryptography Presented by GeeksForGeeks",
        article_link: "https://www.geeksforgeeks.org/cryptography-and-its-types/",
        video_description: "Asymmetric Encryption Explained",
        video_link: "https://www.youtube.com/watch?v=AQDCe585Lnc",
        id: 1
    },
]

export const RESOURCES: resourceItem[][] = [
    NetworkRESOURCE,
    CryptoRESOURCE,
    MalwareRESOURCE,
    SocialRESOURCE
]