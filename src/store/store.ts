import { create } from 'zustand'

interface Var {
	id: number
	title: string
	completed: boolean
}

interface State {
	variable: Var[]
	loading: boolean
	addSome: (title: string) => void
}

export const useState = create<State>((set) => ({
	variable: [],
	loading: false,
	addSome: (title: string) =>
		set((state) => ({
			variable: [...state.variable, { id: 1, title, completed: false }]
		}))
}))
