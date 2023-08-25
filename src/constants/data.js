import images from './images';

const wines = [
  {
    title: 'Basic Rob',
    price: '$free',
    tags: 'Basic setup',
  },
  {
    title: 'Fundamentals of kit ',
    price: '$Free',
    tags: 'Setup kit',
  },
  {
    title: 'Basic of frontend dev',
    price: '$Free',
    tags: 'html/css',
  },
  {
    title: 'Advanced Rob',
    price: '$Free',
    tags: 'full course material',
  },
  {
    title: 'Full kit course ',
    price: '$Kit price',
    tags: 'Live project demos',
  },
];

const cocktails = [
  {
    title: 'Basic Setup',
    price: '$Free',
    tags: 'Kit setup',
  },
  {
    title: "Kit Demo",
    price: '$Free',
    tags: 'Live project',
  },
  {
    title: 'Project rob',
    price: '$free',
    tags: 'Full project setup|demo',
  },
  {
    title: 'Advanced Project',
    price: '$200',
    tags: 'Real time Project',
  },
  {
    title: 'Full Course',
    price: '$Kit Price|$200',
    tags: 'Full Course|KIt|Study Material',
  },
];

const awards = [

  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'A basic fundamental program for students in all domians for class 6th to class 10th students.',
  },
  {
    imgUrl: images.award02,
    title: 'Techo-Enthusiast',
    subtitle: 'A deep understanding of robotics for students from 10th class onwards .',
  },
 
 
  {
    imgUrl: images.award03,
    title: 'Summer Camp',
    subtitle: 'we provide realtime industry project experience to students  .',
  },
];

export default { wines, cocktails, awards };
