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
import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import { BadgeS } from "../components/Badge";
import TickIcon from "../assets/TickIcon";
import VirtualIcon from "../assets/VirtualIcon";

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
    column: 1,
    stars: 5,
    heading: "Sunt qui esse pariatur duis deserunt mollit",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
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
    column: 2,
    stars: 5,
    heading: "Donec et fringilla neque",
    text: "Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisi purus cursus sapien, id ultrices nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum.",
    text2: undefined,
    name: "Darlene Robertson",
    job: "Dog Trainer",
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

export const blogPreviews = [
  {
    img: image,
    title: "How To Start Using Banko For Your Startup",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    categories: ["Product", "Technology"],
  },
  {
    img: image1,
    title: "10 Things Nobody Told You About Banko",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    categories: ["Product", "Technology"],
  },
  {
    img: image2,
    title: "7 Ways To Improve You Saving Habits",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    categories: ["Product", "Technology"],
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
    heading: "Virtual Card",
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
