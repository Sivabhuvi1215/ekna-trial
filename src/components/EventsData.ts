export interface Event {
  id: string;
  name: string;
  description: string;
  rules: string[];
  prizes: string;
  coordinators: string;
  imageUrl: string;
  category: 'technical' | 'non_technical';
  fee?: number;
}

export const eventsData: Event[] = [
  // Technical Events
  {
    id: 'paper-presentation',
    name: 'Paper Presentation',
    description: 'Showcase your research and innovative ideas in this prestigious technical presentation event.',
    rules: [
      'Maximum 2 members per team',
      'Presentation time: 8 minutes + 2 minutes Q&A',
      'Topics must be related to EEE domain',
      'Original work only - plagiarism will be disqualified'
    ],
    prizes: '1st: ₹5000, 2nd: ₹3000, 3rd: ₹1500',
    coordinators: 'A. Kumar, B. Devi',
    imageUrl: 'https://images.unsplash.com/photo-1581091226649-bf2f2b7c4a24',
    category: 'technical',
    fee: 100
  },
  {
    id: 'circuit-debugging',
    name: 'Circuit Debugging',
    description: 'Test your skills in finding and fixing circuit faults in this challenging hardware event.',
    rules: [
      'Individual participation only',
      'Time limit: 45 minutes',
      'Basic tools will be provided',
      'Multiple rounds with increasing difficulty'
    ],
    prizes: '1st: ₹4000, 2nd: ₹2500, 3rd: ₹1000',
    coordinators: 'C. Mohan, D. Priya',
    imageUrl: 'https://images.unsplash.com/photo-1640552421163-5a8e34827550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: 'technical'
  },
  {
    id: 'robo-race',
    name: 'Robo Race',
    description: 'Build and race your own autonomous robot through challenging obstacle courses.',
    rules: [
      'Maximum 4 members per team',
      'Robot dimensions: 25cm x 25cm x 25cm max',
      'Wireless control only',
      'No ready-made kits allowed'
    ],
    prizes: '1st: ₹6000, 2nd: ₹4000, 3rd: ₹2000',
    coordinators: 'E. Rahul, F. Swetha',
    imageUrl: 'https://images.unsplash.com/photo-1742767069929-0c663150b164',
    category: 'technical',
    fee: 150
  },
  {
    id: 'hackathon',
    name: 'Hackathon',
    description: 'Code a solution to a real-world problem in a limited time with your team.',
    rules: [
      'Maximum 3 members per team',
      'Duration: 24 hours',
      'Any programming language allowed',
      'Internet access provided'
    ],
    prizes: '1st: ₹10000, 2nd: ₹7000, 3rd: ₹3000',
    coordinators: 'G. Vishal, H. Anjali',
    imageUrl: 'https://images.unsplash.com/photo-1638029202288-451a89e0d55f',
    category: 'technical',
    fee: 200
  },
  {
    id: 'technical-quiz',
    name: 'Technical Quiz',
    description: 'Compete in a challenging quiz covering core electrical and electronics concepts.',
    rules: [
      'Team of 2 members',
      'Multiple rounds: written, buzzer, rapid fire',
      'Topics: Basic EEE, current affairs, general tech',
      'No electronic devices allowed'
    ],
    prizes: '1st: ₹2000, 2nd: ₹1000, 3rd: ₹500',
    coordinators: 'I. Vivek, J. Kavitha',
    imageUrl: 'https://images.unsplash.com/photo-1581091226649-bf2f2b7c4a24',
    category: 'technical'
  },
  {
    id: 'project-expo',
    name: 'Project Expo',
    description: 'Exhibit your innovative hardware or software projects to industry experts.',
    rules: [
      'Maximum 4 members per team',
      'Working prototype required',
      'Project report submission mandatory',
      '10 minutes presentation + 5 minutes demo'
    ],
    prizes: '1st: ₹7000, 2nd: ₹5000, 3rd: ₹2500',
    coordinators: 'K. Sangeetha, L. Mahesh',
    imageUrl: 'https://images.unsplash.com/photo-1581091226649-bf2f2b7c4a24',
    category: 'technical'
  },
  {
    id: 'poster-design',
    name: 'Poster Design',
    description: 'Design a creative and informative poster on cutting-edge technical themes.',
    rules: [
      'Individual or team of 2',
      'A1 size poster (594mm × 841mm)',
      'Digital design tools allowed',
      'Theme will be announced on spot'
    ],
    prizes: '1st: ₹2500, 2nd: ₹1500, 3rd: ₹750',
    coordinators: 'M. Divya, N. Vignesh',
    imageUrl: 'https://images.unsplash.com/photo-1581091226649-bf2f2b7c4a24',
    category: 'technical'
  },
  {
    id: 'cadathon',
    name: 'Cadathon',
    description: 'A competition for drafting and design excellence using professional CAD software.',
    rules: [
      'Individual participation',
      'Software: AutoCAD, SolidWorks, or Fusion 360',
      'Time limit: 2 hours',
      'Drawing will be provided on spot'
    ],
    prizes: '1st: ₹3000, 2nd: ₹2000, 3rd: ₹1000',
    coordinators: 'O. Prakash, P. Sumathi',
    imageUrl: 'https://images.unsplash.com/photo-1581091226649-bf2f2b7c4a24',
    category: 'technical'
  },
  {
    id: 'tech-talk',
    name: 'Tech Talk',
    description: 'Present a compelling talk on emerging technologies and their future impact.',
    rules: [
      'Individual participation',
      'Duration: 5 minutes presentation',
      'Topic: Emerging technologies',
      'Visual aids encouraged'
    ],
    prizes: '1st: ₹4000, 2nd: ₹2500, 3rd: ₹1000',
    coordinators: 'Q. Arjun, R. Nila',
    imageUrl: 'https://images.unsplash.com/photo-1581091226649-bf2f2b7c4a24',
    category: 'technical'
  },
  {
    id: 'line-follower',
    name: 'Line Follower Robot',
    description: 'Build an autonomous robot that can efficiently follow a designated line path.',
    rules: [
      'Maximum 3 members per team',
      'Robot must be autonomous',
      'Line detection using sensors only',
      'Fastest completion wins'
    ],
    prizes: '1st: ₹5000, 2nd: ₹3000, 3rd: ₹1500',
    coordinators: 'S. Harish, T. Sneha',
    imageUrl: 'https://images.unsplash.com/photo-1742767069929-0c663150b164',
    category: 'technical'
  },

  // Non-Technical Events
  {
    id: 'gaming',
    name: 'Gaming Tournament',
    description: 'Participate in high-octane gaming tournaments across multiple popular games.',
    rules: [
      'Individual and team events',
      'Games: FIFA, Call of Duty, Valorant',
      'Knockout tournament format',
      'Bring your own peripherals'
    ],
    prizes: '1st: ₹5000, 2nd: ₹3000, 3rd: ₹1500',
    coordinators: 'U. Adithya, V. Shruti',
    imageUrl: 'https://images.unsplash.com/photo-1675310854573-c5c8e4089426',
    category: 'non_technical',
    fee: 50
  },
  {
    id: 'photography',
    name: 'Photography Contest',
    description: 'Capture the essence and energy of the symposium through your lens.',
    rules: [
      'Individual participation',
      'Theme: "Innovation in Motion"',
      'DSLR or smartphone allowed',
      'Submit 3 best shots'
    ],
    prizes: '1st: ₹2000, 2nd: ₹1000, 3rd: ₹500',
    coordinators: 'W. Charan, X. Janani',
    imageUrl: 'https://images.unsplash.com/photo-1675310854573-c5c8e4089426',
    category: 'non_technical'
  },
  {
    id: 'treasure-hunt',
    name: 'Treasure Hunt',
    description: 'Solve intriguing riddles and clues to find the hidden treasure around campus.',
    rules: [
      'Team of 3-4 members',
      'Multiple checkpoints across campus',
      'Time limit: 2 hours',
      'Smartphones allowed for clues'
    ],
    prizes: '1st: ₹3000, 2nd: ₹2000, 3rd: ₹1000',
    coordinators: 'Y. Rajesh, Z. Preethi',
    imageUrl: 'https://images.unsplash.com/photo-1675310854573-c5c8e4089426',
    category: 'non_technical'
  },
  {
    id: 'chess',
    name: 'Chess Tournament',
    description: 'Challenge fellow participants in strategic chess matches.',
    rules: [
      'Individual tournament',
      'Swiss system format',
      'Time control: 15+10 minutes',
      'FIDE rules applicable'
    ],
    prizes: '1st: ₹2000, 2nd: ₹1000, 3rd: ₹500',
    coordinators: 'AA. Ajay, AB. Deepika',
    imageUrl: 'https://images.unsplash.com/photo-1675310854573-c5c8e4089426',
    category: 'non_technical'
  },
  {
    id: 'debate',
    name: 'Parliamentary Debate',
    description: 'Engage in passionate debates on contemporary topics affecting technology and society.',
    rules: [
      'Team of 2 speakers',
      'Format: Parliamentary style',
      'Topics announced 30 minutes prior',
      'Time limit: 6 minutes per speaker'
    ],
    prizes: '1st: ₹2500, 2nd: ₹1500, 3rd: ₹750',
    coordinators: 'AC. Manoj, AD. Vimala',
    imageUrl: 'https://images.unsplash.com/photo-1675310854573-c5c8e4089426',
    category: 'non_technical'
  },
  {
    id: 'jam',
    name: 'Just a Minute (JAM)',
    description: 'Speak continuously on a topic for one minute without repetition, hesitation, or deviation.',
    rules: [
      'Individual participation',
      'Duration: 1 minute per topic',
      'Multiple rounds with elimination',
      'Topics given on the spot'
    ],
    prizes: '1st: ₹1500, 2nd: ₹1000, 3rd: ₹500',
    coordinators: 'AE. Ganesh, AF. Shreya',
    imageUrl: 'https://images.unsplash.com/photo-1675310854573-c5c8e4089426',
    category: 'non_technical'
  },
  {
    id: 'comedy',
    name: 'Stand-up Comedy',
    description: 'Make the audience laugh with your best jokes and comedic timing.',
    rules: [
      'Individual performance',
      'Duration: 5 minutes maximum',
      'Content must be appropriate',
      'Props allowed'
    ],
    prizes: '1st: ₹2000, 2nd: ₹1000, 3rd: ₹500',
    coordinators: 'AG. Rohit, AH. Meena',
    imageUrl: 'https://images.unsplash.com/photo-1675310854573-c5c8e4089426',
    category: 'non_technical'
  },
  {
    id: 'music',
    name: 'Music Mania',
    description: 'Showcase your musical talent in solo or group performances.',
    rules: [
      'Solo or group (max 5 members)',
      'Duration: 6 minutes maximum',
      'Any genre welcome',
      'Backing tracks allowed'
    ],
    prizes: '1st: ₹3000, 2nd: ₹2000, 3rd: ₹1000',
    coordinators: 'AI. Vikram, AJ. Nithya',
    imageUrl: 'https://images.unsplash.com/photo-1675310854573-c5c8e4089426',
    category: 'non_technical'
  },
  {
    id: 'short-film',
    name: 'Short Film Festival',
    description: 'Create and screen your original short film on themes of innovation and technology.',
    rules: [
      'Team of maximum 6 members',
      'Duration: 10 minutes maximum',
      'Theme: Technology and Human Connection',
      'Submit in MP4 format'
    ],
    prizes: '1st: ₹5000, 2nd: ₹3000, 3rd: ₹1500',
    coordinators: 'AK. Senthil, AL. Sujatha',
    imageUrl: 'https://images.unsplash.com/photo-1675310854573-c5c8e4089426',
    category: 'non_technical',
    fee: 100
  },
  {
    id: 'general-quiz',
    name: 'General Knowledge Quiz',
    description: 'Test your knowledge across various domains in this exciting quiz competition.',
    rules: [
      'Team of 2 members',
      'Topics: GK, current affairs, sports, entertainment',
      'Multiple rounds with different formats',
      'No electronic devices allowed'
    ],
    prizes: '1st: ₹2500, 2nd: ₹1500, 3rd: ₹750',
    coordinators: 'AM. Prasanna, AN. Aishwarya',
    imageUrl: 'https://images.unsplash.com/photo-1675310854573-c5c8e4089426',
    category: 'non_technical'
  }
];