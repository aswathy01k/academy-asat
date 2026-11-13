export const communityData = {
  heading: 'Your Knowledge Has Value. Share It. Grow With It.',
  subheading: 'At Calmbytes, learning is never a one-way street. When you explain a concept to a peer, write clear study notes, or solve a tricky doubt, you strengthen your own mastery and elevate the entire community.',
  
  pillars: [
    {
      id: 'share-notes',
      title: 'Share Original Notes',
      description: 'Upload your hand-drawn visual diagrams, formula summaries, and mind maps so peers can learn from your unique synthesis.',
      icon: 'FileText',
      badge: 'Student Notes'
    },
    {
      id: 'explain-concepts',
      title: 'Explain In Your Own Words',
      description: 'Break down complex laws, algebraic proofs, or historical events using everyday analogies and intuitive examples.',
      icon: 'MessageSquareQuote',
      badge: 'Concept Voice'
    },
    {
      id: 'peer-doubts',
      title: 'Help Classmates Learn',
      description: 'Step in to answer peer questions on difficult homework topics or exam problems in collaborative study circles.',
      icon: 'HelpCircle',
      badge: 'Peer Support'
    },
    {
      id: 'knowledge-activities',
      title: 'Knowledge-Sharing Sessions',
      description: 'Take part in student spotlight symposiums, debate rooms, and lightning masterclasses hosted by fellow students.',
      icon: 'Users',
      badge: 'Community Circles'
    },
    {
      id: 'create-content',
      title: 'Create Educational Content',
      description: 'Design flashcards, quick quizzes, and bite-sized visual explainers featured across our academy study library.',
      icon: 'Sparkles',
      badge: 'Content Creators'
    },
    {
      id: 'earn-recognition',
      title: 'Earn Academic Recognition',
      description: 'Receive public gratitude badges, peer endorsements, and leadership awards celebrating your intellectual generosity.',
      icon: 'Award',
      badge: 'Value Recognition'
    }
  ],

  // Sample contribution-points system - clearly labeled as an illustrative prototype
  illustrativePointsModel: {
    disclaimer: 'SAMPLE ILLUSTRATIVE SYSTEM — The metrics below demonstrate how community contribution and peer recognition can be structured within the academy. This serves as an illustrative model rather than an active commercial reward system.',
    categories: [
      {
        activity: 'Publishing a Peer-Reviewed Concept Note',
        points: '+50 Pts',
        impact: 'Helps an average of 40+ classmates revise tough topics',
        badge: 'Scholar Creator'
      },
      {
        activity: 'Providing an Accepted Answer to a Peer Query',
        points: '+25 Pts',
        impact: 'Resolves confusion with step-by-step reasoning',
        badge: 'Peer Mentor'
      },
      {
        activity: 'Hosting a 15-Minute Peer Study Sprint',
        points: '+75 Pts',
        impact: 'Facilitates collaborative active recall before tests',
        badge: 'Circle Leader'
      },
      {
        activity: 'Designing a Visual Flashcard Deck',
        points: '+35 Pts',
        impact: 'Provides mnemonic aids for foundational memory',
        badge: 'Visualizer'
      }
    ],
    sampleTiers: [
      { name: 'Observer', threshold: '0 Pts', color: 'slate', desc: 'Active listener exploring ideas' },
      { name: 'Contributor', threshold: '150 Pts', color: 'blue', desc: 'Regularly shares notes and tips' },
      { name: 'Collaborator', threshold: '400 Pts', color: 'indigo', desc: 'Leads study circles and guides peers' },
      { name: 'Calmbytes Fellow', threshold: '1000 Pts', color: 'violet', desc: 'Recognized student scholar and mentor' }
    ]
  },

  sampleStudentExchanges: [
    {
      author: 'Aanya S.',
      grade: 'Class 10',
      topic: 'Physics: Optics & Ray Diagrams',
      message: 'Here is a simple trick to remember concave mirror ray diagrams without memorizing all 6 cases! Think of the focal point as a pivot...',
      upvotes: 38,
      responses: 9,
      tags: ['Light & Reflection', 'Class 10 CBSE/ICSE', 'Ray Tricks']
    },
    {
      author: 'Rohan M.',
      grade: 'Class 8',
      topic: 'Mathematics: Algebraic Identities',
      message: 'Drew a geometric square box to prove why (a+b)² = a² + 2ab + b². When you see the actual area boxes, you will never forget it!',
      upvotes: 52,
      responses: 14,
      tags: ['Algebra', 'Visual Proofs', 'Foundation']
    },
    {
      author: 'Meera D.',
      grade: 'Class 12',
      topic: 'Chemistry: Electrophilic Substitution',
      message: 'Created a mind-map connecting Benzene resonance with carbocation stabilization. Check the PDF sheet attached for quick board revision.',
      upvotes: 64,
      responses: 18,
      tags: ['Organic Chemistry', 'Advanced STEM', 'Mind Map']
    }
  ]
};

