export type Project = {
  number: string
  title: string
  category: string
  year: string
  description: string
  image: string
  alt: string
  layout: 'wide' | 'tall' | 'offset'
  detail: string
}

// Replace these clearly marked studies with Yasmi's own work and details.
export const projects: Project[] = [
  {
    number: '01',
    title: 'The quiet form',
    category: 'Visual study · Sample',
    year: '2025',
    description: 'A study in light, material and the space between objects.',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1600&q=85',
    alt: 'Sculptural wall lamp against a pale green wall',
    layout: 'wide',
    detail: 'A replaceable demonstration study exploring form through everyday objects, soft daylight and deliberate negative space. Swap this text and image for a real project when ready.',
  },
  {
    number: '02',
    title: 'Objects, in passing',
    category: 'Image making · Sample',
    year: '2024',
    description: 'An imagined archive of small things worth keeping.',
    image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1200&q=85',
    alt: 'Quiet still life of a ceramic vessel and branches',
    layout: 'tall',
    detail: 'A replaceable demonstration project about the small rituals and objects that make a place feel personal. No client or real-world project is being represented here.',
  },
  {
    number: '03',
    title: 'A softer system',
    category: 'Art direction · Sample',
    year: '2024',
    description: 'An identity exercise built around simplicity and rhythm.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=82',
    alt: 'Sunlit living room with quiet contemporary forms and natural textures',
    layout: 'offset',
    detail: 'A replaceable demonstration identity study using a restrained palette and a few repeatable visual gestures. The sample title, metadata, description and image can all be edited in src/data.ts.',
  },
]

export const disciplines = [
  'Image making',
  'Visual research',
  'Art direction',
  'Digital experiments',
  'Words & ideas',
]

export const milestones = [
  { year: 'Now', title: 'An open notebook', note: 'A space for current interests and things in progress.' },
  { year: 'Next', title: 'More to come', note: 'Add a milestone when there is a story worth sharing.' },
  { year: 'Always', title: 'Stay curious', note: 'Looking closely, asking better questions, making things.' },
]
