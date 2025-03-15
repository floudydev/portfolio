
import { ProjectDetails } from "@/components/ProjectModal";

const imgsArray = {
  img1: "https://s32klg.storage.yandex.net/rdisk/d5d56508e01da656c2aeacf19c2bedb2f70fdb32a63d95a120a9b815a60025e0/67d5c223/DBVIzZYOqkGe9P-TogIE25He4GsvTSWHYcKsfK2PlEie8khasLatjYEbAyhxWVGL1Hk4y5Qz-jjT4gRC8HVupg==?uid=1646585506&filename=back1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1646585506&fsize=1708874&hid=0c99b95e9a98f07a8cb8b97e0453aa39&media_type=image&tknv=v2&etag=a56c9617e9f3ab4b07304a5a91a1498c&ts=63065718a8ec0&s=7b21f7214c151e7b7b71d1b88976a4e98003121c402dd09ffa65b72b51c43651&pb=U2FsdGVkX1-vZ50UjNayGWw13JxCjPpU3EY5b1HybDEq-keFrRCoszMxrhWR9fyq7OCEJCVrJ28jVRNZxqN8Wsx2l0uWVbjafm5iWTEiuCM",
  img2: "https://s767sas.storage.yandex.net/rdisk/7253efd57953954ef6a8dd56aaa4f5dbae53bf9a3e418d6a86018957d64f1587/67d5c242/DBVIzZYOqkGe9P-TogIE2wTyCfi5ogbibYpo7FD_6nubqWzm-kL1In2bd6HXa0icQCwjhIhArb8azOPbdqR3zg==?uid=1646585506&filename=back2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1646585506&fsize=71191&hid=ee24655dabe88e3e3bdc00fe0a50f68c&media_type=image&tknv=v2&etag=761f0aee3f8bbf886f8374b1027b16f1&ts=6306573639480&s=539014f92a64061dbe0e6c071c7c5df0e8862b82085f945d391ca6dbfc35d3e4&pb=U2FsdGVkX19j3UvBGQ7myvVdcI32DTKK_Xrme0_H_yMFtuTrtPZFhPTD-dlbpYl7bY2lUXt6L2o7RuFi2wRW__c8V--rzn21tgyAcup2Pss",
  img3: "https://s927sas.storage.yandex.net/rdisk/fa1524cf29e1a49079bf9b87f78d94129588240cdf36c89bb3a283926d65b87a/67d5c24d/DBVIzZYOqkGe9P-TogIE2yncwhEeA3eejQPRvx7RIThUVo8v-3Ab6O3hMq6220Std_hQa9DCF8oyNV8Fe9Unlg==?uid=1646585506&filename=back3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1646585506&fsize=98379&hid=5927a00625070f5e6e09fec26bf747dd&media_type=image&tknv=v2&etag=66d5b301b458313317d26273a7c7f815&ts=63065740b6d40&s=ed911e07352f1a52222ae6ca278b7e30c0043ebab560fe3fe708cb25542423c1&pb=U2FsdGVkX1-0lASpvZvPpHco3lHs2ACyNEDqzMAtq-h2fPn7fB9nPLJbcCnGV4nArb0AhKcExQSBkrNZfMpZERS5TPckmZBvGUrxb6U2Ydk",
  img4: "https://s854sas.storage.yandex.net/rdisk/b97383d005b43a9995c697e3ffcef62e691b99df494547367de2eecf5a5b16d2/67d5c25f/DBVIzZYOqkGe9P-TogIE29P8J2XGd85mDDFZrn2fnwX7BG_7jShLIs3Yo3DGqwsfFfw_tjJlvFuXU3e8rUBCKg==?uid=1646585506&filename=back4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1646585506&fsize=137628&hid=41dfd10657566094d754a275c8f715b1&media_type=image&tknv=v2&etag=21ac9b17f6d2b7a184519f15766063db&ts=63065751e15c0&s=e993183aa23446119f36f455ace1739f7a9cbe9b9abf3e9c8eaaf04af68261db&pb=U2FsdGVkX1-5XQBg8zBjwS9wgZTJHHmvccDUpbuh5JL9ptoYI5FxtJHQNAP4rma_whg0x6BQXOFy6SIA4h83HzD7Aq7aUG3O9Pr7usnDuGM",
  img5: "https://s561vla.storage.yandex.net/rdisk/ef98341dbcc6a0964e01941420759b721d84787ce5aa807eef446747ff7cb9a5/67d5c270/DBVIzZYOqkGe9P-TogIE2zyIqeQdgL3GZ72tXZkIeW_4Ih3y0vZ-1hotKIRjRBNpN3KS_aL4Y5_F1AQglQuJMA==?uid=1646585506&filename=back5.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1646585506&fsize=67864&hid=b97c64961b7014dec06cbd524b2a360b&media_type=image&tknv=v2&etag=6456bfe32ab6c80b9b68be24942b8b8f&ts=6306576217c00&s=f65970209ae4033952d794732b74cbf203c669a50085803c453ae30b9b20f805&pb=U2FsdGVkX1-i98tICS-8e5u2gRWUpvLdzfVWQ55OaYj05vJt3nyuL4vbm7KdYt2D7Say8K8Njtdqx0MpSWgc2tSgBj0690lvfEwyZWylvao",
  img6: "https://s433vla.storage.yandex.net/rdisk/1865caafe05249ecd377e28d09e9e0ba9710e55023f0d723277f313f811f5cc1/67d5c27b/DBVIzZYOqkGe9P-TogIE27qPBREWORbsmn-l1ORbab3FGBdIcm8G3BfB3EGx-jZIzoRjnvhyF-o9fR-CbkQ0Lw==?uid=1646585506&filename=back6.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1646585506&fsize=1059507&hid=4f0d2316a0249897335b63005db98be6&media_type=image&tknv=v2&etag=e0e9bf2a03749d8bb2d659a14dcf9677&ts=6306576c954c0&s=3713c27ae7fc54f583398c1be692962f4cf762ad054a7ed9b30412b2ed5905ce&pb=U2FsdGVkX197v94q2PjPk35pKzc1vI3rls0_McK8XbE8HPUfMjuC22FJ7i7GRlm0aasu7Xaxzwk6xmhlI1raed5HtJSDr7AIy9p9Qt8Ws3I"
}

export const projects: ProjectDetails[] = [
  {
    id: "project1",
    title: "Website for online courses",
    description: "Online course website",
    fullDescription: "It is an online learning platform that provides state-of-the-art training programs developed by experts in the trade and economic field. Built with React Native.",
    technologies: ["React", "Typescript", "Vite", "TailwindCSS"],
    githubUrl: "https://github.com/floudydev/course-connectivity-platform",
    // liveUrl: "https://example.com",
    // imageUrl: imgsArray.img1
  },
  {
    id: "project2",
    title: "2D Game",
    description: "2D browser game",
    fullDescription: " This project is a classic tower defense game where players build and upgrade turrets to defend against waves of creeps and bosses. The basis of the project was taken from the vastness of Github and upgraded by me. It was created and upgraded with JS and a couple of weeks ago.",
    technologies: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/floudydev/Tower-Defens",
    // imageUrl: imgsArray.img3
  },
  {
    id: "project3",
    title: "Portfolio",
    description: "My portfolio",
    fullDescription: "My portfolio built with React Native.",
    technologies: ["React", "Typescript", "Vite", "TailwindCSS"],
    githubUrl: "https://github.com/floudydev/portfolio",
    // imageUrl: imgsArray.img2
  },
  {
    id: "project4",
    title: "First C# program",
    description: "The console program",
    fullDescription: "This work was done for the 3rd year students. His specialty is Information Systems and programming. Built with C#.",
    technologies: ["C#"],
    githubUrl: "https://github.com/floudydev/CS-project",
    // imageUrl: imgsArray.img6
  },
  {
    id: "project5",
    title: "First desktop program",
    description: "My school project",
    fullDescription: "In my senior year, I was given the task to make a program for Windows, and at that time I started studying Electron and decided to make this application on it.",
    technologies: ["Javascript", "Electron", "HTML", "CSS"],
    githubUrl: "https://github.com/floudydev/shooll-project",
    // imageUrl: imgsArray.img5
  }
];
