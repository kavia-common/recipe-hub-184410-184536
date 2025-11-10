import { useEffect, useMemo, useState } from 'react'
import { useTizenKeys } from './hooks/useTizenKeys'
import './index.css'
import { theme } from './theme'
import { StoreProvider, useStore } from './store/store.jsx'
import { recipes as data } from './data/recipes'

// Simple hash router
const routes = {
  home: '#/',
  bookmarks: '#/bookmarks',
  detail: (id) => `#/recipe/${id}`,
}

function useHashRoute() {
  const parse = () => {
    const hash = window.location.hash || '#/'
    if (hash.startsWith('#/recipe/')) {
      const id = hash.replace('#/recipe/', '')
      return { name: 'detail', params: { id } }
    }
    if (hash === '#/bookmarks') return { name: 'bookmarks' }
    return { name: 'home' }
  }
  const [route, setRoute] = useState(parse)
  useEffect(() => {
    const onHash = () => setRoute(parse())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return route
}

function HeaderNav({ active }) {
  const { state, setSearch } = useStore()
  const [value, setValue] = useState(state.search)

  useEffect(() => {
    setValue(state.search)
  }, [state.search])

  return (
    <header className="header" role="banner">
      <div className="brand" aria-label="Application brand">
        <div className="brand-badge" aria-hidden>RB</div>
        <div className="brand-title">Recipe Breeze</div>
      </div>
      <div className="header-search" role="search">
        <input
          aria-label="Search recipes"
          placeholder="Search recipes by title or ingredient..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setSearch(e.target.value)
          }}
        />
      </div>
      <nav className="nav" role="navigation" aria-label="Primary">
        <a href={routes.home} className={`nav-btn ${active==='home' ? 'active':''}`} aria-current={active==='home' ? 'page' : undefined}>Home</a>
        <a href={routes.bookmarks} className={`nav-btn ${active==='bookmarks' ? 'active':''}`} aria-current={active==='bookmarks' ? 'page' : undefined}>Bookmarks</a>
      </nav>
    </header>
  )
}

function BookmarkButton({ id }) {
  const { state, toggleBookmark } = useStore()
  const active = state.bookmarks.has(id)
  return (
    <button
      aria-label={active ? 'Remove bookmark' : 'Add bookmark'}
      className={`bookmark-btn ${active ? 'active' : ''}`}
      onClick={(e) => {
        e.preventDefault()
        toggleBookmark(id)
      }}
    >
      {active ? '★ Bookmarked' : '☆ Bookmark'}
    </button>
  )
}

function RecipeCard({ recipe }) {
  const href = routes.detail(recipe.id)
  return (
    <a href={href} className="card" tabIndex={0} aria-label={`Open ${recipe.title} details`}>
      <div className="card-media">
        <img src={recipe.image} alt={`${recipe.title} photo`} loading="lazy" />
        <span className="card-badge" aria-label={`${recipe.time} minutes`}>{recipe.time}m</span>
      </div>
      <div className="card-body">
        <div className="card-title">{recipe.title}</div>
        <div className="card-meta">
          <span aria-label={`Servings ${recipe.servings}`}>Serves {recipe.servings}</span>
          <BookmarkButton id={recipe.id} />
        </div>
      </div>
    </a>
  )
}

function filterRecipes(recipes, query) {
  if (!query?.trim()) return recipes
  const q = query.toLowerCase()
  return recipes.filter(r => {
    const inTitle = r.title.toLowerCase().includes(q)
    const inTags = r.tags?.some(t => t.toLowerCase().includes(q))
    const inIngredients = r.ingredients?.some(i => i.toLowerCase().includes(q))
    return inTitle || inTags || inIngredients
  })
}

function HomePage() {
  const { state } = useStore()
  const filtered = useMemo(() => filterRecipes(data, state.search), [state.search])

  return (
    <main className="main" role="main">
      <div className="grid" role="list" aria-label="Recipes">
        {filtered.map(r => (
          <div role="listitem" key={r.id}>
            <RecipeCard recipe={r} />
          </div>
        ))}
      </div>
    </main>
  )
}

function BookmarksPage() {
  const { state } = useStore()
  const bookmarked = data.filter(r => state.bookmarks.has(r.id))
  return (
    <main className="main" role="main">
      {bookmarked.length === 0 ? (
        <div className="detail-card" role="status" aria-live="polite">
          No bookmarks yet. Add some favorites from Home.
        </div>
      ) : (
        <div className="grid" role="list" aria-label="Bookmarked recipes">
          {bookmarked.map(r => (
            <div role="listitem" key={r.id}>
              <RecipeCard recipe={r} />
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

function DetailPage({ id }) {
  const { state } = useStore()
  const recipe = data.find(r => r.id === id)
  if (!recipe) {
    return (
      <main className="main">
        <div className="detail-card" role="alert" aria-live="assertive" style={{ borderColor: theme.colors.error }}>
          Recipe not found.
        </div>
      </main>
    )
  }
  const chips = [
    `${recipe.time} min`,
    `${recipe.servings} servings`,
    `${recipe.calories} kcal`
  ]

  return (
    <main className="main">
      <div className="detail">
        <div className="detail-hero" role="img" aria-label={`${recipe.title} hero image`}>
          <img src={recipe.image} alt="" />
          <div className="detail-hero-overlay" />
          <div className="detail-hero-title">
            {recipe.title}
          </div>
        </div>

        <div className="meta-chips" style={{ marginTop: 12 }}>
          {chips.map((c, i) => <span className="chip" key={i}>{c}</span>)}
          <span className="chip" style={{ background:'#FEF3C7', color:'#92400E', borderColor:'#FDE68A' }}>
            Protein {recipe.macros.protein}g
          </span>
          <span className="chip" style={{ background:'#E0F2FE', color:'#075985', borderColor:'#BAE6FD' }}>
            Carbs {recipe.macros.carbs}g
          </span>
          <span className="chip" style={{ background:'#FCE7F3', color:'#9D174D', borderColor:'#FBCFE8' }}>
            Fat {recipe.macros.fat}g
          </span>
          <div style={{ marginLeft: 'auto' }}>
            <BookmarkButton id={recipe.id} />
          </div>
        </div>

        <div className="detail-sections">
          <section className="detail-card" aria-labelledby="ingredients-title">
            <h3 id="ingredients-title">Ingredients</h3>
            <ul className="list">
              {recipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}
            </ul>
          </section>

          <aside className="detail-card" aria-labelledby="nutrition-title">
            <h3 id="nutrition-title">Nutrition</h3>
            <div style={{ display:'grid', gap:10 }}>
              <div>Calories: <strong>{recipe.calories} kcal</strong></div>
              <div>Protein: <strong>{recipe.macros.protein} g</strong></div>
              <div>Carbs: <strong>{recipe.macros.carbs} g</strong></div>
              <div>Fat: <strong>{recipe.macros.fat} g</strong></div>
            </div>
          </aside>
        </div>

        <section className="detail-card" style={{ marginTop: 18 }} aria-labelledby="steps-title">
          <h3 id="steps-title">Steps</h3>
          <ol className="steps">
            {recipe.steps.map((s, idx) => <li key={idx}>{s}</li>)}
          </ol>
        </section>
      </div>
    </main>
  )
}

function AppShell() {
  const route = useHashRoute()

  // Basic remote navigation: LEFT/HOME focus top nav, BACK to home
  useTizenKeys({
    onBack: () => {
      if (window.location.hash !== '#/') window.history.back()
    }
  })

  return (
    <div className="app-shell">
      <HeaderNav active={route.name} />
      {route.name === 'home' && <HomePage />}
      {route.name === 'bookmarks' && <BookmarksPage />}
      {route.name === 'detail' && <DetailPage id={route.params.id} />}
    </div>
  )
}

// PUBLIC_INTERFACE
export default function App() {
  /** Root application wrapped with StoreProvider for state */
  return (
    <StoreProvider>
      <AppShell />
    </StoreProvider>
  )
}
