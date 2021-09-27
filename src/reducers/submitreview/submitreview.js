export const submitreview = (state = { loading: false, error: false }, action) => {
  switch (action.type) {
    case 'SET_SUBMIT_PROF':
      return {...(state.submitreview), prof: action.payload}
    case 'SET_SUBMIT_COURSE':
      return {...(state.submitreview), course: action.payload}
    case 'SET_SUBMIT_CONTENT':
      return {...(state.submitreview), content: action.payload}
    case 'SET_SUBMIT_WORKLOAD':
      return {...(state.submitreview), workload: action.payload}
    case 'RESET_SUBMIT':
      return {}
    case 'SUBMIT_REVIEW_SUCCESS':
      return {...(state.submitreview), loading: false, error: false}
    case 'SUBMIT_REVIEW_FAIL':
      return {...(state.submitreview), loading: false, error: false}
    default:
      return {...state}
  }
}