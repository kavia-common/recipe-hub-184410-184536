export const recipes = [
  {
    id: 'r1',
    title: 'Lemon Garlic Salmon',
    time: 25,
    servings: 2,
    calories: 420,
    macros: { protein: 35, carbs: 8, fat: 28 },
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
    tags: ['seafood', 'quick', 'healthy'],
    ingredients: [
      '2 salmon fillets',
      '2 tbsp butter',
      '2 cloves garlic, minced',
      '1 lemon (juice + zest)',
      'Salt and pepper',
      'Fresh parsley'
    ],
    steps: [
      'Pat salmon dry and season with salt and pepper.',
      'Melt butter in a skillet over medium heat, sauté garlic 30s.',
      'Add salmon skin-side down; cook 4–5 min per side.',
      'Finish with lemon juice and zest; garnish with parsley.'
    ],
    description: 'Buttery, bright, and ready in minutes. A weeknight hero.'
  },
  {
    id: 'r2',
    title: 'Creamy Mushroom Pasta',
    time: 30,
    servings: 3,
    calories: 560,
    macros: { protein: 18, carbs: 72, fat: 22 },
    image: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1600&auto=format&fit=crop',
    tags: ['vegetarian', 'comfort', 'pasta'],
    ingredients: [
      '250g pasta',
      '300g mixed mushrooms, sliced',
      '1 small onion, diced',
      '2 cloves garlic, minced',
      '200ml cream',
      'Parmesan, parsley, salt, pepper'
    ],
    steps: [
      'Boil pasta to al dente; reserve 1/2 cup pasta water.',
      'Sauté onion and mushrooms until browned; add garlic.',
      'Add cream and pasta water; simmer until slightly thick.',
      'Toss with pasta, finish with Parmesan and parsley.'
    ],
    description: 'Earthy mushrooms in a luscious cream sauce.'
  },
  {
    id: 'r3',
    title: 'Grilled Chicken Bowl',
    time: 35,
    servings: 2,
    calories: 520,
    macros: { protein: 45, carbs: 50, fat: 16 },
    image: 'https://images.unsplash.com/photo-1604908176997-43162e3c2d34?q=80&w=1600&auto=format&fit=crop',
    tags: ['chicken', 'balanced'],
    ingredients: [
      '2 chicken breasts',
      '1 cup cooked rice or quinoa',
      '1 avocado, sliced',
      'Cherry tomatoes',
      'Olive oil, paprika, garlic powder, salt, pepper'
    ],
    steps: [
      'Season chicken with spices; grill or pan-sear until done.',
      'Slice chicken and assemble bowl with grains and veggies.',
      'Drizzle with olive oil or light dressing.'
    ],
    description: 'A balanced bowl of protein, grains, and healthy fats.'
  },
  {
    id: 'r4',
    title: 'Avocado Toast with Egg',
    time: 10,
    servings: 1,
    calories: 320,
    macros: { protein: 14, carbs: 28, fat: 18 },
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1600&auto=format&fit=crop',
    tags: ['breakfast', 'quick'],
    ingredients: [
      '2 slices sourdough',
      '1 ripe avocado',
      '1 egg (fried or poached)',
      'Lemon juice, chili flakes, salt, pepper'
    ],
    steps: [
      'Toast bread. Mash avocado with lemon, salt, and pepper.',
      'Spread on toast, top with egg and chili flakes.'
    ],
    description: 'Simple and satisfying with creamy avocado and runny yolk.'
  },
  {
    id: 'r5',
    title: 'Mediterranean Salad',
    time: 15,
    servings: 2,
    calories: 280,
    macros: { protein: 10, carbs: 18, fat: 18 },
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1600&auto=format&fit=crop',
    tags: ['salad', 'healthy', 'vegetarian'],
    ingredients: [
      'Cucumber, tomato, red onion',
      'Kalamata olives',
      'Feta cheese',
      'Olive oil, red wine vinegar, oregano, salt, pepper'
    ],
    steps: [
      'Chop veggies and combine with olives.',
      'Whisk dressing; toss and top with feta.'
    ],
    description: 'Bright, zesty, and crisp — a classic Mediterranean mix.'
  },
  {
    id: 'r6',
    title: 'Beef Stir-Fry',
    time: 20,
    servings: 2,
    calories: 490,
    macros: { protein: 32, carbs: 40, fat: 22 },
    image: 'https://images.unsplash.com/photo-1617692855027-61d181781c9b?q=80&w=1600&auto=format&fit=crop',
    tags: ['beef', 'quick', 'asian'],
    ingredients: [
      '250g flank steak, sliced',
      'Mixed bell peppers, sliced',
      'Soy sauce, garlic, ginger, honey',
      'Cornstarch, sesame oil'
    ],
    steps: [
      'Marinate beef in soy, garlic, ginger, honey.',
      'Stir-fry beef; set aside. Stir-fry peppers.',
      'Return beef, add slurry, and finish with sesame oil.'
    ],
    description: 'Tender beef with crisp veggies in a savory glaze.'
  },
  {
    id: 'r7',
    title: 'Tomato Basil Soup',
    time: 40,
    servings: 4,
    calories: 210,
    macros: { protein: 5, carbs: 24, fat: 10 },
    image: 'https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=1600&auto=format&fit=crop',
    tags: ['soup', 'vegetarian', 'comfort'],
    ingredients: [
      'Canned tomatoes',
      'Onion, garlic',
      'Vegetable broth',
      'Fresh basil, cream (optional)',
      'Salt, pepper'
    ],
    steps: [
      'Sauté onion and garlic; add tomatoes and broth.',
      'Simmer 20 min; blend smooth; add basil and cream.'
    ],
    description: 'Silky and comforting with fresh basil aroma.'
  },
  {
    id: 'r8',
    title: 'Veggie Omelette',
    time: 12,
    servings: 1,
    calories: 300,
    macros: { protein: 20, carbs: 6, fat: 22 },
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600&auto=format&fit=crop',
    tags: ['breakfast', 'eggs', 'quick'],
    ingredients: [
      '3 eggs',
      'Spinach, mushrooms, bell peppers',
      'Cheddar cheese',
      'Salt, pepper, butter'
    ],
    steps: [
      'Sauté veggies in butter; set aside.',
      'Cook eggs, add veggies and cheese, fold and serve.'
    ],
    description: 'Fluffy eggs packed with veggies and melty cheese.'
  },
  {
    id: 'r9',
    title: 'Shrimp Tacos',
    time: 18,
    servings: 2,
    calories: 430,
    macros: { protein: 28, carbs: 40, fat: 16 },
    image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1600&auto=format&fit=crop',
    tags: ['seafood', 'tacos'],
    ingredients: [
      '300g shrimp, peeled',
      'Taco seasoning',
      'Tortillas',
      'Slaw mix, lime, cilantro',
      'Sour cream or yogurt'
    ],
    steps: [
      'Season and sear shrimp 2–3 min per side.',
      'Warm tortillas, assemble with slaw and crema.'
    ],
    description: 'Zesty, juicy shrimp with cooling slaw in warm tortillas.'
  },
  {
    id: 'r10',
    title: 'Chocolate Chip Cookies',
    time: 25,
    servings: 16,
    calories: 180,
    macros: { protein: 2, carbs: 24, fat: 8 },
    image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1600&auto=format&fit=crop',
    tags: ['dessert', 'baking'],
    ingredients: [
      '2 cups flour',
      '1 cup sugar',
      '1/2 cup brown sugar',
      '1 cup butter',
      '1 egg',
      '1 cup chocolate chips',
      'Baking soda, salt, vanilla'
    ],
    steps: [
      'Cream butter and sugars; add egg and vanilla.',
      'Mix in dry ingredients; fold chips. Scoop and bake 10–12 min at 180°C.'
    ],
    description: 'Crisp edges, soft centers — classic and crowd-pleasing.'
  }
]
