import { getDeck, saveDeckTitle,addCardToDeckAS} from '../utils/api'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title
  }
}

export function addCardToDeck(deckId, card) {
  return {
    type: ADD_CARD,
    deckId,
    card
  };
}

export function handleInitialData() {
  return (dispatch) => {
    return getDeck().then((decks) => {
      dispatch(receiveDecks(decks))
    })
  }
}

export function addNewDeck(title) {
  return (dispatch) => {
    return saveDeckTitle(title).then(() => dispatch(addDeck(title)))
  }
}

export function  addQuestionToDeck(deckId, card){
  return (dispatch)=>{
    return addCardToDeckAS(deckId, card).then(() => dispatch(addCardToDeck(deckId, card)))
  }
}