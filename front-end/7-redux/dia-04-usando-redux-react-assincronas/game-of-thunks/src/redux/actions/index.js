export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';

const requestSuccessful = (character) => ({
  type: REQUEST_SUCCESSFUL,
  character,
});

export const fetchCharacter = (personagem) => {
  console.log(personagem);
  return (dispatch) => {
    fetch(`https://anapioficeandfire.com/api/characters?name=${personagem}`)
      .then((response) => response.json())
      .then((data) => dispatch(requestSuccessful(data)));
  };
};
