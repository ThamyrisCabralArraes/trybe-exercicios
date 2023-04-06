import { REQUEST_SUCCESSFUL }from '../actions/index'
const  initialState = {
  name: '',
	gender: '',
	culture: '',
	born: '',
	died: '',
}

export const reducer = (state = initialState, { type, character }) => {
  switch (type) {

  case REQUEST_SUCCESSFUL:
    return { ...state, ...character }

  default:
    return state
  }
}


