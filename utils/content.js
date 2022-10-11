import AmazonIcon from "../assets/AmazonIcon";
import AppIcon from "../assets/AppIcon";
import AppleIcon from "../assets/Apple";
import CardSmall from "../assets/CardSmall";
import ChartIcon from "../assets/ChartIcon";
import FacebookIcon from "../assets/FacebookIcon";
import Lightning from "../assets/Lightning";
import SafeIcon from "../assets/SafeIcon";
import SmartPhone from "../assets/SmartPhone";
import TwitterIcon from "../assets/TwitterIcon";
import WifiIcon from "../assets/WifiIcon";
import image from "../assets/image.png";
import imageBig from "../assets/bigBlog.png";
import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import { BadgeS } from "../core/Badge";
import TickIcon from "../assets/TickIcon";
import VirtualIcon from "../assets/VirtualIcon";
import MoneyEuro from "../assets/MoneyEuro";
import WorldWide from "../assets/WorldWide";
import BankIcon from "../assets/BankIcon";
import PremiumIcon from "../assets/PremiumIcon";

const blogPreviewSummary =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.";

const text1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio morbi quis commodo odio. Et malesuada fames ac turpis egestas sed tempus urna. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Fringilla ut morbi tincidunt augue interdum. Ultrices in iaculis nunc sed augue lacus viverra. 

  Erat imperdiet sed euismod nisi porta. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Cras sed felis eget velit aliquet sagittis. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Blandit aliquam etiam erat velit scelerisque in dictum. In hac habitasse platea dictumst vestibulum rhoncus. Molestie ac feugiat sed lectus vestibulum.`;

const text2 =
  "Sed vulputate odio ut enim blandit volutpat maecenas. Sagittis orci a scelerisque purus semper eget duis at. Porta lorem mollis aliquam ut porttitor leo a diam. In fermentum et sollicitudin ac orci phasellus egestas tellus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Nascetur ridiculus mus mauris vitae ultricies. Dui nunc mattis enim ut tellus. Duis convallis convallis tellus id interdum. Quis ipsum suspendisse ultrices gravida dictum fusce. Scelerisque mauris pellentesque pulvinar pellentesque. Tincidunt augue interdum velit euismod. Nibh tortor id aliquet lectus. Amet commodo nulla facilisi nullam. Vulputate ut pharetra sit amet aliquam id diam maecenas. Tellus pellentesque eu tincidunt tortor. Ultrices vitae auctor eu augue ut lectus arcu bibendum.";

export const pinPoints = [
  { col: 1, text: "Instant Transfer" },
  { col: 1, text: "Saving accounts" },
  { col: 2, text: "Payments worldwide" },
  { col: 2, text: "100% mobile banking" },
];

export const reviewData = [
  {
    column: 1,
    stars: 5,
    heading: "Sunt qui esse pariatur duis deserunt mollit",
    text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    text2: undefined,
    name: "Cody Fisher",
    job: "Medical Assistant",
  },
  {
    column: 2,
    stars: 4,
    heading: "At lectus urna duis convallis tellus",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    text2:
      "In nibh mauris cursus mattis. At lectus urna duis convallis convallis tellus. Enim blandit volutpat maecenas volutpat.",
    name: "Jenny Wilson",
    job: "Nursing Assistant",
  },
  {
    column: 3,
    stars: 5,
    heading: "Elit aute irure tempor cupidatat incididunt",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    text2: undefined,
    name: "Guy Hawkins",
    job: "President of Sales",
  },

  {
    column: 2,
    stars: 5,
    heading: "Donec et fringilla neque",
    text: "Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisi purus cursus sapien, id ultrices nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum.",
    text2: undefined,
    name: "Darlene Robertson",
    job: "Dog Trainer",
  },
  {
    column: 1,
    stars: 5,
    heading: "Sunt qui esse pariatur duis deserunt mollit",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    text2: undefined,
    name: "Cody Fisher",
    job: "Medical Assistant",
  },

  {
    column: 3,
    stars: 4,
    heading: "Etiam accumsan porta neque eros",
    text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    text2: undefined,
    name: "Dianne Russell",
    job: "Medical Assistant",
  },
];

export const cardContent = [
  {
    row: 1,
    icon: <Lightning className="w-7 fill-primary" />,
    heading: "Instant transactions",
    text: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
  },
  {
    row: 1,
    icon: <SafeIcon className="w-7 fill-primary" />,
    heading: "Saving accounts",
    text: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
  },
  {
    row: 2,
    icon: <SmartPhone className="w-7 fill-primary" />,
    heading: "Mobile banking",
    text: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
  },
  {
    row: 2,
    icon: <ChartIcon className="w-7 fill-primary" />,
    heading: "Advanced statistics",
    text: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
  },
  {
    row: 3,
    icon: <CardSmall className="w-7 fill-primary" />,
    heading: "Virtual cards",
    text: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
  },
  {
    row: 3,
    icon: <WifiIcon className="w-7 fill-primary" />,
    heading: "Advanced statistics",
    text: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
  },
];

export const transactions = [
  {
    icon: <AppleIcon className="w-6 fill-white" />,
    heading: "Apple",
    descr: "Macbook",
    price: "-999€",
  },
  {
    icon: <AmazonIcon className="w-6 fill-white" />,
    heading: "Amazon",
    descr: "Electronics",
    price: "-49€",
  },
  {
    icon: <FacebookIcon className="w-6 fill-white" />,
    heading: "Facebook",
    descr: "Ads",
    price: "-29€",
  },
  {
    icon: <TwitterIcon className="w-6 fill-white" />,
    heading: "Twitter",
    descr: "Ads",
    price: "-149€",
  },
  {
    icon: <AppleIcon className="w-6 fill-white" />,
    heading: "Apple",
    descr: "Cable",
    price: "-14€",
  },
  {
    icon: <AppleIcon className="w-6 fill-white" />,
    heading: "Apple",
    descr: "Macbook",
    price: "-250€",
  },
];

export const notifications = [
  {
    icon: <AppIcon className="w-6 fill-white" />,
    descr: "You payment of 49€ has been processed!",
  },
  {
    icon: <AppIcon className="w-6 fill-white" />,
    descr: "You got a new support message!",
  },
  {
    icon: <AppIcon className="w-6 fill-white" />,
    descr: "You payment was declined!",
  },
  {
    icon: <AppIcon className="w-6 fill-white" />,
    descr: "Please verify your payment of 99€!",
  },
  {
    icon: <AppIcon className="w-6 fill-white" />,
    descr: "New account statistics are available!",
  },
];

export const faqContent = [
  {
    title: "How do I open an Banko account?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "How do I order a new card?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "How to change my account limits?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },

  {
    title: "How does Banko premium works?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "Can I have two Banko accounts?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
];

export const faqContent1 = [
  {
    title: "How to setup my card?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "How do I create a virtual card?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "How to order an extra card?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "My card will exprise soon. What to do?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "How do I freeze my card?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
];

export const faqContent2 = [
  {
    title: "How do I verify my account?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "How to upgrade my account?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "Can I have multiple accounts?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "How do I cancel my account?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
];

export const faqContent3 = [
  {
    title: "How do I change my account address?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "How to close my account?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "Where do I find my tax ID?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "How can I download my bank documents?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
];

export const blogPosts = [
  {
    id: "0",
    img: image,
    title: "How To Start Using Banko For Your Startup",
    section1Heading: "Et malesuada fames ac turpis",
    text1: text1,
    imageBig,
    section2Heading: "Nascetur ridiculus mus",
    text2: text2,
    summary: blogPreviewSummary,
    categories: ["product"],
  },
  {
    id: "1",
    img: image1,
    imageBig,
    title: "10 Things Nobody Told You About Banko",
    section1Heading: "Et malesuada fames ac turpis",
    text1: text1,
    section2Heading: "Nascetur ridiculus mus",
    text2: text2,
    summary: blogPreviewSummary,
    categories: ["product", "technology"],
  },
  {
    id: "2",
    img: image2,
    imageBig,
    title: "7 Ways To Improve You Saving Habits",
    section1Heading: "Et malesuada fames ac turpis",
    text1: text1,
    section2Heading: "Nascetur ridiculus mus",
    text2: text2,
    summary: blogPreviewSummary,
    categories: ["product"],
  },
  {
    id: "3",
    img: image4,
    imageBig,
    title: "Why We Love Banko (And You Should, Too!)",
    section1Heading: "Et malesuada fames ac turpis",
    text1: text1,
    section2Heading: "Nascetur ridiculus mus",
    text2: text2,
    summary: blogPreviewSummary,
    categories: ["product", "technology"],
  },
  {
    id: "4",
    img: image5,
    imageBig,
    title: "5 Principles Of Crypto Investing",
    section1Heading: "Et malesuada fames ac turpis",
    text1: text1,
    section2Heading: "Nascetur ridiculus mus",
    text2: text2,
    summary: blogPreviewSummary,
    categories: ["product"],
  },
  {
    id: "5",
    img: image6,
    imageBig,
    title: "7 Things About Banko Your Friends Want To Know",
    section1Heading: "Et malesuada fames ac turpis",
    text1: text1,
    section2Heading: "Nascetur ridiculus mus",
    text2: text2,
    summary: blogPreviewSummary,
    categories: ["product", "technology"],
  },
];

export const compareTable1 = [
  {
    icon: <CardSmall className="w-7 fill-primary" />,
    heading: "Physical Card",
    paragraph: "Diam in arcu cursus euismod",
    row1: "Optional",
    row2: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
    row3: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
  },
  {
    icon: <VirtualIcon className="w-7 fill-primary" />,
    heading: "Virtual Card",
    paragraph: "Diam in arcu cursus euismod",
    row1: "-",
    row2: "Up to 2",
    row3: "Unlimited",
  },
  {
    icon: <WifiIcon className="w-7 fill-primary" />,
    heading: "Contactless Payments",
    paragraph: "Diam in arcu cursus euismod",
    row1: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
    row2: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
    row3: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
  },
  {
    icon: <MoneyEuro className="w-7 fill-primary" />,
    heading: "Mobile Payments",
    paragraph: "Diam in arcu cursus euismod",
    row1: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
    row2: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
    row3: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
  },
];

export const compareTable2 = [
  {
    icon: <WorldWide className="w-7 fill-primary" />,
    heading: "Free Payments Worldwide",
    paragraph: "Diam in arcu cursus euismod",
    row1: "-",
    row2: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
    row3: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
  },
  {
    icon: <BankIcon className="w-7 fill-primary" />,
    heading: "Free ATM withdrawls",
    paragraph: "Diam in arcu cursus euismod",
    row1: "2",
    row2: "5",
    row3: "10",
  },
  {
    icon: <SmartPhone className="w-7 fill-primary" />,
    heading: "Mobile Banking",
    paragraph: "Diam in arcu cursus euismod",
    row1: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
    row2: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
    row3: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
  },
];

export const compareTable3 = [
  {
    icon: <SafeIcon className="w-7 fill-primary" />,
    heading: "Saving Accounts",
    paragraph: "Diam in arcu cursus euismod",
    row1: "2",
    row2: "5",
    row3: "Unlimited",
  },
  {
    icon: <ChartIcon className="w-7 fill-primary" />,
    heading: "Advanced Statistics",
    paragraph: "Diam in arcu cursus euismod",
    row1: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
    row2: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
    row3: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
  },
  {
    icon: <PremiumIcon className="w-7 fill-primary" />,
    heading: "Premium Parnter Offers",
    paragraph: "Diam in arcu cursus euismod",
    row1: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
    row2: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
    row3: (
      <BadgeS>
        <TickIcon className="w-5 fill-primary" />
      </BadgeS>
    ),
  },
];
