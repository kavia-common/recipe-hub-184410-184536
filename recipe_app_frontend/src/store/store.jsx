/* eslint-disable react-refresh/only-export-components */
/**
 * PUBLIC_INTERFACE
 * Provides a simple in-memory store with localStorage persistence
 * for bookmarked recipes and exposes actions via React context.
 */
import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const StoreContext = createContext(null)

const ACTIONS = {
  INIT: 'INIT',
  TOGGLE_BOOKMARK: 'TOGGLE_BOOKMARK',
  SET_SEARCH: 'SET_SEARCH'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INIT:
      return { ...state, ...action.payload }
    case ACTIONS.TOGGLE_BOOKMARK: {
      const { id } = action.payload
      const next = new Set(state.bookmarks)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return { ...state, bookmarks: next }
    }
    case ACTIONS.SET_SEARCH:
      return { ...state, search: action.payload }
    default:
      return state
  }
}

const STORAGE_KEY = 'recipe_app_bookmarks_v1'

function loadBookmarks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    const arr = JSON.parse(raw)
    return new Set(Array.isArray(arr) ? arr : [])
  } catch {
    return new Set()
  }
}

function saveBookmarks(set) {
  try {
    const arr = Array.from(set)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr))
  } catch {
    // ignore
  }
}

// PUBLIC_INTERFACE
export function StoreProvider({ children }) {
  /**
   * This provider holds app state:
   * - bookmarks: Set<string> of recipe ids
   * - search: string
   */
  const [state, dispatch] = useReducer(reducer, {
    bookmarks: new Set(),
    search: ''
  })

  // Initialize from localStorage
  useEffect(() => {
    dispatch({ type: ACTIONS.INIT, payload: { bookmarks: loadBookmarks() } })
  }, [])

  // Persist changes
  useEffect(() => {
    saveBookmarks(state.bookmarks)
  }, [state.bookmarks])

  const api = useMemo(() => ({
    state,
    // PUBLIC_INTERFACE
    toggleBookmark: (id) => dispatch({ type: ACTIONS.TOGGLE_BOOKMARK, payload: { id } }),
    // PUBLIC_INTERFACE
    setSearch: (text) => dispatch({ type: ACTIONS.SET_SEARCH, payload: text })
  }), [state])

  return <StoreContext.Provider value={api}>{children}</StoreContext.Provider>
}

// PUBLIC_INTERFACE
export function useStore() {
  /**
   * Access the store API and state.
   */
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
